# Initialization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize a Vite React 19 + TypeScript app with shadcn/ui, zod, and Kubb code generation wired for OpenAPI-driven API clients.

**Architecture:** Use Vite as the app shell, React 19 for the UI runtime, and TypeScript for type safety. Add shadcn/ui on top of the default Vite app structure with Tailwind-based styling, and keep Kubb isolated as a codegen tool that reads an OpenAPI spec and writes generated API types/clients into a dedicated source directory.

**Tech Stack:** Vite, React 19, TypeScript, shadcn/ui, Tailwind CSS, zod, Kubb, pnpm.

---

### Task 1: Scaffold the Vite app

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `.gitignore`

- [ ] **Step 1: Create the Vite React TypeScript scaffold**

Run: `pnpm create vite@latest . -- --template react-ts`
Expected: Vite creates the default React + TS project files in the current directory.

- [ ] **Step 2: Install React 19 and baseline deps**

Run: `pnpm add react@^19 react-dom@^19 zod`
Expected: `package.json` depends on React 19 and zod.

- [ ] **Step 3: Install dev tooling for Vite and Kubb**

Run: `pnpm add -D @types/react @types/react-dom @vitejs/plugin-react kubb @kubb/cli @kubb/oas @kubb/typescript @kubb/zod tailwindcss postcss autoprefixer`
Expected: `package.json` includes the Vite React plugin, Tailwind, and Kubb packages.

- [ ] **Step 4: Verify the app starts**

Run: `pnpm dev`
Expected: Vite dev server starts without type or syntax errors.

### Task 2: Add shadcn/ui foundation

**Files:**
- Create: `components.json`
- Create: `src/lib/utils.ts`
- Modify: `src/index.css`
- Modify: `src/App.tsx`

- [ ] **Step 1: Initialize shadcn config**

Create `components.json` with the Vite/React/TypeScript path aliases and `src/components` output directory.

- [ ] **Step 2: Add the cn helper used by shadcn components**

Create `src/lib/utils.ts` with:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Configure Tailwind entry styles**

Update `src/index.css` to include Tailwind directives and the CSS variables expected by shadcn/ui.

- [ ] **Step 4: Keep the starter app runnable**

Update `src/App.tsx` to a minimal component that imports no extra UI beyond the app shell.

### Task 3: Wire Kubb code generation

**Files:**
- Create: `kubb.config.ts`
- Create: `openapi/openapi.yaml`
- Create: `src/api/client/`
- Modify: `package.json`

- [ ] **Step 1: Add a Kubb config**

Create `kubb.config.ts` that reads `openapi/openapi.yaml` and generates TypeScript + zod artifacts into `src/api/client`.

- [ ] **Step 2: Add an OpenAPI source file**

Create `openapi/openapi.yaml` with a minimal valid OpenAPI 3.0 document so the generator has an input file.

- [ ] **Step 3: Add a generation script**

Update `package.json` with `"api:gen": "kubb"`.

- [ ] **Step 4: Verify generation runs**

Run: `pnpm api:gen`
Expected: Kubb reads `openapi/openapi.yaml` and writes generated files into `src/api/client`.

### Task 4: Validate the initialized project

**Files:**
- Modify: `package.json` if needed

- [ ] **Step 1: Run typecheck**

Run: `pnpm exec tsc -p tsconfig.json --noEmit`
Expected: TypeScript completes without errors.

- [ ] **Step 2: Run the production build**

Run: `pnpm build`
Expected: Vite builds successfully.

- [ ] **Step 3: Confirm the generated file set is minimal**

Inspect `git status --short` and ensure only initialization files were created or modified.
