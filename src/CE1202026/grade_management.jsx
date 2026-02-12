import React, {useState} from "react";
export default function GradeManagement() {
    const [students, setStudents] = useState([]);
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState(["A", "B", "C", "D", "F"]);
    const [selectedGrade, setSelectedGrade] = useState("A");
    const addStudent = () => {        const newStudent = { studentId, name, selectedGrade };
        setStudents([...students, newStudent]);
        setStudentId("");
        setName("");
        setSelectedGrade("A");
}
return(
    <div>
        <h1>Grade Management System</h1>
        <input type="text" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} /><br/>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <select value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}>
            {grade.map((g, index) => (
                <option key={index} value={g}>{g}</option>
            ))}
        </select><br/>
        <button onClick={addStudent}>Add Student</button>
        <h2>Students List:</h2>
        <ul>
            {students.map((student, index) => (
                <li key={index}>
                    {student.studentId} - {student.name} - {student.selectedGrade}
                </li>
            ))}
        </ul>
    </div>

);
}