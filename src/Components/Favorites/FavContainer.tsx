import React from "react";
import styled from "styled-components";
import { TourItem } from "../Home/TourItem";
import { posts } from "../../utils/mockData";
import { IPost } from "../Home/Tours";

export const FavContainer = () => {
	return (
		<Wrapper>
			<ClearButton>Clear all</ClearButton>
			<ToursContainer>
				{posts.slice(0, 2).map((el: IPost) => {
					return <TourItem key={el.id} {...el} />;
				})}
			</ToursContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	padding: 64px 10px 0;
`;
const ClearButton = styled.div`
	color: #556b84;
	text-align: right;
	font-size: 24px;
	font-family: Lato;
	font-weight: 300;
	margin-bottom: 40px;
	text-transform: capitalize;
	cursor: pointer;
`;
const ToursContainer = styled.div`
	display: flex;
	gap: 24px;
	margin-bottom: 40px;
`;
