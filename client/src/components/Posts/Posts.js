import React from "react";
import Post from "./PostCard/PostCard.js";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <div className=" flex w-full flex-col md:flex-row flex-wrap  md:bg-white-300 text-3xl md:font-mono text-black-500 text-opacity-50 text-center overflow-ellipsis">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_wi4lf786.json"
        background="wheat"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  ) : (
    <div className=" flex w-full flex-col md:flex-row flex-wrap  md:bg-white-300 text-3xl md:font-mono text-black-500 text-opacity-50 text-center overflow-ellipsis">
      {posts.map((post) => (
        <div className="md:w-1/2 w-full " key={post._id}>
          <Post post={post}
            setCurrentId={setCurrentId}
          />
        </div>
      ))}
    </div>
  );
};
export default Posts;
