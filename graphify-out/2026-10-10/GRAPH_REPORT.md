# Graph Report - staytreasurecay-nextjs  (2026-10-10)

## Corpus Check
- 24 files · ~10,052 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 128 nodes · 187 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe8ba390`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- package.json
- compilerOptions
- devDependencies
- PuppyOfferSection.tsx
- index.html → Next.js Conversion Template
- include
- ExperienceSection.tsx
- layout.tsx
- eslint.config.mjs
- next.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Site` - 13 edges
3. `index.html → Next.js Conversion Template` - 10 edges
4. `TitleLines()` - 8 edges
5. `SmartImage()` - 7 edges
6. `scripts` - 7 edges
7. `include` - 6 edges
8. `richNodes()` - 4 edges
9. `lib` - 4 edges
10. `Brand()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `TitleLines()` --calls--> `richNodes()`  [EXTRACTED]
  components/TitleLines.tsx → components/RichText.tsx

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.15
Nodes (15): AboutSection(), BookingSection(), Brand(), BrandProps, ContactSection(), DestinationSection(), Hero(), IslandLifeSection() (+7 more)

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (18): next, dependencies, next, react, react-dom, description, name, private (+10 more)

### Community 2 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 3 - "devDependencies"
Cohesion: 0.13
Nodes (15): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prettier, @types/node, @types/react (+7 more)

### Community 4 - "PuppyOfferSection.tsx"
Cohesion: 0.36
Nodes (5): richNodes(), RichText(), SmartImage(), SmartImageProps, TitleLines()

### Community 5 - "index.html → Next.js Conversion Template"
Cohesion: 0.18
Nodes (10): 1. Scaffold, 2. Extract the CSS verbatim, 3. Fonts and metadata → `app/layout.tsx`, 4. Component split, 5. Images → `public/images`, 6. Optional: keep the original file, 7. Verify before committing, 8. Git (+2 more)

### Community 6 - "include"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 7 - "ExperienceSection.tsx"
Cohesion: 0.38
Nodes (4): ExperienceSection(), SectionHeading(), SectionHeadingProps, StaysSection()

### Community 8 - "layout.tsx"
Cohesion: 0.33
Nodes (4): dmSans, metadata, playfairDisplay, viewport

## Knowledge Gaps
- **63 isolated node(s):** `dmSans`, `playfairDisplay`, `metadata`, `viewport`, `BrandProps` (+58 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 70 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `dmSans`, `playfairDisplay`, `metadata` to the rest of the system?**
  _63 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1476923076923077 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._