"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CoursesContent5 = () => {
  return (
    <>
      <div className="courses-area ptb-100 bg-f5f7fa">
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
            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small1.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$39</span>
                      <h3>
                        <Link href="#">
                          Agile Crash Course: Agile Project Management
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
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
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small2.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$99</span>
                      <h3>
                        <Link href="#">
                          Vue JS 2 - The Complete Guide (incl. Vue Router &
                          Vuex)
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 14 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 100 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small3.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$49</span>
                      <h3>
                        <Link href="#">
                          The Python Bible™ | Everything You Need to Program in
                          Python
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 11 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 104 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small4.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$79</span>
                      <h3>
                        <Link href="#">
                          Mathematical Foundation For Machine Learning and AI
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 14 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 100 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small5.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$59</span>
                      <h3>
                        <Link href="#">
                          The Ultimate Drawing Course - Beginner to Advanced
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 09 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 150 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small6.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$89</span>
                      <h3>
                        <Link href="#">
                          PyTorch: Deep Learning and Artificial Intelligence
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 20 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 200 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small7.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$39</span>
                      <h3>
                        <Link href="#">
                          Data Visualization with Python and Matplotlib
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
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
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small8.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$99</span>
                      <h3>
                        <Link href="#">
                          Static and Interactive Data Visualizations in R
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 14 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 100 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small9.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$49</span>
                      <h3>
                        <Link href="#">
                          R for Data Science: Learn R Programming in 2 Hours
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 11 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 104 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small10.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$79</span>
                      <h3>
                        <Link href="#">
                          Complete Python Developer in 2020: Zero to Mastery
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 14 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 100 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small1.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$59</span>
                      <h3>
                        <Link href="#">Python for Beginners with Examples</Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 09 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 150 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Image
                        src="/images/courses-small/courses-small12.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />

                      <Link href="#" className="link-btn"></Link>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <span className="price">$89</span>
                      <h3>
                        <Link href="#">
                          Python Django Web Development: To-Do App
                        </Link>
                      </h3>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i> 20 Lessons
                        </li>
                        <li>
                          <i className="flaticon-people"></i> 200 Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </a>
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" className="page-numbers">
                  2
                </a>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="bx bx-chevrons-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContent5;
