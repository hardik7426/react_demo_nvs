import React, { useState } from "react";

export default function GradeManagement() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("A");
  const [editId, setEditId] = useState(null);

  const gradeOptions = ["A", "B", "C", "D", "F"];

  const addStudent = () => {
    if (!studentId || !name) return;

    const newStudent = { studentId, name, selectedGrade };
    setStudents([...students, newStudent]);

    setStudentId("");
    setName("");
    setSelectedGrade("A");
  };

  const updateStudent = () => {
    const updatedStudents = students.map((student) =>
      student.studentId === editId
        ? { ...student, studentId, name, selectedGrade }
        : student
    );

    setStudents(updatedStudents);
    setEditId(null);
    setStudentId("");
    setName("");
    setSelectedGrade("A");
  };

  const removeStudent = (id) => {
    const filtered = students.filter(
      (student) => student.studentId !== id
    );
    setStudents(filtered);
  };

  const editStudent = (student) => {
    setEditId(student.studentId);
    setStudentId(student.studentId);
    setName(student.name);
    setSelectedGrade(student.selectedGrade);
  };

  return (
    <div>
      <h1>Grade Management System</h1>

      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <select
        value={selectedGrade}
        onChange={(e) => setSelectedGrade(e.target.value)}
      >
        {gradeOptions.map((grade, index) => (
          <option key={index} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      <br />

      <button onClick={editId ? updateStudent : addStudent}>
        {editId ? "Update Student" : "Add Student"}
      </button>

      <h2>Students List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            {student.studentId} - {student.name} - {student.selectedGrade}

            <button onClick={() => editStudent(student)}>
              Edit
            </button>

            <button onClick={() => removeStudent(student.studentId)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
