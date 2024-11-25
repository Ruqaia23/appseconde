import  Link from "next/link";
import Home from "../page";

export const metadata={
  title: "Articles Page",
};

export default function ArticalsPage() {
  return(
<div style={{padding : "10px"  , color:"#6B705C" , backgroundColor: " #E4E3D3"}}>
<h1>Artical Page</h1>
      {/* <Link href="/posts"> Take me to next page</Link> */}
    </div>
  );

}