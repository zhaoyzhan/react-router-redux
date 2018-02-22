import React, {
	PropTypes as P
} from 'react'; // 引入了React和PropTypes
// PropTypes是用于检查props参数类型，可有可无，最好是有

class Cut extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<button onClick={()=>this.props.onClick(this.props.value)}>-</button>
			</div>
		);
	}
}

Cut.propTypes = {
	onClick: P.func,
	value: P.number,
};

export default Cut;