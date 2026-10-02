---
title: "FPGA-based Raw NAND Flash Controller"
subtitle: "Digilent Zybo & Altera DE1-SoC · Verilog + Embedded C + Embedded Linux"
date: 2024-07-01
featured: true
weight: 2
badge: "3 papers"
github: "https://github.com/gs-chaitanya/"
tags: ["Verilog", "Embedded C", "Embedded Linux", "ONFI Protocol", "Vivado", "Digilent Zybo", "Altera DE1-SoC"]
aliases:
  - /projects/nand-controller.html
stats:
  - label: "ONFI Commands"
    value: "6"
  - label: "Program Time"
    value: "~1ms / KB"
  - label: "Block Erase"
    value: "3ms"
  - label: "Protocol"
    value: "ONFI"
image: "/projects/nand-setup.jpg"
image_caption: "Digilent Zybo 7000 SoC FPGA Board · Logic analyser · TSOP adapter · Raw NAND Flash chip"
summary: "Bare-metal controller for direct Read/Write/Erase on raw 2D/3D SLC & MLC NAND Flash via ONFI. Built on Digilent Zybo (Verilog) and Altera DE1-SoC (Embedded Linux)."
---

## Overview
Developed a bare-metal FPGA-based controller for raw 2D and 3D NAND Flash memories, capable of reading, writing, and erasing directly on the chip — with no intermediate commercial flash controller IC in the path.

Built at **IIT Bombay** under **Prof. Sandip Mondal**, the controller was motivated by the need to characterize stress-induced degradation and threshold-voltage distribution shifts in NAND cells, requiring cycle-accurate, low-level access to the memory array.

The hardware setup consists of a **Digilent Zybo 7000 SoC FPGA Board**, a logic analyzer, a TSOP adapter for exposing NAND Flash pins, and the raw NAND Flash chip itself — wired across a precision breadboard interface.

## Implementation
Pins on the NAND Flash device must be driven with precise voltages and timings conforming to the ONFI (Open NAND Flash Interface) protocol. After evaluating several architectural options:
- Pure Verilog FSM
- Embedded Linux GPIO driver
- Bare-metal Embedded C

Bare-metal C via the Xilinx SDK and Vivado was chosen for the optimal balance of nanosecond timing control and rapid verification iteration.

The following ONFI commands were fully implemented and verified:
- `READ_ID`
- `RESET`
- `READ_STATUS`
- `PROGRAM_PAGE`
- `READ_PAGE`
- `BLOCK_ERASE`

Waveform analysis was used to optimize signal latency, bringing program time down to **~1 ms per kilobyte** and erase time to **3 ms**. To demonstrate end-to-end correctness, bitmap images were written to the NAND Flash chip through the controller via UART, read back serially, and reconstructed using custom Python tooling.

## NAND Flash Watermarking
Beyond the core controller, a novel NAND Flash Watermarking scheme was implemented for data security and counterfeiting prevention, inspired by *Flash Watermark: An Anticounterfeiting Technique for NAND Flash Memories* (Sakib, Milenković & Ray, IEEE TED 2020). High-speed Program-Erase Cycle schemes and program disturb routines were created to retrieve the watermark signature from the silicon.

## Research Outcomes
This controller served as the primary experimental instrument to collect characterization data that led to **three published conference papers** at the **Electronic Materials Conference (EMC 2025)** on stress-induced failure mechanisms, thermal threshold voltage shifts, and program disturb behavior in 3D NAND cells.
