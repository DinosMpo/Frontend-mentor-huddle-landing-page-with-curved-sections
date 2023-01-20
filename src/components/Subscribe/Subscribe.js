import React, {useState} from 'react';
import SubscribeInput from './SubscribeInput';
import './Subscribe.css';

export default function Subscribe() {
	const [error, setError] = useState(false);
	const [value, setValue] = useState('');
	const validEmailRegex = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
	const subscribeInputCheck = () => {
		if(value.match(validEmailRegex)) {
			setError(false);
		}else {
			setError(true);
		}
	}

	return (
		<div id="subscribe-container">
			<SubscribeInput error={error} setValue={setValue}/>
			<div onClick={() => subscribeInputCheck()} id='subscribe-button'>
				Subscribe
			</div>
		</div>
	)
}