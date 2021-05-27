import React from "react";
import img from "./components/img/img3.JPG";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";

const App = () => {
  return (
    <>
      <nav className="py-1 bg-blue-400 mb-2 container  ">
        <div className="px-4  flex  items-center justify-center shadow-md">
          <a className="text-center font-bold pr-2 text-white" href="">
            MY MEMORIES
          </a>
          <img src={img} className="shadow rounded-full  h-20 w-20 " />
        </div>
      </nav>
      <div>
        <div className="flex flex-col md:flex-row mx-auto gap-2">
          <div className="w-full md:w-1/2 "><Posts/> </div>
          <div className="w-full md:w-1/2 "><Form /></div>


        </div>
      </div>
    </>
  );
};

export default App;
