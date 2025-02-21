import React from 'react'

const Description = () => {
    return (
        <div className="bg-gray-900 text-gray-200 p-6 rounded-2xl space-y-6">
            <h1 className="text-3xl font-bold text-blue-400">Curve Fitting Tool</h1>

            <section>
                <h2 className="text-2xl font-semibold text-white">Why I Built the Curve-Fitting Tool</h2>
                <p>
                    As a physics enthusiast, I’ve often found the process of analyzing experimental data both fascinating and challenging. In many physics experiments, especially those involving linear or predictable relationships, accurately fitting a graph to data points is essential to extract meaningful physical quantities like resistance, acceleration, or constants of proportionality. However, manually plotting graphs and calculating gradients and intercepts can be time-consuming and prone to errors.
                </p>
                <p>
                    To streamline this process, I built a <span className="text-blue-400 font-semibold">curve-fitting tool</span> that automates the graph-fitting workflow. The tool not only fits a curve (starting with linear regression) to experimental data but also directly extracts critical values like the <span className="text-green-400">gradient</span> and <span className="text-green-400">intercept</span>. This makes it easier to analyze data accurately and efficiently, ensuring precise results while saving time.
                </p>
                <p>
                    I first tested the tool using data from an <span className="italic">Ohm’s Law</span> experiment, where the voltage-current graph yields a gradient representing electrical resistance. The tool successfully calculated a gradient of <span className="text-yellow-400 font-mono">5.04</span> and an intercept of <span className="text-yellow-400 font-mono">0.04</span>, demonstrating its ability to derive key physical parameters from real data.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">Physics Experiments Where the Tool Can Be Applied</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Ohm’s Law:</strong> Voltage vs. current to find resistance from the gradient.</li>
                    <li><strong>Hooke’s Law:</strong> Force vs. extension to determine the spring constant.</li>
                    <li><strong>Newton’s Second Law:</strong> Force vs. acceleration to calculate mass.</li>
                    <li><strong>Boyle’s Law:</strong> Pressure vs. volume to analyze inverse gas relationships.</li>
                    <li><strong>Uniformly Accelerated Motion:</strong> Velocity vs. time to find acceleration and initial velocity.</li>
                    <li><strong>Radioactive Decay:</strong> With future exponential curve fitting, it could analyze decay data to determine half-lives.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">The Tech Behind the Tool</h2>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <strong>Linear Regression from Scratch:</strong> I built the <span className="text-blue-400">linear regression algorithm</span> from scratch in Python, focusing on the mathematical core without using libraries like scikit-learn. This deepened my understanding of concepts like <span className="italic">least squares minimization</span>.
                    </li>
                    <li>
                        <strong>Flask API:</strong> I wrapped the regression model into a <span className="text-blue-400">Flask RESTful API</span>, enabling users to send experimental data and get back fitted results.
                    </li>
                    <li>
                        <strong>React Front-End with Recharts:</strong> The UI is built with <span className="text-blue-400">React</span> for an interactive experience, using <span className="text-blue-400">Recharts</span> for dynamic data visualization.
                    </li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">How This Project Covers All My Interests</h2>
                <p>
                    What makes this project special to me is how it brings together all of my core interests: <strong>physics</strong>, <strong>mathematics</strong>, and <strong>computer science</strong>.
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Physics:</strong> Direct engagement with experimental data analysis.</li>
                    <li><strong>Mathematics:</strong> Building the regression algorithm deepened my understanding of optimization and linear algebra.</li>
                    <li><strong>Computer Science:</strong> Full-stack development with Flask and React sharpened my API and front-end skills.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">Challenges Faced</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Data Noise:</strong> Handling noisy experimental data while ensuring the regression remains accurate.</li>
                    <li><strong>Graph Plotting:</strong> Perfectly aligning the fitted curve with data points.</li>
                    <li><strong>API Integration:</strong> Ensuring smooth communication between Flask back-end and React front-end.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white">🚀 Future Plans</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Add <strong>non-linear curve fitting</strong> (exponential, logarithmic, etc.).</li>
                    <li>Implement <strong>multi-variable regression</strong> for more complex datasets.</li>
                    <li>Enhance the UI with <strong>data import/export</strong> and <strong>error analysis</strong>.</li>
                    <li>Integrate into a broader <strong>scientific computing platform</strong>.</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold text-white">Source code</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><a href="https://github.com/Rakeeb-Abdullah/curve_fit_ui">Frontend</a></li>
                    <li><a href="https://github.com/Rakeeb-Abdullah/curve_fit_backend">Backend</a></li>

                </ul>
            </section>
            <p className="text-center text-gray-400 italic mt-6">
                🙌 Thanks for checking this out! 🚀✨
            </p>
        </div>
    )
}

export default Description