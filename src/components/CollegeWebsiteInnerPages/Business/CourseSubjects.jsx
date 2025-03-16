"use client";

import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

const CourseSubjects = () => {
	return (
		<>
			<div className="pb-100">
				<div className="container">
					<div className="section-title">
						<h2 className="playfair-display-font">
							All the subjects covered under the business course
						</h2>
					</div>

					<Accordion preExpanded={["a"]} className="cw-accordion">
						<AccordionItem uuid="a">
							<AccordionItemHeading>
								<AccordionItemButton>
									Business studies
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="b">
							<AccordionItemHeading>
								<AccordionItemButton>
									Management studies
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="c">
							<AccordionItemHeading>
								<AccordionItemButton>
									Finance
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="d">
							<AccordionItemHeading>
								<AccordionItemButton>
									Accounting
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="e">
							<AccordionItemHeading>
								<AccordionItemButton>
									Marketing
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="f">
							<AccordionItemHeading>
								<AccordionItemButton>
									Hospitality and tourism
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="g">
							<AccordionItemHeading>
								<AccordionItemButton>
									Digital business
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>

						<AccordionItem uuid="h">
							<AccordionItemHeading>
								<AccordionItemButton>
									Sport management
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<h4>Key benefits</h4>

								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<p>
									Proin eget tortor risus. Proin eget tortor
									risus. Donec sollicitudin molestie
									malesuada. Vivamus suscipit tortor eget
									felis porttitor volutpat. Curabitur non
									nulla sit amet nisl tempus convallis quis ac
									lectus. Cras ultricies ligula sed magna
									dictum porta. Proin eget tortor risus. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit. Proin eget tortor risus. Donec rutrum
									congue leo eget malesuada. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Quisque velit nisi, pretium ut
									lacinia in, elementum id enim. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>

								<h4>Course aims</h4>
								<p>
									Nulla quis lorem ut libero malesuada
									feugiat. Nulla quis lorem ut libero
									malesuada feugiat. Praesent sapien massa,
									convallis a pellentesque nec, egestas non
									nisi. Quisque velit nisi, pretium ut lacinia
									in, elementum id enim. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Curabitur non nulla sit amet nisl tempus
									convallis quis ac lectus. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
								</p>

								<h4>Special features</h4>
								<p>
									Donec rutrum congue leo eget malesuada.
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vivamus suscipit tortor
									eget felis porttitor volutpat. Vivamus magna
									justo, lacinia eget consectetur sed,
									convallis at tellus. Quisque velit nisi,
									pretium ut lacinia in, elementum id enim.
									Vivamus magna justo, lacinia eget
									consectetur sed, convallis at tellus.
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</>
	);
};

export default CourseSubjects;
