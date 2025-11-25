# Node.js Upgrade Required

Your current Node.js version (18.20.1) is too old for Next.js 16.0.3, which requires Node.js >=20.9.0.

## Quick Fix Options

### Option 1: Install Node.js 20+ directly
1. Visit https://nodejs.org/
2. Download and install the LTS version (v20.x or v22.x)
3. Restart your terminal
4. Run `node --version` to verify
5. Run `npm start` again

### Option 2: Install nvm-windows (Recommended for managing multiple versions)
1. Download nvm-windows from: https://github.com/coreybutler/nvm-windows/releases
2. Install the latest release (nvm-setup.exe)
3. Restart your terminal
4. Run:
   ```powershell
   nvm install 20.9.0
   nvm use 20.9.0
   ```
5. Verify with `node --version`
6. Run `npm start` again

### Option 3: Use fnm (Fast Node Manager) - Alternative
1. Install via winget: `winget install Schniz.fnm`
2. Or via chocolatey: `choco install fnm`
3. Restart terminal
4. Run:
   ```powershell
   fnm install 20
   fnm use 20
   ```
5. Verify with `node --version`
6. Run `npm start` again

## Verify Installation
After upgrading, verify with:
```powershell
node --version  # Should show v20.9.0 or higher
npm --version
```


