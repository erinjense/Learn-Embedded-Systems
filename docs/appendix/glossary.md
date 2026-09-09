# Glossary

The acronyms, in plain English. Grouped loosely; use search.

## Chips and cores

**MCU** (microcontroller unit). A CPU with flash, RAM, and peripherals on one chip. Runs your firmware directly.
**SoC** (system on chip). A bigger chip: application processor, GPU, memory controller, radios. Usually runs Linux.
**SBC** (single-board computer). An SoC on a ready-made board, like a Raspberry Pi.
**FPGA** (field-programmable gate array). Reconfigurable digital logic. You describe hardware rather than write software.
**Cortex-M** Arm's family of microcontroller cores (M0+, M4, M7, M33, M55...). The Pico 2 and STM32s use them.
**RISC-V** An open instruction set architecture, increasingly common in new microcontrollers. The Pico 2 has RISC-V cores too.
**ISA** (instruction set architecture). The set of instructions a CPU understands.
**NVIC** (nested vectored interrupt controller). The part of a Cortex-M that prioritizes and dispatches interrupts.
**PLL** (phase-locked loop). Multiplies a slow, accurate clock into the fast one the core runs at.
**XIP** (execute in place). Running code directly from external flash instead of copying it to RAM first.

## Memory

**Flash** Non-volatile memory where code and constants live. Slow to write, erased in blocks.
**SRAM** Fast volatile memory for variables, stack, and heap. Lost at power-off.
**EEPROM** Byte-writable non-volatile memory, often emulated in flash on modern MCUs.
**.text / .data / .bss** Linker sections: code, initialized variables, and zero-initialized variables.
**Memory map** The table of which addresses belong to flash, RAM, and each peripheral's registers.
**MMIO** (memory-mapped I/O). Peripherals controlled by reading and writing addresses, as if they were memory.
**Endianness** Byte order of multi-byte values. Cortex-M is little-endian: least significant byte at the lowest address.
**Alignment** The requirement that a value's address be a multiple of its size. Violating it is slow or a fault.

## Peripherals and signals

**GPIO** (general-purpose input/output). A pin you control directly.
**Pull-up / pull-down** A resistor that gives an undriven pin a default level.
**Push-pull / open-drain** Output types: one drives high and low; the other only pulls low and relies on a pull-up.
**PWM** (pulse-width modulation). A fast square wave whose duty cycle encodes an analog-like value.
**ADC / DAC** Analog-to-digital and digital-to-analog converters.
**Timer / counter** Hardware that counts clock cycles and fires events at compare values or measures input edges.
**Prescaler** A divider that slows a clock before it reaches a timer.
**DMA** (direct memory access). Hardware that copies data between memory and peripherals without the CPU.
**ISR / IRQ** Interrupt service routine (the function) and interrupt request (the signal that triggers it).
**Watchdog** A timer that resets the chip if firmware stops feeding it.
**RTC** (real-time clock). A low-power clock that keeps time through sleep.
**Debounce** Filtering the mechanical bounce of a switch so one press reads as one press.

## Communication

**UART** Asynchronous serial: two wires, agreed baud rate, start and stop bits.
**Baud** Symbols per second on a serial line; for UART, bits per second.
**SPI** Synchronous serial with clock, data in, data out, and a chip select per device. Fast.
**I2C** Two-wire synchronous bus with addresses and acknowledgments. Slower, fewer pins.
**RS-232 / RS-485** Electrical standards for serial over cables: single-ended short range, and differential long range.
**CAN** Controller area network. A robust multi-master bus used in vehicles and machines.
**USB CDC / HID** USB device classes for a virtual serial port and for keyboards, mice, and similar.
**BLE** Bluetooth Low Energy. **GAP** and **GATT** are its connection and data layers.
**MQTT** A lightweight publish/subscribe protocol for sending device data to servers.
**Modbus** A 1979 industrial protocol still everywhere, usually over RS-485.

## Software

**Bare metal** Firmware with no operating system; your code owns the whole chip.
**RTOS** (real-time operating system). A small kernel providing tasks, scheduling, and synchronization with predictable timing.
**Superloop** The simplest firmware structure: one loop that polls everything.
**HAL** (hardware abstraction layer). Code that hides register details behind functions.
**BSP** (board support package). Code and configuration specific to one board: which pin does what.
**Driver** Code that operates one peripheral or external device through a defined interface.
**State machine** Code organized as explicit states and transitions driven by events.
**Ring buffer** A fixed-size queue that wraps around. Under every UART driver.
**Mutex / semaphore** Synchronization primitives: one protects a shared resource; the other signals events or counts resources.
**Priority inversion** A high-priority task waiting on a low-priority one that has been preempted by a medium one.
**Bootloader** Small firmware that runs first and can install or verify the main application.
**DFU / OTA** Device firmware update, and over-the-air update via a radio.
**Linker script** Tells the linker where each section goes in memory.
**Vector table** The table of handler addresses the CPU reads at reset and on each interrupt.
**Cross-compilation** Building on one machine (your laptop) for another (the MCU).
**Toolchain** Compiler, assembler, linker, and binary utilities for a target, e.g. `arm-none-eabi-gcc`.
**CI** (continuous integration). Automatically building and testing on every push.
**MISRA C** Coding guidelines for safety-critical C. **BARR-C** is a lighter, free alternative.
**Static analysis** Finding bugs by examining code without running it.
**Device tree** A data structure describing hardware to the Linux kernel or Zephyr.

## Debugging and measurement

**SWD / JTAG** Debug ports: Arm's two-wire serial wire debug, and the older, wider standard.
**Debug probe** The adapter between your computer and the chip's debug port (ST-LINK, Raspberry Pi Debug Probe, J-Link).
**GDB / OpenOCD** The debugger, and a common bridge between it and a probe.
**HardFault** A Cortex-M exception raised when something is seriously wrong: bad address, bad instruction, bus error.
**Logic analyzer** Captures digital signals over time and decodes protocols.
**Oscilloscope** Shows voltage over time, including the analog truth a logic analyzer hides.
**DMM** Digital multimeter.
**Burden voltage** The voltage a multimeter drops when measuring current, which can starve the device under test.
**Power profiler** An instrument that measures current across many decades at high speed (Otii Arc, PPK2).

## Power and robustness

**Sleep / Stop / Standby** Progressively deeper low-power modes with progressively more turned off.
**Tickless** An RTOS mode that stops the periodic tick so the chip can sleep between events.
**Brown-out** A supply voltage dip low enough to make the chip misbehave; a **BOR** detector resets it first.
**ESD** Electrostatic discharge, tested per **IEC 61000-4-2**.
**EMI / EMC** Electromagnetic interference and compatibility: not disturbing others and not being disturbed.
**EFT** Electrical fast transients (burst), tested per **IEC 61000-4-4**.
**Surge** A high-energy pulse from lightning or switching, tested per **IEC 61000-4-5**.
**TVS diode** A component that clamps voltage spikes to protect a circuit.
**CRC** (cyclic redundancy check). A checksum that detects corrupted data.

## Safety and security

**Functional safety** Engineering so that failures do not cause harm. **IEC 61508** (general) and **ISO 26262** (automotive) are the standards.
**SIL / ASIL** Safety integrity levels: how bad a failure could be, and therefore how rigorous development must be.
**FMEA** Failure modes and effects analysis: systematically asking "what if this fails?"
**Secure boot / chain of trust** Each stage verifies the next before running it, starting from immutable ROM.
**Code signing** A digital signature on a firmware image so the device can verify its origin.
**TrustZone-M** Arm hardware that splits a Cortex-M into secure and non-secure worlds.
**PSA Certified** A security framework and certification scheme for IoT devices.
**Threat model** A written analysis of what you protect, from whom, and how.
**RDP** Readout protection: locking the debug port so flash cannot be read.
