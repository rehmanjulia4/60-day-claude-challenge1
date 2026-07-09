# Day 39 / 60 — HealthNexus™ Document Command Studio

**Challenge:** Create a Premium Browser-Based PDF Utility
**HealthNexus reframe:** A document splitter and volume assembler built for the specific PDFs an executive actually handles: board packets, survey binders, contract volumes, RFP response sets, and credentialing files.

## Why this reframe

The original prompt asks for a generic PDF splitter/merger. In a health system, hospital, government health authority, or payer organization, the documents that get split and merged are rarely generic. They are:

- **Board packets** that need to be broken into agenda-aligned sections for committee routing
- **Joint Commission or DNV survey binders** that need to be organized by standard for surveyor review
- **Payer or vendor contract volumes** where a single exhibit needs to be isolated for legal redline
- **RFP response sets** where clinical, finance, and compliance teams each draft a volume that must be assembled in a fixed order
- **Credentialing files** where licensure, privileging, and reference documents are merged into one provider record

The tool keeps the two core operations from the original brief (split, merge) and grounds every input, output, and default around these five contexts.

## What was built

A single-file, offline-capable HTML application, **HealthNexus Document Command Studio**, with two tools:

### Document Splitter
- Upload any PDF, or load a synthetic sample ("Q3 Board Packet") generated on demand
- Automatic page count detection and thumbnail preview for every page
- Four split methods:
  1. **Custom ranges** — define one or more explicit page-range outputs
  2. **Split after pages** — list boundary pages; a new file begins after each one
  3. **Every N pages** — even-sized chunks
  4. **Selected pages** — click thumbnails to extract a hand-picked set
- Inline validation for out-of-bounds or reversed ranges
- Output preview showing file count and page count before processing
- Individual and bulk download of generated files

### Volume Assembler (Merge)
- Drag-and-drop or click-to-browse multi-file upload
- Load a synthetic sample set (three-volume RFP response) to see the workflow immediately
- Drag-to-reorder file list with first-page thumbnails and per-file page counts
- Live totals: file count, total pages, estimated output size
- One-click merge into a single downloadable PDF

### Shared standards across the build
- **Bilingual English / Arabic** with full RTL layout mirroring (not label-only translation)
- **Three executive themes**: Executive Navy (default), Clinical Teal, GCC Gold
- **100% client-side processing** — React 18, pdf-lib, and pdf.js are all embedded in the single HTML file; no page, file, or byte is transmitted anywhere
- **Synthetic data, explicitly disclosed** — the sample board packet and RFP volumes are composite content generated at runtime, never real organizational, patient, or financial material
- Five-step visual progress indicator (Upload → Configure → Preview → Download) consistent with the HealthNexus interaction pattern used across this challenge

## Technical notes

- React 18 + ReactDOM 18 UMD production builds, with JSX precompiled via Babel (`runtime: 'classic'`) at build time rather than shipping Babel Standalone
- `pdf-lib` (1.17.1) handles page counting, page copying, and document assembly/splitting
- `pdfjs-dist` (3.11.174, legacy build) renders page thumbnails to canvas; the worker script is embedded as base64 and instantiated via a Blob URL at runtime, so no external worker fetch is needed
- Cormorant Garamond, DM Sans, and Noto Sans Arabic are embedded as base64 `@font-face` declarations for guaranteed offline rendering
- All PDF generation for synthetic samples happens in-browser using `pdf-lib`'s drawing API — no external sample files are bundled
- Final single-file size: ~2.9 MB (dominated by the pdf.js worker and React/pdf-lib runtimes, all offline-capable)

## Key learnings

**01.** Client-side PDF processing is a genuine differentiator for regulated document handling, not just a technical constraint. For board and compliance material specifically, "this never leaves your browser" is a feature to lead with.

**02.** Real utility software lives or dies on its edge cases. Reversed ranges, out-of-bounds pages, empty selections, and duplicate split boundaries all needed explicit handling before the split preview could be trusted.

**03.** A privacy claim only holds up if the architecture proves it. Embedding pdf.js's worker as a Blob URL rather than fetching it externally was the detail that made "fully offline" actually true rather than aspirational.

## Files in this delivery

- `HealthNexus-Document-Command-Studio.html` — the complete offline tool
- `screenshots/` — six key-state screenshots (home, split loaded, split results, merge results, gold theme, Arabic/teal)
- `carousel/` — 10-slide LinkedIn carousel (1080×1080 PNG, zero-overflow verified)

---

*Synthetic data disclosure: all sample documents generated within this tool are composite content created for demonstration purposes only. No real board, survey, contract, or credentialing material is used or referenced.*
