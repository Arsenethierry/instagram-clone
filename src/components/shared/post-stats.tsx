import { useLikePost } from "@/lib/react-query/queries";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
};

function PostStats({ post, userId }: PostStatsProps) {
    const location = useLocation();
    const likesList = post.likes.map((user: Models.Document) => user.$id);

    const [likes, setLikes] = useState<string[]>(likesList);

    const { mutate: likePost } = useLikePost();

    const containerStyles = location.pathname.startsWith("/profile") ? "w-full" : "";

    const handleLikePost = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation();

        let likesArray = [...likes];
        if (likesArray.includes(userId)) {
            likesArray = likesArray.filter((Id) => Id !== userId);
        } else {
            likesArray.push(userId);
        }
        setLikes(likesArray);
        likePost({ postId: post.$id, likesArray })
    }
    return (
        <div className={`flex justify-between items-center z-20 ${containerStyles}`}>
            <div className="flex gap-2 mr-5">
                <img
                    src={
                        `${checkIsLiked(likes, userId)
                            ? "/assets/icons/liked.svg"
                            : "/assets/icons/like.svg"
                        }`
                    }
                    alt="like"
                    width={20}
                    height={20}
                    onClick={(e) => handleLikePost(e)}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
}

export default PostStats;