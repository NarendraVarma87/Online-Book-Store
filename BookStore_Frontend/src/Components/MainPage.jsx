import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import './Style.css'
import { useNavigate } from "react-router-dom"
import { incrementCart } from "./Redux/storeSlice";
function MainPage() {
  const [bookData,setBookData] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:9030/books/get").then(
      response => setBookData(response.data)
     )
  },[])
  const handleAddToCart = (book) => {
    dispatch(incrementCart(book));
  }
  const handleCheck = (bookId) => {
    navigate(`/book/${bookId}`)
  }
  return (
    <>
    <h4 id='book-container' className='text-center h2 text-decoration-underline'>Available Books</h4>
   <div id='books-container'>
    {
      bookData.map((val) => (
        <div key={val.bookID} id='books'>
          <h3>{val.bookName}</h3>
          <img src={val.bookUrl} alt="" className='m-2' width={150} height={250} onClick={()=>handleCheck(val.bookId)}/>
          <h4>Author : {val.bookAuthor}</h4>
          <p>Description : {val.bookDescription}</p>
          <h5>Price : {val.bookPrice}/-</h5>
          <h6>Genre : {val.genre}</h6>
          <button className='btn btn-outline-primary mt-2' onClick={()=>handleAddToCart(val)}>Add to Cart</button>
        </div>
      ))
    }
   </div>
    </>
  
  )
}

export default MainPage;
