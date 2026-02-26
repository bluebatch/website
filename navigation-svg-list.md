# Navigation SVG Icon List

## Current Problem

Only 7 icon files are used across 15 menu items. Many items share the same icon despite being completely unrelated.

---

## Dropdown Item Icons (from `/icons/` files)

Each row = one menu item that needs its own unique icon.

### "Über uns" Dropdown

| Menu Item | Current Icon | Needs | Description |
|---|---|---|---|
| Warum Bluebatch? | `building.svg` (shared) | **Unique** | "Why us" — company identity, differentiator. Idea: star, award, thumbs-up |
| Unser Prozess | `process.svg` (shared) | **Unique** | "Our process" — how we work step-by-step. Idea: workflow, steps, arrows-cycle |
| Das Team | `rocket.svg` (shared) | **Unique** | "The team" — people, team. Idea: people-group, users |
| Kontakt | `phone.svg` (shared) | OK | "Contact" — phone/mail fits well |

### "Services" Dropdown

| Menu Item | Current Icon | Needs | Description |
|---|---|---|---|
| n8n Hosting | `building.svg` (shared) | **Unique** | Cloud/server hosting for n8n. Idea: cloud, server, data-center |
| Workflow-Wartung | `process.svg` (shared) | **Unique** | Workflow maintenance, 24/7 monitoring. Idea: wrench, tool, monitor |
| Custom Nodes | `rocket.svg` (shared) | **Unique** | Custom integrations, code extensions. Idea: puzzle-piece, code-bracket, plug |
| Schulungen | `chart.svg` (shared) | **Unique** | Training & workshops. Idea: academic-cap, book-open, presentation |
| Performance Scaling | `phone.svg` (shared) | **Unique** | High-performance setup, scaling. Idea: arrow-trending-up, lightning-bolt, speedometer |

### "Tools" Dropdown

| Menu Item | Current Icon | Needs | Description |
|---|---|---|---|
| n8n | `process.svg` (shared) | **Unique** | Workflow automation platform. Idea: n8n logo, workflow-nodes |
| Navision | `building.svg` (shared) | **Unique** | Microsoft Dynamics ERP system. Idea: database, building-office, ERP |
| Easybill | `chart.svg` (shared) | **Unique** | Invoicing software. Idea: receipt, document-currency, invoice |

### "Use-Cases" Dropdown (topic-level icons)

| Menu Item | Current Icon | Needs | Description |
|---|---|---|---|
| Großhandel | `factory.svg` | OK | Wholesale/distribution — factory fits |
| Steuerberater | `chart.svg` (shared) | **Unique** | Tax consultant. Idea: calculator, document-check, balance-scale |
| E-Commerce | `shopping-cart.svg` | OK | Online commerce — cart fits |

---

## Inline SVGs (hardcoded in navigation.tsx)

These are inlined as JSX, not file references.

| Location | SVG | Description |
|---|---|---|
| "Über uns" nav link | House icon | Home/about — outline house |
| "Services" nav link | Briefcase icon | Services — briefcase/portfolio |
| "Use-Cases" nav link | Briefcase icon | **Duplicate of Services** — should be distinct (e.g. lightbulb, puzzle) |
| "Blog" nav link | Open book icon | Blog/articles — open book |
| Dropdown arrows (x3) | Chevron down | Dropdown indicator — chevron-down (fine as is) |
| Mobile hamburger | Menu / X icon | Mobile toggle — hamburger & close (fine as is) |

---

## Summary: 12 icons need replacing

| # | Menu Item | What it represents | Suggested icon concept |
|---|---|---|---|
| 1 | Warum Bluebatch? | Company identity | star, award, sparkles |
| 2 | Unser Prozess | Step-by-step method | arrows-cycle, workflow, route |
| 3 | Das Team | People / team | users-group, people |
| 4 | n8n Hosting | Cloud hosting | cloud, server |
| 5 | Workflow-Wartung | Maintenance & monitoring | wrench, tool, shield-check |
| 6 | Custom Nodes | Code extensions | code-bracket, puzzle-piece |
| 7 | Schulungen | Training / workshops | academic-cap, presentation |
| 8 | Performance Scaling | Speed & scaling | lightning-bolt, arrow-up |
| 9 | n8n (Tool) | Automation platform | n8n logo or nodes-icon |
| 10 | Navision (Tool) | ERP system | database, building-office |
| 11 | Easybill (Tool) | Invoicing | receipt, document-text |
| 12 | Steuerberater | Tax consulting | calculator, balance-scale |

**Also:** The "Use-Cases" inline nav SVG is identical to the "Services" one — consider swapping it for a lightbulb or puzzle icon.
