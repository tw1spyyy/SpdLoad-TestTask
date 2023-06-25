import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../../Components/Home/Tours";

interface ProfileState {
	favorites: IPost[];
}

const initialState: ProfileState = {
	favorites: [],
};

export const favorites = createSlice({
	name: "user/notifications",
	initialState,
	reducers: {
		onAddToFavorites: (state, action) => {
			const element = state.favorites.find((el) => el.id === action.payload.id);
			if (element) {
				state.favorites = state.favorites.filter((el) => el.id !== element.id);
			} else {
				state.favorites = [...state.favorites, action.payload];
			}
		},
		onClearAll: (state) => {
			state.favorites = [];
		},
	},
});

export const { reducer: favoritesReducer, actions: favoritesActions } = favorites;

export const { onAddToFavorites, onClearAll } = favoritesActions;
