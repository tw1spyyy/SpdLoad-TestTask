import React from "react";
import styled from "styled-components";
import { top1 } from "../static";

export const TopPage = () => {
	return (
		<Wrapper>
			<Subtitle>The space is waiting for</Subtitle>
			<Title>YOU</Title>
			<ExploreButton>
				<div>Explore tours</div>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.4572 32.9167V7.91667"
						stroke="white"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M30.4978 22.8337L20.4578 32.917L10.4162 22.8337"
						stroke="white"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</ExploreButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-image: url(${top1});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	display: flex;
	justify-content: center;
	flex-direction: column;
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
const ExploreButton = styled.div`
	position: absolute;
	bottom: 33px;
	display: flex;
	width: 100%;
	justify-content: center;
	& > div {
		display: inline;
		font-family: "Lato", sans-serif;
		text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		font-size: 32px;
		line-height: 40px;
		font-weight: 300;
		text-transform: capitalize;
		cursor: pointer;
	}
	& > svg {
		margin-top: -2px;
		margin-left: 8px;
		cursor: pointer;
	}
`;
