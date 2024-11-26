import React, { Children, createContext, useState } from "react";

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
  const [currUser,setCurrUser] = useState(null);
  const [favoritesList ,setFavoritesList] = useState([]);



  function handleAddToFavorite(getCurrItem){
    // console.log(getCurrItem);
    let cpyFavoritesList = [...favoritesList];
    const idx = cpyFavoritesList.findIndex(item => item._id === getCurrItem._id);

    if(idx === -1){
      cpyFavoritesList.push(getCurrItem);
    } else {
      cpyFavoritesList.splice(idx);
    }

    setFavoritesList(cpyFavoritesList);
    console.log(favoritesList,'favoritesList');
    
  }

  function handleRemoveFromCard(itemToRemove) {
    // Create a copy of the favorites list
    let cpyFavoritesList = [...favoritesList];
  
    // Filter out the item to be removed
    cpyFavoritesList = cpyFavoritesList.filter(item => item._id !== itemToRemove._id);
  
    // Update the state with the new list
    setFavoritesList(cpyFavoritesList);
  
    console.log(cpyFavoritesList, 'Updated Favorites List');
  }

  // Function to add a review to the global state
  const addReview = (reviewData) => {
    setReviewList((prevReviews) => [...prevReviews, reviewData]);
  };


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
        currUser,
        setCurrUser,
        handleAddToFavorite,
        handleRemoveFromCard,
        favoritesList,
        reviewList,
        setReviewList,
        addReview
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
