import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { top1, top2, top3 } from "../static";

interface BackgroundProps {
	background: string;
}

export const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			<BackgroundImage background={top1}>
				<Subtitle>The space is waiting for</Subtitle>
				<Title>YOU</Title>
			</BackgroundImage>
			<BackgroundImage background={top3}>
				<Subtitle>The space is waiting for</Subtitle>
				<Title>YOU</Title>
			</BackgroundImage>
			<BackgroundImage background={top2}>
				<Subtitle>The space is waiting for</Subtitle>
				<Title>YOU</Title>
			</BackgroundImage>
		</Slider>
	);
};

const BackgroundImage = styled.div<BackgroundProps>`
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	height: 100vh;
	width: 100vw;
	z-index: -5;
`;
const Subtitle = styled.div`
	text-align: center;
	font-size: 48px;
	line-height: 60px;
	font-weight: 800;
`;
const Title = styled.div`
	transform: translateX(10px);
	text-align: center;
	font-size: 316px;
	line-height: 250px;
	font-weight: 800;
`;
