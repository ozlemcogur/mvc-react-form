import React, { useEffect, useState } from 'react'
import ListPostView from './ListPostView'
import axios from 'axios'


const ListPostController = () => {

  const [postData, setPostData] = useState([])
  const [showPopUp, setShowPopUp] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3002/posts")
      .then((res) => setPostData(res.data))
  }, [])

  return (
    <ListPostView userName={userName} setUserName={setUserName} setShowPopUp={setShowPopUp} showPopUp={showPopUp} postData={postData}/>
  )
}

export default ListPostController
