import ReactDom from 'react-dom';
import React from 'react';
import ReactRating from './ReactRating.jsx';




ReactDom.render(
	<div>
		<p>Rate: 3.5</p>
		<ReactRating raterDim={24} rate={3.5}/> 
		<p>Rate: 4.3</p>
		<ReactRating raterDim={30} rate={4.3} activeColor={'#F5A623'}/>
		<p>Rate: 6.6</p>
		<ReactRating raterDim={40} rate={6.6} activeColor={'#F5A623'} inactiveColor={'blue'}/>
		<p>Rate: 9.9</p>
		<ReactRating raterDim={46} raterBg={'#bebebe'} rate={9.2} activeColor={'blue'} inactiveColor={'red'}/>
	</div>,
	document.getElementById('app'))