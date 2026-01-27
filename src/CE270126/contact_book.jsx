import React from "react";
export default function Contact (){
    const [contacts, setContacts] = Contact([]);
    const [fname, setFname] = Contact("");
    const [lname, setLname] = Contact("");
    const [email, setEmail] = Contact("");

    const addContact = () => {
        const newContact = { fname, lname, email };
        setContacts([...contacts, newContact]);
        setFname("");
        setLname("");
        setEmail("");
    };

    return (
        <div>
            <h1>Contact Book</h1>
            <input 
                type="text" 
                value={fname} 
                onChange={(e) => setFname(e.target.value)} 
                placeholder="First Name" 
            />
            <input 
                type="text" 
                value={lname} 
                onChange={(e) => setLname(e.target.value)} 
                placeholder="Last Name" 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
            />
            <button onClick={addContact}>Add Contact</button>
            <h2>Contacts List:</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.fname} {contact.lname} - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );  
}