import React,{useEffect,useState} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

function Navbar() {
  const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user)
  const dispatch=useDispatch();
  const history=useHistory();
  const location=useLocation();
  const logout=()=>{
    dispatch({type:"LOGOUT"});
    history.push("/")
    setUser(null);
  }
  useEffect(()=>{
    const token=user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);


  return (
    <div className="py-1 bg-gray mb-2 container rounded-lg ">
      <div className="px-4  flex  items-center justify-center shadow-md">
          <Link to="/">
        <div>
            <p className="text-center font-bold pr-2 text-white">MY MEMORIES</p>
        </div>

        <img
          src={"./memori.jpg"}
          className="shadow rounded-full  h-20 w-20 "
          alt="title"
          />
          </Link>
          <div>
        {user ?(
          <button onClick={logout} 
          color="red"
          className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Logout</button>
        ):(
          <div className="right-0"><Link to="/auth">Giriş Yap</Link>
          </div>
        )}
      </div>
    </div>
      </div>
      
  );
}
export default Navbar;
