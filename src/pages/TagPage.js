import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

function TagPage(){
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return(
        <div className="mt-[80px] flex flex-col w-11/12 max-w-[670px] justify-center items-center mx-auto">
            <Header/>
            <div className="w-full flex gap-x-6 px-[23px]">
                <button onClick={() => navigation(-1)} className="rounded-md border-2 px-4 py-1">Back</button>
                <h2 className="text-2xl font-semibold">
                    Blogs Tagged<span>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    );
}
export default TagPage;