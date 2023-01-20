import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./components/styles/App.css";
import PostItem from './components/PostItem';


function App() {


  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');



  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
      <PostItem post={{id: 2, title: 'C#', body: 'Description'}} />
      <PostItem post={{id: 3, title: 'TypeScript', body: 'Description'}} />
      <PostItem post={{id: 4, title: 'Java', body: 'Description'}} />
    </div>
  );
}

export default App;
