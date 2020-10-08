import React, { useEffect, useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

import { WrrpSlider, Slide, WrppButtons } from "./style";

export const ManagerView = ({ prevSlide }) => {
  const [isAnimation, setIsAnimation] = useState(false);
  const [stepSlide, setStepSlide] = useState({ type: null, initial: true });
  const [currentSlide, setCurrentSlide] = useState("prev");
  const [finishSlide, setfinishSlide] = useState("enter");
  const [indexStep, setIndexStep] = useState(1);

  useEffect(function () {
    const $step1 = document.getElementById("step1");
    $step1.addEventListener("animationend", (event) => {
      if (finishSlide === "exit") {
        setfinishSlide("enter");
        if (currentSlide === "prev") {
          setStepSlide({
            type: "enterRight",
            initial: false,
          });
        } else {
          setStepSlide({
            type: "enterLeft",
            initial: false,
          });
        }
      } else {
        setIsAnimation(false);
      }
    });
  });

  const moveStep = (value) => {
    if (!isAnimation) {
      setIsAnimation(true);
      setCurrentSlide(value);
      setfinishSlide("exit");
      if (value === "prev") {
        if (indexStep > 1) {
          setIndexStep(indexStep - 1);
          setStepSlide({
            type: "exitLeft",
            initial: false,
          });
        } else {
          setIsAnimation(false);
          setfinishSlide("enter");
          prevSlide("prev");
        }
      } else {
        setIndexStep(indexStep + 1);
        setStepSlide({
          type: "exitRight",
          initial: false,
        });
      }
    }
  };

  return (
    <div className="card-container">
      <h1>Manager View</h1>
      <WrppButtons>
        <button onClick={() => moveStep("prev")}>Prev</button>
        {indexStep < 3 && (
          <button onClick={() => moveStep("next")}>Next</button>
        )}
      </WrppButtons>
      <WrrpSlider>
        <Slide id="step1" typeAnimation={stepSlide}>
          {indexStep === 1 && <Step1 />}
          {indexStep === 2 && <Step2 />}
          {indexStep === 3 && <Step3 />}
        </Slide>
      </WrrpSlider>
    </div>
  );
};
