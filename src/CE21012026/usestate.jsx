import React,{useState} from "react";

export default function UseState3(){
    const [arr1,setArr1] = useState([10,20,30,40,50]);
    const [val1,setVal1] = useState(0);
    const [val2,setVal2] = useState(0);

    const addElement = () => {
        setArr1([val1]);

    }

    const removeElement = (v1) => {
        setArr1(arr1.filter((x) => x !== v1));
    }

    const updateElement = (k1,v1) => {
        setArr1(arr1.map((x,idx) => idx === k1 ? v1 : x));
    }

    return(
        <>
        <h1>Array Elements are:{arr1}</h1>
        <br />
        <input type="number" onChange={(e)=>setVal1([...arr1,parseInt(e.target.value)])} placeholder="Enter value to add" />
        <input type="number" onChange={(e)=>setVal2([...arr1,parseInt(e.target.value)])} placeholder="Enter value to remove" />

        <button onClick={() => addElement(val1)}>Add</button>
        <button onClick={() => removeElement(val2)}>Remove</button>
        <button onClick={() => updateElement(val1.idx,val2)}>Update</button>
        </>
    )
}