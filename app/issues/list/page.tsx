import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import IssueTable, { IssueQuery } from "./IssueTable";
import IssuesToolBar from "./IssuesToolBar";
import { columnNames } from "./IssueTable";
interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issuesCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="4">
      <IssuesToolBar />
      <IssueTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        itemsCount={issuesCount}
        pageSize={pageSize}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
