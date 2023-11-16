import React, { useState } from 'react'
import AddPostModel from './AddPostModel'

const AddPostView = ({handleSubmit, onInputChange}) => {
  
  return (
    <form onSubmit={handleSubmit}>
    <h2>Yeni Gönderi Ekle</h2> 
    <fieldset>
      <label htmlFor='Kullanıcı Adı'></label>
      <input
       onChange={(e)=>onInputChange("user", e)}
       type='text'/>
    </fieldset>
    <fieldset>
      <label htmlFor='Baslık'></label>
      <input
      onChange={(e)=>onInputChange("title", e)} 
      type='text' placeholder='MVC Mimarisi'/>
    </fieldset>
    <fieldset>
      <label htmlFor='Açıklama'></label>
    <textarea
        onChange={(e)=>onInputChange("text", e)} 
     type= "text" placeholder='Açıklamayı Giriniz' maxLength={100}></textarea>
    </fieldset>
      <button>Gönder</button>
    </form>
  )
}

export default AddPostView

