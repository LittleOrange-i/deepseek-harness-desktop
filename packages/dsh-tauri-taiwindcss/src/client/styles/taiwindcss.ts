import { cssr } from 'dsh-tauri-ui/client'

const TAIWINDCSS_GENERATED = `
/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --spacing: 0.25rem;
    --font-weight-medium: 500;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .isolate {
    isolation: isolate;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .m-0 {
    margin: calc(var(--spacing) * 0);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  .box-border {
    box-sizing: border-box;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .table {
    display: table;
  }
  .h-\\[16px\\] {
    height: 16px;
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[32px\\] {
    height: 32px;
  }
  .h-\\[36px\\] {
    height: 36px;
  }
  .h-\\[38px\\] {
    height: 38px;
  }
  .h-\\[calc\\(28px\\+var\\(--dsh-content-font-delta\\,0px\\)\\)\\] {
    height: calc(28px + var(--dsh-content-font-delta,0px));
  }
  .min-h-\\[28px\\] {
    min-height: 28px;
  }
  .w-\\[16px\\] {
    width: 16px;
  }
  .w-\\[24px\\] {
    width: 24px;
  }
  .w-\\[28px\\] {
    width: 28px;
  }
  .w-\\[calc\\(28px\\+var\\(--dsh-content-font-delta\\,0px\\)\\)\\] {
    width: calc(28px + var(--dsh-content-font-delta,0px));
  }
  .w-full {
    width: 100%;
  }
  .max-w-\\[220px\\] {
    max-width: 220px;
  }
  .max-w-\\[calc\\(var\\(--dsh-composer-card-max-width\\)_-_4_\\*_var\\(--dsh-composer-dock-inset\\)\\)\\] {
    max-width: calc(var(--dsh-composer-card-max-width) - 4 * var(--dsh-composer-dock-inset));
  }
  .max-w-\\[min\\(100\\%\\,240px\\)\\] {
    max-width: min(100%, 240px);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .cursor-\\[inherit\\] {
    cursor: inherit;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-\\[2px\\] {
    gap: 2px;
  }
  .gap-\\[4px\\] {
    gap: 4px;
  }
  .gap-\\[6px\\] {
    gap: 6px;
  }
  .gap-\\[10px\\] {
    gap: 10px;
  }
  .gap-\\[12px\\] {
    gap: 12px;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-\\[6px\\] {
    border-radius: 6px;
  }
  .rounded-\\[8px\\] {
    border-radius: 8px;
  }
  .rounded-\\[10px\\] {
    border-radius: 10px;
  }
  .rounded-\\[12px\\] {
    border-radius: 12px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-md {
    border-radius: var(--dsw-radius-md);
  }
  .rounded-sm {
    border-radius: var(--dsw-radius-sm);
  }
  .rounded-xs {
    border-radius: var(--dsw-radius-xs);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-\\[0\\.5px\\] {
    border-style: var(--tw-border-style);
    border-width: 0.5px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .border-\\[color-mix\\(in_srgb\\,var\\(--dsw-alias-state-error-primary\\)_30\\%\\,transparent\\)\\] {
    border-color: var(--dsw-alias-state-error-primary);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in srgb,var(--dsw-alias-state-error-primary) 30%,transparent);
    }
  }
  .border-border-l3 {
    border-color: var(--dsw-alias-border-l3);
  }
  .bg-\\[var\\(--dsw-alias-button-elevated-fill\\)\\] {
    background-color: var(--dsw-alias-button-elevated-fill);
  }
  .bg-layer-1 {
    background-color: var(--dsw-alias-bg-layer-1);
  }
  .bg-module-platform {
    background-color: var(--dsw-alias-bg-module-platform);
  }
  .bg-primary-fill {
    background-color: var(--dsw-alias-button-primary-fill);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-\\[2px\\] {
    padding: 2px;
  }
  .p-\\[6px\\] {
    padding: 6px;
  }
  .px-\\[7px\\] {
    padding-inline: 7px;
  }
  .px-\\[8px\\] {
    padding-inline: 8px;
  }
  .px-\\[10px\\] {
    padding-inline: 10px;
  }
  .px-\\[12px\\] {
    padding-inline: 12px;
  }
  .px-\\[14px\\] {
    padding-inline: 14px;
  }
  .px-\\[16px\\] {
    padding-inline: 16px;
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[4px\\] {
    padding-block: 4px;
  }
  .py-\\[8px\\] {
    padding-block: 8px;
  }
  .pr-\\[4px\\] {
    padding-right: 4px;
  }
  .pr-\\[5px\\] {
    padding-right: 5px;
  }
  .pl-\\[8px\\] {
    padding-left: 8px;
  }
  .pl-\\[12px\\] {
    padding-left: 12px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .leading-\\[17px\\] {
    --tw-leading: 17px;
    line-height: 17px;
  }
  .leading-\\[18px\\] {
    --tw-leading: 18px;
    line-height: 18px;
  }
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[22px\\] {
    --tw-leading: 22px;
    line-height: 22px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-\\[var\\(--dsw-alias-label-caption\\)\\] {
    color: var(--dsw-alias-label-caption);
  }
  .text-\\[var\\(--dsw-alias-label-primary-dimmed\\,var\\(--dsw-alias-label-dimmed\\)\\)\\] {
    color: var(--dsw-alias-label-primary-dimmed,var(--dsw-alias-label-dimmed));
  }
  .text-error {
    color: var(--dsw-alias-state-error-primary);
  }
  .text-idle {
    color: var(--dsw-alias-state-idle-primary);
  }
  .text-inherit {
    color: inherit;
  }
  .text-primary {
    color: var(--dsw-alias-label-primary);
  }
  .text-primary-fg {
    color: var(--dsw-alias-label-primary-foreground);
  }
  .text-secondary {
    color: var(--dsw-alias-label-secondary);
  }
  .text-success {
    color: var(--dsw-alias-state-success-primary);
  }
  .text-tertiary {
    color: var(--dsw-alias-label-tertiary);
  }
  .text-warn {
    color: var(--dsw-alias-state-warn-primary);
  }
  .lowercase {
    text-transform: lowercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }
  .decoration-transparent {
    text-decoration-color: transparent;
  }
  .underline-offset-\\[2px\\] {
    text-underline-offset: 2px;
  }
  .accent-\\[var\\(--dsw-alias-button-primary-fill\\)\\] {
    accent-color: var(--dsw-alias-button-primary-fill);
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[inset_0_0_0_0\\.5px_var\\(--dsw-alias-border-l3\\)\\] {
    --tw-shadow: inset 0 0 0 0.5px var(--tw-shadow-color, var(--dsw-alias-border-l3));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[var\\(--dsw-elevation-panel\\)\\] {
    --tw-shadow: var(--dsw-elevation-panel);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[text-decoration-color\\] {
    transition-property: text-decoration-color;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-\\[120ms\\] {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .ease-\\[ease\\] {
    --tw-ease: ease;
    transition-timing-function: ease;
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .\\[--dsw-alias-interactive-bg-hover\\:color-mix\\(in_srgb\\,var\\(--dsw-alias-state-error-primary\\)_8\\%\\,transparent\\)\\] {
    --dsw-alias-interactive-bg-hover: var(--dsw-alias-state-error-primary);
    @supports (color: color-mix(in lab, red, red)) {
      --dsw-alias-interactive-bg-hover: color-mix(in srgb,var(--dsw-alias-state-error-primary) 8%,transparent);
    }
  }
  .\\[--dsw-elevation-stroke-color\\:var\\(--dsw-alias-border-l1\\)\\] {
    --dsw-elevation-stroke-color: var(--dsw-alias-border-l1);
  }
  .\\[corner-shape\\:round\\] {
    corner-shape: round;
  }
  .\\[font\\:inherit\\] {
    font: inherit;
  }
  .before\\:pointer-events-none {
    &::before {
      content: var(--tw-content);
      pointer-events: none;
    }
  }
  .before\\:absolute {
    &::before {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .before\\:inset-0 {
    &::before {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .before\\:z-\\[-1\\] {
    &::before {
      content: var(--tw-content);
      z-index: -1;
    }
  }
  .before\\:rounded-\\[inherit\\] {
    &::before {
      content: var(--tw-content);
      border-radius: inherit;
    }
  }
  .before\\:bg-\\[var\\(--dsw-specific-menu\\)\\] {
    &::before {
      content: var(--tw-content);
      background-color: var(--dsw-specific-menu);
    }
  }
  .before\\:\\[backdrop-filter\\:var\\(--dsw-menu-backdrop-filter\\)\\] {
    &::before {
      content: var(--tw-content);
      backdrop-filter: var(--dsw-menu-backdrop-filter);
    }
  }
  .before\\:content-\\[\\"\\"\\] {
    &::before {
      content: var(--tw-content);
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-\\[20\\%\\] {
    &::after {
      content: var(--tw-content);
      inset: 20%;
    }
  }
  .after\\:rounded-full {
    &::after {
      content: var(--tw-content);
      border-radius: calc(infinity * 1px);
    }
  }
  .after\\:bg-current {
    &::after {
      content: var(--tw-content);
      background-color: currentcolor;
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      content: var(--tw-content);
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .after\\:\\[corner-shape\\:round\\] {
    &::after {
      content: var(--tw-content);
      corner-shape: round;
    }
  }
  .hover\\:bg-\\[var\\(--dsw-alias-bg-layer-4\\)\\] {
    &:hover {
      @media (hover: hover) {
        background-color: var(--dsw-alias-bg-layer-4);
      }
    }
  }
  .hover\\:bg-hover {
    &:hover {
      @media (hover: hover) {
        background-color: var(--dsw-alias-interactive-bg-hover);
      }
    }
  }
  .hover\\:text-secondary {
    &:hover {
      @media (hover: hover) {
        color: var(--dsw-alias-label-secondary);
      }
    }
  }
  .hover\\:not-disabled\\:bg-\\[var\\(--dsw-alias-button-floating-hover\\)\\] {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          background-color: var(--dsw-alias-button-floating-hover);
        }
      }
    }
  }
  .hover\\:not-disabled\\:bg-hover {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          background-color: var(--dsw-alias-interactive-bg-hover);
        }
      }
    }
  }
  .hover\\:not-disabled\\:bg-layer-1 {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          background-color: var(--dsw-alias-bg-layer-1);
        }
      }
    }
  }
  .hover\\:not-disabled\\:bg-primary-hover {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          background-color: var(--dsw-alias-button-primary-hover);
        }
      }
    }
  }
  .hover\\:not-disabled\\:text-primary {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          color: var(--dsw-alias-label-primary);
        }
      }
    }
  }
  .hover\\:not-disabled\\:text-secondary {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          color: var(--dsw-alias-label-secondary);
        }
      }
    }
  }
  .hover\\:not-disabled\\:decoration-current {
    &:hover {
      @media (hover: hover) {
        &:not(*:disabled) {
          text-decoration-color: currentcolor;
        }
      }
    }
  }
  .focus-visible\\:bg-\\[var\\(--dsw-alias-bg-layer-4\\)\\] {
    &:focus-visible {
      background-color: var(--dsw-alias-bg-layer-4);
    }
  }
  .focus-visible\\:text-secondary {
    &:focus-visible {
      color: var(--dsw-alias-label-secondary);
    }
  }
  .focus-visible\\:shadow-focus-ring {
    &:focus-visible {
      --tw-shadow: 0 0 0 2px var(--tw-shadow-color, var(--dsw-alias-border-l3));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:\\[outline\\:var\\(--dsw-focus-ring-width\\,2px\\)_solid_var\\(--dsw-focus-ring-color\\,var\\(--dsw-alias-state-business-primary\\)\\)\\] {
    &:focus-visible {
      outline: var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));
    }
  }
  .focus-visible\\:\\[outline-offset\\:1px\\] {
    &:focus-visible {
      outline-offset: 1px;
    }
  }
  .focus-visible\\:outline-none {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .active\\:not-disabled\\:bg-active {
    &:active {
      &:not(*:disabled) {
        background-color: var(--dsw-alias-interactive-bg-active);
      }
    }
  }
  .disabled\\:cursor-default {
    &:disabled {
      cursor: default;
    }
  }
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:text-\\[var\\(--dsw-alias-label-quaternary\\)\\] {
    &:disabled {
      color: var(--dsw-alias-label-quaternary);
    }
  }
  .disabled\\:text-dimmed {
    &:disabled {
      color: var(--dsw-alias-label-dimmed);
    }
  }
  .disabled\\:text-tertiary {
    &:disabled {
      color: var(--dsw-alias-label-tertiary);
    }
  }
  .disabled\\:opacity-40 {
    &:disabled {
      opacity: 40%;
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .has-\\[\\>input\\:disabled\\]\\:cursor-not-allowed {
    &:has(>input:disabled) {
      cursor: not-allowed;
    }
  }
  .has-\\[\\>input\\:disabled\\]\\:opacity-50 {
    &:has(>input:disabled) {
      opacity: 50%;
    }
  }
  .aria-expanded\\:bg-\\[var\\(--dsw-alias-bg-layer-4\\)\\] {
    &[aria-expanded="true"] {
      background-color: var(--dsw-alias-bg-layer-4);
    }
  }
  .aria-expanded\\:bg-hover {
    &[aria-expanded="true"] {
      background-color: var(--dsw-alias-interactive-bg-hover);
    }
  }
  .aria-expanded\\:text-secondary {
    &[aria-expanded="true"] {
      color: var(--dsw-alias-label-secondary);
    }
  }
  .data-\\[open\\=true\\]\\:rotate-180 {
    &[data-open="true"] {
      rotate: 180deg;
    }
  }
  .data-\\[tone\\=danger\\]\\:bg-\\[color-mix\\(in_srgb\\,var\\(--dsw-alias-state-error-primary\\)_10\\%\\,transparent\\)\\] {
    &[data-tone="danger"] {
      background-color: var(--dsw-alias-state-error-primary);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in srgb,var(--dsw-alias-state-error-primary) 10%,transparent);
      }
    }
  }
  .data-\\[tone\\=danger\\]\\:text-error {
    &[data-tone="danger"] {
      color: var(--dsw-alias-state-error-primary);
    }
  }
  .data-\\[tone\\=info\\]\\:bg-\\[color-mix\\(in_srgb\\,var\\(--dsw-alias-state-business-primary\\)_10\\%\\,transparent\\)\\] {
    &[data-tone="info"] {
      background-color: var(--dsw-alias-state-business-primary);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in srgb,var(--dsw-alias-state-business-primary) 10%,transparent);
      }
    }
  }
  .data-\\[tone\\=info\\]\\:text-business {
    &[data-tone="info"] {
      color: var(--dsw-alias-state-business-primary);
    }
  }
  .data-\\[tone\\=neutral\\]\\:bg-module-platform {
    &[data-tone="neutral"] {
      background-color: var(--dsw-alias-bg-module-platform);
    }
  }
  .data-\\[tone\\=neutral\\]\\:text-secondary {
    &[data-tone="neutral"] {
      color: var(--dsw-alias-label-secondary);
    }
  }
  .data-\\[tone\\=outline\\]\\:border-\\[0\\.5px\\] {
    &[data-tone="outline"] {
      border-style: var(--tw-border-style);
      border-width: 0.5px;
    }
  }
  .data-\\[tone\\=outline\\]\\:border-border-l4 {
    &[data-tone="outline"] {
      border-color: var(--dsw-alias-border-l4);
    }
  }
  .data-\\[tone\\=outline\\]\\:text-tertiary {
    &[data-tone="outline"] {
      color: var(--dsw-alias-label-tertiary);
    }
  }
  .\\@max-\\[460px\\]\\:hidden {
    @container (width < 460px) {
      display: none;
    }
  }
  .\\[\\&_svg\\]\\:h-\\[11px\\] {
    & svg {
      height: 11px;
    }
  }
  .\\[\\&_svg\\]\\:h-\\[14px\\] {
    & svg {
      height: 14px;
    }
  }
  .\\[\\&_svg\\]\\:w-\\[11px\\] {
    & svg {
      width: 11px;
    }
  }
  .\\[\\&_svg\\]\\:w-\\[14px\\] {
    & svg {
      width: 14px;
    }
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
    }
  }
}
`

const taiwindcss = cssr.c([TAIWINDCSS_GENERATED])

export default taiwindcss
