import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
//import {  } from "../../../../server/controllers/posts.js";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  function clear() {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  }

  return (
    <div className="py-1 rounded-sm w-full shadow-md bg-gray-50">
      <p className="text-gray-300 text-2xl font-bold text-center pv-5">
        {currentId ? "Editing" : "Creating"} a Memory
      </p>

      <div className="container flex flex-col">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <label htmlFor="title" className="transition-all shadow-md">
            <input
              name="creator"
              id="title"
              type="text"
              placeholder="Cretor"
              className="px-2 w-3/4 border-2 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </label>
          <label htmlFor="title" className="transition-all shadow-md">
            <input
              name="title"
              id="title"
              type="text"
              placeholder="Title"
              className="px-2 w-3/4 border-2 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </label>
          <label htmlFor="title" className="transition-all shadow-md">
            <input
              name="message"
              id="title"
              type="text"
              placeholder="Message"
              className="px-2 w-3/4 border-2 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </label>
          <label htmlFor="title" className="transition-all shadow-md">
            <input
              name="tags"
              id="title"
              type="text"
              placeholder="Tags"
              className="px-2 w-3/4 border-2 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
          </label>
          <div>
            <button className="" type="submit">
              GÖNDER
            </button>
            <button className="" onClick={clear}>
              SİL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
