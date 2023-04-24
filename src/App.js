import {useState, useMemo} from 'react';
import "./styles/App.css";
import PostList from './components/PostList'
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';



function App() {


  const [posts, setPosts] = useState ([
    {id: 1, title: 'dsfdaffd', body: 'jnkkjkj'},
    {id: 2, title: 'JavaSsdffacript2', body: 'gujadj'},
    {id: 3, title: 'ebqddsafda 3', body: 'savdjhы'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() =>{
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
        ? 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        : 
        <h1 style= {{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }
      
    </div>
  );
}

export default App;
