import React, {
	PropTypes as P
} from 'react';

import {
	connect
} from 'react-redux';

import {
	Link
} from 'react-router';

/* 需要挂载到redux上的参数 */
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
});

/* 创建组件 */

class RootContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="boss">
				<ul className="root-ul">
					<li className="root-li"><Link activeClassName="active" to="/my/myhome">my-home</Link></li>
					<li className="root-li"><Link activeClassName="active" to="/my/myhouse">my-house</Link></li>
					<li className="root-li"><Link activeClassName="active" to="/my/mydata">my-data</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

/* 代码类型检查 */
RootContainer.propTypes = {
	dispatch: P.func,
	children: P.any,
};

export default connect(mapStoreStateToProps)(RootContainer);