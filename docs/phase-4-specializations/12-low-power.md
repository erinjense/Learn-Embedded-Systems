# 12. Low power

**Time:** 2 to 3 weeks · **Board:** STM32 Nucleo or Pico 2, a multimeter; a power profiler if you have one · **Prerequisites:** Phase 3

## Why this matters

If a product runs on a battery, power is a feature customers can see, and firmware controls most of it. The same hardware can last a week or three years depending on how the code sleeps, wakes, and drives its peripherals. Low-power work is also where measurement matters most, because a microcontroller's current swings from nanoamps to tens of milliamps in microseconds, and a multimeter cannot see that.

## You will be able to

- Explain the sleep modes on your MCU, what each turns off, how long it takes to wake, and what can wake it.
- Design firmware that spends almost all its time asleep: event-driven, race-to-sleep, tickless.
- Build an energy budget and estimate battery life from measurements, not guesses.
- Measure current correctly with a multimeter, understand burden voltage, and know when you need a real power profiler.
- Use a power profiler such as the Qoitech Otii Arc or Nordic PPK2 to see the full current waveform and correlate it with firmware events.

## Learn

### Concepts

- [ ] <span class="les-tag">Article</span> **[Ultra-Low Power Design](https://www.ganssle.com/reports/ultra-low-power-design.html)** by Jack Ganssle <span class="les-time">~2 h</span><br>Ganssle measured everything: real sleep currents, battery self-discharge, and why datasheet numbers lie. Start here.
- [ ] <span class="les-tag">Video</span> **[Microcontroller Design Considerations for Ultra Low Power Applications](https://www.youtube.com/watch?v=pX0gamab5IM)** <span class="les-time">~30 min</span><br>Active vs sleep current, duty cycling, and the arithmetic of average power.
- [ ] <span class="les-tag">Docs</span> **[AN4365: How to optimize STM32 MCUs internal power consumption](https://www.st.com/resource/en/application_note/an4365-how-to-optimize-stm32-mcus-internal-power-consumption-stmicroelectronics.pdf)** by STMicroelectronics <span class="les-time">~1.5 h</span><br>Sleep, Stop, and Standby modes; clock gating; peripheral power; wake sources. Read alongside the power chapter of RM0390.
- [ ] <span class="les-tag">Docs</span> **Your chip's power chapter:** RM0390 "Power controller" for the Nucleo, or the RP2350 datasheet's "Power" chapter <span class="les-time">~1.5 h</span><br>Which registers put the core to sleep and which peripherals keep running.

### Measuring

- [ ] <span class="les-tag">Docs</span> **[Power and current profiling](https://docs.qoitech.com/en/use-cases/power-and-current-profiling)** and **[Battery profiling](https://docs.qoitech.com/en/use-cases/battery-profiling)** by Qoitech <span class="les-time">~1 h</span><br>How professional teams profile a device with an [Otii Arc](https://www.qoitech.com/otii-arc-pro/): supply the device, record current at high sample rate, sync UART logs to the current trace, and compute energy per operation. Read even if you do not own one; it shows what you are looking for.
- [ ] <span class="les-tag">Docs</span> **[Otii product user manual](https://docs.qoitech.com/en/user-manual/otii-products)** by Qoitech <span class="les-time">Reference</span><br>Setup and the desktop app, for when you get access to one.
- [ ] <span class="les-tag">Docs</span> **[Power Profiler Kit II](https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2)** by Nordic Semiconductor <span class="les-time">~30 min</span><br>The budget option: about $100, sub-microamp to 1 A, and it powers the device too. Good enough for most firmware work.

### Measuring with only a multimeter

A multimeter in current mode inserts a shunt resistor in series with your device and reads the voltage across it. Three consequences:

1. **Burden voltage.** On the milliamp range the shunt can drop hundreds of millivolts. Your 3.3 V device may see 3.0 V and behave differently, or brown out during a radio burst. Check your meter's specification.
2. **Averaging and range.** A meter updates a few times a second and one range spans a few decades. A device that sleeps at 5 µA and wakes to 30 mA for 2 ms is not visible; you see a jittery average, or nothing on the µA range because the wake-up burst overloads it.
3. **What you can do anyway.** Measure the *steady states* separately: force the device to stay asleep and read µA; force it to stay awake and read mA. Measure the *duration* of the awake periods with your logic analyzer on a GPIO you toggle around them. Then compute the average by hand. This is the poor engineer's power profiler, and it is how the checkpoints below work.

A dedicated profiler solves all three by auto-ranging in microseconds with a tiny burden voltage and by showing you the waveform. That is what the Otii Arc and PPK2 are for.

## Do

- [ ] **Checkpoint 12.1: Baseline.** Power your board from your multimeter in series (bypass the on-board debugger's power if the board allows; read the board's user manual). Measure active current at full speed in a busy loop, then with all peripherals disabled, then at a lower core clock. Tabulate.
- [ ] **Checkpoint 12.2: Sleep.** Implement wake-on-interrupt: sleep in the lightest mode, wake on a button. Measure. Then the deepest mode that preserves RAM, waking on the RTC alarm every 10 seconds. Measure. Compare each to the datasheet's typical values and explain gaps (LEDs, pull-ups, the debugger, the regulator's quiescent current).
- [ ] **Checkpoint 12.3: Duty cycle and budget.** Build a "sensor node" that wakes every 10 seconds, samples your I2C sensor, prints it over UART, and sleeps. Toggle a GPIO while awake and measure the awake duration on the logic analyzer. Using your steady-state currents, compute average current and predicted life on a 2000 mAh battery. Then shorten the awake time (raise the I2C clock, drop `printf` formatting, sleep during the sensor's conversion instead of polling) and recompute. Write up the before and after.
- [ ] **Checkpoint 12.4: Profile it, if you can.** With an Otii Arc, PPK2, or similar: record 12.3 and label each feature of the current trace (wake, I2C transaction, UART burst, sleep). Find something in the trace you did not expect. There is always something.

## Check yourself

- Your MCU's Stop mode is 2 µA. Your board measures 40 µA asleep. Name four likely culprits.
- What is "race to sleep" and when is running the core *faster* lower energy?
- Why can an average current reading from a multimeter be off by an order of magnitude on a duty-cycled device?
- A device wakes for 5 ms at 20 mA every second and sleeps at 10 µA. What is the average current and the life on a 1000 mAh cell, ignoring self-discharge?
- What does a tickless RTOS change, and why does a 1 kHz tick defeat deep sleep?

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Video</span> **[Optimizing C for Microcontrollers: Best Practices](https://www.youtube.com/watch?v=GYAhbYnObLI)** by Khem Raj <span class="les-time">~45 min</span><br>Less code running means less energy. Compiler flags and patterns.
    - [ ] <span class="les-tag">Tool</span> **[Joulescope](https://www.joulescope.com/)** and the **[µCurrent](https://www.eevblog.com/projects/ucurrent/)** <span class="les-time">Browse</span><br>Two more measurement options: a precision energy analyzer, and a low-burden current adapter that upgrades any multimeter or scope.
    - [ ] <span class="les-tag">Docs</span> **[Qoitech use cases](https://docs.qoitech.com/en/use-cases)** <span class="les-time">Browse</span><br>Battery emulation, automated regression testing of power in CI, and multi-device profiling.
    - **Battery chemistry in one paragraph:** capacity in mAh is quoted at a specific discharge rate and temperature; real capacity drops with high pulse currents and cold. Coin cells in particular have high internal resistance and hate radio bursts. Always measure with the real battery, and design for the end-of-life voltage, not the fresh one.
