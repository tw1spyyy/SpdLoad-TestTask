import React from "react";
import styled from "styled-components";
import { ExploreSvg } from "../../utils/svgs";
import { SimpleSlider } from "../Slider";

export const TopPage = () => {
	const onExploreTours = () => {
		window.scrollTo({
			top: 900,
			behavior: "smooth",
		});
	};

	return (
		<Wrapper>
			<SimpleSlider />
			<ExploreButton>
				<div onClick={onExploreTours}>Explore tours</div>
				<ExploreSvg />
			</ExploreButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
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
