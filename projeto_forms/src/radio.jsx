import React from 'react'

const radio = ({ options, label, id, setValue, value, ...props }) => {
    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={({ target }) => setValue(target.value)}
                        {...props}
                    />
                    {option}
                </label>
            ))}
        </>

    )
}

export default radio