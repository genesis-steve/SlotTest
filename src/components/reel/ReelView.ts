import * as PIXI from 'pixi.js';
import * as MiniSignal from 'mini-signals';
import { IReelConfig } from 'src/components/reel/ReelConfig';
import { ReelStrip } from 'src/components/reel/ReelStrip';

export class ReelView extends PIXI.Container {

	protected config: IReelConfig;

	protected reelStrips: Array<ReelStrip>;

	protected reelStripsContainer: PIXI.Container;
	protected tweenReelStripCount: number = 0;
	protected stripSpinStartTime: number = 0;
	protected stripSpinStopTime: number = 0;

	public onReelStopCompleteSignal: MiniSignal = new MiniSignal();

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
			const posX: number = ( this.config.reelStrip.symbolConfig.width + this.config.reelStrip.stripIntervalX ) * i;
			reelStrip.position.set( posX, 0 );
			reelStrip.onStripTweenCompleteSignal.add( this.onTweenStripComplete, this );
			this.reelStripsContainer.addChild( reelStrip );
			this.reelStrips.push( reelStrip );
		}
	}

	protected onTweenStripComplete (): void {
		this.tweenReelStripCount--;
		if ( this.tweenReelStripCount === 0 ) {
			this.onReelStopCompleteSignal.dispatch();
		}
	}

	public startSpin (): void {
		this.tweenReelStripCount = this.reelStrips.length;
		this.reelStrips.forEach( ( strip, i ) => {
			window.setTimeout( () => {
				strip.startSpin();
			}, this.stripSpinStartTime * i );
		} );
	}

	public stopSpin (): void {
		this.reelStrips.forEach( ( strip, i ) => {
			window.setTimeout( () => {
				strip.stopSpin();
			}, this.stripSpinStopTime * i );
		} );
	}

	public setSpinStartTime ( time: number ): void {
		this.stripSpinStartTime = time;
	}

	public setSpinStopTime ( time: number ): void {
		this.stripSpinStopTime = time;
	}

	public setReelTweenDuration ( time: number ): void {
		this.reelStrips.forEach( ( strip, ) => {
			strip.setReelTweenDuration( time );
		} );
	}

	public updateReelView ( config: IReelConfig ): void {
		this.config = config;
		this.reelStripsContainer.destroy();
		this.createReelStrips();
	}


}