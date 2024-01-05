import { useState } from "react";

import Ham from "./Ham";
import Spam from "./Spam";

import clear from '../clear.png'

const Main = () => {
    const [isSpam, setSpam] = useState(false)
    const [emailInput, setEmailInput] = useState('');
    const [result, setResult] = useState('');

    const checkSpam = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emailInput }),
        });
  
        // Parse the JSON response
        const data = await response.json();
  
        // Update the result state
        setResult(`Classification: ${data.result}`);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return ( 
        <div className="main">
            <form action="">
              <img src={clear} alt="Clear" onClick={()=>setEmailInput('')}/>
                <label htmlFor="emailInput">Enter The Message</label>
                <textarea name="emailInput" id="emailInput" cols="30" rows="7" placeholder="Input Value" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></textarea>
                <button onClick={async () => await checkSpam()}>Predict</button>
            </form>

            {/* {isSpam ? <Ham/>: <Spam/>} */}
            
        </div>
     );
}
 
export default Main;