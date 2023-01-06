import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Productdetails from "../../ProductsDetails/Productdetails";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";

const Allproduct = () => {
  const { id } = useParams();

  const [allProducts, setAllProducts] = useState([]);

  const getAllProduct = async () => {
    await fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const categoryProducts = data.filter((x) => x.category === id);
        setAllProducts(categoryProducts);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <div className="product-area section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9 order-0 order-lg-1">
              <div className="shop-top-bar">
                <div
                  className="nav nav-tabs shop-filter-nav active"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="column-three-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#column-three"
                    type="button"
                    role="tab"
                    aria-controls="column-three"
                    aria-selected="true"
                  >
                    <i className="fa-light fa-grid"></i>
                  </button>
                  <button
                    className="nav-link mr-0"
                    id="nav-list-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-list"
                    type="button"
                    role="tab"
                    aria-controls="nav-list"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-list"></i>
                  </button>
                </div>
              </div>

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="column-three"
                  role="tabpanel"
                  aria-labelledby="column-three-tab"
                >
                  <div className="row mb-n6">
                    {allProducts.map((allproduct) => (
                      <SingleProduct
                        key={allproduct._id}
                        allproduct={allproduct}
                      ></SingleProduct>
                    ))}
                  </div>
                </div>
                {/* <div
                  className="tab-pane fade product-list-items"
                  id="nav-list"
                  role="tabpanel"
                  aria-labelledby="nav-list-tab"
                >
                  <div className="row row-cols-1 row-cols-sm-2 mb-n8">
                    <div className="col mb-8">
                      <div className="product-list-item">
                        <Link
                          className="product-list-thumb"
                          to="shop-single-product.html">
                          <img
                            src="assets/images/shop/p7.jpg"
                            width="107"
                            height="107"
                            alt="Image-HasTech"
                          />
                        </Link>
                        <div className="product-list-info">
                          <h5 className="product-list-title">
                            <Link to="shop-single-product.html">
                              D-Phone Android Latest UI New XP
                            </Link >
                          </h5>
                          <div className="info-bottom">
                            <div className="product-list-price">$256.00</div>
                            <button
                              type="button"
                              className="info-btn-cart"
                              data-bs-toggle="modal"
                              data-bs-target="#action-CartAddModal"
                            >
                              <i className="icon-handbag"></i>
                            </button>
                            <div className="product-list-review-icon">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <nav className="pagination-area mt-6 mb-6">
                        <ul className="page-numbers justify-content-center">
                          <li>
                            <Link className="page-number active" to="shop.html">
                              1
                            </Link >
                          </li>
                          <li>
                            <Link className="page-number" to="shop.html">
                              2
                            </Link >
                          </li>
                          <li>
                            <Link className="page-number next" to="shop.html">
                              <i className="icon-arrow-right"></i>
                            </Link >
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 order-1 order-lg-0">
              <div className="sidebar-area mt-10 mt-lg-0">
                <div className="widget-item widget-item-one pb-5">
                  <h3 className="widget-two-title text-black">BRAND</h3>
                  <div className="widget-categories-list">
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked1"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked1"
                      >
                        Tesla (32)
                      </label>
                    </div>
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked1"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked1"
                      >
                        Honda(12)
                      </label>
                    </div>
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked1"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked1"
                      >
                        Ford (19)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="widget-item widget-item-one">
                  <h3 className="widget-two-title text-black">
                    Product Filter
                  </h3>
                  <div className="widget-filter-size">
                    {/* <h4 className="filter-size-title">Filter By Size</h4> */}
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked1"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked1"
                      >
                        All (65)
                      </label>
                    </div>
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked2"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked2"
                      >
                        Small (15)
                      </label>
                    </div>
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked3"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked3"
                      >
                        Medium (10)
                      </label>
                    </div>
                    <div className="filter-form-check widget-category-item">
                      <input
                        className="filter-form-check-input"
                        type="checkbox"
                        id="filterSizeChecked4"
                      />
                      <label
                        className="filter-form-check-label"
                        htmlFor="filterSizeChecked4"
                      >
                        Lerge (22)
                      </label>
                    </div>
                  </div>
                  <div className="widget-price-filter pe-0">
                    <h4 className="filter-price-title">Filter By Price</h4>
                    <div className="slider-range" id="slider-range"></div>
                    <div className="slider-labels">
                      <p>Price:</p>
                      <div className="caption">
                        <span id="slider-range-value1"></span>
                      </div>
                      <span> - </span>
                      <div className="caption">
                        <span id="slider-range-value2"></span>
                      </div>
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

export default Allproduct;
