import { useQuery, useMutation } from '@apollo/client';
import { GET_USER_DATA } from '../graphql/queries';
import { DELETE_POST } from '../graphql/mutations';

const Posts = () => {
  const { loading, error, data } = useQuery(GET_USER_DATA);
  const [deletePost] = useMutation(DELETE_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDelete = (id) => {
    deletePost({ variables: { id } });
  };

  return (
    <div>
      {data.user.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
