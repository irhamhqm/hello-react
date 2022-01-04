import { useState } from "react";
import { useContext } from "react/cjs/react.development"
import UserContext from "../UserContext"


export default function UserForm() {
  const [userInput, setUserInput] = useState('');
  const { changeUsername } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeUsername(userInput);
    setUserInput('');
  }
  const handleChange = (e) => {
    setUserInput(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="change user"
        value={userInput}
        onChange={handleChange}
      />
      <button type="submit" value="Submit">submit</button>
    </form>
  )
}