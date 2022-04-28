import { createContext, useState } from "react";

export const MyContext = createContext();

const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [user, setUser] = useState("");

  return (
    <MyContext.Provider value={{ meals, setMeals, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
export default AppContext;
