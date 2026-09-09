# 17. Signals, control, and motors

**Time:** 2 to 4 weeks depending on how many you pick · **Board:** STM32 Nucleo · **Prerequisites:** Phase 3

## Why this matters

A large share of embedded products measure something physical, do math on it, and move something. That means sampling theory so your measurements are not lies, digital filters so noise does not drive decisions, control loops so the thing you are moving goes where you want without oscillating, and motor drive so it moves at all. This module is three short specializations in one. Do the DSP section first; the others build on it.

## You will be able to

- Explain sampling, aliasing, and quantization, and choose a sample rate and anti-aliasing filter for a signal.
- Implement FIR and IIR filters in fixed and floating point on an MCU, and use CMSIS-DSP.
- Compute an FFT on the MCU and interpret the result.
- Implement and tune a PID controller and explain why each term is there.
- Describe how brushed DC, stepper, and brushless motors are driven, and drive one with PWM and an H-bridge.

## Learn

### Digital signal processing

- [ ] <span class="les-tag">Book</span> **[The Scientist and Engineer's Guide to Digital Signal Processing](https://www.dspguide.com/)** by Steven W. Smith <span class="les-time">Chapters 1 to 3, 14 to 21, ~10 h, free</span><br>The most readable DSP book ever written, free online. Sampling, convolution, FIR and IIR filters, and the FFT, with almost no calculus.
- [ ] <span class="les-tag">Video</span> **[Learn Embedded Systems Design on ARM based Microcontrollers 1 of 2](https://www.youtube.com/watch?v=GFjA7wooCZ8)** by Arm <span class="les-time">~1 h</span><br>DSP concepts as they apply on Cortex-M: fixed point, SIMD instructions, and why an M4F can do real-time audio.
- [ ] <span class="les-tag">Video</span> **[IIR Filters: Audio DSP on STM32](https://www.youtube.com/watch?v=lNBrGOk0XzE)** and **[FIR Filters: Audio DSP on STM32](https://www.youtube.com/watch?v=n9Cy1xkEf1E)** by Phil's Lab <span class="les-time">~1 h</span><br>Real filters running on real STM32 hardware, designed, coded, and measured. The whole [Phil's Lab channel](https://www.youtube.com/@PhilsLab) is worth following.
- [ ] <span class="les-tag">Video</span> **[DSP with the Fast Fourier Transform Algorithm](https://www.youtube.com/watch?v=HJ_-5mqUZ70)** <span class="les-time">~30 min</span><br>What the FFT tells you and how to read its output.
- [ ] <span class="les-tag">Docs</span> **[CMSIS-DSP](https://arm-software.github.io/CMSIS-DSP/latest/)** by Arm <span class="les-time">~1 h</span><br>Optimized FIR, IIR, FFT, and matrix functions for Cortex-M. Use them instead of writing your own once you have written your own once.

### Control

- [ ] <span class="les-tag">Video</span> **[Understanding PID Control](https://www.youtube.com/playlist?list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm-y)** by Brian Douglas, MathWorks <span class="les-time">7 parts, ~1.5 h</span><br>The clearest PID series anywhere: what each term does, anti-windup, derivative filtering, tuning. Start with [Part 1](https://www.youtube.com/watch?v=wkfEZmsQqiA).
- [ ] <span class="les-tag">Video</span> **[Drone Simulation and Control](https://www.youtube.com/playlist?list=PLn8PRpmsu08oOLBVYYIwwN_nvuyUqEjrj)** by Brian Douglas, MathWorks <span class="les-time">5 parts, ~1.5 h</span><br>A full control problem from modeling to flight code. Shows how PID scales up to real systems.

### Motors

There is no single great free resource on motor drive for firmware engineers, so here is the map and where to read.

- **Brushed DC:** speed follows voltage; drive with PWM into an H-bridge for direction. Simplest. Most toys and small appliances.
- **Stepper:** moves in discrete steps with a sequence of coil energizations; open-loop position control, no encoder needed. Printers, CNC, camera gimbals. Microstepping smooths it. Driver chips (like the DRV8825 family) handle the coil sequencing; firmware handles timing and acceleration ramps.
- **Brushless DC (BLDC) and PMSM:** three phases, commutated electronically. Efficient and powerful. Drones, e-bikes, appliances, HVAC fans. Simple "six-step" commutation uses Hall sensors; **field-oriented control (FOC)** uses current sensing and math (Clarke and Park transforms) for smooth torque, and is a specialization in itself. Vendors publish complete reference designs: search ST's "motor control SDK" and TI's "InstaSPIN" and "motor control" application notes for your part.
- **Read:** the motors chapter in *Making Embedded Systems, 2nd ed.* (Module 9) is a solid overview aimed exactly at you.

## Do

- [ ] **Checkpoint 17.1: Aliasing you can see.** Generate a sine wave from a signal generator, a second MCU's DAC or PWM, or a phone app into your Nucleo's ADC. Sample at 1 kHz and print samples. Sweep the input from 50 Hz past 500 Hz to 950 Hz and watch the apparent frequency fold back. Then add an RC anti-alias filter and repeat.
- [ ] **Checkpoint 17.2: Filter and FFT.** Sample noisy data from your sensor or a potentiometer at a fixed rate via a timer-triggered ADC and DMA (Module 5). Implement a moving average, then a designed FIR low-pass, then a second-order IIR, in your own C. Compare against CMSIS-DSP's versions for speed using the cycle counter. Run a 256-point FFT on the buffer and print the dominant frequency.
- [ ] **Checkpoint 17.3: Close the loop.** Build a PID temperature controller: a resistor or small heater as the actuator via PWM, your I2C sensor as feedback. Tune it by hand using the series' method, then add anti-windup and a derivative filter and show the improvement in a logged step response. Plot it.
- [ ] **Checkpoint 17.4: Spin something.** Drive a small brushed DC motor through an H-bridge module with PWM in both directions, with acceleration ramps so it does not jerk. Then, if you have a stepper and driver, implement a trapezoidal acceleration profile and move to exact positions. Measure the motor current on your multimeter or scope and watch it spike on direction changes.

## Check yourself

- Why must you sample at more than twice the highest frequency present, not just twice the frequency you care about?
- What is the difference between FIR and IIR filters in cost, stability, and phase behavior?
- Your PID loop oscillates. Which term do you reduce first and why? Your loop is slow to reach the setpoint with a steady offset; which term is missing?
- Why does a PID loop's sample period matter, and what happens to the derivative term with noisy input?
- Why can a stepper hold position without feedback, and when does that assumption fail?

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Video</span> **[Brian Douglas's channel](https://www.youtube.com/@BrianBDouglas)** <span class="les-time">Browse</span><br>Control theory explained visually: Bode plots, state space, Kalman filters, and more.
    - [ ] <span class="les-tag">Book</span> **[The Scientist and Engineer's Guide to DSP, full text](https://www.dspguide.com/pdfbook.htm)** <span class="les-time">Reference</span><br>The rest of the book: windowing, audio, image processing, and fixed-point arithmetic.
    - **Sensor fusion in one line:** combining an accelerometer and a gyroscope into a stable orientation estimate is a complementary or Kalman filter problem, and it is the gateway to robotics and drones. Douglas's channel has an accessible Kalman filter series.
    - **Displays and UI:** [LVGL](https://lvgl.io/) is the open-source graphics library most MCU products with screens use. Not a signals topic, but it lands here because products that measure things usually show them.
