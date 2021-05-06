import * as MiniSignal from 'mini-signals';
import { IReelConfig, ReelConfig } from 'src/components/reel/ReelConfig';
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

}