// routes/PostDetails.tsx
import { useLocation } from 'react-router-dom';
import Post from '../components/Post';

const PostDetails = () => {
  const location = useLocation();
  const { post } = location.state;

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default PostDetails;
