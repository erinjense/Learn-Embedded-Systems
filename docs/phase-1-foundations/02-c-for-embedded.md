# 2. C, learned properly

**Time:** 3 to 4 weeks · **Board:** none, your computer · **Prerequisites:** none

## Why this matters

C is still the language of firmware. It is small, which is why you can learn it in a month, and unforgiving, which is why people who half-learn it spend years chasing bugs. Embedded C in particular leans on the parts general programming courses skip: pointers to fixed addresses, bit manipulation, integer widths, and the idea that a variable can change without your code touching it.

!!! warning "Do this module without AI assistance"
    This is the one place we ask you to turn the assistants off. Write every exercise yourself, read every compiler error yourself, and use the debugger instead of print statements when something is wrong. The point is not the exercises. The point is building the mental model of memory that makes everything after this possible. You get the tools back in Module 3.

## You will be able to

- Set up a C compiler and debugger on your own machine and use them from the command line.
- Write programs with functions, structs, arrays, and pointers, and explain what each one looks like in memory.
- Use bitwise operators to set, clear, toggle, and test individual bits, and explain integer promotion.
- Say what `volatile`, `static`, `const`, and fixed-width types like `uint32_t` mean and when each is needed.
- Recognize undefined behavior and know why the compiler is allowed to surprise you.

## Learn

Pick **one** main course from the first two. Do all of the "then" items.

- [ ] <span class="les-tag">Book</span> **[Beej's Guide to C Programming](https://beej.us/guide/bgc/)** by Brian "Beej" Hall <span class="les-time">~25 h, free</span><br>Friendly, complete, current (C11 and later), and it does not skip pointers or memory. Our default recommendation.
- [ ] <span class="les-tag">Course</span> **[CS50x](https://cs50.harvard.edu/x/)** by Harvard <span class="les-time">Weeks 1 to 5, ~40 h, free</span><br>If you prefer lectures and graded problem sets. Weeks 1 through 5 are C. Stop before Python.

Then, in this order:

- [ ] <span class="les-tag">Interactive</span> **[Exercism C track](https://exercism.org/tracks/c)** <span class="les-time">~10 h, free</span><br>Small exercises with automated tests. Do at least 15. Mentoring is free too.
- [ ] <span class="les-tag">Video</span> **[Jacob Sorber's channel](https://www.youtube.com/@JacobSorber)** <span class="les-time">Pick 5 to 10 videos, ~3 h</span><br>A CS professor explaining C, pointers, memory, and systems programming in 10-minute pieces. Search his channel for "pointers", "bit fields", "volatile", "memory layout".
- [ ] <span class="les-tag">Video</span> **[Bit Fields in C. What are they, and how do I use them?](https://www.youtube.com/watch?v=aMAM5vL7wTs)** by Jacob Sorber <span class="les-time">~12 min</span><br>Because registers are bit fields, and you will use them constantly.
- [ ] <span class="les-tag">Article</span> **[C Keywords to Use Often in Embedded Systems](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard/general-rules/keywords-static-volatile-const)** by Barr Group <span class="les-time">~15 min</span><br>`static`, `volatile`, `const`: what each really does and when firmware needs it.
- [ ] <span class="les-tag">Article</span> **[How to Use C's volatile Keyword](https://barrgroup.com/embedded-systems/how-to/c-volatile-keyword)** by Barr Group <span class="les-time">~15 min</span><br>The keyword that makes hardware registers work. Read it twice.
- [ ] <span class="les-tag">Article</span> **[A Guide to Undefined Behavior in C and C++](https://blog.regehr.org/archives/213)** by John Regehr <span class="les-time">~30 min</span><br>Why the compiler is allowed to delete your null check, and how to stop writing code that invites it.
- [ ] <span class="les-tag">Interactive</span> **[Compiler Explorer](https://godbolt.org/)** <span class="les-time">~30 min to explore</span><br>Paste C, see the assembly. Try `-O0` vs `-O2` on a loop that toggles a `volatile` variable and one that toggles a plain one. You will understand `volatile` for life.

### The embedded-specific bits

- [ ] <span class="les-tag">Article</span> **[Important Programming Concepts (Even on Embedded Systems), Parts I to VI](https://www.embeddedrelated.com/showarticle/629.php)** by Jason Sachs <span class="les-time">~3 h total</span><br>Idempotence, immutability, volatility, singletons, state machines, abstraction. Six essays that will make you a better engineer in any language. Parts: [I](https://www.embeddedrelated.com/showarticle/629.php), [II](https://www.embeddedrelated.com/showarticle/639.php), [III](https://www.embeddedrelated.com/showarticle/649.php), [IV](https://www.embeddedrelated.com/showarticle/691.php), [V](https://www.embeddedrelated.com/showarticle/723.php), [VI](https://www.embeddedrelated.com/showarticle/792.php).
- [ ] <span class="les-tag">Docs</span> **[cppreference: C language](https://en.cppreference.com/w/c)** <span class="les-time">Reference</span><br>The precise answer to "what does this do." Bookmark it. Look up `stdint.h`, integer promotion, and the `restrict` keyword.

## Do

Use GCC or Clang from a terminal, and GDB or LLDB to debug. On Windows, use WSL or MSYS2 so your commands match Linux; the firmware toolchain in Module 3 will feel identical.

- [ ] **Checkpoint 2.1: Bit toolkit.** Write `bits.h` with functions or macros to set, clear, toggle, and test bit *n* of a `uint32_t`, plus one to insert a value into a bit field given a shift and width. Write a `main()` that tests every one and prints the results in binary. Compile with `-Wall -Wextra -Werror` and fix every warning.
- [ ] **Checkpoint 2.2: A fake peripheral.** Define a `struct` that mirrors a made-up hardware register block: a control register, a status register, and a 16-byte data buffer. Create one instance, take a `volatile` pointer to it, and write a "driver" with functions like `periph_enable()`, `periph_write_byte()`, and `periph_is_busy()` that only touch the hardware through that pointer. This is exactly how real drivers work.
- [ ] **Checkpoint 2.3: Debugger, not printf.** Introduce a deliberate off-by-one bug in the buffer code from 2.2. Find it using only the debugger: breakpoints, watch a variable, step through, inspect memory. Then write down what you saw.

## Check yourself

- What is the difference between `char *p` and `char p[]` as function parameters? As global definitions?
- Why does `uint8_t a = 200, b = 100; uint8_t c = a + b;` not overflow the way you might expect? What is the type of `a + b`?
- What does `volatile` promise, and what does it *not* promise about concurrency?
- Why is `int` a bad choice for a value that must be exactly 32 bits on every platform?
- Give one example of undefined behavior and one of implementation-defined behavior.

## Go deeper

??? note "Optional extras"

    - [ ] <span class="les-tag">Book</span> **[Modern C](https://gustedt.gitlabpages.inria.fr/modern-c/)** by Jens Gustedt <span class="les-time">Free PDF</span><br>The best second book on C. Rigorous, current, and honest about the language's sharp edges.
    - [ ] <span class="les-tag">Book</span> <span class="les-tag les-paid">Paid</span> **[Effective C, 2nd Edition](https://nostarch.com/effective-c-2nd-edition)** by Robert Seacord<br>By a member of the C standards committee. Excellent on undefined behavior and security.
    - [ ] <span class="les-tag">Article</span> **[Scope Regions in C and C++](https://www.embedded.com/scope-regions-in-c-and-c/)** by Dan Saks <span class="les-time">~20 min</span><br>Scope, storage duration, and linkage are three different things. Saks untangles them.
    - [ ] <span class="les-tag">Docs</span> **GCC attributes: [syntax](https://gcc.gnu.org/onlinedocs/gcc/Attribute-Syntax.html), [function attributes](https://gcc.gnu.org/onlinedocs/gcc/Common-Function-Attributes.html), [variable attributes](https://gcc.gnu.org/onlinedocs/gcc/Common-Variable-Attributes.html)** and **[Pragmas](https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html)**<br>`__attribute__((section(".vectors")))`, `aligned`, `packed`, `weak`, `naked`: you will meet all of these in startup code.
    - [ ] <span class="les-tag">Article</span> **[Inline Functions in C](https://www.greenend.org.uk/rjk/tech/inline.html)** by Richard Kettlewell <span class="les-time">~15 min</span><br>`inline` means something different in C than most people think.
    - [ ] <span class="les-tag">Course</span> **[The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)** by MIT <span class="les-time">~10 h</span><br>Shell, editors, version control, debugging tools. The stuff nobody teaches and everyone needs.
