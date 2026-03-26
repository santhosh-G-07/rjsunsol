# Gallery images

Images here are used for the **FULL PORTFOLIO** gallery on the gallery page.

## Naming convention

**Format:** `{category}_{descriptive}.webp`

- **category** (required): one of  
  `solar-farms` | `installation` | `civil-works` | `team`
- **descriptive**: hyphenated slug (e.g. `solar-farm-road`). Used for alt text.

**Examples:**
- `solar-farms_solar-farm-golden.webp` → Solar Farms, alt "Solar Farm Golden"
- `installation_workers-install.webp` → Installation, alt "Workers Install"
- `civil-works_cable-trench.webp` → Civil Works, alt "Cable Trench"
- `team_team-site.webp` → Team, alt "Team Site"

## Add or remove images

1. **Add:** Save a new file in this folder using the naming convention above.
2. **Remove:** Delete the file from this folder.
3. Run **`npm run generate:gallery`** (or **`npm run build`**) to regenerate the gallery list.

Counts and category filters update automatically from the files in this folder.
