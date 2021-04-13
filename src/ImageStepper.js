import React from 'react'

// let imgArr = ['image-1', 'image-2', 'image-3']
// let stepperContent = ['content of first', 'content of second', 'content of third']
let contentArr = [
	{id: 1, img: 'Image-1', content: 'this is content for ist'},
	{id: 2, img: 'Image-2', content: 'this is content for second'},
	{id: 3, img: 'Image-3', content: 'this is content for third'},
]


export default function ImageStepper() {
	let [state, setState] = React.useState(1)
	let timerRef = React.useRef()

	React.useEffect(() => {
		let timerId = setTimeout(() => {
			timerRef.current = setState((prev => {
				return (prev === contentArr.length) ? 1 : (prev + 1)
			}))
		}, 5000);

		return () => clearTimeout(timerId)

	}, [state])
	
	

	return (
		<div className='container'>
			<div>
				{contentArr.map(({id, img}) => {
					return (
					<div key={id} style={{visibility: (id===state) ? 'visible' : 'hidden'}}>
						<p>{img}</p>
					</div>
				)})}
			</div>
			<div>
				{contentArr.map(({id, content}) => {
					return (
					<div key={id}>
						<p onClick={() => setState(id)} style={{fontWeight: (id===state) ? 'bold' : 'normal'}}>{content }</p>
					</div>
				)})}
			</div>
		</div>
	)
}
