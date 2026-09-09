# Gear list

You need surprisingly little. Buy the Phase 1 kit now and nothing else until a module tells you to.

Prices are approximate US retail in 2026 and will drift. Buy from the manufacturer, an authorized distributor (DigiKey, Mouser, Adafruit, SparkFun, Pimoroni, The Pi Hut), or a reputable local shop. Marketplace clones are hit or miss, and a flaky board will cost you more hours than it saves dollars.

## Phase 1 and 2 kit (about $60)

| Item | Suggestion | Approx. | Why |
| --- | --- | --- | --- |
| **Raspberry Pi Pico 2** | [Official Pico 2](https://www.raspberrypi.com/products/raspberry-pi-pico-2/) with headers, or the Pico 2 W if you want Wi-Fi later | $5 to $7 | RP2350 dual Arm Cortex-M33 (and RISC-V) cores, excellent datasheet, SWD debug, huge community. |
| **Raspberry Pi Debug Probe** | [Official Debug Probe](https://www.raspberrypi.com/products/debug-probe/) | $12 | Real single-step debugging over SWD plus a USB-UART. A second Pico can do this job for free if money is tight. |
| **Breadboard and jumpers** | Half-size or full-size solderless breadboard, plus male-to-male and male-to-female jumper wires | $10 | Everything in Phases 1 and 2 is built on this. |
| **LEDs, resistors, buttons** | Any starter assortment: a few dozen LEDs, 220 Ω to 10 kΩ resistors, tactile buttons, a potentiometer, a 0.1 µF capacitor handful | $10 | Module 1 checkpoints and every later peripheral experiment. |
| **Digital multimeter** | Any auto-ranging DMM from a known brand, with a continuity beeper | $20 to $30 | You will measure voltage and current in Module 1 and never stop. |
| **USB cable** | Micro-USB (Pico) data cable, not charge-only | $3 | The most common "my board is dead" cause is a charge-only cable. |

## Phase 2 add-ons (about $25, buy when Module 6 says so)

| Item | Suggestion | Approx. | Why |
| --- | --- | --- | --- |
| **Logic analyzer** | 8-channel 24 MHz USB logic analyzer that works with [PulseView](https://sigrok.org/wiki/PulseView) (many generic ones do), or a Saleae if you can afford it later | $10 to $15 | Seeing UART, SPI, and I2C traffic turns guessing into knowing. |
| **I2C and SPI sensors** | A breakout board with a common sensor, such as a BME280 (I2C temperature and humidity) and any SPI flash or display | $10 | Module 6 checkpoints drive a real device from its datasheet. |

## Phase 3 kit (about $20, buy when Module 8 says so)

| Item | Suggestion | Approx. | Why |
| --- | --- | --- | --- |
| **STM32 Nucleo-64** | [NUCLEO-F446RE](https://www.st.com/en/evaluation-tools/nucleo-f446re.html) (Cortex-M4F, plenty of peripherals and RAM). Any Nucleo-64 works if that one is out of stock. | $15 to $20 | Industry-standard family, on-board ST-LINK debugger, thick reference manual. This is what job listings mean by "STM32 experience." |

## Optional and later

| Item | When | Approx. | Notes |
| --- | --- | --- | --- |
| **Oscilloscope** | Module 11 | $250 to $450 | A 2- or 4-channel entry-level scope (Rigol, Siglent) is a career tool. Until then, a school lab or hackerspace works. |
| **Power profiler** | Module 12 | $100 (Nordic PPK2) to $1000+ (Qoitech Otii Arc Pro) | Module 12 explains what each does and how to do the same work with just a DMM. |
| **Soldering iron** | Module 1, optional | $30 to $100 | A temperature-controlled iron (Pinecil, Hakko FX-888, or similar). Only needed once you buy boards without headers. |
| **Raspberry Pi 4 or 5** | Module 15 | $35 to $80 | Only for the embedded Linux specialization. |
| **BLE or Wi-Fi dev kit** | Module 16 | $10 to $60 | Only for the wireless specialization. Module 16 lists options. |

> **Do not buy a kit with 37 sensors**
>
> Big sensor bundles feel like value and mostly gather dust. Two or three well-documented breakouts you actually drive from the datasheet teach more than thirty you use through a library.