import * as MiniSignal from 'mini-signals';
import { IPoint, IReelConfig, ReelConfig } from 'src/components/reel/ReelConfig';
import { ReelView } from 'src/components/reel/ReelView';


export class ReelController {

	protected config: IReelConfig;

	protected view: ReelView;

	protected spinDuration: number;

	public onReelStopCompleteSignal: MiniSignal = new MiniSignal();

	public get mainContainer () {
		return this.view;
	}

	constructor () {
		this.initElement();
		this.addListers();
	}

	protected initElement (): void {
		this.config = new ReelConfig();
		this.spinDuration = this.config.spinDuration;
		this.view = new ReelView( this.config );
	}

	protected addListers (): void {
		this.view.onReelStopCompleteSignal.add( this.onReelStopComplete, this );
	}

	protected onReelStopComplete (): void {
		this.onReelStopCompleteSignal.dispatch();
	}

	public startSpin (): void {
		this.view.startSpin();
		window.setTimeout( () => {
			this.view.stopSpin();
		}, this.spinDuration );
	}

	public setSpinStartTime ( time: number ): void {
		this.view.setSpinStartTime( time );
	}

	public setSpinStopTime ( time: number ): void {
		this.view.setSpinStopTime( time );
	}

	public setSpinDuration ( time: number ): void {
		this.spinDuration = time;
	}

	public setReelTweenDuration ( time: number ): void {
		this.view.setReelTweenDuration( time );
	}

	public onSetStripAmount ( value: number ): void {
		this.config.reelStripAmount = value;
		this.config.updateConfig();
		this.view.updateReelView( this.config );
	}

	public onSetSymbolAmount ( value: number ): void {
		this.config.symbolPerStrip = value;
		this.config.updateConfig();
		this.view.updateReelView( this.config );
	}

	public onSetStripInterval ( position: IPoint ): void {
		if ( position.x ) {
			this.config.stripIntervalX = position.x;
		}
		if ( position.y ) {
			this.config.stripIntervalY = position.y;
		}
		this.config.updateConfig();
		this.view.updateReelView( this.config );
	}

}