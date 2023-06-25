import React from "react";
import styled from "styled-components";
import { TourItem } from "../Home/TourItem";
import { posts } from "../../utils/mockData";
import { IPost } from "../Home/Tours";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { onClearAll } from "../../store/reducers/favorites";

export const FavContainer = () => {
	const { favorites } = useSelector((state: RootState) => state.favorites);

	const dispatch = useDispatch();

	const onClearFavorites = () => {
		if (favorites.length > 0)
			if (window.confirm("are u sure u want to delete all posts?")) {
				dispatch(onClearAll());
			}
	};

	return (
		<Wrapper>
			<ClearButton onClick={onClearFavorites}>Clear all</ClearButton>
			<ToursContainer>
				{favorites.map((el: IPost) => {
					return <TourItem key={el.id} isFavorite tour={el} />;
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
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(3, 1fr);
	margin-bottom: 100px;
`;
