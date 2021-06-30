import React from "react";
import moment from "moment";
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts'
const PostCard = ({ post, setCurrentId }) => {
  const dispatch=useDispatch();
  return (
    <>
      <div  className="relative flex flex-col bg-white-300  relative m-2 rounded-2x1 shadow rounded-sm bg-blue-100">
        <div  className="rounded overflow-hidden shadow-lg w-full">

          {/* //Fotoğraf alanı */}
          <div className="max-h-96">
          <img src={post.selectedFile} 
          className="relative -top-20" alt={post.title} />
          </div>
         
        </div>


        {/* //Eklenme Tarihi */}
        <div className="px-2 py-2">
            <div
            
            className="font-bold text-xl ">
              <p
              >{post.title}</p>
              <p
              >{moment(post.createdAt).fromNow()}</p>
            </div>
          </div>




        <div className=" absolute inset-x-0 flex flex-row justify-between">

        {/* //Yazan Kişi & Etiketler */}
          <div className="rounded-sm ">
            <p
            style={{zIndex:10}}
            className="py-1 font-mono . italic  md:font-extrabold text-gray-900 text-xs">
              {post.creator}
            </p>
            <p 
            className="font-mono . md:font-bold text-red-800 text-xs	 ">
              {post.tags.map((tag) => `#${tag}`)}
            </p>
          </div>
          <div className="p-1 mx-3">
            <button
              className="text-gray-200 font-bold"
              onClick={() => setCurrentId(post._id)}
            >
              ...
            </button>
          </div>
        </div>
        <div>

      {/* Mesaj kısmı */}

          <div className="bg-gradient-to-l from-red-100 to-white-100">
            <p
            className="text-center text-lg  ">{post.message}</p>
          </div>
          
          {/* Beğenme ve silme butonları */}


          <div className="px-1 bg-orange-100 shadow-md md:container md:mx-auto rounded-lg border-solid border-4 border-light-blue-500	">
            <div className="h-12 flex justify-between">
              
              
              
              <button 
             
              onClick={()=>dispatch(likePost(post._id))}
                className="bg-red-300 py-1 px-4 rounded-lg flex flex-col justify-center items-center"
               
              >
               <span className="text-lg"> {post.likeCount}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>



              <button className="bg-blue-400  py-1 px-4 rounded-lg " onClick={()=>dispatch(deletePost(post._id))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostCard;
