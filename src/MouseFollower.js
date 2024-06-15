import React, { useEffect, useState } from 'react'
import Card from './Card';
import Status from './Status';

const MouseFollower = ({additionalStyles}) => {
    const [position, setPosition] = useState({x: 0, y:0});
    const [isDragging, setIsDragging] = useState(true);

    const newTask = {
        id: 1,
        name: "heading",
        description: "description",
        status: Status.Done,
        date: null,
        isBeingEdited: false,
    };

    const defualtStyles = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
    };

    const combinedStlyes = {...defualtStyles, ...additionalStyles};

    useEffect(() => {
        /* const handleMouseUp = () => {
            setIsDragging(false);
        }*/
        const hanldeMouseMove = (e) => {
            if(isDragging){
                setPosition({x: e.clientX, y: e.clientY });
            }
        } 
        window.addEventListener('mousemove', hanldeMouseMove);
        /* window.addEventListener('mouseup', handleMouseUp); */
        
        return () => {
            window.removeEventListener('mousemove', hanldeMouseMove)
           /*  window.removeEventListener('mouseup', handleMouseUp); */
        }
    }, [isDragging]);

    const handleMouseDown = () => {
        setIsDragging(true);
    }

    return (
        <div 
            style={combinedStlyes} 
           /*  onMouseDown={handleMouseDown} */
            onMouseDown={() => {console.log("mouse down")}}
            onMouseUp={() => {console.log("mouse up")}}
            className='absolute w-[33%] pointer-events-none'
        > 
            <Card task={newTask} onEdit={() => {}}/>
        </div>
    )
}

export default MouseFollower