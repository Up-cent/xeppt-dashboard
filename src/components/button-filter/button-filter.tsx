import './button-filter.css';

export default function ButtonFilter({ children, selected }) {
	return (
		<button className={`button button__filter ${selected ? 'selected' : ''}`}>
			{children}
		</button>
	);
}
