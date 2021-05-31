import React from "react";
import Post from "./PostCard/PostCard.js";
import {useSelector} from 'react-redux';

const Posts = () => {
  const posts=useSelector((state)=>state.posts);
  console.log(posts);
  return (
    <div className=" flex w-full flex-column md:flex-row flex-wrap  md:bg-white-300 text-3xl md:font-mono text-black-500 text-opacity-50 text-center overflow-ellipsis">
      <div className="md:w-1/2 w-full ">
        <Post />
      </div>
      <div className="md:w-1/2 w-full ">
        <Post />
      </div>
      <div className="md:w-1/2 w-full ">
        <Post />
      </div>
    </div>
  );
};
export default Posts;
