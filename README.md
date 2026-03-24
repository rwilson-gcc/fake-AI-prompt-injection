# 🤖 Fake AI Prompt Injection

A simple, browser‑based demonstration of how **prompt injection attacks** can be simulated using a fake AI interface.  
This repo is useful for teaching, demos, workshops, and awareness training around AI security concepts.

***

## 📂 Repository Structure

From the GitHub repo contents:

    fake-AI-prompt-injection/
    │
    ├── css/          ← Stylesheets
    ├── js/           ← Front‑end behaviour and “fake AI” logic
    └── index.html    ← Main interface

***

## 🎯 Purpose of the Project

This project simulates how a seemingly harmless AI chatbot can be manipulated through poorly‑sanitised inputs, mirroring real prompt‑injection risks described in security sources. For example:

*   Prompt injection can **override AI instructions**, allowing attackers to manipulate behaviour.
*   Attackers may use hidden or cleverly‑phrased text to hijack workflows or access sensitive data in real systems.
*   Because LLMs process prompts as one continuous instruction stream, they cannot reliably distinguish trusted vs. untrusted input — a fundamental cause of these vulnerabilities.
***

## 🚀 Getting Started

### ✅ Run Locally

No backend is required — everything runs in the browser.

1.  Clone the repository:
    ```bash
    git clone https://github.com/rwilson-gcc/fake-AI-prompt-injection
    ```
2.  Open:
        fake-AI-prompt-injection/index.html
3.  Interact with the fake AI and test prompt‑injection attempts.

***

## 🧪 What You Can Demonstrate

This repo is suitable for hands‑on demos of:

### **Direct Prompt Injection**

E.g. inputting instructions that override the system's intended behaviour — the most common form of prompt injection.

### **Hidden / Obfuscated Prompts**

Demonstrating how malicious instructions can be embedded within user input or disguised within text.

### **Manipulating AI Personas or Safety Rules**

Replicating real‑world exploit patterns where users force a model to break its rules, similar to override‑style attacks documented in security research.

### **Awareness Training**

Showing non‑technical audiences how easy it is to mislead an “AI” system that does not validate or isolate user input.

***

## 🛡️ Educational Use Cases

You can use this project to teach:

*   How LLM vulnerabilities differ from traditional code injection (e.g., lack of parsing boundaries).
*   Why organisations must treat LLM inputs as untrusted, even from internal users.
*   How poor prompt‑engineering and lack of guardrails leads to bypasses or unsafe outputs.
*   The importance of isolation, sanitisation, and prompt‑chaining controls.

***

## 📈 Possible Enhancements

*   ✅ A visible “system prompt” box to show how inputs override instructions
*   ✅ Logging of injected vs. intended behaviour
*   ✅ Sandbox examples of indirect injection (e.g., reading malicious text from a fake webpage)
*   ✅ Scenarios illustrating AI jailbreaks and persona hijacking
*   ✅ A scoring or challenge mode

***
