"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurStory = () => {
	return (
		<div className="our-story-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12">
						<div className="our-story-title">
							<h3>
								<span className="number">1</span> Inspirational
								stories are less about success
							</h3>
						</div>
					</div>

					<div className="col-lg-8 col-md-12">
						<div className="our-story-content">
							<p>
								<Link href="#">eDdemy.com</Link> began in 2005.
								After years in the web hosting industry, we
								realized that it was near impossible for the
								average Jane or Joe to create their own website.
								Traditional web hosting services were simply too
								complicated, time consuming, and expensive to
								manage.
							</p>
							<p>
								After seeing an increased need for eCommerce
								solutions, we developed one of the only
								fully-featured, free and commission-free online
								store builders, allowing business owners to
								launch their online business.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<div className="our-story-title">
							<h3>
								<span className="number">2</span> Academic
								Excellence and Cultural Diversity
							</h3>
						</div>
					</div>

					<div className="col-lg-8 col-md-12">
						<div className="our-story-content">
							<p>
								We created the <Link href="#">eDdemy.com</Link>{" "}
								Site Builder with the user's perspective in
								mind. We wanted to offer a platform that would
								require no coding skills or design experience.
								We keep it simple, so users can focus on
								creating an amazing website that reflects their
								brand. Best of all - it's free. You can get
								online, showcase your brand, or start selling
								products right away.
							</p>
							<p>
								After seeing an increased need for eCommerce
								solutions, we developed one of the only
								fully-featured, free and commission-free online
								store builders, allowing business owners to
								launch their online business.
							</p>
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="our-story-image">
							<Image
								src="/images/story-img.jpg"
								width={1230}
								height={510}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<div className="our-story-title">
							<h3>
								<span className="number">3</span> A
								classNameical Education for the Future
							</h3>
						</div>
					</div>

					<div className="col-lg-8 col-md-12">
						<div className="our-story-content">
							<p>
								<Link href="#">eDdemy.com</Link> began in 2005.
								After years in the web hosting industry, we
								realized that it was near impossible for the
								average Jane or Joe to create their own website.
								Traditional web hosting services were simply too
								complicated, time consuming, and expensive to
								manage.
							</p>
							<p>
								After seeing an increased need for eCommerce
								solutions, we developed one of the only
								fully-featured, free and commission-free online
								store builders, allowing business owners to
								launch their online business.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<div className="our-story-title">
							<h3>
								<span className="number">4</span> A
								success-oriented learning environment
							</h3>
						</div>
					</div>

					<div className="col-lg-8 col-md-12">
						<div className="our-story-content">
							<p>
								We created the <Link href="#">eDdemy.com</Link>{" "}
								Site Builder with the user's perspective in
								mind. We wanted to offer a platform that would
								require no coding skills or design experience.
								We keep it simple, so users can focus on
								creating an amazing website that reflects their
								brand. Best of all - it's free. You can get
								online, showcase your brand, or start selling
								products right away.
							</p>
							<p>
								After seeing an increased need for eCommerce
								solutions, we developed one of the only
								fully-featured, free and commission-free online
								store builders, allowing business owners to
								launch their online business.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;
