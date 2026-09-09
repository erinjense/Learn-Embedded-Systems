# Phase 3 · Professional

**Goal:** work the way a firmware team works. Move to an industry-standard STM32, structure code in layers, test it on your laptop, use an RTOS on purpose, and debug with real instruments.

Four modules, roughly 8 to 12 weeks. This phase produces the project you talk about in interviews.

| Module | You will be able to | Time |
| --- | --- | --- |
| [8. Stepping up to STM32](08-stepping-up-stm32.md) | Navigate ST's reference manual, datasheet, and programming manual; build with CubeIDE or CMake; debug over ST-LINK. | 1 to 2 weeks |
| [9. Firmware architecture and testing](09-firmware-architecture.md) | Split code into hardware, HAL, driver, and application layers; write state machines and ring buffers; unit test on the host; follow a coding standard. | 3 to 4 weeks |
| [10. Real time and RTOS](10-rtos-and-real-time.md) | Explain what "real time" means, choose bare metal vs RTOS vs Linux, and use FreeRTOS or Zephyr tasks, queues, and mutexes without deadlocking. | 2 to 3 weeks |
| [11. Debugging and measurement](11-debugging-and-measurement.md) | Read a HardFault, use GDB beyond breakpoints, decode buses on a logic analyzer, and probe signals on an oscilloscope. | 2 weeks |

**Can I skip anything?** No. If you are a working engineer, this is where you start reading closely.
