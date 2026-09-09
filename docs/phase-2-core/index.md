# Phase 2 · Core

**Goal:** understand what a microcontroller is doing under the hood, and drive every common peripheral and bus from the datasheet alone.

Four modules, roughly 6 to 8 weeks. Still on the Pico 2.

| Module | You will be able to | Time |
| --- | --- | --- |
| [4. How a microcontroller works](04-how-an-mcu-works.md) | Explain fetch-decode-execute, the memory map, buses, clocks, and why "32-bit" and "Cortex-M" matter. | 1 to 2 weeks |
| [5. Peripherals](05-peripherals.md) | Configure GPIO, timers, PWM, ADC, interrupts, DMA, and a watchdog from the reference manual. | 2 to 3 weeks |
| [6. Communication](06-communication.md) | Drive UART, SPI, and I2C devices from their datasheets and read the traffic on a logic analyzer. Know what RS-485, CAN, and USB are for. | 2 weeks |
| [7. Toolchain and build](07-toolchain-and-build.md) | Explain what happens between `main.c` and a blinking LED: compiler, linker script, startup code, vector table, flashing. | 1 week |

**Can I skip anything?** Module 4 can be skimmed if you have taken a computer architecture course. Do not skip Module 7 even if it looks dry. It is the module most self-taught engineers are missing, and it shows in interviews.
