import React, {useRef} from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
import { LuCalendarHeart } from "react-icons/lu";
import Status from './Status';

const Card = ({task, onEdit, changeStatus}) => {

    const taskRef = useRef(null);
    let clickTimer = null;
    let mouseX = null;


    const handleStatusChange = (status) => {
        changeStatus(task.id, status);
    }
    const calculateStatus = () => {
      const screenWidth = window.innerWidth;
      const mouseXPos = (mouseX / screenWidth) *100;
      let status = null;
      if(mouseXPos < 33){
        status = Status.ToDo;
      }
      else if(mouseXPos >= 33 && mouseXPos < 66 ){
        status = Status.InProgress;
      }
      else if(mouseXPos >= 66){
        status = Status.Done;
      }
      return status;
    }

    //browser api for dragging is just fucked up, i had to implement my own logic
    const handleMouseDown = (event) => {
      clickTimer = setTimeout(() => {

      const task_card = taskRef.current;
      const prevParent = task_card.parentElement;


      task_card.style.position ='absolute';
      task_card.style.zIndex = 1000;

      document.body.append(task_card);
    

      const moveAt = (pageX, pageY) => {
        task_card.style.left = pageX - task_card.offsetWidth / 2 + 'px';
        task_card.style.top = pageY - task_card.offsetHeight / 2 + 'px';
      };

      moveAt(event.pageX, event.pageY)

      const onMouseMove = (event) => {
        moveAt(event.pageX, event.pageY);
        mouseX = event.clientX;
      };

      document.addEventListener('mousemove', onMouseMove);
      task_card.onmouseup = () => {
        task_card.style.visibility = 'hidden';
        document.removeEventListener('mousemove', onMouseMove);
        task_card.onmouseup = null;

        const status = calculateStatus();
        handleStatusChange(status);


        prevParent.appendChild(task_card);
        
        task_card.style.position = 'static';
        task_card.style.zIndex = 'auto';

        clearTimeout(clickTimer);
        task_card.onmouseup = null;
        setTimeout(() => {
          task_card.style.visibility = 'visible';
        }, 10);
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