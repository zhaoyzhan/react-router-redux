export default class AdviserActions {
	static refVal(num) {
		return {
			type: 'TEST::ref',
			payload: num,
		};
	}
}