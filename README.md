# Learn Embedded Systems

**A calm, checkable path from "what is a microcontroller?" to job-ready embedded engineer.**
Free resources first. Hands-on checkpoints in every module. Nothing you don't need.

**Read it as a website:** https://erinjense.github.io/Learn-Embedded-Systems/ (checkboxes save in your browser)
**Or read it here:** start with [Where do I start?](docs/start-here/where-do-i-start.md), then follow the map below. Fork the repo to tick boxes in the Markdown.

## Who this is for

High schoolers with a soldering iron, CS students who have never touched a register, and working engineers switching into firmware. One path, three entry points, and a focus on getting into the industry rather than down a hobby rabbit hole.

## How it works

Every module has the same five parts: **why this matters** (a minute), **learn** (the two to five best resources, each with a type and a time estimate), **do** (hands-on checkpoints on real hardware), **check yourself** (a few questions), and **go deeper** (optional, collapsed). The hardware is a Raspberry Pi Pico 2 for the foundations and an STM32 Nucleo for the professional modules. About $60 covers Phases 1 and 2.

**Our stance on AI:** learn each idea without it first, well enough to explain it to someone else. Then use every tool you can find. [Module 18](docs/phase-5-beyond/18-using-ai-well.md) shows how professionals do that without losing the skill.

## The map

| Phase | You will be able to | Modules |
| --- | --- | --- |
| **[1 · Foundations](docs/phase-1-foundations/index.md)** | Read a schematic, write real C, blink an LED by writing a register on a Pico 2. | [1 Electronics](docs/phase-1-foundations/01-electronics.md) · [2 C](docs/phase-1-foundations/02-c-for-embedded.md) · [3 First board](docs/phase-1-foundations/03-first-board-pico.md) |
| **[2 · Core](docs/phase-2-core/index.md)** | Understand what the MCU is doing under the hood and drive every common peripheral and bus from the datasheet. | [4 How an MCU works](docs/phase-2-core/04-how-an-mcu-works.md) · [5 Peripherals](docs/phase-2-core/05-peripherals.md) · [6 Communication](docs/phase-2-core/06-communication.md) · [7 Toolchain](docs/phase-2-core/07-toolchain-and-build.md) |
| **[3 · Professional](docs/phase-3-professional/index.md)** | Move to STM32, structure firmware like a team, use an RTOS on purpose, debug with real tools. | [8 STM32](docs/phase-3-professional/08-stepping-up-stm32.md) · [9 Architecture & testing](docs/phase-3-professional/09-firmware-architecture.md) · [10 RTOS](docs/phase-3-professional/10-rtos-and-real-time.md) · [11 Debugging](docs/phase-3-professional/11-debugging-and-measurement.md) |
| **[4 · Specializations](docs/phase-4-specializations/index.md)** | Pick what your job needs. | [12 Low power](docs/phase-4-specializations/12-low-power.md) · [13 Robustness (ESD/EMI/EFT)](docs/phase-4-specializations/13-robustness.md) · [14 Safety & security](docs/phase-4-specializations/14-safety-and-security.md) · [15 Embedded Linux](docs/phase-4-specializations/15-embedded-linux.md) · [16 Wireless](docs/phase-4-specializations/16-wireless.md) · [17 Signals, control, motors](docs/phase-4-specializations/17-dsp-control-motors.md) |
| **[5 · Beyond](docs/phase-5-beyond/index.md)** | Use AI well, build a capstone that proves you can ship, find your people. | [18 Using AI well](docs/phase-5-beyond/18-using-ai-well.md) · [19 Capstone](docs/phase-5-beyond/19-capstone-projects.md) · [20 Career](docs/phase-5-beyond/20-career-and-community.md) |

**Appendix:** [Books](docs/appendix/books.md) · [The original MSP430 course](docs/appendix/legacy-msp430-course.md) · [Glossary](docs/appendix/glossary.md) · [Changelog](docs/appendix/changelog.md) · [Contributing](docs/appendix/contributing.md)

## Gear

Phase 1 and 2: a Raspberry Pi Pico 2, the Raspberry Pi Debug Probe, a breadboard, an LED and resistor assortment, and a multimeter. Phase 3: an STM32 Nucleo-64. Details and prices in the [gear list](docs/start-here/gear.md).

## Contributing

Fix a link, sharpen a sentence, replace a resource with a better one. Please read [CONTRIBUTING.md](CONTRIBUTING.md) first; the one rule is *do not make it longer without making it better*. Every link is checked monthly by `tools/check_links.py`.

## About

The first version was written by [Erin Jense](https://github.com/erinjense) in 2020 as a personal reading list and, to the author's surprise, picked up a following. This 2026 edition keeps the checkbox spirit, drops what has gone stale, adds what the industry now expects, and organizes everything so you always know where you are and what comes next. See the [changelog](docs/appendix/changelog.md) for what changed and which links died.

Text and structure are licensed [CC BY-SA 4.0](LICENSE). Linked resources belong to their authors.
