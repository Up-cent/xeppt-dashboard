import flag from '../../assets/icons/flag.svg';
import card from '../../assets/images/card.svg';
import add from '../../assets/icons/add.svg';
import ButtonFilter from '../../components/button-filter/button-filter';
import Button from '../../components/button/button';
import Payment from '../../components/payment/payment';
import AddMoney from '../../components/add-money/add-money';
import './dashboard.css';

export default function Dashboard() {
	return (
		<>
			<div className='wrapper'>
				<div className='dashboard'>
					<div className='dashboard__part'>
						<h3 className='dashboard__title'>XEPPT Account Balance</h3>
						<div className='dashboard__balance'>
							<img
								className='dashboard__balance-image'
								src={flag}
								alt='currency'
							/>
							<div className='dashboard__balance-currency'>$191.00</div>
						</div>
						<h3 className='dashboard__title'>XEPPT Prepaid Card</h3>
						<div className='dashboard__card-wrapper'>
							<div className='dashboard__card'>
								<div className='dashboard__card-text'>
									<span className='dashboard__card-status'>Inactive</span>
									<div className='dashboard__card-balance'>$0.00</div>
									<div className='dashboard__card-balance-text'>
										Available Balance
									</div>
									<div className='dashboard__card-balance-text'>
										4588 •••• •••• 0092
									</div>
								</div>
								<img
									className='dashboard__card-image'
									src={card}
									alt='card'
								/>
							</div>

							<div className='dashboard__card dashboard__card-empty'>
								<img
									className='dashboard__add'
									src={add}
									alt='add'
								/>
								<div className='dashboard__card-empty-text'>
									Order a new card
								</div>
							</div>
						</div>
						<h3 className='dashboard__title'>Transactions</h3>
						<div className='dashboard__buttons-wrapper'>
							<div className='dashboard__filter-wrapper'>
								<ButtonFilter selected={true}>All</ButtonFilter>
								<ButtonFilter selected={false}>XEPPT Card</ButtonFilter>
							</div>
							<div className='dashboard__button-wrapper-desktop'>
								<Button width='140'>Show more</Button>
							</div>
						</div>
						<div className='dashboard__paymnets'>
							<Payment
								icon='card'
								name='Cineplex Inc.'
								date='Sept 24,'
								type=' Payment'
								value='-$42.50'
								income={false}
							/>
							<Payment
								icon='wallet'
								name='RBC Royal Bank'
								date='Aug 19, '
								type='Transfer from bank'
								value='+$500.00'
								income={true}
							/>
							<Payment
								icon='card'
								name='Skyline Restaurant'
								date='Aug 1, '
								type='Payment'
								value='-$110.45'
								income={false}
							/>
						</div>
						<div className='dashboard__button-wrapper-mobile'>
							<Button width='140'>Show more</Button>
						</div>
					</div>
					<div className='dashboard__part'>
						<AddMoney />
					</div>
				</div>
			</div>
		</>
	);
}
