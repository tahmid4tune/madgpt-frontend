"use client";

import { usePromptSettingsStore } from "../stores/promptSettings";

export const PoweredBy = () => {
  const model = usePromptSettingsStore((s) => s.model);
  return (
    <div className="float-right">
      <div className="text-right">Powered By</div>
      <div className="text-yellow-200">{model}</div>
    </div>
  );
};
