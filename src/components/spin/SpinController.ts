import * as MiniSignal from 'mini-signals';
import { ISpinConfig, SpinConfig } from 'src/components/spin/SpinConfig';
import { SpinView } from 'src/components/spin/SpinView';


export class SpinController {

	protected config: ISpinConfig;

	protected view: SpinView;
	public onSpinStartSignal: MiniSignal = new MiniSignal();

	public get mainContainer () {
		return this.view;
	}

	constructor () {
		this.initElement();
	}

	protected initElement (): void {
		this.config = new SpinConfig();
		this.view = new SpinView( this.config );
		this.addListeners();
	}

	protected addListeners (): void {
		this.view.onSpinButtonClickSignal.add( this.onSpinButtonClick, this );
	}

	protected onSpinButtonClick (): void {
		this.onSpinStartSignal.dispatch();
	}

}