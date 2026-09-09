# 11. Debugging and measurement

**Time:** 2 weeks · **Board:** STM32 Nucleo, logic analyzer, multimeter; an oscilloscope if you have access · **Prerequisites:** Module 10

## Why this matters

Senior engineers are not faster typists. They find the bug in an hour that takes a junior a week, because they know the tools and they measure instead of guessing. On embedded systems the tools go beyond a debugger: a logic analyzer for digital timing, an oscilloscope for the analog truth, a multimeter for power, static analysis to catch bugs before they run, and the discipline to read a fault register instead of adding another `printf`.

## You will be able to

- Use GDB beyond breakpoints: watchpoints, backtraces from a crash, examining memory and registers, and scripting.
- Read a Cortex-M HardFault: find the faulting instruction and the reason from the fault status registers.
- Explain SWD vs JTAG and what OpenOCD, pyOCD, and probe-rs do.
- Use a logic analyzer for timing and protocol decoding, and an oscilloscope for signal quality, noise, and power.
- Run static analysis and host-side sanitizers on firmware code.

## Learn

### The debugger, properly

- [ ] <span class="les-tag">Article</span> **[Downloading and Debugging](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/downloading-debugging)** by Michael Barr <span class="les-time">~30 min</span><br>How code gets into the chip and how a debugger controls it. Orientation.
- [ ] <span class="les-tag">Article</span> **[A Deep Dive into ARM Cortex-M Debug Interfaces](https://interrupt.memfault.com/blog/a-deep-dive-into-arm-cortex-m-debug-interfaces)** by Memfault Interrupt <span class="les-time">~1 h</span><br>SWD, JTAG, the debug access port, breakpoint and watchpoint units. What the Debug Probe and ST-LINK are actually talking to.
- [ ] <span class="les-tag">Article</span> **[Beej's Quick Guide to GDB](https://beej.us/guide/bggdb/)** then **[Advanced GDB Usage](https://interrupt.memfault.com/blog/advanced-gdb)** by Memfault Interrupt <span class="les-time">~1.5 h</span><br>The 20 commands you need, then the ones that make you look like a wizard: conditional breakpoints, watchpoints, Python scripting, examining memory as structs.
- [ ] <span class="les-tag">Article</span> **[How to Debug a HardFault on an ARM Cortex-M MCU](https://interrupt.memfault.com/blog/cortex-m-hardfault-debug)** and **[A Practical Guide to Debugging Faults](https://interrupt.memfault.com/blog/cortex-m-fault-debug)** by Memfault Interrupt <span class="les-time">~1.5 h</span><br>The fault status registers, recovering the stacked program counter, and turning a mystery crash into a file and line number.
- [ ] <span class="les-tag">Tool</span> **[OpenOCD](https://openocd.org/)**, **[pyOCD](https://pyocd.io/)**, **[probe-rs](https://probe.rs/)** <span class="les-time">~30 min to know which is which</span><br>Three open-source bridges between GDB (or your IDE) and a debug probe. You will meet all three.
- [ ] <span class="les-tag">Article</span> **[Measuring Stack Usage the Hard Way](https://interrupt.memfault.com/blog/measuring-stack-usage)** and **[Profiling Firmware on Cortex-M](https://interrupt.memfault.com/blog/profiling-firmware-on-cortex-m)** by Memfault Interrupt <span class="les-time">~1 h</span><br>Where the RAM and the cycles go.

### Instruments

- [ ] <span class="les-tag">Video</span> **[How to Debug Embedded Designs with an Oscilloscope](https://www.youtube.com/watch?v=10bZ0edG6Ts)** <span class="les-time">~30 min</span><br>Triggering on a GPIO you toggle in code, serial decode, and correlating firmware events with analog signals.
- [ ] <span class="les-tag">Video</span> **[EEVblog #499: What is JTAG and Boundary Scan?](https://www.youtube.com/watch?v=TlWlLeC5BUs)** by Dave Jones <span class="les-time">~30 min</span><br>JTAG's original purpose and why it is also a debug port.
- [ ] <span class="les-tag">Article</span> **[Multimeters](https://learn.adafruit.com/multimeters)** by Adafruit <span class="les-time">~30 min</span><br>Continuity for finding shorts and broken traces, current for power debugging, and the safety rules.
- [ ] <span class="les-tag">Tool</span> **[PulseView](https://sigrok.org/wiki/PulseView)** and **[Saleae Logic support](https://support.saleae.com/)** <span class="les-time">Reference</span><br>Protocol decoders and measurement tools you set up in Module 6. Now use them to measure interrupt latency and task timing.

### Analysis before running

- [ ] <span class="les-tag">Tool</span> **[Cppcheck](https://cppcheck.sourceforge.io/)** and **[clang-tidy](https://clang.llvm.org/extra/clang-tidy/)** <span class="les-time">Setup ~1 h</span><br>Free static analyzers. Run them in CI. Commercial tools (PC-lint Plus, Coverity, Polyspace) find more and enforce MISRA; know they exist.
- [ ] <span class="les-tag">Video</span> **[Static Code Analysis: Scan All Your Code for Bugs](https://www.youtube.com/watch?v=Heor8BVa4A0)** <span class="les-time">~45 min</span><br>What static analysis finds that testing does not.

## Do

- [ ] **Checkpoint 11.1: Fault forensics.** Plant three bugs in your Nucleo project, one at a time: dereference a null pointer, execute from an invalid address (call through a garbage function pointer), and do an unaligned word access with the trap enabled. For each, write a HardFault handler that captures the stacked registers and fault status, and use GDB to identify the exact faulting instruction and line. Write the procedure down; it is your future self's checklist.
- [ ] **Checkpoint 11.2: Watchpoint hunt.** Have one task corrupt another's variable through a stray pointer. Do not read the code. Find the culprit with a hardware watchpoint on the corrupted address.
- [ ] **Checkpoint 11.3: Interrupt latency, measured.** Toggle a GPIO in your sensor ISR and another when the task that consumes the data runs. Capture both on the logic analyzer with the system busy. Measure ISR latency, task latency, and their jitter. Then raise the UART interrupt priority above the sensor's and measure again.
- [ ] **Checkpoint 11.4: Scope the truth.** With an oscilloscope (yours, a school's, a hackerspace's): probe the 3.3 V rail while the MCU is busy and while it is asleep, with AC coupling, and look at the noise. Probe an I2C line at full speed and look at the rise time, then remove one pull-up and look again. Probe a PWM output driving an LED. Sketch each waveform and note what the logic analyzer would not have shown you.
- [ ] **Checkpoint 11.5: Analyze it.** Run Cppcheck and clang-tidy on your whole project. Fix or explicitly justify every finding. Build your host-side unit tests with `-fsanitize=address,undefined` and run them. Add both to CI.

## Check yourself

- Your board resets and you find `CFSR` shows a precise bus fault. What are the first three things you look at?
- What is the difference between a breakpoint and a watchpoint, and why are hardware watchpoints limited in number?
- When would a logic analyzer mislead you, and a scope would not?
- Why does probing a fast signal with a long ground lead show ringing that is not really there?
- What class of bug can a sanitizer catch on the host that would appear as a random HardFault on the target?

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Video</span> **[EEVblog #44: Logic Analyzer Tutorial](https://www.youtube.com/watch?v=TWKY6W1C9yM)** <span class="les-time">~40 min</span><br>If you skipped it in Module 6.
    - [ ] <span class="les-tag">Video</span> **[How to Test Automotive Serial Buses with Oscilloscopes](https://www.youtube.com/watch?v=TJK3m91ki7o)** <span class="les-time">~30 min</span><br>Scope-based CAN and LIN debugging.
    - [ ] <span class="les-tag">Docs</span> **[GDB documentation](https://sourceware.org/gdb/documentation/)** <span class="les-time">Reference</span><br>For when a blog post is not enough.
    - [ ] <span class="les-tag">Article</span> **[Debugging articles](https://barrgroup.com/blog-tag/debugging)** by Barr Group <span class="les-time">Browse</span><br>Short pieces on specific debugging techniques.
    - **Choosing a first oscilloscope:** a 4-channel, 100 MHz or better, 12-bit digital scope with serial decoding from Rigol or Siglent is a lifetime tool for a few hundred dollars. More bandwidth is not the priority for firmware work; channel count and decode are.
