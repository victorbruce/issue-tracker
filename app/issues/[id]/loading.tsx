import { Flex, Card, Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingDetailIssue = async () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="5rem" />
      <Flex gap="3" my="3">
        <Skeleton width="2rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" variant="surface" mt="4">
        <Skeleton count={4} />
      </Card>
    </Box>
  );
};

export default LoadingDetailIssue;
