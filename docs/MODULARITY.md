# Modularity

Keep the guide and dataset in separate files with the same term order. Each dataset record owns its own spelling and evidence. Preserve the public JSON fields when adding entries. Keep files under 500 lines and any future functions under 50 lines.

Keep the static entries in `index.html` in the same order as `glossary.json`. Compare the terms, meanings, and endings when changing the dataset. The browser filter reads the endings from the HTML to avoid a separate list of filter options.
