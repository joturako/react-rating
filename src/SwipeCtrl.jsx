import React from 'react';
import './SwipeCtrl.css';

export default class SwipeCtrl extends React.Component {
	constructor() {
		super();
		this.state = {
			translateX:0,
			initX:0,
			transitionDuration:0,
			dragging:false
		};

		this.TRANSITION_DURATION = 150;
		this.x = 0;
	}

	handleTouchStart(e) {
		this.setState({dragging:true});
		let point = e.touches ? e.touches[0] : e;
		this.setState({transitionDuration:0});

		this.startX = this.x;
		this.pointX = point.pageX;
	}

	handleTouchMove(e) {
		if(!this.state.dragging) return;
		let point = e.touches ? e.touches[0] : e,
		deltaX = point.pageX - this.pointX,
		newX;

		this.pointX = point.pageX;

		newX = this.x + deltaX;

		if(Math.abs(newX) > this.props.maxSwipe) {
			newX = this.x + deltaX / 3;
		}

		if(this.props.direction === 'LEFT' && newX > 0) return;
		if(this.props.direction === 'RIGHT' && newX < 0) return;

		this.setState({
			translateX : newX
		});
		this.x = newX;
	}


	handleTouchEnd(e) {
		this.setState({dragging:false});
		this.onTouchCancel.bind(this)(e);
	}

	handleTouchCancel(e) {
		this.setState({dragging:false});
		this.onTouchCancel.bind(this)(e);
	}

	onTouchCancel(e) {
		let point = e.touches ? e.touches[0] : e,
 		newX = Math.round(this.x);
 		this.setState({
 			transitionDuration : this.TRANSITION_DURATION
 		});
 		if(Math.abs(newX) > this.props.maxSwipe) {
 			this.setState({
 				translateX : this.props.maxSwipe * (newX > 0 ? 1 : -1)
 			})
 			this.x = this.props.maxSwipe * (newX > 0 ? 1 : -1)
 		}else {
 			this.setState({
 				translateX : 0
 			})
 			this.x = 0;
 		}
	}	

	render() {
		let tranformStyle = {
			transform : 'translate3D(' + this.state.translateX  + 'px' + ',0,0' +')',
			//transform : 'translateX(' + this.state.translateX  + 'px' +')',
			transitionTimingFunction : 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			transitionDuration : this.state.transitionDuration + 'ms'
		};
		return (
				<div style={tranformStyle}  
					onTouchStart={this.handleTouchStart.bind(this)} 
					onMouseDown={this.handleTouchStart.bind(this)}
					onTouchMove={this.handleTouchMove.bind(this)} 
					onMouseMove={this.handleTouchMove.bind(this)}
					onTouchEnd={this.handleTouchEnd.bind(this)} 
					onMouseUp={this.handleTouchEnd.bind(this)}
					onTouchCancel={this.handleTouchCancel.bind(this)} 
					onMouseCancel={this.handleTouchCancel.bind(this)}
					className="slide-handle">
					{this.props.children}
				</div>
		);
	}
}

