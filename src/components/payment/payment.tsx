import './payment.css';
import card from '../../assets/icons/credit-card.svg';
import wallet from '../../assets/icons/wallet.svg';

export default function Payment({ icon, name, type, date, value, income }) {
	return (
		<div className='payment'>
			<div className='payment__info'>
				<div
					className={
						icon === 'card'
							? 'payment__img-wrapper'
							: 'payment__img-wrapper deep'
					}
				>
					<img
						src={icon === 'card' ? card : wallet}
						alt='type of transaction'
					/>
				</div>

				<div className='payment__text'>
					<div className='payment__name'>{name}</div>
					<span className='payment__date'>{date}</span>
					<span className='payment__type'>{type}</span>
				</div>
			</div>
			<div className={income ? 'payment__value income' : 'payment__value'}>
				{value}
			</div>
		</div>
	);
}
