import React from "react";
import styled from "styled-components";
import { fav } from "../../static";

export const FavTop = () => {
	return (
		<Wrapper>
			<Title>favourites</Title>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: 440px;
	width: 100%;
	background-image: url(${fav});
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	background-size: cover;
	background-position: center top;
	position: relative;
	padding-top: 220px;
	z-index: -1;
	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: "";
		opacity: 0.6399999856948853;
		background: #1e1e1e;
	}
`;
const Title = styled.h2`
	color: #fff;
	text-align: center;
	font-size: 60px;
	line-height: 60px;
	font-weight: 800;
	z-index: 3 !important;
`;
