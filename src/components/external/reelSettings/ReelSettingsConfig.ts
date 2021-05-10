import { BackgroundSettingsConfig, IBackgroundSettingsConfig } from "src/components/external/backgroundSettings/BackgroundSettingsConfig";
import { ISpinSettingsConfig, SpinSettingsConfig } from "src/components/external/spinSettings/SpinSettingsConfig";
import { IReelConfig, ReelConfig } from "src/components/reel/ReelConfig";
import { IMainConfig, MainConfig } from "src/config/MainConfig";
import { IStyle } from "src/utils/HTMLElementCreator";


export class ReelSettingsConfig implements IReelSettingsConfig {

	protected mainConfig: IMainConfig = new MainConfig();
	protected backgroundSettingsConfig: IBackgroundSettingsConfig = new BackgroundSettingsConfig();
	protected spinSettingsConfig: ISpinSettingsConfig = new SpinSettingsConfig();
	protected reelConfig: IReelConfig = new ReelConfig();

	public title: IStyle = {
		id: 'reelSettingsTitle',
		textContent: 'Reel Settings',
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
		x: this.mainConfig.width + this.backgroundSettingsConfig.buttonContainer.width + this.spinSettingsConfig.buttonContainer.width + 20,
		y: -this.mainConfig.height - this.backgroundSettingsConfig.buttonContainer.height - this.spinSettingsConfig.buttonContainer.height,
		width: this.mainConfig.width,
		height: this.mainConfig.height,
		padding: '0 10',
		boxShadow: ElementColor.INBOX_SHADOW
	};

	public reelPositionXInput: IInputWithLabel = {
		label: {
			id: 'reelPositionXInputLabel',
			textContent: 'Reel position x : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'reelPositionXInput',
			type: 'text',
			value: this.reelConfig.position.x.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'reelPositionXInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public reelPositionYInput: IInputWithLabel = {
		label: {
			id: 'reelPositionYInputLabel',
			textContent: 'Reel position y : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'reelPositionYInput',
			type: 'text',
			value: this.reelConfig.position.y.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'reelPositionYInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public stripAmountInput: IInputWithLabel = {
		label: {
			id: 'stripAmountInputLabel',
			textContent: 'Strip amount : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'stripAmountInput',
			type: 'text',
			value: this.reelConfig.reelStripAmount.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'stripAmountInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public symbolAmountInput: IInputWithLabel = {
		label: {
			id: 'symbolAmountInputLabel',
			textContent: 'Symbol amount : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'symbolAmountInput',
			type: 'text',
			value: this.reelConfig.symbolPerStrip.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'symbolAmountInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public stripIntervalXInput: IInputWithLabel = {
		label: {
			id: 'stripIntervalXInputLabel',
			textContent: 'Strip position x interval : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'stripIntervalXInput',
			type: 'text',
			value: this.reelConfig.reelStrip.stripIntervalX.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'stripIntervalXInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public stripIntervalYInput: IInputWithLabel = {
		label: {
			id: 'stripIntervalYInputLabel',
			textContent: 'Strip position y interval : ',
			fontSize: 15,
			margin: '5 0'
		},
		input: {
			id: 'stripIntervalYInput',
			type: 'text',
			value: this.reelConfig.reelStrip.stripIntervalY.toString(),
			fontSize: 15,
			margin: '5 0',
			width: 100
		},
		button: {
			id: 'stripIntervalYInputButton',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public uploadSymbolImageInput: IInputWithLabel = {
		label: {
			id: 'uploadLabel_IMAGE',
			htmlFor: 'uploadInput_IMAGE',
			textContent: 'Upload PNG : ',
			fontSize: 15,
			margin: '20 0 5 0',
			display: 'inline-block'
		},
		input: {
			id: 'uploadInput_IMAGE',
			type: 'file',
			accept: '.png',
			fontSize: 15
		},
		button: {
			id: 'uploadConfirm_IMAGE',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};

	public uploadSymbolJsonInput: IInputWithLabel = {
		label: {
			id: 'uploadLabel_JSON',
			htmlFor: 'uploadInput_JSON',
			textContent: 'Upload JSON : ',
			fontSize: 15,
			margin: '20 0 5 0',
			display: 'inline-block'
		},
		input: {
			id: 'uploadInput_JSON',
			type: 'file',
			accept: '.json',
			fontSize: 15
		},
		button: {
			id: 'uploadConfirm_JSON',
			textContent: 'Set',
			fontSize: 15,
			margin: '5 0 5 0'
		}
	};
}

export interface IReelSettingsConfig {
	title: IStyle;
	buttonContainer: IStyle;
	reelPositionXInput: IInputWithLabel;
	reelPositionYInput: IInputWithLabel;
	stripAmountInput: IInputWithLabel;
	symbolAmountInput: IInputWithLabel;
	stripIntervalXInput: IInputWithLabel;
	stripIntervalYInput: IInputWithLabel;
	uploadSymbolImageInput: IInputWithLabel;
	uploadSymbolJsonInput: IInputWithLabel;
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