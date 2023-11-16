import React from 'react'

const PopUpView = ({setShowPopUp, userName, userPost}) => {
  return (
    <div className='wrapper'>
        <div className='popup'>
            <div className='btn-wrap'>
                <h4><span>{userName}</span>kullanıcısının gönderileri</h4>
            <button onClick={()=>setShowPopUp(false)}>Kapat</button>
            </div>
           
         {userPost?.map((post)=>( 
              <div className="post">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                </div>


         ))}

        
           
          
         

        </div>
      
    </div>
  )
}

export default PopUpView
