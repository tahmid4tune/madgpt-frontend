import { Skeleton, Stack } from "@mui/material";

export default function MessagesSkeleton() {
  return (
    <Stack spacing={2} p={2}>
      {[...Array(5)].map((_, i) => (
        <Skeleton
          key={i}
          variant="rounded"
          height={40}
          width={`${60 + i * 5}%`}
        />
      ))}
    </Stack>
  );
}
