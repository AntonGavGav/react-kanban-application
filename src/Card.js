import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
import { LuCalendarHeart } from "react-icons/lu";

const Card = ({task, onEdit}) => {

    const taskRef = useRef(null);
    let clickTimer = null;

    const handleMouseDown = (event) => {
      clickTimer = setTimeout(() => {

      const task = taskRef.current;

      task.style.position ='absolute';
      task.style.zIndex = 1000;

      document.body.append(task);
    

      const moveAt = (pageX, pageY) => {
        task.style.left = pageX - task.offsetWidth / 2 + 'px';
        task.style.top = pageY - task.offsetHeight / 2 + 'px';
      };

      moveAt(event.pageX, event.pageY)

      const onMouseMove = (event) => {
        moveAt(event.pageX, event.pageY);
      };

      document.addEventListener('mousemove', onMouseMove);
      task.onmouseup = () => {
        console.log("yeah")
        document.removeEventListener('mousemove', onMouseMove);
        task.onmouseup = null;
      };
    }, 100);
    };



    return (
      <div 
        ref={taskRef}
        onClick={() => onEdit(task)}
        onMouseDown={handleMouseDown}
        onMouseUp={() => clearTimeout(clickTimer)}

        className='[&>*]:text-white 
        shadow-sm border-2 border-[#252525] rounded-2xl 
        px-4 py-2 m-2 
        bg-[#151515]
        hover:border-purple-500
        hover:border-dashed
        hover:cursor-pointer'
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