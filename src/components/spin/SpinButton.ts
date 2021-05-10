import * as MiniSignal from 'mini-signals';
import { Sprite } from 'pixi.js';
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
		this.createSpinSprite();
		this.addListeners();
	}

	protected createSpinSprite (): void {
		const buttonSprite = new Sprite( PIXI.utils.TextureCache[ 'spin_Enabled.png' ] );
		buttonSprite.scale.set( this.config.scale.x, this.config.scale.y );
		buttonSprite.position.set( this.config.position.x, this.config.position.y );
		buttonSprite.anchor.set( 0.5, 0.5 );
		this.addChild( buttonSprite );
	}

	protected addListeners (): void {
		this.addListener( 'pointertap', this.onPointerTap, this );
	}

	protected onPointerTap ( e: PIXI.InteractionEvent ): void {
		this.interactive = false;
		this.onPointerTapSignal.dispatch();
	}

}