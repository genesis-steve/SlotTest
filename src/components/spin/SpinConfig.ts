import { IPoint } from 'src/components/reel/ReelConfig';


export class SpinConfig implements ISpinConfig {
	public spinButton: ISpinButton = {
		size: { x: 75, y: 75 },
		color: 0xFFFFFF,
		position: { x: 180, y: 565 },
		scale: { x: 0.85, y: 0.85 }
	};
}

export interface ISpinConfig {
	spinButton: ISpinButton;
}

export interface ISpinButton {
	size: IPoint;
	color: number;
	position: IPoint;
	scale: IPoint;
}