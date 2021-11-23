import React from "react";
import ReactPlayer from "react-player/lazy/";

import Video1 from "../../../videos/video1.mp4";
import Video1Thumbnail from "../../../videos/video1.png";

export const ReactVideoPlayer = () => {
	return (
		<ReactPlayer
			url={Video1}
			playing={true}
			width={"100%"}
			height={"100%"}
			muted={true}
			loop={true}
			fallback={<img src={Video1Thumbnail} alt="Video Thumbnail" />}
		/>
	);
};
