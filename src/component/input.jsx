import { useState } from "react";
import {useDispatch} from 'react-redux';
import { add } from "../redux/action";
export const Input=()=>{
    const [item,state]=useState("");
    let dispatch=useDispatch();
    const sendData=()=>{
        dispatch(add(item));
    }
    const value=(e)=>{
        state(e.target.value);
    }
    return <>
    <input type="text" placeholder="Input Todo" onChange={value} />
    <button onClick={sendData}>Add Todo</button>
    </>
}