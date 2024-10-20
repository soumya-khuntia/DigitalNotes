import React, { Children, createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

  const [noteList, setNoteList] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        noteList,
        setNoteList,
        pending,
        setPending,
        // formData,
        // setFormData,
        // isEdit,
        // setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
