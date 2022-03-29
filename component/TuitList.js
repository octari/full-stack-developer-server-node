import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import * as service
    from '../services/tuit-service.js';
import {deleteTuit, findAllTuits} from "./tuits-actions.js";

const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() =>
                  findAllTuits(dispatch),
              []);




    return null;
}


export default TuitList;