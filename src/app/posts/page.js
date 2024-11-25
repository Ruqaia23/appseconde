import  Link from "next/link";
import Todo from "../components/todo";


export default async  function PostPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate :120,
      },
    }
  );
  const todo = await response.json();
const postsJSX = todo.map((post)=> {
  return(
    <Link
    href={`/posts/${post.id}`}>

    <div style={{width : "90%" ,
      background: "#DDBEA9 ",
      padding: "10px" ,
paddingLeft :"5px",
      borderRadius: "12px",
      color: "#463f3a",
      marginTop: "15px"
     }}>
      <h1 style={{fontWeight:"bold"}}>{post.title}</h1>
      <p>{post.body}</p>

    </div>
    </Link>
  );

});

// console.log(todo);
return(
<div style={{padding : "10px"  , color:"#6B705C" , backgroundColor: " #E4E3D3"}}>
        <h1>Posts Page</h1>
        {/* <Link href="/artical">
          <a style={{ color: "red" }}>Take me to next page</a></Link> */}
        {/* Posts */}
        <div>{postsJSX}</div>
         {/* Posts */}

      </div>
    );
}