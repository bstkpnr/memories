import React from 'react';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';

const App=()=>{
    return(
        <div class="container mx-auto px-4 bg-red-500 hover:bg-red-700 shadow-sm flex-1 h-16 ">
        <Posts />
        
            <Form />
        </div>
      
    )
}
export default App;