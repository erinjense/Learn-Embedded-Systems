# 20. Career and community

**Time:** Ongoing · **Prerequisites:** a capstone, or the will to build one

## Why this matters

Embedded is a small field with a long memory. The people who will hire you, help you, and teach you the rest are reachable: on podcasts, in forums, at conferences, and in the comment sections of the blogs you have been reading for nineteen modules. This module is about getting hired and then getting better for the next twenty years.

## Getting hired

### The portfolio

One finished capstone with a README, tests, a design doc, and a demo video is worth more than ten half-built projects. Put it at the top of your GitHub profile. Pin it. Your Phase 1 and 2 checkpoint repository is the second pin: it shows the fundamentals, and the commit history shows you did the work.

A short blog, even three posts, changes how you are perceived. Write up one bug you solved with a logic analyzer, one design decision from your capstone, and one thing this guide got you stuck on. Engineers who can write get promoted.

### What interviews ask

Embedded interviews are more predictable than most. Expect:

- **C fundamentals:** pointers, `volatile`, `static`, `const`, bit manipulation, struct padding, integer promotion, undefined behavior. Modules 2 and 5. Be ready to write code on a whiteboard or in a shared editor without a compiler.
- **Hardware concepts:** what happens at reset, interrupts vs polling, ISR rules, memory map, the difference between SPI and I2C, how a UART frame looks, what a watchdog is for. Modules 3 to 7.
- **Systems:** RTOS primitives, priority inversion, deadlock, when to use an RTOS at all, how a bootloader works. Modules 9 and 10.
- **Debugging stories:** "Tell me about the hardest bug you found." Have three, with what you measured. Module 11.
- **Design:** "Design a battery-powered sensor that reports every hour." They want your reasoning about power, radio, storage, and failure modes. Modules 12 to 16.
- **Behavior:** how you handle being wrong, working with hardware engineers, and shipping under a deadline.

- [ ] <span class="les-tag">Article</span> **[Cracking the (Embedded) Coding Interview](https://www.embeddedrelated.com/showarticle/1503.php)** by Manasi Rajan <span class="les-time">~30 min</span><br>What to expect and how to prepare, from someone who has sat on both sides.
- [ ] <span class="les-tag">Article</span> **[Embedded Artistry: Interviews](https://embeddedartistry.com/blog/category/interviews/)** by Phillip Johnston <span class="les-time">~1 h</span><br>How a thoughtful firmware shop interviews, including their favorite open-ended C question. Practice the questions.

### Job titles decoded

"Firmware engineer," "embedded software engineer," and "embedded systems engineer" mostly mean the same thing. "Embedded Linux engineer" means Module 15. "BSP engineer" means bringing up new boards, often Linux. "Systems engineer" varies wildly; read the description. "DSP engineer" and "controls engineer" are Module 17 as a career. Look at the parts and tools named in the posting: STM32, Zephyr, FreeRTOS, Yocto, CAN, BLE. Each is a module here.

## Getting better

### Read and listen

- [ ] <span class="les-tag">Community</span> **[Interrupt](https://interrupt.memfault.com/)** by Memfault <span class="les-time">Ongoing</span><br>The best embedded blog running, plus a monthly "what we've been reading" roundup that keeps you current.
- [ ] <span class="les-tag">Community</span> **[Embedded Artistry](https://embeddedartistry.com/)** <span class="les-time">Ongoing</span><br>Architecture, process, and craftsmanship, with a big free archive and a beginner's page.
- [ ] <span class="les-tag">Podcast</span> **[Embedded.fm](https://embedded.fm/)** by Elecia and Christopher White <span class="les-time">Weekly, ~1 h</span><br>Interviews with engineers across the field since 2013. Browse the [episode list](https://embedded.fm/episodes) by topic.
- [ ] <span class="les-tag">Podcast</span> **[The Amp Hour](https://theamphour.com/)** <span class="les-time">Weekly, ~1 h</span><br>Electronics and hardware industry conversation. The hardware side of your job.
- [ ] <span class="les-tag">Community</span> **[Beningo Embedded Group](https://www.beningo.com/)** by Jacob Beningo <span class="les-time">Ongoing</span><br>Practical articles on process, architecture, and tooling for firmware teams.
- [ ] <span class="les-tag">Community</span> **[The Embedded Muse archive](https://www.ganssle.com/tem-back.htm)** by Jack Ganssle <span class="les-time">Browse</span><br>Ganssle retired the newsletter with [issue 500](https://www.ganssle.com/tem/tem500.html) in October 2024 after 27 years. The archive is a career's worth of wisdom, tool reviews, and reader war stories.
- [ ] <span class="les-tag">Community</span> **[Hackaday](https://hackaday.com/)** <span class="les-time">Daily</span><br>What people are building. Not always industrial, always inspiring.

### Ask and answer

- [ ] <span class="les-tag">Community</span> **[r/embedded](https://www.reddit.com/r/embedded/)** and its **[wiki](https://www.reddit.com/r/embedded/wiki/index/)** <span class="les-time">Ongoing</span><br>Active, generally kind, and the wiki's FAQ answers the questions everyone asks. Search before posting.
- [ ] <span class="les-tag">Community</span> **[EEVblog forum](https://www.eevblog.com/forum/)** <span class="les-time">Ongoing</span><br>Deep hardware expertise and honest reviews of tools. Thicker skin required.
- [ ] <span class="les-tag">Community</span> **[ST Community](https://community.st.com/)**, the **[FreeRTOS forums](https://www.freertos.org/)**, and your other vendors' forums <span class="les-time">As needed</span><br>Where the people who made the chip and the RTOS answer questions.

### Show up

- [ ] <span class="les-tag">Community</span> **[Embedded Online Conference](https://www.embeddedonlineconference.com/)** <span class="les-time">Yearly, online</span><br>Talks from the people whose blogs you have been reading. Recorded, affordable, and student discounts exist.
- [ ] <span class="les-tag">Community</span> **[Embedded World](https://www.embedded-world.de/en)** (Nuremberg, and now Austin) <span class="les-time">Yearly</span><br>The industry's big trade show. Every vendor, every tool, free exhibition passes if you register early.
- [ ] <span class="les-tag">Community</span> **[Embedded Open Source Summit](https://events.linuxfoundation.org/embedded-open-source-summit/)** <span class="les-time">Yearly</span><br>Zephyr, embedded Linux, and open hardware under one roof, run by the Linux Foundation.
- [ ] <span class="les-tag">Community</span> **[Hackaday Supercon](https://hackaday.io/superconference)** <span class="les-time">Yearly</span><br>The hardware hacker conference. Small, friendly, and the badge is a project.

Local hackerspaces and university IEEE chapters are where you meet people in person and borrow an oscilloscope. Find one.

## Do

- [ ] **Pin your two repositories** and write a two-paragraph GitHub profile README that says what you can do and links your capstone demo.
- [ ] **Write one blog post** about a bug you solved with measurement. Post the link in a community and ask for feedback.
- [ ] **Answer three questions** in a forum where you know the answer. Teaching is the fastest way to find your own gaps.
- [ ] **Subscribe to two sources** from the list and read them for a month. Unsubscribe from the ones you skip.
- [ ] **Do one mock interview** with a friend using the topics above. Record it. Watch it. Wince. Improve.

## Check yourself

- What are the three bugs you would tell an interviewer about, and what did you measure in each?
- If a posting says "Zephyr, nRF52, BLE, low power," which modules did you do and which would you brush up?
- Who are three engineers whose writing you would recognize by style? That is how you know you are in the field.
