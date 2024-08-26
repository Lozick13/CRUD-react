import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../UI/ActionButton/ActionButton';
import BaseTextarea from '../../UI/BaseTextarea/BaseTextarea';
import IconButton from '../../UI/IconButton/IconButton';
import classes from './editpost.module.css';

const EditPost: FC<{
	id: number;
	content: string;
	setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
	editPost: (id: number, content: string) => void;
}> = ({ id, content, setIsEdit, editPost }) => {
	const navigate = useNavigate();
	const [handleContent, setHandleContent] = useState<string>(content);

	const handleAddNewPost = (e: React.FormEvent) => {
		e.preventDefault();
		editPost(id, handleContent);
		navigate(`/posts/${id}`);
	};

	return (
		<>
			<form onSubmit={handleAddNewPost} className={classes['edit-post']}>
				<div className={classes['edit-post__header']}>
					<span>Редактирование</span>
					<IconButton
						click={() => {
							setIsEdit(false);
						}}
						icon='close'
					/>
				</div>
				<div className={classes['edit-post__content']}>
					<h3>Пост {id}</h3>
					<BaseTextarea
						id='content'
						name='content'
						value={handleContent}
						required={true}
						change={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setHandleContent(e.target.value)
						}
					/>
					<div className={classes['edit-post__actions']}>
						<ActionButton>Сохранить</ActionButton>
					</div>
				</div>
			</form>
		</>
	);
};

export default EditPost;
