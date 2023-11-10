import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssue = () => {
  return (
    <Box className="max-w-xl">
      loading...
      <form className="space-y-3">
        <Skeleton />
        <Skeleton height="20rem" />
      </form>
    </Box>
  );
};

export default LoadingNewIssue;
