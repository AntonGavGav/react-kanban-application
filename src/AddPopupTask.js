import React, { useRef, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { LuCalendarHeart } from "react-icons/lu";


const AddPopupTask = ({status, onExit, currentId, onAdd}) => {
    const [heading, setHeading] = useState();
    const [description, setDescription] = useState();
    const [selectedDate, setSelectedDate] = useState(null);

    const inputReference = useRef();

    const handleKeyPress = (event) => {
        if(event.key === 'Enter' || event.key === 'Escape'){
            inputReference.current.blur();
        }
    }

    const handleSubmit = () => {
        const newTask = {
            id: currentId,
            name: heading,
            description: description,
            status: status,
            date: selectedDate
        };
        onAdd(newTask);
        setHeading("");
        setDescription("");
        setSelectedDate(null);
    }

    const preventParentClicking = (event) => {
        event.stopPropagation();
      }

    useEffect(() => {
        if (inputReference.current) {
            inputReference.current.focus();
        }
    }, []);

    return (
        <div onClick={onExit} className='fixed top-0 right-0 bottom-0 left-0'>
            <div onClick={preventParentClicking} className='absolute w-[35rem] p-5 rounded-3xl shadow-2xl top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#151515]'>
                <label className=''>
                    <input
                        className='h-[100%] text-4xl outline-none w-[100%] py-2 px-1 text-white bg-transparent'
                        ref = {inputReference} 
                        type='text'
                        value={heading}
                        onKeyDown={handleKeyPress}
                        onChange={e => setHeading(e.target.value)}
                        placeholder='Heading..'
                    />
                </label>
                <hr></hr>
                <label>
                    <textarea 
                        className=' px-1 pt-2 mt-2 resize-none outline-none w-[100%] bg-transparent text-white'
                        type='text'
                        placeholder='Description..'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >

                    </textarea>
                </label>

                <div className='flex items-center pr-4 justify-between mt-1 py-1'>
                <div className='text-white bg-purple-500 rounded-md py-0.5 h-fit px-3 max-w-fit'>
                    {status}
                </div>
                <label className='flex gap-1 [&>*]:text-white mb-2'>
                    <LuCalendarHeart className='top-1 relative left-7' />
                    <DatePicker 
                        className='box-border text-right pr-1 bg-transparent w-[70px]'
                        dateFormat="MM/dd"
                        closeOnScroll={true}
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="none"
                        shouldCloseOnSelect={true}
                    />
                </label>
                </div>

                <div className=' [&>*]:text-white flex items-center pr-4 justify-between mt-3 py-1'>
                    <button onClick={onExit} className='w-[49%] py-4 rounded-md bg-[#232629]'>CANCEL</button>
                    <button onClick={handleSubmit} className='w-[49%] py-4 rounded-md bg-[#232629]'>SUMBIT</button>
                </div>
            </div>
        </div>
    )
}

export default AddPopupTask