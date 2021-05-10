import * as MiniSignal from 'mini-signals';
import { Loader } from 'pixi.js';


export class AssetLoader {

	protected loader: Loader;

	public onUploadCompleteSignal: MiniSignal = new MiniSignal();

	constructor () {
		this.init();
	}

	public init (): void {
		this.loader = new Loader();
		this.getAssetList().forEach( ( asset: IAsset ) => {
			const assetName: string = asset.assetName;
			const assetUrl: string = asset.assetUrl;
			this.loader.add( assetName, assetUrl );
		} );
		this.loader.onComplete.add( () => {
			this.onUploadCompleteSignal.dispatch();
		} );
		this.loader.load();
	}

	public getAssetList (): Array<IAsset> {
		return [
			{
				assetName: 'symbols.json',
				assetUrl: 'assets/symbols.json'
			},
			{
				assetName: 'symbols.png',
				assetUrl: 'assets/symbols.png'
			},
			{
				assetName: 'spin_Enabled.png',
				assetUrl: 'assets/spin_Enabled.png'
			}
		];
	}

}

export interface IAsset {
	assetName: string;
	assetUrl: string;
}