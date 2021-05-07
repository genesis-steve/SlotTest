import { BackgroundSettingsConfig, IBackgroundSettingsConfig } from "src/components/external/backgroundSettings/BackgroundSettingsConfig";
import { IReelConfig, ReelConfig } from "src/components/reel/ReelConfig";
import { IMainConfig, MainConfig } from "src/config/MainConfig";
import { IStyle } from "src/utils/HTMLElementCreator";


export class SpinSettingsConfig implements ISpinSettingsConfig {

	protected mainConfig: IMainConfig = new MainConfig();
	protected backgroundSettingsConfig: IBackgroundSettingsConfig = new BackgroundSettingsConfig();
	protected reelConfig: IReelConfig = new ReelConfig();

	public title: IStyle = {
		id: 'spinSettingsTitle',
		textContent: 'Spin Settings',
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFFFFF',
		padding: '10 10',
		background: ElementColor.TITLE,
		lineHeight: 1,
		margin: '10px 0px 0px 0px',
		textAlign: 'center'
	};

	public buttonContainer: IStyle = {
		id: 'singleAnimationDemo',
		position: 'relative',
		overflow: 'auto',
		x: this.mainConfig.width + this.backgroundSettingsConfig.buttonContainer.width,
		y: -this.mainConfig.height - this.backgroundSettingsConfig.buttonContainer.height,
		width: this.mainConfig.width,
		height: this.mainConfig.height,
		padding: '0 10',
		boxShadow: ElementColor.INBOX_SHADOW
	};

	public animationButton: IStyle = {
		fontSize: 15,
		margin: '5 0'
	};

	public spinStartTimeInput: IInputWithLabel = {
		label: {
			id: 'spinStartTimeInputLabel',
			textContent: 'Start spin time interval (ms) : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'spinStartTimeInput',
			type: 'text',
			value: '0',
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'spinStartTimeInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public spinStopTimeInput: IInputWithLabel = {
		label: {
			id: 'spinStopTimeInputLabel',
			textContent: 'Stop spin time interval (ms) : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'spinStopTimeInput',
			type: 'text',
			value: '0',
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'spinStopTimeInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public spinDurationInput: IInputWithLabel = {
		label: {
			id: 'spinningDurationInputLabel',
			textContent: 'Spin duration (ms) : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'spinningDurationInput',
			type: 'text',
			value: this.reelConfig.spinDuration.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'spinningDurationInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public reelTweenDurationInput: IInputWithLabel = {
		label: {
			id: 'reelTweenDurationInputLabel',
			textContent: 'Reel tween duration (ms) : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'reelTweenDurationInput',
			type: 'text',
			value: '100',
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'reelTweenDurationInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};
}

export interface ISpinSettingsConfig {
	title: IStyle;
	buttonContainer: IStyle;
	animationButton: IStyle;
	spinStartTimeInput: IInputWithLabel;
	spinStopTimeInput: IInputWithLabel;
	spinDurationInput: IInputWithLabel;
	reelTweenDurationInput: IInputWithLabel;
}

export interface IInputWithLabel {
	label: IStyle;
	input: IStyle;
	button: IStyle;
}

export enum ElementColor {
	TITLE = '#4A4A4A',
	INBOX_SHADOW = 'inset 0px 0px 12px -2px #919191'
}