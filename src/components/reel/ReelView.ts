import * as PIXI from 'pixi.js';
import { IReelConfig } from 'src/components/reel/ReelConfig';
import { ReelStrip } from 'src/components/reel/ReelStrip';

export class ReelView extends PIXI.Container {

	protected config: IReelConfig;

	protected reelStrips: Array<ReelStrip>;

	protected reelStripsContainer: PIXI.Container;

	constructor ( config: IReelConfig ) {
		super();
		this.initElements( config );
	}

	protected initElements ( config: IReelConfig ): void {
		this.config = config;
		this.createReelStrips();
	}

	protected createReelStrips (): void {
		this.reelStripsContainer = new PIXI.Container();
		this.reelStripsContainer.position.set( this.config.position.x, this.config.position.y );
		this.addChild( this.reelStripsContainer );

		const reelMask: PIXI.Graphics = new PIXI.Graphics();
		reelMask.beginFill( 0xFF0000 );
		reelMask.drawRect( this.config.position.x, this.config.position.y, this.config.reelSize.x, this.config.reelSize.y );
		reelMask.endFill();
		this.reelStripsContainer.mask = reelMask;

		this.reelStrips = new Array<ReelStrip>();
		for ( let i: number = 0; i < this.config.reelStripAmount; i++ ) {
			const reelStrip = new ReelStrip( this.config.reelStrip );
			const posX: number = ( this.config.reelStrip.symbolConfig.width + this.config.reelStrip.stripInterval ) * i;
			reelStrip.position.set( posX, 0 );
			this.reelStripsContainer.addChild( reelStrip );
			this.reelStrips.push( reelStrip );
		}
	}

	public startSpin (): void {
		this.reelStrips.forEach( strip => {
			strip.spinTween();
		} );
	}

}