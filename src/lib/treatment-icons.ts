import {
  Heart, Stethoscope, Activity, Syringe, Pill, Shield, Scan,
  Scissors, Eye, Brain, Bone, Baby, Ear, Microscope, Zap,
  Droplets, Wind, Flame, Target, CircleDot, Sparkles, Ribbon,
  Waves, Leaf, Moon, Sun, SmilePlus, HandHeart, Scale,
  Smile, Dumbbell, Apple, Gauge, Clock, FlaskConical, Radar,
  Footprints, CircleUser, HeartPulse, Laptop, TreePine, ScanLine,
  Gem, Star, Cylinder, Orbit, Unplug, BicepsFlexed, Podcast,
  Combine, Aperture, Slice, CircleCheck, SquareActivity,
  type LucideIcon
} from "lucide-react";

// Highly specific mapping — order matters: first match wins.
const keywordIconMap: [string[], LucideIcon][] = [
  // Cardiac - differentiated per procedure
  [["heart valve", "mvr", "mitral valve"], HeartPulse],
  [["heart bypass", "cabg", "bypass surgery"], Activity],
  [["heart transplant"], HandHeart],
  [["tetralogy", "tof"], Gauge],
  [["vsd closure"], CircleDot],
  [["asd closure"], CircleCheck],
  [["bentall"], Cylinder],
  [["arterial switch", "aso"], Orbit],
  [["angioplasty", "stenting"], Target],
  [["pacemaker"], Zap],
  [["icd implant"], Unplug],
  [["tavr"], Aperture],
  [["cardiac ablation", "ablation"], Radar],
  [["coronary artery angiography", "cag", "angiography"], ScanLine],
  [["heart", "cardiac"], Heart],

  // ENT - differentiated
  [["cochlear"], Podcast],
  [["parotid"], CircleUser],
  [["tympanoplasty"], Ear],
  [["septoplasty", "deviated"], Wind],
  [["fess", "sinus"], Wind],
  [["tonsil"], Scissors],
  [["adenoid"], Scissors],
  [["stapedectomy"], Ear],
  [["mastoid"], Ear],
  [["laryngoscopy", "voice", "throat"], Stethoscope],

  // Eye - differentiated
  [["cataract", "phaco"], Eye],
  [["lasik", "femto-lasik"], Scan],
  [["icl", "collamer"], Gem],
  [["vitrectomy", "vitreoretinal"], Microscope],
  [["corneal transplant", "cornea"], CircleDot],
  [["glaucoma"], Gauge],
  [["retinal detach"], FlaskConical],
  [["squint"], Eye],
  [["oculoplast"], SmilePlus],
  [["prk", "photorefractive"], Sparkles],
  [["eye", "ophthal", "lens"], Eye],

  // Brain / Neuro Sciences - differentiated
  [["brain tumour", "brain tumor"], Brain],
  [["deep brain stimulation", "dbs"], Zap],
  [["gamma knife"], CircleDot],
  [["cyberknife"], Target],
  [["aneurysm clip"], Scissors],
  [["aneurysm coil"], Orbit],
  [["vp shunt", "hydrocephalus"], Droplets],
  [["craniotomy"], Brain],
  [["microvascular decompression"], Microscope],
  [["epilepsy surgery", "epilepsy"], Zap],
  [["endoscopic brain"], Scan],

  // Neurology
  [["stroke", "thrombolysis"], HeartPulse],
  [["thrombectomy"], Activity],
  [["botox for migraine", "migraine", "botox"], Syringe],
  [["emg", "nerve conduction"], ScanLine],
  [["eeg"], Radar],
  [["multiple sclerosis"], Shield],
  [["parkinson"], Brain],

  // Spine - differentiated
  [["microdiscectomy"], Slice],
  [["spinal fusion", "fusion"], Combine],
  [["artificial disc"], Cylinder],
  [["scoliosis"], BicepsFlexed],
  [["laminectomy"], Scissors],
  [["kyphoplasty", "vertebroplasty"], Bone],
  [["endoscopic spine"], Scan],
  [["cervical disc"], Cylinder],
  [["spinal cord stimulator"], Zap],
  [["spine", "spinal", "disc", "lumbar", "cervical"], Bone],

  // Orthopedics - differentiated
  [["total knee", "knee replacement"], Bone],
  [["robotic knee"], Laptop],
  [["total hip", "hip replacement"], Footprints],
  [["acl reconstruction", "acl"], BicepsFlexed],
  [["shoulder replacement"], Dumbbell],
  [["revision joint"], Bone],
  [["meniscus"], CircleDot],
  [["rotator cuff"], Dumbbell],
  [["fracture", "orif"], Bone],
  [["limb lengthening"], Footprints],
  [["ankle replacement"], Footprints],
  [["arthroscopy"], Scan],
  [["bone", "joint", "ortho", "arthroplasty"], Bone],

  // Bariatric
  [["appendix", "appendectomy"], Scissors],
  [["pancreas transplant"], HandHeart],
  [["gastric sleeve", "sleeve"], Scale],
  [["roux-en-y", "gastric bypass", "mini gastric"], Scale],
  [["gastric balloon", "balloon"], Scale],
  [["gastric banding", "banding"], Scale],
  [["weight loss", "bariatric", "obesity"], Scale],

  // General & Laparoscopic
  [["gall bladder", "cholecystectomy"], Scissors],
  [["hernia"], Scissors],
  [["fistula"], Scissors],
  [["thyroidectomy", "thyroid"], Zap],
  [["mastectomy"], Ribbon],
  [["splenectomy"], FlaskConical],
  [["colectomy"], Scissors],
  [["whipple"], Scissors],
  [["hemorrhoid"], Scissors],
  [["pilonidal"], Scissors],
  [["fundoplication", "nissen"], Scissors],

  // Transplant - differentiated
  [["kidney transplant"], HandHeart],
  [["liver transplant", "living donor liver", "deceased donor liver"], HandHeart],
  [["lung transplant"], Wind],
  [["pancreas transplant", "kidney-pancreas"], HandHeart],
  [["transplant", "organ"], HandHeart],

  // Oncology - differentiated
  [["breast cancer"], Ribbon],
  [["lung cancer"], Wind],
  [["prostate cancer"], Target],
  [["colorectal cancer"], Scissors],
  [["head & neck cancer", "head and neck"], Stethoscope],
  [["chemotherapy", "chemo"], Pill],
  [["radiation therapy", "imrt", "radiotherapy"], CircleDot],
  [["immunotherapy"], Shield],
  [["pet-ct", "pet scan"], Scan],
  [["bone marrow biopsy"], Syringe],
  [["liver cancer", "tace"], Flame],
  [["cancer", "oncol", "tumor", "tumour", "carcinoma"], Ribbon],

  // Infertility - differentiated
  [["ivf", "in vitro"], Sparkles],
  [["icsi"], Microscope],
  [["iui", "intrauterine insemination"], Syringe],
  [["frozen embryo", "fet"], FlaskConical],
  [["pgt", "preimplantation"], Scan],
  [["egg donation"], Star],
  [["micro-tese", "tese"], Microscope],
  [["hysteroscopy"], Scan],
  [["myomectomy", "fibroid"], Scissors],
  [["fertility", "embryo"], Sparkles],

  // Nephrology & Urology - differentiated
  [["robotic prostatectomy", "prostatectomy"], Laptop],
  [["laser lithotripsy", "lithotripsy"], Zap],
  [["rirs", "retrograde"], Scan],
  [["pcnl"], Target],
  [["eswl", "shockwave"], Waves],
  [["nephrectomy"], Scissors],
  [["dialysis"], Droplets],
  [["av fistula"], Activity],
  [["ureteral stent", "stent placement"], Cylinder],
  [["holep"], Zap],
  [["radical cystectomy", "cystectomy"], Scissors],
  [["turp"], Target],
  [["ureteroscopy"], Scan],
  [["penile implant"], Syringe],
  [["varicocele"], Activity],
  [["circumcision"], Scissors],
  [["urethroplasty"], Scissors],
  [["kidney stone"], Zap],
  [["kidney", "renal", "nephro"], Droplets],
  [["urology", "prostate", "bladder", "ureter"], Droplets],

  // Hepatology
  [["hepatitis c", "daa"], Pill],
  [["tare", "radioembolization"], CircleDot],
  [["liver resection"], Scissors],
  [["hepatitis b"], Shield],
  [["liver biopsy"], Syringe],
  [["hepat", "liver"], Flame],

  // Haematology & BMT
  [["autologous"], FlaskConical],
  [["allogeneic"], Combine],
  [["haploidentical"], Combine],
  [["car-t"], Shield],
  [["stem cell"], Sparkles],
  [["leukaemia", "leukemia"], Droplets],
  [["lymphoma"], Ribbon],
  [["thalassemia bmt", "thalassemia"], Droplets],
  [["aplastic"], Droplets],
  [["blood", "bmt"], Droplets],

  // OB/GYN - differentiated
  [["hysterectomy"], Scissors],
  [["c-section", "caesarean"], Baby],
  [["ovarian cyst"], CircleDot],
  [["endometriosis"], Ribbon],
  [["cervical cerclage"], Shield],
  [["pelvic floor"], BicepsFlexed],
  [["uterine polyp"], Microscope],
  [["ovarian", "uterus", "gynae", "gyne"], Sparkles],

  // Paediatrics
  [["pediatric cardiac", "paediatric cardiac"], Heart],
  [["neonatal intensive", "nicu"], Baby],
  [["pediatric bmt", "paediatric bmt"], Droplets],
  [["pediatric neuro", "paediatric neuro"], Brain],
  [["cleft lip", "cleft palate"], SmilePlus],
  [["pediatric ortho", "paediatric ortho"], Bone],
  [["pediatric urology", "paediatric urology"], Droplets],
  [["pediatric liver", "paediatric liver"], Flame],
  [["pediatr", "paediatr", "child", "neonatal"], Baby],

  // Dental - differentiated
  [["single dental implant", "dental implant"], Smile],
  [["all-on-4"], Smile],
  [["all-on-6"], Smile],
  [["veneer"], Gem],
  [["root canal"], Stethoscope],
  [["dental crown", "crown", "zirconia"], Star],
  [["teeth whitening", "whitening"], Sun],
  [["dental bridge", "bridge"], Combine],
  [["full mouth rehabilitation", "full mouth"], Smile],
  [["wisdom tooth"], Scissors],
  [["invisalign", "braces", "orthodont"], Sparkles],
  [["gum surgery", "gum"], Scissors],
  [["dental", "tooth"], Smile],

  // Hair Transplant - differentiated
  [["fue hair", "fue"], Sparkles],
  [["dhi hair", "dhi"], Sparkles],
  [["fut hair", "fut"], Scissors],
  [["beard transplant", "beard"], CircleUser],
  [["eyebrow transplant", "eyebrow"], Eye],
  [["prp hair", "prp"], Syringe],
  [["scalp micropigmentation", "micropigmentation"], CircleDot],
  [["female hair transplant"], Sparkles],
  [["hair transplant"], Sparkles],

  // Plastic / Cosmetic - differentiated
  [["rhinoplasty", "nose job"], Wind],
  [["facelift"], SmilePlus],
  [["breast augmentation"], Star],
  [["breast reduction"], Scissors],
  [["liposuction", "lipo"], Flame],
  [["tummy tuck", "abdominoplasty"], Scale],
  [["blepharoplasty", "eyelid"], Eye],
  [["mommy makeover"], Sparkles],
  [["brazilian butt", "bbl"], Star],
  [["gynecomastia"], Scissors],
  [["scar revision"], Sparkles],
  [["arm lift", "brachioplasty"], Dumbbell],
  [["filler"], Syringe],
  [["cosmetic", "aesthetic"], SmilePlus],

  // Infectious Disease
  [["mdr-tb", "tuberculosis"], Shield],
  [["hiv"], Shield],
  [["tropical disease"], Leaf],
  [["fungal infection"], Microscope],
  [["sepsis"], HeartPulse],
  [["post-covid", "covid"], Wind],
  [["infectious", "infection"], Shield],

  // General Medicine
  [["comprehensive health", "health check"], Scan],
  [["diabetes management", "diabetes"], Pill],
  [["executive health"], Scan],
  [["hypertension management", "hypertension"], HeartPulse],
  [["preventive health"], Shield],
  [["screening", "diagnostic"], Scan],

  // Vascular - differentiated
  [["aortic aneurysm", "evar", "open aortic"], Activity],
  [["peripheral angioplasty"], Target],
  [["carotid endarterectomy", "carotid"], Activity],
  [["varicose vein", "varicose"], Waves],
  [["dvt", "deep vein"], Droplets],
  [["diabetic foot"], Footprints],
  [["vascular", "aneurysm"], Activity],

  // Wellness - differentiated
  [["panchakarma"], Leaf],
  [["yoga", "meditation"], Sun],
  [["naturopathy"], TreePine],
  [["ayurvedic rejuvenation", "ayurveda"], Leaf],
  [["stress management", "stress"], Moon],
  [["wellness", "detox", "rejuvenation"], Leaf],

  // Neuro-Wellness - differentiated
  [["neuro-rehabilitation", "neuro rehabilitation"], Brain],
  [["cognitive enhancement", "cognitive"], Brain],
  [["mental health retreat", "mental health"], Moon],
  [["neurofeedback"], Radar],
  [["mindfulness", "mbsr"], Sun],
  [["brain health check"], Scan],
  [["mental", "psychiatr", "psycholog", "depress", "anxiety"], Moon],

  // General fallbacks
  [["pain", "management", "injection", "block"], Syringe],
  [["radiation", "radiotherapy"], CircleDot],
  [["immuno", "biologic"], Microscope],
  [["endocrin", "hormone", "adrenal", "pituitary"], Zap],
  [["pulmon", "lung", "asthma", "copd", "bronch", "thorac"], Wind],
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
