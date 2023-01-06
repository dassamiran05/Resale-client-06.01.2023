import React, { useEffect, useReducer, useState, reducer } from 'react';
import { NavLink } from 'react-router-dom';

const CatagorySection = () => {


    // const initialState = {
    //     isLoading: false,
    //     isError: false,
    //     products: [],
    //     featureProducts: [],
    // }

    const [products, setProducts] = useState([])

    const getProduct = async () => {
        const res = await fetch('http://localhost:5000/category');
        setProducts(await res.json());
    }

    useEffect(() => {
        getProduct();
    }, []);





    return (

        <>


            <div className='catagory_area'>
                <div className='container-fluid'>
                    <h2>New Top Category</h2>
                    <div className='row'>
                        {
                            products.map((catagory) => {
                                const { _id, image, name } = catagory;

                                return (
                                    <>
                                        <div className='col-lg-3 col-md-3 col-sm-6' key={_id}>
                                            <NavLink to={`/allproduct/${_id}`}>

                                                <div className="card card_box">
                                                    <img src={image} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">{name}</p>
                                                    </div>
                                                </div>

                                            </NavLink>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    );
};

export default CatagorySection;