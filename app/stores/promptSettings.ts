"use client";

import { create } from "zustand";

type PromptSettingsState = {
  model: string;
  setModel: (model: string) => void;
};

export const usePromptSettingsStore = create<PromptSettingsState>((set) => ({
  model: "meta-llama/llama-4-scout-17b-16e-instruct",
  setModel: (model) =>
    set((state) => ({
      ...state,
      model,
    })),
}));
