import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./components/styles/App.css";


function App() {


  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');



  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaScript - язык програмирования!</div>
        </div>
      
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaScript - язык програмирования!</div>
        </div>
      
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaScript - язык програмирования!</div>
        </div>
      
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaScript - язык програмирования!</div>
        </div>
      
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
