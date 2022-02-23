import { useEffect } from "react";
import { useSelector } from "react-redux";
import DetailPost from "./detailPost";
import SkeletonPost from "./skeletonPost";
import { Stack, useBoolean } from "@chakra-ui/react";

const ListPost = () => {
  const posts = useSelector((state) => state.post.contents);
  const [loading, setLoading] = useBoolean();

  useEffect(() => {
    setTimeout(() => {
      setLoading.on();
    }, 2000);
  }, [loading]);

  return (
    <Stack spacing={8}>
      {posts.map((post, idx) => {
        return !loading ? (
          <SkeletonPost key={idx} />
        ) : (
          <DetailPost
            id={post.id}
            title={post.title}
            content={post.content}
            key={idx}
          />
        );
      })}
    </Stack>
  );
};

export default ListPost;
