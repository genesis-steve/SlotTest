import * as TWEEN from '@tweenjs/tween.js';
import { BaseSymbol } from 'src/components/reel/BaseSymbol';
import { IReelStripConfig } from 'src/components/reel/ReelConfig';

export class ReelStrip extends PIXI.Container {

	protected config: IReelStripConfig;

	protected symbols: Array<BaseSymbol>;

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
			const posY: number = ( this.config.symbolConfig.width + this.config.stripInterval ) * ( i - this.config.symbolOnTop );
			symbol.position.set( 0, posY );
			this.addChild( symbol );
			this.symbols.push( symbol );
		}
	}

	public spinTween (): void {
		this.symbols.forEach( symbol => {
			new TWEEN.Tween( symbol )
				.to( { y: symbol.y + this.config.reelTween.to.y }, this.config.reelTween.duration )
				.start();
		} );
	}
}