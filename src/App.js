import Posts from "./components/posts";
import { Stack, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <Stack>
      <Heading align="center" letterSpacing={5}>
        CuyBlog
      </Heading>
      <Posts />
    </Stack>
  );
};

export default App;
