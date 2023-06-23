import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Header } from "./Components/Header";

export const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</div>
	);
};
