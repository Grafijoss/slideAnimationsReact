import React, { useEffect, useState } from 'react'
import {Step1} from './Step1'

import { WrrpSlider, Slide, WrppButtons } from './style'

export const ManagerView = () => {
  const [isAnimation, setIsAnimation] = useState(false)
  const [stepSlide, setStepSlide] = useState({ type: null, initial: true })
  const [currentSlide, setCurrentSlide] = useState('prev')
  const [finishSlide, setfinishSlide] = useState('enter')

  useEffect(function () {
    const $step1 = document.getElementById('step1')
    $step1.addEventListener('animationend', (event) => {
      // const nextSlide = currentSlide === 'step1' ? 'wrpp2' : 'step1'
      // setCurrentSlide(nextSlide)
      // setIsAnimation(false)
      if (finishSlide === 'exit') {
        setfinishSlide('enter')
        if (currentSlide === 'prev') {
          setStepSlide({
            type: 'enterRight',
            initial: false,
          })
        } else {
          setStepSlide({
            type: 'enterLeft',
            initial: false,
          })
        }
      } else {
        setIsAnimation(false)
      }
    })
  })

  const moveSlide = (value) => {
    if (!isAnimation) {
      setIsAnimation(true)
      setCurrentSlide(value)
      setfinishSlide('exit')
      if (value === 'prev') {
        setStepSlide({
          type: 'exitLeft',
          initial: false,
        })
      } else {
        setStepSlide({
          type: 'exitRight',
          initial: false,
        })
      }
    }
  }

  return (
    <div className="card-container">
      <h1>Manager View</h1>
      <WrppButtons>
        <button onClick={() => moveSlide('prev') }>Prev</button>
        <button onClick={() => moveSlide('next') }>Next</button>
      </WrppButtons>
      <WrrpSlider>
        <Slide id="step1" typeAnimation={stepSlide}>
          <Step1 />
        </Slide>
      </WrrpSlider>
    </div>
  );
};
