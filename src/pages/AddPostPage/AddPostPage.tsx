import { FC } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import classes from './addpostpage.module.css';

const AddPostPage: FC<{ addPost: (content: string) => void }> = ({
	addPost,
}) => {
	return (
		<>
			<section className={classes['add-posts-page']}>
				<h2 className={classes['add-posts-page__header']}>Новый пост</h2>
				<NewPost addPost={addPost} />
			</section>
		</>
	);
};

export default AddPostPage;
