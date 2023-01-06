import React, { useContext, useEffect, useState } from 'react';
import { Col, Nav, Navbar, Row, Tab } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shered/Footer';
import Header from '../shered/Header';
// import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import '../../src/pages/Dashbord/Dashbord.css';

const DashbordLayout = () => {
    const { user, userCoustom } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    // const [currentUser, setcurrentUser] = useState([]);
    // console.log(userCoustom);


    // const userData = async() => {
    //     try{
    //         const res = await fetch(`http://localhost:5000/users/${user?.email}`);
    //         setcurrentUser(await res.json());
    //     }
    //     catch(error){
    //         console.log(error);
    //     }

    // }

    // useEffect(() => {
    //     // fetch(`http://localhost:5000/users/${user?.email}`)
    //     //     .then(res => res.json())
    //     //     .then(data => setcurrentUser(data));
    //     userData();


    // }, [user?.email])


    // const handelMyOreder = id => {
    //     const token = localStorage.getItem('accessToken')

    //     fetch(`http://localhost:5000/singleuserOrder`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `bearer ${token}`,
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     handelMyOreder()
    // }, [user])


    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile">

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {/* <Nav.Item>
                                    <div eventKey="first"><Link to="/dashbord/allusers" className='all_tab'>All users</Link></div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div eventKey="first"><Link to="/dashbord/allbuyers" className='all_tab'>All Buyer</Link></div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div eventKey="first"><Link to="/dashbord/allsellers" className='all_tab'>All Seller</Link></div>
                                </Nav.Item> */}
                                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                    <li> <Link to="/dashbord">ABCD</Link> </li>
                                    {
                                        userCoustom?.role === "admin" ?
                                            <>
                                                <li> <Link to="/dashbord/allusers">All Users</Link> </li>
                                                <li> <Link to="/dashbord/allbuyers">All Buyers</Link> </li>
                                                <li> <Link to="/dashbord/allsellers">All Sellers</Link> </li>
                                            </>
                                            :
                                            <>
                                                {
                                                    userCoustom?.role === "seller" ?
                                                        <>
                                                            <li> <Link to="/dashbord/myproducts">My Products</Link> </li>
                                                            <li> <Link to="/dashbord/addProduct">Add Product</Link> </li>
                                                            <li> <Link to="/dashbord/mybuyers">My Buyers</Link> </li>
                                                        </>
                                                        :
                                                        <>
                                                            <li> <Link to="/dashbord/myorders">My Orders</Link> </li>
                                                            <li> <Link to="/dashbord/mywishlist">My Wishlist</Link> </li>
                                                        </>
                                                }
                                            </>
                                    }
                                </ul>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Outlet></Outlet>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashbordLayout;