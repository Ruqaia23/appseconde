import PostDetails from "@/app/components/postDetails";

export default async function PostDetailsPage({params}) {
  const postId = params.postId
  return(
    <div style={{padding : "10px"  , color:"#6B705C" , backgroundColor: " #E4E3D3"}}>
      <h1>Post Details</h1>
      <PostDetails postId={postId} />

    </div>
  );
}