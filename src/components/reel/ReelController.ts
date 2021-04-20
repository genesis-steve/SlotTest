import * as MiniSignal from 'mini-signals';
import { IReelConfig, ReelConfig } from 'src/components/reel/ReelConfig';
import { ReelView } from 'src/components/reel/ReelView';


export class ReelController {

	protected config: IReelConfig;

	protected view: ReelView;

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
		}, this.config.reelStopTIme );
	}

}