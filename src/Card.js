import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
import { LuCalendarHeart } from "react-icons/lu";

const Card = ({task, onEdit}) => {

    return (
      <div 
        onClick={() => onEdit(task)}
        className='[&>*]:text-white 
        shadow-sm border-2 border-[#252525] rounded-2xl 
        px-4 py-2 m-2 
        bg-[#151515]
        hover:border-purple-500
        hover:border-dashed
        hover:cursor-pointer'
        draggable
        style={{
          borderColor:task.isBeingEdited ? '#a855f7' : ""
        }}
      >
          <h1 className='text-2xl'>
            {task.name}
          </h1>
          <p>
            {task.description}
          </p>
  
          <div className='flex items-center pr-4 justify-between mt-1 py-1'>
            <div className='bg-purple-500 rounded-md py-0.5 h-fit px-3 max-w-fit'>
              {task.status}
            </div>
            <label className='flex gap-1 [&>*]:m-2'>
              <LuCalendarHeart className='top-1 relative left-11' />
              <DatePicker 
                className='hover:cursor-pointer box-border pr-1 text-right bg-transparent w-[70px]'
                dateFormat="MM/dd"
                closeOnScroll={true}
                selected={task.date}
                placeholderText="none"
                disabled
              />
            </label>
          </div>
      </div>
    );
}

export default Card