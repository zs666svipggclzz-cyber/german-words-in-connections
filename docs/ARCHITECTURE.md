# Architecture

`README.md` is the repository guide. `glossary.json` is the UTF-8 dataset for reuse. Each entry contains its term, English meaning, final letters and their meaning, and an optional documented appearance.

GitHub Pages serves `index.html` from the root of `main`. The HTML contains the full glossary and a direct link to the source article. `assets/glossary.js` builds the ending options from the rendered entries and filters them locally. `assets/glossary.css` styles the page. `.nojekyll` enables static publication without a build. The page has no network dependencies for rendering and filtering the glossary.
