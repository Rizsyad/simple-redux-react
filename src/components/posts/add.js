import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../redux/slice/postSlice";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Button,
  useBoolean,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdSend } from "react-icons/md";

const AddPost = () => {
  const [judulPost, setJudulPost] = useState("");
  const [contentPost, setContentPost] = useState("");
  const [loading, setLoading] = useBoolean();

  // get posts in redux
  const posts = useSelector((state) => state.post.contents);
  const dispatch = useDispatch();

  // handle change events
  const handleChangeTitle = (e) => setJudulPost(e.target.value);
  const handleChangeContent = (e) => setContentPost(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataPosts = {
      id: Math.floor(Math.random() * 100) + 1,
      title: judulPost,
      content: contentPost,
    };

    setLoading.toggle();

    setTimeout(() => {
      dispatch(addPost(dataPosts));
      setJudulPost("");
      setContentPost("");
      setLoading.toggle();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="judul">Title</FormLabel>
        <Input
          id="judul"
          type="text"
          placeholder="Title"
          value={judulPost}
          onChange={handleChangeTitle}
          isDisabled={loading}
        />
        <Box mt="6" />
        <FormLabel htmlFor="isi">Content</FormLabel>
        <Textarea
          id="isi"
          placeholder="Content"
          value={contentPost}
          onChange={handleChangeContent}
          isDisabled={loading}
        />
        {loading ? (
          <Button
            mt="3"
            w="100%"
            colorScheme="teal"
            isLoading
            loadingText="Loading"
            spinnerPlacement="end"
          />
        ) : (
          <Button
            mt="3"
            w="100%"
            colorScheme="teal"
            rightIcon={<MdSend />}
            type="submit"
          >
            Add Post
          </Button>
        )}
      </FormControl>
    </form>
  );
};

export default AddPost;
