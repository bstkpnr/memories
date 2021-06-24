import React,{useState} from "react";
import Input from "./Input";

export default function Auth() {
  const handleSubmit = () => {};
  const handleChange=()=>{};
  const [isSignup, setIsSignUp] = useState(false)
  const switchMode=()=>{
      setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
      
  };
  return (
    <div>
      <div>ICON</div>
      <div>
        <p>{isSignup ? "Sign Up" : "Sign In"}</p>
      </div>
      <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <Input type="text" placeholder="Adınızı giriniz" name="isim" handleChange={handleChange} half />
              <Input type="text" placeholder="Soyad giriniz" name="soyad" handleChange={handleChange} half/>


            </>
          )}
          <Input name="email" placeholder="Email Adress" handleChange={handleChange} type="email"/>
          <Input name="password" placeholder="Password" handleChange={handleChange} type="password"/>
          {isSignup &&(<Input name="confirmPassword" label="Repeat Password" placeholder="Repeat Pssword"   handleChange={handleChange} type="password" />)}
          <button type="submit" color="red">{isSignup ? 'Sign Up': 'Sign In'}</button>
          <div>
              <button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign In': "Dont have an account? Sign Up "}

              </button>
          </div>
      </form>
    </div>
  );
}
