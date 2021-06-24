import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user=null;
  return (
    <div className="py-1 bg-gray-600 mb-2 container rounded-lg ">
      <div className="px-4  flex  items-center justify-center shadow-md">
          <Link to="/">
        <div>
            <p className="text-center font-bold pr-2 text-white">MY MEMORIES</p>
        </div>

        <img
          src={"./img3.JPG"}
          className="shadow rounded-full  h-20 w-20 "
          alt="title"
          />
          </Link>
          <div>
        {user ?(
          <button>Çıkış Yap</button>
        ):(
          <Link to="/auth"><button>Giriş Yap</button></Link>
        )}
      </div>
    </div>
      </div>
      
  );
}
export default Navbar;
