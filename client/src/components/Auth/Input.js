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
            
            />
        </div>
    )
}
