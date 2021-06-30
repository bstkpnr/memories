import React from 'react'

export default function Input({name,handleChange,half,type,placeholder}) {
    return (
        <div>
            <input 
            name={name}
            onChange={handleChange}
            required
            autoFocus={half}
            type={type}
            placeholder={placeholder}
            className="bg-white border-2 border-gray-200 rounded w-full py-2 px-4 "
            
            />
        </div>
    )
}
