export default class SaySomething {
	message: string;
	
	//コンストラクタ
	constructor(message: string) {
		this.message = message;
	}

	//メソッド
	public sayText(elem: HTMLElement | null) {
		if(elem) {
			elem.innerText = this.message;
		}
	}
}

