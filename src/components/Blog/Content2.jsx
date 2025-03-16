"use client";

import React from "react";
import Pagination from "./Pagination";
import BlogList from "./BlogList";
import blog1 from "../../../public/images/blog/blog1.jpg";
import blog2 from "../../../public/images/blog/blog2.jpg";
import blog3 from "../../../public/images/blog/blog3.jpg";
import blog4 from "../../../public/images/blog/blog7.jpg";
import blog5 from "../../../public/images/blog/blog8.jpg";
import blog6 from "../../../public/images/blog/blog9.jpg";

const Content = () => {
	return (
		<div className="blog-area ptb-100">
			<div className="container">
				<div className="row">
					<BlogList
						mainClsAtts="col-lg-4 col-md-6"
						imgCls="single-blog-post-box"
						imageUrl={blog1}
						title="It’s Time To Think Differently About Homeschooling"
						author="Alex Morgan"
					/>
					<BlogList
						mainClsAtts="col-lg-4 col-md-6"
						imgCls="single-blog-post-box"
						imageUrl={blog2}
						title="Online Learning Can Prepare Students For.."
						author={`Alex Morgan`}
					/>
					<BlogList
						mainClsAtts="col-lg-4 col-md-6"
						imgCls="single-blog-post-box"
						imageUrl={blog3}
						title="28 Student-Centered Instructional Strategies"
						author={`Alex Morgan`}
					/>
					<BlogList
						mainClsAtts="col-lg-4 col-md-6"
						imgCls="single-blog-post-box"
						imageUrl={blog4}
						title="4 Steps To Quality Training In Times Of Urgency"
						author={`Alex Morgan`}
					/>
					<BlogList
						mainClsAtts="col-lg-4 col-md-6"
						imgCls="single-blog-post-box"
						imageUrl={blog5}
						title="100 Blended Learning Resources For Teachers"
						author={`Alex Morgan`}
					/>
					<BlogList
						mainClsAtts="col-lg-4 col-md-6"
						imgCls="single-blog-post-box"
						imageUrl={blog6}
						title="20 Examples Of Project-Based Learning"
						author={`Alex Morgan`}
					/>

					{/* Pagination */}
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default Content;
