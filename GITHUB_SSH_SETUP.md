# GitHub SSH Setup Guide for Multiple Accounts

## Overview
You have two GitHub accounts configured:
1. **Personal Account**: sorathiyahardik000@gmail.com
2. **Work Account**: hardik.sorathiya@cloudkodeform.com

## SSH Keys Configuration

### Personal Account
- **SSH Key**: `~/.ssh/id_personal_github` (newly generated)
- **Host Alias**: `github.com-personal`
- **Current Fingerprint**: `SHA256:D5xbwUyXIsjJVZc6wNnN6WRoYWoUxZU6y1SgaWJTL/0`
- **Fingerprint on GitHub**: `SHA256:EM8RfZLKmf1PSNCfceFu+NfGvpYhPEXpUWDoMNYfz2g`
- ⚠️ **Note**: A new key has been generated. You need to add it to GitHub and remove the old one, OR if you have the private key matching the GitHub fingerprint, update the config to use that key instead.

### Work Account
- **SSH Key**: `~/.ssh/id_ed25519`
- **Host Alias**: `github.com-work`
- **Fingerprint**: `SHA256:DV3WANwuUwJ8tLL+4w1LwsMkrCyC6Uvg78LBZ4WdP6Q`
- ✅ **Status**: Fingerprint matches GitHub!

## Step 1: Verify/Add SSH Keys to GitHub

### For Personal Account:
**New Key Generated (id_personal_github):**
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGkt+z1aAbGayk3HEBKAQdR/Vl/h7XNzYbT4uNmV+76Z sorathiyahardik000@gmail.com
```

**To copy:**
```powershell
Get-Content $env:USERPROFILE\.ssh\id_personal_github.pub | Set-Clipboard
```

**Steps:**
1. Copy the key above (or use the PowerShell command)
2. Go to: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste the key and save
5. **Remove the old key** with fingerprint `SHA256:EM8RfZLKmf1PSNCfceFu+NfGvpYhPEXpUWDoMNYfz2g` if you no longer have its private key

⚠️ **Alternative**: If you have the private key matching fingerprint `SHA256:EM8RfZLKmf1PSNCfceFu+NfGvpYhPEXpUWDoMNYfz2g`, let me know its location and I'll update the config to use it instead.

### For Work Account:
**Current Key (id_ed25519):**
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDhLzy3lQyfxRfCWTTmk6e3ibJFb0kjaSXdSAyulCodS sorat@_Sorath_
```

**To copy:**
```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

✅ **Status**: This key's fingerprint matches GitHub! (`SHA256:DV3WANwuUwJ8tLL+4w1LwsMkrCyC6Uvg78LBZ4WdP6Q`)

## Step 2: Test SSH Connections

Test personal account:
```powershell
ssh -T git@github.com-personal
```

Test work account:
```powershell
ssh -T git@github.com-work
```

You should see: "Hi [username]! You've successfully authenticated..."

## Step 3: Using Different Accounts in Git Repositories

### For Personal Account Repositories:
When cloning or setting remote URL, use:
```powershell
git clone git@github.com-personal:username/repo.git
```

Or update existing remote:
```powershell
git remote set-url origin git@github.com-personal:username/repo.git
```

### For Work Account Repositories:
When cloning or setting remote URL, use:
```powershell
git clone git@github.com-work:username/repo.git
```

Or update existing remote:
```powershell
git remote set-url origin git@github.com-work:username/repo.git
```

## Step 4: Configure Git User Per Repository

### For Personal Repositories:
```powershell
cd path/to/personal/repo
git config user.name "Your Personal Name"
git config user.email "sorathiyahardik000@gmail.com"
```

### For Work Repositories:
```powershell
cd path/to/work/repo
git config user.name "Hardik Sorathiya"
git config user.email "hardik.sorathiya@cloudkodeform.com"
```

## Quick Reference

| Account | SSH Host | Key File | Email | GitHub Fingerprint | Status |
|---------|----------|----------|-------|-------------------|--------|
| Personal | github.com-personal | id_personal_github | sorathiyahardik000@gmail.com | SHA256:EM8RfZLKmf1PSNCfceFu+NfGvpYhPEXpUWDoMNYfz2g | ⚠️ New key - add to GitHub |
| Work | github.com-work | id_ed25519 | hardik.sorathiya@cloudkodeform.com | SHA256:DV3WANwuUwJ8tLL+4w1LwsMkrCyC6Uvg78LBZ4WdP6Q | ✅ Configured & Working |

## Troubleshooting

If you get "Permission denied" errors:
1. Make sure the SSH key is added to the correct GitHub account
2. Verify the SSH config file is correct: `~/.ssh/config`
3. Test the connection using the commands above
4. Check file permissions on SSH keys (should be readable only)
