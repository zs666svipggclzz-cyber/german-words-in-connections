# First Release Plan

## Step 1. Assemble the glossary

Use the Stuttgarter Meaning article for coverage and the dated New York Times puzzle data for the documented appearance. Write an English README and a UTF-8 JSON glossary. Apply CC BY 4.0 to the original glossary material.

Check that both formats list the same ten unique terms and that each ending matches the spelling. Compare the documented appearance with the NYT data for November 20, 2026. The first release succeeds with one documented appearance and nine spelling examples. Any mismatch blocks publication.

## Step 2. Publish and verify

Create the public `zs666svipggclzz-cyber/german-words-in-connections` repository and push the reviewed first commit. Open the public repository without signing in, compare its default branch with the local commit, and inspect the rendered README anchors for both Stuttgarter Meaning URLs. Record the link destinations and any `rel` tokens from the published HTML.

## Step 3. Build the filterable glossary

Publish the ten terms as HTML with a browser-side filter for exact English endings. Keep the full glossary readable before scripts run. Link to the original Stuttgarter Meaning article from the source note. Compare each rendered term and ending with the JSON, then test the default view, single-result and multiple-result endings, and reset in a browser.

## Step 4. Verify GitHub Pages

Publish from the root of `main`. Check that the project URL returns HTTP 200 and serves the glossary and its assets. Inspect the source anchor, page robots metadata, HTTP `X-Robots-Tag`, and the Pages host's root `robots.txt` for directives affecting the page.
