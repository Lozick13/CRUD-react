import { FC } from 'react';
import classes from './basetextarea.module.css';

const BaseTextarea: FC<{
	name: string;
	id: string;
	value: string;
	required?: boolean;
	change: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ name, id, value, required, change }) => {
	return (
		<>
			<textarea
				className={classes['base-textarea']}
				name={name}
				id={id}
				value={value}
				required={required}
				onChange={change}
			></textarea>
		</>
	);
};

export default BaseTextarea;
