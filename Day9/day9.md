# Day 9: NutriScope Clinical + Patient — AI Nutrition Analytics App
**ABTalks 60-Day Claude Challenge**
**Julia Rehman, DHA, MBA, MHA, MPH, FACHE, eFACHDM**
*Chief Intelligence and Transformation Officer | ACHE VP MENA | ACHDM International Chair*
*Abu Dhabi, UAE*

---

## Challenge Task Completed

1. Read the provided resources.
2. Watched the solution video.
3. Opened Claude — started a new conversation.
4. Pasted Prompt 1 and generated the MVP version of NutriScope.
5. Generated the downloadable HTML application.
6. Saved the generated HTML (`nutriscopedb_mvp.html`).
7. Pasted Prompt 2 to enhance the application.
8. Generated the enhanced version (`nutriscopedb_enhanced.html`).
9. Compared both versions (see comparison notes below).
10. Took screenshots of both applications (see below).
11. Connected USDA FoodData Central live API (patient app).
12. Added CalorieKing deep-link integration (patient app).
13. Added 8-language support: English, Español, العربية, हिन्दी, বাংলা, தமிழ், తెలుగు, اردو — with full RTL for Arabic and Urdu.
14. Created this Day9 folder and `day9.md` file.
15. Uploaded screenshots, HTML files, comparison notes, and key learnings.
16. Committed and pushed changes.
17. Submitted GitHub commit URL.

---

## Deliverables

| File | Description | Version |
|------|-------------|---------|
| `nutriscopedb_mvp.html` | MVP — 20 Indian foods, 10 nutrients, basic dashboard | v1 |
| `nutriscopedb_enhanced.html` | Enhanced — 60 foods, CSV, planner, risk scoring | v2 |
| `nutriscopedb_clinical_final.html` | Clinical tool — GP view, 8 languages, FINDRISC, HbA1c projector | Final |
| `nutriscopedb_patient_final.html` | Patient app — USDA live search, CalorieKing, 8 languages | Final |
| `day9.md` | This documentation file | — |
| `day9_linkedin_post_final.md` | LinkedIn post in Julia's voice | — |
| `day9_final_slide1.html` | Carousel hook slide | — |
| `day9_final_slide2.html` | Carousel: clinical tool features | — |
| `day9_final_slide3.html` | Carousel: patient tool + 8 languages | — |
| `day9_final_slide4.html` | Carousel: the insight — context engineering | — |
| `day9_final_slide5.html` | Carousel: CTA and engagement question | — |
| `day9_patient_screenshot.html` | Patient app mockup at 390×844px (iPhone) | — |
| `day9_clinical_screenshot.html` | Clinical app mockup at 1200×750px (desktop) | — |

---

## Screenshots



**What Prompt 1 produced:**
- Patient demographic inputs (age, gender, height, weight, activity, dietary preference)
- 20-food Indian food database with quick-add
- Manual entry with quantity and unit
- 10-nutrient tracking: calories, protein, carbs, fat, fiber, iron, calcium, Vitamins C/D/B12
- Energy progress ring (canvas)
- Top deficiencies and top excesses panels
- Basic dietary recommendations

---

### Enhanced Version (Prompt 2)


**What Prompt 2 added:**
- 60 foods across three food cultures (American, Indian/South Asian, Arabic/GCC)
- 3 additional micronutrients: Zinc, Magnesium, Potassium
- CSV upload and download with sample file
- Editable inline table rows (contenteditable, instant recalculation)
- 2-day therapeutic meal planner (cuisine-adaptive)
- FINDRISC 10-year diabetes risk scoring (WHO-validated)
- HbA1c trajectory projector (3-month estimate, Evert et al. 2019)
- Metformin B12 auto-flag (ADA 2024 requirement)
- Clinical alerts panel
- GP/Specialist summary view
- Glycemic Load tracking per food and daily total

---



---

## Version Comparison Notes

| Feature | MVP | Enhanced | Final |
|---------|-----|----------|-------|
| Foods | 20 (Indian only) | 60 (3 cultures) | 60+ (3 cultures) |
| Nutrients tracked | 10 | 13 | 13 |
| Languages | 1 (English) | 1 (English) | 8 (EN/ES/AR/HI/BN/TA/TE/UR) |
| RTL support | No | No | Yes (Arabic, Urdu) |
| USDA live search | No | No | Yes (patient app) |
| CalorieKing integration | No | No | Yes (deep-link + manual entry) |
| FINDRISC scoring | No | Yes | Yes |
| HbA1c projector | No | Yes | Yes |
| Metformin B12 flag | No | Yes | Yes |
| GP summary view | No | Yes | Yes |
| Meal planner | No | Yes | Yes |
| Audience | Patient | Clinical | Clinical + Patient (2 separate apps) |
| Code written by hand | 0 lines | 0 lines | 0 lines |

---

## Food Database

### Indian / South Asian (25 foods)
All 20 required (rice, roti, dal moong, dal masoor, paneer, curd low-fat, chana, rajma, banana, apple, milk, oats, bread, egg, chicken, fish, potato, poha, idli, dosa) + karela (bitter gourd), amla, methi seeds, spinach, methi roti.

### American (15 foods)
Oatmeal, egg whites, grilled chicken, sweet potato, salad greens, Greek yogurt, salmon, black beans, blueberries, quinoa, almonds, avocado, broccoli, brown rice, turkey breast.

### Arabic / GCC (20 foods)
Kabsa, hummus, grilled hamour, labneh, lentil soup, fattoush, whole wheat khubz, grilled lamb, dates, zaatar, foul medames, tabbouleh, freekeh, grape leaves, shanklish, falafel, mulukhiyah, ful nabed, stuffed cabbage, arugula salad.

---

## Clinical Differentiators

**Metformin B12 auto-flag:** Fires the moment metformin is selected in the medications field. ADA 2024 requires annual serum B12 monitoring for all long-term metformin users. This is routinely missed in busy outpatient clinics. The flag fires because the clinical context — patient population, regulatory standard, common medication — was embedded in the prompt. Context engineering did the work.

**Karela (bitter gourd):** Featured prominently as a primary therapeutic food in Indian and Arabic/GCC cuisine sections. Research supports karela as a natural food that helps manage blood sugar. Underused in clinical dietary counseling across the region.

**Vitamin D — GCC/Indian context:** Deficiency prevalence exceeds 60% in these populations. Worsens insulin resistance. App recommends hamour and salmon as region-first food sources. This is not a generic recommendation. It was produced because the clinical population was specified.

**Cuisine-specific therapeutic swaps:**
- Kabsa → Freekeh (GI 65 → 43)
- White roti → Methi roti (GI 62 → 48, lower glycemic load)
- Dosa → Idli (GI 69 → 46)
- White rice → Brown rice (GI 73 → 50)

**FINDRISC:** WHO-validated. Lindström & Tuomilehto 2003. Not a custom algorithm. Component scores displayed individually for clinical transparency.

**8-language engine:** English, Español, العربية, हिन्दी, বাংলা, தமிழ், తెలుగு, اردو. Full RTL layout applied automatically for Arabic and Urdu. Language-appropriate font stacks (Naskh Arabic, Devanagari, Tamil, Telugu). Spanish included for the US Hispanic patient population — the largest and fastest-growing diabetes-affected demographic in the United States.

---

## External Integrations

**USDA FoodData Central (live, browser-callable):**
- Endpoint: `https://api.nal.usda.gov/fdc/v1/foods/search`
- Default key: `DEMO_KEY` (30 requests/hour)
- Free registered key: 1,000 requests/hour at `fdc.nal.usda.gov/api-key-signup`
- Returns: calories, protein, carbs, fat, fiber, iron, calcium, Vitamins C/D/B12, zinc, magnesium, potassium per 100g
- CORS-enabled — works directly from browser with no backend
- Same database that powers MyPlate.gov

**CalorieKing (deep-link integration):**
- Their API requires a commercial key and server-side proxy — not compatible with a client-side HTML file
- Integration: search bar builds a direct URL to `calorieking.com/us/en/foods/search?keywords=X`
- Patient views full nutrition data on CalorieKing's website, then enters values into a quick-add form in the app
- Manual entry form accepts: food name, calories/100g, protein, carbs, fat, fiber

---

## Key Learnings

**01. Context is not optional information — it is the intelligence layer.**
I did not ask Claude to build a nutrition tracker. I described the clinical population (T2DM, obesity, ADA 2024), the three food cultures, the end users (GP and patient), and the gap in existing tools for this population. That specificity is why the output was clinical-grade. Generic prompts produce generic outputs. Precision inputs produce clinical-grade outputs.

**02. Iterative development produces better AI applications than single-prompt builds.**
MVP first. Stable data architecture and clinical logic established. Then enhance on a solid foundation. Same methodology professional engineers use. AI amplifies the discipline — it does not replace it.

**03. The patient and the clinician need different interfaces to the same data.**
The GP needs HbA1c trajectory and FINDRISC scores. The patient needs a score out of 100. Same food database. Same clinical logic. Completely different design decisions and communication register. Building both in a single session forced a clear analysis of the communication gap in healthcare that technology has not yet closed.

**04. Language is not a translation task — it is a clinical equity task.**
Adding 8 languages is not cosmetic. A patient in Abu Dhabi who speaks Urdu or Arabic, a patient in Tamil Nadu who speaks Tamil, a patient in Houston who speaks Spanish — these patients interact with clinical tools in English today because that is what exists. Building language support into a clinical tool from the first session changes that. It took one additional prompt.

---

## References

- American Diabetes Association. Standards of Care in Diabetes 2024. *Diabetes Care* 47(Suppl 1)
- Evert AB, et al. Nutrition Therapy for Adults with Diabetes or Prediabetes. *Diabetes Care.* 2019;42(5):731–754
- Lindström J, Tuomilehto J. The Diabetes Risk Score. *Diabetes Care.* 2003;26(3):725–731
- USDA FoodData Central: fdc.nal.usda.gov
- National Institute of Nutrition, India (NIN/ICMR) — Dietary Reference Values
- Atkinson FS, et al. International GI and GL Tables. *Am J Clin Nutr.* 2021
- WHO/FAO Dietary Reference Intakes
- CalorieKing Food Database: calorieking.com

---

*ABTalks 60-Day Claude Challenge — Day 9 of 60*
*Built in public. Documented in public.*
*@Anthropic @ABTalksOnAI @AnilBajpai*
*#60DayClaudeChallenge #HealthcareAI #DiabetesCare #ADA2024 #GCCHealth #DigitalHealth*
