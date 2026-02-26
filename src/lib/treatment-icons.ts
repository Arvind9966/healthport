import {
  Heart, Stethoscope, Activity, Syringe, Pill, Shield, Scan, 
  Scissors, Eye, Brain, Bone, Baby, Ear, Microscope, Zap,
  Droplets, Wind, Flame, Target, CircleDot, Sparkles, Ribbon,
  Cross, Waves, Leaf, Moon, Sun, SmilePlus, HandHeart, Scale,
  Smile, type LucideIcon
} from "lucide-react";

// Maps keywords found in sub-treatment names to appropriate icons
const keywordIconMap: [string[], LucideIcon][] = [
  [["heart", "cardiac", "valve", "bypass", "cabg", "asd", "vsd", "tof", "bentall", "angioplasty", "pacemaker", "icd", "tavr", "coronary", "arterial switch"], Heart],
  [["eye", "lasik", "cataract", "retina", "cornea", "glaucoma", "vitrectomy", "ophthal", "lens", "prk", "squint", "oculoplast"], Eye],
  [["brain", "neuro", "cranio", "spine", "spinal", "disc", "lumbar", "cervical", "dbs", "epilepsy", "parkinson", "tumor"], Brain],
  [["bone", "joint", "knee", "hip", "shoulder", "fracture", "ortho", "arthroplasty", "arthroscopy", "ligament", "acl", "meniscus", "osteotomy"], Bone],
  [["baby", "pediatr", "child", "nicu", "neonatal", "congenital"], Baby],
  [["ear", "cochlear", "tympano", "mastoid", "stapedectomy", "hearing"], Ear],
  [["sinus", "septoplasty", "fess", "rhinoplasty", "nose", "nasal", "adenoid", "tonsil"], Wind],
  [["transplant", "liver", "kidney", "pancreas", "organ"], HandHeart],
  [["cancer", "oncol", "chemo", "radiation", "tumor", "lymphoma", "leukaemia", "leukemia", "carcinoma", "mastectomy", "melanoma"], Ribbon],
  [["ivf", "fertility", "embryo", "icsi", "iui", "ovarian", "uterus", "hysterectomy", "gynae", "gyne", "laparoscopic gynae"], Sparkles],
  [["gastric", "bariatric", "weight loss", "sleeve", "roux", "banding", "balloon", "obesity"], Scale],
  [["gall", "appendix", "hernia", "fistula", "hemorrhoid", "pilonidal", "colectomy", "whipple", "fundoplication", "splenectomy"], Scissors],
  [["dental", "tooth", "implant dental", "crown", "veneer", "root canal", "orthodont", "braces", "invisalign", "wisdom"], Smile],
  [["cosmetic", "lipo", "tummy", "facelift", "blepharoplasty", "rhinoplasty", "augment", "reduction", "botox", "filler", "hair transplant", "gynecomastia"], SmilePlus],
  [["skin", "dermat", "laser", "acne", "psoriasis", "vitiligo", "eczema", "chemical peel"], Sparkles],
  [["blood", "bmt", "stem cell", "car-t", "autologous", "allogeneic", "haploidentical", "thalassemia", "aplastic", "sickle"], Droplets],
  [["urology", "prostate", "kidney stone", "lithotripsy", "pcnl", "turp", "cystectomy", "nephrectomy", "ureter", "bladder"], Droplets],
  [["thyroid", "parathyroid", "endocrin", "diabetes", "hormone", "adrenal", "pituitary"], Zap],
  [["pulmon", "lung", "asthma", "copd", "bronch", "thorac", "lobectomy", "pneumo"], Wind],
  [["hepat", "liver"], Flame],
  [["vascular", "varicose", "aneurysm", "dvt", "aortic", "peripheral arterial"], Activity],
  [["wellness", "yoga", "ayurveda", "meditation", "detox", "rejuvenation", "naturopathy"], Leaf],
  [["mental", "psychiatr", "psycholog", "depress", "anxiety", "bipolar", "counsel"], Moon],
  [["health check", "screening", "diagnostic", "preventive", "executive health", "comprehensive"], Scan],
  [["infectious", "infection"], Shield],
  [["stenting", "ablation"], Target],
  [["radiation", "radiotherapy", "cyberknife", "gamma"], CircleDot],
  [["immuno", "biologic"], Microscope],
  [["laryngoscopy", "voice", "throat", "parotid"], Stethoscope],
  [["pain", "management", "injection", "block"], Syringe],
];

export function getSubTreatmentIcon(name: string): LucideIcon {
  const lower = name.toLowerCase();
  for (const [keywords, icon] of keywordIconMap) {
    if (keywords.some(kw => lower.includes(kw))) {
      return icon;
    }
  }
  return Stethoscope; // default fallback
}
