import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
window.PIXI = PIXI;
import './style.css';
import { IMainConfig, MainConfig } from 'src/config/MainConfig';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';
import { ReelController } from 'src/components/reel/ReelController';
import { SpinController } from 'src/components/spin/SpinController';
import { SpinSettingsPanel } from 'src/components/external/spinSettings/SpinSettingsPanel';
import { SpinSettingsConfig } from 'src/components/external/spinSettings/SpinSettingsConfig';
import { ReelSettingsPanel } from 'src/components/external/reelSettings/ReelSettingsPanel';
import { ReelSettingsConfig } from 'src/components/external/reelSettings/ReelSettingsConfig';
import { IPoint } from 'src/components/reel/ReelConfig';

window.onload = () => {
	new GmaeApplication();
};

export class GmaeApplication {

	protected appConfig: IMainConfig;

	protected mainContainer: HTMLDivElement;
	protected reelContainer: ReelController;
	protected spinContainer: SpinController;
	protected spinSettingsPanel: SpinSettingsPanel;
	protected reelSettingsPanel: ReelSettingsPanel;

	protected pixi: PIXI.Application;
	protected loader: PIXI.Loader;
	protected assets: Array<IAsset>;

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
		this.loadAssets();
	}

	protected loadAssets (): void {
		this.loader = new PIXI.Loader();
		this.assets = this.getAssetList();
		this.assets.forEach( asset => {
			this.loader.add( asset.assetUrl );
		} );
		this.loader.onComplete.add( () => {
			this.onCompleteUpload( this.loader.resources );
		} );
		this.loader.load();
	}

	protected onCompleteUpload ( res: PIXI.IResourceDictionary ): void {
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
		this.createReelSettingsPanel();
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
		this.reelSettingsPanel.setStripAmountSignal.add( this.onSetStripAmount, this );
		this.reelSettingsPanel.setSymbolAmountSignal.add( this.onSetSymbolAmount, this );
		this.reelSettingsPanel.setStripIntervalSignal.add( this.onSetStripInterval, this );
		this.mainContainer.appendChild( this.reelSettingsPanel.mainContainer );
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

	protected onSetStripAmount ( value: number ): void {
		this.reelContainer.onSetStripAmount( value );
	}

	protected onSetSymbolAmount ( value: number ): void {
		this.reelContainer.onSetSymbolAmount( value );
	}

	protected onSetStripInterval ( position: IPoint ): void {
		this.reelContainer.onSetStripInterval( position );
	}

	protected getAssetList (): Array<IAsset> {
		return [
			{
				assetKey: 'symbols',
				assetUrl: 'assets/symbols.png'
			}
		];
	}

}

export interface IAsset {
	assetKey: string;
	assetUrl: string;
}

export enum LoadExtension {
	PNG = 'png',
	ATLAS = 'altas',
	JSON = 'json'
}