# ⚡ Quick Push Commands - Trial Transport

## 🎯 FASTEST METHOD: GitHub Personal Access Token

### 1. Get Your Token
Go to: https://github.com/settings/tokens/new
- Name: "Trial Transport Deploy"
- Scope: ✅ `repo`
- Generate and COPY the token

### 2. Push with One Command
```bash
cd /workspace
git push https://YOUR_TOKEN_HERE@github.com/crpro2025/trial-transport.git main --force
```

**Replace `YOUR_TOKEN_HERE` with your actual token!**

---

## 📊 What Will Be Pushed

- **579 files** (20,025+ lines of code)
- **Complete platform** (65+ pages)
- **All backend APIs** (30+ endpoints)
- **Documentation** (30,000+ words)
- **Business materials** (PDFs, pitch deck)

---

## ✅ After Successful Push

1. Check GitHub: https://github.com/crpro2025/trial-transport
2. Vercel will auto-deploy (2-3 minutes)
3. Get your production URL from Vercel dashboard

---

## 🆘 If Push Fails

Try GitHub CLI instead:
```bash
# Install gh CLI
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update && sudo apt install gh

# Authenticate
gh auth login

# Push
cd /workspace
git push -u origin main --force
```

---

**That's it! Choose your method and push! 🚀**