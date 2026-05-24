# Reference Match Design

## Scope

Rebuild the two primary public pages to match the supplied visual references:

- `index.html` becomes the homepage reference with the "We study. We build. We belong." hero, collage, topic field, oversized "WHAT BECOMES POSSIBLE?" type, founder note, civic house concept, and dense footer.
- `people.html` becomes the get-involved reference with the "This work happens because of people." hero, donor and volunteer name fields, image collage, "Want in?" action list, board/staff/partner columns, quote strip, and dense footer.

## Visual Direction

The site should feel editorial, civic, and intentionally imperfect. It should preserve the reference's random brutalism: uneven photo sizes, mixed serif/sans/handwritten type, dense lists, hard vertical rails, tiny labels, orange underline marks, handwritten callouts, and collage-like spacing. The result should not feel like a conventional polished nonprofit template.

## Implementation

Use the existing static HTML/CSS structure and existing image assets. Replace the current homepage and people page markup with purpose-built sections that match the screenshots. Keep the shared global header/footer primitives only where useful, but restyle them so the pages read as one reference-faithful system.

Desktop is the primary target because the references are desktop screenshots. Mobile should remain readable by stacking the same content and preserving the editorial character without horizontal overflow.

## Verification

Run static checks for HTML/CSS regressions where possible, open the pages locally, and capture desktop screenshots for visual comparison. Check that both pages render with real images, no broken assets, no overlapping unreadable text, and no large blank sections.
