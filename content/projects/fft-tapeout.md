---
title: "Design and Tapeout of a 64 Point FFT Module"
subtitle: "SkyWater 130nm · TinyTapeout MPW · Verilog & OpenLane"
date: 2026-04-15
featured: true
weight: 1
badge: "Tape-out"
github: "https://github.com/gs-chaitanya/FFT-tiny-tapeout/tree/main"
tags: ["Verilog", "SkyWater 130nm", "TinyTapeout", "OpenLane", "ASIC Design", "FFT"]
stats:
  - label: "Process"
    value: "130nm"
  - label: "Points"
    value: "64-point"
  - label: "PDK"
    value: "SkyWater"
summary: "Architected a low-area 64-point FFT module in Verilog, marking the first successful tapeout from IIT (BHU) Varanasi on SkyWater 130nm via TinyTapeout."
---

## Overview
Architected a **64-point Fast Fourier Transform (FFT) module** in Verilog, tailored specifically for low-area hardware utilization and edge signal processing. This design marks the **first successful tapeout from IIT (BHU) Varanasi**.

## Architecture & Implementation
- **RTL Design**: Pipelined 64-point FFT architecture optimized for low gate count and minimal memory footprint.
- **ASIC Flow**: Driven through the automated **OpenLane ASIC flow** from RTL specification, logic synthesis, floorplanning, placement, clock tree synthesis (CTS), to global and detailed routing.
- **Silicon Fabrication**: Successfully taped out on **SkyWater 130nm** via the **TinyTapeout MPW shuttle**, achieving clean DRC, LVS, and static timing sign-off for manufacturing.
- **Repository**: Full RTL, testbenches, and GDSII files are available on GitHub at [gs-chaitanya/FFT-tiny-tapeout](https://github.com/gs-chaitanya/FFT-tiny-tapeout/tree/main).
