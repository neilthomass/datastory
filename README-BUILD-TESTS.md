# Build Validation & Testing

This project now includes automatic validation to catch JSX and TypeScript errors before deployment.

## Automated Tests

### TypeScript Type Checking
All code is validated with TypeScript's strict mode before building:

```bash
npm run typecheck
```

This catches:
- JSX syntax errors (mismatched tags, invalid JSX)
- Type errors
- Import/export issues
- Component prop errors

### Build Process
The build process now includes validation:

```bash
npm run build
```

This runs:
1. `npm run typecheck` - Validates all TypeScript/JSX
2. `vite build` - Builds the production bundle

**The build will fail if there are any JSX syntax errors or type errors.**

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | **Build for production (includes validation)** |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test` | Run type checking (alias) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## What Gets Validated

✅ **JSX Syntax**
- Matching opening/closing tags
- Proper nesting
- Valid JSX expressions

✅ **TypeScript**
- Type errors
- Import/export issues
- Missing dependencies

✅ **React Components**
- Component prop types
- Hook usage
- Event handlers

## Continuous Integration

Add this to your CI/CD pipeline:

```yaml
# Example GitHub Actions
- name: Build and validate
  run: npm run build
```

The build will automatically fail if there are validation errors, preventing bad code from being deployed.

## Pre-commit Hook (Optional)

Add to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
npm run typecheck
```

This validates code before every commit.
