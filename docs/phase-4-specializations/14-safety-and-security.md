# 14. Safety and security

**Time:** 2 to 3 weeks · **Board:** STM32 Nucleo · **Prerequisites:** Phase 3

## Why this matters

Safety is about the product not hurting anyone even when things go wrong. Security is about the product doing what its owner wants even when someone hostile is involved. Both used to be niche; now automotive, medical, industrial, and increasingly every connected consumer device are regulated on them, and the vocabulary shows up in job postings. This module gives you the map: the standards, the ideas, and the handful of techniques every firmware engineer should be able to implement. Depth comes on the job.

## You will be able to

- Explain what IEC 61508 and ISO 26262 are, what SIL and ASIL levels mean, and how they change the way code is written and tested.
- Say what MISRA C and static analysis contribute to safety, and their limits.
- Threat-model a device: assets, attackers, entry points, and the difference between a debug port and a network port.
- Describe secure boot and a chain of trust, firmware signing, debug lock, and secure update, and implement signing on your own project.
- Use a vetted crypto library correctly and explain why you never write your own.

## Learn

### Safety

- [ ] <span class="les-tag">Video</span> **[Embedded Security, Safety and Software Quality](https://www.youtube.com/playlist?list=PL_DQiOR0jhbXFZtjw6U-19X0jPDmg4UoR)** by Phil Koopman, CMU <span class="les-time">~3 h for the safety and quality lectures</span><br>A safety expert who has testified about real accidents explains what makes software safe. Start with the overview lecture and the ones on critical systems and safety standards. Full index at [Koopman's lecture page](https://users.ece.cmu.edu/~koopman/lectures/index.html).
- [ ] <span class="les-tag">Docs</span> **[ISO 26262: Road vehicles, functional safety](https://www.iso.org/standard/68383.html)** and **[IEC 61508: Functional safety](https://webstore.iec.ch/en/publication/5515)** <span class="les-time">~30 min on the overview pages</span><br>The standards themselves are paid and long. Know what they cover, and that ASIL A to D (automotive) and SIL 1 to 4 (industrial) rank how bad a failure would be and how much rigor is therefore required.
- [ ] <span class="les-tag">Docs</span> **[MISRA](https://misra.org.uk/)** <span class="les-time">~30 min</span><br>Why safety standards point to MISRA C, what the guidelines look like, and what a "deviation" is. You watched the introduction video in Module 9.
- [ ] <span class="les-tag">Video</span> **[Embedded Software Testing](https://www.youtube.com/playlist?list=PL_DQiOR0jhbU3ZKyYIV9oxfcqXTpbK4Le)** by Phil Koopman <span class="les-time">~1.5 h</span><br>Traceability from requirements to tests, coverage, and why safety work is mostly evidence.

### Security

- [ ] <span class="les-tag">Docs</span> **[What is PSA Certified?](https://www.psacertified.org/what-is-psa-certified/)** by Arm and partners <span class="les-time">~45 min</span><br>A practical security framework for IoT devices: the ten security goals, threat models, and certification levels. Read the ten goals; they are your checklist.
- [ ] <span class="les-tag">Docs</span> **[TrustZone for Cortex-M](https://developer.arm.com/Architectures/TrustZone%20for%20Cortex-M)** by Arm and **[Trusted Firmware-M](https://www.trustedfirmware.org/projects/tf-m/)** <span class="les-time">~1 h</span><br>Hardware isolation of secure and non-secure worlds on M33 and newer cores (your Pico 2 has it), and the open-source reference firmware that uses it.
- [ ] <span class="les-tag">Article</span> **[Secure Firmware Updates with Code Signing](https://interrupt.memfault.com/blog/secure-firmware-updates-with-code-signing)** by Memfault Interrupt <span class="les-time">~1 h</span><br>Public-key signatures on firmware images, verified by the bootloader. The single most valuable security feature, explained with code.
- [ ] <span class="les-tag">Docs</span> **[OWASP Embedded Application Security](https://owasp.org/www-project-embedded-application-security/)** and **[OWASP IoT Project](https://owasp.org/www-project-internet-of-things/)** <span class="les-time">~1 h</span><br>The top ten ways embedded devices actually get compromised. Mostly boring: default passwords, open debug ports, unsigned updates.
- [ ] <span class="les-tag">Tool</span> **[Mbed TLS](https://github.com/Mbed-TLS/mbedtls)** <span class="les-time">~1 h to read the docs</span><br>The crypto library most MCU projects use: hashes, HMAC, AES, ECDSA, TLS. Learn its API for SHA-256 and ECDSA verification; you will use them in the checkpoint.
- [ ] <span class="les-tag">Docs</span> **[EU Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act)** <span class="les-time">~20 min</span><br>From 2027, products with digital elements sold in the EU must meet security requirements including secure updates and vulnerability handling. This is why your next employer cares.

### Crypto for firmware engineers, in one paragraph

You need four primitives and no more: a **hash** (SHA-256) to fingerprint data, an **HMAC** to authenticate data with a shared key, **symmetric encryption** (AES-GCM) to keep data secret and authenticated, and **digital signatures** (ECDSA or Ed25519) so a device can verify something came from you without holding a secret that an attacker could extract. Use a vetted library, use the modes it recommends, generate keys properly, and never store a private key on the device. Do not invent a scheme, do not "obfuscate," and do not use a hash where you need a signature. Almost every embedded security failure is one of those mistakes.

## Do

- [ ] **Checkpoint 14.1: Threat model your capstone.** One page: what the device protects (assets), who might attack it and why, every physical and logical way in (debug port, UART CLI, update mechanism, radio, buttons), and for each, what you will do. Rank by likelihood times impact. This document is what a security review starts from.
- [ ] **Checkpoint 14.2: Sign your firmware.** Split your Nucleo project into a small bootloader and an application. Add an image header with length, version, and an ECDSA signature over the image. The bootloader verifies the signature with Mbed TLS and a public key baked in, and refuses to boot a tampered or unsigned image. Prove it by flipping one byte.
- [ ] **Checkpoint 14.3: Lock the door.** Read your STM32's readout protection (RDP) documentation. On a board you can afford to lose, or in a clearly reversible level, enable protection and confirm the debugger can no longer read flash. Understand what each level makes irreversible before you touch it.
- [ ] **Checkpoint 14.4: Safety analysis lite.** Take the state machine from Module 9. For each state and transition, write down what happens if a sensor reading is wrong, stale, or missing, and what the safe response is. Add explicit handling for each and tests that prove it. This is a miniature FMEA, the core activity of safety engineering.

## Check yourself

- What is the difference between a safety requirement and a security requirement? Give one example of each for a smart thermostat.
- What does ASIL D require that ASIL A does not, in terms of process and code?
- Why does secure boot require the *first* code to run to be immutable, and where does that code live?
- A bootloader checks a CRC before booting. Is that security? Why not?
- Your product's private signing key leaks. What can an attacker now do, and what should the design have made possible in response?

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Community</span> **[Better Embedded System Software](https://betterembsw.blogspot.com/)** by Phil Koopman <span class="les-time">Browse</span><br>Koopman's blog, with a checklist of embedded software risks that doubles as a review guide.
    - [ ] <span class="les-tag">Docs</span> **[PSA Certified](https://www.psacertified.org/)** <span class="les-time">Browse</span><br>Certified chips and reference implementations, if your product needs a certificate.
    - [ ] <span class="les-tag">Docs</span> **[Trusted Firmware](https://www.trustedfirmware.org/)** <span class="les-time">Browse</span><br>Open-source secure boot and secure world firmware for Arm.
    - **Fault injection and side channels**, in one line: attackers with physical access glitch clocks and power supplies to skip instructions and read power traces to extract keys. Know the words; defending against them is specialist work.
