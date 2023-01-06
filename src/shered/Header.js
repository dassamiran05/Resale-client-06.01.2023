import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import phone from '../../src/assets/icon/phone2.png'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';
import Cart from '../pages/CheckOut/Cart';

const Header = ({ props }) => {

    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();


    // const [cartsVisibilty, setCartVisible] =
	// 	useState(false);
	// const [productsInCart, setProducts] =
	// 	useState(
	// 		JSON.parse(
	// 			localStorage.getItem(
	// 				"shopping-cart"
	// 			)
	// 		) || []
	// 	);
	// useEffect(() => {
	// 	localStorage.setItem(
	// 		"shopping-cart",
	// 		JSON.stringify(productsInCart)
	// 	);
	// }, [productsInCart]);
	// const addProductToCart = (product) => {
	// 	const newProduct = {...product, count: 1,
	// 	};
	// 	setProducts([...productsInCart, newProduct,]);
	// };


	// const onQuantityChange = (
	// 	productId,
	// 	count
	// ) => {
	// 	setProducts((oldState) => {
	// 		const productsIndex =
	// 			oldState.findIndex(
	// 				(item) =>
	// 					item.id === productId
	// 			);
	// 		if (productsIndex !== -1) {
	// 			oldState[productsIndex].count =
	// 				count;
	// 		}
	// 		return [...oldState];
	// 	});
	// }

	// const onProductRemove = (product) => {
	// 	setProducts((oldState) => {
	// 		const productsIndex =
	// 			oldState.findIndex(
	// 				(item) =>
	// 					item.id === product.id
	// 			);
	// 		if (productsIndex !== -1) {
	// 			oldState.splice(productsIndex, 1);
	// 		}
	// 		return [...oldState];
	// 	});

    // };

    const menu = <React.Fragment>

        <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
        </li>
        {/* <li className="nav-item"><Link className="nav-link" href="about-us.html">Login</Link>
        </li>
        <li className="nav-item" ><Link className="nav-link" href="shop.html">Shop</Link>
        </li> */}
        {/* <li className="nav-item">
            <Link className="nav-link" href="account.html">Pages</Link>
        </li> */}
        <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/dashbord">Dashbord</Link>
        </li>

    </React.Fragment>


    const handleSignoutUser = () => {
        signOutUser()
            .then(res => {
                // console.log(res)
                localStorage.removeItem('accessToken');
                navigate('/');
            })
            .catch(error => console.error(error));
    }



    return (
        <>

            <header className="header-wrapper">

                <Cart
                    // visibilty={cartsVisibilty}
                    // products={productsInCart}
                    // onClose={() =>
                    //     setCartVisible(false)
                    // }
                    // onQuantityChange={
                    //     onQuantityChange
                    // }
                    // onProductRemove={onProductRemove}
                />

                <div className="header-middle">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-lg-3 col-md-3">
                                <div className="header-logo-area">
                                    <Link to="/" className='logo'>
                                        TIXLY
                                    </Link >
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <form className="header-search-box header-search-box-two ms-3">
                                    <input className="form-control mb-0" type="text" id="search" placeholder="Search Products" />

                                    <button type="submit" className="btn-src">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="col-lg-3 col-md-3 login_shop">
                                {
                                    user?.email ?
                                        <>
                                            {/* <Link to="#" className="header-action-account" onClick={handleSignoutUser}>Logout</Link > */}
                                            {/* <Button variant="link" className="btn btn-ghost" onClick={handleSignoutUser}>Logout</Button> */}
                                            <Button variant="outline-dark" className='header-btn' onClick={handleSignoutUser}>Logout</Button>
                                        </>
                                        :
                                        <>
                                            <Link to="/login" className="header-action-account">Login</Link>
                                        </>
                                }

                                <Link className="header-action-wishlist" to="shop-wishlist.html">
                                    <i className="fa-regular fa-heart"></i>
                                </Link >
                                <button onClick={() => props.handleShow(true)} 
                                    >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                   

                                    <span className="cart-count"></span>
                                </button>
                                {/* <sup> {props.count} </sup> */}

                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-light bg_color">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {menu}
                            </ul>

                        </div>
                        <div className="phone-item-action phone-item-action--two">
                            <div className="phone-item-icon">
                                <img src={phone} alt="Icon" width="32" height="36" />
                            </div>
                            <div className="phone-item-content">
                                <span>Call Us 24/7</span> <Link to="tel:+00123456789">+00 123 456 789</Link >
                            </div>
                        </div>
                    </div>

                </nav>
            </header>




        </>
    );
};

export default Header;