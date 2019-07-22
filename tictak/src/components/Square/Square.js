import React from 'react'

const Square = ({ value, onClick }) =>  (
    <button 
        className={"square "+ (value == 'X' ? 'square-x' : '')} 
        onClick={() => onClick()}
    >
        {value}
    </button>
)

export default Square