import React from 'react';
import Day from './Day';

// Complete study plan based on the original .txt file
const studyPlan = {
  // Week 1: Foundations and Calculations Focus
  1: [
    "Read and review Chapter 1: Overview of NAPLEX",
    "Start Chapter 2: Math Basics (focus on unit conversions, rounding, and significant figures)",
    "Practice 20-30 calculations questions",
  ],
  2: [
    "Finish Chapter 2: Math Basics (focus on proportions, dimensional analysis)",
    "Practice 20-30 calculation questions",
  ],
  3: [
    "Review Chapter 3: Calculations II: Compounding (focus on dilutions, concentrations)",
    "Practice 20-30 related questions",
  ],
  4: [
    "Chapter 4: Pharmacokinetics (focus on calculating half-life, clearance, bioavailability)",
    "Practice 15-20 questions on pharmacokinetics",
  ],
  5: [
    "Continue with Chapter 4: Pharmacokinetics (finish calculations related to volume of distribution, steady state)",
    "Practice 15-20 questions",
  ],
  6: [
    "Catch up on any unfinished chapters or questions from the week",
    "Review calculations",
    "Take a 50-question quiz focusing on calculations",
  ],
  7: ["Rest Day"],

  // Week 2: Clinical Knowledge with Continued Calculations
  8: [
    "Read Chapter 5: Drug Formulations and Routes of Administration",
    "Review Chapter 6: Drug Interactions",
    "20 calculation questions related to drug dosages",
  ],
  9: [
    "Review Chapter 7: Pharmacogenomics",
    "Focus on equations specific to pharmacogenomics",
    "20 pharmacogenomic-related questions",
  ],
  10: [
    "Review Chapter 8: Biostatistics (focus on confidence intervals, odds ratios, number needed to treat)",
    "10 biostatistics practice questions",
  ],
  11: [
    "Review Chapter 9: Compounding Non-Sterile Preparations",
    "Practice calculations related to non-sterile compounding (e.g., aliquots)",
    "20-30 related practice questions",
  ],
  12: [
    "Review Chapter 10: Sterile Compounding",
    "Focus on osmolarity and isotonicity calculations",
    "20-30 related practice questions",
  ],
  13: [
    "Review any previous topics or calculations that are unclear",
    "Take a 50-question quiz (mix of clinical and calculation questions)",
  ],
  14: ["Rest Day"],

  // Week 3: Clinical Practice and Advanced Calculations
  15: [
    "Review Chapter 11: Hypertension",
    "Focus on dosing adjustments and calculations for hypertensive medications",
    "15-20 related practice questions",
  ],
  16: [
    "Review Chapter 12: Heart Failure",
    "Focus on drug interactions, dosing, and calculations",
    "15-20 related practice questions",
  ],
  17: [
    "Review Chapter 13: Anticoagulation",
    "Focus on calculating INR adjustments and dosing",
    "15-20 related practice questions",
  ],
  18: [
    "Review Chapter 14: Infectious Diseases I",
    "Focus on antibiotic dosing, renal adjustments, and calculations",
    "15-20 related practice questions",
  ],
  19: [
    "Review Chapter 15: Infectious Diseases II",
    "Focus on dosing, renal and hepatic adjustments",
    "20 practice questions",
  ],
  20: [
    "Review key calculations from the week",
    "Take a 50-question quiz (focus on disease management and calculations)",
  ],
  21: ["Rest Day"],

  // Week 4: Mixed Review and Intensive Calculations
  22: [
    "Review Chapter 16: Endocrinology (Diabetes Management)",
    "Focus on insulin dosing, carb ratios, correction factors",
    "20 calculation questions",
  ],
  23: [
    "Review Chapter 17: Oncology",
    "Focus on body surface area (BSA) calculations, dosing of chemotherapy agents",
    "20-30 related questions",
  ],
  24: [
    "Review Chapter 18: Immunizations",
    "Focus on age-appropriate dosing calculations",
    "10 practice questions",
  ],
  25: [
    "Review Chapter 19: Pain Management",
    "Focus on opioid conversion calculations",
    "20-30 practice questions",
  ],
  26: [
    "Review Chapter 20: HIV",
    "Focus on drug interactions and dose adjustments",
    "20 practice questions",
  ],
  27: [
    "Catch up on anything missed or unclear",
    "Review all calculation-based chapters",
    "Take a 75-question quiz, with half of it focused on calculations",
  ],
  28: ["Rest Day"],

  // Week 5: Final Review and Practice
  29: [
    "Review calculations from Chapter 21: Renal Disease",
    "Practice 20-30 renal dosing questions",
  ],
  30: [
    "Review calculations from Chapter 22: Hepatic Disease",
    "Focus on dose adjustments for hepatic impairment",
    "15-20 related questions",
  ],
  31: [
    "Take a full-length practice exam (focus on finishing within time)",
    "Review incorrect answers and focus on calculation mistakes",
  ],
  32: [
    "Review any topics or chapters where you felt weak during the practice exam",
    "Practice 20 additional calculation questions",
  ],
  33: [
    "Quick review of Chapter 23: Geriatrics and Chapter 24: Pediatrics",
    "Practice pediatric dosing calculations",
    "Take a 50-question practice test with heavy calculation focus",
  ],
  34: [
    "Take another full-length practice exam",
    "Review incorrect answers",
  ],
  35: ["Rest Day"],
};

const Calendar = ({ startDate }) => {
  const weeks = [1, 2, 3, 4, 5];

  return (
    <div className="calendar grid grid-cols-7 gap-4">
      {weeks.map((week) =>
        [...Array(7)].map((_, i) => (
          <Day
            key={`${week}-${i}`}
            day={i + 1}
            week={week}
            startDate={startDate}
            tasksForTheDay={studyPlan[(week - 1) * 7 + i + 1] || []} // Provide tasks for each day
          />
        ))
      )}
    </div>
  );
};

export default Calendar;
