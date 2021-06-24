import React,{useEffect,useState} from 'react';
import Posts from '../Posts/Posts';
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts'

import Form from '../Form/Form';
function Home(){
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId,dispatch]);
    return(
        <div>
        <div className="flex flex-col md:flex-row mx-auto gap-2 ">
          <div className="w-full md:w-3/4 p-4   ">
            <Posts setCurrentId={setCurrentId}/>{" "}
          </div>
          <div className="w-full md:w-1/4 p-4 shadow roundedn-sm bg-gradient-to-l from-gray-300 to-yellow-100">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    )
}
export default Home;