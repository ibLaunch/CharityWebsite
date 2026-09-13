import type { ReactNode } from "react";

/**
 * Level 1 "Brand" scroll reveal: fade plus a 16px rise as the element enters.
 *
 * These are presentational wrappers only — all behaviour lives in CSS using
 * scroll-driven animations (`animation-timeline: view()`), see index.css.
 *
 * Why no JavaScript: an earlier IntersectionObserver version could leave a
 * section permanently invisible if a fast scroll carried it past the viewport
 * between two observer samples. On a donation site, silently hiding content is
 * a far worse outcome than not animating. With the CSS approach the content is
 * visible by default and the animation is pure progressive enhancement:
 * browsers without support (currently Safari and Firefox) simply render the
 * page static, which is exactly what the motion guardrails ask for.
 *
 * Never wrap the hero headline, the trust line, or a donate CTA — motion must
 * never delay or obscure the primary action.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

/** Container whose `RevealItem` children enter in sequence. */
export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <div
      className={`reveal reveal-item ${className}`}
      style={{ ["--reveal-index" as string]: index }}
    >
      {children}
    </div>
  );
}
