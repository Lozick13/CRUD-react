import { FC } from 'react';
import classes from './iconbutton.module.css';

const IconButton: FC<{ icon: string; click?: () => void }> = ({
	icon,
	click,
}) => {
	return (
		<>
			<button className={classes['icon-button']} onClick={click}>
				<i className='material-icons'>{icon}</i>
			</button>
		</>
	);
};

export default IconButton;
