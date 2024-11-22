import React, { useContext, useEffect, useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import { toast } from "sonner";




const Home = () => {
  // const { noteList, setNoteList, pending, setPending } =
  // useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.state?.flashMessage) {
      const { type, text } = location.state.flashMessage;
      if (type === "success") toast.success(text);
      if (type === "error") toast.error(text);

      // Clear flash message after displaying
      location.state.flashMessage = null;
    }
  }, [location]);

  return (
    
    <div className="relative h-screen w-full">
      {/* {flashMessage && (
        <div className={`popup-message ${flashMessage.type === "success" ? "bg-green-500" : "bg-red-500"} text-white p-4 rounded`}>
          {flashMessage.text}
        </div>
      )} */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: "url('/bookshell.jpg')"}}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-4">Welcome to Our Website</h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-center mb-8">Discover amazing features and services</p>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full flex items-center transition duration-300">
          <span className="mr-2 md:text-xl">Get Started</span>
          <FaRocket className="text-xl md:text-2xl" />
        </Link>
      </div>
    </div>
  );

  

  // async function fetchListOfBlogs() {
  //   // setPending(true);
  
  //   const response = await axios.get("http://localhost:8080/api/notes");
    
  //   const result = await response.data;
  
  //   // console.log(result);
  //   if (result && result.noteList && result.noteList.length) {
  //     setNoteList(result.noteList);
  //     setPending(false);
  //   } else {
  //     setPending(false);
  //     setNoteList([]);
  //   }
  // }
  // useEffect(() => {
  //   fetchListOfBlogs();
  // }, []);


  // return(
  //   <div className="blogList">
  //     <h1 className="">Blog List</h1>
  //     {/* <div class="">
  //       <h2 class="">
  //         Blog List
  //       </h2>
  //       <p class="mt-2 text-lg leading-8 text-gray-600">
  //         Learn how to grow your business with our expert advice.
  //       </p>
  //     </div> */}
  //     {pending ? (
  //       <h1>Loading Blogs! Please wait</h1>
  //     ) : (
  //       <div >
  //         <div>
  //           {noteList && noteList.length ? (
  //             noteList.map((blogItem) => (
  //               <div key={blogItem._id}>
                  
                  
  //                 <p>{blogItem.title}</p>
  //                 <p>{blogItem.description}</p>
  //                 <img src={blogItem.image.url} alt="some image" />
  //                 {/* <FaEdit onClick={() => handleEdit(blogItem)} size={30} />
  //                 <FaTrash
  //                   onClick={() => handelDeleteBlog(blogItem._id)}
  //                   size={30}
  //                 /> */}
  //               </div>
  //             ))
  //           ) : (
  //             <h3>No Blogs Added</h3>
  //           )}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // )
};

export default Home;