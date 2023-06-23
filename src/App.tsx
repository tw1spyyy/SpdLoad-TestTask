import React from "react";
import { Routes, Route, Navigate } from "react-router";

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/home" element />
				<Route path="/favorites" element />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</div>
	);
};
