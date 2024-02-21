import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementCart, decrementCart } from './Redux/storeSlice';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const BookCart = () => {
    const bookCart = useSelector((state) => state.storeSlice.addToCart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRemove = (bookId) =>{
        dispatch(removeFromCart(bookId));
    };

    const handleClick = () => {
        if (bookCart.length === 0) {
          navigate('/home');
        } else {
          navigate('/checkout');
        }
    };

    const handleIncrement = (bookId) => {
        dispatch(incrementCart({ bookId }));
    };

    const handleDecrement = (bookId) => {
        dispatch(decrementCart({ bookId }));
    };

    const calculateTotalPrice = () => {
        return bookCart.reduce((total, item) => {
            return total + (item.bookPrice * item.quantity);
        }, 0);
    };

    const cart = bookCart.map((value) => (
        <div className="col-md-4" key={value.bookId}>
            <div className="card m-4">
                <img src={value.bookUrl} className="card-img-top" alt={value.bookName} width={33.33} height={450}/>
                <div className="card-body">
                    <h5 className="card-title">{value.bookName}</h5>
                    <p className="card-text">Author: {value.bookAuthor}</p>
                    <p className="card-text">Description: {value.bookDescription}</p>
                    <p className="card-text">Price: {value.bookPrice}</p>
                    <div className="quantity-controls">
                        <button className="quantity-button btn" onClick={() => handleDecrement(value.bookId)}> - </button>
                        <span className="quantity m-3">{value.quantity}</span>
                        <button className="quantity-button btn" onClick={() => handleIncrement(value.bookId)}> + </button>
                    </div>
                </div>
                <button className='btn btn-outline-warning w-50 align-self-center m-2 mb-4'
                        onClick={()=>handleRemove(value.bookId)}>Remove from Cart</button>
            </div>
        </div>
    ));

    return (
        <>
        <h1 id='cart-book' className="total-price text-center">Cart Value : {calculateTotalPrice()}/-</h1>
        <div className="container">
            <div className="row">
                {cart}
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <button onClick={()=>handleClick()}
                        className='btn btn-success w-25 mb-5'>{bookCart.length === 0 ? "Cart is Empty" : "Click to Checkout"}</button>
            </div>
        </div>
        </>
    );
};

export default BookCart;
