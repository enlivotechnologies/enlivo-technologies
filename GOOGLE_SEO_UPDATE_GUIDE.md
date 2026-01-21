# Step-by-Step Guide: Updating Logo & Schema in Google

## 📋 Overview
This guide walks you through updating your logo, schema markup, and getting Google to re-index your site with the new changes.

---

## 🚀 Step 1: Deploy Your Changes

### 1.1 Verify All Changes Are Saved
- ✅ Logo URL changed to `/icon.png` (512x512px)
- ✅ Founding date updated to `2025`
- ✅ `numberOfEmployees` fixed to use `QuantitativeValue` format
- ✅ All schema validation errors resolved

### 1.2 Commit and Push to Production
```bash
# Check your changes
git status

# Add all files
git add .

# Commit with descriptive message
git commit -m "Update logo to icon.png, fix schema validation (founding date 2025, numberOfEmployees)"

# Push to production
git push origin main
```

### 1.3 Deploy to Production
- If using Vercel: Changes auto-deploy on push
- If using other hosting: Follow your deployment process
- Wait for deployment to complete (usually 1-5 minutes)

---

## ✅ Step 2: Verify Changes Are Live

### 2.1 Check Logo is Accessible
Open in browser:
```
https://www.enlivotechnologies.com/icon.png
```
✅ Should display your 512x512px logo icon

### 2.2 Verify Schema Markup
**Option A: View Page Source**
1. Visit: `https://www.enlivotechnologies.com/`
2. Right-click → "View Page Source"
3. Search for: `"logo"` or `"icon.png"`
4. Verify you see: `"url": "https://www.enlivotechnologies.com/icon.png"`
5. Verify: `"foundingDate": "2025"`
6. Verify: `"numberOfEmployees"` uses `QuantitativeValue` format

**Option B: Use Browser DevTools**
1. Visit: `https://www.enlivotechnologies.com/`
2. Open DevTools (F12)
3. Go to "Console" tab
4. Run:
```javascript
JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)
```
5. Check the Organization schema object

---

## 🧪 Step 3: Test Schema Markup

### 3.1 Google Rich Results Test
1. **Visit**: https://search.google.com/test/rich-results
2. **Enter URL**: `https://www.enlivotechnologies.com/`
3. **Click**: "Test URL"
4. **Verify**:
   - ✅ No errors shown
   - ✅ Logo URL shows: `https://www.enlivotechnologies.com/icon.png`
   - ✅ Founding date shows: `2025`
   - ✅ `numberOfEmployees` shows as `QuantitativeValue` (not error)

### 3.2 Schema.org Validator
1. **Visit**: https://validator.schema.org/
2. **Enter URL**: `https://www.enlivotechnologies.com/`
3. **Click**: "Run Test"
4. **Verify**: No errors, all fields properly formatted

### 3.3 Google Structured Data Testing Tool
1. **Visit**: https://developers.google.com/search/docs/appearance/structured-data
2. **Use**: Rich Results Test
3. **Verify**: All structured data passes validation

---

## 🔍 Step 4: Google Search Console Setup

### 4.1 Access Google Search Console
1. **Visit**: https://search.google.com/search-console
2. **Sign in** with your Google account
3. **Add Property** (if not already added):
   - Click "Add Property"
   - Enter: `https://www.enlivotechnologies.com`
   - Verify ownership (DNS, HTML file, or meta tag)

### 4.2 Verify Property Ownership
Choose one method:

**Method 1: HTML Tag (Recommended)**
1. Copy the HTML tag provided by Google
2. Add it to your `<head>` section in `app/layout.tsx`
3. Deploy and verify in Search Console

**Method 2: DNS Verification**
1. Add the TXT record to your DNS
2. Verify in Search Console

**Method 3: HTML File Upload**
1. Download the verification file
2. Upload to `public/` folder as `google[random-string].html`
3. Deploy and verify

---

## 🔄 Step 5: Request Re-indexing

### 5.1 URL Inspection Tool
1. In Google Search Console, click **"URL Inspection"** (top search bar)
2. **Enter URL**: `https://www.enlivotechnologies.com/`
3. Click **"Test Live URL"** (verify it's accessible)
4. Click **"Request Indexing"** button
5. Wait for status: "URL is on Google" or "Indexing requested"

### 5.2 Submit Sitemap (if available)
1. In Search Console, go to **"Sitemaps"** (left sidebar)
2. If you have a sitemap, enter: `https://www.enlivotechnologies.com/sitemap.xml`
3. Click **"Submit"**
4. This helps Google discover all your pages

### 5.3 Remove Old Pages (if needed)
1. Go to **"Removals"** (left sidebar)
2. If you have old/incorrect pages indexed, request removal here
3. Then re-submit with new URL after removal

---

## 📊 Step 6: Monitor Progress

### 6.1 Check Indexing Status
**Daily checks for first week:**
1. Go to **"Coverage"** in Search Console
2. Check:
   - Valid pages
   - Excluded pages
   - Errors

### 6.2 Test Rich Results Periodically
1. Use Rich Results Test daily for first week
2. Verify logo appears correctly
3. Check all schema fields are correct

### 6.3 Monitor Performance
1. Go to **"Performance"** in Search Console
2. Check:
   - Search appearance
   - Rich results showing up
   - Click-through rates

---

## ⏰ Timeline Expectations

| Action | Expected Time |
|--------|---------------|
| **Deployment** | 1-5 minutes |
| **URL Inspection** | Immediate (test) |
| **Indexing Request** | 1-7 days |
| **Logo in Search** | 1-4 weeks |
| **Knowledge Panel** | 2-8 weeks (if eligible) |

---

## ✅ Checklist

### Pre-Submission
- [ ] All changes deployed to production
- [ ] Logo accessible at `/icon.png`
- [ ] Schema markup verified in page source
- [ ] Rich Results Test passes with no errors
- [ ] Site ownership verified in Search Console

### Submission
- [ ] URL Inspection completed
- [ ] Indexing requested for homepage
- [ ] Sitemap submitted (if available)
- [ ] Bookmarked Search Console for monitoring

### Post-Submission (First Week)
- [ ] Daily check of Rich Results Test
- [ ] Monitor Search Console coverage
- [ ] Check for any new errors
- [ ] Verify logo appears in test results

---

## 🔧 Troubleshooting

### Issue: Logo Not Showing in Test
**Solution:**
1. Verify `/icon.png` is accessible (visit URL directly)
2. Check schema markup has correct URL
3. Ensure logo is 512x512px (meets Google's 112x112 minimum)
4. Wait 24-48 hours and test again

### Issue: Schema Errors Still Showing
**Solution:**
1. Clear browser cache
2. Use incognito mode to test
3. Verify changes are actually deployed (check page source)
4. Use Rich Results Test (most reliable)

### Issue: Google Not Re-indexing
**Solution:**
1. Be patient (can take 1-4 weeks)
2. Request indexing again after 7 days
3. Submit sitemap to help discovery
4. Create backlinks to homepage (social media, etc.)
5. Ensure robots.txt allows crawling

### Issue: Logo in Knowledge Panel Not Updating
**Solution:**
1. Knowledge Panel updates can take 2-8 weeks
2. Logo needs to be in schema for at least 30 days
3. Ensure consistent NAP (Name, Address, Phone) across web
4. Build citations on business directories
5. Be patient - Knowledge Panel is Google's automated system

---

## 📝 Quick Reference

### Important URLs
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Search Console**: https://search.google.com/search-console
- **Schema Validator**: https://validator.schema.org/
- **Your Logo**: https://www.enlivotechnologies.com/icon.png

### Key Commands
```bash
# Check if logo is accessible
curl -I https://www.enlivotechnologies.com/icon.png

# View schema markup
curl https://www.enlivotechnologies.com/ | grep -A 20 "application/ld+json"
```

---

## 🎯 Next Steps After Indexing

1. **Monitor Search Console** weekly for first month
2. **Check Knowledge Panel** periodically (if you have one)
3. **Update social media** with consistent logo/branding
4. **Build citations** on business directories (Yelp, Google Business, etc.)
5. **Create quality backlinks** to increase authority

---

## 📞 Need Help?

If issues persist:
1. Check Google Search Console Help Center
2. Review Google's Structured Data Guidelines
3. Use Google's Search Central Community Forum
4. Contact your SEO team/consultant

---

**Last Updated**: After schema fixes (Logo: icon.png, Founding Date: 2025, numberOfEmployees: QuantitativeValue)
