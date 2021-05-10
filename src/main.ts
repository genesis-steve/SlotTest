import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
window.PIXI = PIXI;
import './style.css';
import { Inject } from 'typescript-ioc';
import { IMainConfig, MainConfig } from 'src/config/MainConfig';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';
import { ReelController } from 'src/components/reel/ReelController';
import { SpinController } from 'src/components/spin/SpinController';
import { SpinSettingsPanel } from 'src/components/external/spinSettings/SpinSettingsPanel';
import { SpinSettingsConfig } from 'src/components/external/spinSettings/SpinSettingsConfig';
import { ReelSettingsPanel } from 'src/components/external/reelSettings/ReelSettingsPanel';
import { ReelSettingsConfig } from 'src/components/external/reelSettings/ReelSettingsConfig';
import { IPoint } from 'src/components/reel/ReelConfig';
import { BackgroundSettingsPanel } from 'src/components/external/backgroundSettings/BackgroundSettingsPanel';
import { BackgroundSettingsConfig } from 'src/components/external/backgroundSettings/BackgroundSettingsConfig';
import { Texture } from 'pixi.js';
import { AssetLoader } from 'src/core/AssetLoader';

window.onload = () => {
	new GmaeApplication();
};

export class GmaeApplication {

	protected appConfig: IMainConfig;

	@Inject
	protected assetLoader: AssetLoader;

	protected mainContainer: HTMLDivElement;
	protected reelContainer: ReelController;
	protected spinContainer: SpinController;

	protected backgroundSettingsPanel: BackgroundSettingsPanel;
	protected spinSettingsPanel: SpinSettingsPanel;
	protected reelSettingsPanel: ReelSettingsPanel;

	protected pixi: PIXI.Application;
	protected background: PIXI.Sprite;

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
		this.assetLoader.onUploadCompleteSignal.add( this.onAssetLoadComplete, this );
	}

	protected onAssetLoadComplete (): void {
		this.setupPixiApplication();
		this.setupExternalPanel();
	}

	protected setupPixiApplication (): void {
		this.pixi = new PIXI.Application( this.appConfig );
		this.createBackground();
		this.createReel();
		this.createSpinPanel();
		this.addListeners();
	}

	protected createBackground (): void {
		this.background = new PIXI.Sprite();
		this.background.width = this.appConfig.width;
		this.background.height = this.appConfig.height;
		this.pixi.stage.addChild( this.background );
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
		this.createBackgroundSettingsPanel();
		this.createSpinSettingsPanel();
		this.createReelSettingsPanel();
	}

	protected createBackgroundSettingsPanel (): void {
		this.backgroundSettingsPanel = new BackgroundSettingsPanel( new BackgroundSettingsConfig() );
		this.backgroundSettingsPanel.onPixiColorUpdateSignal.add( this.onPixiColorUpdate, this );
		this.mainContainer.appendChild( this.backgroundSettingsPanel.mainContainer );
	}

	protected createSpinSettingsPanel (): void {
		this.spinSettingsPanel = new SpinSettingsPanel( new SpinSettingsConfig() );
		this.spinSettingsPanel.setSpinStartTimeSignal.add( this.onSetSpinStartTime, this );
		this.spinSettingsPanel.setSpinStopTimeSignal.add( this.onSetSpinStopTime, this );
		this.spinSettingsPanel.setSpinDurationSignal.add( this.onSetSpinDuration, this );
		this.spinSettingsPanel.setReelTweenDurationSignal.add( this.onSetReelTweenDuration, this );
		this.mainContainer.appendChild( this.spinSettingsPanel.mainContainer );
	}

	protected createReelSettingsPanel (): void {
		this.reelSettingsPanel = new ReelSettingsPanel( new ReelSettingsConfig() );
		this.reelSettingsPanel.setReelPositionSignal.add( this.onSetReelPosition, this );
		this.reelSettingsPanel.setStripAmountSignal.add( this.onSetStripAmount, this );
		this.reelSettingsPanel.setSymbolAmountSignal.add( this.onSetSymbolAmount, this );
		this.reelSettingsPanel.setStripIntervalSignal.add( this.onSetStripInterval, this );
		this.mainContainer.appendChild( this.reelSettingsPanel.mainContainer );
	}

	protected addListeners (): void {
		this.reelContainer.onReelStopCompleteSignal.add( this.onReelStopComplete, this );
		this.spinContainer.onSpinStartSignal.add( this.onSpinStart, this );
	}

	protected onPixiColorUpdate ( url: string ): void {
		const texture = Texture.from( url );
		this.background.texture = texture;
	}

	protected onSpinStart (): void {
		this.reelContainer.startSpin();
	}

	protected onReelStopComplete (): void {
		this.spinContainer.onStopSpin();
	}

	protected onSetSpinStartTime ( time: number ): void {
		this.reelContainer.setSpinStartTime( time );
	}

	protected onSetSpinStopTime ( time: number ): void {
		this.reelContainer.setSpinStopTime( time );
	}

	protected onSetSpinDuration ( time: number ): void {
		this.reelContainer.setSpinDuration( time );
	}

	protected onSetReelTweenDuration ( time: number ): void {
		this.reelContainer.setReelTweenDuration( time );
	}

	protected onSetReelPosition ( position: IPoint ): void {
		this.reelContainer.onSetReelPosition( position );
	}

	protected onSetStripAmount ( value: number ): void {
		this.reelContainer.onSetStripAmount( value );
	}

	protected onSetSymbolAmount ( value: number ): void {
		this.reelContainer.onSetSymbolAmount( value );
	}

	protected onSetStripInterval ( position: IPoint ): void {
		this.reelContainer.onSetStripInterval( position );
	}

}

export interface IAsset {
	assetKey: string;
	assetUrl: string;
}

export enum LoadExtension {
	PNG = 'png',
	JSON = 'json'
}