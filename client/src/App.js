import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
//import img from "./components/img/img3.JPG";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import {getPosts} from './actions/posts'
const App = () => {
  const [currentId,setCurrenId]=useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className="py-1 bg-gray-600 mb-2 container rounded-lg ">
        <div className="px-4  flex  items-center justify-center shadow-md">
          <a className="text-center font-bold pr-2 text-white" href="">
            MY MEMORIES
          </a>
          <img src={"./img3.JPG"} className="shadow rounded-full  h-20 w-20 " />
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row mx-auto gap-2 ">
          <div className="w-full md:w-3/4 p-4   ">
            <Posts setCurrenId={setCurrenId}/>{" "}
          </div>
          <div className="w-full md:w-1/4 p-4 shadow roundedn-sm bg-gradient-to-l from-gray-300 to-yellow-100">
            <Form currentId={currentId} setCurrenId={setCurrenId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
