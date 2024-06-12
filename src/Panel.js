import React from 'react'
import Card from './Card'
import './Panel.css'

const Panel = ({tasks, status, onEdit, onAdd}) => {
  return (
    <div className="relative custom-scrollbar mt-[3vh] bg-[#232629] w-[33%] flex flex-col rounded-xl h-[90vh]">
        
        <div className='p-6 m-1 rounded-t-xl bg-[#151515] flex flex-nowrap items-center'>
            <div className='rounded-full w-10 h-10 font-bold bg-[#2b2b2b] text-center pt-1 text-2xl text-white'>{tasks.length}</div>
            <h1 className="font-bold text-center grow text-2xl text-white">
                {status}
            </h1>
        </div>
        

        <div className='relative h-[81%] overflow-y-auto'>
        {tasks.map((task) =>   
          <Card 
            key ={task.id}
            task={task}
            onEdit={onEdit}
          />
        )}
        </div>
        <button onClick={onAdd} style={{ alignSelf: 'flex-end' }} className='w-[99%] mr-[0.5%] font-bold h-[10%] text-[150%] text-white rounded-b-xl bg-[#151515]'>
            ADD NEW CARD
        </button>
    </div>
  )
}

export default Panel