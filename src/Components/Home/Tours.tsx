import React, { useState } from "react";
import { css, styled } from "styled-components";
import { tour1, tour2, tour3 } from "../../static";
import { posts } from "../../utils/mockData";
import { NextArrow, PrevArrow } from "../../utils/svgs";
import { TourItem } from "./TourItem";

export interface IPost {
	id: number;
	img: string;
	title: string;
	text: string;
}
interface IDot {
	isactive?: string;
}
interface IArrowButton {
	disabled?: boolean;
}
export const Tours = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const onNextPage = () => {
		if (currentPage < 2) {
			console.log(currentPage);

			setCurrentPage(currentPage + 1);
		}
	};
	const onPrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<Wrapper>
			<Container>
				<ToursHeader>
					<Title>popular tours</Title>
					<ToursButtons>
						<ArrowButton disabled={currentPage === 0} onClick={onPrevPage}>
							<PrevArrow />
						</ArrowButton>
						<ArrowButton disabled={currentPage === 2} onClick={onNextPage}>
							<NextArrow />
						</ArrowButton>
					</ToursButtons>
				</ToursHeader>
				<ToursContainer>
					{posts.slice(currentPage * 3, currentPage * 3 + 3).map((el: IPost) => {
						return <TourItem key={el.id} {...el} />;
					})}
				</ToursContainer>
				<Dots>
					{[0, 1, 2].map((el: number) => {
						return (
							<Dot
								onClick={() => setCurrentPage(el)}
								key={el}
								isactive={el === currentPage ? "active" : ""}
							>
								<div></div>
							</Dot>
						);
					})}
				</Dots>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 96px;
	color: #000;
`;
const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 10px;
`;
const ToursHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 44px;
`;
const ToursButtons = styled.div`
	display: flex;
	transform: translateX(-92px);
	width: 10px;
	gap: 16px;
`;
const Title = styled.h4`
	color: #1e1e1e;
	text-align: center;
	font-size: 32px;
	font-weight: 800;
`;

const ToursContainer = styled.div`
	display: flex;
	gap: 24px;
	margin-bottom: 40px;
`;

const ArrowButton = styled.div<IArrowButton>`
	display: flex;
	padding: 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	background: #ececec;
	cursor: pointer;
	transition: 0.2s;
	${({ disabled }) => {
		if (disabled) {
			return css`
				background: #f8f8f8;
				cursor: auto;
			`;
		} else {
			return css`
				&:hover {
					background: #cdc5c5;
					transition: 0.2s;
				}
			`;
		}
	}}
`;
const Dots = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	& > div {
		&:not(:last-child) {
			margin-right: 8px;
		}
	}
`;
const Dot = styled.div<IDot>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid #1e1e1e;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	& > div {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #1e1e1e;
		opacity: 0;
	}
	${({ isactive }) => {
		if (isactive) {
			return css`
				& > div {
					opacity: 1;
				}
			`;
		}
	}}
`;
