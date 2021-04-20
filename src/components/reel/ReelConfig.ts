import { IMainConfig, MainConfig } from 'src/config/MainConfig';


export class ReelConfig implements IReelConfig {

	protected mainConfig: IMainConfig = new MainConfig();
	protected reelBorderX: number = 30;

	public position: IPoint = { x: this.reelBorderX, y: 120 };
	public reelStripAmount: number = 4;

	protected reelSizeX: number = this.mainConfig.width - this.reelBorderX * 2;
	protected stripIntervalX: number = 10;
	protected stripIntervalY: number = 10;

	protected symbolConfig: ISymbolConfig = {
		width: ( this.reelSizeX - ( this.reelStripAmount - 1 ) * this.stripIntervalX ) / this.reelStripAmount
	};

	protected symbolPerStrip = 4;

	protected reelSizeY: number = ( this.symbolConfig.width + this.stripIntervalY ) * this.symbolPerStrip - this.stripIntervalY;

	protected defaltStripSpinStartDelay: number = 200;
	protected defaltStripSpinStopDelay: number = 200;


	public reelStrip: IReelStripConfig = {
		reelTween: {
			to: { y: this.symbolConfig.width + this.stripIntervalY },
			duration: 100
		},
		stripIntervalX: this.stripIntervalX,
		stripIntervalY: this.stripIntervalY,
		symbolConfig: this.symbolConfig,
		symbolPerStrip: this.symbolPerStrip,
		symbolOnTop: 1,
		symbolBelowBottom: 1,
		stripSpinStartDelay: this.getStripSpinStartDelay(),
		stripSpinStopDelay: this.getStripSpinStopDelay()
	};

	public reelSize: IPoint = { x: this.reelSizeX, y: this.reelSizeY };

	public reelStopTIme: number = 2000;

	protected getStripSpinStartDelay (): Array<number> {
		const delayArr: Array<number> = new Array<number>();
		for ( let i: number = 0; i < this.reelStripAmount; i++ ) {
			delayArr.push( this.defaltStripSpinStartDelay * i );
		}
		return delayArr;
	}

	protected getStripSpinStopDelay (): Array<number> {
		const delayArr: Array<number> = new Array<number>();
		for ( let i: number = 0; i < this.reelStripAmount; i++ ) {
			delayArr.push( this.defaltStripSpinStopDelay * i );
		}
		return delayArr;
	}
}

export interface IReelConfig {
	position: IPoint;
	reelSize: IPoint;
	reelStrip: IReelStripConfig;
	reelStripAmount: number;
	reelStopTIme: number;
}

export interface ISymbolConfig {
	width: number;
}

export interface IReelStripConfig {
	startTween?: ITweenConfig;
	reelTween: ITweenConfig;
	stopTween?: ITweenConfig;
	stripIntervalX: number;
	stripIntervalY: number;
	symbolConfig: ISymbolConfig;
	symbolPerStrip: number;
	symbolOnTop: number;
	symbolBelowBottom: number;
	stripSpinStartDelay: Array<number>
	stripSpinStopDelay: Array<number>
}

export interface ITweenConfig {
	from?: any;
	to: any;
	duration: number;
	easing?: ( k: number ) => number;
	yoyo?: boolean;
}

export interface IPoint {
	x: number;
	y: number;
}