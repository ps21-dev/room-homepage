//Images
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";

const BottomPage = () => {
	return (
		<div>
			<div className='bottom-page'>
				<img src={aboutDark} alt='about-dark' />
				<div className='about-text'>
					<h4>ABOUT OUR FURNITURE</h4>
					<p>
						Our multifunctional blends design and function to suit your individual taste. Make each room
						unique, or pick a cohesive theme that best express your interests and what inspire you. Find the
						furniture pieces you need from traditional to contemporary styles or anything in between.
						Product specialists are available to help you create your dream space.
					</p>
				</div>
				<img src={aboutLight} alt='about-light' />
			</div>
		</div>
	);
};

export default BottomPage;
