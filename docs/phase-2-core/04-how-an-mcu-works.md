# 4. How a microcontroller works

**Time:** 1 to 2 weeks · **Board:** Pico 2 for the checkpoints · **Prerequisites:** Module 3

## Why this matters

You can drive peripherals by copying register values from examples for a while. You cannot debug a hard fault, explain why an interrupt fired late, or read a new chip's reference manual until you have a picture of what the processor is actually doing: fetching instructions from flash over a bus, decoding them, touching registers and memory, and being interrupted. This module builds that picture, from transistors up if you want it, and then maps it onto the Arm Cortex-M cores you will use for years.

## You will be able to

- Describe fetch, decode, execute, and what the program counter, stack pointer, and status register are for.
- Draw a microcontroller block diagram: core, flash, SRAM, buses, peripherals, clock tree, and explain how a memory map ties them together.
- Explain what "32-bit," "Cortex-M33," "Harvard vs von Neumann," and "little-endian" mean in practice.
- Tell a microcontroller, a system on chip, a single-board computer, and an FPGA apart, and say when each is the right tool.

## Learn

Start with the general picture, then the Arm specifics.

- [ ] <span class="les-tag">Video</span> **[Crash Course: Computer Science](https://www.youtube.com/playlist?list=PLH2l6uzC4UEW0s7-KewFLBC1D0l6XRfye)** episodes 1 to 10 <span class="les-time">~2 h</span><br>Transistors to CPU to instructions in ten fast, accurate episodes. The best two hours of orientation available.
- [ ] <span class="les-tag">Video</span> **[Build an 8-bit computer from scratch](https://eater.net/8bit)** by Ben Eater <span class="les-time">Watch the CPU control logic and programming videos at minimum, ~3 h; full series ~10 h</span><br>A CPU on breadboards, one chip at a time. Once you have watched a program run on a machine you can see, "fetch-decode-execute" is never abstract again.
- [ ] <span class="les-tag">Video</span> **[The ARM University Program, ARM Architecture Fundamentals](https://www.youtube.com/watch?v=7LqPJGnBPMM)** <span class="les-time">~1 h</span><br>Registers, modes, exceptions, and the instruction set families, from Arm.
- [ ] <span class="les-tag">Docs</span> **[Arm Cortex-M processor family](https://developer.arm.com/Processors/Cortex-M)** <span class="les-time">~30 min</span><br>What the M0+, M4, M33, and friends differ in. The Pico 2 has M33 cores; most STM32s you will meet are M0+, M4, or M7.
- [ ] <span class="les-tag">Docs</span> **[Cortex-M4 Devices Generic User Guide](https://developer.arm.com/documentation/dui0553/latest/)** by Arm <span class="les-time">Chapters 1 to 2, ~2 h</span><br>The programmer's model: core registers, memory model, exception model, and the NVIC. Written for M4, almost entirely applicable to M33 and M7.
- [ ] <span class="les-tag">Video</span> **[Different Types of Memory in a Microcontroller: Flash, SRAM, and EEPROM](https://www.youtube.com/watch?v=4WnTTL_7a1g)** <span class="les-time">~10 min</span><br>Where code lives, where variables live, and what survives a power cycle.
- [ ] <span class="les-tag">Docs</span> **RP2350 datasheet: chapter 2 (System)** in the [RP2350 datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf) <span class="les-time">~2 h</span><br>Bus fabric, memory map, boot sequence, clocks, and resets for the chip on your desk. Read it with the Arm guide open next to it.

### Platforms compared

| Platform | What it is | Runs | Pick it when |
| --- | --- | --- | --- |
| **Microcontroller (MCU)** | CPU, flash, RAM, and peripherals on one chip. Milliwatts. | Bare metal or an RTOS | Real-time control, low power, low cost. Most of this guide. |
| **System on chip (SoC)** | An application processor plus GPU, memory controller, radios. Needs external RAM and storage. | Linux or Android, sometimes with a small MCU alongside | Screens, cameras, networking, heavy computation. Module 15. |
| **Single-board computer (SBC)** | An SoC on a ready-made board, like a Raspberry Pi. | Linux | Prototyping and products that can afford watts and seconds of boot time. |
| **FPGA** | Reconfigurable logic. You describe hardware, not software. | Your design; often includes a soft or hard CPU | Nanosecond timing, massive parallel I/O, custom interfaces. A different discipline. |

## Do

- [ ] **Checkpoint 4.1: Read the memory map.** From the RP2350 datasheet, write down the base addresses of: boot ROM, flash (XIP), SRAM, the SIO block, IO_BANK0, and the Cortex-M33 private peripherals. Then in the debugger, halt your blink program and confirm the program counter is in the flash region and the stack pointer is in SRAM.
- [ ] **Checkpoint 4.2: Watch the CPU work.** Compile your register-level blink from Checkpoint 3.3 with `-O0`, open the disassembly view, and single-step *instructions* (not lines) through the loop. Identify the load, the or/and, and the store that toggle the pin. Note which core registers change. Then rebuild with `-O2` and see what the compiler removed.
- [ ] **Checkpoint 4.3: Endianness on the desk.** Store `0x11223344` in a `uint32_t`, take a `uint8_t *` to it, and print the four bytes. Then look at the same memory in the debugger's memory view. Explain the order you see.

## Check yourself

- What is in the first two words of a Cortex-M vector table, and why does the hardware need them before any code runs?
- What is the difference between the core's registers and a peripheral's registers?
- Why can a Cortex-M fetch an instruction and read data at the same time, and what is the cost of that design?
- The Pico 2 runs code from external flash. What does "execute in place" mean and why is there a cache in front of it?
- Your team is building a battery-powered sensor that sends one reading an hour. MCU, SoC, or SBC? Why?

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Course</span> **[Nand2Tetris](https://www.nand2tetris.org/)** <span class="les-time">~60 h for Part 1</span><br>Build a computer from NAND gates in a simulator, then write its assembler. The most complete "how does a computer work" course that exists, and free.
- [ ] <span class="les-tag">Book</span> <span class="les-tag les-paid">Paid</span> **[Code: The Hidden Language of Computer Hardware and Software, 2nd ed.](https://www.charlespetzold.com/code/)** by Charles Petzold<br>The book version of the same journey, beautifully written. Great for high schoolers.
- [ ] <span class="les-tag">Video</span> **[Build a 6502 computer](https://eater.net/6502)** by Ben Eater <span class="les-time">~8 h</span><br>A real (1975) CPU on a breadboard, with a logic analyzer watching every bus cycle. Directly relevant to how your MCU talks to memory.
- [ ] <span class="les-tag">Docs</span> **[RISC-V training and learning resources](https://riscv.org/community/training/)** <span class="les-time">Browse</span><br>The Pico 2 can boot its RISC-V cores instead of the Arm ones. RISC-V is increasingly common in new silicon and worth a look once Arm is comfortable.
- [ ] <span class="les-tag">Course</span> **[Embedded Software and Hardware Architecture](https://www.coursera.org/learn/embedded-software-hardware)** by University of Colorado Boulder on Coursera <span class="les-time">~20 h, free to audit</span><br>Word sizes, memory alignment, memory maps, register definition files. Covers this module and the next from a software engineer's view.
- [ ] <span class="les-tag">Book</span> **[Arm Education books](https://www.arm.com/resources/education/books)** <span class="les-time">Reference</span><br>Joseph Yiu's *Definitive Guide to Arm Cortex-M* series is the deep reference once you know which core you are working with.
- [ ] <span class="les-tag">Article</span> **[How FPGAs work, and why you'll buy one](https://www.embeddedrelated.com/showarticle/195.php)** by Yossi Kreinin <span class="les-time">~30 min</span><br>The best plain-language explanation of what an FPGA is for.

</details>