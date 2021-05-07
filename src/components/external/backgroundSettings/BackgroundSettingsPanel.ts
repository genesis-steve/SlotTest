import * as MiniSignal from 'mini-signals';
import { IBackgroundSettingsConfig } from 'src/components/external/backgroundSettings/BackgroundSettingsConfig';
import { AtlasParser } from 'src/utils/AtlasParser';
import { HTMLElementCreator, HTMLElementType } from 'src/utils/HTMLElementCreator';


export class BackgroundSettingsPanel {

	protected config: IBackgroundSettingsConfig;

	protected panelContainer: HTMLDivElement;

	public onPixiColorUpdateSignal: MiniSignal = new MiniSignal();

	public get mainContainer () {
		return this.panelContainer;
	}

	constructor ( config: IBackgroundSettingsConfig ) {
		this.init( config );
	}

	public init ( config: IBackgroundSettingsConfig ): HTMLDivElement {
		this.config = config;
		this.panelContainer = HTMLElementCreator.createHTMLElement(
			HTMLElementType.DIV, config.buttonContainer
		);
		this.createAddImageInput();
		return this.panelContainer;
	}

	protected createAddImageInput (): void {
		const addImageInput: HTMLInputElement = HTMLElementCreator.createHTMLElement(
			HTMLElementType.INPUT, this.config.addImageButton.input
		);
		addImageInput.addEventListener( 'change', ( e ) => {
			const file: File = addImageInput.files[ 0 ];
			const url: string = AtlasParser.getObjectUrl( file );
			this.onPixiColorUpdateSignal.dispatch( url, true );
		} );
		this.panelContainer.appendChild( addImageInput );

		const addImageLabel: HTMLLabelElement = HTMLElementCreator.createHTMLElement(
			HTMLElementType.LABEL, this.config.addImageButton.label
		);
		this.panelContainer.appendChild( addImageLabel );
	}
}