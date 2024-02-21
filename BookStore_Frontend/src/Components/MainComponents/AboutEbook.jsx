import React from 'react'
import '../Style.css'
import { useNavigate } from 'react-router-dom'
const AboutEbook = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <>
    <div id='about'>
         <h1 className='text-center'>Welcome to our E-Book Store!</h1>
         <p className='h6 m-3'>
        E-books, short for electronic books, are digital versions of printed books that can be read on computers,
        tablets, smartphones, or dedicated e-book readers. They offer several advantages over traditional printed books,
        including convenience, portability, and accessibility.
      </p>
      
      <h2 className='m-1'>Why Choose E-Books?</h2>
      <ul>
        <li className='m-2'><strong>Convenience:</strong> E-books can be downloaded instantly, allowing you to start reading
          immediately without having to visit a bookstore or wait for a delivery.</li>
        <li className='m-2'><strong>Portability:</strong> With e-books, you can carry an entire library of books with you on a single
          device, making it easy to read wherever you go.</li>
        <li className='m-2'><strong>Environmentally Friendly:</strong> E-books eliminate the need for paper, reducing the environmental
          impact of book production and transportation.</li>
        <li className='m-2'><strong>Customization:</strong> E-books often offer features like adjustable font sizes, bookmarking, and
          highlighting, allowing you to personalize your reading experience.</li>
        <li className='m-2'><strong>Affordability:</strong> E-books are often cheaper than their printed counterparts, making them a
          cost-effective option for avid readers.</li>
          <li className='m-2'>
          <strong>Interactive Features:</strong> Some e-books include multimedia elements such as audio, video, and interactive graphics, enhancing the reading experience and making learning more engaging.
          </li>
          <li className="m-2">
          <strong>Searchability:</strong>E-books allow you to easily search for specific keywords or phrases within a book, making it quicker and easier to find information compared to flipping through pages in a printed book.
          </li>
      </ul>
      <p className='h6 m-2'>
        Whether you're a casual reader or a book enthusiast, our e-book store offers a wide selection of e-books in various
        genres to suit your interests. Explore our collection and start reading today!
      </p>
      <h4 className='p-3' style={{marginBottom:80}}>Discover a wide range of e-books in various genres from <button className='btn btn-info h4' onClick={()=>handleClick()}>Here</button></h4>
    </div>
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Narendra Varma Uppalapati. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default AboutEbook;
