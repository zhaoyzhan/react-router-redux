import React, {
	PropTypes as P
} from 'react';

import {
	connect
} from 'react-redux';

const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	carValue: state.car.carValue,
});

class MyHome extends React.Component {
	render() {
		return (
			<div>
				<h1>my-home</h1>
				<h2>{this.props.carValue}</h2>
			</div>
		);
	}
}

MyHome.propTypes = {
	dispatch: P.func,
	carValue: P.number,
};

export default connect(mapStoreStateToProps)(MyHome);