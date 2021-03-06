import React from 'react';
import {StarDrawer} from './ShapeDrawer.js';

export default class ReactRatingFloat extends React.Component {

  constructor() {
    super();

    this.state = {
      totalWidth: 0,
      rating: 0,
      totalStarCount: 0
    };
    this.getStars = this.getStars.bind(this);
  }

  componentWillMount() {
    const totalStarCount = Math.max(Math.ceil(this.props.rate), this.props.total);
    let rating = (this.props.rate / totalStarCount) * 100;
    this.setState({
      totalStarCount,
      totalWidth: totalStarCount * this.props.raterDim,
      rating
    });
  }

  componentDidMount() {
    for (let i=0; i<this.state.totalStarCount; i++) {
      StarDrawer.emptyStar(this.refs['rater-' + i].getContext('2d'), this.props.raterDim/2, this.props.raterBg);
    }
  }

  getStars() {
    let stars = [];
    let starStyle = {
      display: 'inline-block',
      zIndex: '1',
      verticalAlign: 'baseline'
    };
    for (let i=0; i<this.state.totalStarCount; i++) {
      let raterRef = 'rater-'+i;
      stars.push(<canvas key={i} ref={raterRef} width={this.props.raterDim} height={this.props.raterDim} style={starStyle} />);
    }
    return stars;
  }

  render() {
    let backgroundWrapper = {
      background: this.props.inactiveColor,
      width: this.state.totalWidth + 'px',
      height: this.props.raterDim,
      position: 'relative',
      zIndex: '0'
    };

    let selectWrapper = {
      background: this.props.activeColor,
      position: 'absolute',
      height: '100%',
      maxWidth: '100%',
      zIndex: '-1',
      width: this.state.rating + '%'
    };

    return (<div style={backgroundWrapper}>
        <div style={selectWrapper} />
        {this.getStars()}
    </div>);
  }
}

ReactRatingFloat.propTypes = {
  raterDim: React.PropTypes.number.isRequired,
  rate: React.PropTypes.number,
  total: React.PropTypes.number,
  activeColor: React.PropTypes.string,
  inactiveColor: React.PropTypes.string,
  raterBg: React.PropTypes.string
};

ReactRatingFloat.defaultProps = {
  raterDim: 20,
  rate: 0.5,
  total: 1,
  activeColor: '#FFB600',
  inactiveColor: '#bebebe',
  raterBg: '#fff'
};
