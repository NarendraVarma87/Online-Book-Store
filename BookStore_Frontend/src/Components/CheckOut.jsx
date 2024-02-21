import React, { useState } from 'react';
import CheckoutStepper from './CheckoutStepper';
import './Checkout.css';
import './Style.css';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const bookCart = useSelector((state) => state.storeSlice.addToCart);
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [customerInfoSubmitted, setCustomerInfoSubmitted] = useState(false);

  const calculateTotalPrice = () => {
    return bookCart.reduce((total, item) => {
      return total + (item.bookPrice * item.quantity);
    }, 0);
  };

  const Check_Stepper = [
    {
      name: "Customer Info",
      Component: () => <div>
        <h5 className='text-center'>Provide your basic details</h5>
        <form onSubmit={handleSubmit}>
          <div className='d-flex align-items-center justify-content-center text-center'>
          <input type='text' name='username' className='form-control m-2 w-50' value={username} onChange={(e)=>setUsername
            (e.target.value)} placeholder='Username' required />
          <input type="number" name='mobileNumber' className='form-control m-2 w-50' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Mobile Number' required />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
          {!customerInfoSubmitted && (
             <button type="submit" className='btn btn-outline-success w-25 m-1 '>Submit</button>)}
          </div>
        </form>
      </div>
    },
    {
      name: "Shipping Info",
      Component: () => <div>
        <h5 className='text-center'>Enter your Shipping Address</h5>
        <div className='d-inline text-center'>
        <form>
          <input type='text' className='form-control' placeholder='Current Address' />
          <input type="number"  className='form-control' placeholder='Pincode' />
        </form>
        </div>
      </div>
    },
    {
      name: "Payment",
      Component: () => <div>
       <h4 className='text-center m-4'>Complete Payment for your order</h4>
       <div className='d-flex align-items-center justify-content-center mb-5'>
       <form className='form-control'>
          <h5 className='text-center'><select>
           <option value="none">select</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="netbanking">Net Banking</option>
            <option value="cod">Cash On Delivery</option>
          </select>
          </h5>
        </form>
        </div>
      </div>
    },
    {
      name: "Order Dispatched",
      Component: () => <div>
        <h4 className='text-center m-2'>Your Ordered items dispatched you will receive within next 7 working days</h4>
        <form>
         <h6 className='text-center m-2'> Any Issues?</h6>
         <div className='d-flex justify-content-center align-items-center mb-4'>
             <input type='text'  placeholder='Share your Issue / Feedback with us' className='form-control'/>
         </div>
       
        </form>
      </div>
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, mobileNumber });
    setCustomerInfoSubmitted(true);
  };

  return (
    <div id='check-this'>
      <h2 className="Check">Checkout {calculateTotalPrice()}/-</h2>
      <CheckoutStepper stepper_config={Check_Stepper}   customerInfoSubmitted={customerInfoSubmitted}
  handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Checkout;
