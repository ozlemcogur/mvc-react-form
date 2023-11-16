import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PopUpController from '../Popup/PopUpController';

const ListPostView = ({ postData, showPopUp, setShowPopUp, userName, setUserName }) => {
  return (
    <div className='container'>
      {postData?.map((post) => (
        <div className='post' key={post.id}>
          <div className='info'>
            <h3>{post.title}</h3>
            <p onClick={() => { setUserName(post.user); setShowPopUp(true); }}>{post.user}</p>
          </div>
          <p className='text'>{post.text}</p>
        </div>
      ))}
      {showPopUp && <PopUpController userName={userName} setShowPopUp={setShowPopUp} />}
    </div>
  );
};

export default ListPostView;
