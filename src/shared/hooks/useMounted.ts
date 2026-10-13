"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True only on the client, after hydration — for UI that depends on browser-only state. */
export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
