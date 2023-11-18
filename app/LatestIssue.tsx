import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge } from "./components";
import Link from "next/link";

const LatestIssue = async () => {
  const lastestIssues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size="4" mb="4">Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {lastestIssues.map((latestIssue) => (
            <Table.Row key={latestIssue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${latestIssue.id}`}>
                      {latestIssue.title}
                    </Link>
                    <IssueStatusBadge status={latestIssue.status} />
                  </Flex>
                  {latestIssue.assignedToUser && (
                    <Avatar
                      src={latestIssue.assignedToUser.image!}
                      fallback="?"
                      size="2"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssue;
