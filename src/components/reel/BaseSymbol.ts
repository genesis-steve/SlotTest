import { ISymbolConfig } from 'src/components/reel/ReelConfig';

export class BaseSymbol extends PIXI.Container {

	protected config: ISymbolConfig;

	constructor ( config: ISymbolConfig, symbolName: string ) {
		super();
		this.initElements( config, symbolName );
	}

	protected initElements ( config: ISymbolConfig, symbolName: string ): void {
		this.config = config;
		this.setup( symbolName );
	}

	protected setup ( symbolName: string ): void {
		const sprite = new PIXI.Sprite( PIXI.utils.TextureCache[ 'symbol_' + symbolName + '.png' ] );
		sprite.width = this.config.width;
		sprite.height = this.config.width;
		this.addChild( sprite );
	}
}