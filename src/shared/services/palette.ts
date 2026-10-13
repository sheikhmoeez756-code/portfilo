export const PALETTE_OPEN_EVENT = "palette:open";

export const openCommandPalette = () => {
  window.dispatchEvent(new Event(PALETTE_OPEN_EVENT));
};
