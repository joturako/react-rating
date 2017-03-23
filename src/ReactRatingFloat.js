'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShapeDrawer = require('./ShapeDrawer.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactRatingFloat = function (_React$Component) {
  _inherits(ReactRatingFloat, _React$Component);

  function ReactRatingFloat() {
    _classCallCheck(this, ReactRatingFloat);

    var _this = _possibleConstructorReturn(this, (ReactRatingFloat.__proto__ || Object.getPrototypeOf(ReactRatingFloat)).call(this));

    _this.state = {
      totalWidth: 0,
      rating: 0
    };
    _this.getStars = _this.getStars.bind(_this);
    return _this;
  }

  _createClass(ReactRatingFloat, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var totalStarCount = Math.max(Math.ceil(this.props.rate), this.props.total);
      var rating = this.props.rate / totalStarCount * 100;
      this.setState({
        totalWidth: totalStarCount * this.props.raterDim,
        rating: rating
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      for (var i = 0; i < Math.ceil(this.props.rate); i++) {
        _ShapeDrawer.StarDrawer.emptyStar(this.refs['rater-' + i].getContext('2d'), this.props.raterDim / 2, this.props.raterBg);
      }
    }
  }, {
    key: 'getStars',
    value: function getStars() {
      var stars = [];
      var starStyle = {
        display: 'inline-block',
        zIndex: '1'
      };
      for (var i = 0; i < Math.ceil(this.props.rate); i++) {
        var raterRef = 'rater-' + i;
        stars.push(_react2.default.createElement('canvas', { key: i, ref: raterRef, width: this.props.raterDim, height: this.props.raterDim, style: starStyle }));
      }
      return stars;
    }
  }, {
    key: 'render',
    value: function render() {
      var backgroundWrapper = {
        background: this.props.inactiveColor,
        width: this.state.totalWidth + 'px',
        height: this.props.raterDim,
        position: 'relative',
        zIndex: '0'
      };

      var selectWrapper = {
        background: this.props.activeColor,
        position: 'absolute',
        height: '100%',
        maxWidth: '100%',
        zIndex: '-1',
        width: this.state.rating + '%'
      };

      return _react2.default.createElement(
        'div',
        { style: backgroundWrapper },
        _react2.default.createElement('div', { style: selectWrapper }),
        this.getStars()
      );
    }
  }]);

  return ReactRatingFloat;
}(_react2.default.Component);

exports.default = ReactRatingFloat;


ReactRatingFloat.propTypes = {
  raterDim: _react2.default.PropTypes.number.isRequired,
  rate: _react2.default.PropTypes.number,
  total: _react2.default.PropTypes.number,
  activeColor: _react2.default.PropTypes.string,
  inactiveColor: _react2.default.PropTypes.string,
  raterBg: _react2.default.PropTypes.string
};

ReactRatingFloat.defaultProps = {
  raterDim: 20,
  rate: 0.5,
  total: 1,
  activeColor: '#FFB600',
  inactiveColor: '#bebebe',
  raterBg: '#fff'
};
module.exports = exports['default'];
