import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
import { LuCalendarHeart } from "react-icons/lu";

const Card = ({name, description, status}) => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    return (
      <div className='[&>*]:text-white shadow-sm border-2 border-[#252525] rounded-2xl px-4 py-2 m-2 bg-[#151515]'>
          <h1 className='text-2xl'>
            {name}
          </h1>
          <p>
            {description}
          </p>
  
          <div className='flex items-center pr-4 justify-between mt-1 py-1'>
            <div className='bg-purple-500 rounded-md py-0.5 h-fit px-3 max-w-fit'>
              {status}
            </div>
            <label className='flex gap-1 [&>*]:m-2'>
              <LuCalendarHeart className='top-1 relative' />
              <DatePicker 
                className='bg-transparent text-center w-[120px]'
                dateFormat="yy/MMMM/dd"
                closeOnScroll={true}
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText="none"
              />
            </label>
          </div>
      </div>
    );
}

export default Card