import * as MiniSignal from 'mini-signals';
import { ISpinConfig } from 'src/components/spin/SpinConfig';
import { SpinButton } from 'src/components/spin/SpinButton';

export class SpinView extends PIXI.Container {

	protected config: ISpinConfig;

	protected spinButton: SpinButton;
	public onSpinButtonClickSignal: MiniSignal = new MiniSignal();

	constructor ( config: ISpinConfig ) {
		super();
		this.initElements( config );
	}

	protected initElements ( config: ISpinConfig ): void {
		this.config = config;
		this.createSpinButton();
		this.addListeners();
	}

	protected createSpinButton (): void {
		this.spinButton = new SpinButton( this.config.spinButton );
		this.spinButton.interactive = true;
		this.addChild( this.spinButton );
	}

	protected addListeners (): void {
		this.spinButton.onPointerTapSignal.add( this.onSpinButtonClick, this );
	}

	protected onSpinButtonClick (): void {
		this.onSpinButtonClickSignal.dispatch();
	}

	public onStopSpin (): void {
		this.spinButton.interactive = true;
	}

}