import { FC, ReactNode } from 'react';
import classes from './actionbutton.module.css';

const actionButton: FC<{
	children: ReactNode;
	negativeAction?: boolean;
	click?: () => void;
}> = ({ children, negativeAction, click }) => {
	return (
		<>
			<button
				className={classes['action-button']}
				style={
					negativeAction
						? { backgroundColor: '#f63b3b' }
						: { backgroundColor: '#565efb' }
				}
				onClick={click}
			>
				{children}
			</button>
		</>
	);
};

export default actionButton;
