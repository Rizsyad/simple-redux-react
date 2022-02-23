import { useDispatch } from "react-redux";
import { Box, Heading, Text, Spacer, Button, Flex } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { deletePost } from "../../redux/slice/postSlice";

const DetailPost = ({ id, title, content, ...options }) => {
  const dispatch = useDispatch();

  // handle onclick
  const handleClickDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <Box
      w="100%"
      p={4}
      border="1px"
      rounded="md"
      borderColor="gray.200"
      boxShadow="md"
      mt={6}
      {...options}
    >
      <Flex>
        <Heading fontSize="4xl">{title}</Heading>
        <Spacer />
        <Button
          colorScheme="red"
          rightIcon={<FaTrash />}
          onClick={() => handleClickDelete(id)}
        >
          Delete
        </Button>
      </Flex>

      <Text mt={4} color="gray.500">
        {content}
      </Text>
    </Box>
  );
};

export default DetailPost;
