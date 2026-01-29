import React, { useState } from "react";

export default function Hook1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const [colorpicker, setColorpicker] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmpassword)
      newErrors.confirmpassword = "Passwords do not match";
    if (!gender) newErrors.gender = "Select gender";
    if (!country) newErrors.country = "Select country";
    if (!terms) newErrors.terms = "Accept terms";
    if (!dob) newErrors.dob = "Date of birth required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful ");
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} />
        <p>{errors.name}
            
        </p>

        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <p>{errors.email}</p>

        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <p>{errors.password}</p>

        <input type="password" placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)} />
        <p>{errors.confirmpassword}</p>

        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          /> Female
        </div>
        <p>{errors.gender}</p>

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="INDIA">India</option>
          <option value="UK">UK</option>
        </select>
        <p>{errors.country}</p>

        <input type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)} />
        Accept Terms
        <p>{errors.terms}</p>

        <input type="color" value={colorpicker}
          onChange={(e) => setColorpicker(e.target.value)} />

        <input type="date" value={dob}
          onChange={(e) => setDob(e.target.value)} />
        <p>{errors.dob}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
