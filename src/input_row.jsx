import React from 'react'
import { Input } from '@/components/ui/input'

const InptRow = ({ setX, setY, index, setData }) => {
    const addToX = (e) => {

        setX((prevX) => prevX.map((num, i) => (i === index ? num = parseFloat(e.target.value) : num)))
        setData((prevData) => prevData.map((data, i) => (i === index ? { ...data, x: parseFloat(e.target.value) } : data)))

    }
    const addToY = (e) => {
        setY((prevY) => prevY.map((num, i) => (i === index ? num = parseFloat(e.target.value) : num)))
        setData((prevData) => prevData.map((data, i) => (i === index ? { ...data, y: parseFloat(e.target.value) } : data)))

    }
    return (

        <div className='flex flex-row w-full mt-1'>
            <div className='basis-128 w-1/2 p-4 '><Input type="number" className="bg-[#0a0f1a] [&::-webkit-inner-spin-button]:appearance-none" onChange={addToX} placeholder="X" /></div>
            <div className='basis-128 w-1/2 p-4'><Input type="number" className="bg-[#0a0f1a] [&::-webkit-inner-spin-button]:appearance-none" placeholder="Y" onChange={addToY} /></div>

        </div>
    )
}

export default InptRow