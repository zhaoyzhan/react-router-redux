export default class AdviserActions {
	static defVal(num) {
		return {
			type: 'TEST::def',
			payload: num,
		};
	}
}