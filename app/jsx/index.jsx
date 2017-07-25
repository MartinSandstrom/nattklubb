import React from 'react';
import {render} from 'react-dom';
import TestComponent from './components/TestComponent.jsx';

let test = document.getElementById('test');
if (test) {
	render(
		<TestComponent></TestComponent>, test);
}