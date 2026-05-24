# Reference Match Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage and get-involved page so they closely match the supplied desktop references.

**Architecture:** Keep the site static. Replace the page-specific HTML and CSS with reference-faithful editorial layouts while preserving shared asset paths, navigation, and responsive fallbacks.

**Tech Stack:** HTML, CSS, existing image assets, local static server, browser screenshots.

---

### Task 1: Shared Editorial System

**Files:**
- Modify: `css/global.css`

- [ ] **Step 1: Establish shared tokens and primitives**

Add cream paper background, black/orange/teal accents, mixed serif/sans/script stacks, fixed right rail, editorial logo lockup, compact nav, handwritten note, orange rule, and dense footer styles.

- [ ] **Step 2: Verify base CSS loads**

Run: `python3 -m http.server 4173`

Expected: local server starts and `index.html` still loads without missing `css/global.css`.

### Task 2: Homepage Reference

**Files:**
- Modify: `index.html`
- Modify: `css/homepage.css`

- [ ] **Step 1: Replace homepage sections**

Build the reference sequence: header, split hero with "We study. We build. We belong.", collage, mission/vision/topics band, "WHAT BECOMES POSSIBLE?", founder note, civic house concept, and footer.

- [ ] **Step 2: Style homepage**

Use CSS grid with intentionally uneven columns, overlapping collage cards, giant condensed uppercase type, handwritten annotations, small all-caps labels, thin separators, and responsive stacking.

- [ ] **Step 3: Verify homepage**

Open `http://127.0.0.1:4173/index.html`.

Expected: no broken images, no large blank sections, desktop layout resembles the first reference.

### Task 3: Get-Involved Reference

**Files:**
- Modify: `people.html`
- Modify: `css/people.css`

- [ ] **Step 1: Replace people page sections**

Build the reference sequence: header, "This work happens because of people.", donor name field, volunteer name field, media collage, "Want in?" action list, organization columns, quote strip, and footer.

- [ ] **Step 2: Style get-involved page**

Use dense name grids, left hero type, right vertical rail, bottom organizational columns, underlined action rows, mixed serif/italic/sans type, and image collage.

- [ ] **Step 3: Verify get-involved page**

Open `http://127.0.0.1:4173/people.html`.

Expected: no broken images, no unreadable overlap, desktop layout resembles the second reference.

### Task 4: Final Verification

**Files:**
- Inspect: `index.html`
- Inspect: `people.html`
- Inspect: `css/global.css`
- Inspect: `css/homepage.css`
- Inspect: `css/people.css`

- [ ] **Step 1: Run syntax/static checks**

Run: `git diff --check`

Expected: no whitespace errors.

- [ ] **Step 2: Capture screenshots**

Use a browser against the local server for desktop screenshots of `index.html` and `people.html`.

Expected: screenshots show the editorial reference direction and no missing content.
