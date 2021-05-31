import React, { useState } from "react";
import Post from "../Posts/PostCard/PostCard.js";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
  };
  const clear=()=>{};

  return (
    <div className="container flex flex-col">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title" className="transition-all shadow-md">
          <input
            name="creator"
            id="title"
            type="text"
            placeholder="name"
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
            placeholder="name"
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
            placeholder="name"
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
            placeholder="name"
            className="px-2 w-3/4 border-2 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <div>
            <FileBase 
            type="file"
            multiple={false}
            onDone={({base64})=>setPostData({...postData, selectedFile:base64})}
            />
          </div>
        </label>
        <div>

        <button className="" type="submit" >GÖNDER</button>
        <button className="" onClick={clear} >SİL</button>


        </div>
        
      </form>
    </div>
  );
};
export default Form;
