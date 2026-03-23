import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "already" | "error" | "success">("loading");

  useEffect(() => {
    if (!token) { setStatus("error"); return; }
    const validate = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } }
        );
        const data = await res.json();
        if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("error");
      } catch { setStatus("error"); }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="font-display text-2xl sm:text-3xl text-foreground">Email Preferences</h1>
        {status === "loading" && <p className="text-muted-foreground">Verifying...</p>}
        {status === "valid" && (
          <>
            <p className="text-muted-foreground">Click below to unsubscribe from HealthRoop emails.</p>
            <button onClick={handleUnsubscribe} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
              Confirm Unsubscribe
            </button>
          </>
        )}
        {status === "success" && <p className="text-muted-foreground">You've been unsubscribed successfully.</p>}
        {status === "already" && <p className="text-muted-foreground">You're already unsubscribed.</p>}
        {status === "error" && <p className="text-destructive">Invalid or expired link.</p>}
      </div>
    </div>
  );
};

export default Unsubscribe;
