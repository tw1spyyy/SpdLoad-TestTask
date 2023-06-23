import React from "react";
import { css, styled } from "styled-components";
import { tour1, tour2, tour3 } from "../static";

export const Tours = () => {
	return (
		<Wrapper>
			<Container>
				<ToursHeader>
					<Title>popular tours</Title>
					<ToursButtons>
						<ArrowButton>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.5 5L8.5 12L15.5 19"
									stroke="#200E32"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</ArrowButton>
						<ArrowButton>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.5 5L15.5 12L8.5 19"
									stroke="#200E32"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</ArrowButton>
					</ToursButtons>
				</ToursHeader>
				<ToursContainer>
					<ToursItem>
						<img src={tour1} alt="tour1" />
						<h5>extraordinary tour</h5>
						<ToursItemText>Lorem ipsum dolor sit amet consectetur adipiscing elit</ToursItemText>
						<ToursItemButtons>
							<BuyButton>buy</BuyButton>
							<AddToFavouritesButton>
								<svg
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.261 21.3538C10.0904 20.0179 8.07111 18.4456 6.23929 16.6652C4.95144 15.3829 3.97101 13.8198 3.3731 12.0954C2.29714 8.75031 3.55393 4.92083 7.07112 3.78752C8.91961 3.19243 10.9384 3.53255 12.4961 4.70148C14.0543 3.53398 16.0725 3.19398 17.9211 3.78752C21.4383 4.92083 22.7041 8.75031 21.6281 12.0954C21.0302 13.8198 20.0498 15.3829 18.7619 16.6652C16.9301 18.4456 14.9108 20.0179 12.7402 21.3538L12.5051 21.5L12.261 21.3538Z"
										stroke="#200E32"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.2393 7.55304C17.3046 7.89334 18.0615 8.84974 18.1561 9.97502"
										stroke="#200E32"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</AddToFavouritesButton>
						</ToursItemButtons>
					</ToursItem>
					<ToursItem>
						<img src={tour2} alt="tour2" />
						<h5>extraordinary tour</h5>
						<ToursItemText>Lorem ipsum dolor sit amet consectetur adipiscing elit</ToursItemText>
						<ToursItemButtons>
							<BuyButton>buy</BuyButton>
							<AddToFavouritesButton>
								<svg
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.261 21.3538C10.0904 20.0179 8.07111 18.4456 6.23929 16.6652C4.95144 15.3829 3.97101 13.8198 3.3731 12.0954C2.29714 8.75031 3.55393 4.92083 7.07112 3.78752C8.91961 3.19243 10.9384 3.53255 12.4961 4.70148C14.0543 3.53398 16.0725 3.19398 17.9211 3.78752C21.4383 4.92083 22.7041 8.75031 21.6281 12.0954C21.0302 13.8198 20.0498 15.3829 18.7619 16.6652C16.9301 18.4456 14.9108 20.0179 12.7402 21.3538L12.5051 21.5L12.261 21.3538Z"
										stroke="#200E32"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.2393 7.55304C17.3046 7.89334 18.0615 8.84974 18.1561 9.97502"
										stroke="#200E32"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</AddToFavouritesButton>
						</ToursItemButtons>
					</ToursItem>
					<ToursItem>
						<img src={tour3} alt="tour3" />
						<h5>extraordinary tour</h5>
						<ToursItemText>Lorem ipsum dolor sit amet consectetur adipiscing elit</ToursItemText>
						<ToursItemButtons>
							<BuyButton>buy</BuyButton>
							<AddToFavouritesButton>
								<svg
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.261 21.3538C10.0904 20.0179 8.07111 18.4456 6.23929 16.6652C4.95144 15.3829 3.97101 13.8198 3.3731 12.0954C2.29714 8.75031 3.55393 4.92083 7.07112 3.78752C8.91961 3.19243 10.9384 3.53255 12.4961 4.70148C14.0543 3.53398 16.0725 3.19398 17.9211 3.78752C21.4383 4.92083 22.7041 8.75031 21.6281 12.0954C21.0302 13.8198 20.0498 15.3829 18.7619 16.6652C16.9301 18.4456 14.9108 20.0179 12.7402 21.3538L12.5051 21.5L12.261 21.3538Z"
										stroke="#200E32"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.2393 7.55304C17.3046 7.89334 18.0615 8.84974 18.1561 9.97502"
										stroke="#200E32"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</AddToFavouritesButton>
						</ToursItemButtons>
					</ToursItem>
				</ToursContainer>
				<Dots>
					<Dot active>
						<div></div>
					</Dot>
					<Dot>
						{" "}
						<div></div>
					</Dot>
					<Dot>
						{" "}
						<div></div>
					</Dot>
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
`;
const AddToFavouritesButton = styled.div`
	display: flex;
	width: 53px;
	height: 53px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	align-self: stretch;
	background: #ececec;
`;
const ArrowButton = styled.div`
	display: flex;
	padding: 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	background: #ececec;
	cursor: pointer;
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
const Dot = styled.div<Props>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid #1e1e1e;
	display: flex;
	justify-content: center;
	align-items: center;
	& > div {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #1e1e1e;
		opacity: 0;
	}
	${({ active }) => {
		if (active) {
			return css`
				& > div {
					opacity: 1;
				}
			`;
		}
	}}
`;
interface Props {
	active?: boolean;
}
