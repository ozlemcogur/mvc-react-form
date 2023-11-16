import {BrowserRouter, Routes, Route} from "react-router-dom"
import ListPostController from "./pages/ListPost/ListPostController"
import AddPostController from "./pages/AddPost/AddPostController"
import Header from "./components/Header"
import "./assets/style.scss"
function App() {
 

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<ListPostController/>}/>
      <Route path="/add-post" element={<AddPostController/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
