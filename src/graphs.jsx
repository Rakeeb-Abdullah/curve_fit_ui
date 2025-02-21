import React, { useRef } from 'react'
import { Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import html2canvas from "html2canvas";
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi';

const Graph = ({ data, lineData }) => {
    const chartRef = useRef(null)
    const handleDownload = () => {
        if (chartRef.current) {
            html2canvas(chartRef.current, { backgroundColor: "#030711" }).then((canvas) => {
                const link = document.createElement("a");
                link.download = "chart.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        }
    };

    return (
        <div ref={chartRef} className='w-full sm:w-1/2 pl-3 pr-3 pb-3'>
            <div style={{ position: "relative", width: "100%", height: "75vh" }} className="bg-[#0a0f1a] rounded-md mt-5 flex justify-center">
                <ResponsiveContainer width="100%" className="p-5">
                    <ComposedChart >
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />  {/* Blue start */}
                                <stop offset="50%" stopColor="#8b5cf6" stopOpacity={0.8} /> {/* Purple mid */}
                                <stop offset="100%" stopColor="#ec4899" stopOpacity={1} /> {/* Pink end */}
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                        <XAxis type="number" stroke="#ddd" tick={{ fill: '#ddd' }} dataKey="x" domain={[0, 'auto']} label="X" />
                        <YAxis label="Y" stroke="#ddd" tick={{ fill: '#ddd' }} type="number" />
                        <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#4b5563', color: '#fff' }}
                            labelStyle={{ color: '#fff' }}
                            itemStyle={{ color: '#fff' }} />

                        <Scatter name="Scatter Points" data={data} dataKey="y" fill="#39ff14" />

                        <Line type="monotone" data={lineData['codinates']} dot={false} dataKey="y" stroke="url(#lineGradient)" strokeWidth={2} />
                    </ComposedChart>

                </ResponsiveContainer>
            </div >

            {lineData['m'] ? <div className='w-full flex flex-col text-left justify-evenly font-semibold'>
                <p p > Equation: <span className='text-[#ff007f] font-normal'>{`y=(${lineData["m"][0]})x+(${lineData["c"]})`}</span></p >
                <div className="flex w-full">
                    <p className='pr-8'>Gradient: <span className="text-[#ff007f] font-normal">{lineData['m'][0]}</span></p>
                    <p className='pr-8'>Intercept: <span className="text-[#ff007f] font-normal">{lineData['c']}</span></p>
                    <p className='text-[#ff8181] mr-8'>Error(RMSE): <span className="text-[#ff007f] font-normal">{lineData['cost']}</span></p>
                    <FiDownload className='mt-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' onClick={handleDownload} />

                </div>

            </div > : <div></div>}
        </div >

    )
}

export default Graph