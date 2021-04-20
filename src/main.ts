import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
window.PIXI = PIXI;
import './style.css';
import { IMainConfig, MainConfig } from 'src/config/MainConfig';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';
import { ReelController } from 'src/components/reel/ReelController';
import { SpinController } from 'src/components/spin/SpinController';
import { SpinSettingsPanel } from 'src/components/external/SpinSettingsPanel';
import { SpinSettingsConfig } from 'src/components/external/SpinSettingsConfig';

window.onload = () => {
	new GmaeApplication();
};

export class GmaeApplication {

	protected appConfig: IMainConfig;

	protected mainContainer: HTMLDivElement;
	protected reelContainer: ReelController;
	protected spinContainer: SpinController;
	protected spinSettingsPanel: HTMLDivElement;

	protected pixi: PIXI.Application;

	constructor () {
		this.appConfig = new MainConfig();
		document.title = this.appConfig.title;
		document.body.style.overflow = 'hidden';
		this.createElements();
		this.startTick();
	}

	protected startTick (): void {
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
		this.setupExternalPanel();
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

	protected setupExternalPanel (): void {
		this.createSpinSettingsPanel();
	}

	protected createSpinSettingsPanel (): void {
		this.spinSettingsPanel = SpinSettingsPanel.init( new SpinSettingsConfig() );
		this.mainContainer.appendChild( this.spinSettingsPanel );
	}

	protected addListeners (): void {
		this.reelContainer.onReelStopCompleteSignal.add( this.onReelStopComplete, this );
		this.spinContainer.onSpinStartSignal.add( this.onSpinStart, this );
	}

	protected onSpinStart (): void {
		this.reelContainer.startSpin();
	}

	protected onReelStopComplete (): void {
		this.spinContainer.onStopSpin();
	}

}