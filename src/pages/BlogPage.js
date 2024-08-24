import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
//import Blogs from "../components/Blogs";
import Card from "../components/Card";

const newbaseurl = "https://codehelp-apis.vercel.app/api/";
function BlogPage(){
    const [blog ,setBlog] = useState(null);
    const [relatedblogs,setRelatedblogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newbaseurl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedblogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Somthing went wrong!!");
            setBlog(null);
            setRelatedblogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if (blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname]);
    return(
        <div className="mt-[80px] mb-[70px] flex flex-col w-11/12 max-w-[670px] justify-center items-center mx-auto">
            <Header/>
            <div className="w-full mb-[10px]">
                <button onClick={() => navigation(-1)} className="rounded-md border-2 px-4 py-1">Back</button>
            </div>
            {
                loading ? (<div>
                    <p>Loading</p>
                </div>) :
                blog ?
                (<div>
                    <Card post = {blog}/>
                    <h2 className="text-2xl font-semibold mt-[20px] mb-[20px]">Related Blogs</h2>
                    <div>
                        {relatedblogs &&
                            relatedblogs.map( (post) => (
                                <div key={post.id} className="mb-[20px]">
                                    <Card post={post}/>
                                </div>
                            ))
                        }
                    </div>
                </div>) :
                (<div>
                    <p>No Blogs Found</p>
                </div>)
            }
        </div>
    );
}
export default BlogPage;