Day 9 of 60.

I built two applications today, not one.

A clinical-grade nutrition analytics tool for GPs managing diabetes and obesity patients. And a companion app for the patient sitting across from that doctor.

Same database. Same clinical logic. Two completely different interfaces. And now, eight languages.

Here is what the clinical tool does that no generic nutrition app would think to build.

The moment a clinician selects Metformin as the patient's medication, the app flags it for annual B12 monitoring. This is an ADA 2024 requirement. It fires automatically because I told Claude who the patient was, what medications they were on, and what standard of care applied. The clinical context did the work. Not the prompt alone.

The FINDRISC 10-year diabetes risk score is built in. WHO-validated. Not a custom algorithm. Because precision matters when you are screening real patients.

The food database covers 60 foods across three cultures: American, Indian/South Asian, and Arabic/GCC. Your patient in Abu Dhabi is not eating brown rice and steamed broccoli. They are eating kabsa, methi roti, and labneh. The tool knows the glycemic index of freekeh. It knows karela lowers post-meal glucose. It knows Vitamin D deficiency exceeds 60% in GCC and Indian populations and worsens insulin resistance.

That is not a feature list. That is clinical relevance.

Today I also connected the patient app to the USDA FoodData Central API. 300,000 foods, searchable live, the same database that powers MyPlate.gov. No backend. A patient types "labneh" and gets real nutritional data instantly. And I added a CalorieKing lookup for branded foods and restaurant items.

Then I built the language engine.

Eight languages: English, Español, العربية, हिन्दी, বাংলা, தமிழ், తెలుగు, اردو.

Full RTL layout for Arabic and Urdu, language-specific font rendering for Devanagari, Tamil, and Telugu scripts. Spanish is included for the US Hispanic patient population, the largest diabetes-affected demographic in the United States.

I did not add languages as a cosmetic feature. A patient who speaks Tamil or Urdu or Spanish navigates clinical tools in English today because that is what has been built. That is a clinical equity problem. It took one additional prompt to address it.

Three things Day 9 taught me.

01. Context engineering is the discipline that separates a demo from a deployable tool. I described the patient population, the regulatory standard, three food cultures, two end users, and the gap in current tools. That specificity is why the output was clinical-grade. The model already knew the ADA 2024 Metformin B12 requirement. The clinical context unlocked it.

02. Iterative development produces better AI applications than single-prompt builds. MVP first. Stable architecture. Then enhance. Same methodology professional engineers use. AI amplifies the workflow, it does not replace it.

03. Language is not a translation task. It is a health equity task. The same data, in the patient's language, changes what healthcare can do for the patient. It took one prompt. There is no excuse for healthcare AI that only works in English.

Two HTML files. No backend. No login. A GP could open this on a tablet in a clinic in Riyadh, Nashville, or Chennai in under five seconds.

GitHub link in comments.

What clinical workflow in your health system do you think is most ready to be transformed by AI-generated tools today?

Building in public. Learning in public. 60 days with Claude.

@Anthropic @ABTalksOnAI @AnilBajpai

#60DayClaudeChallenge #HealthcareAI #DiabetesCare #DigitalHealth #ADA2024 #GCCHealth #ClinicalAI #NutritionAnalytics #T2DM #MedicalNutritionTherapy #HealthcareLeadership #HealthEquity #Multilingual #FACHE
