import { Skeleton, SkeletonText, Box } from "@chakra-ui/react";

const SkeletonPost = ({ ...options }) => {
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
      <Skeleton height="20px" mt="3" width="150px" />
      <SkeletonText mt={3} />
    </Box>
  );
};

export default SkeletonPost;
