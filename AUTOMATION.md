# Automation Documentation

This document describes the automated dependency management and release processes configured for this repository.

## Dependency Management

### Renovate

The repository uses [Renovate](https://docs.renovatebot.com/) for automated dependency updates.

**Configuration file:** `renovate.json`

**Key features:**
- **Schedule:** Updates run weekly on Mondays between 2-4 AM Moscow time
- **Grouping:** Dependencies are grouped by type (linting tools, babel packages, parcel packages)
- **Auto-merge:** Minor and patch updates are automatically merged for stable versions
- **Semantic commits:** Uses conventional commit format with ⬆️ emoji
- **Labels:** Automatically applies relevant labels for easy identification
- **Security:** Vulnerability alerts are prioritized and assigned immediately

**Package grouping:**
- Linting packages (eslint, prettier, stylelint)
- Babel packages (@babel/*)
- Build tools (parcel*)
- Dev dependencies vs production dependencies

### Dependabot

**Configuration file:** `.github/dependabot.yml`

Provides additional dependency monitoring and complements Renovate configuration.

## Release Management

### release-it

The repository uses [release-it](https://github.com/release-it/release-it) for automated releases.

**Configuration file:** `.release-it.json`

**Available commands:**
```bash
# Interactive release (will prompt for version type)
npm run release

# Specific version bumps
npm run release:patch  # 1.0.0 -> 1.0.1
npm run release:minor  # 1.0.0 -> 1.1.0
npm run release:major  # 1.0.0 -> 2.0.0

# Dry run (test without making changes)
npm run release:dry
```

**What happens during a release:**
1. Project is built (`npm run build`)
2. Version is bumped in package.json
3. CHANGELOG.md is updated with conventional commits
4. Git tag is created (format: `v1.0.0`)
5. GitHub release is created
6. Changes are pushed to repository

**Requirements:**
- Must be on `main` or `master` branch
- Working directory must be clean (no uncommitted changes)
- Build must pass successfully

## Deployment

### GitHub Actions

**Workflows:**

1. **Build and Test** (`.github/workflows/main.yml`)
   - Triggers on pushes to main branch and pull requests
   - Runs on Node.js 18.x and 20.x
   - Builds project and runs linting

2. **Release Deploy** (`.github/workflows/release-deploy.yml`)
   - Triggers on new releases/tags (v*)
   - Deploys to GitHub Pages automatically
   - Uses the new GitHub Pages deployment action

**Deployment flow:**
1. Create release using `npm run release`
2. GitHub Actions automatically detects the new tag
3. Project is built and deployed to GitHub Pages
4. Deployment status is reported

## Usage Examples

### Creating a Release

1. Ensure you're on the main branch with a clean working directory:
   ```bash
   git checkout main
   git pull origin main
   git status  # Should show "working tree clean"
   ```

2. Run release command:
   ```bash
   npm run release:patch  # For bug fixes
   npm run release:minor  # For new features
   npm run release:major  # For breaking changes
   ```

3. The automation will:
   - Build the project
   - Update version and changelog
   - Create git tag and GitHub release
   - Trigger automatic deployment

### Monitoring Dependencies

- Check the Renovate dashboard for dependency status
- Review and merge Renovate PRs as needed
- Security updates are prioritized and auto-assigned

## Configuration Tips

### Renovate Customization

To modify Renovate behavior, edit `renovate.json`:
- Change update schedule in the `schedule` array
- Modify auto-merge rules in `packageRules`
- Adjust grouping patterns in `matchPackagePatterns`

### Release Customization

To modify release behavior, edit `.release-it.json`:
- Change commit message format in `git.commitMessage`
- Modify tag naming in `git.tagName`
- Add custom hooks for additional automation

### GitHub Actions

Workflow files can be modified to:
- Add additional build steps
- Change deployment targets
- Add notifications or integrations