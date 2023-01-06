import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../shered/Header';
import { useSelector, useDispatch } from 'react-redux';
// import { setIsModalVisible } from '../../store/modalSlice';


const SingleModalProduct = ({ handleClose, show, id, allproduct }) => {

  const [cart, setCart] = useState([]);
  // const navigate = useNavigate();

  const handelCartClick = id => {
    // navigate(`/api/singleproduct/${id}`);
    console.log("click sucessfull");
  }
  const ids = useParams()
  // console.log(ids);
  // console.log(allproduct);

  // const addProductToCart = (product) => {
	// 	const newProduct = {...product, count: 1,
	// 	};
	// 	setProducts([...productsInCart, newProduct,]);
	// };

  




  const [modalItem, setModalItem] = useState(null);
  

  useEffect(() => {
    fetch(`http://localhost:5000/singleproduct/${id}`).then(res => res.json()).then(data => setModalItem(data));
    // console.log(modalItem);
  }, [id]);
  return (

    <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {
                product.map((productItem, productIndex) => { 
                  return ( */}

        <div className="product-detail-area section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-detail-thumb me-lg-6">
                  <img src={modalItem?.image} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-detail-content">
                  <h2 className="product-detail-title mt-n1 me-10">{modalItem?.title}</h2>
                  <div className="product-detail-price">$ {modalItem?.price}</div>
                  <div className="product-detail-review">
                    <div className="product-detail-review-icon">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <p className="product-detail-review-show">( 1 Review )</p>
                  </div>
                  <p className="product-detail-desc">{modalItem?.description}</p>
                  {/* <div className = "qty-change flex">
                  <button type = "button" className='qty-dec fs-14' onClick={() => decreaseQty()}>
                    <i className = "fas fa-minus text-light-blue"></i>
                  </button>
                  <span className = "qty-value flex flex-center">{qty}</span>
                  <button type = "button" className='qty-inc fs-14 text-light-blue' onClick={() => increaseQty()}>
                    <i className = "fas fa-plus"></i>
                  </button>
                </div> */}
                  <div className="mb-3">

                   <button onClick={() => handelCartClick(modalItem?._id)}   className="product-detail-cart-btn" type="button" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                   Book now 
                        
                        </button> 

                    {/* {props.showAddToCart === true && <button
                      className="main-button"
                      onClick={() => props.handleAddProduct(props.product)}
                    >add to cart
                    </button>} */}

                    {/* <button className="product-detail-cart-btn" type="button" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button> */}
                    {/* <button className="product-detail-cart-btn" 
                          whenClicked={() => console.log('I just got clicked')}
                          buttonText="Some Button"
                          isDisabled={false}></button> */}

                  </div>

                  <ul className="product-detail-meta">
                    <li><span>condition:</span>{modalItem?.condition}</li>
                    <li><span>location:</span>{modalItem?.location}</li>
                    {/* <li><span>Tag</span> Electronic</li> */}
                  </ul>
                </div>
              </div>
            </div>



          </div>
        </div>
               {/* )
              })
          } */}
      </Modal.Body>
      {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
    </Modal>
  );
};

export default SingleModalProduct;