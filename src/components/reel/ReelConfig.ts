import { IMainConfig, MainConfig } from 'src/config/MainConfig';


export class ReelConfig implements IReelConfig {

	protected mainConfig: IMainConfig = new MainConfig();
	protected reelBorderX: number = 30;

	public position: IPoint = { x: this.reelBorderX, y: 120 };

	public reelSize: IPoint = this.getReelSize();

	public reelStripAmount: number = 4;

	public symbolWidthMax: number = this.reelSize.x / this.reelStripAmount;

	protected symbolConfig: ISymbolConfig = {
		width: 70
	};

	public reelStrip: IReelStripConfig = {
		reelTween: {
			to: { y: this.symbolConfig.width },
			duration: 100
		},
		stripInterval: ( this.reelSize.x - this.symbolConfig.width * this.reelStripAmount ) / ( this.reelStripAmount - 1 ),
		symbolConfig: this.symbolConfig,
		symbolPerStrip: 3,
		symbolOnTop: 1,
		symbolBelowBottom: 1
	};

	protected getReelSize (): IPoint {
		const width = this.mainConfig.width - this.reelBorderX * 2;
		return { x: width, y: width };
	}
}

export interface IReelConfig {
	position: IPoint;
	reelSize: IPoint;
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