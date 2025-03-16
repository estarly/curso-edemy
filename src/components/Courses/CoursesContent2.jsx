"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CoursesContent2 = () => {
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

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box without-boxshadow">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses10.jpg"
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
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user1.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Deep Learning The Numpy Stack in Python
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 15 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 145 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box without-boxshadow">
                <div className="courses-image">
                  <Link href="#" className="d-block image">
                    <Image
                      src="/images/courses/courses11.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <button type="button" className="fav">
                    <i className="flaticon-heart"></i>
                  </button>
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user2.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Sarah Taylor</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Statistics for Data Science and Business Analysis
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 100 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box without-boxshadow">
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
                  <div className="price shadow">$59</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user3.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>David Warner</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Microsoft Excel - Excel from Beginner to Advanced
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 150 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box without-boxshadow">
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
                  <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user6.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Alex Morgan</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Python Django Web Development: To-Do App
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 15 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 145 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box without-boxshadow">
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
                  <div className="price shadow">$49</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user5.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>Sarah Taylor</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Oracle SQL Developer : Essentials, Tips and Tricks
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 20 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 100 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box without-boxshadow">
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
                  <div className="price shadow">$99</div>
                </div>
                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <img
                      src="/images/user4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span>James Anderson</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Learning A-Z™: Hands-On Python In Data Science
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 44 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 440 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContent2;
