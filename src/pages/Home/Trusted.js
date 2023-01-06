import React from 'react';
import iconone from '../../assets/icon/icon-1.png';
import icontwo from '../../assets/icon/icon-2.png';
import iconthree from '../../assets/icon/icon-3.png';
import iconfour from '../../assets/icon/icon-4.png';

const Trusted = () => {
    return (
        <>
            <div className='trusted_card'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className="card mb-3 card_box">
                                <div className="row g-0">
                                    <div className="col-md-4 card_img">
                                        <img src={iconone} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">SUPPORT 24/7</h5>
                                            <p>Delicated 24/7 Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className="card mb-3 card_box">
                                <div className="row g-0">
                                    <div className="col-md-4 card_img">
                                        <img src={icontwo} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">EASY RETURNS</h5>
                                            <p>Shop With Confidence</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className="card mb-3 card_box">
                                <div className="row g-0">
                                    <div className="col-md-4 card_img">
                                        <img src={iconthree} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">CARD PAYMENT</h5>
                                            <p>12 Months Installments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className="card mb-3 card_box">
                                <div className="row g-0">
                                    <div className="col-md-4 card_img">
                                        <img src={iconfour} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">FREE SHIPPING</h5>
                                            <p>Capped at $50 per order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trusted;