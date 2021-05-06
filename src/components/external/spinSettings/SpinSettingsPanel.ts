import * as MiniSignal from 'mini-signals';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';
import { IInputWithLabel, ISpinSettingsConfig } from 'src/components/external/spinSettings/SpinSettingsConfig';

export class SpinSettingsPanel {

	protected config: ISpinSettingsConfig;
	protected panelContainer: HTMLDivElement;

	public setSpinStartTimeSignal: MiniSignal = new MiniSignal();
	public setSpinStopTimeSignal: MiniSignal = new MiniSignal();
	public setSpinDurationSignal: MiniSignal = new MiniSignal();
	public setReelTweenDurationSignal: MiniSignal = new MiniSignal();

	public get mainContainer () {
		return this.panelContainer;
	}

	constructor ( config: ISpinSettingsConfig ) {
		this.init( config );
	}

	public init ( config: ISpinSettingsConfig ): HTMLDivElement {
		this.config = config;
		this.panelContainer = HTMLElementCreator.createHTMLElement<HTMLDivElement>(
			HTMLElementType.DIV, config.buttonContainer
		);
		this.createTitle();
		this.createSpinStartTimeInput();
		this.createSpinStopTimeInput();
		this.createSpinDurationInput();
		this.createReelTweenDurationInput();
		return this.panelContainer;
	}

	protected createTitle (): void {
		const label: HTMLParagraphElement = HTMLElementCreator.createHTMLElement<HTMLParagraphElement>(
			HTMLElementType.P, this.config.title
		);
		this.panelContainer.appendChild( label );
	}

	protected createSpinStartTimeInput (): void {
		const config: IInputWithLabel = this.config.spinStartTimeInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, config.button
		);
		button.onclick = () => {
			this.setSpinStartTimeSignal.dispatch( +( document.getElementById( config.input.id ) as HTMLInputElement ).value );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createSpinStopTimeInput (): void {
		const config: IInputWithLabel = this.config.spinStopTimeInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, this.config.spinStartTimeInput.button
		);
		button.onclick = () => {
			this.setSpinStopTimeSignal.dispatch( +( document.getElementById( config.input.id ) as HTMLInputElement ).value );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createSpinDurationInput (): void {
		const config: IInputWithLabel = this.config.spinDurationInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, this.config.spinStartTimeInput.button
		);
		button.onclick = () => {
			this.setSpinDurationSignal.dispatch( +( document.getElementById( config.input.id ) as HTMLInputElement ).value );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}

	protected createReelTweenDurationInput (): void {
		const config: IInputWithLabel = this.config.reelTweenDurationInput;

		const label: HTMLLabelElement = HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.LABEL, config.label );
		this.panelContainer.appendChild( label );

		const input: HTMLInputElement = HTMLElementCreator.createHTMLElement<HTMLInputElement>( HTMLElementType.INPUT, config.input );
		this.panelContainer.appendChild( input );

		const button: HTMLButtonElement = HTMLElementCreator.createHTMLElement<HTMLButtonElement>(
			HTMLElementType.BUTTON, this.config.spinStartTimeInput.button
		);
		button.onclick = () => {
			this.setReelTweenDurationSignal.dispatch( +( document.getElementById( config.input.id ) as HTMLInputElement ).value );
		};
		this.panelContainer.appendChild( button )
		this.panelContainer.appendChild( HTMLElementCreator.createHTMLElement<HTMLLabelElement>( HTMLElementType.BR ) );
	}
}