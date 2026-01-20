# 🚀 Quick Start: Deploy & Verify Sitemap

## ⚡ Quick Commands

### 1. Test Locally (Before Deploying)
```bash
# Start dev server
npm run dev

# In another terminal, test sitemap
curl http://localhost:3000/sitemap.xml

# Or use the verification script
./scripts/verify-sitemap.sh
```

### 2. Build & Deploy
```bash
# Build to check for errors
npm run build

# Deploy (choose one):
# Git push (auto-deploys on Vercel/Netlify)
git add app/sitemap.ts
git commit -m "Update sitemap"
git push

# OR Manual Vercel deploy
vercel --prod

# OR Manual Netlify deploy
netlify deploy --prod
```

### 3. Verify Production
```bash
# Check sitemap is accessible
curl -I https://www.enlivotechnologies.com/sitemap.xml

# View sitemap content
curl https://www.enlivotechnologies.com/sitemap.xml

# Count URLs
curl -s https://www.enlivotechnologies.com/sitemap.xml | grep -o '<loc>' | wc -l
```

### 4. Submit to Google Search Console
1. Go to: https://search.google.com/search-console
2. Navigate: **Indexing** → **Sitemaps**
3. Enter: `sitemap.xml` (just the path)
4. Click: **SUBMIT**

---

## ✅ Verification Checklist

- [ ] Build succeeds: `npm run build`
- [ ] Sitemap accessible: `https://www.enlivotechnologies.com/sitemap.xml`
- [ ] XML format valid (check in browser)
- [ ] All pages included (count URLs)
- [ ] Submitted in Google Search Console
- [ ] Status shows "Success" (wait 24-48 hours)

---

## 📊 What's Included in Your Sitemap

✅ **Static Pages** (15+ pages)
- Homepage, Services, Company pages, Contact, Legal

✅ **Dynamic Content** (Auto-updates)
- Case Studies (index + individual)
- Insights/Blog Posts
- Job Postings

✅ **Auto-Revalidation**
- Updates every 24 hours automatically
- New content added automatically

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 Error | Check deployment, ensure route exists |
| "Couldn't fetch" | Verify URL is accessible, wait 24-48 hours |
| 0 Discovered Pages | Wait 24-48 hours, Google needs time to process |
| Old Last Read Date | Force redeploy or wait for auto-update |

---

## 📚 Full Documentation

- **Detailed Guide**: See `DEPLOY_SITEMAP_GUIDE.md`
- **What's Included**: See `SITEMAP_GUIDE.md`
- **Verification Script**: `./scripts/verify-sitemap.sh`

---

**Next Steps:** Deploy → Verify → Submit → Monitor (24-48 hours)
