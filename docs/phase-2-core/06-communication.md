# 6. Communication

**Time:** 2 weeks · **Board:** Pico 2, a logic analyzer, one I2C sensor and one SPI device · **Prerequisites:** Module 5

## Why this matters

Almost nothing useful happens inside one chip. Sensors, memories, displays, radios, and other processors all talk over a handful of serial buses, and every embedded job involves bringing up a device from its datasheet over one of them. UART, SPI, and I2C cover most of the board-level work. RS-485 and CAN cover most of the between-boards work in industrial and automotive systems. USB is how everything talks to a computer.

Buy the Phase 2 add-ons from the [gear list](../start-here/gear.md) now. A logic analyzer turns this module from frustrating to fun.

## You will be able to

- Explain framing, baud rate, and flow control for UART, and configure one from the registers.
- Drive an SPI device: clock polarity and phase, chip select, and full-duplex transfers.
- Drive an I2C device: addressing, register reads and writes, ACK/NACK, and why the pull-ups matter.
- Read all three on a logic analyzer and decode them by eye.
- Say what RS-232, RS-485, CAN, and USB are for and how they differ from the on-board buses.

## Learn

### The three on-board buses

- [ ] <span class="les-tag">Video</span> **[Serial Communications Explained: UART, I2C, and SPI](https://www.youtube.com/watch?v=IyGwvGzrqp8)** by Rohde & Schwarz <span class="les-time">~15 min</span><br>All three in one clear overview, with real waveforms.
- [ ] <span class="les-tag">Article</span> **[Serial Communication](https://learn.sparkfun.com/tutorials/serial-communication)** by SparkFun <span class="les-time">~30 min</span><br>Asynchronous serial and UART framing, start and stop bits, baud rate, and the TX/RX crossover everyone gets backwards once.
- [ ] <span class="les-tag">Article</span> **[Serial Peripheral Interface (SPI)](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi)** by SparkFun <span class="les-time">~30 min</span><br>Clock, MOSI, MISO, chip select, and the four clock modes.
- [ ] <span class="les-tag">Article</span> **[I2C](https://learn.sparkfun.com/tutorials/i2c)** by SparkFun <span class="les-time">~30 min</span><br>Addressing, start and stop conditions, ACK, and multi-device buses.
- [ ] <span class="les-tag">Article</span> **[I2C in a Nutshell](https://interrupt.memfault.com/blog/i2c-in-a-nutshell)** by Memfault Interrupt <span class="les-time">~30 min</span><br>The engineer's version: clock stretching, bus recovery, common failure modes, and how to debug them.
- [ ] <span class="les-tag">Article</span> **[Understanding the I2C Bus (SLVA704)](https://www.ti.com/lit/an/slva704/slva704.pdf)** by Texas Instruments <span class="les-time">~30 min</span><br>Sizing pull-up resistors from bus capacitance and rise time. The electrical side of I2C in eight pages.
- [ ] <span class="les-tag">Docs</span> **RP2350 datasheet: UART, SPI, and I2C chapters** in the [RP2350 datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf) <span class="les-time">~3 h</span><br>For the checkpoints. Note which are Arm PrimeCell or Synopsys blocks; you will see the same IP on other vendors' chips.

### Seeing the signals

- [ ] <span class="les-tag">Video</span> **[EEVblog #44: Logic Analyzer Tutorial](https://www.youtube.com/watch?v=TWKY6W1C9yM)** parts [1](https://www.youtube.com/watch?v=TWKY6W1C9yM) and [2](https://www.youtube.com/watch?v=nAlNP-Z4QAQ) by Dave Jones <span class="les-time">~40 min</span><br>What a logic analyzer is for, and how it differs from a scope. Old, still right.
- [ ] <span class="les-tag">Tool</span> **[PulseView](https://sigrok.org/wiki/PulseView)** by the sigrok project <span class="les-time">Setup ~30 min</span><br>Free software that works with $10 logic analyzers and decodes UART, SPI, I2C, and dozens more. If you bought a Saleae, its [Logic 2 documentation](https://support.saleae.com/) is excellent.

### Between boards and to the world

- [ ] <span class="les-tag">Video</span> **[RS-232, RS-422, RS-485: What Are the Differences?](https://www.youtube.com/watch?v=9O_NgoU1CUc)** <span class="les-time">~10 min</span><br>Single-ended vs differential signaling, and why factories run RS-485 over hundreds of meters.
- [ ] <span class="les-tag">Article</span> **[RS-422 and RS-485 Standards Overview and System Configurations (SLLA070)](https://www.ti.com/lit/an/slla070d/slla070d.pdf)** by Texas Instruments <span class="les-time">~45 min</span><br>Termination, biasing, and half-duplex direction control, which is the part firmware has to get right.
- [ ] <span class="les-tag">Article</span> **[CAN Bus Explained: A Simple Intro](https://www.csselectronics.com/pages/can-bus-simple-intro-tutorial)** by CSS Electronics <span class="les-time">~30 min</span><br>Frames, arbitration, identifiers, and why every car and many machines use it. CAN and CAN FD are on most job descriptions in automotive and industrial.
- [ ] <span class="les-tag">Article</span> **[USB in a NutShell](https://www.beyondlogic.org/usbnutshell/usb1.shtml)** by Craig Peacock <span class="les-time">Chapters 1 to 4, ~1.5 h</span><br>Descriptors, endpoints, and enumeration. Old and still the clearest. Then use **[TinyUSB](https://docs.tinyusb.org/en/latest/)** rather than writing your own stack.

## Do

- [ ] **Checkpoint 6.1: UART from the registers.** Configure a UART from the RP2350 registers: baud divisor, 8N1 framing, FIFOs. Echo characters back to the terminal. Then hook the logic analyzer to TX, capture one byte, and measure the bit period. Check it against your baud rate. Change to 7E1 framing and see the difference in the capture.
- [ ] **Checkpoint 6.2: I2C sensor from its datasheet.** Wire an I2C sensor breakout (a BME280 or similar). From *its* datasheet find the 7-bit address, the "who am I" register, and the registers for a measurement. Write a driver with `sensor_read_reg()` and `sensor_write_reg()` built on the RP2350 I2C registers, read the ID, then read and print a real temperature. Capture one transaction on the logic analyzer and label the address, the R/W bit, each ACK, and the data bytes by hand.
- [ ] **Checkpoint 6.3: SPI device from its datasheet.** Drive an SPI device (a flash chip, a display, or the SPI mode of your sensor). Determine the required clock mode from its datasheet. Read its ID register. Capture the transfer and confirm the clock polarity and phase match what you configured.
- [ ] **Checkpoint 6.4: Break it and fix it.** Remove one I2C pull-up and observe the bus on the analyzer. Swap MOSI and MISO on SPI. Set the wrong baud on UART. For each, write down what the capture looked like, because you will see each of these on a real board someday and want to recognize them in seconds.

## Check yourself

- A UART is set to 115200 baud, 8N1. How long does one byte take on the wire, and how many bits are that?
- Why does SPI need a chip select line and I2C does not?
- What does an I2C NACK after the address byte mean? After a data byte?
- Why can you not just connect an RS-485 transceiver to a UART and forget about it? What does firmware have to control?
- Two nodes on a CAN bus transmit at the same instant. Who wins, and how is that decided without a master?

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Video</span> **[What is RS232 and What is it Used for?](https://www.youtube.com/watch?v=eo9dbnrpspM)** and **[What is RS485 and How it's Used in Industrial Control Systems?](https://www.youtube.com/watch?v=3wgKcUDlHuM)** by RealPars <span class="les-time">~20 min</span><br>Plant-floor context for the two serial standards you will find on industrial equipment.
- [ ] <span class="les-tag">Video</span> **[How to Test Automotive Serial Buses with Oscilloscopes](https://www.youtube.com/watch?v=TJK3m91ki7o)** <span class="les-time">~30 min</span><br>CAN, LIN, and FlexRay on a scope. Useful once you own one (Module 11).
- [ ] <span class="les-tag">Docs</span> **[TinyUSB on GitHub](https://docs.tinyusb.org/en/latest/)** <span class="les-time">Reference</span><br>The USB stack the Pico SDK uses. Make your board show up as a USB serial port, a keyboard, and a mass-storage device.
- **Modbus**, in one line: a 1979 protocol that runs over RS-485 (Modbus RTU) or TCP, still everywhere in industrial equipment. If a job mentions PLCs, learn it.

</details>