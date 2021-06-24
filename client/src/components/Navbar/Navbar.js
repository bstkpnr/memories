import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
    return(

        <div className="py-1 bg-gray-600 mb-2 container rounded-lg ">
        <div className="px-4  flex  items-center justify-center shadow-md">
            <div>
                <Link to="/">Giriş Yap</Link>
            </div>
          <a className="text-center font-bold pr-2 text-white" href="#">
            MY MEMORIES
          </a>
          <img src={"./img3.JPG"} className="shadow rounded-full  h-20 w-20 " alt="title" />
        </div>
      </div>
        )

}
export default Navbar;