import React from "react";
import { Badge } from "@radix-ui/themes";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

interface BadgeInfo {
  label: string;
  color: "red" | "violet" | "green";
}

const statusMap: Record<Status, BadgeInfo> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
