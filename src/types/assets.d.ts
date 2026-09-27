// Ambient declarations for non-code asset imports.
//
// Why this file exists:
// TypeScript 6 enables `noUncheckedSideEffectImports` by default, so side-effect
// imports such as `import "./globals.css";` are type-checked and error with
// TS2882 unless a matching module declaration exists. Next.js only ships
// declarations for CSS Modules (`*.module.css`) in `next/types/global.d.ts`.
//
// This must stay a global (non-module) file: no top-level import/export.

// Recognize plain CSS files imported for their side effects, e.g. `import "x.css";`
declare module "*.css" {}
