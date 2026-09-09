# Changelog

## 2026 edition (September 2026)

A full rewrite of the 2020 guide. The old README was a single 558-line checklist of 175 links, most to one MSP430 video course and to Barr Group articles, with no explanation and no hands-on work.

### What changed

- **Structure.** One reading list became 20 modules in 5 phases, each with a purpose, curated resources, hands-on checkpoints, self-check questions, and optional depth. A "Where do I start?" page routes high school, college, and working engineers to the right entry point.
- **Hardware.** The MSP430 gave way to the Raspberry Pi Pico 2 (RP2350) for foundations and an STM32 Nucleo for professional modules, matching what the industry uses. The original MSP430 course is preserved in the [appendix](legacy-msp430-course.md).
- **New topics.** Electronics fundamentals, toolchain and linker internals, firmware architecture and unit testing, Zephyr alongside FreeRTOS, low-power design and power profiling (Otii Arc, PPK2, and DMM technique), ESD/EMI/EFT certification and firmware robustness, functional safety and security, embedded Linux, wireless, capstone projects, career guidance, and a module on using AI effectively without letting it replace understanding.
- **Website.** A MkDocs Material site with checkboxes that persist in the browser and a progress overview on the home page. The Markdown still reads fine on GitHub.
- **Maintenance.** A link checker in `tools/`, run monthly by GitHub Actions, and a contributing guide with a "do not make it longer" rule.
- **License.** CC BY-SA 4.0.

### Links removed from the 2020 edition

Every link in the old guide was checked in September 2026. These were dead or unusable and have been replaced by the resources in the relevant modules:

| Old resource | Status | Replacement |
| --- | --- | --- |
| "Tech Talk: Pro Tips for Using C's Volatile Keyword" (YouTube) | Removed by uploader | Barr Group's volatile article, Module 2 |
| "Tech Talk: Pros and Cons of Dynamic Memory Allocation" (YouTube) | Removed | Covered in Module 9 (memory without malloc) |
| "Webinar: Mutexes & Semaphores Demystified" (YouTube) | Removed | Barr Group article of the same name, Module 10 |
| "ARM SWD (Serial Wire Debug) Tutorial" (YouTube) | Removed | Memfault's debug interfaces deep dive, Module 11 |
| "Tech Talk: Are Coding Standards & Static Analysis Really That Important?" (YouTube) | Removed | MISRA intro and static analysis tools, Modules 9 and 11 |
| "How to implement maximum power point tracking for solar charging" (YouTube) | Malformed video ID in the original | Dropped; out of scope |
| "Quick explanation: the Bounded-Buffer problem" (YouTube) | Now private | Producer/consumer resources, Module 9 |
| "Introduction to Microcontrollers" PDF, TU Wien | 404 | Mike Silva's series and the RP2350 datasheet, Modules 3 to 5 |
| RISC-V educational materials page | 404 | riscv.org training page, Module 4 |
| Coursera per-lecture links (9 links) | Redirect to course landing page | Course linked once, Module 4 |
| Amazon link to *Reusable Firmware Development* | Affiliate marketplace link | Books now link to publishers; see [Books](books.md) |
| Barr Group "Embedded C Coding Standards" URL | Redirected | Updated URL, Module 9 |
| Bare Metal C++ (gitbooks.io) | Redirected to gitbook.io | Updated URL, Books |

Four videos (Intel Nios II HAL, Altera SoC FPGA intro, Arm DSP part 2 of 2, PC-lint MISRA) exist but have embedding disabled and could not be verified automatically. They were low value relative to replacements and were dropped.

### Links kept

About 150 of the original links were alive, including the entire MSP430 playlist, the Barr Group *Programming Embedded Systems* chapters, Mike Silva's and Jason Sachs's EmbeddedRelated series, the MathWorks PID and drone series, Phil Koopman's lectures, and the EEVblog and Rohde & Schwarz instrument tutorials. The good ones are in the modules; the MSP430 course is in the appendix.

## 2020 edition

Created by Erin Jense as a personal collection of embedded systems learning resources. Two commits, one README, and to the author's surprise, many stars.
