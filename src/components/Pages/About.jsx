import React from 'react';

const About = () => {
  return (
    <div className="font-sans p-5 text-white">
      <h2 className="text-2xl font-bold mb-4">About Us !</h2>
      <h2 className="text-2xl text-black font-bold text-center mb-4">Welcome To <span id="W_Name1">DigitalNotes</span></h2>
      <div className='px-14'>
      <p className="mb-4 text-black">
        <span id="W_Name2">DigitalNotes</span> is a Professional <span id="W_Type1">Educational</span> Platform. Here we will only provide you with interesting content that you will enjoy very much. We are committed to providing you the best of <span id="W_Type2">Educational</span>, with a focus on reliability and <span id="W_Spec">Study materials</span>. we strive to turn our passion for <span id="W_Type3">Educational</span> into a thriving website. We hope you enjoy our <span id="W_Type4">Educational</span> as much as we enjoy giving them to you.
      </p>
      <p className="mb-4 text-black">
        I will keep on posting such valuable and knowledgeable information on my Website for all of you. Your love and support matters a lot.
      </p>
      <p className="font-bold text-center text-black">
        Thank you For Visiting Our Site
      </p>
      <p className="text-blue-500 text-lg text-center mt-3">Have a great day !</p>
      </div>
    </div>
  );
};

export default About;
