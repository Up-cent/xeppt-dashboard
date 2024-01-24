import Button from '../button/button';
import Input from '../input/input';
import add from '../../assets/icons/add.svg';
import './add-money.css';

export default function AddMoney() {
	return (
		<div className='add-money__wrapper'>
			<div className='add-money__button-wrapper'>
				<Button width='312'>Add money</Button>
			</div>
			<h3 className='add-money__title'>Bank Account and Cards</h3>
			<Input placeholder='Signature RBC visa ( ****3234)' />
			<Input placeholder='TD Bank Debit ( ****0024)' />
			<div className='add-money__link-wrapper'>
				<img
					className='add-money__img'
					src={add}
					alt='add'
				/>
				<a
					className='add-money__link'
					href='#'
				>
					Link a card or bank
				</a>
			</div>
			<div className='add-money__button-m-wrapper'>
				<Button width='312'>Add money</Button>
			</div>
		</div>
	);
}
