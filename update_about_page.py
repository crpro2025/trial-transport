import re

# Read the about page
with open('app/about/page.tsx', 'r') as f:
    content = f.read()

# Update Jess Thompson
jess_old = """      {
        name: 'Jess Thompson',
        role: 'Chief Visionary Officer & Co-Founder',
        background: '15+ years in life sciences industry with positions at Pfizer, IQVIA, ICON, Vanderbilt, University of Washington, University of Louisville',
        expertise: 'Clinical trial operations, site management, specimen handling, regulatory compliance, extensive hands-on experience across major research institutions',
        image: '👩‍💼',
      },"""

jess_new = """      {
        name: 'Jess Thompson',
        role: 'Chief Visionary Officer & Co-Founder',
        background: '15+ years in life sciences industry with positions at Pfizer, IQVIA, ICON, Vanderbilt, University of Washington, University of Louisville',
        expertise: 'Clinical trial operations, site management, specimen handling, regulatory compliance, extensive hands-on experience across major research institutions',
        image: '👩‍💼',
        contact: 'jess@clinicalresearchpro.com',
      },"""

content = content.replace(jess_old, jess_new)

# Update Jason Long
jason_old = """      {
        name: 'Jason Long',
        role: 'Chief Operating Officer & Co-Founder',
        background: 'COO of Clinical Research Pro Corporation, strategic operations and business development leader',
        expertise: 'Healthcare technology operations, platform architecture, go-to-market strategy, technology commercialization',
        image: '👨‍💼',
      },"""

jason_new = """      {
        name: 'Jason Long',
        role: 'Chief Operating Officer & Co-Founder',
        background: 'COO of Clinical Research Pro Corporation with 18+ years of sales and leadership experience. Former leadership roles at AT&T and State Farm. Proven track record growing and scaling startups.',
        expertise: 'Strategic operations, business development, sales leadership, startup growth and scaling',
        image: '👨‍💼',
        contact: 'jason@clinicalresearchpro.com | (470) 476-1038',
      },"""

content = content.replace(jason_old, jason_new)

# Write back
with open('app/about/page.tsx', 'w') as f:
    f.write(content)

print("✅ Updated app/about/page.tsx")