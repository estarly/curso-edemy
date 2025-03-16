"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CoursesSidebar from "./CoursesSidebar";
import { he } from 'he';

const CoursesContent6 = () => {
  return (
    <>
      <div className="courses-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="edemy-grid-sorting row align-items-center">
                <div className="col-lg-8 col-md-6 result-count">
                  <p>
                    We found <span className="count">12</span> courses available
                    for you
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 ordering">
                  <div className="select-box">
                    <select className="form-control">
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
                <div className="col-lg-6 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href="#" className="d-block image">
                        <Image src="/images/courses/courses1.jpg" alt="image" width={750} height={500} />
                      </Link>
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <div className="price shadow">$39</div>
                    </div>
                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center">
                        <Image
                          src="/images/user1.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={50}
                          height={50}
                        />
                        <span>Alex Morgan</span>
                      </div>

                      <h3>
                        <Link href="#">
                          The Data Science Course 2020: Complete Data Science
                          Bootcamp
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href="#" className="d-block image">
                        <Image src="/images/courses/courses2.jpg" alt="image" width={750} height={500} />
                      </Link>
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <div className="price shadow">$49</div>
                    </div>
                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center">
                        <Image
                          src="/images/user2.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={50}
                          height={50}
                        />
                        <span>Sarah Taylor</span>
                      </div>

                      <h3>
                        <Link href="#">
                          Java Programming MasterclassName for Software
                          Developers
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href="#" className="d-block image">
                        <Image src="/images/courses/courses3.jpg" alt="image" width={750} height={500} />
                      </Link>
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <div className="price shadow">$59</div>
                    </div>
                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center">
                        <Image
                          src="/images/user3.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={50}
                          height={50}
                        />
                        <span>David Warner</span>
                      </div>

                      <h3>
                        <Link href="#">
                          Deep Learning A-Z™: Hands-On Artificial Neural
                          Networks
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href="#" className="d-block image">
                        <Image src="/images/courses/courses4.jpg" alt="image" width={750} height={500} />
                      </Link>
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <div className="price shadow">$39</div>
                    </div>
                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center">
                        <Image
                          src="/images/user6.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={50}
                          height={50}
                        />
                        <span>Alex Morgan</span>
                      </div>

                      <h3>
                        <Link href="#">
                          Python for Finance: Investment Fundamentals & Data
                          Analytics
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, constetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href="#" className="d-block image">
                        <Image src="/images/courses/courses5.jpg" alt="image" width={750} height={500} />
                      </Link>
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <div className="price shadow">$49</div>
                    </div>
                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center">
                        <Image
                          src="/images/user5.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={50}
                          height={50}
                        />
                        <span>Sarah Taylor</span>
                      </div>

                      <h3>
                        <Link href="#">
                          Machine Learning A-Z™: Hands-On Python & R In Data
                          Science
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, constetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link href="#" className="d-block image">
                        <Image src="/images/courses/courses6.jpg" alt="image" width={750} height={500} />
                      </Link>
                      <button type="button" className="fav">
                        <i className="flaticon-heart"></i>
                      </button>
                      <div className="price shadow">$99</div>
                    </div>
                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center">
                        <Image
                          src="/images/user4.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={50}
                          height={50}
                        />
                        <span>James Anderson</span>
                      </div>

                      <h3>
                        <Link href="#">
                          R Programming A-Z™: R For Data Science With Real
                          Exercises!
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, constetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
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

                <div className="col-lg-12 col-md-12 col-sm-12">
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

            <div className="col-lg-4 col-md-12">
              <CoursesSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContent6;
