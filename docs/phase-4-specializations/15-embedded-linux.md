# 15. Embedded Linux

**Time:** 3 to 4 weeks · **Board:** Raspberry Pi 4 or 5 (any Linux SBC works) · **Prerequisites:** Phase 3, comfort with a Linux command line

## Why this matters

When a product needs a screen, a network stack, a camera, or serious computation, a microcontroller is not enough, and the answer is nearly always Linux on an application processor. Embedded Linux is a different discipline from MCU firmware: you are configuring and extending a huge existing system rather than writing everything. The skills that transfer are the ones you have: reading hardware documentation, understanding memory and buses, and debugging at the boundary between software and silicon.

## You will be able to

- Describe the boot chain: ROM code, bootloader (U-Boot), kernel, device tree, init, userspace.
- Explain what the device tree is and modify one to enable a peripheral.
- Talk to hardware from userspace: GPIO via libgpiod, I2C and SPI via their device nodes.
- Cross-compile a program for your board, and explain what Buildroot and Yocto are for.
- Read a simple kernel driver and know what a platform driver, probe function, and sysfs are.

## Learn

- [ ] <span class="les-tag">Course</span> **[Embedded Linux system development](https://bootlin.com/training/embedded-linux/)** by Bootlin <span class="les-time">Slides and labs, ~20 h</span><br>Bootlin trains the industry and publishes their complete course materials for free: toolchain, bootloader, kernel, root filesystem, build systems. This is the spine of the module. Their [docs page](https://bootlin.com/docs/) links everything.
- [ ] <span class="les-tag">Docs</span> **[Raspberry Pi documentation: The Linux kernel](https://www.raspberrypi.com/documentation/computers/linux_kernel.html)** and **[Raspberry Pi hardware](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)** <span class="les-time">~2 h</span><br>Building and configuring the kernel for your board, and the boot process specific to the Pi.
- [ ] <span class="les-tag">Docs</span> **[Device tree usage model](https://www.kernel.org/doc/html/latest/devicetree/usage-model.html)** from the kernel documentation and **[devicetree.org](https://www.devicetree.org/)** <span class="les-time">~1.5 h</span><br>What the device tree describes, how the kernel uses it to bind drivers, and how overlays work.
- [ ] <span class="les-tag">Docs</span> **[libgpiod documentation](https://libgpiod.readthedocs.io/)** <span class="les-time">~1 h</span><br>The modern way to use GPIO from userspace (the old sysfs interface is deprecated). Command-line tools and C API.
- [ ] <span class="les-tag">Course</span> **[Linux kernel and driver development](https://bootlin.com/training/kernel/)** by Bootlin <span class="les-time">Slides, ~15 h</span><br>Kernel modules, platform drivers, device model, interrupts, and the I2C subsystem. Read the first half; write a driver in the checkpoint.
- [ ] <span class="les-tag">Docs</span> **[Buildroot manual](https://buildroot.org/downloads/manual/manual.html)** and **[Yocto Project documentation](https://docs.yoctoproject.org/)** <span class="les-time">~2 h to understand what each is</span><br>Two ways to build a complete custom Linux image from source. Buildroot is simple and great for learning; Yocto is what large products use. Bootlin has free courses on [Buildroot](https://bootlin.com/training/buildroot/) and [Yocto](https://bootlin.com/training/yocto/) too.
- [ ] <span class="les-tag">Book</span> <span class="les-tag les-paid">Paid</span> **[Mastering Embedded Linux Development, 4th Edition](https://www.packtpub.com/en-us/product/mastering-embedded-linux-development-9781803232591)** by Frank Vasquez and Chris Simmonds (2025) <span class="les-time">~25 h</span><br>The standard book, updated for Linux 6.6 and Yocto 5.0. Companion code on [GitHub](https://github.com/PacktPublishing/Mastering-Embedded-Linux-Development). If you go into Linux work, buy it.

## Do

- [ ] **Checkpoint 15.1: Watch it boot.** Connect a USB-UART to your Pi's serial console. Watch the full boot log from the bootloader through the kernel to login. Identify where the device tree is loaded, where the root filesystem is mounted, and where init starts. Save the log and annotate it.
- [ ] **Checkpoint 15.2: Hardware from userspace.** Wire an LED and a button, and your I2C sensor from Module 6, to the Pi. Blink the LED and read the button with `gpioset`/`gpioget` and then from a C program using libgpiod. Read the sensor's ID register with `i2cget`, then write a C program using `/dev/i2c-1` that reads a temperature. Compare the code to your MCU driver.
- [ ] **Checkpoint 15.3: Device tree overlay.** Write a device tree overlay that declares your sensor on the I2C bus with the right compatible string. Load it, and confirm the kernel's existing driver for that sensor (most common sensors have one) creates an IIO device you can read from sysfs. Your Module 6 driver just got replaced by twenty lines of device tree; understand why.
- [ ] **Checkpoint 15.4: Cross-compile and build a system.** On your laptop, cross-compile your libgpiod program for the Pi and run it there. Then build a minimal Buildroot image for the Pi that boots to a shell with your program installed. Note the image size compared to the stock distribution.
- [ ] **Checkpoint 15.5: A tiny driver.** Write a kernel module that registers a platform driver for a device tree node, prints in `probe()`, and exposes one value through sysfs. Load it, read the value, unload it. Read the kernel log at each step.

## Check yourself

- What runs before the kernel on your board, and where does each stage live?
- Why does the kernel need a device tree on Arm boards when a PC does not?
- What is the difference between a kernel driver and a userspace program that opens `/dev/i2c-1`? When would you write each?
- What does "root filesystem" mean and why does Buildroot let you build one that is a few megabytes?
- Is Linux real time? What would you do if a product needed both a display and 10-microsecond motor control?

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Docs</span> **[The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/)** <span class="les-time">Reference</span><br>Official, comprehensive, and better than it used to be.
    - [ ] <span class="les-tag">Community</span> **[eLinux.org wiki](https://elinux.org/Main_Page)** <span class="les-time">Browse</span><br>A long-running community wiki with board pages, tutorials, and history.
    - [ ] <span class="les-tag">Book</span> **[Linux Device Drivers, 3rd Edition](https://lwn.net/Kernel/LDD3/)** <span class="les-time">Free</span><br>From 2005 and the APIs have changed, but the mental model of the kernel it teaches is still correct. Read with the current docs beside it.
    - [ ] <span class="les-tag">Docs</span> **[BeagleBoard](https://www.beagleboard.org/)** <span class="les-time">Browse</span><br>The other classic learning SBC family, with fully open hardware and a strong industrial heritage.
