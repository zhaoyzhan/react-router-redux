export default class AdviserActions {
	static onTestAdd(num) {
		return {
			type: 'TEST::add',
			payload: num + 1,
		};
	}
}