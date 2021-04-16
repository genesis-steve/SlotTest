import { IMainConfig, MainConfig } from 'src/config/MainConfig';


export class ReelConfig implements IReelConfig {

	protected mainConfig: IMainConfig = new MainConfig();
	protected reelBorderX: number = 30;

	public position: IPoint = { x: this.reelBorderX, y: 120 };

	protected reelWidth: number = this.mainConfig.width - this.reelBorderX * 2;
	public reelStripAmount: number = 4;

	public symbolWidthMax: number = this.reelWidth / this.reelStripAmount;

	protected symbolConfig: ISymbolConfig = {
		width: 70
	};

	public reelStrip: IReelStripConfig = {
		reelTween: {
			to: { y: this.symbolConfig.width },
			duration: 100
		},
		stripInterval: ( this.reelWidth - this.symbolConfig.width * this.reelStripAmount ) / ( this.reelStripAmount - 1 ),
		symbolConfig: this.symbolConfig,
		symbolPerStrip: 3,
		symbolOnTop: 1,
		symbolBelowBottom: 1
	};
}

export interface IReelConfig {
	position: IPoint;
	reelStrip: IReelStripConfig;
	reelStripAmount: number;
	symbolWidthMax: number;
}

export interface ISymbolConfig {
	width: number;
}

export interface IReelStripConfig {
	startTween?: ITweenConfig;
	reelTween: ITweenConfig;
	stopTween?: ITweenConfig;
	stripInterval: number
	symbolConfig: ISymbolConfig;
	symbolPerStrip: number;
	symbolOnTop: number;
	symbolBelowBottom: number;
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