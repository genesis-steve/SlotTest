import { IMainConfig, MainConfig } from "src/config/MainConfig";
import { IStyle } from "src/utils/HTMLElementCreator";


export class SpinSettingsConfig implements ISpinSettingsConfig {

	protected mainConfig: IMainConfig = new MainConfig();

	public title: IStyle = {
		id: 'singleAnimationDemoLabel',
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
		x: this.mainConfig.width,
		y: -this.mainConfig.height,
		width: this.mainConfig.width,
		height: this.mainConfig.height,
		padding: '0 10',
		boxShadow: ElementColor.INBOX_SHADOW
	};
	public animationButton: IStyle = {
		fontSize: 15,
		margin: '5 0'
	};
}

export interface ISpinSettingsConfig {
	title: IStyle;
	buttonContainer: IStyle;
	animationButton: IStyle;

}

export interface IInputWithLabel {
	label: IStyle;
	input: IStyle;
}

export enum ElementColor {
	TITLE = '#4A4A4A',
	INBOX_SHADOW = 'inset 0px 0px 12px -2px #919191'
}