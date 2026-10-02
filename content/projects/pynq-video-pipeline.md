---
title: "Real-Time Video Processing Pipeline on Pynq"
subtitle: "Xilinx Pynq-Z2 · Verilog and HLS"
date: 2024-05-01
featured: true
weight: 1
badge: "Demo"
github: "https://github.com/gs-chaitanya/"
tags: ["Pynq-Z2", "Verilog / HLS", "Python", "AXI4-Stream", "HDMI"]
aliases:
  - /projects/pynq-video-pipeline.html
stats:
  - label: "Resolution"
    value: "1080p"
  - label: "Frame Rate"
    value: "60fps"
  - label: "Switchable Kernels"
    value: "3 filters"
video: "/projects/img_zynq.mp4"
summary: "Real-time 1080p hardware-accelerated video processing pipeline on Xilinx Pynq-Z2. AXI4-Stream pipeline with switchable Sobel, blur, and threshold kernels at 60fps."
---

## Overview
Built a real-time video processing pipeline on the **Xilinx Pynq-Z2** board, utilizing custom FPGA IP for pixel-level operations at full 1080p frame rates. The pipeline takes live HDMI input, passes frames through programmable filter kernels implemented in Programmable Logic (PL), and outputs the processed stream over HDMI at up to **60 FPS**.

## Architecture
The design uses an **AXI4-Stream** video pipeline in the PL. Processing blocks include:
- A **Sobel edge detector**
- A configurable **3x3 convolution kernel** (for smoothing, blur, and sharpening)
- A **pixel-wise threshold stage**

All kernels are chained in hardware. Switching between filters happens at runtime without FPGA re-synthesis simply by toggling on-board switches.

## Key Technical Decisions
- Implemented a custom AXI4-Stream based IP in Verilog alongside an alternate high-level synthesized version with Vivado HLS.
- Handled frame buffering in Processing System (PS) DDR memory rather than on-chip BRAM to eliminate resource bottlenecks, with the DMA engine managing PL ↔ PS transfers smoothly.
