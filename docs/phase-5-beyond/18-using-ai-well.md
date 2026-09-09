# 18. Using AI well

**Time:** 1 week · **Board:** whatever you are working on · **Prerequisites:** Phase 3, so that you have real code to try this on

## Why this matters

This guide asked you to learn without AI first. Not because the tools are bad, but because an assistant is a multiplier: it makes a strong engineer faster and a weak one confidently wrong. On embedded systems the failure mode is specific and expensive. Language models are very good at the shape of firmware code and unreliable about the facts that make it work: register addresses, bit positions, clock trees, errata, and timing. A model will produce a beautiful, idiomatic driver for a part with a register that does not exist. If you cannot check it against the datasheet, you cannot use it safely. Now that you can, this module shows how professionals get real leverage from these tools.

## The rule of thumb

**If you could not review it, do not ship it.** Use AI freely for anything you could have written yourself given time. Be suspicious of anything you could not have, and verify it before it runs on hardware. For learning, reverse it: struggle first, then ask the assistant to critique what you did.

## You will be able to

- Name the tasks where AI reliably saves embedded engineers time, and the ones where it reliably wastes it.
- Recognize the characteristic hallucinations in generated firmware and catch them fast.
- Structure a prompt with the right context (datasheet sections, existing code, constraints) to get useful output.
- Keep proprietary and NDA-covered code out of tools that should not see it, including by running models locally.
- Use AI to learn faster without letting it learn instead of you.

## Where it helps

| Task | Why it works | How to verify |
| --- | --- | --- |
| **Explaining unfamiliar code** | Pattern recognition is what models do best. Paste a function, ask what it does and what could go wrong. | Trace one path yourself. If the explanation disagrees with the code, trust the code. |
| **Datasheet Q&A** | Give the model the relevant chapter (paste the text, or use a tool that reads PDFs) and ask precise questions. Much faster than searching 1,300 pages. | Every register name and bit it cites, look up. It is a search accelerator, not a source. |
| **Boilerplate** | CMake files, Makefiles, linker script skeletons, GitHub Actions, Doxygen comments, README structure. | Build it. The compiler and the linker are excellent reviewers. |
| **Unit tests** | Ask for tests of your ring buffer, parser, or state machine, including edge cases you did not think of. | Read each test and ask whether it tests behavior or just restates the implementation. Delete the ones that do the latter. |
| **Code review** | "Review this ISR for shared-data problems." "What happens if this I2C transaction NACKs?" Models are good at finding classes of bug you already know exist. | Reproduce any bug it claims before fixing. It will invent some. |
| **Rubber-duck debugging** | Describe the symptom, what you have measured, what you have ruled out. Being forced to write that down often solves it. | You verify by measuring. That is the whole point of Module 11. |
| **Translating between vendors** | "Here is my STM32 HAL SPI init. What are the equivalent RP2350 SDK calls?" Gets you to the right part of the docs fast. | The docs. Always the docs. |
| **Writing** | Commit messages, design memos, test plans, the README your portfolio project needs. | Read it aloud. Cut what you would not say. |

## Where it hurts

- **Register-level code for a specific part.** Models blend chips. A driver for "STM32" will mix F1, F4, and G0 register names. Insist it work from a datasheet excerpt you provide, and check every constant.
- **Timing and clock configuration.** Prescaler math, PLL settings, and baud divisors are exactly the kind of arithmetic models get subtly wrong. Compute it yourself, then ask the model to check your work, not the other way around.
- **Anything about a part's errata or silicon revision.** It will not know, and it will not say so.
- **Concurrency.** Generated RTOS code is confidently unsafe surprisingly often: shared state without protection, mutexes taken in ISRs, blocking in callbacks. Review every shared variable.
- **"Is this safe / compliant / certified?"** No. Standards work requires evidence, not opinion. Use models to draft documents, never to sign them.
- **Learning by having it done for you.** If you cannot explain the code, you did not learn it. The struggle is not a bug in the process. It is the process.

## Working methods

**Give it the ground truth.** The single biggest improvement in output quality comes from including the relevant datasheet or reference manual section in the prompt, plus your existing code and your constraints (which chip, which toolchain, no dynamic allocation, must be MISRA-friendly). Ask it to cite which part of the provided text it used.

**Ask for the diff, not the file.** "Change only the baud rate calculation and explain why" gets reviewable output. "Rewrite my UART driver" gets a rewrite you now have to review completely.

**Make it argue with itself.** Ask for the three most likely bugs in its own output. Ask what assumptions it made. Ask what it would need to know to be sure.

**Keep secrets out.** Proprietary code, customer datasheets under NDA, and unreleased schematics do not go into a public tool. Your employer will have a policy; if they do not, ask. For NDA-safe work, local models via [Ollama](https://ollama.com/) or similar run entirely on your machine and are good enough for explanation, boilerplate, and review, if slower.

**Use the agentic tools with a leash.** Coding agents that edit files, run builds, and iterate on compiler errors are useful for firmware: they can grind through a port or a refactor while you review. They are also fast at making a mess. Work on a branch, review every diff, keep your unit tests as the gate, and never let one flash a board you cannot recover.

## Learn

- [ ] <span class="les-tag">Video</span> **[Coredump 07: AI, Open Source, and the Future of Embedded Development](https://memfault.com/resources/coredump-007-ai-open-source-and-the-future-of-embedded-development/)** by Memfault <span class="les-time">~1 h</span><br>Working firmware engineers discussing what the tools are actually good for in 2025.
- [ ] <span class="les-tag">Article</span> **[What we've been reading in March 2025](https://interrupt.memfault.com/blog/march-2025-roundup)** by Memfault Interrupt <span class="les-time">~30 min</span><br>A grab bag from the best embedded blog, with several pieces on AI-assisted firmware work. Follow the [Interrupt](https://interrupt.memfault.com/) roundups for the ongoing conversation.
- [ ] <span class="les-tag">Podcast</span> **[Embedded AI: Intelligence at the Deep Edge](https://podcasts.apple.com/us/podcast/embedded-ai-intelligence-at-the-deep-edge/id1808256915)** <span class="les-time">Pick the episodes on context management and coding with LLMs, ~2 h</span><br>Practitioners on using models in embedded workflows, including the failure modes.
- [ ] <span class="les-tag">Tool</span> **[Ollama](https://ollama.com/)** <span class="les-time">Setup ~30 min</span><br>Run open-weight models locally for work that cannot leave your machine.

## Do

- [ ] **Checkpoint 18.1: Catch the hallucination.** Ask an assistant, with no datasheet provided, to write a register-level GPIO toggle for the RP2350 and for your STM32. Check every address and bit against the datasheets. Count the errors. Then repeat with the relevant datasheet sections pasted in and count again. Write down what changed.
- [ ] **Checkpoint 18.2: Review your own code.** Feed your Module 9 ring buffer and state machine to an assistant and ask for a review focused on concurrency and edge cases. Verify each finding by writing a test that would expose it. Record how many were real.
- [ ] **Checkpoint 18.3: Tests you did not think of.** Ask for unit tests for your sensor driver. Keep the ones that test behavior you had not covered, delete the ones that merely restate your implementation, and note the ratio.
- [ ] **Checkpoint 18.4: Datasheet Q&A.** Paste the power chapter of your reference manual and ask five specific questions about sleep modes and wake sources. Check each answer against the text. Then ask a question the chapter does not answer and see whether the model admits it.
- [ ] **Checkpoint 18.5: Your policy.** Write half a page on how you will use these tools on your capstone: what you will delegate, what you will always do by hand, how you will verify, and what will never be pasted into a hosted tool. Put it in the project's README.

## Check yourself

- Why is a language model more reliable at explaining a function than at writing a register-level driver?
- What context most improves generated firmware, and why?
- Name three classes of bug you should specifically look for in generated RTOS code.
- What is the difference between using AI to go faster and using it to avoid learning, and how can you tell which one you are doing?
