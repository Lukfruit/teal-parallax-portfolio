
**Changes to implement:**

1.  **Update Content:** Replace the current `about` array in `src/data/siteConfig.ts` with your new, condensed narrative.
2.  **Radical Layout Shift (Desktop):** Update `src/components/About.tsx` to implement the strong asymmetrical design.
    *   We will use a flex container on large screens.
    *   The "About Me" heading will be moved into a dedicated left column.
    *   We'll use CSS `writing-mode: vertical-rl` and a 180-degree rotation to make the text read from bottom to top, keeping it perfectly in the document flow without messy absolute positioning.
    *   We'll make the heading text massive (e.g., `text-6xl` or `text-7xl`) and perhaps slightly faded (`text-muted-foreground` or similar) so it acts as a bold structural watermark/sidebar rather than a standard title.
3.  **Mobile Fallback:** Ensure that on smaller screens, it gracefully collapses back to a standard top-aligned, horizontal heading so it remains readable.

**Technical approach:**
*   Modify `src/data/siteConfig.ts` to update the `about` text array.
*   Modify `src/components/About.tsx` to wrap the content in a `flex flex-col md:flex-row md:gap-16` container.
*   Add the vertical writing-mode styles to the desktop `h2` heading, increasing its text size significantly and anchoring it to the left side.

<lov-actions>
<lov-suggestion message="Verify the rotated About section looks good on desktop and stacks properly on mobile">Test the new layout</lov-suggestion>
</lov-actions>
