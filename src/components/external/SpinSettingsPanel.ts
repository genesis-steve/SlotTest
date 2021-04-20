import * as MiniSignal from 'mini-signals';
import { IResourceDictionary, Loader, LoaderResource } from 'pixi.js';
import { TSMap } from 'typescript-map';
import { HTMLElementCreator, HTMLElementType, IStyle } from 'src/utils/HTMLElementCreator';
import { ISpinSettingsConfig } from 'src/components/external/SpinSettingsConfig';

export class SpinSettingsPanel {

	protected static config: ISpinSettingsConfig;
	protected static panelContainer: HTMLDivElement;


	public static onSingleAnimationPlaySignal: MiniSignal = new MiniSignal();
	public static onAnimationMixSetSignal: MiniSignal = new MiniSignal();

	public static init ( config: ISpinSettingsConfig ): HTMLDivElement {
		this.config = config;
		this.panelContainer = HTMLElementCreator.createHTMLElement<HTMLDivElement>(
			HTMLElementType.DIV, config.buttonContainer
		);
		this.createTitle();
		return this.panelContainer;
	}

	protected static createTitle (): void {
		const label: HTMLParagraphElement = HTMLElementCreator.createHTMLElement<HTMLParagraphElement>(
			HTMLElementType.P, this.config.title
		);
		this.panelContainer.appendChild( label );
	}

}