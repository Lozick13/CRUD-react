import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../UI/ActionButton/ActionButton';
import BaseTextarea from '../../UI/BaseTextarea/BaseTextarea';
import IconButton from '../../UI/IconButton/IconButton';
import classes from './newpost.module.css';

const NewPost: FC<{ addPost: (content: string) => void }> = ({ addPost }) => {
	const navigate = useNavigate();
	const [content, setContent] = useState<string>('');

	const handleAddNewPost = (e: React.FormEvent) => {
		e.preventDefault();
		addPost(content);
		navigate('/posts');
	};

	useEffect(() => {
		setContent(localStorage.getItem('newContent') || '');
		localStorage.removeItem('newContent');
	}, []);

	return (
		<>
			<form onSubmit={handleAddNewPost} className={classes['new-post']}>
				<div className={classes['new-post__close']}>
					<IconButton
						click={() => {
							localStorage.setItem('newContent', content);
							navigate('/posts');
						}}
						icon='close'
					/>
				</div>
				<BaseTextarea
					id='content'
					name='content'
					value={content}
					required={true}
					change={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
						setContent(e.target.value);
					}}
				/>
				<div className={classes['new-post__actions']}>
					<ActionButton>Опубликовать</ActionButton>
				</div>
			</form>
		</>
	);
};

export default NewPost;
