"use client"
import React, { useState } from 'react';

export default function Home() {
  const [toDo, setToDo] = useState([]);
  const [value, setValue] = useState('');

  const handleInputValue = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    setToDo([...toDo, value]);
    setValue('');
  }

  const handleDelete = (id) => {
    const newToDo = toDo.filter((_, i) => i !== id);
    setToDo(newToDo);
  }

  return (
    <div className='mx-auto max-w-md'>
      <h1 className='text-4xl font-bold mt-4 mb-4 flex justify-center'>ToDo List</h1>
      <div className='flex'>
        <input className='border border-gray-400 mr-2 px-4 py-2 flex-grow' type='text' placeholder='Enter an item' value={value} onChange={handleInputValue} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>
          Add
        </button>
      </div>
      <ul className='list-disc list-inside mt-4'>
        {toDo.map((item, i) => (
          <li key={i} className='flex justify-between items-center mb-2'>
            {item}
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded' onClick={() => handleDelete(i)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
