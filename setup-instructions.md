# DataStory Website Setup Instructions

## Prerequisites
You need to install Node.js to run this Next.js project.

## Install Node.js

### Option 1: Using Homebrew (Recommended)
```bash
# Install Homebrew first if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

### Option 2: Direct Download
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (18.x or higher)
3. Run the installer

### Option 3: Using nvm (Node Version Manager)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal, then:
nvm install --lts
nvm use --lts
```

## Verify Installation
```bash
node --version
npm --version
```

## Install Dependencies
```bash
cd /Users/samanthagin/Documents/datastory-website
npm install
```

## Run the Development Server
```bash
npm run dev
```

## Access the Website
Open your browser and go to: http://localhost:3000

## All Errors Have Been Fixed
The following issues have been resolved:
- ✅ Added "use client" directive for client-side components
- ✅ Fixed TypeScript JSX configuration
- ✅ Corrected Tailwind CSS color definitions
- ✅ Fixed PostCSS configuration
- ✅ Resolved z-index conflicts
- ✅ Improved accessibility with ARIA labels
- ✅ Enhanced image optimization
- ✅ Fixed CSS variable compatibility
- ✅ Removed error suppression flags

Your about page should now work perfectly without any errors!
