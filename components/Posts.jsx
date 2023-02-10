import Post from "./Post"

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewidthsahand",
      userImg:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Note_Logo_symbol_WhiteOnGreen.png",
      img:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Nice picture"
    },
    {
      id: "2",
      username: "shida",
      userImg:"https://images.unsplash.com/profile-1586795246793-9a7d890a432bimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
      img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      caption: "Good pictureasdofipjpojwoijfpoiwjopfjowjfiojwiofjwoajfiojwoifjwiojfioawjfojwoifjiofjiowejioawjioawjfioajwiofjaiowfjowajiojawiofjoipws"
    }
  ]
  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
