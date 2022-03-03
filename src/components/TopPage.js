import React, { useState, useEffect } from "react";

//Images
import hero1 from "../images/desktop-image-hero-1.jpg";
import previous from "../images/icon-angle-left.svg";
import next from "../images/icon-angle-right.svg";
import iconArrow from "../images/icon-arrow.svg";
//Router
import { Link } from "react-router-dom";
//Data
import { ProductState } from "./ProductState";

const FirstPage = ({ products }) => {
	const [currentProduct, setCurrentProduct] = useState(0);
	const length = products.length;
	//EventHandlers
	const nextButtonHandler = () => {
		setCurrentProduct(
			currentProduct === length - 1 ? 0 : currentProduct + 1
		);
	};

	const previousButtonHandler = () => {
		setCurrentProduct(
			currentProduct === 0 ? length - 1 : currentProduct - 1
		);
	};
	// console.log(currentProduct);
	return (
		<div>
			{ProductState.map((pictures, index) => {
				return (
					<div key={index}>
						{index === currentProduct && (
							<div className='first-half'>
								<div className='left-promo'>
									<img
										src={pictures.mainImg}
										alt='photosss'
										className='display'
									/>
									<div className='arrows'>
										<button
											onClick={
												previousButtonHandler
											}
											className='previous-button'
										>
											<img
												src={previous}
												alt='previous'
											/>
										</button>
										<button
											onClick={
												nextButtonHandler
											}
											className='next-button'
										>
											<img
												src={next}
												alt='next'
											/>
										</button>
									</div>
								</div>

								<div className='promotion'>
									<div className='promo-text'>
										<h1>{pictures.title}</h1>
										<p>{pictures.description}</p>
										<span className='shop-now'>
											<Link to='/'>
												SHOP NOW{" "}
												<img
													src={iconArrow}
													alt='iconArrow'
												/>
											</Link>
										</span>
									</div>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default FirstPage;
