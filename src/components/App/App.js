import { useState } from "react";
import "./App.css";
import Item from '../Item'
import Input from '../Input'

// 👉 In [App.js](./src/components/App/App.js), import those two components that we just made (`Input` and `Item`) into this file so that you can use them at the App level.

// 👉 Now return both of those components within the JSX in `App` and load your app up in your browser. (Don't forget what you need to do in order to see a local version of your React app in the browser - it's different from loading a normal HTML file.)

// 👉 Still in `App.js`, create a piece of state called `text`. Don't forget to use the 'set' convention when you're making the functionality that will eventually change the state! Set the initial state to be an empty string (so that the value of the state is an empty string when the page is first loaded).

// 👉 For the function you'll use to change this state, create a new function within your `App` component's function underneath where you defined your state called `handleChange`, similar to how you did the `handleClick` function from this morning's activity. This function needs to change the state of `text` to whatever value the user inputs into the input field.


function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
  
    setText(e.target.value)
    
  }
  
  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Item text = {text} style={{ fontFamily: 'decorative' }}/>
      <Item text = {text} style={{ fontFamily: 'script' }}/>
      <Item text = {text} style={{ fontFamily: 'arial' }}/>
      

      <Input onChange={handleChange}/>
    </div>
  );
}

export default App;
