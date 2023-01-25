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

  const [posts2, setPosts2] = useState ([
    {id: 1, title: 'Python 1', body: 'Description'},
    {id: 2, title: 'Python 2', body: 'Description'},
    {id: 3, title: 'Python 3', body: 'Description'},
  ])

  const [posts3, setPosts3] = useState ([
    {id: 1, title: 'C# 1', body: 'Description'},
    {id: 2, title: 'C# 2', body: 'Description'},
    {id: 3, title: 'C# 3', body: 'Description'},
  ])



  return (
    <div className="App">
      <PostList posts={posts1} title="Посты про JS"/>
      <PostList posts={posts2} title="Посты про Python"/>
      <PostList posts={posts3} title="Посты про C#"/>
      
    </div>
  );
}

export default App;
