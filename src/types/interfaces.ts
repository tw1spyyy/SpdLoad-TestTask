export interface Props {
	tour: IPost;
	isFavorite?: boolean;
}

export interface ButtonProps {
	isActive?: boolean;
}

export interface IPost {
	id: number;
	img: string;
	title: string;
	text: string;
}
export interface IDot {
	isactive?: string;
}
export interface IArrowButton {
	disabled?: boolean;
}
