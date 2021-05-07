import { MainConfig } from 'src/config/MainConfig';
import { IStyle } from 'src/utils/HTMLElementCreator';

export class BackgroundSettingsConfig implements IBackgroundSettingsConfig {

	protected mainConfig = new MainConfig();

	// public uploadPage: IUploadPage = {
	// 	uploadImageButton: {
	// 		label: {
	// 			id: 'uploadLabel_IMAGE',
	// 			htmlFor: 'uploadInput_IMAGE',
	// 			position: 'relative',
	// 			x: 50,
	// 			y: 50,
	// 			fontSize: 20,
	// 			padding: '6px 12px',
	// 			textContent: 'Upload PNG : ',
	// 			display: 'inline-block'
	// 		},
	// 		input: {
	// 			id: 'uploadInput_IMAGE',
	// 			type: 'file',
	// 			accept: '.png',
	// 			position: 'relative',
	// 			x: 50,
	// 			y: 50,
	// 			fontSize: 20
	// 		}
	// 	},
	// 	uploadAtlasButton: {
	// 		label: {
	// 			id: 'uploadLabel_ATLAS',
	// 			htmlFor: 'uploadInput_ATLAS',
	// 			position: 'relative',
	// 			x: 50,
	// 			y: 100,
	// 			fontSize: 20,
	// 			padding: '6px 12px',
	// 			textContent: 'Upload ATLAS : ',
	// 			display: 'inline-block'
	// 		},
	// 		input: {
	// 			id: 'uploadInput_ATLAS',
	// 			type: 'file',
	// 			accept: '.atlas',
	// 			position: 'relative',
	// 			x: 50,
	// 			y: 100,
	// 			fontSize: 20
	// 		}
	// 	},
	// 	uploadJsonButton: {
	// 		label: {
	// 			id: 'uploadLabel_JSON',
	// 			htmlFor: 'uploadInput_JSON',
	// 			position: 'relative',
	// 			x: 50,
	// 			y: 150,
	// 			fontSize: 20,
	// 			padding: '6px 12px',
	// 			textContent: 'Upload JSON : ',
	// 			display: 'inline-block'
	// 		},
	// 		input: {
	// 			id: 'uploadInput_JSON',
	// 			type: 'file',
	// 			accept: '.json',
	// 			position: 'relative',
	// 			x: 50,
	// 			y: 150,
	// 			fontSize: 20
	// 		}
	// 	},
	// 	confirmButton: {
	// 		id: 'uploadConfirmButton',
	// 		type: 'button',
	// 		value: 'Confirm',
	// 		position: 'relative',
	// 		x: 65,
	// 		y: 200,
	// 		fontSize: 20
	// 	}
	// };

	public buttonContainer: IStyle = {
		id: 'backgroundPalette',
		position: 'relative',
		x: this.mainConfig.width,
		y: -this.mainConfig.height,
		width: 50,
		height: this.mainConfig.height,
		background: 'linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(255,255,255,1) 50%, rgba(237,237,237,1) 100%)'
	};

	public addImageButton: IInputWithLabel = {
		input: {
			id: 'addImageInput',
			display: 'none',
			type: 'file'
		},
		label: {
			id: 'addImageLabel',
			position: 'relative',
			width: 36,
			height: 16,
			border: '2px solid #000000',
			background: '#DADADA',
			display: 'inline-block',
			textContent: '+Img',
			fontSize: 15,
			fontWeight: 'bold',
			padding: '15 5',
			htmlFor: 'addImageInput'
		}
	};
}

export interface IBackgroundSettingsConfig {
	// uploadPage: IUploadPage;
	buttonContainer: IStyle;
	addImageButton: IInputWithLabel;
}

export interface IPoint {
	x: number;
	y: number;
}

export interface IUploadPage {
	uploadImageButton: {
		label: IStyle;
		input: IStyle;
	};
	uploadAtlasButton: {
		label: IStyle;
		input: IStyle;
	};
	uploadJsonButton: {
		label: IStyle;
		input: IStyle;
	};
	confirmButton: IStyle;
}

export interface IAnimationPosition {
	title: IStyle;
	posX: IStyle;
	posY: IStyle;
}

export interface IInputWithLabel {
	label: IStyle;
	input: IStyle;
}

export interface ISpineScaleSettings {
	label: IStyle;
	container: IStyle;
	scaleDownButton: IStyle;
	scaleUpButton: IStyle;
	scaleAmountText: IStyle;
}

export interface ISingleAnimationDemo {
	title: IStyle;
	buttonContainer: IStyle;
	animationButton: IStyle;
	loopCheckbox: ILoopCheckbox;
}

export interface ILoopCheckbox {
	label: IStyle;
	input: IStyle;
}

export interface IAnimationMixer {
	title: IStyle;
	container: IStyle;
	mixGroup: IMixGroup;
	playButton: IStyle;
	addButton: IStyle;
}

export interface IMixGroup {
	container: IStyle;
	track: ITrack;
	addTrackButton: IStyle;
}

export interface ITrack {
	title: IStyle;
	container: IStyle;
	firstAnimationButton: IInputAnimationButton;
	lastAnimationButton: IInputAnimationButton;
	mixin: IMixin;
	colorList: Array<string>;
}

export interface IInputAnimationButton {
	label: IStyle,
	button: IStyle
}

export interface IMixin {
	label: IStyle,
	input: IStyle
}

export enum ElementColor {
	TITLE = '#4A4A4A',
	INBOX_SHADOW = 'inset 0px 0px 12px -2px #919191'
}