"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { usePromptSettingsStore } from "../stores/promptSettings";

const modelList = [
  "llama3.1:8b",
  "openai/gpt-oss-120b",
  "meta-llama/llama-4-scout-17b-16e-instruct",
] as const;
type Model = (typeof modelList)[number];
const providerModelMap = {
  "llama3.1:8b": "ollama",
  "openai/gpt-oss-120b": "groq",
  "meta-llama/llama-4-scout-17b-16e-instruct": "groq",
};

export const ModelsListDropdown = () => {
  const { setModel, setProvider } = usePromptSettingsStore((s) => s);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (model?: Model) => {
    if (model) {
      setModel(model);
      setProvider(providerModelMap[model]);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <ArrowDropDownIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => handleClose()}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {modelList.map((model, i) => (
          <MenuItem key={i} onClick={() => handleClose(model)}>
            {model}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
