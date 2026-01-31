"use client";

import { create } from "zustand";

type PromptSettingsState = {
  model: string;
  provider: string;
  setModel: (model: string) => void;
  setProvider: (provider: string) => void;
};

export const usePromptSettingsStore = create<PromptSettingsState>((set) => ({
  model: "meta-llama/llama-4-scout-17b-16e-instruct",
  provider: "groq",
  setModel: (model) =>
    set((state) => ({
      ...state,
      model,
    })),
  setProvider: (provider) =>
    set((state) => ({
      ...state,
      provider,
    })),
}));
