import PostForm from "../../components/PostForm/PostForm";
import { useNavigate } from "react-router-dom";

export default function (prop) {
  let navigate = useNavigate();
  return (
    <div>
      <PostForm navigate = {navigate}  />
    </div>
  );
}