import type { Post } from "../types/post";

export const PostDetailCard = ({post}:Post) => {
    return (
        <div>
            {
                post ? <div>
                        {post.userId}<br />{post.title}<br /><br /><br />
                        {post.body}<br />
                        {post.id}<br />
                    </div>
                    : <></>
            }
        </div>
    );
};
