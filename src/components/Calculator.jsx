import React, {useState} from 'react'
import "./Calculator.css"

function Calculator() {
    const [num, setNum] = useState(0);
    
    function inputNum(e) {
        e.preventDefault(); 
        var input = e.target.value
        setNum(input)
    } 

    return (
        <div className='numbers'>
            <h1 className='resultado'>{num}</h1>
            <button>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button className="orange">/</button>
            <button className="gray" onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange">X</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray" onClick={inputNum} value={5}>5</button>
            <button className="gray" onClick={inputNum} value={6}>6</button>
            <button className="orange">-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button className="gray" onClick={inputNum} value={3}>3</button>
            <button className="orange">+</button>
            <button className="gray" onClick={inputNum} value={0}>0</button>
            <button>,</button>
            <button className="igual">=</button>
        </div>
    )
}

export default Calculator