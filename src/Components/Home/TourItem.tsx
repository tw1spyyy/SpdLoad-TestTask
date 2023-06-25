import React from "react";
import styled, { css } from "styled-components";
import { AddToFavSvg, DeleteSvg, WhiteHeard } from "../../utils/svgs";
import { useDispatch, useSelector } from "react-redux";
import { onAddToFavorites } from "../../store/reducers/favorites";
import { RootState } from "../../store";
import { ButtonProps, Props } from "../../types/interfaces";

export const TourItem = ({ tour, isFavorite = false }: Props) => {
	const { id, img, title, text } = tour;

	const dispatch = useDispatch();

	const { favorites } = useSelector((state: RootState) => state.favorites);

	const onAddToFav = () => {
		dispatch(onAddToFavorites(tour));
	};

	return (
		<ToursItem>
			<img src={img} alt="tour" />
			<h5>{title}</h5>
			<ToursItemText>{text}</ToursItemText>
			<ToursItemButtons>
				<BuyButton>buy</BuyButton>
				{isFavorite ? (
					<AddToFavouritesButton onClick={onAddToFav}>
						<DeleteSvg />
					</AddToFavouritesButton>
				) : (
					<AddToFavouritesButton
						isActive={!!favorites.find((el) => el.id === id)}
						onClick={onAddToFav}
					>
						{!!favorites.find((el) => el.id === id) ? <WhiteHeard /> : <AddToFavSvg />}
					</AddToFavouritesButton>
				)}
			</ToursItemButtons>
		</ToursItem>
	);
};
const ToursItem = styled.div`
	width: 411px;
	border: 1px solid #d3eaff;
	& > img {
		height: 296px;
		margin-bottom: 32px;
	}
	& > h5 {
		color: #1e1e1e;
		text-align: center;
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
		margin-bottom: 16px;
	}
`;
const ToursItemText = styled.div`
	color: #556b84;
	text-align: center;
	font-size: 24px;
	line-height: 30px;
	font-weight: 300;
	margin-bottom: 64px;
	text-transform: capitalize;
	font-family: "Lato", sans-serif;
`;
const ToursItemButtons = styled.div`
	display: flex;
	margin: 0 auto 24px;
	width: 348px;
	& > div {
		cursor: pointer;
	}
`;
const BuyButton = styled.div`
	color: #000;
	text-align: center;
	font-size: 24px;
	font-family: Syne;
	font-weight: 600;
	text-transform: uppercase;
	display: flex;
	padding: 12px 0px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
	background: #d3eaff;
	height: 53px;
	margin-right: 16px;
	transition: 0.2s;
	&:hover {
		background: #cad8e5;
		transition: 0.2s;
	}
`;
const AddToFavouritesButton = styled.div<ButtonProps>`
	display: flex;
	width: 53px;
	height: 53px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	align-self: stretch;
	background: #ececec;
	transition: 0.2s;
	&:hover {
		background: #cdc5c5;
		transition: 0.2s;
	}
	${({ isActive }) => {
		if (isActive) {
			return css`
				background: #dd377d;
				&:hover {
					background: #fa006a;
				}
			`;
		}
	}}
`;
