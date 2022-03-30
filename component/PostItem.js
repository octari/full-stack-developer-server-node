import React from 'react'
import { useDispatch } from "react-redux";
import TuitStats from '../TuitStats';

const DEFAULT_PROFILE = "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
const PostItem = ({ post }) => {
  const { postedBy, tuit, imageSrc, link, timeStamp } = post

  const dispatch = useDispatch();

  return (
    <div className="wd-post-item d-flex">
      <img  className="wd-post-profileImage"
            src={postedBy.profileImgSrc || DEFAULT_PROFILE}
            alt={`${postedBy.username}'s profile`}
      />
      <div>
        <div>
          <p className="wd-post annotations">
            <span className="wd-postauthor">{postedBy.username}</span>
            <span>{postedBy.handle}</span>
              {timeStamp &&
               <span>&nbsp;•&nbsp;{timeStamp}</span>
              }
            <i
              onClick={() => deleteTuit(dispatch, tuit)}
              className="fas fa-times fa-pull-right"
              />
          </p>
          <p>{tuit}</p>
        </div>
        {link &&
          <div className="wd-post-link">
            <img 
              src={link.previewImageSrc}
              className="wd-post-image wd-post-link-image"
              alt="" 
            />
            <div className="wd-post-link-text">
              <p className="wd-post-link-title">{link.previewTitle}</p>
              <p className="wd-post-link-description">{link.previewDescription}</p>
              <p className="wd-post-link-url">
                <a href={`https://${link.baseUrl}`} target="_blank" rel="noopener noreferrer">{link.baseUrl}</a>
              </p>
            </div>
          </div>
        }
          {imageSrc &&
           <img
               src={imageSrc}
               className="wd-post-image"
               alt=""
           />
          }
        <TuitStats post={post}/>
      </div>
    </div>
  );
}

export default PostItem;