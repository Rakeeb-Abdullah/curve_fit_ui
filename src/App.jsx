import React, { useEffect } from 'react'
import Form from './form'
import Graph from './graphs'
import { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Description from './description'
import { FiInfo } from 'react-icons/fi'



const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark'); // Forces dark mode globally
  }, []);
  const [data, setData] = useState([{}])
  const [lineData, setLineData] = useState({})
  return (
    <div >
      <div className='w-full flex flex-col text-center justify-center align-middle h-20 bg-[#0a0f1a] '>
        <p className='text-center text-white font-medium text-2xl sm:text-4xl' >Straight Line Fit</p>

        <div className="flex justify-center">
          <div className='text-gray-300 text-xs p-3'><Dialog>
            <DialogTrigger>About Project</DialogTrigger>
            <DialogContent className="max-w-4xl bg-gray-900 text-gray-200 rounded-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>About this project</DialogTitle>
                <DialogDescription>
                  <Description />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          </div>
          <Separator className="h-4 mt-3" orientation="vertical" />
          <p className='text-gray-300 text-xs p-3'>Project by: <a className='font-[Silkscreen] text-[#ff007f]' target="_blank" href="https://linktr.ee/rakeeb_abd">Rakeeb Abdullah</a></p>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row">
        <Form setLineData={setLineData} setData={setData} data={data} />

        <Graph data={data} lineData={lineData} />
      </div>

    </div >
  )
}

export default App


