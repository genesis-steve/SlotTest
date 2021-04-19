import * as MiniSignal from 'mini-signals';
import { Graphics } from 'pixi.js';
import { ISpinButton } from 'src/components/spin/SpinConfig';


export class SpinButton extends PIXI.Container {

	protected config: ISpinButton;

	public onPointerTapSignal: MiniSignal = new MiniSignal();

	constructor ( config: ISpinButton ) {
		super();
		this.initElement( config );
	}

	protected initElement ( config: ISpinButton ): void {
		this.config = config;
		this.position.set( config.position.x, config.position.y );
		this.createSpinSprite();
		this.addListeners();
	}

	protected createSpinSprite (): void {
		const buttonGraphics = new Graphics();
		buttonGraphics.beginFill( this.config.color );
		buttonGraphics.drawRect( -this.config.size.x / 2, -this.config.size.y / 2, this.config.size.x, this.config.size.y );
		buttonGraphics.endFill();
		this.addChild( buttonGraphics );
	}

	protected addListeners (): void {
		this.addListener( 'pointertap', this.onPointerTap, this );
	}

	protected onPointerTap ( e: PIXI.InteractionEvent ): void {
		this.interactive = false;
		this.onPointerTapSignal.dispatch();
	}

}