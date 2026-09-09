# 9. Firmware architecture and testing

**Time:** 3 to 4 weeks · **Board:** STM32 Nucleo (and your laptop) · **Prerequisites:** Module 8

## Why this matters

Everything so far was a few hundred lines that you held in your head. Products are tens of thousands of lines written by several people over years, and the difference between a codebase that survives that and one that collapses is structure: layers with clear boundaries, state machines instead of flag soup, buffers that do not lose data, tests that run on a laptop in seconds, and a coding standard so the code looks like one person wrote it. This is the module hiring managers care about most.

## You will be able to

- Split firmware into hardware, HAL, driver, and application layers and explain what each may and may not know about.
- Write a driver from a datasheet with a clean interface that can be tested without the hardware.
- Implement a state machine and a ring buffer correctly, and know when to use event-driven design.
- Unit test firmware on your laptop with test doubles for the hardware, and run those tests in CI.
- Follow a coding standard and explain why MISRA C exists.
- Describe how a bootloader and a firmware update work.

## Learn

### Architecture and patterns

- [ ] <span class="les-tag">Book</span> <span class="les-tag les-paid">Paid</span> **[Making Embedded Systems, 2nd Edition](https://www.oreilly.com/library/view/making-embedded-systems/9781098151539/)** by Elecia White <span class="les-time">~15 h</span><br>The book for this module and the one we would recommend if you buy only one. Architecture, drivers, state machines, debugging, testing, and shipping, from someone who has done it many times. Companion code on [GitHub](https://github.com/eleciawhite/making-embedded-systems). Libraries often have it; the O'Reilly platform has a free trial.
- [ ] <span class="les-tag">Article</span> **[Peripherals and Device Drivers](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/peripherals-device-drivers)** by Michael Barr, from *Programming Embedded Systems* <span class="les-time">~45 min</span><br>The classic recipe for a driver: register interface, state, and API. Free online.
- [ ] <span class="les-tag">Article</span> **[Important Programming Concepts, Part V: State Machines](https://www.embeddedrelated.com/showarticle/723.php)** by Jason Sachs <span class="les-time">~45 min</span><br>Read this again now that you have something to apply it to.
- [ ] <span class="les-tag">Video</span> **[State Machines](https://www.youtube.com/playlist?list=PLPW8O6W-1chxym7TgIPV9k5E8YJtSBToI)** by Miro Samek <span class="les-time">~3 h</span><br>From if-else soup to proper state machines to hierarchical ones. From the author of the standard book on the topic.
- [ ] <span class="les-tag">Video</span> **[Event-Driven Programming, Part 1](https://www.youtube.com/watch?v=rfb2JI1GGIc)** and **[Part 2](https://www.youtube.com/watch?v=l69ghMpsp6w)** by Miro Samek <span class="les-time">~1 h</span><br>Why "run to completion" event handlers beat blocking code, and how that shapes a whole system.
- [ ] <span class="les-tag">Article</span> **[Creating a Circular Buffer in C and C++](https://embeddedartistry.com/blog/2017/05/17/creating-a-circular-buffer-in-c-and-c/)** by Phillip Johnston <span class="les-time">~45 min</span><br>The data structure under every UART driver, with the thread-safety subtleties explained.
- [ ] <span class="les-tag">Video</span> **[What is a BSP (Board Support Package)?](https://www.youtube.com/watch?v=Bn_6kxRTTSM)** <span class="les-time">~10 min</span><br>The layer between "this chip" and "this board," and why products have one.
- [ ] <span class="les-tag">Article</span> **[Using Asserts in Embedded Systems](https://interrupt.memfault.com/blog/asserts-in-embedded-systems)** by Memfault Interrupt <span class="les-time">~30 min</span><br>Cheap, and they find bugs weeks earlier.

### Standards and quality

- [ ] <span class="les-tag">Book</span> **[Embedded C Coding Standard (BARR-C)](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard)** by Michael Barr <span class="les-time">~2 h, free PDF</span><br>A readable, free coding standard aimed at avoiding bugs. Adopt it for your projects until your team gives you theirs.
- [ ] <span class="les-tag">Video</span> **[An Introduction to MISRA C](https://www.youtube.com/watch?v=6a9Fwvvp92I)** <span class="les-time">~30 min</span><br>What MISRA is, why safety-critical industries require it, and what "mandatory, required, advisory" mean. The current standard is [MISRA C:2023](https://misra.org.uk/).
- [ ] <span class="les-tag">Article</span> **[Efficient C Code for 8-bit Microcontrollers](https://barrgroup.com/embedded-systems/how-to/efficient-c-code)** and **[Optimizing Embedded Code for Size and Speed](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/code-optimization-size-speed)** by Barr Group <span class="les-time">~45 min</span><br>Measure first, then the handful of techniques that actually help.

### Testing

- [ ] <span class="les-tag">Article</span> **[Embedded C/C++ Unit Testing Basics](https://interrupt.memfault.com/blog/unit-testing-basics)** by Memfault Interrupt <span class="les-time">~1 h</span><br>Building firmware modules on the host with CppUTest, and faking the hardware. Follow along.
- [ ] <span class="les-tag">Tool</span> **[Unity and Ceedling](https://www.throwtheswitch.org/)** by ThrowTheSwitch <span class="les-time">Setup ~1 h</span><br>The most common C unit test framework in firmware, with a mock generator (CMock). Alternative: [CppUTest](https://cpputest.github.io/).
- [ ] <span class="les-tag">Video</span> **[Embedded Software Testing](https://www.youtube.com/playlist?list=PL_DQiOR0jhbU3ZKyYIV9oxfcqXTpbK4Le)** by Phil Koopman, CMU <span class="les-time">~1.5 h</span><br>Test plans, coverage, and why "it worked on my desk" is not a test strategy, from a safety expert.
- [ ] <span class="les-tag">Book</span> <span class="les-tag les-paid">Paid</span> **[Test-Driven Development for Embedded C](https://pragprog.com/titles/jgade/test-driven-development-for-embedded-c/)** by James Grenning<br>The book that convinced firmware engineers TDD applies to them. Read chapters 1 to 5 if you can get it.

### Shipping

- [ ] <span class="les-tag">Article</span> **[Device Firmware Update Cookbook](https://interrupt.memfault.com/blog/device-firmware-update-cookbook)** by Memfault Interrupt <span class="les-time">~1 h</span><br>Bootloader, application slots, image headers, and rollback. How products update themselves without bricking.
- [ ] <span class="les-tag">Article</span> **[Building a Tiny CLI Shell for Tiny Firmware](https://interrupt.memfault.com/blog/firmware-shell)** by Memfault Interrupt <span class="les-time">~45 min</span><br>A command line over UART is the most useful debugging and factory-test tool you can add to any product.
- [ ] <span class="les-tag">Docs</span> **[Semantic Versioning](https://semver.org/)** and **[Doxygen](https://www.doxygen.nl/)** <span class="les-time">~30 min</span><br>Version numbers that mean something, and API docs generated from comments.

## Do

Build these as one growing project on the Nucleo. It becomes the base for Module 10 and your capstone.

- [ ] **Checkpoint 9.1: Layer it.** Restructure your Module 8 code into folders: `hw/` (register access, vendor HAL), `drivers/` (UART, I2C, your sensor), `app/` (the logic), and `bsp/` (which pin is which on *this* board). The rule: `app/` includes nothing from `hw/`. Draw the dependency diagram in your README.
- [ ] **Checkpoint 9.2: Ring buffer and interrupt-driven UART.** Write a ring buffer module with a unit test that runs on your laptop and covers empty, full, wrap-around, and overflow. Then use two of them for interrupt-driven UART TX and RX on the Nucleo. Blast data at it faster than the app consumes and prove nothing is silently lost (or that overflow is detected).
- [ ] **Checkpoint 9.3: State machine.** Implement a small product behavior as an explicit state machine: for example, a device that is IDLE, then SAMPLING when a button is pressed, ALERTING when the sensor crosses a threshold, and back to IDLE after a timeout. Events come from a queue; no blocking anywhere. Draw the state diagram first. Unit test the state machine on the host with fake events.
- [ ] **Checkpoint 9.4: Test the driver without the hardware.** Give your sensor driver a small interface for "read register" and "write register." In the unit test, replace it with a fake that returns canned bytes, and test that the driver decodes temperature correctly, handles a NACK, and rejects a wrong chip ID. Run the tests with one command.
- [ ] **Checkpoint 9.5: CI and standards.** Put the host tests in GitHub Actions so every push runs them and cross-compiles the firmware. Add a formatter configuration and apply BARR-C rules you can automate. Add a CLI with `version`, `sensor read`, and `reboot` commands. Tag a release with a semantic version that the firmware reports over the CLI.

## Check yourself

- Why should the application layer not include the vendor's HAL header? What does it cost you when it does?
- Explain how a single-producer, single-consumer ring buffer can be safe between an ISR and `main()` without disabling interrupts. What assumption makes it work?
- What is wrong with a `switch` on a state variable where each case has nested `if`s on flags? What does a table-driven or hierarchical state machine buy you?
- How do you unit test a function that writes to a hardware register?
- A firmware update loses power halfway. Describe what a well-designed bootloader does on next boot.

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Book</span> **[Practical UML Statecharts in C/C++, 2nd ed.](https://www.state-machine.com/psicc2)** by Miro Samek <span class="les-time">Free PDF</span><br>The full treatment of hierarchical state machines and active objects.
- [ ] <span class="les-tag">Book</span> **[Programming Embedded Systems](https://barrgroup.com/embedded-systems/books/programming-embedded-systems)** by Michael Barr and Anthony Massa <span class="les-time">Free online chapters</span><br>The 2006 classic, free chapter by chapter. Dated examples, timeless structure.
- [ ] <span class="les-tag">Video</span> **[Circular Buffer Implementation in C](https://www.youtube.com/watch?v=uvD9_Wdtjtw)** and **[Producer Consumer Pattern](https://www.youtube.com/watch?v=VXJSJ6c3ZIs)** <span class="les-time">~30 min</span><br>Two short videos if the articles were not enough.
- [ ] <span class="les-tag">Article</span> **[Secure Firmware Updates with Code Signing](https://interrupt.memfault.com/blog/secure-firmware-updates-with-code-signing)** by Memfault Interrupt <span class="les-time">~1 h</span><br>The next step after the DFU cookbook. Returns in Module 14.
- [ ] <span class="les-tag">Community</span> **[Embedded Artistry](https://embeddedartistry.com/)** and **[Beningo Embedded Group](https://www.beningo.com/)** <span class="les-time">Ongoing</span><br>Two practitioners who write constantly about firmware architecture, process, and quality.

</details>