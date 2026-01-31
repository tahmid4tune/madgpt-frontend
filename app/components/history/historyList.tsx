"use client";

import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { HistoryType } from "./types/historyType";
import Link from "next/link";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteChatHistory } from "../../actions/chat";

export const HistoryList = ({ history }: HistoryType) => {
  return (
    <List className="w-full rounded-lg">
      {history.map(({ id, name }) => (
        <ListItem
          key={id}
          disablePadding
          className="hover:bg-gray-700 hover:rounded-xl"
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation(); // VERY important
                // handle delete here
                deleteChatHistory(id);
              }}
            >
              <DeleteOutlineIcon className="text-gray-400 hover:text-white" />
            </IconButton>
          }
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
