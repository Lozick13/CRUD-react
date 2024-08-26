import { Link } from 'react-router-dom';
import ActionButton from '../../UI/ActionButton/ActionButton';
import classes from './addpost.module.css';

const AddPost = () => {
	return (
		<>
			<article className={classes['add-post']}>
				<Link to={'/posts/new'}>
					<ActionButton>Новый пост</ActionButton>
				</Link>
			</article>
		</>
	);
};

export default AddPost;
