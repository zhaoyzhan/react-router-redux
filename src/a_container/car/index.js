import React, {
	PropTypes as P
} from 'react';

import {
	connect
} from 'react-redux';

import {
	Link
} from 'react-router';

import changeAction from '../../a_action/car_action/car_action';
import refAction from '../../a_action/car_action/ref_action';
import defAction from '../../a_action/car_action/def_action';

const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	carValue: state.car.carValue,
});

const mapDispatches = (dispatch) => ({
	fn: {
		changeVal: (v) => {
			dispatch(changeAction.changeValue(v));
		},
		refVal: (v) => {
			dispatch(refAction.refVal(v));
		},
		defVal: (v) => {
			dispatch(defAction.defVal(v));
		},
	}
});

class Car extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.showNum = this.showNum.bind(this);
	}

	componentWillMount() {
		console.log('加载');
		if (localStorage.carVal) {
			this.props.fn.refVal(Number(localStorage.carVal));
		} else {
			this.props.fn.defVal(0);
		}
	}

	componentDidmount() {
		console.log('首次');
	}

	componentWillReceiveProps() {
		console.log('zheshi?');
	}

	componentDidUpdate() {}

	componentWillUnmount() {
		this.props.fn.defVal(0);
		localStorage.removeItem('carVal');
	}

	//路由离开
	// routerWillLeave = (nextLocation) => {
	// 	console.log('离开');
	// }

	showNum() {
		// console.log(this.props.fn);
		this.props.fn.changeVal(this.props.carValue);
	}
	render() {
		return (
			<div>
				<h1>{this.props.carValue}</h1>
				<button onClick={this.showNum}>+10</button>
			</div>
		);
	}
}

Car.propTypes = {
	dispatch: P.func,
	carValue: P.number,
	fn: P.object,
	location: P.any,
};

export default connect(mapStoreStateToProps, mapDispatches)(Car);