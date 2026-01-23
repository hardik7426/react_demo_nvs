// import React, {useState} from "react";

// export default function Todo(){ 
//     const [addtask,setAdd] = useState("");
//     const [task,setTask] = useState([]);

//     const addTask = (addtask) => {
//         setTask([...task,addtask]);
//     }

//     const updateTask = (Updatetask)=> {
//         setTask([...task,Updatetask])
//     }
//     const handleupdate = (index)
//     return (
//         <>
//         <h1>Todo List:</h1>
//         <br/>
//         <input type="text" value={addtask} onChange={(e) => setAdd(e.target.value)} placeholder="enter your task"></input>
//         <button onClick={() => addTask(addtask)}> Add task</button>
//         <u1>
//             {task.map((t,index)=> (
//                 <li key={index}>{t}
//                 <button onClick={() => setTask(task.filter((_,i)=> i !== index))}>Delete</button>
//                 <button onClick={}></button> 
//                 </li>
//             ))}
//         </u1>
//         </>
//     )
// }