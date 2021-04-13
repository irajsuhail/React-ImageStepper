import React from 'react'
import './imageStepper.css'


export default function ImageStepper({content, timer}) {
	let [state, setState] = React.useState(1)

	React.useEffect(() => {
		let timerId = setTimeout(() => {
			 setState((prev => {
				return (prev === content.length) ? 1 : (prev + 1)
			}))
		}, timer);

		return () => clearTimeout(timerId)

	}, [state])
	
	

	return (
		<div className='imageStepper__container'>
			<div className='images__container'>
				{content.map(({id, img}) => {
					return (
					<div className='image' key={id} style={{visibility: (id===state) ? 'visible' : 'hidden'}}>
						<p>{img}</p>
					</div>
				)})}
			</div>
			<div>
				{content.map(({id, content}) => {
					return (
					<div key={id}>
						<p onClick={() => setState(id)} style={{fontWeight: (id===state) ? 'bold' : 'normal'}}>{content }</p>
					</div>
				)})}
			</div>
		</div>
	)
}
