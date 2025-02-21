import React from 'react'
import { Button } from '@/components/ui/button'
import InptRow from './input_row'
import { useState } from 'react'
import { FiPlus, FiMinus, FiLoader, FiHelpCircle } from "react-icons/fi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


const Form = ({ setData, data, setLineData }) => {
    const [noRows, setNoRows] = useState(1)
    const [X, setX] = useState([[]])
    const [Y, setY] = useState([0])
    const [loading, setLoading] = useState(false)
    const [i, setI] = useState(10000)
    const [a, setA] = useState(0.01)


    const addRow = () => {
        setNoRows(noRows + 1)
        setX(prevX => [...prevX, []])
        setY(prevY => [...prevY, 0])
        setData(prevData => [...prevData, {}])

    }
    const removeRow = () => {
        setNoRows(noRows - 1)
        setX(X.slice(0, -1))
        setY(Y.slice(0, -1))
        setData(data.slice(0, -1))

    }

    const postData = () => {
        console.log(X)
        console.log(data)
        setLoading(true)
        fetch('https://curvefitbackend-production.up.railway.app/data/', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                X: X,
                Y: Y,
                i: i,
                a: a,
            })
        }).then(response => response.json()).then(output => { setLineData(output); setLoading(false); console.log(output) }).catch(error => {
            console.log("Error", error); alert("Something went wrong")
        }).finally(() => setLoading(false))
    }

    return (
        <div className='w-full sm:w-1/2 '>
            {
                [...Array(noRows)].map((e, i) => <InptRow setX={setX} setY={setY} setData={setData} key={i} index={i} />)
            }
            <div className='p-5 flex flex-row align-middle justify-center' >
                <div className='p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><Button variant='secondary' onClick={addRow}><FiPlus /></Button></div>
                <div className='p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><Button variant={(noRows > 1) ? "destructive" : "disabled"} onClick={(noRows > 1) ? removeRow : () => { }}><FiMinus /></Button></div>

            </div>
            <div className='bg-[#0a0f1a] p-5 rounded-md'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">


                        <AccordionTrigger>Increase accuracy <HoverCard>
                            <HoverCardTrigger><FiHelpCircle /></HoverCardTrigger>
                            <HoverCardContent>
                                <span className="font-semibold">Use this to reduce the MRSE </span><br /><br />
                                <span className="font-light text-xs">
                                    Iterations : Incresing tends to reduce error but increases the run time <br /> <br />
                                    Learning Rate: Decreasing tends to reduce error but increases the run time
                                </span>
                            </HoverCardContent>
                        </HoverCard>
                        </AccordionTrigger>
                        <AccordionContent className="flex justify-around">
                            <div className="p-5 w-1/2">
                                <Slider onValueChange={(i) => { setI(parseFloat(i)) }} defaultValue={[10000]} max={100000} min={10000} step={10000} />
                                <p className='p-2 text-s'>{`Iterations : ${i}`}</p>
                            </div>
                            <div className="p-5 w-1/2">
                                <Slider onValueChange={(a) => { setA(parseFloat(a)) }} defaultValue={[0.01]} max={1} min={0.001} step={0.001} />
                                <p className='p-2 text-s'>{`Learning Rate : ${a}`}</p>

                            </div>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
            <br />
            <div className='w-full flex justify-center'>
                <Button variant={(X.length < 2 || loading) ? "disabled" : ""} onClick={X.length > 1 ? postData : () => { }} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Submit {loading ? <FiLoader size={50} className='animate-spin' /> : ""}</Button>


            </div>
        </div >
    )
}

export default Form