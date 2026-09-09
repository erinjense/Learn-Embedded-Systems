# 1. Electronics you actually need

**Time:** 1 to 2 weeks · **Board:** none yet, just a multimeter and a breadboard · **Prerequisites:** none

## Why this matters

Firmware runs on a circuit. When a pin reads the wrong value, a sensor returns garbage, or a board resets randomly, the cause is as often electrical as it is software. You do not need an electrical engineering degree, but you do need to measure a voltage, size a resistor, read a schematic, and find the one table in a datasheet that tells you whether two chips can talk to each other.

## You will be able to

- Measure voltage, current, and continuity with a multimeter without guessing which setting to use.
- Explain voltage, current, and resistance to a friend using Ohm's law, and size a resistor for an LED.
- Read a schematic well enough to wire a breadboard from it.
- Find and interpret the electrical characteristics and pinout in a datasheet.
- Know what "3.3 V logic" means and why connecting a 5 V output to a 3.3 V input can kill a chip.

## Learn

Do these in order. Skip what you already know, but do the checkpoints.

- [ ] <span class="les-tag">Article</span> **[Voltage, Current, Resistance, and Ohm's Law](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law)** by SparkFun <span class="les-time">~30 min</span><br>The water-pipe analogy done right, then the one equation you will use forever.
- [ ] <span class="les-tag">Article</span> **[How to Use a Multimeter](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter)** by SparkFun <span class="les-time">~30 min</span><br>Measuring voltage, current, resistance, and continuity, with photos of the probes in the right sockets.
- [ ] <span class="les-tag">Article</span> **[How to Use a Breadboard](https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard)** by SparkFun <span class="les-time">~20 min</span><br>Which holes connect to which. Everyone gets this wrong once.
- [ ] <span class="les-tag">Article</span> **[How to Read a Schematic](https://learn.sparkfun.com/tutorials/how-to-read-a-schematic)** by SparkFun <span class="les-time">~30 min</span><br>Symbols, nets, and the conventions that make a schematic readable.
- [ ] <span class="les-tag">Article</span> **[Resistors](https://learn.sparkfun.com/tutorials/resistors)** and **[Pull-up Resistors](https://learn.sparkfun.com/tutorials/pull-up-resistors)** by SparkFun <span class="les-time">~40 min</span><br>Color codes, power rating, and the single most common resistor job in a microcontroller circuit.
- [ ] <span class="les-tag">Article</span> **[Logic Levels](https://learn.sparkfun.com/tutorials/logic-levels)** by SparkFun <span class="les-time">~20 min</span><br>What counts as a 1 or a 0, and why 5 V and 3.3 V parts need care when connected.
- [ ] <span class="les-tag">Interactive</span> **[Falstad Circuit Simulator](https://www.falstad.com/circuit/)** <span class="les-time">~30 min to play</span><br>Watch current flow in animated circuits. Build the LED circuit from the checkpoint before you build it for real.

### Reading a datasheet

There is no perfect tutorial for this, so here is the method. Open the [Raspberry Pi Pico 2 datasheet](https://datasheets.raspberrypi.com/pico/pico-2-datasheet.pdf) and find:

1. **The pinout diagram.** Every pin has a number, a name, and usually several functions.
2. **Electrical characteristics** or **recommended operating conditions.** Supply voltage range, maximum current per pin, input high and low thresholds. These are the numbers that decide whether you can connect two parts.
3. **Absolute maximum ratings.** Exceed these and the part may die. They are not targets.
4. **Timing diagrams and registers** come later, in Modules 5 and 6.

Every datasheet has these sections somewhere. The skill is finding them fast.

## Do

- [ ] **Checkpoint 1.1: Light an LED correctly.** Using a 3.3 V supply (the Pico 2's 3V3 pin works, or three AA batteries), pick a resistor for a red LED at about 10 mA. Show the calculation. Build it on the breadboard. Measure the voltage across the LED and across the resistor with your multimeter, and check that they add up to the supply voltage. Measure the current. Compare it to your calculation and explain any difference.
- [ ] **Checkpoint 1.2: Read a real schematic.** Open the Pico 2 datasheet's schematic pages. Find the 3.3 V regulator, the BOOTSEL button, and the resistor and LED connected to the on-board LED pin. Write one paragraph, in your own words, describing what happens electrically when you press BOOTSEL.

## Check yourself

- If an LED drops 2 V and you want 10 mA from 3.3 V, what resistor do you use? What power does it dissipate?
- What does a pull-up resistor do, and what happens to a button input without one?
- A sensor outputs 5 V logic. Your microcontroller runs at 3.3 V. Name two things you could do.
- Where in a datasheet would you look to find the maximum current a GPIO pin can source?

## Go deeper

<details markdown>
<summary><strong>Optional extras</strong></summary>

- [ ] <span class="les-tag">Book</span> **[Ultimate Electronics: Practical Circuit Design and Analysis](https://ultimateelectronicsbook.com/)** by CircuitLab <span class="les-time">Free, read chapters as needed</span><br>A free, interactive textbook with embedded simulations. The clearest modern introduction.
- [ ] <span class="les-tag">Book</span> **[All About Circuits Textbook](https://www.allaboutcircuits.com/textbook/)** <span class="les-time">Free reference</span><br>Encyclopedic. Use it to look things up, not to read cover to cover.
- [ ] <span class="les-tag">Video</span> **[Digital electronics tutorial](https://www.youtube.com/playlist?list=PLowKtXNTBypETld5oX1ZMI-LYoA2LWi8D)** by Ben Eater <span class="les-time">~3 h</span><br>Logic gates, latches, and flip-flops built on a breadboard. The bridge from electronics to computing.
- [ ] <span class="les-tag">Article</span> **[Capacitors](https://learn.sparkfun.com/tutorials/capacitors)**, **[Diodes](https://learn.sparkfun.com/tutorials/diodes)**, **[Transistors](https://learn.sparkfun.com/tutorials/transistors)** by SparkFun <span class="les-time">~1.5 h</span><br>The other three components you will see on every board, and why every chip has a 0.1 µF capacitor next to it.
- [ ] <span class="les-tag">Article</span> **[Adafruit Guide to Excellent Soldering](https://learn.adafruit.com/adafruit-guide-excellent-soldering)** <span class="les-time">~45 min</span><br>When you buy a board without headers, this is how not to ruin it.
- [ ] <span class="les-tag">Course</span> **[Khan Academy Electrical Engineering](https://www.khanacademy.org/science/electrical-engineering)** <span class="les-time">Many hours</span><br>If you want the math behind circuits, this is patient and free.
- [ ] <span class="les-tag">Book</span> <span class="les-tag les-paid">Paid</span> **[The Art of Electronics](https://artofelectronics.net/)** by Horowitz and Hill<br>The reference every hardware engineer owns. Not a beginner book. Buy it once you know you are staying.

</details>