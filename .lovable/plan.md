

## Plan: Smart tag layout with long tags (col-span-2), no empty columns

### Approach

A two-pass layout algorithm that places long tags first, then fills remaining slots with short tags — ensuring no row has empty columns.

### Algorithm: `computeTagLayout(tags)`

```text
Pass 1: Separate tags into longTags (length >= 10) and shortTags (length < 10)

Pass 2: Build rows (each row = 3 columns)
  - For each long tag: needs 2 cols. If current row has >= 2 cols free, place it. Otherwise start new row.
  - After placing a long tag, there's 1 slot left in that row — fill it with the next short tag.
  - Any remaining short tags fill subsequent rows normally (3 per row).

Output: array of { tag, colStart, colSpan } for CSS grid placement.
```

**Example** — tags: `["Python", "Pandas", "Scikit-learn", "K-means"]`

```text
Long tags:  Scikit-learn (12 chars)
Short tags: Python, Pandas, K-means

Row 1: [Scikit-learn (col 0-1)]  [Python (col 2)]
Row 2: [Pandas (col 0)]  [K-means (col 1)]  (empty col 2)
```

Wait — that leaves col 2 empty. Since we only have 4 tags, the last row will have 2 items in a 3-col grid. That's unavoidable with 4 tags (same as current behavior). The key guarantee is: **a long tag never causes an empty column in its own row** — it always shares its row with a short tag if one is available.

### Changes in `src/components/ProjectCard.tsx`

1. **Remove** `isFat` / `row-span` logic
2. **Add** `computeTagLayout(tags)` function implementing the two-pass algorithm above
3. **Render** using explicit `gridColumn` style: `gridColumn: \`\${colStart + 1} / span \${colSpan}\``
4. **Justification**: Based on `colStart` and `colSpan` — single col 0 → right-align, single col 2 → left-align, col 1 or spanning → center
5. **Width**: Short tags use existing `maxWidth`. Long tags use `width: 100%` to fill their 2-col span

