import { FC, useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import AddPostPage from './pages/AddPostPage/AddPostPage';
import PostPage from './pages/PostPage/PostPage';
import PostsPage from './pages/PostsPage/PostsPage';
import { Post } from './Post';

function App() {
	const url = 'http://localhost:7070';
	const [posts, setPosts] = useState<Post[]>([]);
	const [isUpdated, setUpdated] = useState<boolean>(false);

	const getData = async (url: string) => {
		try {
			const response = await fetch(`${url}`, {
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`);
			}

			const posts = await response.json();
			return posts;
		} catch (error) {
			console.error(error);
			return [];
		}
	};

	const addData = async (url: string, content: object) => {
		try {
			const response = await fetch(`${url}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(content),
			});

			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const deleteData = async (url: string) => {
		try {
			const response = await fetch(`${url}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const editData = async (url: string, content: object) => {
		try {
			const response = await fetch(`${url}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(content),
			});

			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const getPosts = async () => {
			const postsData = await getData(`${url}/posts`);
			setPosts(postsData);
		};

		getPosts();
	}, []);

	useEffect(() => {
		if (isUpdated) {
			const getPosts = async () => {
				const postsData = await getData(`${url}/posts`);
				setPosts(postsData);
			};

			getPosts();
			setUpdated(false);
		}
	}, [isUpdated]);

	const PostWrapper: FC<{ posts: Post[] }> = ({ posts }) => {
		const { id } = useParams();
		const post = posts.find((post: Post) => post.id === Number(id));

		return post ? (
			<PostPage
				post={post}
				deleteAction={(id: number) => {
					const deletePost = async (id: number) => {
						await deleteData(`${url}/posts/${id}`);
						setUpdated(true);
					};

					deletePost(id);
				}}
				editPost={(id: number, content: string) => {
					const editPost = async (id: number, content: string) => {
						await editData(`${url}/posts/${id}`, { content: content });
            setUpdated(true);
					};

					editPost(id, content);
				}}
			/>
		) : (
			<p>Пост не найден</p>
		);
	};

	return (
		<>
			<Routes>
				<Route path='/' index element={<PostsPage posts={posts} />} />
				<Route path='/posts' element={<PostsPage posts={posts} />} />
				<Route
					path='/posts/new'
					element={
						<AddPostPage
							addPost={async (content: string) => {
								await addData(`${url}/posts`, {
									content: content,
								});
								setUpdated(true);
							}}
						/>
					}
				/>
				<Route path='/posts/:id' element={<PostWrapper posts={posts} />} />
			</Routes>
		</>
	);
}

export default App;
