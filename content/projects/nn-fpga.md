---
title: "Neural Network Inference on FPGAs"
subtitle: "Edge Inference with Quantized Verilog Neurons · Under Dr. Sonam Jain"
date: 2024-04-01
featured: false
weight: 4
badge: "Edge AI"
github: "https://github.com/gs-chaitanya/"
tags: ["FPGA", "Verilog", "CNN", "Edge Inference", "Fixed-Point Arithmetic"]
stats:
  - label: "Target"
    value: "FPGA"
  - label: "Quantization"
    value: "Q8.8"
  - label: "Layer Flow"
    value: "Pipelined"
summary: "Hardware-accelerated Convolutional Neural Network (CNN) for edge inference on FPGA. Parameterized behavioural Verilog neuron model assembled into a fully-connected inference network."
---

## Overview
Developed a hardware-accelerated Convolutional Neural Network (CNN) for edge inference on FPGA, targeting resource-constrained deployment without a host CPU for compute-intensive layers. Implemented a behavioural Verilog model of an artificial neuron and assembled it into a fully-connected inference network deployed on the FPGA fabric.

## Design Approach
The neuron model was parameterized to allow configuring weights, bias, and activation functions at synthesis time. Multiple neuron instances were instantiated in parallel to form each layer, with the output of one layer pipelined into the next. Fixed-point arithmetic was used throughout to avoid the resource overhead of floating-point units, with the quantization error characterized against a software baseline.

## Key Considerations
- Weight quantization from Float32 &rarr; fixed-point Q8.8 was performed using a calibration pass on the training dataset before synthesis.
- Layer-by-layer resource utilization was monitored to stay within BRAM and DSP block budgets on the target device.
- Activation functions (ReLU, sigmoid) were implemented as piecewise-linear approximations to avoid non-linear hardware complexity.
