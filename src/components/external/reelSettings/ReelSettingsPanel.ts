import * as MiniSignal from 'mini-signals';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';
import { IInputWithLabel, IReelSettingsConfig } from 'src/components/external/reelSettings/ReelSettingsConfig';

export class ReelSettingsPanel {

	protected config: IReelSettingsConfig;
	protected panelContainer: HTMLDivElement;

	public setReelPositionSignal: MiniSignal = new MiniSignal();
	public setStripAmountSignal: MiniSignal = new MiniSignal();
	public setSymbolAmountSignal: MiniSignal = new MiniSignal();
	public setStripIntervalSignal: MiniSignal = new MiniSignal();

	public get mainContainer () {
		return this.panelContainer;
	}

	constructor ( config: IReelSettingsConfig ) {
		this.init( config );
	}

	public init ( config: IReelSettingsConfig ): HTMLDivElement {
		this.config = config;
		this.panelContainer = HTMLElementCreator.createHTMLElement<HTMLDivElement>(
			HTMLElementType.DIV, config.buttonContainer
		);
		this.createTitle();
		this.createReelPositionXInput();
		this.createReelPositionYInput();
		this.createStripAmountInput();
		this.createSymbolAmountInput();
		this.createStripIntervalXInput();
		this.createStripIntervalYInput();
		return this.panelContainer;
	}

	protected createTitle (): void {
		const label: HTMLParagraphElement = HTMLElementCreator.createHTMLElement<HTMLParagraphElement>(
			HTMLElementType.P, this.config.title
		);
		this.panelContainer.appendChild( label );
	}

	protected createReelPositionXInput (): void {
		const config: IInputWithLabel = this.config.reelPositionXInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setReelPositionSignal.dispatch( { x: +( document.getElementById( config.input.id ) as HTMLInputElement ).value } );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createReelPositionYInput (): void {
		const config: IInputWithLabel = this.config.reelPositionYInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setReelPositionSignal.dispatch( { y: +( document.getElementById( config.input.id ) as HTMLInputElement ).value } );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createStripAmountInput (): void {
		const config: IInputWithLabel = this.config.stripAmountInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setStripAmountSignal.dispatch( +( document.getElementById( config.input.id ) as HTMLInputElement ).value );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createSymbolAmountInput (): void {
		const config: IInputWithLabel = this.config.symbolAmountInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setSymbolAmountSignal.dispatch( +( document.getElementById( config.input.id ) as HTMLInputElement ).value );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createStripIntervalXInput (): void {
		const config: IInputWithLabel = this.config.stripIntervalXInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setStripIntervalSignal.dispatch( { x: +( document.getElementById( config.input.id ) as HTMLInputElement ).value } );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createStripIntervalYInput (): void {
		const config: IInputWithLabel = this.config.stripIntervalYInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setStripIntervalSignal.dispatch( { y: +( document.getElementById( config.input.id ) as HTMLInputElement ).value } );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}
}