"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogList = ({
	mainClsAtts = "col-lg-6 col-md-6",
	imgCls = "single-blog-post",
	imageUrl,
	title,
	author,
}) => {
	return (
		<div className={mainClsAtts}>
			<div className={imgCls}>
				<div className="post-image">
					<Link href="/blog/details" className="d-block">
						<Image
							src={imageUrl}
							width={750}
							height={499}
							alt="image"
						/>
					</Link>
				</div>
				<div className="post-content">
					<Link href="#" className="category">
						Education
					</Link>
					<h3>
						<Link href="/blog/details">{title}</Link>
					</h3>
					<ul className="post-content-footer d-flex justify-content-between align-items-center">
						<li>
							<div className="post-author d-flex align-items-center">
								<Image
									src="/images/user1.jpg"
									width={300}
									height={300}
									className="rounded-circle"
									alt="image"
								/>
								<span>{author}</span>
							</div>
						</li>
						<li>
							<i className="flaticon-calendar"></i> April 30, 2020
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BlogList;
