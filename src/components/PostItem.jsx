import MyButton from '../components/UI/button/MyButton'

const PostItem = (props) => {


  return (
      <div className="post">
        <div className="post__items">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="btns">
          <MyButton onClick = {() => props.remove(props.post)}>
            Удалить
          </MyButton>
        </div>
      </div>

  )
};

export default PostItem;