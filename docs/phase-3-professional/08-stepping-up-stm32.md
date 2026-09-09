# 8. Stepping up to STM32

**Time:** 1 to 2 weeks · **Board:** STM32 Nucleo-64 (NUCLEO-F446RE recommended) · **Prerequisites:** Phase 2

## Why this matters

The Pico 2 taught you the concepts. Industry mostly ships on parts from ST, NXP, Microchip, Renesas, Nordic, TI, and Infineon, and STM32 is the family you are most likely to meet first. The concepts are identical; what changes is the documentation style, the vendor tooling, and the sheer size of the reference manual. Learning to navigate a second vendor's ecosystem is the skill. After this module you can pick up any Cortex-M part.

Buy the Phase 3 board from the [gear list](../start-here/gear.md). Any Nucleo-64 works; the F446RE has enough of everything.

## You will be able to

- Find your way around ST's three key documents: the datasheet, the reference manual, and the Cortex-M programming manual.
- Build and debug for STM32 two ways: with STM32CubeIDE and CubeMX, and with CMake and VS Code.
- Explain what ST's HAL and LL libraries are, when to use them, and when to go to the registers.
- Flash and debug over the on-board ST-LINK.

## Learn

- [ ] <span class="les-tag">Article</span> **[Getting Started with STM32: Introduction to STM32CubeIDE](https://www.digikey.com/en/maker/projects/getting-started-with-stm32-introduction-to-stm32cubeide/6a6c60a670c447abb90fd0fd78008697)** by Shawn Hymel, DigiKey <span class="les-time">~1 h with setup</span><br>Install, create a project for your Nucleo, blink. The whole series is good; this first one gets you running.
- [ ] <span class="les-tag">Video</span> **[Getting Started with STM32 and Nucleo](https://www.youtube.com/playlist?list=PLEBQazB0HUyRYuzfi4clXsKUSgorErmBv)** by Shawn Hymel, DigiKey <span class="les-time">~3 h</span><br>The video version of the series: timers, interrupts, UART, I2C, and more with CubeIDE.
- [ ] <span class="les-tag">Docs</span> **The three documents for your chip** <span class="les-time">~2 h to orient</span><br>Open all three and learn what lives where:
    - [STM32F446xx datasheet](https://www.st.com/resource/en/datasheet/stm32f446re.pdf): pinout, electrical limits, package. What the *part* is.
    - [RM0390 reference manual](https://www.st.com/resource/en/reference_manual/rm0390-stm32f446xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf): every peripheral register. How the *peripherals* work. 1,300 pages.
    - [PM0214 Cortex-M4 programming manual](https://www.st.com/resource/en/programming_manual/pm0214-stm32-cortexm4-mcus-and-mpus-programming-manual-stmicroelectronics.pdf): the core, NVIC, SysTick, instruction set. How the *processor* works.
- [ ] <span class="les-tag">Docs</span> **[NUCLEO-F446RE product page](https://www.st.com/en/evaluation-tools/nucleo-f446re.html)** <span class="les-time">~30 min</span><br>User manual (which pin is which Arduino header), schematics, and the ST-LINK details.
- [ ] <span class="les-tag">Course</span> **[STM32 MOOCs](https://www.st.com/content/st_com/en/support/learning/stm32-education/stm32-moocs.html)** by STMicroelectronics <span class="les-time">Pick "STM32CubeMX and STM32Cube HAL basics", ~4 h</span><br>ST's own free courses. Uneven, but the CubeMX one saves you a lot of clicking around.
- [ ] <span class="les-tag">Docs</span> **[STM32 step-by-step](https://wiki.st.com/stm32mcu/wiki/STM32StepByStep:STM32_step_by_step_overview)** on the ST wiki <span class="les-time">~2 h</span><br>ST's guided intro: LED, UART, sensor, and a first look at the tools.
- [ ] <span class="les-tag">Tool</span> **[STM32CubeCLT](https://www.st.com/en/development-tools/stm32cubeclt.html)** and the **[STM32 VS Code extension](https://www.st.com/en/development-tools/stm32-vscode-extension.html)** <span class="les-time">Setup ~1 h</span><br>The command-line toolchain and a CMake-based VS Code flow. Use this once you know CubeIDE, so you understand what the IDE was doing.
- [ ] <span class="les-tag">Video</span> **[Modern Embedded Systems Programming Course](https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM)** by Miro Samek <span class="les-time">Lessons 1 to 10, ~4 h</span><br>A legendary free course. Early lessons show how C becomes Cortex-M instructions and how to work from the reference manual, on a TI board and later an STM32 Nucleo. Everything transfers.

### HAL, LL, or registers?

ST gives you three levels. The **HAL** (Hardware Abstraction Layer) is verbose but portable across STM32 families and is what most teams and job postings mean by "STM32 experience." The **LL** (Low Layer) is thin inline wrappers around registers. **Direct register access** is what you did on the Pico 2. A professional can read all three and chooses per situation: HAL to get a board up quickly, LL or registers where timing, size, or clarity matter. Do the checkpoints in both styles so you can.

## Do

- [ ] **Checkpoint 8.1: Blink three ways.** Blink the Nucleo's user LED using (a) CubeMX-generated HAL code, (b) LL functions, and (c) direct register writes using RM0390's GPIO chapter. Compare the flash size of all three with `arm-none-eabi-size`.
- [ ] **Checkpoint 8.2: Port your Pico work.** Bring your UART echo and I2C sensor driver from Module 6 to the Nucleo. Keep your driver's public interface identical and swap only the register layer. Note what took longest; that is the cost of porting, and it is why layers matter (next module).
- [ ] **Checkpoint 8.3: Two toolchains, one project.** Build the same project in CubeIDE and from the terminal with CMake and the CubeCLT toolchain. Confirm both produce a working binary. Flash and debug from VS Code over ST-LINK.
- [ ] **Checkpoint 8.4: Clock tree.** In CubeMX's clock configuration view, set the core to its maximum frequency from the external crystal. Then read RM0390's RCC chapter and identify each register CubeMX wrote to make that happen. Verify by toggling a pin in a tight loop and measuring the frequency on your logic analyzer before and after.

## Check yourself

- Which document tells you the maximum current a GPIO can sink? Which tells you the bit that enables the GPIO port clock? Which tells you how SysTick works?
- Why does every STM32 peripheral need its clock enabled in the RCC before you can touch its registers, and what happens if you forget?
- What does `HAL_Delay()` depend on, and why does it stop working inside a higher-priority interrupt?
- What does CubeMX generate, and what would you have to write by hand without it?

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Community</span> **[ST Community forums](https://community.st.com/)** <span class="les-time">Reference</span><br>Where ST engineers answer questions. Search before asking; your problem has usually been solved.
    - [ ] <span class="les-tag">Tool</span> **[STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html)** <span class="les-time">~30 min</span><br>Flash, read protection, option bytes, and recovering a board you have locked yourself out of.
    - [ ] <span class="les-tag">Course</span> **[STM32 education hub](https://www.st.com/content/st_com/en/support/learning/stm32-education.html)** <span class="les-time">Browse</span><br>Everything ST offers for learning, including the MOOCs and workshop materials.
    - **What about Rust?** Embedded Rust is real and growing, especially with [Embassy](https://embassy.dev/) and the [Embedded Rust Book](https://docs.rust-embedded.org/book/). Learn C first; every codebase you will be hired into is C. Rust is a fine second language once the concepts are solid.
