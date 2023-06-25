import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";
import { logo } from "../static";
import { BlackHeard, WhiteHeard } from "../utils/svgs";

interface IHeardButton {
	isActive: boolean;
}

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const onFavoritesClick = () => {
		navigate("/favorites");
	};

	return (
		<Wrapper>
			<Container>
				<NavLink to="/home">
					<img src={logo} alt="logo" />
				</NavLink>
				<nav>
					<HeaderMenu>
						<HeaderMenuItem isActive={location.pathname === "/home"}>
							<NavLink to="/home">Home</NavLink>
						</HeaderMenuItem>
						<li> tours</li>
						<li> about</li>
						<li>about </li>
					</HeaderMenu>
				</nav>
				<RightSideMenu>
					<HeardButton isActive={location.pathname === "/favorites"} onClick={onFavoritesClick}>
						{location.pathname === "/favorites" ? <WhiteHeard /> : <BlackHeard />}
					</HeardButton>
					<SignInButton>sign in</SignInButton>
				</RightSideMenu>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	border: 1px solid #000;
	background: rgba(30, 30, 30, 0.48);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	height: 80px;
`;
const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 10px;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const HeaderMenu = styled.ul`
	display: flex;

	& > li {
		cursor: pointer;
		&:not(:last-child) {
			margin-right: 32px;
		}
	}
`;
const HeaderMenuItem = styled.li<IHeardButton>`
	position: relative;
	padding-bottom: 4px;
	${({ isActive }) => {
		if (isActive) {
			return css`
				&::after {
					content: "";
					left: 0;
					bottom: 0;
					right: 0;
					width: 100%;
					background: #fff;
					height: 1px;
					position: absolute;
				}
			`;
		}
	}}
`;
const HeardButton = styled.div<IHeardButton>`
	cursor: pointer;
	background: #ececec;
	display: flex;
	width: 53px;
	height: 53px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-right: 12px;
	transition: 0.2s;

	${({ isActive }) => {
		if (isActive) {
			return css`
				background: #dd377d;
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
const SignInButton = styled.div`
	display: flex;
	width: 163px;
	padding: 12px 0px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	gap: 10px;
	background: #d3eaff;
	color: #000;
	text-align: center;
	font-size: 24px;
	height: 53px;
	font-weight: 600;
	transition: 0.2s;
	&:hover {
		background: #cad8e5;
		transition: 0.2s;
	}
`;
const RightSideMenu = styled.div`
	display: flex;
	align-items: center;
`;
