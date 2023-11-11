import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from '@/app/components/Skeleton'

const IssueFormSkeleton = () => {
	return (
		<Box className="max-w-xl">
      <form className="space-y-3">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </form>
    </Box>
	)
}

export default IssueFormSkeleton