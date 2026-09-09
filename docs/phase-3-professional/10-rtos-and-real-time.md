# 10. Real time and RTOS

**Time:** 2 to 3 weeks · **Board:** STM32 Nucleo · **Prerequisites:** Module 9

## Why this matters

"Real time" does not mean fast. It means a deadline is part of correctness: the motor current must be sampled every 50 microseconds, the brake signal must be acted on within 10 milliseconds, every time, or the system has failed. An RTOS is one tool for meeting deadlines when a system has many things to do at once. It is also the easiest way to create bugs you have never seen before: deadlocks, priority inversion, and stack overflows that only appear on Tuesdays. This module teaches when you need an RTOS, when you do not, and how to use one without hurting yourself.

## You will be able to

- Define hard and soft real time, jitter, latency, and worst-case execution time, and say which your project needs.
- Choose between a superloop, an event-driven design, an RTOS, and Linux for a given product, with reasons.
- Use tasks, queues, semaphores, mutexes, and software timers in FreeRTOS, and explain what each costs.
- Explain and reproduce priority inversion and deadlock, then fix them.
- Get started with Zephyr and know why the industry is moving toward it.

## Learn

- [ ] <span class="les-tag">Article</span> **[Operating Systems for Embedded Software](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/real-time-operating-systems)** by Michael Barr <span class="les-time">~45 min</span><br>What an RTOS does, how a scheduler works, and the primitives, from first principles.
- [ ] <span class="les-tag">Video</span> **[Introduction to RTOS](https://www.youtube.com/playlist?list=PLEBQazB0HUyQ4hAPU1cJED6t3DU0h34bz)** by Shawn Hymel, DigiKey <span class="les-time">12 parts, ~4 h</span><br>The gentlest complete FreeRTOS course: tasks, memory, queues, mutexes, semaphores, timers, interrupts, deadlock, priority inversion, multicore. Uses an ESP32 but every concept applies; do the [exercises](https://github.com/ShawnHymel/introduction-to-rtos) on your Nucleo instead.
- [ ] <span class="les-tag">Book</span> **[Mastering the FreeRTOS Real Time Kernel](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)** by Richard Barry <span class="les-time">~8 h, free</span><br>The official book, kept current on [GitHub](https://github.com/FreeRTOS/FreeRTOS-Kernel-Book). Read chapters on tasks, queues, and resource management closely.
- [ ] <span class="les-tag">Article</span> **[Mutexes and Semaphores Demystified](https://barrgroup.com/embedded-systems/how-to/rtos-mutex-semaphore)** by Michael Barr <span class="les-time">~30 min</span><br>They are not interchangeable. The clearest explanation of why.
- [ ] <span class="les-tag">Video</span> **[Modern Embedded Systems Programming Course](https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM)** by Miro Samek <span class="les-time">RTOS lessons (around 22 to 30), ~5 h</span><br>Samek writes a minimal RTOS from scratch on video: context switch, scheduler, blocking. After this, no RTOS is a black box. Then his lessons on the superloop vs RTOS vs active objects debate.
- [ ] <span class="les-tag">Course</span> **[Embedded System Engineering lectures](https://users.ece.cmu.edu/~koopman/lectures/index.html)** by Phil Koopman, CMU <span class="les-time">Real-time scheduling lectures, ~2 h</span><br>Rate monotonic scheduling, blocking, and the math that tells you whether your deadlines are met.
- [ ] <span class="les-tag">Docs</span> **[Zephyr Project: Introduction](https://docs.zephyrproject.org/latest/introduction/index.html)** and **[Getting Started](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)** <span class="les-time">~3 h with setup</span><br>Zephyr is a Linux Foundation RTOS with a device tree, a build system, and drivers for hundreds of boards, and it is what many new products are built on. Build `blinky` and `hello_world` for your Nucleo.
- [ ] <span class="les-tag">Course</span> **[nRF Connect SDK Fundamentals](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)** by Nordic Developer Academy <span class="les-time">~8 h, free</span><br>The best structured Zephyr course, built around Nordic's chips. Lessons 1 to 4 (build system, device tree, GPIO, threads) transfer to any Zephyr board.

### Which one?

| Approach | Use when | Watch out for |
| --- | --- | --- |
| **Superloop** (poll everything, ISRs set flags) | Few tasks, simple timing, tiny MCU. Most small products. | Grows into spaghetti; one slow function delays everything. |
| **Event-driven** (queues of events, run-to-completion handlers, state machines) | Many independent behaviors, deterministic timing, safety-relevant code. | Requires discipline about never blocking. Module 9 taught the pieces. |
| **RTOS** (preemptive tasks) | Tasks with genuinely different rates or priorities; third-party stacks (USB, TCP/IP, BLE) that expect threads. | Shared data, priority inversion, stack sizing, harder debugging. |
| **Linux** | Networking, filesystems, displays, lots of RAM, boot time in seconds is acceptable. | Not hard real time without effort; power and cost. Module 15. |

## Do

- [ ] **Checkpoint 10.1: Measure before you assume.** In your Module 9 superloop project, toggle a GPIO at the top of the loop and look at it on the logic analyzer. Measure the loop period and its jitter while the UART is busy. Write down your worst-case number. This is why an RTOS might (or might not) be needed.
- [ ] **Checkpoint 10.2: FreeRTOS on the Nucleo.** Add FreeRTOS (CubeMX can do it) and split your project into tasks: sensor sampling at a fixed rate, a UART CLI task, and an LED/status task. Pass sensor data through a queue. Verify the sampling task's period on the logic analyzer with the CLI active and compare to 10.1.
- [ ] **Checkpoint 10.3: Break it three ways.** (a) Share a variable between two tasks without protection and make the corruption visible. Fix it with a mutex. (b) Create a priority inversion: low-priority task holds a mutex the high-priority task wants, medium-priority task hogs the CPU. Watch the high-priority task starve; fix it with priority inheritance. (c) Under-size a task's stack and watch it crash; then use the RTOS's high-water-mark API to size every stack from data.
- [ ] **Checkpoint 10.4: Zephyr blinky and sensor.** Build Zephyr's blinky for your Nucleo. Then wire up your I2C sensor through Zephyr's device tree and sensor API instead of your own driver, and print readings. Note what the device tree replaced from your BSP.

## Check yourself

- A system samples audio at 48 kHz and updates a display at 30 Hz. Which is hard real time, which is soft, and why?
- What is the difference between a binary semaphore and a mutex, and why should an ISR never take a mutex?
- Describe priority inversion in two sentences, and name the standard fix.
- Two tasks each take mutex A then mutex B, but in opposite order. What happens, and what is the rule that prevents it?
- Why does an RTOS need per-task stacks, and how do you decide how big each one is?

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Docs</span> **[FreeRTOS documentation](https://www.freertos.org/Documentation/00-Overview)** <span class="les-time">Reference</span><br>The API reference and the kernel configuration options you will tune.
- [ ] <span class="les-tag">Video</span> **[Embedded Security, Safety and Software Quality](https://www.youtube.com/playlist?list=PL_DQiOR0jhbXFZtjw6U-19X0jPDmg4UoR)** by Phil Koopman <span class="les-time">Concurrency and timing lectures, ~1.5 h</span><br>Race conditions and timing failures as they show up in shipped products.
- [ ] <span class="les-tag">Community</span> **[Golioth blog](https://blog.golioth.io/)** <span class="les-time">Ongoing</span><br>Practical Zephyr articles from a team that uses it daily.
- **Other RTOSes**, in one line each: **Eclipse ThreadX** (formerly Azure RTOS, safety-certified, now open source), **Micrium µC/OS** (classic, now open source), **RTX** (Arm's own, part of CMSIS). If you know FreeRTOS and Zephyr, the others take an afternoon.

</details>