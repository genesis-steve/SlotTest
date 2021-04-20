import { IReelConfig, ReelConfig } from 'src/components/reel/ReelConfig';
import { ReelView } from 'src/components/reel/ReelView';


export class ReelController {

	protected config: IReelConfig;

	protected view: ReelView;

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
		//
	}

	public startSpin (): void {
		this.view.startSpin();
	}

	protected onReelTweenComplete (): void {
		//
	}

}