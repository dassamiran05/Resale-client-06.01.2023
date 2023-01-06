import React from 'react';
import car from '../../assets/images/car.jpg';
import cycle from '../../assets/images/cycle.jpg';
import bus from '../../assets/images/bus.jpg';

const SamilarProduct = () => {
    return (
        <>
            <div className='samiler_area'>

                <div className="container-fluid mt-40">
                    <h2>Samiler Product List</h2>
                    <div className="row mt-30">
                        <div className="col-md-4 col-sm-6">
                            <div className="box7">
                                <img className="pic-1" src={car} alt='' />
                                <div className="box-content">
                                    <h3 className="title">What is Lorem Ipsum</h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box7">
                                <img className="pic-1" src={cycle} alt='' />
                                <div className="box-content">
                                    <h3 className="title">What is Lorem Ipsum</h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box7">
                                <img className="pic-1" src={bus} alt='' />
                                <div className="box-content">
                                    <h3 className="title">What is Lorem Ipsum</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SamilarProduct;