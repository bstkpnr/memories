import React, { useState } from "react";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { History } from "history";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const handleSubmit = () => {};
  const handleChange = () => {};
  const [isSignup, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history=useHistory();
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  const googleSuccess=async (res)=>{
    const result =res?.profileObj;
    const token=res?.tokenId;
    try{
      dispatch({type: 'AUTH', data:{result, token}});
      history.push("/")
      
    }catch(error){
      console.log(error)
    }
  };

  const googleFailure=()=>{
    console.log("Google Sign In was unsuccessful. Try Again Later");
  }
  return (
    <div className="flex justify-center py-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        style={{ backgroundColor: "#C15050" }}
      >
        <div style={{ color: "white" }} className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>

        <div>
          <p className="text-center text-white font-bold  ">
            {isSignup ? "Sign Up" : "Sign In"}
          </p>
        </div>
        {isSignup && (
          <>
            <div className="mb-4 ">
              <Input
                type="text"
                placeholder="Adınızı giriniz"
                name="isim"
                handleChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Soyad giriniz"
                name="soyad"
                handleChange={handleChange}
                half
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <Input
            name="email"
            placeholder="Email Adress"
            handleChange={handleChange}
            type="email"
          />
        </div>
        <div className="mb-4">
          <Input
            name="password"
            placeholder="Password"
            handleChange={handleChange}
            type="password"
          />
        </div>
        {isSignup && (
          <div className="mb-4">
            <Input
              name="confirmPassword"
              label="Repeat Password"
              placeholder="Repeat Pssword"
              handleChange={handleChange}
              type="password"
            />
          </div>
        )}
        <button
          type="submit"
          color="red"
          className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <GoogleLogin
          clientId="231940647514-7533jld7g9utlm0k50n9qh36nltrdhg5.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={{ backgroundColor: "white" }}
              className="flex justify-center items-center my-1 p-2 w-full rounded font-bold  px-4 focus:outline-none focus:shadow-outline"
            >
              <FcGoogle className="mx-1 w-6 h-6" />
              <p className="">Login with Google</p>
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <div>
          <button
            onClick={switchMode}
            className="inline-block align-baseline font-bold text-sm text-white hover:text-gray-800"
          >
            {isSignup
              ? "Already have an account? Sign In"
              : "Dont have an account? Sign Up "}
          </button>
        </div>
      </form>
    </div>
  );
}
