# Step-by-Step Guide: Deploy & Verify Sitemap

## 🚀 Step 1: Deploy the Updated Sitemap

### Option A: Deploy via Git (Recommended)

If your project is connected to Vercel/Netlify via Git:

1. **Commit your changes:**
   ```bash
   git add app/sitemap.ts
   git commit -m "Update sitemap to include all pages with auto-revalidation"
   git push origin main
   # or: git push origin master
   ```

2. **Automatic Deployment:**
   - Vercel/Netlify will automatically detect the push
   - Build will start automatically
   - Wait for deployment to complete (usually 2-5 minutes)

3. **Check Deployment Status:**
   - **Vercel**: Go to https://vercel.com/dashboard
   - **Netlify**: Go to https://app.netlify.com
   - Look for the latest deployment and ensure it's successful (green checkmark)

### Option B: Manual Deployment (Vercel CLI)

If you prefer to deploy manually:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to production
vercel --prod
```

### Option C: Manual Deployment (Netlify CLI)

```bash
# Install Netlify CLI (if not already installed)
npm i -g netlify-cli

# Build the project
npm run build

# Deploy to production
netlify deploy --prod
```

---

## ✅ Step 2: Verify Sitemap is Accessible

### Method 1: Browser Check (Easiest)

1. **Open your browser** and navigate to:
   ```
   https://www.enlivotechnologies.com/sitemap.xml
   ```

2. **What you should see:**
   - XML format with `<urlset>` tags
   - Multiple `<url>` entries
   - Each entry should have: `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`

3. **If you see an error:**
   - 404: Sitemap route not found → Check deployment logs
   - 500: Server error → Check build logs
   - Blank page: Check browser console for errors

### Method 2: Command Line Check

```bash
# Check if sitemap is accessible
curl -I https://www.enlivotechnologies.com/sitemap.xml

# Should return: HTTP/2 200 OK

# View the full sitemap
curl https://www.enlivotechnologies.com/sitemap.xml

# Count URLs in sitemap
curl -s https://www.enlivotechnologies.com/sitemap.xml | grep -o '<loc>' | wc -l
```

### Method 3: Local Testing (Before Deploying)

Test locally first to catch any issues:

```bash
# Start dev server
npm run dev
# or
pnpm dev

# In another terminal, test the sitemap
curl http://localhost:3000/sitemap.xml

# Or open in browser
open http://localhost:3000/sitemap.xml
```

### What to Verify:

✅ **Sitemap is accessible** (returns 200 status)  
✅ **XML format is valid** (no syntax errors)  
✅ **All pages are included** (count matches expected number)  
✅ **URLs are correct** (all use `https://www.enlivotechnologies.com`)  
✅ **Dates are present** (`<lastmod>` tags exist)  
✅ **Priorities are set** (`<priority>` values between 0.0-1.0)  

---

## 📤 Step 3: Resubmit in Google Search Console

### Step 3.1: Access Google Search Console

1. **Go to Google Search Console:**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Select your property:**
   - Choose: `enlivotechnologies.com` (or `www.enlivotechnologies.com`)
   - If you don't see it, add it first

### Step 3.2: Remove Old Sitemap (If Needed)

If the old sitemap shows "Couldn't fetch" or errors:

1. **Navigate to Sitemaps:**
   - In the left sidebar, click: **Indexing** → **Sitemaps**

2. **Find your sitemap:**
   - Look for: `https://www.enlivotechnologies.com/sitemap.xml`
   - Or: `https://enlivotechnologies.com/sitemap.xml`

3. **Remove if broken:**
   - Click the three dots (⋮) next to the sitemap
   - Select **Delete** (if available)
   - Confirm deletion

### Step 3.3: Submit/Resubmit Sitemap

1. **Add new sitemap:**
   - In the Sitemaps page, find the **"Add a new sitemap"** section
   - Enter: `sitemap.xml` (just the path, not full URL)
   - Click **SUBMIT**

2. **Verify submission:**
   - You should see: "Sitemap submitted successfully"
   - Status will show: "Success" or "Pending" (if processing)

3. **Important Notes:**
   - Use **exactly** the same domain format as your property
   - If property is `www.enlivotechnologies.com`, use `sitemap.xml`
   - If property is `enlivotechnologies.com`, use `sitemap.xml`
   - Don't include `https://` in the sitemap path

### Step 3.4: Verify robots.txt References Sitemap

1. **Check robots.txt:**
   - Visit: `https://www.enlivotechnologies.com/robots.txt`
   - Should see: `Sitemap: https://www.enlivotechnologies.com/sitemap.xml`

2. **If missing, it will be auto-generated** (Next.js handles this via `app/robots.ts`)

---

## 📊 Step 4: Monitor Status (24-48 Hours)

### Day 1: Initial Check (Within 24 Hours)

1. **Check Google Search Console:**
   - Go to: **Indexing** → **Sitemaps**
   - Look for:
     - ✅ **Status**: Should change from "Pending" to "Success"
     - 📅 **Last read**: Should show today's date
     - 📄 **Discovered pages**: Should show a number > 0

2. **What to expect:**
   - Status: "Success" (green checkmark)
   - Last read: Within 24 hours of submission
   - Discovered pages: Matches your total page count

### Day 2: Detailed Verification (48 Hours)

1. **Check Indexing Status:**
   - Go to: **Indexing** → **Pages**
   - Verify pages are being indexed
   - Check for any indexing errors

2. **Review Sitemap Details:**
   - Click on your sitemap in the list
   - Check:
     - ✅ All URLs are valid
     - ✅ No errors reported
     - ✅ Pages are being discovered

3. **Monitor Coverage:**
   - Go to: **Indexing** → **Coverage**
   - Check for any errors or warnings
   - Ensure pages are being indexed

### Ongoing Monitoring (Weekly)

1. **Weekly Check:**
   - Review sitemap status in Search Console
   - Check "Last read" date (should update regularly)
   - Monitor "Discovered pages" count

2. **After Content Updates:**
   - When you add new pages, wait 24 hours
   - Verify they appear in the sitemap
   - Check if Google has discovered them

---

## 🔍 Troubleshooting Common Issues

### Issue 1: "Couldn't Fetch" Error

**Symptoms:**
- Google Search Console shows "Couldn't fetch"
- Status remains red/error

**Solutions:**

1. **Verify sitemap is accessible:**
   ```bash
   curl -I https://www.enlivotechnologies.com/sitemap.xml
   ```
   Should return: `HTTP/2 200`

2. **Check URL format:**
   - Ensure you're using the exact domain format
   - Match www vs non-www with your Search Console property

3. **Check for redirects:**
   - Sitemap should NOT redirect
   - Direct access should work

4. **Wait and retry:**
   - Sometimes Google needs time
   - Wait 24-48 hours and check again

### Issue 2: "Discovered Pages: 0"

**Symptoms:**
- Sitemap shows "Success" but discovered pages = 0

**Solutions:**

1. **Wait longer:**
   - Google may take 24-48 hours to process
   - This is normal for new sitemaps

2. **Check sitemap content:**
   - Verify sitemap actually has URLs
   - Check XML format is valid

3. **Verify URLs are accessible:**
   - Test a few URLs from the sitemap
   - Ensure they return 200 status

### Issue 3: Sitemap Not Updating

**Symptoms:**
- "Last read" date is old
- New pages not appearing

**Solutions:**

1. **Force regeneration:**
   - Redeploy your application
   - This forces sitemap regeneration

2. **Check revalidation:**
   - Sitemap should auto-update every 24 hours
   - If not, check deployment logs

3. **Manual resubmit:**
   - Remove and resubmit sitemap in Search Console
   - This forces Google to re-crawl

---

## 📋 Quick Checklist

Use this checklist to ensure everything is done:

- [ ] **Deployed** updated sitemap to production
- [ ] **Verified** sitemap is accessible at `/sitemap.xml`
- [ ] **Tested** sitemap XML format is valid
- [ ] **Submitted** sitemap in Google Search Console
- [ ] **Verified** robots.txt includes sitemap reference
- [ ] **Monitored** status after 24 hours
- [ ] **Checked** "Discovered pages" count
- [ ] **Verified** "Last read" date is recent
- [ ] **Set reminder** to check again in 48 hours

---

## 🎯 Expected Timeline

| Time | What Happens |
|------|-------------|
| **0 hours** | Deploy sitemap, submit to Google |
| **1-6 hours** | Google discovers sitemap |
| **6-24 hours** | Google processes sitemap, status changes to "Success" |
| **24-48 hours** | Pages start appearing in "Discovered pages" |
| **48+ hours** | Full indexing begins, pages appear in search results |

**Note:** These timelines are approximate. Google's processing can vary.

---

## 📞 Need Help?

If you encounter issues:

1. **Check deployment logs** for build errors
2. **Verify sitemap XML** using online validators
3. **Test sitemap accessibility** using curl or browser
4. **Review Google Search Console** for specific error messages
5. **Wait 24-48 hours** before assuming something is wrong

---

**Last Updated:** After deployment, your sitemap will auto-update every 24 hours to include new content.
