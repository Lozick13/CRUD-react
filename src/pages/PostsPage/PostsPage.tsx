import { FC } from 'react';
import AddPost from '../../components/AddPost/AddPost';
import PostBlock from '../../components/PostBlock/PostBlock';
import { Post } from '../../Post';
import classes from './postspage.module.css';

const PostsPage: FC<{ posts: Post[] }> = ({ posts }) => {
	return (
		<>
			<section className={classes['posts-page']}>
				<h2 className={classes['posts-page__header']}>Посты</h2>
				<AddPost />
				<div className={classes['posts__container']}>
					{posts.map(post => (
						<PostBlock key={post.id} id={post.id} content={post.content} />
					))}
				</div>
			</section>
		</>
	);
};

export default PostsPage;
