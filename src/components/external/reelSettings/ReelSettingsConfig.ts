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
}

export interface IReelSettingsConfig {
	title: IStyle;
	buttonContainer: IStyle;
	stripAmountInput: IInputWithLabel;
	symbolAmountInput: IInputWithLabel;
	stripIntervalXInput: IInputWithLabel;
	stripIntervalYInput: IInputWithLabel;
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