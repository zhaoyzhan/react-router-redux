export default class AdviserActions {
	static changeValue(num) {
		return {
			type: 'TEST::change',
			payload: num + 10,
		};
	}
}