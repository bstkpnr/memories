import React from 'react'


export default function Auth() {
    const state=null;
    const isSignup=false;
    const handleSubmit=()=>{

    }
    return (
        <div>
            <div>
                ICON
            </div>
            <div>
                <p>{isSignup  ? 'Sign Up' : 'Sign In'}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Adınızı giriniz" name="isim" />
                

            </form>
            
        </div>
    )
}
