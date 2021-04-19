import { IReelConfig, ReelConfig } from 'src/components/reel/ReelConfig';
import { ReelView } from 'src/components/reel/ReelView';


export class ReelController {

	protected config: IReelConfig;

	protected view: ReelView;

	protected isSpinning: boolean = false;

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
		this.view.onAllReelStripTweenComplete.add( this.onReelTweenComplete, this );
	}

	public startSpin (): void {
		this.isSpinning = true;
		this.view.startSpin();
	}

	protected onReelTweenComplete (): void {
		if ( this.isSpinning ) {
			this.view.startSpin();
		}
	}

}