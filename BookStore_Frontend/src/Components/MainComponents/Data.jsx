import React, { useState } from 'react';
import axios from 'axios';
import '../Style.css'

const Data = () => {
    const [formData, setFormData] = useState({
        bookId: null,
        bookName: "",
        bookUrl: "",
        bookAuthor: "",
        bookDate: "",
        bookDescription: "",
        bookPrice: null,
        genre: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9030/books/add", formData)
            .then(res => {
                console.log("Response:", res.data);
                setFormData({
                    bookId: null,
                    bookName: "",
                    bookUrl: "",
                    bookAuthor: "",
                    bookDate: "",
                    bookDescription: "",
                    bookPrice: null,
                    genre: ""
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
        <h5 id='data-book' className="text-center">Please add these basic info of your Book which you are going to sold.</h5>
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='w-50'>
            <label htmlFor="bookId"  for="bookId" className='form-label mb-3'>Book ID:</label>
                <input type="number" className='form-control w-100' id="bookId" name="bookId" value={formData.bookId} onChange={handleChange} />
                <label for='bookName' htmlFor="bookName">Book Name:</label>
                <input type="text"  className='form-control w-100' id="bookName" name="bookName" value={formData.bookName} onChange={handleChange} required/>

                <label htmlFor="bookUrl">Book URL:</label>
                <input type="text" id="bookUrl"  className='form-control w-100' name="bookUrl" value={formData.bookUrl} onChange={handleChange} required/>

                <label htmlFor="bookAuthor">Book Author:</label>
                <input type="text" id="bookAuthor"  className='form-control w-100' name="bookAuthor" value={formData.bookAuthor} onChange={handleChange} required/>

                <label htmlFor="bookDate">Book Date:</label>
                <input type="text" id="bookDate"  className='form-control w-100' name="bookDate" value={formData.bookDate} onChange={handleChange} required/>

                <label htmlFor="bookDescription">Book Description:</label>
                <input type="text" id="bookDescription"  className='form-control w-100' name="bookDescription" value={formData.bookDescription} onChange={handleChange} required/>

                <label htmlFor="bookPrice">Book Price:</label>
                <input type="number" id="bookPrice" className='form-control w-100' name="bookPrice" value={formData.bookPrice} onChange={handleChange} required/>

                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre"  className='form-control w-100' name="genre" value={formData.genre} onChange={handleChange} required/>
                <div className='d-flex align-items-center justify-content-center p-2 m-3'>
                <button type="submit"  className='form-control w-25 btn btn-outline-success'>Submit</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default Data;
