# 7. Toolchain and build

**Time:** 1 week · **Board:** Pico 2 · **Prerequisites:** Module 3

## Why this matters

Between `main.c` and a blinking LED there is a compiler, an assembler, a linker with a script that decides where every byte goes, startup code that copies your initialized variables into RAM, a vector table the hardware reads before your code runs, and a flashing tool. Most self-taught engineers let an IDE hide all of it. Then one day the binary does not fit, a global variable is mysteriously zero, or `main()` is never reached, and there is nobody to ask. This module makes the whole pipeline visible once so it never scares you again.

## You will be able to

- Describe each stage from source to running firmware and name the tool that does it.
- Read a linker script and a map file, and explain `.text`, `.data`, `.bss`, and the stack and heap.
- Explain what startup code does before `main()` and where the vector table lives.
- Build a project with Make or CMake from the command line, without an IDE.
- Use Git well enough to work on a team.

## Learn

- [ ] <span class="les-tag">Article</span> **[Compiling, Linking, and Locating](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/compiling-linking-locating)** by Michael Barr, from *Programming Embedded Systems* <span class="les-time">~45 min</span><br>The classic chapter. What each stage does and why embedded adds a "locating" step.
- [ ] <span class="les-tag">Article</span> **[From Zero to main(): Bare metal C](https://interrupt.memfault.com/blog/zero-to-main-1)** by François Baldassari, Memfault Interrupt <span class="les-time">~1 h, plus the follow-up posts linked at the end, ~2 h</span><br>Writes the startup code and linker script for a Cortex-M by hand, one line at a time. The single best resource in this module.
- [ ] <span class="les-tag">Article</span> **[How to Write Linker Scripts for Firmware](https://interrupt.memfault.com/blog/how-to-write-linker-scripts-for-firmware)** by Memfault Interrupt <span class="les-time">~1 h</span><br>Memory regions, sections, symbols, and the tricks real projects use.
- [ ] <span class="les-tag">Article</span> **[GNU Binutils: the ELF Swiss Army Knife](https://interrupt.memfault.com/blog/gnu-binutils)** by Memfault Interrupt <span class="les-time">~45 min</span><br>`objdump`, `nm`, `readelf`, `size`, `objcopy`. You will use these weekly.
- [ ] <span class="les-tag">Article</span> **[Tools for Firmware Code Size Optimization](https://interrupt.memfault.com/blog/best-firmware-size-tools)** by Memfault Interrupt <span class="les-time">~30 min</span><br>Reading the map file and finding out what is eating your flash.
- [ ] <span class="les-tag">Docs</span> **[Arm GNU Toolchain downloads](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads)** <span class="les-time">Reference</span><br>`arm-none-eabi-gcc` and friends, the compiler behind the Pico SDK and most STM32 projects.
- [ ] <span class="les-tag">Article</span> **[Makefile Tutorial](https://makefiletutorial.com/)** <span class="les-time">~1 h</span><br>Enough Make to read any firmware Makefile you will encounter.
- [ ] <span class="les-tag">Docs</span> **[CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)** steps 1 to 3, then **[An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/)** <span class="les-time">~2 h</span><br>The Pico SDK, Zephyr, and most modern firmware projects use CMake. Learn to read `CMakeLists.txt` and add a source file.
- [ ] <span class="les-tag">Course</span> **[Pro Git](https://git-scm.com/book/en/v2)** chapters 1 to 3, and **[Learn Git Branching](https://learngitbranching.js.org/)** <span class="les-time">~3 h</span><br>Commit, branch, merge, rebase, and how to undo. Every team uses Git. Practice the branching game until it is boring.

## Do

- [ ] **Checkpoint 7.1: Build from the terminal.** Build your register blink from Module 3 with `cmake` and `make` (or `ninja`) from a terminal, no IDE. Run `arm-none-eabi-size` on the ELF and explain each number. Run `arm-none-eabi-objdump -d` and find your `main()`.
- [ ] **Checkpoint 7.2: Read the map.** Enable the linker map file. Find: the vector table's address, `main()`, one of your global variables, and the end of `.bss`. Add a `static const uint8_t table[1024]` and a `static uint8_t buffer[1024]` and show, from the map, which sections grew and by how much.
- [ ] **Checkpoint 7.3: Startup by hand.** Following the "From Zero to main()" series, write your own minimal vector table, reset handler (copy `.data`, zero `.bss`, call `main()`), and linker script for the Pico 2, building on what Low Byte Productions showed in Module 3 for the boot stage. Blink the LED with no SDK at all. This is the hardest checkpoint in Phase 2 and the most worthwhile.
- [ ] **Checkpoint 7.4: Version it.** Put your Phase 1 and 2 projects in a Git repository with a sensible `.gitignore`, one commit per checkpoint, and a README with build instructions. Push it to GitHub. This is the start of your portfolio (Module 20).

## Check yourself

- What is the difference between the `.data` and `.bss` sections, and what does startup code do with each?
- Why does the vector table have to be at a specific address, and what is in its first entry?
- A global `int counter = 5;` reads as 0 at runtime. Name two causes in the toolchain.
- What does the linker do when two object files define the same symbol? What does `weak` change?
- Your binary is 4 KB too big for flash. Name three things you would check in the map file.

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Book</span> **[Bare-metal programming for ARM](https://github.com/umanovskis/baremetal-arm)** by Daniels Umanovskis <span class="les-time">Free, ~6 h</span><br>A free ebook that builds startup code, a linker script, a UART driver, and interrupts on an emulated Arm board. Complements the Interrupt series.
- [ ] <span class="les-tag">Article</span> **[Exploring Startup Implementations: Newlib (ARM)](https://embeddedartistry.com/blog/2019/04/17/exploring-startup-implementations-newlib-arm/)** by Phillip Johnston <span class="les-time">~1 h</span><br>What the standard C library's startup does for you, and what it costs.
- [ ] <span class="les-tag">Article</span> **[Code Size Optimization: GCC Compiler Flags](https://interrupt.memfault.com/blog/code-size-optimization-gcc-flags)** and **[Reproducible Firmware Builds](https://interrupt.memfault.com/blog/reproducible-firmware-builds)** by Memfault Interrupt <span class="les-time">~1 h</span><br>`-Os`, `-ffunction-sections`, `--gc-sections`, LTO, and why the same source should produce the same bytes.
- [ ] <span class="les-tag">Docs</span> **[GNU ld manual](https://sourceware.org/binutils/docs/ld/)** <span class="les-time">Reference</span><br>The full linker script language, for when a blog post is not enough.
- [ ] <span class="les-tag">Docs</span> **[GCC attributes](https://gcc.gnu.org/onlinedocs/gcc/Common-Function-Attributes.html)** <span class="les-time">Reference</span><br>`section`, `aligned`, `used`, `naked`, `interrupt`: the attributes startup code depends on.

</details>