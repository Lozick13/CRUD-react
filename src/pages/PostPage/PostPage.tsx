import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditPost from '../../components/EditPost/EditPost';
import PostBlock from '../../components/PostBlock/PostBlock';
import { Post } from '../../Post';
import IconButton from '../../UI/IconButton/IconButton';
import classes from './postpage.module.css';

const PostPage: FC<{
	post: Post;
	deleteAction: (id: number) => void;
	editPost: (id: number, content: string) => void;
}> = ({ post, deleteAction, editPost }) => {
	const navigate = useNavigate();
	const [isEdit, setIsEdit] = useState<boolean>(false);

	return (
		<>
			<section className={classes['post-page']}>
				<h2 className={classes['post-page__header']}>
					<IconButton
						click={() => {
							navigate('/posts');
						}}
						icon='arrow_back'
					/>
					Ваш пост
				</h2>
				{!isEdit ? (
					<PostBlock
						id={post.id}
						content={post.content}
						setIsEdit={setIsEdit}
						deleteAction={async (id: number) => {
							await deleteAction(id);
							navigate('/posts');
						}}
					/>
				) : (
					<EditPost
						id={post.id}
						content={post.content}
						setIsEdit={setIsEdit}
						editPost={async (id: number, content: string) => {
							await editPost(id, content);
							setIsEdit(false);
						}}
					/>
				)}
			</section>
		</>
	);
};

export default PostPage;
