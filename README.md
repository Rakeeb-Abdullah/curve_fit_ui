# ⚡ Curve Fitting Tool

## 📖 Why I Built the Curve-Fitting Tool

As a physics enthusiast, I’ve often found the process of analyzing experimental data both fascinating and challenging. In many physics experiments, especially those involving linear or predictable relationships, accurately fitting a graph to data points is essential to extract meaningful physical quantities like resistance, acceleration, or constants of proportionality. However, manually plotting graphs and calculating gradients and intercepts can be time-consuming and prone to errors.

To streamline this process, I built a **curve-fitting tool** that automates the graph-fitting workflow. The tool not only fits a curve (starting with linear regression) to experimental data but also directly extracts critical values like the **gradient** and **intercept**. This makes it easier to analyze data accurately and efficiently, ensuring precise results while saving time.

I first tested the tool using data from an **Ohm’s Law** experiment, where the voltage-current graph yields a gradient representing electrical resistance. The tool successfully calculated a gradient of `5.04` and an intercept of `0.04`, demonstrating its ability to derive key physical parameters from real data.

---

## 🧪 Physics Experiments Where the Tool Can Be Applied

- ⚡ **Ohm’s Law:** Voltage vs. current to find resistance from the gradient.
- 🪢 **Hooke’s Law:** Force vs. extension to determine the spring constant.
- 🚀 **Newton’s Second Law:** Force vs. acceleration to calculate mass.
- 🫧 **Boyle’s Law:** Pressure vs. volume to analyze inverse gas relationships.
- 🏃 **Uniformly Accelerated Motion:** Velocity vs. time to find acceleration and initial velocity.
- ☢️ **Radioactive Decay:** With future exponential curve fitting, it could analyze decay data to determine half-lives.

---

## 🛠️ The Tech Behind the Tool

I wanted this project to be more than just a simple graph-fitting tool. Here's how I built it:

1. **🔢 Linear Regression from Scratch:**  
   I built the **linear regression algorithm** from scratch in Python, focusing on the mathematical core without using libraries like scikit-learn. This deepened my understanding of concepts like **least squares minimization** to calculate gradients and intercepts.

2. **🌐 Flask API:**  
   I wrapped the regression model into a **Flask RESTful API**, enabling users to send experimental data and get back fitted results. Flask made it simple yet powerful to handle HTTP requests and responses.

3. **💻 React Front-End with Recharts:**  
   The UI is built with **React** for an interactive experience, using **Recharts** for dynamic data visualization. Users can input experimental data, view real-time plotted graphs, and instantly see values like gradients and intercepts.

---

## ⚡ How This Project Covers All My Interests

What makes this project special to me is how it brings together all of my core passions: **physics**, **mathematics**, and **computer science**.

- 🔬 **Physics:** Direct engagement with experimental data analysis, helping extract meaningful physical quantities.
- 🧮 **Mathematics:** Building the regression algorithm strengthened my understanding of optimization and linear algebra.
- 💻 **Computer Science:** Full-stack development with Flask and React sharpened my API and front-end skills.

---

## 🚧 Challenges Faced

- **Data Noise:** Handling noisy experimental data while ensuring the regression remains accurate.
- **Graph Plotting:** Perfectly aligning the fitted curve with data points, especially during axis scaling and zooming.
- **API Integration:** Ensuring smooth communication between the Flask back-end and React front-end without lag or errors.

---

## 🚀 Future Plans

- 📈 Add **non-linear curve fitting** (exponential, logarithmic, etc.)
- 🔢 Implement **multi-variable regression** for more complex datasets
- 📊 Enhance the UI with **data import/export**, **graph customization**, and **error analysis**
- 🧪 Integrate into a broader **scientific computing platform** for students and researchers

---

## 🙌 Thanks for Checking This Out!

Feel free to reach out if you have feedback, suggestions 🚀✨

---
