---
progress: false
---
# The original MSP430 course

The 2020 edition of this guide was organized around one free university video course: **[Intro to Embedded Systems Design with the MSP430FR2355](https://www.youtube.com/playlist?list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm)** by the YouTube channel [Digital Logic & Programming](https://www.youtube.com/@digitallogicprogramming2199). It is a complete, lecture-style course on a Texas Instruments 16-bit microcontroller, and every video was still online when we checked in September 2026.

The main guide now uses the Raspberry Pi Pico 2 and STM32, because that is where the industry is. But this course remains an excellent way to see every concept from Phases 1 and 2 taught a second time on a different architecture, which is exactly how you learn what is universal and what is vendor-specific. If you have an MSP430FR2355 LaunchPad, or you learn best from lectures, work through it alongside Phase 2.

Below are the lectures the original guide linked, grouped by topic in the order the course teaches them. Tick them off like any other module.

## Overview

- [ ] [1.1 Embedded Systems Overview](https://www.youtube.com/watch?v=KfFBEBN5UHU&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=1)
- [ ] [3.2 Computer Hardware](https://www.youtube.com/watch?v=NaXZqulP3vc&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=3)
- [ ] [Computer Software](https://www.youtube.com/watch?v=E9f5fHlEl5s&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=4)
- [ ] [4.1 MSP430 Hardware Overview](https://www.youtube.com/watch?v=cHyIz3Tksho&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=5)
- [ ] [MSP430 Software Overview](https://www.youtube.com/watch?v=4Hl2YBCYmRo&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=6)

## C on the MSP430

- [ ] [Switching to C: Arithmetic](https://www.youtube.com/watch?v=7KMy0lgxZhI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=70)
- [ ] [Switching to C: Bitwise Logic Operations](https://www.youtube.com/watch?v=KZs5eT5XDGU&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=71)

## GPIO

- [ ] [Using GPIO with the MSP430](https://www.youtube.com/watch?v=WsbA_iPXIvw)
- [ ] [Digital Outputs](https://www.youtube.com/watch?v=phxF_q44G1Y&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=72)
- [ ] [Digital Inputs and Polling](https://www.youtube.com/watch?v=_6tTvj_D2UA&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=73)

## Interrupts

- [ ] [Overview and Basic Concepts](https://www.youtube.com/watch?v=EqaKOg5HiaU&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=47)
- [ ] [Overview of the Interrupt Vector Table](https://www.youtube.com/watch?v=NoBGeTqtj3g&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=48)
- [ ] [The Stack During an IRQ and Nested IRQs](https://www.youtube.com/watch?v=FMVhk1NrlRs&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=49)
- [ ] [The Responsibility of the Developer When Using IRQs](https://www.youtube.com/watch?v=Ua9Rn08kGaE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=50)
- [ ] [The IRQs on the MSP430FR2355](https://www.youtube.com/watch?v=E84jZj0Nqk8&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=51)
- [ ] [Port Interrupts: Overview](https://www.youtube.com/watch?v=ASLzzwbagmE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=52)
- [ ] [Reading a Switch Using a Port IRQ](https://www.youtube.com/watch?v=zeOZi85T9EI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=53)
- [ ] [Changing Edge Sensitivity and Forgetting to Clear a Flag](https://www.youtube.com/watch?v=xeBcOe7ZeiM&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=54)
- [ ] [Interrupts Overview and Port Interrupt Example](https://www.youtube.com/watch?v=3duicvNsBqo&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=74)

## Timers and PWM

- [ ] [Timer Overflow Using ACLK](https://www.youtube.com/watch?v=lha1L3JYBfM&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=75)
- [ ] [Timer Overflow Using ACLK and 12-Bit Counter Length](https://www.youtube.com/watch?v=SdqMQXeV09E&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=76)
- [ ] [Timer Overflow Using SMCLK](https://www.youtube.com/watch?v=bZqTRS456FI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=77)
- [ ] [Timer Overflow Using SMCLK and a Divide-by-4 Prescaler](https://www.youtube.com/watch?v=Qde97beYaVs&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=78)
- [ ] [Timer Compares](https://www.youtube.com/watch?v=-93ZQVd-ELg&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=79)
- [ ] [Creating PWM Signals Using Timer Compares](https://www.youtube.com/watch?v=JvoYbDhFBUY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=80)
- [ ] [Timer Captures](https://www.youtube.com/watch?v=yQduo9dM_ig&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=81)

## UART

- [ ] [Serial Communication Overview](https://www.youtube.com/watch?v=p_YOsh7BSDE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=82)
- [ ] [The UART Standard](https://www.youtube.com/watch?v=4ieYL74YcBY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=83)
- [ ] [Configuring the UART Tx](https://www.youtube.com/watch?v=edfQ5KvGD5I&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=84)
- [ ] [Configuring the Baud Rate](https://www.youtube.com/watch?v=07uSLwIzGSY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=85)
- [ ] [Transmitting a Byte at 115200 Baud](https://www.youtube.com/watch?v=bc6hjHCi8JI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=87)
- [ ] [Transmitting a Byte at 9600 Baud](https://www.youtube.com/watch?v=VWstSzoyMS8&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=88)
- [ ] [Transmitting a Character to the Terminal](https://www.youtube.com/watch?v=XmJZ3pZzrHY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=89)
- [ ] [Transmitting a String to the Terminal](https://www.youtube.com/watch?v=ESC315fIGnM&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=90)
- [ ] [Transmitting a String with IRQs](https://www.youtube.com/watch?v=VBRUyLcqXV4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=91)
- [ ] [Configuring the UART Rx](https://www.youtube.com/watch?v=4mvz00QjAfs&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=92)
- [ ] [Receiving Characters from the Terminal](https://www.youtube.com/watch?v=k4AHC-U45kw&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=93)

## SPI

- [ ] [SPI Overview and Implementation on the MSP430](https://www.youtube.com/watch?v=2J8_dpnaBOk&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=94)
- [ ] [Sending a Byte as a SPI Master](https://www.youtube.com/watch?v=ODmeQ_3gOj4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=95)
- [ ] [Sending a Packet Using UCTXIFG](https://www.youtube.com/watch?v=GRfcO9yX_kg&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=96)
- [ ] [Sending a Packet Using STE/SS](https://www.youtube.com/watch?v=2p2rqeeTCXI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=97)
- [ ] [Receiving a Byte as a SPI Master](https://www.youtube.com/watch?v=A-9yCnwcw7k&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=98)
- [ ] [SPI Slave Behavior](https://www.youtube.com/watch?v=xAs13cgyJ0Y&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=99)

## I2C

- [ ] [What Is I2C and Why the Resistors?](https://www.youtube.com/watch?v=kWz6ekvoNbw&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=100)
- [ ] [Basic Packet Structure](https://www.youtube.com/watch?v=sNYgiHZT_Fo&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=101)
- [ ] [Addressing Slave Registers](https://www.youtube.com/watch?v=FCCoERFwcV4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=102)
- [ ] [Master Configuration on the MSP430FR2355](https://www.youtube.com/watch?v=Bwqd9b7ifwQ&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=103)
- [ ] [Adafruit PCF8523 Real-Time Clock as an I2C Slave](https://www.youtube.com/watch?v=EZl252z3Ee4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=104)
- [ ] [RTC to LaunchPad Connection and a Simple Probe](https://www.youtube.com/watch?v=uAOpQYUCO_Y&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=105)
- [ ] [Writing One Byte to an I2C Slave](https://www.youtube.com/watch?v=BvITEarUMkc&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=106)
- [ ] [Writing a Register Address Plus 3 Bytes](https://www.youtube.com/watch?v=rCa9DVL9Dug&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=107)
- [ ] [Reading One Byte from an I2C Slave](https://www.youtube.com/watch?v=f0DMIgp0LCE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=108)
- [ ] [Reading from a Specific Register Address](https://www.youtube.com/watch?v=F1ag5vycS7s&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=109)
- [ ] [I2C Slave Operation](https://www.youtube.com/watch?v=nxiHAN3ijic&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=110)

## ADC

- [ ] [Overview of ADCs](https://www.youtube.com/watch?v=ZwThTeZnTEk&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=111)
- [ ] [The MSP430 ADC and Configuration](https://www.youtube.com/watch?v=l__XaxTco6I&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=112)
- [ ] [Reading Voltage with Conversion-Complete Polling](https://www.youtube.com/watch?v=HH9DO22BxU4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=113)
- [ ] [Reading Voltage with a Conversion-Complete IRQ](https://www.youtube.com/watch?v=n0YBaQKZoJ4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=114)
- [ ] [Reading Voltage with an IRQ and Low-Power Mode](https://www.youtube.com/watch?v=IiTJzawSwE0&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=115)

## Other complete free courses

If you want another full lecture course rather than the module-by-module approach of this guide:

- **[Modern Embedded Systems Programming](https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM)** by Miro Samek. Cortex-M from the instruction level up to state machines and RTOS design. Companion site at [state-machine.com](https://www.state-machine.com/video-course), code on [GitHub](https://github.com/QuantumLeaps/modern-embedded-programming-course).
- **[Embedded Systems: Shape the World](https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output)** by Jonathan Valvano and Ramesh Yerraballi, UT Austin, on edX. A university lab course on a TI Cortex-M4 LaunchPad, free to audit. Materials also on [Valvano's site](https://users.ece.utexas.edu/~valvano/).
- **[Embedded Software and Hardware Architecture](https://www.coursera.org/learn/embedded-software-hardware)** by University of Colorado Boulder on Coursera, free to audit. The 2020 guide linked individual lectures from this course; those links now redirect to the course page.
- **[Embedded System Engineering lectures](https://users.ece.cmu.edu/~koopman/lectures/index.html)** by Phil Koopman, CMU. Not a beginner course, but the best free material on safety, quality, and real-time systems.
