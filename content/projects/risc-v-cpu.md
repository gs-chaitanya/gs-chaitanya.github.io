---
title: "RISC-V CPU in Verilog HDL"
subtitle: "RV32IM Base + Multiply/Divide · SkyWater 130nm Tape-out Flow"
date: 2024-04-01
featured: true
weight: 3
badge: "Tape-out"
github: "https://github.com/gs-chaitanya/"
tags: ["Verilog", "RISC-V RV32IM", "SkyWater 130nm", "Cadence", "RTL Simulation"]
aliases:
  - /projects/risc-v-cpu.html
stats:
  - label: "Architecture"
    value: "32-bit"
  - label: "ISA"
    value: "RV32IM"
  - label: "Pipeline"
    value: "5-stage"
summary: "32-bit RV32IM CPU implemented in Verilog, validated via RTL testbenches and cross-compiled C benchmarks. Physical design flow targeting SkyWater 130nm tape-out."
---

## Overview
Designed and implemented a 32-bit RISC-V CPU supporting the **RV32IM** instruction set (base integer + hardware multiply/divide extensions) in Verilog HDL. The processor features a classic **5-stage pipeline** (IF / ID / EX / MEM / WB) with full hazard detection and operand forwarding logic, validated through extensive RTL testbenches and cross-compiled C benchmarks.

## Architecture
- **Pipelining**: 5-stage synchronous pipeline designed for high clock frequency.
- **Hazard Handling**: Data hazards resolved via forwarding paths (EX-to-EX, MEM-to-EX) and pipeline stall logic for load-use delays.
- **M-Extension**: Multi-cycle hardware multiplier and restoring divider integrated into the execution unit.
- **Validation**: Verified against RISC-V architectural compliance test suites and bare-metal C programs.

## Physical Design Flow
After RTL sign-off, the design was carried through synthesis and physical design targeting tape-out on the **SkyWater 130nm open-source PDK** using the Cadence Digital Design Suite. The implementation involved floorplanning, standard cell placement, clock tree synthesis (CTS), routing, and static timing analysis (STA) to achieve clean timing closure.
