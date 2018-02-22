export default class AdviserActions {
	static onTestCut(num) {
		return {
			type: 'TEST::cut',
			payload: num - 1,
		};
	}
}