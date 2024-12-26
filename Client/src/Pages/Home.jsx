import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { GlobalContext } from "../../context/GlobalState";
import { GlobalContext } from '../context/GlobalState';
import axios from "axios";
import { toast } from "sonner";
import { FaRocket, FaSearch, FaUsers, FaChartLine, FaShieldAlt, FaClock, FaServer, FaChevronDown } from 'react-icons/fa';



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
    
    // <div className="relative h-screen w-full">
    //   {/* {flashMessage && (
    //     <div className={`popup-message ${flashMessage.type === "success" ? "bg-green-500" : "bg-red-500"} text-white p-4 rounded`}>
    //       {flashMessage.text}
    //     </div>
    //   )} */}
    //   <div 
    //     className="absolute inset-0 bg-cover bg-center"
    //     style={{backgroundImage: "url('/bookshell.jpg')"}}
    //   ></div>
    //   <div className="absolute inset-0 bg-black opacity-50"></div>
    //   <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
    //     <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-4">Welcome to Our Website</h1>
        
    //     <p className="text-base sm:text-xl md:text-2xl text-center mb-8">Discover amazing features and services</p>
    //     <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full flex items-center transition duration-300">
    //       <span className="mr-2 md:text-xl">Get Started</span>
    //       <FaRocket className="text-xl md:text-2xl" />
    //     </Link>
    //   </div>
    // </div>



    <div className="min-h-screen w-full">
      {/* Current Home Content */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bookshell.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-24 lg:py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 animate-fade-in-down">Welcome to Diginotes</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-10 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up">Discover amazing features and services that will revolutionize your experience</p>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full flex items-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
            aria-label="Get Started"
          >
            <span className="mr-3 text-lg sm:text-xl md:text-2xl">Get Started</span>
            <FaRocket className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true" />
          </Link>
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-7xl">
            <FeatureCard icon={FaSearch} title="Explore" description="Discover new content tailored just for you" />
            <FeatureCard icon={FaUsers} title="Connect" description="Join a community of like-minded individuals" />
            <FeatureCard icon={FaChartLine} title="Grow" description="Expand your knowledge with us" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">What We Provide</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Diginotes is your go-to platform for high-quality, organized PDF notes tailored for BTech students! Access a wide range of notes across various subjects, carefully curated to help you study and succeed. Easily preview, download, and bookmark PDFs to personalize your learning experience, all in one place.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaShieldAlt className="text-5xl md:text-6xl text-indigo-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-gray-600 text-lg">Secure Access</div>
          </div>
          <div className="p-6 hover:bg-purple-50 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaClock className="text-5xl md:text-6xl text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 text-lg">System Monitoring</div>
          </div>
          <div className="p-6 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaServer className="text-5xl md:text-6xl text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 text-lg">Uptime Guaranteed</div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="What is this website about?"
              answer="This website provides a platform for users to access different pdf notes and grow their knowledge in various engineering subjects."
            />
            <FAQItem
              question="How can I sign up?"
              answer="You can sign up by clicking the 'Get Started' button on the homepage or navigating to the Sign-Up page."
            />
            <FAQItem
              question="Is it is Free to use and download notes?"
              answer="Yes, all content on this website is free to use and download."
            />
            <FAQItem
              question="How do i access my semester notes?"
              answer="First, you need to sign up and log in to your account. Then, complete your profile to get access to your notes according to your branch & semester."
            />
            <FAQItem
              question="How do i upload notes?"
              answer="Sorry, you cannot upload notes directly. If you want to upload notes then you will have to contact the admin by contact form."
            />
            <FAQItem
              question="Are the notes available are really useful?"
              answer="The notes available are verified by the highly qualified teachers in their respective subjects. So the notes are really helpful"
            />
          </div>
        </div>
      </section>
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

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <Icon className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-blue-400" />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-300">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{question}</h3>
        <FaChevronDown
          className={`text-gray-600 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 py-4' : 'max-h-0'
        } overflow-hidden`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default Home;