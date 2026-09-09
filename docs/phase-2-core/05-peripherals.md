# 5. Peripherals

**Time:** 2 to 3 weeks · **Board:** Pico 2 · **Prerequisites:** Modules 3 and 4

## Why this matters

A microcontroller is a CPU surrounded by peripherals, and the job is mostly configuring those peripherals correctly from a several-hundred-page reference manual. GPIO, timers, PWM, ADC, interrupts, DMA, and the watchdog show up in every product. Learn each one once at the register level and you will recognize it on every chip you ever use, because they all work the same way with different register names.

## You will be able to

- Configure a GPIO as input with pull-up or pull-down, or as push-pull or open-drain output, and explain when each is right.
- Set up a hardware timer with a prescaler to fire at an exact rate, generate PWM, and measure a pulse width with input capture.
- Read an analog voltage with the ADC and explain resolution, reference voltage, sampling time, and why the reading is noisy.
- Write an interrupt service routine that is short, safe, and shares data correctly with `main()`.
- Move data with DMA without the CPU touching it, and explain what the watchdog is for.

## Learn

### GPIO

- [ ] <span class="les-tag">Article</span> **[Introduction to Microcontrollers: Hello World](https://www.embeddedrelated.com/showarticle/460.php)** and **[More on GPIO](https://www.embeddedrelated.com/showarticle/462.php)** by Mike Silva <span class="les-time">~1 h</span><br>Register-level GPIO on real chips, with the reasoning spelled out. This whole series is excellent.
- [ ] <span class="les-tag">Video</span> **[How GPIO works](https://www.youtube.com/watch?v=QxvdmzKxEeg)** <span class="les-time">~10 min</span><br>What is physically inside a GPIO pin: the input buffer, the output driver, and the pull resistors.
- [ ] <span class="les-tag">Video</span> **[GPIO Output Configuration: Open Drain and Push Pull](https://www.youtube.com/watch?v=IjKDKGqCm_4)** <span class="les-time">~10 min</span><br>The two output modes, and why I2C needs open-drain.
- [ ] <span class="les-tag">Article</span> **[Using Pull-Up and Pull-Down Resistors](https://blog.stratifylabs.co/device/2013-10-25-Using-Pull-Up-and-Pull-Down-Resistors/)** by Stratify Labs <span class="les-time">~15 min</span><br>Internal vs external pulls, and choosing a value.
- [ ] <span class="les-tag">Article</span> **[A Guide to Debouncing](https://www.ganssle.com/debouncing.htm)** by Jack Ganssle <span class="les-time">~45 min</span><br>Ganssle measured real switches bouncing. Read part 2 for the software algorithms you will actually use.

### Timers and PWM

- [ ] <span class="les-tag">Article</span> **[Introduction to Microcontrollers: More Timers and Displays](https://www.embeddedrelated.com/showarticle/485.php)** by Mike Silva <span class="les-time">~45 min</span><br>Prescalers, compare, and driving things with timer outputs.
- [ ] <span class="les-tag">Article</span> **[Pulse Width Modulation](https://learn.sparkfun.com/tutorials/pulse-width-modulation)** by SparkFun <span class="les-time">~15 min</span><br>Duty cycle, frequency, and why PWM is how you fake analog output.
- [ ] <span class="les-tag">Docs</span> **RP2350 datasheet: Timer and PWM chapters** in the [RP2350 datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf) <span class="les-time">~1.5 h</span><br>The registers you will write in Checkpoint 5.2.

### ADC

- [ ] <span class="les-tag">Article</span> **[Analog to Digital Conversion](https://learn.sparkfun.com/tutorials/analog-to-digital-conversion)** by SparkFun <span class="les-time">~20 min</span><br>Resolution, reference voltage, and converting a count back to volts.
- [ ] <span class="les-tag">Docs</span> **RP2350 datasheet: ADC chapter** <span class="les-time">~1 h</span><br>Pay attention to the sampling rate, the input impedance requirements, and the noise notes. Real ADCs are not ideal.

### Interrupts

- [ ] <span class="les-tag">Article</span> **[Introduction to Microcontrollers: Interrupts](https://www.embeddedrelated.com/showarticle/469.php)** by Mike Silva <span class="les-time">~45 min</span><br>What an interrupt is, what the hardware does, and the rules for writing a handler.
- [ ] <span class="les-tag">Article</span> **[A Practical Guide to Arm Cortex-M Exception Handling](https://interrupt.memfault.com/blog/arm-cortex-m-exceptions-and-nvic)** by Chris Coleman, Memfault Interrupt <span class="les-time">~1 h</span><br>The NVIC, priorities, preemption, tail-chaining, and what the core pushes to the stack. Dense and worth it.

### DMA and watchdog

- [ ] <span class="les-tag">Docs</span> **RP2350 datasheet: DMA chapter** <span class="les-time">~1 h</span><br>Channels, transfer sizes, chaining, and pacing from a peripheral's data-request signal.
- [ ] <span class="les-tag">Article</span> **[Great Watchdogs](https://www.ganssle.com/watchdogs.htm)** by Jack Ganssle <span class="les-time">~45 min</span><br>Why every shipped product has one, and how to use it so it actually catches failures.
- [ ] <span class="les-tag">Article</span> **[Firmware Watchdog Best Practices](https://interrupt.memfault.com/blog/firmware-watchdog-best-practices)** by Memfault Interrupt <span class="les-time">~30 min</span><br>Hardware plus software watchdogs, and capturing why a reset happened.

## Do

All register-level, no SDK peripheral functions, on the Pico 2. You may use the SDK for `stdio` and clocks. Keep the datasheet open.

- [ ] **Checkpoint 5.1: Button, LED, debounce.** Configure one GPIO as input with an internal pull-up and a button to ground. Read it in a loop and light an LED while pressed. Then add Ganssle-style software debouncing and count presses; print the count over UART. Show that without debouncing the count is wrong.
- [ ] **Checkpoint 5.2: Timer and PWM.** Configure a PWM slice from its registers to drive your LED at 1 kHz. Sweep the duty cycle so the LED breathes. Measure the frequency with your multimeter if it has a frequency mode, or with the logic analyzer from Module 6.
- [ ] **Checkpoint 5.3: Read a knob.** Wire a potentiometer between 3.3 V and ground with the wiper on an ADC pin. Read it from the ADC registers, convert to millivolts, and print it. Take 64 readings in a row and print the min and max: that spread is your noise. Then average 16 samples and show the spread shrink.
- [ ] **Checkpoint 5.4: Interrupt-driven button.** Replace the polled button with a GPIO interrupt. The handler must only set a `volatile` flag and clear the interrupt; `main()` does the work. Then deliberately do something slow in the handler and observe what breaks.
- [ ] **Checkpoint 5.5: DMA and watchdog.** Use a DMA channel to copy a 256-byte buffer to another and confirm the copy with no CPU loop. Then enable the watchdog with a 1-second timeout, feed it in your main loop, and add a "hang" command over UART that stops feeding it. Watch the board reset, and read the reset-reason register on boot to prove why.

## Check yourself

- Why does an I2C bus need open-drain outputs and pull-up resistors rather than push-pull?
- A 16-bit timer runs from a 150 MHz clock. What prescaler and compare value give a 1 Hz interrupt?
- A 12-bit ADC with a 3.3 V reference reads 2048. What voltage is that, and what is one LSB in millivolts?
- Name three things an interrupt handler should never do.
- What happens if you clear an interrupt flag *after* the work instead of before, and the event fires again in between?
- Why does a watchdog in the main loop not catch a stuck interrupt handler, and what does?

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Video</span> **[Raspberry Pi Pico Bare Metal Programming](https://www.youtube.com/playlist?list=PLiRALtgGsxmYTF6ZqDSg4DRWDLGVer-Kb)** by Low Byte Productions <span class="les-time">Clocks, DMA, and PIO videos, ~2 h</span><br>The same chip family driven from the registers on video.
- [ ] <span class="les-tag">Video</span> **[Level Up Your Arduino Code: Registers](https://www.youtube.com/watch?v=6q1yEb_ukw8)** by SparkFun <span class="les-time">~20 min</span><br>If you came from Arduino, this shows exactly what `digitalWrite()` was hiding.
- [ ] <span class="les-tag">Article</span> **[Introduction to Microcontrollers series index](https://www.embeddedrelated.com/showarticle/453.php)** by Mike Silva <span class="les-time">Reference</span><br>The rest of the series: buttons and bouncing, ADC, driving displays, and more.
- [ ] <span class="les-tag">Docs</span> **RP2350 datasheet: PIO chapter** <span class="les-time">~2 h</span><br>The Pico's programmable I/O is unique: tiny state machines that bit-bang protocols at hardware speed. Not needed for the path, but delightful.

</details>