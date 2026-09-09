# 13. Robustness: surviving ESD, EMI, and EFT

**Time:** 2 weeks · **Board:** STM32 Nucleo · **Prerequisites:** Phase 3

## Why this matters

Before a product can be sold in most countries it goes to a test lab, where engineers zap it with static discharges, blast it with radio energy, inject fast bursts onto its power cord, and check that it neither emits interference nor falls over. Hardware engineers design the protection, but when the product locks up during the ESD test, everyone turns to the firmware engineer. Firmware that assumes its peripherals never glitch fails certification. Firmware written by someone who knows what a test lab does passes, and recovers gracefully in the field for the same reasons.

This module is short on external links because the good material is spread across standards you have to pay for and application notes that assume you already know the vocabulary. So we explain the vocabulary here, then point you at the best free sources.

## You will be able to

- Explain, in plain language, what ESD, EMI/EMC, EFT (burst), and surge are, which standards test them, and what a test lab visit looks like.
- List the firmware defenses that make a product survive those tests: watchdogs, brown-out handling, CRC-protected data, peripheral re-initialization, input filtering, and safe-state design.
- Recognize the hardware protections (TVS diodes, ferrites, filtering) on a schematic so you can talk to the hardware team.
- Design a test plan that stresses your firmware the way the lab will, before you get there.

## The four things that will happen to your product

**ESD, electrostatic discharge (IEC 61000-4-2).** A person walks across a carpet, builds up several thousand volts, and touches your product. The lab does this on purpose with an ESD gun: contact discharges of ±4 kV or more to every metal part and air discharges of ±8 kV or more to plastic seams and openings, dozens of times. The pulse lasts nanoseconds. It couples into traces and can flip bits in registers, corrupt RAM, reset the chip, or latch up an I/O. The product must keep working, or recover by itself, with no loss of stored data.

**EMI and EMC, electromagnetic interference and compatibility.** Two directions. *Emissions*: your product must not radiate or conduct enough noise to disturb others (CISPR 32, FCC Part 15). Fast clock edges, PWM, and switching regulators are the usual culprits, and firmware influences them: spread-spectrum clocking, slower edge rates, PWM frequency choice. *Immunity*: your product must keep working while bathed in radio energy from 80 MHz to several GHz at field strengths that simulate a phone or a radio transmitter nearby (IEC 61000-4-3), and while noise is injected into its cables (IEC 61000-4-6). ADC readings jump, I2C transactions fail, UARTs see garbage. Firmware has to filter, retry, and never trust a single sample.

**EFT, electrical fast transients or "burst" (IEC 61000-4-4).** Relays and motors switching on the same mains circuit create trains of very fast, high-voltage spikes. The lab injects bursts of them onto your power and signal cables. They look like ESD, repeated thousands of times over a minute. Anything with a state that can be corrupted eventually will be.

**Surge (IEC 61000-4-5).** Lightning nearby or a big load switching produces a slower, much higher-energy pulse on the mains. Mostly a hardware problem (fuses, varistors, TVS diodes), but the firmware must handle the brown-out that follows.

**What a lab visit looks like.** You bring the product, a way to exercise it, and a way to tell whether it is still working (a blinking LED, a UART log, a fixture). The engineer runs each test to the level required by your product's category, watching for three outcomes: it kept working (pass), it was disturbed but recovered by itself (usually a pass, depending on the standard's performance criteria), or it stopped and needed a power cycle, lost data, or did something unsafe (fail). Failures cost a re-test and a redesign. A good firmware engineer arrives having already zapped the product with a cheap ESD simulator and a hair dryer on the power supply.

## Firmware defenses

Each of these is cheap to add early and expensive to add after a failed test.

1. **Independent watchdog, always on.** Not just enabled: fed from a place that proves the main loop and every critical task are alive, with a window watchdog where the chip has one (Module 5, Ganssle's article). Log the reset reason on every boot so you know it fired.
2. **Brown-out detection.** Enable the chip's brown-out reset and set it above the level where flash writes become unreliable. Treat a brown-out reset differently from a cold boot.
3. **Protect stored data.** Every configuration block and every flash write gets a CRC and a second copy. On boot, validate; if the primary is bad, use the backup and repair the primary. Never write flash while the supply is unstable.
4. **Expect peripheral corruption.** A transient can change a peripheral's configuration registers. Periodically re-verify (or simply re-write) critical peripheral configurations. Detect an I2C bus stuck low and recover it by clocking it out. Give every blocking hardware wait a timeout.
5. **Filter inputs.** Never act on a single ADC sample or one GPIO edge. Median or moving-average filters for analog, debouncing and glitch filters for digital, majority voting for anything safety-relevant.
6. **Define the safe state.** For every output that could do harm (heater, motor, valve), decide what "safe" is and make every fault path go there. Default output states at reset must be safe before your code runs.
7. **Fail loudly in test, quietly in the field.** Asserts and fault logs in development; in production, log to non-volatile memory and recover. A product that silently limps is a product that fails in the field for a year before anyone notices.
8. **Slow your edges.** GPIO drive strength and slew rate settings, PWM frequency and dithering, and spread-spectrum clock options directly change your emissions. Know where those registers are.

## Learn

- [ ] <span class="les-tag">Article</span> **[EMC standards overview](https://www.academyofemc.com/emc-standards)** and the rest of the **[Academy of EMC](https://www.academyofemc.com/)** <span class="les-time">~2 h</span><br>A free, well-organized reference to what each standard tests and the basic design rules. The best single free source.
- [ ] <span class="les-tag">Article</span> **[EMC Testing: Beginner's Guide](https://emcfastpass.com/emc-testing-beginners-guide/)** by EMC FastPass <span class="les-time">~1 h</span><br>What the lab does, what it costs, and how to prepare. Written for people about to go through it.
- [ ] <span class="les-tag">Article</span> **[IEC 61000-4-2](https://en.wikipedia.org/wiki/IEC_61000-4-2)** and **[IEC 61000-4-4](https://en.wikipedia.org/wiki/IEC_61000-4-4)** on Wikipedia, and **[ESD standards explained](https://www.emcunited.com/standards-info/esd-iec-61000-4-2)** by EMC United <span class="les-time">~45 min</span><br>Test levels, waveforms, and how discharges are applied.
- [ ] <span class="les-tag">Article</span> **[Great Watchdogs](https://www.ganssle.com/watchdogs.htm)** by Jack Ganssle and **[Firmware Watchdog Best Practices](https://interrupt.memfault.com/blog/firmware-watchdog-best-practices)** by Memfault Interrupt <span class="les-time">~1 h</span><br>Re-read with certification in mind: a watchdog that can be fed by a stuck loop is decoration.
- [ ] <span class="les-tag">Article</span> **[A Guide to Debouncing](https://www.ganssle.com/debouncing.htm)** by Jack Ganssle <span class="les-time">~45 min</span><br>The same filters that handle contact bounce handle injected noise.
- [ ] <span class="les-tag">Docs</span> **[TVS Diode Technical Center](https://www.littelfuse.com/technical-resources/technical-centers/tvs-diode-technical-center)** by Littelfuse <span class="les-time">~45 min</span><br>How the hardware side clamps ESD and surge, so you can read the protection on your schematic.
- [ ] <span class="les-tag">Community</span> **[Better Embedded System Software](https://betterembsw.blogspot.com/)** by Phil Koopman <span class="les-time">Browse the watchdog, CRC, and robustness posts, ~1 h</span><br>Short, opinionated posts from decades of reviewing embedded systems that failed.

## Do

- [ ] **Checkpoint 13.1: Reset forensics.** On the Nucleo, read the reset-cause flags at boot and log them over UART with a boot counter stored in a CRC-protected flash page. Trigger every kind of reset you can: power cycle, reset button, watchdog, software reset, brown-out (lower the supply slowly with a bench supply or a potentiometer on a regulator input if you have one). Confirm each is identified correctly.
- [ ] **Checkpoint 13.2: Survive a stuck bus.** With your I2C sensor running, short SDA to ground for a moment while a transaction is in flight, then release. Without recovery code, observe the bus stay stuck or the firmware hang. Add a timeout, bus-recovery clocking, and peripheral re-init. Repeat until it recovers every time.
- [ ] **Checkpoint 13.3: Noise injection.** Run a long jumper from your ADC input across the desk and hold a running hair dryer, drill, or phone next to it while sampling. Watch the raw samples. Add a median-of-5 and a moving average and show the difference. Then define a "plausibility" check (rate of change, range) and count how many samples it rejects.
- [ ] **Checkpoint 13.4: Configuration integrity.** Store device settings in flash with a CRC and a backup copy. Corrupt the primary copy deliberately (write one byte with the debugger). Confirm the firmware detects it on boot, falls back, and repairs it. Then corrupt both and confirm it falls back to safe defaults and reports the event.
- [ ] **Checkpoint 13.5: Pre-compliance plan.** Write a one-page test plan for your capstone product: what you will do to it before the lab (ESD to every connector and seam, power interruptions of various lengths, cable noise), what "still working" means, and how the product will report a recovered fault. Have someone else read it.

## Check yourself

- What is the difference between an emissions test and an immunity test, and how does firmware affect each?
- Why is a watchdog fed from a timer interrupt nearly useless?
- Your product passed ESD on the bench at 4 kV but fails at the lab at 8 kV air discharge on a seam. The reset counter shows no resets. What kind of failure is this, and where do you look?
- Why should you keep two copies of configuration data instead of one copy with a CRC?
- Name three register settings under firmware control that change how much a board radiates.

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Video</span> **[Embedded Security, Safety and Software Quality](https://www.youtube.com/playlist?list=PL_DQiOR0jhbXFZtjw6U-19X0jPDmg4UoR)** by Phil Koopman <span class="les-time">Lectures on watchdogs, robustness, and critical systems</span><br>The academic backing for everything above.
    - **Getting your own ESD gun:** professional simulators cost thousands, but many labs rent bench time cheaply for pre-compliance, and a piezo lighter igniter near a connector is a crude but real static test that finds the worst problems for free. Never do this to hardware you cannot afford to lose.
