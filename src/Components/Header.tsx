import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { logo } from "../static";

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<NavLink to="/home">
					<img src={logo} alt="logo" />
				</NavLink>
				<nav>
					<HeaderMenu>
						<li>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li> tours</li>
						<li> about</li>
						<li>about </li>
					</HeaderMenu>
				</nav>
				<RightSideMenu>
					<HeardButton>
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
								d="M6.98311 3.31529C3.31152 4.49738 1.67386 8.50569 2.90482 12.3295C3.52947 14.1301 4.54534 15.7485 5.88004 17.0762C7.71101 18.8545 9.72254 20.4194 11.8849 21.7491L12.1304 21.8961C12.3656 22.0369 12.6598 22.0344 12.8926 21.8897L13.1218 21.7473C15.2812 20.4194 17.2927 18.8545 19.1174 17.0824C20.4584 15.7485 21.4743 14.1301 22.0937 12.3452C23.3291 8.50801 21.6847 4.4978 18.012 3.31535L17.7463 3.23623C16.0624 2.77309 14.273 3.0013 12.7645 3.85535L12.4964 4.01429L12.233 3.85623C10.6419 2.95344 8.7404 2.75003 6.98311 3.31529ZM11.8746 5.35427L12.0714 5.49538C12.3307 5.68111 12.6806 5.67742 12.936 5.48625C14.266 4.49057 15.9873 4.20082 17.5641 4.70669C20.4097 5.62284 21.7047 8.78096 20.7064 11.882C20.165 13.4417 19.2687 14.8696 18.0916 16.0405L17.5636 16.5421C16.141 17.8642 14.6026 19.061 12.9691 20.1156L12.5013 20.4098L12.644 20.4998C10.5805 19.2308 8.65375 17.7319 6.90582 16.0343C5.73505 14.8696 4.83877 13.4417 4.29207 11.8664C3.29808 8.77801 4.58746 5.62212 7.43153 4.70646C8.93331 4.22339 10.5706 4.46289 11.8746 5.35427ZM16.3703 6.98374C15.9855 6.86093 15.5739 7.07304 15.451 7.45749C15.3281 7.84194 15.5404 8.25316 15.9252 8.37597C16.6814 8.61735 17.2206 9.29803 17.2881 10.101C17.322 10.5031 17.6757 10.8017 18.0782 10.7679C18.4807 10.7341 18.7796 10.3807 18.7457 9.97853C18.6288 8.58859 17.6917 7.40551 16.3703 6.98374Z"
								fill="#1E1E1E"
							/>
						</svg>
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
		&:not(:last-child) {
			margin-right: 32px;
		}
	}
`;
const HeardButton = styled.div`
	background: #ececec;
	display: flex;
	width: 53px;
	height: 53px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-right: 12px;
`;
const SignInButton = styled.div`
	display: flex;
	width: 163px;
	padding: 12px 0px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	background: #d3eaff;
	color: #000;
	text-align: center;
	font-size: 24px;
	height: 53px;
	font-weight: 600;
`;
const RightSideMenu = styled.div`
	display: flex;
	align-items: center;
`;
