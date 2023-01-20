import React, {useState} from 'react';

export default function SubscribeInput({error, setValue}) {
	
	const subscribeInput = (event) => {
		setValue(event.target.value);
	}

	return error ?(
		<div id='subscribe-input'>
			<input onChange={() => subscribeInput(event)} style={{display: 'block'}}type="text" />
			<div id="subscribe-input-error">
				Check your email please
			</div>
		</div>
	)
	:
	(
		<div id='subscribe-input'>
			<input onChange={() => subscribeInput(event)} style={{display: 'block'}}type="text" />
			<div id="subscribe-input-error">
			</div>
		</div>
	)
}