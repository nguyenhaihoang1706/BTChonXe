import { set } from 'lodash'
import React,{useState} from 'react'


//useState(): là hàm từ thư viện react thay thế this.state và this.setState của reactClassComponents
export default function UseStateDemo(props) {


    const [state, setState] = useState({number:0});

    const [number, setNumber] = useState(1);


    return (
        <div className='container'>
            <h1 className='text-danger'>Number: {number}</h1>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number+1)
            }}>+</button>
            <h1>{state.number}</h1>
            <button className='btn btn-success' onClick={()=>{
                const newState = {number:state.number +1};
                setState(newState);
            }}>+</button>
        </div>
    )
}
