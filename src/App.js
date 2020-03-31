import React from 'react';
import './App.css';
import ShowPost from './components/post';
import ChangeTextButton from './components/button';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const author1={
  name: "Anakin skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader"
  }


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ShowPost author={author1}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 февр."}/>
         <ChangeTextButton
         activeTxt='Active'
         disableTxt='Disable'/>
      </header>
    </div>
  );
}

export default App;
