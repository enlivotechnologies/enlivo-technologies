#!/bin/bash

# Sitemap Verification Script
# This script helps verify your sitemap is working correctly

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default URL (can be overridden)
SITEMAP_URL="${1:-http://localhost:3000/sitemap.xml}"
PROD_URL="https://www.enlivotechnologies.com/sitemap.xml"

echo "🔍 Sitemap Verification Script"
echo "================================"
echo ""

# Function to check URL
check_sitemap() {
    local url=$1
    local env_name=$2
    
    echo "Checking ${env_name}..."
    echo "URL: ${url}"
    echo ""
    
    # Check if URL is accessible
    if curl -s -o /dev/null -w "%{http_code}" "${url}" | grep -q "200"; then
        echo -e "${GREEN}✅ Sitemap is accessible (200 OK)${NC}"
    else
        echo -e "${RED}❌ Sitemap is NOT accessible${NC}"
        echo "   HTTP Status: $(curl -s -o /dev/null -w "%{http_code}" "${url}")"
        return 1
    fi
    
    # Check if it's valid XML
    if curl -s "${url}" | grep -q "<urlset"; then
        echo -e "${GREEN}✅ Valid XML format${NC}"
    else
        echo -e "${RED}❌ Invalid XML format${NC}"
        return 1
    fi
    
    # Count URLs
    url_count=$(curl -s "${url}" | grep -o "<loc>" | wc -l | tr -d ' ')
    echo -e "${GREEN}✅ Found ${url_count} URLs${NC}"
    
    # Check for required fields
    if curl -s "${url}" | grep -q "<lastmod>"; then
        echo -e "${GREEN}✅ Contains lastModified dates${NC}"
    else
        echo -e "${YELLOW}⚠️  Missing lastModified dates${NC}"
    fi
    
    if curl -s "${url}" | grep -q "<priority>"; then
        echo -e "${GREEN}✅ Contains priority values${NC}"
    else
        echo -e "${YELLOW}⚠️  Missing priority values${NC}"
    fi
    
    if curl -s "${url}" | grep -q "<changefreq>"; then
        echo -e "${GREEN}✅ Contains changeFrequency${NC}"
    else
        echo -e "${YELLOW}⚠️  Missing changeFrequency${NC}"
    fi
    
    echo ""
    return 0
}

# Check local sitemap
if [ "$1" != "prod" ]; then
    echo "📋 Testing LOCAL sitemap..."
    echo ""
    check_sitemap "${SITEMAP_URL}" "Local"
fi

# Check production sitemap
echo "📋 Testing PRODUCTION sitemap..."
echo ""
if check_sitemap "${PROD_URL}" "Production"; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Submit sitemap in Google Search Console"
    echo "2. Wait 24-48 hours for Google to process"
    echo "3. Monitor status in Search Console"
else
    echo -e "${RED}❌ Some checks failed${NC}"
    echo ""
    echo "Troubleshooting:"
    echo "1. Ensure the site is deployed"
    echo "2. Check if sitemap route exists"
    echo "3. Verify build was successful"
    exit 1
fi
