"use client";

import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
	return (
		<div className="widget-area">
			<div className="widget widget_search">
				<h3 className="widget-title">Search</h3>

				<form className="search-form">
					<label>
						<input
							type="search"
							className="search-field"
							placeholder="Search..."
						/>
					</label>
					<button type="submit">
						<i className="bx bx-search-alt"></i>
					</button>
				</form>
			</div>

			<div className="widget widget_edemy_posts_thumb">
				<h3 className="widget-title">Popular Posts</h3>

				<div className="item">
					<Link href="#" className="thumb">
						<span className="fullimage cover bg1" role="img"></span>
					</Link>
					<div className="info">
						<span>June 10, 2020</span>
						<h4 className="title usmall">
							<Link href="#">
								Ultimate Bali Guide + Where to stay in Bali 2020
							</Link>
						</h4>
					</div>

					<div className="clear"></div>
				</div>

				<div className="item">
					<Link href="#" className="thumb">
						<span className="fullimage cover bg2" role="img"></span>
					</Link>
					<div className="info">
						<span>June 21, 2020</span>
						<h4 className="title usmall">
							<Link href="#">
								Live the Island life: 20 unique Islands to visit
								in 2020
							</Link>
						</h4>
					</div>

					<div className="clear"></div>
				</div>

				<div className="item">
					<Link href="#" className="thumb">
						<span className="fullimage cover bg3" role="img"></span>
					</Link>
					<div className="info">
						<span>June 30, 2020</span>
						<h4 className="title usmall">
							<Link href="#">
								Best Places to Visit in Europe this Autumn &
								Winter
							</Link>
						</h4>
					</div>

					<div className="clear"></div>
				</div>
			</div>

			<div className="widget widget_categories">
				<h3 className="widget-title">Categories</h3>

				<ul>
					<li>
						<Link href="#">
							Design <span className="post-count">(03)</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							Lifestyle <span className="post-count">(05)</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							Script <span className="post-count">(10)</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							Device <span className="post-count">(08)</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							Tips <span className="post-count">(01)</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="widget widget_tag_cloud">
				<h3 className="widget-title">Popular Tags</h3>

				<div className="tagcloud">
					<Link href="#">
						Business <span className="tag-link-count"> (3)</span>
					</Link>

					<Link href="#">
						Design <span className="tag-link-count"> (3)</span>
					</Link>

					<Link href="#">
						Braike <span className="tag-link-count"> (2)</span>
					</Link>

					<Link href="#">
						Fashion <span className="tag-link-count"> (2)</span>
					</Link>

					<Link href="#">
						Travel <span className="tag-link-count"> (1)</span>
					</Link>

					<Link href="#">
						Smart <span className="tag-link-count"> (1)</span>
					</Link>

					<Link href="#">
						Marketing <span className="tag-link-count"> (1)</span>
					</Link>

					<Link href="#">
						Tips <span className="tag-link-count"> (2)</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogSidebar;
