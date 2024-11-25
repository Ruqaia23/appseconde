import { resolve } from "styled-jsx/css";

export default async function PostDetailsPage({postId}) {

  await new Promise((resolve)=> {
    setTimeout(() => {
      resolve();

    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate :120,
      },
    }
  );
  const post = await response.json();
  return(
    <div >
      <div  style={{width : "90%" ,
      background: "#DDBEA9 ",
      padding: "10px" ,
      borderRadius: "12px",
      color: "#463f3a",
      marginTop: "15px"
     }}>
        <h1>{post.title}</h1>
        <hr/>
        <p>
         { post.body}
        </p>
      </div>
    </div>
  );
}