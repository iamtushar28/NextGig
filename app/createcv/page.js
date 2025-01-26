"use client";
import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import EducationDetails from "./components/EducationDetails";
import ProjectsDetails from "./components/ProjectsDetails";
import CertificationDetails from "./components/CertificationDetails";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 5 ? prevStep + 1 : prevStep));
  }; //go to next form

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  }; //go to previous form

  // form steps
  const steps = [
    {
      id: 1,
      component: <PersonalInfo nextStep={nextStep} prevStep={prevStep} />,
    },
    { id: 2, component: <Skills nextStep={nextStep} prevStep={prevStep} /> },
    {
      id: 3,
      component: <EducationDetails nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      id: 4,
      component: <ProjectsDetails nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      id: 5,
      component: (
        <CertificationDetails nextStep={nextStep} prevStep={prevStep} />
      ),
    },
  ];

  // Calculate the width of the progress bar dynamically
  const progressWidth = (currentStep / steps.length) * 100;

  return (
    <section className="mt-28 md:mt-32 md:py-10 py-6 flex flex-col justify-center items-center">
      {/* Step Indicator */}
      <div className="md:w-96 w-[21rem] h-2 rounded-full bg-green-200 relative mb-6">
        <div
          className="h-2 rounded-full bg-[#00E676]"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>

      {/* Current Step Form */}
      <div>{steps.find((step) => step.id === currentStep)?.component}</div>
    </section>
  );
}
