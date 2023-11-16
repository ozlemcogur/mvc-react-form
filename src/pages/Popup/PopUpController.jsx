import React, { useEffect, useState } from 'react'
import PopUpView from './PopUpView'
import axios from 'axios'


const PopUpController = ({setShowPopUp, userName}) => {
    const [userPost, setUserPost] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3002/posts?user=${userName}`)
        .then((res)=> setUserPost(res.data))
    },[])
   
  return (
      <PopUpView userPost={userPost} userName={userName} setShowPopUp={setShowPopUp}/>
  
  )
}

export default PopUpController
