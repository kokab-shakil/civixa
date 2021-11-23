import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Dashboard from "../../../../images/dashboard.png";

export const CovidCarrousel = () => {
	return (
		<InfiniteCarousel
			slidesToShow={1}
			slidesToScroll={1}
			slidesSpacing={24}
			showSides={true}
			sidesOpacity={0.5}
			sideSize={0.1}
			arrows={true}
			// scrollOnDevice={true}
			breakpoints={[
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						sidesOpacity: 0,
						sideSize: 0,
						arrows: false,
					},
				},
			]}
		>
			<div>
				<img alt="" src={Dashboard} className="img-fluid" />
			</div>
			<div>
				<img alt="" src={Dashboard} className="img-fluid" />
			</div>
			<div>
				<img alt="" src={Dashboard} className="img-fluid" />
			</div>
			<div>
				<img alt="" src={Dashboard} className="img-fluid" />
			</div>
		</InfiniteCarousel>
	);
};
