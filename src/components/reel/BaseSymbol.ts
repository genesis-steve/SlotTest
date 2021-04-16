import { ISymbolConfig } from 'src/components/reel/ReelConfig';

export class BaseSymbol extends PIXI.Container {

	protected config: ISymbolConfig;

	constructor ( config: ISymbolConfig ) {
		super();
		this.initElements( config );
	}

	protected initElements ( config: ISymbolConfig ): void {
		this.config = config;
		this.setup();
	}

	protected setup (): void {
		const graphics = new PIXI.Graphics();
		graphics.beginFill( 0xAAAAAA );
		graphics.drawRect( 0, 0, this.config.width, this.config.width );
		graphics.endFill();
		this.addChild( graphics );
	}
}