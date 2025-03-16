"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CoursesContent4 = () => {
  return (
    <>
      <div className="courses-area courses-section pt-100 pb-70">
        <div className="container">
          <div className="edemy-grid-sorting row align-items-center">
            <div className="col-lg-8 col-md-6 result-count">
              <p>
                We found <span className="count">12</span> courses available for
                you
              </p>
            </div>

            <div className="col-lg-4 col-md-6 ordering">
              <div className="select-box">
                <select className="form-select">
                  <option>Sort By</option>
                  <option>Popularity</option>
                  <option>Latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-item-box">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses12.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      Agile Crash Course: Agile Project Management
                    </Link>
                  </h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <div className="rating-total">5.0 (1 rating)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-item-box">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses13.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$59</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)
                    </Link>
                  </h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <div className="rating-total">5.0 (2 rating)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-item-box">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses14.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$69</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      The Python Bible™ | Everything You Need to Program in
                      Python
                    </Link>
                  </h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <div className="rating-total">5.0 (3 rating)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-item-box">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses15.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$79</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      Mathematical Foundation For Machine Learning and AI
                    </Link>
                  </h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <div className="rating-total">5.0 (4 rating)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-item-box">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses16.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$89</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      The Ultimate Drawing Course - Beginner to Advanced
                    </Link>
                  </h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <div className="rating-total">5.0 (5 rating)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-item-box">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses17.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$99</div>
                </div>
                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      PyTorch: Deep Learning and Artificial Intelligence
                    </Link>
                  </h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <div className="rating-total">5.0 (6 rating)</div>
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

export default CoursesContent4;
