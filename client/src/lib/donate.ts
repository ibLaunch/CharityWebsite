// Single source of truth for the donation destination.
//
// Donations are handled by Zeffy (zero-fee platform for nonprofits). The
// short link is the one shared in print and social material, so keep both
// values in sync if it ever changes.
//
// Short link: https://tinyurl.com/bundele-foundation
export const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/bridging-generations-building-futures";

/** Open the donation form in a new tab. */
export function openDonate() {
  window.open(DONATE_URL, "_blank", "noopener,noreferrer");
}
