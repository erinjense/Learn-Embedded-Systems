# 3. Your first board: Raspberry Pi Pico 2

**Time:** 1 to 2 weeks · **Board:** Pico 2 plus Debug Probe · **Prerequisites:** Modules 1 and 2

## Why this matters

Everything so far ran on a computer with an operating system doing the hard parts. Now the program *is* the whole machine. This module gets the toolchain working, flashes your first program, and then does the thing that separates embedded engineers from Arduino users: it turns an LED on by writing a number to a memory address, with no library in between.

We use the Raspberry Pi Pico 2 because it is about $5, its documentation is unusually good, and its RP2350 chip has the same Arm Cortex-M architecture you will meet on industry parts in Phase 3.

## You will be able to

- Install the Pico C/C++ SDK and toolchain, build an example, and flash it over USB.
- Debug over SWD with the Debug Probe: set breakpoints, step, and inspect registers.
- Find a peripheral's register addresses in the RP2350 datasheet and write to them from C.
- Get `printf` output over UART to a terminal on your computer.

## Learn

- [ ] <span class="les-tag">Docs</span> **[Getting started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)** by Raspberry Pi <span class="les-time">Chapters 1 to 4 and the debug chapter, ~3 h with setup</span><br>The official setup guide for C/C++. Follow it exactly once. The VS Code extension it describes handles the toolchain install.
- [ ] <span class="les-tag">Tool</span> **[Raspberry Pi Pico VS Code extension](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico)** <span class="les-time">Setup, ~30 min</span><br>Installs the SDK, toolchain, and debugger, and creates projects. Use it, then learn what it did for you in Module 7.
- [ ] <span class="les-tag">Docs</span> **[Raspberry Pi Pico 2 datasheet](https://datasheets.raspberrypi.com/pico/pico-2-datasheet.pdf)** <span class="les-time">~1 h</span><br>The board: pinout, power, schematic. You read parts of this in Module 1.
- [ ] <span class="les-tag">Docs</span> **[RP2350 datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)** <span class="les-time">Skim the table of contents, ~30 min; then chapters on SIO and GPIO for the checkpoint, ~2 h</span><br>The chip. 1,300 pages, and you will use it for the rest of Phase 2. Learn its structure now: memory map, then one chapter per peripheral, each ending with a register list.
- [ ] <span class="les-tag">Docs</span> **[Raspberry Pi Debug Probe](https://www.raspberrypi.com/documentation/microcontrollers/debug-probe.html)** <span class="les-time">~30 min</span><br>Wiring and setup for SWD debugging and the built-in UART bridge.
- [ ] <span class="les-tag">Docs</span> **[pico-examples](https://github.com/raspberrypi/pico-examples)** on GitHub <span class="les-time">Reference</span><br>A working example for nearly every peripheral. Read them, do not copy them blindly.
- [ ] <span class="les-tag">Video</span> **[Raspberry Pi Pico Bare Metal Programming](https://www.youtube.com/playlist?list=PLiRALtgGsxmYTF6ZqDSg4DRWDLGVer-Kb)** by Low Byte Productions <span class="les-time">First 3 videos for now, ~1.5 h</span><br>Programming the RP2040 (the Pico 2's predecessor, very similar) with no SDK at all: bootrom, flash, GPIO registers. The rest of the series returns in Phases 2 and 3.

## Do

- [ ] **Checkpoint 3.1: Blink with the SDK.** Build and flash the `blink` example. Change the period. Then wire an external LED and resistor (from Checkpoint 1.1) to a GPIO of your choice and blink that instead. Confirm the pin is toggling with your multimeter set to DC volts.
- [ ] **Checkpoint 3.2: Debug it.** Connect the Debug Probe. Set a breakpoint on the line that turns the LED on. Run to it. Step over it and watch the LED change. Open the register or memory view and find the GPIO output register in the SIO block; watch its value change as you step.
- [ ] **Checkpoint 3.3: Blink from the registers.** New project. Do not call any `gpio_*` SDK function. Using the RP2350 datasheet, find the addresses and bit layouts for: the IO_BANK0 pin control register to select the SIO function for your pin, the PADS_BANK0 register to enable output, and the SIO `GPIO_OE` and `GPIO_OUT` registers. Define them as `volatile uint32_t *` pointers (or a struct as in Checkpoint 2.2) and blink the LED with a busy-wait delay. Then read back each register in the debugger and confirm the bits you set are the bits that changed.
- [ ] **Checkpoint 3.4: Hello, UART.** Enable `stdio` over UART in your project, connect the Debug Probe's UART pins, open a serial terminal on your computer at 115200 baud, and print a counter once a second. Then swap to USB stdio and note what changed in the build.

## Check yourself

- What does the BOOTSEL button do, and what happens between plugging in the board and your `main()` running?
- Why must the register pointers in Checkpoint 3.3 be `volatile`?
- What is the difference between the IO_BANK0 function select and the SIO output enable? Why do both exist?
- What does the Debug Probe connect to on the Pico 2, and what protocol does it speak?
- Roughly how much does a 100 ms busy-wait delay depend on the compiler's optimization level, and why is that a problem?

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Docs</span> **[Raspberry Pi Pico-series C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf)** <span class="les-time">Reference</span><br>Every SDK function, and the CMake build structure explained.
- [ ] <span class="les-tag">Docs</span> **[Pico-series documentation hub](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html)** <span class="les-time">Reference</span><br>Everything official in one place.
- [ ] <span class="les-tag">Article</span> **[Videos Teach Bare Metal RP2040](https://hackaday.com/2023/03/09/videos-teach-bare-metal-rp2040/)** by Hackaday <span class="les-time">~5 min</span><br>Context on the Low Byte Productions series and why bare metal is worth the effort.
- [ ] <span class="les-tag">Interactive</span> **[Wokwi](https://wokwi.com/)** <span class="les-time">Optional</span><br>A browser simulator for the Pico and other boards. Useful when you are away from your desk, not a replacement for hardware.

</details>