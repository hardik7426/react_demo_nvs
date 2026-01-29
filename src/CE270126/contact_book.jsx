// import React, { useState } from "react";
// export default function Contact (){
//     const [contacts, setContacts] = useState([]);
//     const [fname, setFname] = useState("");
//     const [lname, setLname] = useState("");
//     const [email, setPhone] = useState("");

//     const addContact = () => {
//         const newContact = { fname, lname, email };
//         setContacts([...contacts, newContact]);
//         setFname("");
//         setLname("");
//         setPhone("");

//     };

//     const ToogleView = (id) => {
//         const updateContacts = contacts.map((contact, index)) => {
//             return {...y, visible: lazy.visible};
//         }
//         return y;
//     });
//     setContacts(updateContacts);
// };

//     return (
//         <div>
//             <h1>Contact Book</h1>
//             <input 
//                 type="text" 
//                 value={fname} 
//                 onChange={(e) => setFname(e.target.value)} 
//                 placeholder="First Name" 
//             />
//             <input 
//                 type="text" 
//                 value={lname} 
//                 onChange={(e) => setLname(e.target.value)} 
//                 placeholder="Last Name" 
//             />
//             <input 
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setPhone(e.target.value)} 
//                 placeholder="Phone" 
//             />
//             <button onClick={addContact}>Add Contact</button>
//             <h2>Contacts List:</h2>
//             <ul>
//                 {contacts.map((contact, index) => (
//                     <li key={index}>
//                         {contact.fname} {contact.lname} - {contact.email}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );  
// }