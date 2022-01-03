import { createContext } from "react"; 

const user = {
  name: 'Irham',
  changeUsername(name) {
    user.name = name;
  }
}

const UserContext = createContext(user);

export default UserContext;