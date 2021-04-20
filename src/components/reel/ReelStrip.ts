import * as TWEEN from '@tweenjs/tween.js';
import * as MiniSignal from 'mini-signals';
import { BaseSymbol } from 'src/components/reel/BaseSymbol';
import { IReelStripConfig } from 'src/components/reel/ReelConfig';

export class ReelStrip extends PIXI.Container {

	protected config: IReelStripConfig;

	protected symbols: Array<BaseSymbol>;

	protected symbolTweenCount: number = 0;

	public onAllSymbolTweenComplete: MiniSignal = new MiniSignal();


	constructor ( config: IReelStripConfig ) {
		super();
		this.initElements( config );
	}

	protected initElements ( config: IReelStripConfig ): void {
		this.config = config;
		this.createSymbols();
	}

	protected createSymbols (): void {
		const totalSymbolAmount: number = this.config.symbolPerStrip + this.config.symbolOnTop + this.config.symbolBelowBottom;
		this.symbols = new Array<BaseSymbol>();
		for ( let i: number = 0; i < totalSymbolAmount; i++ ) {
			const symbol = new BaseSymbol( this.config.symbolConfig );
			const posY: number = ( this.config.symbolConfig.width + this.config.stripIntervalY ) * ( i - this.config.symbolOnTop );
			symbol.position.set( 0, posY );
			this.addChild( symbol );
			this.symbols.push( symbol );
		}
	}

	public startSpin (): void {
		this.symbolTweenCount = this.symbols.length;
		this.symbols.forEach( symbol => {
			const toY: number = symbol.y + this.config.reelTween.to.y;
			this.tweenSymbol( symbol, toY, this.config.reelTween.duration, () => {
				if ( this.shouldMoveSymbolToTop( symbol ) ) {
					symbol.y = -( this.config.symbolConfig.width + this.config.stripIntervalY );
				}
				this.onTweenSymbolComplete();
			} );
		} );
	}

	protected tweenSymbol ( symbol: BaseSymbol, toY: number, duration: number, onComplete?: Function ): void {
		new TWEEN.Tween( symbol )
			.to( { y: toY }, duration )
			.start()
			.onComplete( () => {
				if ( onComplete ) {
					onComplete();
				}
			} );
	}

	protected onTweenSymbolComplete (): void {
		this.symbolTweenCount--;
		if ( this.symbolTweenCount === 0 ) {
			this.onAllSymbolTweenComplete.dispatch();
		}
	}

	protected shouldMoveSymbolToTop ( symbol: BaseSymbol ): boolean {
		const positionY: number = ( this.config.symbolPerStrip + this.config.symbolOnTop ) * ( this.config.symbolConfig.width + this.config.stripIntervalY ) - this.config.stripIntervalY;
		if ( symbol.position.y >= positionY ) {
			return true;
		}
		return false
	}
}