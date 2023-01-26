import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./components/styles/App.css";
import PostItem from './components/PostItem';
import PostList from './components/PostList'


function App() {


  const [posts1, setPosts1] = useState ([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <button>Создать пост</button>
      </form>
      <PostList posts={posts1} title="Посты про JS"/>
      
    </div>
  );
}

export default App;
