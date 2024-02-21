import React, { useEffect , useState } from 'react'
import axios from 'axios'
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incrementCart } from './Redux/storeSlice'
const DataById = () => {
    const [bookData , setbookData] = useState(null)
    const navigate = useNavigate();
    const dispath = useDispatch();
    const {bookId} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:9030/books/get/${bookId}`).then(
            response => setbookData(response.data)
        ).catch(error =>
            {
                console.log("Error is :" , error);
                setbookData(null);
            })
    },[bookId])
    const handleAddToCart = (bookId) => {
      dispath(incrementCart({bookId,...bookData})) &&
      navigate('/cart')
    }
    const handleBuy = (bookId) => {
      dispath(incrementCart({bookId, ...bookData})) &&
      navigate('/checkout')
    }
  return (
    <div id='B-Id'>
        {
            bookData ? (
                <div className='text-center'>
                  <h3 className='text-center'>Know more about {bookData.bookName} book </h3>
                  <img src={bookData.bookUrl} alt={bookData.bookName} width={250} height={250}/>
                  <h2>Author : {bookData.bookAuthor}</h2>
                  <h4>Publish Date : {bookData.bookDate}</h4>
                  <p className='h5'>Book Overview : {bookData.bookDescription}</p>
                  <h6>Price : {bookData.bookPrice}</h6>
                  <h6>Genre : {bookData.genre}</h6>
                  <div className='d-flex align-items-center justify-content-center'>
                  <button className='btn btn-primary  m-2' onClick={handleAddToCart}>Add to Cart</button>
                  <button className='btn btn-success  m-2' onClick={handleBuy}>Buy Now</button>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )
        }
    </div>
  )
}

export default DataById;
