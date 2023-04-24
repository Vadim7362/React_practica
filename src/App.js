import {useState} from 'react';
import "./styles/App.css";
import PostList from './components/PostList'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';


function App() {


  const [posts, setPosts] = useState ([
    {id: 1, title: 'dsfdaffd', body: 'jnkkjkj'},
    {id: 2, title: 'JavaSsdffacript2', body: 'gujadj'},
    {id: 3, title: 'ebqddsafda 3', body: 'savdjhы'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuey] = useState('')

  function getSortedPosts() {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТ ПОСТОВ')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <div>
        <MyInput 
          value={searchQuery}
          onChange={e => setSearchQuey(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length
        ? 
        <PostList remove={removePost} posts={sortedPosts} title="Посты про JS"/>
        : 
        <h1 style= {{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }
      
    </div>
  );
}

export default App;
