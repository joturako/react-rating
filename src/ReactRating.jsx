import React from 'react';
import {StarDrawer} from './ShapeDrawer.js';

export default class ReactRating extends React.Component {

	constructor() {
		super();
		this.state = {
			totalWidth : 0,
			rating : 0
		}
	}

	componentWillMount() {
		let totalStarCount = Math.max(Math.ceil(this.props.rate), this.props.total)
		let rating = this.props.rate / totalStarCount * 100
		this.setState({
			totalWidth : totalStarCount * this.props.raterDim,
			rating : rating
		})
	}

	componentDidMount() {

		for(let i=0;i<Math.ceil(this.props.rate);i++) {
			StarDrawer.emptyStar(this.refs['rater-' + i].getContext('2d'),this.props.raterDim/2,this.props.raterBg)
		}
	}

	getStars() {
		let stars = [];
		let starStyle = {
			display:'inline-block',
			zIndex:'1'
		}
		for(let i=0;i<Math.ceil(this.props.rate);i++) {
			let raterRef = 'rater-'+i;
			stars.push(<canvas key={i} ref={raterRef} width={this.props.raterDim} height={this.props.raterDim} style={starStyle}></canvas>)
			//this.raterRefs.push(raterRefs);
		}
		return stars;
	}

	render() {
		let backgroundWrapper = {
			background : this.props.inactiveColor,
			width:this.state.totalWidth + 'px',
			height:this.props.raterDim,
			position:'relative',
			zIndex:'0'
		}

		let selectWrapper = {
			background : this.props.activeColor,
			position:'absolute',
			height:'100%',
			maxWidth :'100%',
			zIndex:'-1',
			width:this.state.rating + '%'
		}

		return (
			<div style={backgroundWrapper}>
				<div style={selectWrapper}>
				</div>
					{this.getStars.bind(this)()}
			</div>
		)
	}
}

ReactRating.propTypes = {
	raterDim : React.PropTypes.number.isRequired,
	rate : React.PropTypes.number,
	total : React.PropTypes.number,
	activeColor : React.PropTypes.string,
	inactiveColor : React.PropTypes.string,
	raterBg : React.PropTypes.string,
}

ReactRating.defaultProps = {
	raterDim : 20,
	rate: 0.5,
    total: 1,
	activeColor : '#FFB600',
	inactiveColor : '#bebebe',
	raterBg : '#fff',
}
