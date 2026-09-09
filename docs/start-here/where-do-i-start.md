# Where do I start?

There is one path. Where you join it depends on what you already know. Answer honestly; skipping ahead and then falling back is fine, but bouncing off a module that assumes knowledge you do not have is how people quit.

## Pick your entry point

=== "I am new to electronics and programming"

    Typical: high school, first year of college, or a career changer from a non-technical field.

    **Start at [Module 1: Electronics you actually need](../phase-1-foundations/01-electronics.md).** Do Phase 1 in order and do not skip the checkpoints. Budget about 6 to 8 weeks at a few hours a week.

    Expect Module 2 (C) to feel slow. That is normal. C is small but unforgiving, and everything after it gets easier.

=== "I can program, but not in C or on hardware"

    Typical: CS student, web or Python developer, data scientist.

    **Start at [Module 2: C, learned properly](../phase-1-foundations/02-c-for-embedded.md).** Skim [Module 1](../phase-1-foundations/01-electronics.md) in one sitting and do its two checkpoints anyway; you will be reading schematics and probing voltages for the rest of your career.

    Watch for: pointers and undefined behavior, integer widths, and the idea that a variable can change without your code touching it (hardware registers, interrupts).

=== "I know C and have used an Arduino or similar"

    Typical: hobbyist, EE student, bootcamp graduate.

    **Start at [Module 3: Your first board](../phase-1-foundations/03-first-board-pico.md)** and do the register-level checkpoint even if blinking an LED feels beneath you. The point is to do it *without* a library. Then go straight through Phase 2.

    You may be tempted to skip [Module 7: Toolchain and build](../phase-2-core/07-toolchain-and-build.md). Do not. Understanding the linker is what separates "I used a library" from "I can work on any codebase."

=== "I am a working engineer moving into firmware"

    Typical: software engineer, electrical engineer, or test engineer switching roles.

    Skim the Phase 1 and 2 module overviews and do only the checkpoints you cannot already do from memory. **Start reading properly at [Module 7](../phase-2-core/07-toolchain-and-build.md)** and treat Phase 3 as your core. Then pick the Phase 4 specializations your target role lists.

    The checkpoints in Modules 9, 10, and 11 are the ones interviewers ask about.

## How long does this take?

Honest estimates for someone spending 5 to 8 hours a week:

| Phase | Time | Result |
| --- | --- | --- |
| 1 | 6 to 8 weeks | First register-level blink on the Pico 2 |
| 2 | 6 to 8 weeks | Drivers for GPIO, timers, ADC, UART, SPI, I2C from the datasheet |
| 3 | 8 to 12 weeks | A tested, RTOS-based project on STM32 you can talk about in interviews |
| 4 | 2 to 4 weeks per specialization | Depth in what your target job needs |
| 5 | Ongoing | Portfolio, community, and a working relationship with AI tools |

Faster is possible. Slower is fine. The only failure mode is stopping, and the most common cause of stopping is trying to read everything. Do the "Learn" items and the checkpoints. Leave "Go deeper" for when you are curious.
