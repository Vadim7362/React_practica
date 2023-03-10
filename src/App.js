import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from './components/PostItem';
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {


  const [posts1, setPosts1] = useState ([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  }

  return (
    <div className="App">
      <form>

        {/* Управляемый компонент */}

        <MyInput 
        value={title} 
        onChange={e => setTitle(e.target.value)}
        type="text" 
        placeholder="Название поста"/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts1} title="Посты про JS"/>
      
    </div>
  );
}

export default App;
