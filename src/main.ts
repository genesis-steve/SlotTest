import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
window.PIXI = PIXI;
import './style.css';
import { IMainConfig, MainConfig } from 'src/config/MainConfig';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';
import { ReelController } from 'src/components/reel/ReelController';
import { SpinController } from 'src/components/spin/SpinController';

window.onload = () => {
	new GmaeApplication();
};

export class GmaeApplication {

	protected appConfig: IMainConfig;

	protected mainContainer: HTMLDivElement;
	protected reelContainer: ReelController;
	protected spinContainer: SpinController;

	protected pixi: PIXI.Application;

	constructor () {
		this.appConfig = new MainConfig();
		document.title = this.appConfig.title;
		document.body.style.overflow = 'hidden';
		this.createElements();
		this.tickStart();
	}

	protected tickStart (): void {
		function animate () {
			requestAnimationFrame( animate )
			TWEEN.update()
		}
		requestAnimationFrame( animate )
	}

	protected createElements (): void {
		this.mainContainer = <HTMLDivElement> document.getElementById( 'mainContainer' );
		this.mainContainer.appendChild( HTMLElementCreator.createHTMLElement( HTMLElementType.BR ) );
		this.setupPixiApplication();
	}

	protected setupPixiApplication (): void {
		this.pixi = new PIXI.Application( this.appConfig );
		this.createReel();
		this.createSpinPanel();
		this.addListeners();
	}

	protected createReel (): void {
		this.reelContainer = new ReelController();
		this.pixi.stage.addChild( this.reelContainer.mainContainer );
	}

	protected createSpinPanel (): void {
		this.spinContainer = new SpinController();
		this.pixi.stage.addChild( this.spinContainer.mainContainer );
	}

	protected addListeners (): void {
		this.spinContainer.onSpinStartSignal.add( this.onSpinStart, this );
	}

	protected onSpinStart (): void {
		this.reelContainer.startSpin();
	}

}