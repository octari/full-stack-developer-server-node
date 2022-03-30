import { useDispatch } from "react-redux";
import React from "react";
import "./index.css"

const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else {
        return num;
    }
}

const TuitStats = ({ post }) => {
    const { stats, liked } = post
    const dispatch = useDispatch();
    const likeTuit = (tuit) => {
        dispatch({ type: 'like-tuit', tuit });
    };

    return (
        <div className="wd-post-interactions d-flex justify-content-between">
            <div>
                <i className="far fa-regular fa-comment"/>
                {numFormatter(stats.replies)}
            </div>
            <div>
                <i className="fa-solid fa-retweet"/>
                {numFormatter(stats.retuits)}
            </div>
            <div onClick={() => likeTuit(post)} >
                {liked ? <i className="far fa-heart icon-red"/> : <i className="far fa-heart" />}
                {numFormatter(stats.likes)}
            </div>
            <div>
                <i className="far fa-share-square"/>
            </div>
        </div>
    );
}

export default TuitStats;