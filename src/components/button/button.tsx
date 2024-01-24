import './button.css';

export default function Button({ children, width }) {
	return (
		<button
			style={{ width: `${width}px` }}
			className='button button__custom'
		>
			{children}
		</button>
	);
}
