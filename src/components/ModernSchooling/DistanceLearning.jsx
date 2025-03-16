"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const DistanceLearning = () => {
	return (
		<div className="overview-area ptb-100">
			<div className="container">
				<div className="overview-box">
					<div className="overview-content">
						<span className="sub-title">Distance Learning</span>
						<h2>
							Feel Like You Are Attending Your classNamees
							Physically!
						</h2>
						<p>
							eCademy training programs can bring you a super
							exciting experience of learning through online! You
							never face any negative experience while enjoying
							your classNamees virtually by sitting in your
							comfort zone. Our flexible learning initiatives will
							help you to learn better and quicker than the
							traditional ways of learning skills.
						</p>

						<Link href="#" className="default-btn">
							<i className="flaticon-user"></i> Get Started Now{" "}
							<span></span>
						</Link>
					</div>

					<div className="overview-image">
						<Image
							src="/images/overview-img1.png"
							width={658}
							height={508}
							alt="image"
						/>
					</div>
				</div>

				<div className="overview-box">
					<div className="overview-image">
						<Image
							src="/images/overview-img2.png"
							width={554}
							height={512}
							alt="image"
						/>
					</div>

					<div className="overview-content">
						<span className="sub-title">eCademy Mobile App</span>
						<h2>
							Access From Your Mobile, Learn Any Time Any Where
						</h2>
						<p>
							eCademy training programs can bring you a super
							exciting experience of learning through online! You
							never face any negative experience while enjoying
							your classNamees virtually by sitting in your
							comfort zone. Our flexible learning initiatives will
							help you to learn better and quicker than the
							traditional ways of learning skills.
						</p>

						<div className="btn-box">
							<Link href="#" className="playstore-btn">
								<Image
									src="/images/playstore.png"
									width={27}
									height={30}
									alt="image"
								/>
								GET IT ON
								<span>Google Play</span>
							</Link>

							<Link href="#" className="applestore-btn">
								<Image
									src="/images/applestore.png"
									width={34}
									height={35}
									alt="image"
								/>
								GET IT ON
								<span>Apple Store</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="shape2">
				<Image
					src="/images/shape2.png"
					width={206}
					height={258}
					alt="image"
				/>
			</div>
			<div className="shape3">
				<Image
					src="/images/shape3.png"
					width={150}
					height={150}
					alt="image"
				/>
			</div>
			<div className="shape4">
				<Image
					src="/images/shape4.png"
					width={26}
					height={26}
					alt="image"
				/>
			</div>
			<div className="shape9">
				<Image
					src="/images/shape8.svg"
					width={22}
					height={22}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default DistanceLearning;
