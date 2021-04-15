import * as PIXI from 'pixi.js';
window.PIXI = PIXI;
import './style.css';
import { IMainConfig, MainConfig } from 'src/config/MainConfig';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';

window.onload = () => {
	new GmaeApplication();
};

export class GmaeApplication {

	protected appConfig: IMainConfig;

	protected mainContainer: HTMLDivElement;

	constructor () {
		this.appConfig = new MainConfig();
		document.title = this.appConfig.title;
		document.body.style.overflow = 'hidden';
		this.createElements();
	}

	protected createElements (): void {
		this.mainContainer = <HTMLDivElement> document.getElementById( 'mainContainer' );
		this.mainContainer.appendChild( HTMLElementCreator.createHTMLElement( HTMLElementType.BR ) );
	}

}