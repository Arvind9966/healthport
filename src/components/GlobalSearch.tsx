import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { treatments } from "@/data/treatments";

type SearchResult = {
  type: "treatment" | "sub-treatment" | "condition" | "hospital";
  label: string;
  detail?: string;
  link: string;
};

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const searchIndex = useMemo(() => {
    const items: SearchResult[] = [];
    const hospitalSet = new Set<string>();

    treatments.forEach((t) => {
      // Treatment → its page
      items.push({ type: "treatment", label: t.name, link: `/treatment/${t.slug}` });

      // Sub-treatments → treatment page scrolled to sub-treatments section
      t.subTreatments.forEach((sub) => {
        items.push({ type: "sub-treatment", label: sub.name, detail: t.name, link: `/treatment/${t.slug}#sub-treatments` });
      });

      // Conditions → treatment page scrolled to conditions section
      t.conditions.forEach((c) => {
        items.push({ type: "condition", label: c, detail: t.name, link: `/treatment/${t.slug}#conditions` });
      });

      // Hospitals → hospitals page scrolled to that hospital
      t.topHospitals.forEach((h) => {
        if (!hospitalSet.has(h)) {
          hospitalSet.add(h);
          items.push({ type: "hospital", label: h, link: `/hospitals#${slugify(h)}` });
        }
      });
    });

    return items;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter((item) => item.label.toLowerCase().includes(q) || item.detail?.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, searchIndex]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setQuery(""); }
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    setQuery("");

    const [path, hash] = result.link.split("#");
    navigate(path);

    // Scroll to hash element after navigation
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const typeLabel: Record<string, string> = {
    treatment: "Treatment",
    "sub-treatment": "Procedure",
    condition: "Condition",
    hospital: "Hospital",
  };

  const typeColor: Record<string, string> = {
    treatment: "bg-primary/10 text-primary",
    "sub-treatment": "bg-violet-500/10 text-violet-600",
    condition: "bg-emerald-500/10 text-emerald-600",
    hospital: "bg-amber-500/10 text-amber-600",
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-xl hover:bg-muted transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-foreground/70" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
          <div className="w-[90vw] max-w-lg bg-background rounded-2xl border border-border shadow-2xl overflow-hidden animate-scale-in">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search treatments, hospitals, conditions…"
                className="flex-1 bg-transparent outline-none text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={() => { setOpen(false); setQuery(""); }} className="p-1 rounded-lg hover:bg-muted transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">No results found</p>
              )}
              {results.map((r, i) => (
                <button
                  key={`${r.type}-${r.label}-${i}`}
                  onClick={() => handleSelect(r)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border/20 last:border-0 text-left"
                >
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${typeColor[r.type]}`}>
                    {typeLabel[r.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{r.label}</p>
                    {r.detail && <p className="text-xs text-muted-foreground truncate">{r.detail}</p>}
                  </div>
                </button>
              ))}
              {!query.trim() && (
                <p className="text-xs text-muted-foreground text-center py-6">Start typing to search…</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
