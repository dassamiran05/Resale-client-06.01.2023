import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import './SingleProduct.css';
import SingleModalProduct from './SingleModalProduct';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SingleProduct = ({ allproduct }) => {

  const [show, setShow] = useState(false);
  const { userCoustom } = useContext(AuthContext);
  // console.log(userCoustom);
  const userEmail = userCoustom?.email;
  // console.log(userCoustom.email);
  const { _id, image, title, price, status, description, condition, location } = allproduct;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  
  const handelCartClick = id => {
    const token = localStorage.getItem('accessToken')
    fetch(`http://localhost:5000/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({image, title, price, product:id, userEmail})
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  // console.log(localStorage.getItem('accessToken'));

    // console.log("click sucessfull");
  
  // const ids = useParams()
  // console.log(ids);
  // console.log(allproduct)

  return (
    <div className="col-sm-6 col-lg-6 col-xl-4 mb-6">
      <div className="product-item">
        <div className="product-item-thumb">
          {/* <Link to={`/productdetails/${_id}`}> */}
          <span onClick={handleShow}>  <img src={image} alt="" /></span>
          {/* </Link> */}
        </div>
        <SingleModalProduct
        allproduct={allproduct}
        show={show} 
        handleClose={handleClose}
        id={_id}
        ></SingleModalProduct>
        <span className="badges">{status}</span>
        <div className="product-item-action">
          <button
            type="button"
            className="product-action-btn action-btn-wishlist"
            data-bs-toggle="modal"
            data-bs-target="#action-WishlistModal"
          >
            <i className="fa-regular fa-heart"></i>
          </button>
          <button
            type="button"
            className="product-action-btn action-btn-compare"
            data-bs-toggle="modal"
            data-bs-target="#action-CompareModal"
          >
            <i className="fa-solid fa-shuffle"></i>
          </button>
          <button
            type="button"
            className="product-action-btn action-btn-quick-view"
            data-bs-toggle="modal"
            data-bs-target="#action-QuickViewModal"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="product-item-info text-center pb-6">
          <h5 className="product-item-title mb-2">
            {title}
          </h5>
          <div className="product-item-price">
            $ {price}
            <span className="price-old">$260.00</span>
          </div>
          <div className="product-item-review-icon">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <button onClick={() => handelCartClick(_id)}   className="product-detail-cart-btn" type="button">
            Book now </button> 
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;