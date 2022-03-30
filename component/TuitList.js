import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "./tuits-actions";

import PostItem from "./PostItem.js";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), [dispatch]);

    return (
        <div className="wd-tuit-list">
            {tuits.map(tuit => {
                return <PostItem tuit={tuit} key={tuit._id} />
            })}
        </div>
    );
}

export default TuitList;