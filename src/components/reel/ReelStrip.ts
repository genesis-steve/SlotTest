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
		this.symbols = new Array<BaseSymbol>( this.config.symbolPerStrip );
		for ( let i: number = 0; i < this.symbols.length; i++ ) {
			const symbol = new BaseSymbol( this.config.symbolConfig );
			const posY: number = ( this.config.symbolConfig.width + this.config.stripInterval ) * i;
			symbol.position.set( 0, posY );
			this.addChild( symbol );
		}
	}
}