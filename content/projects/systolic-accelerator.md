---
title: "Systolic Hardware Accelerator for Vector-Matrix Operations"
subtitle: "March 2024 · I-Chip, Udyam'24, IIT (BHU) Varanasi · 2nd Prize"
date: 2024-03-01
featured: false
weight: 5
badge: "2nd Prize"
github: "https://github.com/gs-chaitanya/"
tags: ["Verilog", "AXI-4", "Systolic Array", "Hardware Acceleration", "FPGA"]
stats:
  - label: "Competition"
    value: "I-Chip"
  - label: "Award"
    value: "2nd Prize"
  - label: "Interface"
    value: "AXI-4"
summary: "Systolic array accelerator for matrix multiplications and convolutions, orchestrated via an AXI-4 interrupt-controlled interface. Awarded 2nd Prize at I-Chip, Udyam'24."
---

## Overview
Designed a systolic array accelerator that efficiently executes matrix multiplications and 2D convolutions in hardware. The systolic dataflow pattern minimizes memory accesses by passing partial sums through a 2D grid of processing elements (PEs), achieving high arithmetic intensity relative to memory bandwidth.

## Architecture
The PE grid is orchestrated through an **AXI-4 interrupt-controlled interface**, allowing the host processor to queue tensor operations and receive completion interrupts without active polling. Data flows into the array from memory-mapped input buffers, and results are written back to output buffers over the same AXI4 fabric, enabling DMA-style transfers without CPU intervention during computation.

## Key Design Decisions
- **Weight Stationary Dataflow**: Chosen to minimize weight re-loading overhead for convolution and deep learning inference workloads.
- **Composable Bus Interface**: The AXI-4 interrupt interface allows the accelerator to seamlessly compose with other IP in a larger SoC fabric without bespoke control logic.
- **Software Verification**: Thoroughly verified with a reference matrix multiplication implementation in software, confirming numerical accuracy across diverse tile and matrix sizes.
