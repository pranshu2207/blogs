import { NavLink } from "react-router-dom";

function Card({post}){
    return(
        <div>
            <p className="font-bold text-lg">
                <NavLink to={`/blog/${post.id}`}>
                    <span>{post.title}</span>
                </NavLink>
            </p>
            <p className="text-sm mt-[4px]">
                By <span className="italic">{post.author}</span> on <span className="underline font-semibold">
                    <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                        <span>{post.category}</span>
                    </NavLink>
                </span>
            </p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
                {post.tags.map( (tag,index) => {
                        return <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index}>
                        <span className="text-blue-700 underline font-semibold text-xs mt-[5px]">{`#${tag}`}</span>
                        </NavLink>
                    })}
            </div>
        </div>
    );
}
export default Card;