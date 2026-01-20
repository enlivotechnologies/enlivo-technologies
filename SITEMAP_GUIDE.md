# Sitemap Guide: What's Included & How to Verify Updates

## 📋 What's Included in the Sitemap

Your sitemap (`/sitemap.xml`) now includes **all indexable pages** to maximize SEO coverage:

### ✅ Static Pages (Always Included)
- **Homepage** (`/`) - Priority: 1.0 (highest)
- **Services** (`/services`) - Priority: 0.9
- **Individual Service Pages** (5 pages) - Priority: 0.9
  - MVP Development
  - Backend Systems
  - Frontend Applications
  - UI Implementation
  - Ongoing Support
- **Company Pages** - Priority: 0.7-0.8
  - About (`/company/about`)
  - Company Index (`/company`)
  - Internships (`/company/internships`)
  - Full Stack Developer Internship
  - Careers (`/company/careers`)
- **Contact Pages** - Priority: 0.7-0.8
  - Contact (`/contact`)
  - Support (`/contact/support`)
- **Legal Pages** - Priority: 0.3
  - Privacy Policy (`/privacy`)
  - Terms of Service (`/terms`)

### ✅ Dynamic Content (Fetched from CMS)
- **Case Studies**
  - Index page (`/case-studies`) - Priority: 0.8
  - Individual case study pages - Priority: 0.7
- **Insights/Blog Posts**
  - Individual insight pages - Priority: 0.6
- **Job Postings** (if available)
  - Individual job pages (`/company/careers/[slug]`) - Priority: 0.6

## 🔄 Auto-Update Configuration

The sitemap **automatically regenerates every 24 hours** to include new content:
- New case studies are added automatically
- New blog posts are added automatically
- New job postings are added automatically

## ✅ How to Verify Your Sitemap is Updated

### Method 1: Direct URL Check (Quickest)
1. **View the sitemap directly:**
   ```
   https://www.enlivotechnologies.com/sitemap.xml
   ```
   Or locally:
   ```
   http://localhost:3000/sitemap.xml
   ```

2. **Check the XML structure:**
   - Should see all your pages listed
   - Each entry should have: `<url>`, `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
   - Count the number of URLs to verify all pages are included

### Method 2: Google Search Console (Recommended)
1. **Go to Google Search Console:**
   - Navigate to: https://search.google.com/search-console
   - Select your property: `enlivotechnologies.com`

2. **Check Sitemaps Section:**
   - Go to: **Indexing** → **Sitemaps**
   - You should see: `https://www.enlivotechnologies.com/sitemap.xml`
   - Check the status:
     - ✅ **Success**: Sitemap is valid and being processed
     - ⚠️ **Couldn't fetch**: Check if the URL is accessible
     - ⚠️ **Has errors**: Review the error details

3. **Verify Last Read Date:**
   - Look at the **"Last read"** column
   - Should update within 24-48 hours after changes
   - If it's not updating, check:
     - Is the sitemap URL accessible?
     - Are there any errors in the sitemap?
     - Is the sitemap format valid?

4. **Check Discovered Pages:**
   - The **"Discovered pages"** count should match your total pages
   - If it shows 0, Google hasn't processed it yet (wait 24-48 hours)

### Method 3: Validate Sitemap Format
Use online validators:
- **XML Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Sitemap Checker**: https://www.xml-sitemaps.com/sitemap-checker.html

Paste your sitemap URL and check for:
- ✅ Valid XML format
- ✅ All URLs are accessible (200 status)
- ✅ No duplicate URLs
- ✅ Proper priority values (0.0-1.0)

### Method 4: Command Line Check (For Developers)
```bash
# Check if sitemap is accessible
curl https://www.enlivotechnologies.com/sitemap.xml

# Count URLs in sitemap
curl -s https://www.enlivotechnologies.com/sitemap.xml | grep -o '<loc>' | wc -l

# Validate XML structure
curl -s https://www.enlivotechnologies.com/sitemap.xml | xmllint --format -
```

### Method 5: Check Last Modified Dates
1. **View sitemap XML:**
   - Open: `https://www.enlivotechnologies.com/sitemap.xml`
   - Look for `<lastmod>` tags

2. **Verify dates are recent:**
   - Static pages: Should show current date or recent date
   - Dynamic pages: Should show actual content publish/update dates
   - If dates are old, the sitemap may not be regenerating

## 🚨 Troubleshooting "Couldn't Fetch" Error

If Google Search Console shows "Couldn't fetch":

### 1. Check Sitemap Accessibility
```bash
# Test if sitemap is accessible
curl -I https://www.enlivotechnologies.com/sitemap.xml
```
Should return: `HTTP/2 200`

### 2. Check robots.txt
Verify your `robots.txt` allows the sitemap:
```
https://www.enlivotechnologies.com/robots.txt
```
Should include:
```
Sitemap: https://www.enlivotechnologies.com/sitemap.xml
```

### 3. Check for Redirects
- Ensure the sitemap URL doesn't redirect
- Use `www` version consistently (or non-www, but be consistent)
- Check if there's a trailing slash issue

### 4. Verify Build/Deployment
- Ensure the sitemap is generated during build
- Check deployment logs for errors
- Verify the sitemap route is not blocked

### 5. Test Locally First
```bash
# Run dev server
npm run dev
# or
pnpm dev

# Check local sitemap
curl http://localhost:3000/sitemap.xml
```

## 📊 SEO Best Practices Implemented

✅ **Complete Coverage**: All indexable pages included  
✅ **Proper Priorities**: High-value pages (homepage, services) have higher priority  
✅ **Accurate Dates**: Uses actual content dates for dynamic pages  
✅ **Realistic Frequencies**: Change frequency matches content update patterns  
✅ **Auto-Updates**: Revalidates every 24 hours  
✅ **Performance**: Fetches dynamic content in parallel  

## 🔍 Monitoring Recommendations

1. **Weekly Check**: Review Google Search Console sitemap status
2. **After Content Updates**: Verify new pages appear in sitemap within 24 hours
3. **Monthly Audit**: Count total pages and compare with sitemap entries
4. **Quarterly Review**: Update priorities based on page performance

## 📝 Notes

- The sitemap includes **only indexable pages** (excludes noindex pages)
- Dynamic content (case studies, insights, jobs) is fetched from your CMS
- If you add new page types, update `app/sitemap.ts` to include them
- The sitemap regenerates automatically, but you can force regeneration by redeploying

## 🎯 Next Steps

1. ✅ Verify sitemap is accessible at `/sitemap.xml`
2. ✅ Submit sitemap in Google Search Console (if not already done)
3. ✅ Wait 24-48 hours for Google to process
4. ✅ Monitor "Discovered pages" count in Search Console
5. ✅ Check that all important pages are being indexed

---

**Last Updated**: The sitemap automatically updates every 24 hours.  
**Manual Update**: Redeploy your application to force immediate regeneration.
