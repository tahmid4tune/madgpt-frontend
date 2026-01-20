"use client";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { HistoryType } from "./types/historyType";
import Link from "next/link";

export const HistoryList = ({ history }: HistoryType) => {
  return (
    <List className="w-full rounded-lg">
      {history.map(({ id, name }) => (
        <ListItem
          key={id}
          disablePadding
          className="hover:bg-gray-700 hover:rounded-xl"
        >
          <ListItemButton
            component={Link}
            href={`/chat/${id}`}
            prefetch={false}
          >
            <ListItemText
              primary={name}
              primaryTypographyProps={{
                className: "text-sm font-medium text-white",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
