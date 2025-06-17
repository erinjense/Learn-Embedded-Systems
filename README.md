# Learn Embedded Systems

## Introduction

This document is a collection of resources for learning embedded systems engineering.

[ ] [Article: "Introduction", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/introduction)

[ ] [Video: "Embedded Systems Overview", YouTube](https://www.youtube.com/watch?v=KfFBEBN5UHU&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=1)

---

## Table of Contents
- [Development Environment](#development-environment)
    - [Cross Compilation](#cross-compilation)
    - [Development Tools](#development-tools)

- [Embedded Hardware](#embedded-hardware)
 
    - [Computer Architecture](#computer-architecture)
        - [RISC](#risc)
        - [ARM](#arm)
        - [Endianness](#endianness)

    - [Embedded Platforms](#embedded-platforms)
        - [Microcontroller](#microcontroller)
        - [System on a Chip (SoC)](#system-on-a-chip)
        - [Single Board Computer](#single-board-computer)
        - [FPGA](#fpga)

    - [Serial Communication](#serial-communication)
        - [SPI](#spi)
        - [I2C](#i2c)
        - [UART](#uart)
        - [RS232](#rs232)
        - [RS485](#rs485)

    - [GPIO](#gpio)
        - [Pin Modes](#pin-modes)
            - [Pull Up/Down](#pull-up/down)
            - [Push-Pull](#push-pull)
            - [Open-Drain](#open-drain)
        - [Direction](#direction)
            - [Input](#input)
            - [Output](#output)

    - [Analog Input](#analog-input)
        - [ADC](#adc)

    - [Analog Output](#analog-output)
        - [PWM](#pwm)
        - [DAC](#dac)

    - [Timer](#timer)

    - [Constraints](#constraints)
        - [Power](#power)
        - [Memory](#memory)
            - [Program (ROM)](#program-(rom))
            - [Dynamic (RAM)](#dynamic-(ram))

- [Embedded Operating Systems](#embedded-operating-systems)
    - [Bare Metal](#bare-metal)
    - [GNU/Linux](#gnu/linux)
    - [Real Time Operating Systems](#real-time-operating-systems)

- [Embedded Software](#embedded-software)
    - [C Keywords](#c-keywords)
        - [volatile](#volatile)
        - [static](#static)
        - [const](#const)
        - [pragma](#pragma)
        - [attribute](#attribute)
        - [restrict](#restrict)
        - [inline](#inline)
    - [Watchdog Timer](#watchdog-timer)
    - [Memory Alignment](#memory-alignment)
    - [Pointers](#pointers)
    - [Bit Manipulation](#bit-manipulation)
        - [Bitwise](#bitwise)
        - [Arithmetic](#arithmetic)
    - [Interrupts](#interrupts)
    - [Optimizations](#optimizations)
    - [Coding Standards](#coding-standards)
        - [MISRA](#misra)
        - [ISO/IEC 90003](#iso/iec-90003)

- [Embedded Software Layers](#embedded-software-layers)
    - [Peripheral and Hardware Layer](#peripheral-and-hardware-layer)
        - [Registers](#registers)
        - [Bit Fields](#bit-fields)
        - [Memory Map](#memory-map)
        - [Peripherals](#peripherals)
 
    - [Hardware Abstraction Layer (HAL)](#hardware-abstraction-layer)
        - [Register Definition Files](#register-definition-files)
        - [Memory Access Methods](#memory-access-methods)
        - [Board Support Package (BSP)](#board-support-package)

    - [Application Layer](#application-layer)
        - [Data Structures and Algorithms](#data-structures-and-algorithms)
            - [Queue](#queue)
                - [Circular Buffer](#circular-buffer)
                - [Semaphore](#semaphore)
                - [Event Handling](#event-handling)
                - [Producer-Consumer](#producer-consumer)

        - [Domain Knowledge](#domain-knowledge)
            - [Digital Signal Processing](#digital-signal-processing)
                - [FFT](#fft)
                - [Filters](#filters)
                    - [IIR](#iir)
                    - [FIR](#fir)
            - [Control Systems](#control-systems)
                - [PID](#pid)
                - [Solar](#solar)
            - [Cryptography and Encryption](#cryptography-and-encryption)

- [Debugging](#debugging)
    - [Static Analysis](#static-analysis)
    - [Dynamic Analysis](#dynamic-analysis)
    - [Logic Analyzer](#logic-analyzer)
    - [Oscilliscope](#oscilliscope)
    - [Wireshark](#wireshark)
    - [JTAG](#jtag)
    - [SWD](#swd)
- [Testing and Quality Management](#testing-and-quality-management)

---
---

## Development Environment
### Cross Compilation
- [ ] [Article: "Compiling, Linking, and Locating", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/compiling-linking-locating)

### Development Tools
- #### IDE
    - [PlatformIO](https://platformio.org/)
    - [Visual Studio Code](https://code.visualstudio.com/)
    - [VisualGDB](https://visualgdb.com/)

- #### Oscilliscopes and Logic Analyzers
    - [Video: "Setting Up the Analog Discovery 2 Portable Lab Instrument", YouTube](https://www.youtube.com/watch?v=07uSLwIzGSY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=85)

## Embedded Hardware
[ ] [Article: "Getting to Know the Hardware", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/hardware-processor-peripherals)

[ ] [Video: "Computer Hardware", YouTube](https://www.youtube.com/watch?v=NaXZqulP3vc&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=3)

[ ] [Video: "MSP430 Hardware Overview", YouTube](https://www.youtube.com/watch?v=cHyIz3Tksho&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=5)

### Computer Architecture
[ ] [Video: "Architecture-Software Interface", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/1-architecture-software-interface-pNVIO)

[ ] [Video: "Word Size and Data Types", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/2-word-size-and-data-types-53eDm)

- #### RISC
    - [Website: "RISC-V Educational Materials", RISC-V](https://riscv.org/community/learn-about-risc-v/educational-materials/)

- #### ARM
    - [ ] [Video: "ARM University, ARM Architecture Fundamentals", YouTube](https://www.youtube.com/watch?v=7LqPJGnBPMM)

    - [ ] [Video: "Get to Know the ARM Cortex M7", YouTube](https://www.youtube.com/watch?v=GaV1j_5UVys)

- #### Endianness
    - [ ] [Article: "Big Endian, Little Endian, Endianness: Understanding Byte Arrangements in Digital Systems", All About Circuits ](https://www.allaboutcircuits.com/technical-articles/big-endian-little-endian-endianness-byte-arrangement-digital-systems/)

    - [ ] [Video: "Endianness", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/6-endianness-wRbAs)

### Embedded Platforms
- #### Microcontroller
    - [ ] [PDF: "Introduction to Microcontrollers", Gunther Gridling, Bettina Weiss](https://ti.tuwien.ac.at/ecs/teaching/courses/mclu/theory-material/Microcontroller.pdf)

- #### System on a Chip
    - [ ] [Video: "Arm Education Media Launches System-on-Chip Design Online Courses", YouTube](https://www.youtube.com/watch?v=n9cUiEdqdJU)

- #### Single Board Computer
    - [ ] [Article: "Single-board computer", Wikipedia](https://en.wikipedia.org/wiki/Single-board_computer)

- #### FPGA
    - [ ] [Article: "How FPGAs work, and why you'll buy one", Embedded Related](https://www.embeddedrelated.com/showarticle/195.php)
    - [ ] [Video: "A Look Inside: SoC FPGAs Introduction (Part 1 of 5)", YouTube](https://www.youtube.com/watch?v=RVM-ESUMOMU)

### Serial Communication
[ ] [Video: "PROTOCOLS: UART - I2C - SPI - Serial communications #001", YouTube](https://www.youtube.com/watch?v=IyGwvGzrqp8)

- #### SPI
    #### [ ] SPI on the MSP430
    - [ ] [Video: "SPI - SPI Overview & Implementation on the MSP430", YouTube](https://www.youtube.com/watch?v=2J8_dpnaBOk&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=94)

    - [ ] [Video: "SPI - Sending a Byte as a SPI Master", YouTube](https://www.youtube.com/watch?v=ODmeQ_3gOj4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=95)

    - [ ] [Video: "SPI - Sending a Packet as a SPI Master using UCTXIFG", YouTube](https://www.youtube.com/watch?v=GRfcO9yX_kg&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=96)

    - [ ] [Video: "SPI - Sending a Packet as a SPI Master using STE/SS", YouTube](https://www.youtube.com/watch?v=2p2rqeeTCXI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=97)

    - [ ] [Video: "SPI - Receiving a Byte as a SPI Master", YouTube](https://www.youtube.com/watch?v=A-9yCnwcw7k&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=98)

    - [ ] [Video: "SPI - Slave Behavior", YouTube](https://www.youtube.com/watch?v=xAs13cgyJ0Y&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=99)

- #### I2C
    #### [ ] I2C on the MSP430
    - [ ] [Video: "I2C - What is I-Squared C and why the Resistors?", YouTube](https://www.youtube.com/watch?v=kWz6ekvoNbw&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=100)

    - [ ] [Video: "I2C - Basic Packet Structure", YouTube](https://www.youtube.com/watch?v=sNYgiHZT_Fo&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=101)

    - [ ] [Video: "I2C - Addressing Slave Registers", YouTube](https://www.youtube.com/watch?v=FCCoERFwcV4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=102)

    - [ ] [Video: "I2C - Master Configuration on the MSP430FR2355", YouTube](https://www.youtube.com/watch?v=Bwqd9b7ifwQ&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=103)

    - [ ] [Video: "I2C - Adafruit PFC8523 Real-Time-Clock I2C Slave", YouTube](https://www.youtube.com/watch?v=EZl252z3Ee4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=104)

    - [ ] [Video: "I2C - RTC-LaunchPad Connection & Making a Simple Probe", YouTube](https://www.youtube.com/watch?v=uAOpQYUCO_Y&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=105)

    - [ ] [Video: "I2C - Writing One Byte to an I2C Slave", YouTube](https://www.youtube.com/watch?v=BvITEarUMkc&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=106)

    - [ ] [Video: "I2C - Writing a Register Addr + 3 Bytes to I2C Slave", YouTube](https://www.youtube.com/watch?v=rCa9DVL9Dug&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=107)

    - [ ] [Video: "I2C - Reading One Byte from an I2C Slave", YouTube](https://www.youtube.com/watch?v=f0DMIgp0LCE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=108)

    - [ ] [Video: "I2C - Reading From a Specific Register Address", YouTube](https://www.youtube.com/watch?v=F1ag5vycS7s&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=109)

    - [ ] [Video: "I2C - Slave Operation", YouTube](https://www.youtube.com/watch?v=nxiHAN3ijic&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=110)

- #### UART
    #### [ ] UART on the MSP430
    - [ ] [Video: "The UART - Serial Com Overview", YouTube](https://www.youtube.com/watch?v=p_YOsh7BSDE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=82)

    - [ ] [Video: "UART - The UART Standard", YouTube](https://www.youtube.com/watch?v=4ieYL74YcBY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=83)

    - [ ] [Video: "UART - Configuring the UART Tx", YouTube](https://www.youtube.com/watch?v=edfQ5KvGD5I&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=84)

    - [ ] [Video: "UART - Configuring the Baud Rate", YouTube](https://www.youtube.com/watch?v=07uSLwIzGSY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=85)

    - [ ] [Video: "UART - Transmitting a Byte at 115200 Baud", YouTube](https://www.youtube.com/watch?v=bc6hjHCi8JI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=87)

    - [ ] [Video: "UART - Transmitting a Byte at 9600 Baud", YouTube](https://www.youtube.com/watch?v=VWstSzoyMS8&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=88)

    - [ ] [Video: "UART - Transmitting a Character to the Terminal", YouTube](https://www.youtube.com/watch?v=XmJZ3pZzrHY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=89)

    - [ ] [Video: "UART - Transmitting a String to the Terminal", YouTube](https://www.youtube.com/watch?v=ESC315fIGnM&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=90)

    - [ ] [Video: "UART - Transmitting String to the Terminal w/ IRQs", YouTube](https://www.youtube.com/watch?v=VBRUyLcqXV4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=91)

    - [ ] [Video: "UART - Configuring the UART Rx", YouTube](https://www.youtube.com/watch?v=4mvz00QjAfs&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=92)

    - [ ] [Video: "UART - Receiving Characters from the Terminal", YouTube](https://www.youtube.com/watch?v=k4AHC-U45kw&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=93)

- #### RS232
    - [ ] [Video: "What is RS232 and What is it Used for?", YouTube](https://www.youtube.com/watch?v=eo9dbnrpspM)

    - [ ] [Video: "RS-232, RS-422, RS-485: What Are the Differences?", YouTube](https://www.youtube.com/watch?v=9O_NgoU1CUc)

- #### RS485
    - [ ] [Video, "RS-485 Circuit Implementation", YouTube](https://www.youtube.com/watch?v=bTQFsAXhGqU)

    - [ ] [Video, "What is RS485 and How it's used in Industrial Control Systems?", YouTube](https://www.youtube.com/watch?v=3wgKcUDlHuM)

### GPIO
[ ] [Video: "How GPIO works | General Purpose Input Output | GPIO Behind The Scene", YouTube](https://www.youtube.com/watch?v=QxvdmzKxEeg)

[ ] [Article: "Introduction to Microcontrollers - Hello World", Embedded Related](https://www.embeddedrelated.com/showarticle/460.php)

[ ] [Article: "Introduction to Microcontrollers - More On GPIO", Embedded Related](https://www.embeddedrelated.com/showarticle/462.php)

[ ] [Video: "Using GPIO with the MSP430 Microcontroller", YouTube](https://www.youtube.com/watch?v=WsbA_iPXIvw)

- #### Pin Modes
    - #### Pull Up/Down
        [ ] [Article: "Using Pull-Up and Pull-Down Resistors", Stratify Labs](https://blog.stratifylabs.co/device/2013-10-25-Using-Pull-Up-and-Pull-Down-Resistors/)
    - #### Push-Pull
        [ ] [Video: "GPIO Output Configuration | Open Drain configuration | Push Pull configuration", YouTube](https://www.youtube.com/watch?v=IjKDKGqCm_4)
    - #### Open-Drain
        [ ] [Video: "GPIO Output Mode: Working of Open Drain Configuration", YouTube](https://www.youtube.com/watch?v=YQ5fkusMIMA)

- #### Direction
    - #### Input
        [ ] [Video: "MSP430 - Digital Inputs & Polling", YouTube](https://www.youtube.com/watch?v=_6tTvj_D2UA&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=73)
    - #### Output
        [ ] [Video: "MSP430 - Digital Outputs", YouTube](https://www.youtube.com/watch?v=phxF_q44G1Y&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=72)

### Analog Input
- #### ADC
    #### [ ] Analog-to-Digital Converter on the MSP430
    - [ ] [Video: "Overview of ADCs", YouTube](https://www.youtube.com/watch?v=ZwThTeZnTEk&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=111)

    - [ ] [Video: "The MSP430 ADC & Configuration", YouTube](https://www.youtube.com/watch?v=l__XaxTco6I&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=112)

    - [ ] [Video: "Reading Voltage w/ Conversion-Complete Polling", YouTube](https://www.youtube.com/watch?v=HH9DO22BxU4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=113)

    - [ ] [Video: "Reading Voltage w/ Conversion-Complete IRQ", YouTube](https://www.youtube.com/watch?v=n0YBaQKZoJ4&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=114)

    - [ ] [Video: "Reading Voltage w Conversion-Complete IRQ & LPM", YouTube](https://www.youtube.com/watch?v=IiTJzawSwE0&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=115)

### Analog Output
- #### PWM
    [ ] [Video: "MSP430 - Creating PWM Signals using Timer Compares", YouTube](https://www.youtube.com/watch?v=JvoYbDhFBUY&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=80)
- #### DAC
    [ ] [Article: "About Digital to Analog Converter (DAC) and Its Applications", ElProCus](https://www.elprocus.com/digital-to-analog-converter-dac-applications/)

### Timer
[ ] [Article: "Introduction to Microcontrollers - More Timers and Displays", Embedded Related](https://www.embeddedrelated.com/showarticle/485.php)

- #### [ ] MSP430 Timer
    - [ ] [Video: "Timer Overflow using ACLK", YouTube](https://www.youtube.com/watch?v=lha1L3JYBfM&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=75)
    - [ ] [Video: "Timer Overflow using ACLK + 12-Bit Counter Length", YouTube](https://www.youtube.com/watch?v=SdqMQXeV09E&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=76)
    - [ ] [Video: "Timer Overflow using SMCLK", YouTube](https://www.youtube.com/watch?v=bZqTRS456FI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=77)
    - [ ] [Video: "Timer Overflow using SMCLK + Divide-by-4 PreScalar", YouTube](https://www.youtube.com/watch?v=Qde97beYaVs&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=78)
    - [ ] [Video: "Timer Compares", YouTube](https://www.youtube.com/watch?v=-93ZQVd-ELg&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=79)
    - [ ] [Video: "Timer Captures", YouTube](https://www.youtube.com/watch?v=yQduo9dM_ig&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=81)

### Constraints
[ ] [Video: "Optimizing C for Microcontrollers - Best Practices - Khem Raj, Comcast RDK", YouTube](https://www.youtube.com/watch?v=GYAhbYnObLI)

- #### Power
    [ ] [Video: "How To Lower AVR Microcontroller Power using Power Reduction Registers", YouTube](https://www.youtube.com/watch?v=S82BSPbYoVA)

    [ ] [Video: "Atmel: picoPower Labs - Basic Power-Saving Techniques", YouTube](https://www.youtube.com/watch?v=bdWV-tOTVSE)

    [ ] [Video: "Microcontroller Design Considerations for Ultra Low Power Applications", YouTube](https://www.youtube.com/watch?v=pX0gamab5IM)

    [ ] [Video: "Ultra Low Power Microcontroller Design", YouTube](https://www.youtube.com/watch?v=yyoR0o5YBVI)

- #### Memory
    [ ] [Article: "Memory", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/memory-ram-rom-flash)

    [ ] [Video: "Interacting with Memory", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/4-interacting-with-memory-hUTQp)

    [ ] [Video: "Different Types of Memory in Microcontroller : Flash Memory, SRAM and EEPROM", YouTube](https://www.youtube.com/watch?v=4WnTTL_7a1g)

    - #### Program (ROM)

    - #### Dynamic (RAM)
        - [ ] [Video: "Tech Talk: Pros and Cons of Dynamic Memory Allocation", YouTube](https://www.youtube.com/watch?v=C7tze29hhpc)

        - [ ] [Article: "How to make a heap profiler", Embedded Related](https://www.embeddedrelated.com/showarticle/600.php)

### Embedded Operating Systems
[ ] [Article: "Operating Systems", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/real-time-operating-systems)
- #### Bare Metal
    - [ ] [eBook: "Bare-metal C programming on ARM", GitHub](https://github.com/umanovskis/baremetal-arm)

    - [ ] [eBook: "Practical Guide to Bare Metal C++", GitBook](https://arobenko.gitbooks.io/bare_metal_cpp/content/)

- #### GNU/Linux
- #### Real Time Operating Systems
    - [Blog: "RTOS", Barr Group](https://barrgroup.com/blog-tag/rtos)

## Embedded Software
[ ] [Video: "Computer Software", YouTube](https://www.youtube.com/watch?v=E9f5fHlEl5s&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=4)

[ ] [Video: "MSP430 Software Overview", YouTube](https://www.youtube.com/watch?v=4Hl2YBCYmRo&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=6)

### Important Programming Concepts (Even on Embedded Systems)
- [ ] [Article: "Part I: Idempotence", Embedded Related](https://www.embeddedrelated.com/showarticle/629.php)

- [ ] [Article: "Part II: Immutability", Embedded Related](https://www.embeddedrelated.com/showarticle/639.php)

- [ ] [Article: "Part III: Volatility", Embedded Related](https://www.embeddedrelated.com/showarticle/649.php)

- [ ] [Article: "Part IV: Singletons", Embedded Related](https://www.embeddedrelated.com/showarticle/691.php)

- [ ] [Article: "Part V: State Machines", Embedded Related](https://www.embeddedrelated.com/showarticle/723.php#comments)

- [ ] [Article: "Part VI : Abstraction", Embedded Related](https://www.embeddedrelated.com/showarticle/792.php)

### C Keywords
[ ] [Article: "Keywords to Frequent", Barr Group](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard/general-rules/keywords-static-volatile-const)

[ ] [Article: "Efficient C Code for 8-bit Microcontrollers", Barr Group](https://barrgroup.com/embedded-systems/how-to/efficient-c-code)

- #### volatile
    - [ ] [Video: "Tech Talk: Pro Tips for Using C's Volatile Keyword", YouTube](https://www.youtube.com/watch?v=ikMHep5oT5w)
- #### static
    - [ ] [Article: "Scope regions in C and C++", Embedded](https://www.embedded.com/scope-regions-in-c-and-c/)
- #### const
- #### pragma
    - [ ] [Article: "Pragmas", GCC GNU](https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html)

- #### attribute
    - [ ] [Video: "Compiler Attributes", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/7-compiler-attributes-qlvx6)
    - [ ] [Article: "Using GNU C attribute", unixwiz](http://unixwiz.net/techtips/gnu-c-attributes.html)

- #### restrict
- #### inline
    - [ ] [Article: "Inline Functions In C", greenend](https://www.greenend.org.uk/rjk/tech/inline.html)

### Watchdog Timer
- [ ] [Article: "Introduction to Watchdog Timers", Embedded](https://www.embedded.com/introduction-to-watchdog-timers/)

### Memory Alignment
- [ ] [Video: "Memory Alignment", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/5-memory-alignment-mx2ts)

### Pointers
- [ ] [Video: "Pointers", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/3-pointers-zLSEY)

### Bit Manipulation
- #### Bitwise
    - [ ] [Video: "Switching to C to Program the MSP430 - Bitwise Logic Operations", YouTube](https://www.youtube.com/watch?v=KZs5eT5XDGU&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=71)

- #### Arithmetic
    - [ ] [Video: "Switching to C to Program the MSP430 - Arithmetic", YouTube](https://www.youtube.com/watch?v=7KMy0lgxZhI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=70)

### Interrupts
[ ] [Article: "Introduction to Microcontrollers - Interrupts", Embedded Related](https://www.embeddedrelated.com/showarticle/469.php)

- #### MSP430 Interrupts
    - [ ] [Video: "Overview and Basic Concepts", YouTube](https://www.youtube.com/watch?v=EqaKOg5HiaU&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=47kj)

    - [ ] [Video: "Interrupts Overview & Port Interrupt Example", YouTube](https://www.youtube.com/watch?v=3duicvNsBqo&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=74)

    - [ ] [Video: "Overview of the Interrupt Vector Table", YouTube](https://www.youtube.com/watch?v=NoBGeTqtj3g&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=48)

    - [ ] [Video: "The use of the STACK during an IRQ + Nested IRQs", YouTube](https://www.youtube.com/watch?v=FMVhk1NrlRs&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=49)

    - [ ] [Video: "The Responsibility of the Developer when using IRQs", YouTube](https://www.youtube.com/watch?v=Ua9Rn08kGaE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=50)

    - [ ] [Video: "The IRQs on the MSP430FR2355 MCU", YouTube](https://www.youtube.com/watch?v=E84jZj0Nqk8&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=51)

    - [ ] [Video: "Port Interrupts on the MSP430FR2355 MCU - Overview", YouTube](https://www.youtube.com/watch?v=ASLzzwbagmE&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=52)

    - [ ] [Video: "Reading from a Switch Using a Port IRQ Program Example", YouTube](https://www.youtube.com/watch?v=zeOZi85T9EI&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=53)

    - [ ] [Video: "Changing Edge Sensitivity (PxIES) & Forgetting to Clear a Flag", YouTube](https://www.youtube.com/watch?v=xeBcOe7ZeiM&list=PL643xA3Ie_EuHoNV7AgvJXq-z1hrE8vsm&index=54)

### Optimizations
- [ ] [Article: "Optimizing Your Code", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/code-optimization-size-speed)

### Coding Standards
[ ] [Article: "Embedded C Coding Standards", Barr Group](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard)

[ ] [Video: "Tech Talk: Are Coding Standards & Static Analysis Really That Important?", YouTube](https://www.youtube.com/watch?v=r9f7oVgYoMk)

[Blog: "Coding Standards", Barr Group](https://barrgroup.com/blog-tag/coding-standards)

- #### MISRA
    - [ ] [Video: "An Introduction to MISRA C - Excerpt from An Introduction to MISRA C:2012 Webinar", YouTube](https://www.youtube.com/watch?v=6a9Fwvvp92I)

- #### ISO/IEC 90003
    - [ ] [Article: "ISO/IEC/IEEE 90003:2018
Software engineering — Guidelines for the application of ISO 9001:2015 to computer software", ISO](https://www.iso.org/standard/74348.html)


## Embedded Software Layers
### Peripheral and Hardware Layer
[ ] [Article: "Peripherals", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/peripherals-device-drivers)

- #### Registers
    - [ ] [Video: "Level Up Your Arduino Code: Registers", YouTube](https://www.youtube.com/watch?v=6q1yEb_ukw8)
- #### Bit Fields
    - [ ] [Video: "Bit Fields in C. What are they, and how do I use them?", YouTube](https://www.youtube.com/watch?v=aMAM5vL7wTs)
- #### Memory Map
    - [ ] [Video: "Memory Map and Registers", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/8-memory-map-and-registers-aQV4p)
- #### Peripherals
    - [ ] [Video: "Exploring Configurable Logic Peripherals on PIC® and AVR® Microcontrollers", YouTube](https://www.youtube.com/watch?v=beZXfAUR-PE)

### Hardware Abstraction Layer
[ ] [Video: "The Nios® II Processor: Hardware Abstraction Layer", YouTube](https://www.youtube.com/watch?v=HF7Low_sUig)

[Textbook: "Reusable Firmware Development: A Practical Approach to APIs, HALs and Drivers", Amazon](https://www.amazon.com/Reusable-Firmware-Development-Practical-Approach-ebook-dp-B07811CX8Q/dp/B07811CX8Q/ref=mt_other?_encoding=UTF8&me=&qid=)

- #### Register Definition Files
    [ ] [Video: "Register Definition Files", Coursera](https://www.coursera.org/lecture/embedded-software-hardware/9-register-definition-files-6pqVq)

- #### Memory Access Methods

- #### Board Support Package
    [ ] [Video: "0x1b7 What is a BSP | Board Support Package | Big Picture | Embedded Systems Software Development", YouTube](https://www.youtube.com/watch?v=Bn_6kxRTTSM)

### Application Layer
- #### Data Structures and Algorithms
    - #### Queue
        - #### Circular Buffer
            - [ ] [Video: "Circular Buffer | Circular Buffer Implementation in C", YouTube](https://www.youtube.com/watch?v=uvD9_Wdtjtw)

        - #### Semaphore
            - [ ] [Video: "Semaphores", YouTube](https://www.youtube.com/watch?v=70auqrv84y8)

            - [ ] [Video: "Webinar: Mutexes & Semaphores Demystified", YouTube](https://www.youtube.com/watch?v=dzR6DD3ClZ4)

        - #### Event Handling
            - [ ] [Video: "Embedded Programming Lesson 33: Event-Driven Programming part-1", YouTube](https://www.youtube.com/watch?v=rfb2JI1GGIc)

            - [ ] [Video: "Embedded Programming Lesson 34: Event-Driven Programming part-2", YouTube](https://www.youtube.com/watch?v=l69ghMpsp6w)

        - #### Producer-Consumer
            - [ ] [Video: "Producer Consumer Pattern", YouTube](https://www.youtube.com/watch?v=VXJSJ6c3ZIs)

            - [ ] [Video: "Quick explanation: the Bounded-Buffer problem", YouTube](https://www.youtube.com/watch?v=LRiN3DJdskA)

- #### Domain Knowledge
    - #### Digital Signal Processing
        [ ] [Video: "Learn Embedded Systems Design on ARM based Microcontrollers 1 of 2", YouTube](https://www.youtube.com/watch?v=GFjA7wooCZ8)

        [ ] [Video: "Learn DSP on ARM based Microcontrollers 2 of 2", YouTube](https://www.youtube.com/watch?v=TO66UN64-os)

        - #### FFT
            - [ ] [Video: "Digital Signal Processing (DSP) Tutorial - DSP with the Fast Fourier Transform Algorithm", YouTube](https://www.youtube.com/watch?v=HJ_-5mqUZ70)
        - #### Filters
            - #### IIR
                - [ ] [Video: "IIR Filters - Audio DSP On STM32 with I2S (24 Bit / 96 kHz)", YouTube](https://www.youtube.com/watch?v=lNBrGOk0XzE)
            - #### FIR
                - [ ] [Video: "FIR Filters - Audio DSP On STM32 (24 Bit / 48 kHz)", YouTube](https://www.youtube.com/watch?v=n9Cy1xkEf1E)

    - #### Control Systems
        - #### PID
            #### Understanding PID Control
            - [ ] [Video: "Part 1: What is PID Control?", YouTube](https://www.youtube.com/watch?v=wkfEZmsQqiA)
            - [ ] [Video: "Part 2: Expanding Beyond a Simple Integral", YouTube](https://www.youtube.com/watch?v=NVLXCwc8HzM)
            - [ ] [Video: "Part 3: Expanding Beyond a Simple Derivative", YouTube](https://www.youtube.com/watch?v=7dUVdrs1e18)
            - [ ] [Video: "Part 4: A PID Tuning Guide", YouTube](https://www.youtube.com/watch?v=sFOEsA0Irjs)
            - [ ] [Video: "Part 5: Three Ways to Build a Model", YouTube](https://www.youtube.com/watch?v=qhIjIu-Zk10)
            - [ ] [Video: "Part 6: Manual and Automatic Tuning Methods", YouTube](https://www.youtube.com/watch?v=qj8vTO1eIHo)
            - [ ] [Video: "Part 7: Important PID Concepts", YouTube](https://www.youtube.com/watch?v=tbgV6caAVcs)
            #### Drone Simulation and Control
            - [ ] [Video: "Part 1: Setting Up the Control Problem", YouTube](https://www.youtube.com/watch?v=hGcGPUqB67Q)
            - [ ] [Video: "Part 2: How Do You Get a Drone to Hover?", YouTube](https://www.youtube.com/watch?v=GK1t8YIvGM8)
            - [ ] [Video: "Part 3: How to Build the Flight Code", YouTube](https://www.youtube.com/watch?v=3Gtb5Eq1Lvk)
            - [ ] [Video: "Part 4: How to Build a Model for Simulation", YouTube](https://www.youtube.com/watch?v=gEmGfo36INc)
            - [ ] [Video: "Part 5: Tuning the PID controller", YouTube](https://www.youtube.com/watch?v=BqrRfoH-19s)
        - #### Solar
            - [ ] [Video: "How to implement maximum power point tracking for solar charging", YouTube](https://www.youtube.com/watch?v=U9phLv8gS8)
    - #### Cryptography and Encryption


## Debugging
[ ] [Article: "Downloading and Debugging", Barr Group](https://barrgroup.com/embedded-systems/books/programming-embedded-systems/downloading-debugging)

 [Blog: "Debugging", Barr Group](https://barrgroup.com/blog-tag/debugging)

### Static Analysis
- [ ] [Video: "Static Code Analysis: Scan All Your Code For Bugs", YouTube](https://www.youtube.com/watch?v=Heor8BVa4A0)

- [ ] [Video: "Using PC-Lint for MISRA and static code analysis", YouTube](https://www.youtube.com/watch?v=zzkcX-0mMHU)

### Dynamic Analysis

### Logic Analyzer
- [ ] [Video: "EEVblog #44 Part 1 - Logic Analyzer Tutorial", YouTube](https://www.youtube.com/watch?v=TWKY6W1C9yM)

- [ ] [Video: "EEVblog #44 - Part 2 - Logic Analyzer Tutorial", YouTube](https://www.youtube.com/watch?v=nAlNP-Z4QAQ)

### Oscilliscope
- [ ] [Video: "How to Debug Embedded Designs with an Oscilloscope", YouTube](https://www.youtube.com/watch?v=10bZ0edG6Ts)

- [ ] [Video: "How to test Automotive Serial Buses with Oscilloscopes", YouTube](https://www.youtube.com/watch?v=TJK3m91ki7o)

### JTAG
- [ ] [Video: "", YouTube]()

### SWD
- [ ] [Video: "", YouTube]()

## Testing and Quality Management
### Phil Koopman Lectures
- [ ] [Playlist: "Embedded Software Testing", YouTube](https://www.youtube.com/playlist?list=PL_DQiOR0jhbU3ZKyYIV9oxfcqXTpbK4Le)

- [ ] [Playlist: "Embedded Security, Safety, and Software Quality", YouTube](https://www.youtube.com/playlist?list=PL_DQiOR0jhbXFZtjw6U-19X0jPDmg4UoR)
