"use client";

import { Tooltip } from "react-tooltip"; // ✅ correct named import

export default function TooltipWrapper() {
  return (
    <Tooltip
      id="app-tooltip"
      place="bottom"
      effect="solid"
      className="!bg-gray-900 !text-white !text-xs !py-1 !px-2 !rounded"
    />
  );
}
