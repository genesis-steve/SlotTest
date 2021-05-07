import { IMainConfig, MainConfig } from 'src/config/MainConfig';


export class ReelConfig implements IReelConfig {

	protected mainConfig: IMainConfig = new MainConfig();
	protected reelBorderX: number = 30;

	public position: IPoint = { x: this.reelBorderX, y: 120 };
	public reelStripAmount: number = 4;

	protected reelSizeX: number = this.mainConfig.width - this.reelBorderX * 2;
	public stripIntervalX: number = 10;
	public stripIntervalY: number = 10;

	protected symbolConfig: ISymbolConfig = {
		width: ( this.reelSizeX - ( this.reelStripAmount - 1 ) * this.stripIntervalX ) / this.reelStripAmount
	};

	public symbolPerStrip: number = 4;

	protected reelSizeY: number = ( this.symbolConfig.width + this.stripIntervalY ) * this.symbolPerStrip - this.stripIntervalY;

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
		stripSpinStopDelay: 200
	};

	public reelSize: IPoint = { x: this.reelSizeX, y: this.reelSizeY };

	public spinDuration: number = 2000;

	public updateConfig (): void {
		this.position = { x: this.reelBorderX, y: 120 };
		this.reelSizeX = this.mainConfig.width - this.reelBorderX * 2;
		this.symbolConfig = {
			width: ( this.reelSizeX - ( this.reelStripAmount - 1 ) * this.stripIntervalX ) / this.reelStripAmount
		};
		this.reelSizeY = ( this.symbolConfig.width + this.stripIntervalY ) * this.symbolPerStrip - this.stripIntervalY;
		this.reelStrip = {
			...this.reelStrip,
			reelTween: {
				...this.reelStrip.reelTween,
				to: { y: this.symbolConfig.width + this.stripIntervalY }
			},
			stripIntervalX: this.stripIntervalX,
			stripIntervalY: this.stripIntervalY,
			symbolConfig: this.symbolConfig,
			symbolPerStrip: this.symbolPerStrip
		};
		this.reelSize = { x: this.reelSizeX, y: this.reelSizeY };
	}
}

export interface IReelConfig {
	position: IPoint;
	reelSize: IPoint;
	stripIntervalX: number;
	stripIntervalY: number;
	reelStrip: IReelStripConfig;
	reelStripAmount: number;
	symbolPerStrip: number;
	spinDuration: number;
	updateConfig (): void;
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
	stripSpinStopDelay: number;
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