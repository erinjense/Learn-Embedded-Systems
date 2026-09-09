# 19. Capstone projects

**Time:** 4 to 8 weeks · **Board:** STM32 Nucleo plus whatever your project needs · **Prerequisites:** Phase 3 and at least one specialization

## Why this matters

A capstone turns twenty modules of checkpoints into one thing you can demo, put on GitHub, and talk about for forty minutes in an interview. Interviewers do not want to hear that you followed a guide. They want to hear what broke, what you measured, and what you decided. A finished, documented project of moderate ambition beats an abandoned, ambitious one every time.

## The ladder

Pick the rung that stretches you. Each one builds on the last, and you have already done pieces of the lower rungs in the checkpoints.

| Rung | Project | Proves you can |
| --- | --- | --- |
| **1** | **Register-level blinky with a CLI.** Bare-metal startup, your own vector table and linker script, interrupt-driven UART, a command shell with `help`, `version`, and `led`. | Own the whole pipeline from reset vector to `main()`. |
| **2** | **Sensor logger.** An I2C or SPI sensor read on a timer, ring-buffered, timestamped, streamed over UART and stored to on-chip flash with CRC. Host-side unit tests for the parser and buffer. | Drive a device from its datasheet and structure code in layers. |
| **3** | **RTOS data logger with low power.** Rung 2 on FreeRTOS or Zephyr: sampling task, storage task, CLI task, queues between them, sleeps between samples, measured battery life estimate. | Use an RTOS deliberately and measure power honestly. |
| **4** | **Field-updatable device.** Rung 3 plus a bootloader with dual image slots, CRC and signature verification, rollback on failure, and an update command over UART or USB. Watchdog and reset-reason logging throughout. | Ship something that can be fixed after it leaves your desk and survives a bad update. |
| **5** | **Connected product.** Rung 4 plus a radio: BLE to a phone or Wi-Fi to MQTT, with a threat model, TLS or BLE security, and a pre-compliance robustness test plan. | Do the whole job. |

## What "done" means

Every rung is finished when all of these are true:

- [ ] **It works from a cold clone.** Someone with the same board can clone the repository, follow the README, and have it running in 15 minutes. Build instructions, wiring diagram or photo, and a list of parts.
- [ ] **It has tests that run without hardware.** At least the parsing, buffering, and state logic. One command runs them all. CI runs them on every push.
- [ ] **It has a design document.** One to three pages: what it does, the layer diagram, the main state machine, what you measured (timing, power, code size), and the three hardest decisions with the alternatives you rejected.
- [ ] **It fails gracefully.** Unplug the sensor, spam the UART, corrupt the flash, pull power mid-write. Describe what happens in the README. Fix what is embarrassing.
- [ ] **It has a demo.** A two-minute video or GIF in the README. People will not flash your board; they will watch the video.
- [ ] **You wrote down what you learned.** A short post-mortem at the bottom of the design doc: what took longer than expected, what you would do differently, what you would add. Interviewers love this section.

## Ideas by domain

If the generic logger bores you, keep the rung structure and change the subject:

- **Consumer:** a smart kitchen timer with a display and a rotary encoder; a plant monitor that sleeps for a month; a bike light that adjusts to ambient light and motion.
- **Industrial:** an RS-485 Modbus sensor node; a CAN bus logger and decoder; a relay controller with a window watchdog and safe-state logic.
- **Audio and signals:** a guitar tuner using an FFT; a real-time audio effect on a Cortex-M4F with I2S; a spectrum analyzer on a small display.
- **Control and motion:** a self-balancing platform with an IMU and PID; a stepper-driven camera slider with acceleration profiles; a temperature-controlled soldering iron (carefully).
- **Wireless:** a BLE environmental sensor with a phone app or web dashboard; a LoRaWAN mailbox sensor; a Matter-compatible light switch.
- **Linux:** a Raspberry Pi gateway that collects from your BLE or RS-485 nodes and serves a dashboard, with a custom Buildroot image.

## Do

- [ ] **Choose a rung and a subject.** Write the one-paragraph pitch: what it does, for whom, and which two modules it stretches you on.
- [ ] **Plan in milestones.** Four to eight, each ending in something that works. "Bootloader verifies a signature" is a milestone. "Work on bootloader" is not.
- [ ] **Build it.** Commit as you go. Keep a `LOG.md` of problems and measurements; it becomes your design doc and your interview stories.
- [ ] **Finish it.** Everything in "What done means." Finishing is the skill.
- [ ] **Show it.** Post it in one of the communities from [Module 20](20-career-and-community.md) and ask for a review. Then review someone else's.
