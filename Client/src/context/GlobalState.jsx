import React, { Children, createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  //   const [formData, setFormData] = useState({
  //     title: "",
  //     description: "",
  //   });

  const [noteList, setNoteList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  // const [favoritesList ,setFavoritesList] = useState([]);
  const [showImportantMessage, setShowImportantMessage] = useState(true);

  const [favoritesList, setFavoritesList] = useState(() => {
    const storedFavorites = localStorage.getItem("favoritesList");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Sync `favoritesList` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  return (
    <GlobalContext.Provider
      value={{
        noteList,
        setNoteList,
        pending,
        setPending,
        currUser,
        setCurrUser,
        favoritesList,
        setFavoritesList,
        reviewList,
        setReviewList,
        showImportantMessage,
        setShowImportantMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
