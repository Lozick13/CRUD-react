import { FC } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../../UI/ActionButton/ActionButton';
import classes from './postblock.module.css';

const PostBlock: FC<{
	id: number;
	content: string;
	click?: boolean;
	setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
	deleteAction?: (id: number) => void;
}> = ({ id, content, click, setIsEdit, deleteAction }) => {
	return (
		<>
			<Link to={`/posts/${id}`} style={click ? { pointerEvents: 'none' } : {}}>
				<article className={classes['post']}>
					<h3>Пост {id}</h3>

					<p>{content}</p>
					{setIsEdit && (
						<div className={classes['post__actions']}>
							<ActionButton
								click={() => {
									setIsEdit(true);
								}}
							>
								Изменить
							</ActionButton>
							<ActionButton
								negativeAction={true}
								click={() => {
									if (deleteAction) {
										deleteAction(id);
									}
								}}
							>
								Удалить
							</ActionButton>
						</div>
					)}
				</article>
			</Link>
		</>
	);
};

export default PostBlock;
