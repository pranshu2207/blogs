import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import image from "../assets/image.png";

function Blogs(){
    const {posts,loading} = useContext(AppContext);
    return(
        <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? 
                    (
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-2xl font-semibold">No Post Found</p>
                            <img src={image} alt="404" className="h-[450px]"/>
                        </div>
                    ) : 
                    (posts.map( (post) => (<Card key={post.id} post={post}/>)))
                )
            }
        </div>
    );
}
export default Blogs;