# 16. Wireless

**Time:** 2 to 3 weeks · **Board:** a BLE dev kit (Nordic nRF52/nRF54 DK) or an ESP32 board, or the Pico 2 W · **Prerequisites:** Phase 3

## Why this matters

Most new products talk to a phone or the cloud, and the radio is where firmware, RF hardware, power, protocols, and regulation collide. You do not need to design antennas, but you need to choose the right radio for the job, get a protocol stack running, keep it from destroying your battery life, and know why a product cannot ship with an uncertified radio.

## You will be able to

- Compare BLE, Wi-Fi, Thread/Zigbee/Matter, LoRaWAN, and cellular LTE-M/NB-IoT on range, power, throughput, cost, and ecosystem.
- Explain BLE's architecture (GAP, GATT, services, characteristics) and build a device a phone can connect to.
- Get a Wi-Fi MCU on a network and publish sensor data over MQTT.
- Explain why pre-certified modules exist and what FCC and CE radio certification involves.

## Learn

### Choosing a radio

| Radio | Range | Power | Data rate | Talks to | Pick it for |
| --- | --- | --- | --- | --- | --- |
| **BLE** | 10 to 100 m | Very low | Low (kbit/s to ~1 Mbit/s) | Phones directly | Wearables, sensors, anything a phone configures |
| **Wi-Fi** | 30 to 100 m | High | High | Local network and internet | Cameras, streaming, anything mains-powered |
| **Thread / Zigbee / Matter** | Mesh, tens of meters per hop | Low | Low | A hub or border router | Smart home devices that must work with the big ecosystems |
| **LoRaWAN** | Kilometers | Very low | Very low (bytes per message) | A gateway | Agriculture, metering, asset tracking |
| **LTE-M / NB-IoT** | Anywhere with cellular | Medium | Low to medium | Internet directly, with a SIM | Trackers, remote monitoring, no local infrastructure |

### BLE

- [ ] <span class="les-tag">Course</span> **[Bluetooth Low Energy Fundamentals](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/)** by Nordic Developer Academy <span class="les-time">~8 h, free</span><br>Advertising, connections, GAP, GATT, services and characteristics, security, with hands-on exercises on a Nordic kit. The best free BLE course.
- [ ] <span class="les-tag">Course</span> **[nRF Connect SDK Fundamentals](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)** by Nordic Developer Academy <span class="les-time">~8 h, free</span><br>The Zephyr-based SDK the BLE course uses. If you did it in Module 10, skip.
- [ ] <span class="les-tag">Community</span> **[Novel Bits](https://novelbits.io/)** by Mohammad Afaneh <span class="les-time">Browse the free articles, ~2 h</span><br>Clear BLE explanations and tutorials from a specialist.

### Wi-Fi and the internet

- [ ] <span class="les-tag">Docs</span> **[ESP-IDF Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)** by Espressif <span class="les-time">~3 h with setup</span><br>The ESP32 family is the realistic choice for Wi-Fi on a microcontroller, and ESP-IDF (FreeRTOS-based) is its professional SDK. Build the Wi-Fi station example.
- [ ] <span class="les-tag">Article</span> **[MQTT Essentials](https://www.hivemq.com/mqtt/)** by HiveMQ, starting with **[Part 1: Introducing MQTT](https://www.hivemq.com/blog/mqtt-essentials-part-1-introducing-mqtt/)** <span class="les-time">~2 h for the series</span><br>Publish/subscribe, topics, QoS, retained messages, last will. The protocol most IoT devices use to talk to a server. Official spec at [mqtt.org](https://mqtt.org/).
- [ ] <span class="les-tag">Docs</span> **[lwIP](https://savannah.nongnu.org/projects/lwip/)** <span class="les-time">~30 min</span><br>The lightweight TCP/IP stack inside most MCU network implementations, including the Pico W's and many STM32 Ethernet designs. Know what it is.

### The rest of the landscape

- [ ] <span class="les-tag">Docs</span> **[LoRaWAN documentation](https://www.thethingsnetwork.org/docs/lorawan/)** by The Things Network <span class="les-time">~1 h</span><br>How kilometer-range, years-on-a-battery networks work, with a free community network to try.
- [ ] <span class="les-tag">Docs</span> **[Matter](https://csa-iot.org/all-solutions/matter/)** by the Connectivity Standards Alliance <span class="les-time">~30 min</span><br>The smart-home standard that Apple, Google, Amazon, and Samsung agreed on, running over Thread and Wi-Fi.

### Certification, in one paragraph

Any product that intentionally radiates needs regulatory approval: FCC in the US, CE (RED) in Europe, and equivalents elsewhere. Testing measures output power, spurious emissions, and band occupancy, and costs tens of thousands of dollars for a chip-down design. **Pre-certified modules** (a radio chip, antenna, and shielding on a tiny board that already passed) let you inherit most of that approval, which is why nearly every small product uses one. Firmware still matters: transmit power settings, channel usage, and regional configuration are yours to get right, and changing them can invalidate the certification.

## Do

- [ ] **Checkpoint 16.1: Advertise and connect.** On a BLE kit, build a peripheral that advertises a custom service with a temperature characteristic fed by your I2C sensor. Connect from a phone with a generic BLE scanner app, read the value, and enable notifications so it updates live.
- [ ] **Checkpoint 16.2: Power vs connection interval.** Measure current with the technique from Module 12 while advertising at 100 ms and at 1 s, and while connected at a short and a long connection interval. Tabulate. This table is why BLE products are configured the way they are.
- [ ] **Checkpoint 16.3: Sensor to the cloud.** On an ESP32 (or Pico 2 W), join Wi-Fi and publish the sensor reading to a public MQTT broker every 10 seconds. Subscribe from your laptop and watch it arrive. Then add TLS and note the RAM and time cost.
- [ ] **Checkpoint 16.4: Design decision memo.** For your capstone, write half a page choosing a radio, a module vs chip-down, and the protocol, with the reasons from the table above and the certification paragraph. Include estimated battery life from 16.2.

## Check yourself

- What is the difference between a BLE service and a characteristic, and what does "notify" change compared to "read"?
- Why can a BLE sensor run for a year on a coin cell while a Wi-Fi sensor cannot?
- What does MQTT QoS 1 guarantee, and what does it not?
- Why would a product use Thread instead of Wi-Fi for a smart light switch?
- What does using a pre-certified module let you skip, and what does it not let you skip?

## Go deeper

??? note "Optional extras"

    - **Antennas in one line:** a trace antenna is free but tuned to the board it is on; move it, change the enclosure, or put a hand near it and performance changes. This is the hardware team's problem, but you will be asked to explain a range regression, so learn to ask "what changed near the antenna?"
    - **Zephyr and wireless:** Zephyr has BLE, Thread, and Wi-Fi stacks built in, which is one reason it is winning in IoT. The Nordic courses above are Zephyr courses in disguise.
