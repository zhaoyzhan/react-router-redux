import React, {
	PropTypes as P
} from 'react'; // 引入了React和PropTypes
// PropTypes是用于检查props参数类型，可有可无，最好是有

class Com extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<span>{this.props.value}</span>
				<button onClick={()=>this.props.onClick(this.props.value)}>+</button>
			</div>
		);
	}
}

Com.propTypes = {
	value: P.number,
	onClick: P.func,
};

export default Com;