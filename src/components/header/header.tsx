import logoL from '../../assets/images/logo-l.svg';
import notification from '../../assets/icons/notifications.svg';
import expand from '../../assets/icons/expand.svg';
import humburger from '../../assets/icons/humburger.svg';
import './header.css';

export default function Header() {
	return (
		<header className='header'>
			<div className='wrapper'>
				<div className='header-wrapper'>
					<img
						className='header__humburger'
						src={humburger}
						alt='humburger'
					/>
					<img
						src={logoL}
						className='logo'
						alt='Logo'
					/>

					<nav className='nav'>
						<ul className='nav__list'>
							<li className='nav__item active-link'>Home</li>
							<li className='nav__item'>XEPPT Card</li>
							<li className='nav__item'>Statements</li>
						</ul>
					</nav>

					<div className='user__menu'>
						<span className='language'>fr</span>
						<span className='user__menu-icon-wrapper'>
							<img
								className='header__icon'
								src={notification}
								alt='notification'
							/>
						</span>
						<span className='user__menu-icon-wrapper'>
							<span className='header__icon-text'>pm</span>
						</span>
						<div className='user__menu-name'>PETER MORGAN</div>
						<img
							className='header__icon-expand'
							src={expand}
							alt='notification'
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
