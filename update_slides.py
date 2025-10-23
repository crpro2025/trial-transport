import re

# Read the slides
with open('PITCH_DECK_SLIDES.md', 'r') as f:
    content = f.read()

# Update Jess Thompson section
jess_old = """**Jess Thompson**
Chief Visionary Officer & Co-Founder

• 15+ years in life sciences industry
• Former positions at Pfizer, IQVIA, ICON
• Clinical research at Vanderbilt, UW, U of Louisville
• Site management & clinical operations expert
• Deep clinical trial logistics expertise
• Specimen handling & compliance specialist"""

jess_new = """**Jess Thompson**
Chief Visionary Officer & Co-Founder

• 15+ years in life sciences industry
• Former positions at Pfizer, IQVIA, ICON
• Clinical research at Vanderbilt, UW, U of Louisville
• Site management & clinical operations expert
• Deep clinical trial logistics expertise
• Specimen handling & compliance specialist
• Contact: jess@clinicalresearchpro.com"""

content = content.replace(jess_old, jess_new)

# Update Jason Long section
jason_old = """**Jason Long**
Chief Operating Officer & Co-Founder

• COO of Clinical Research Pro Corporation
• Strategic operations & business development
• Platform architecture & GTM strategy
• Technology commercialization expertise
• Healthcare technology & operations management"""

jason_new = """**Jason Long**
Chief Operating Officer & Co-Founder

• COO of Clinical Research Pro Corporation
• 18+ years of sales and leadership experience
• Former leadership at AT&T and State Farm
• Proven track record growing and scaling startups
• Strategic operations & business development expert
• Contact: jason@clinicalresearchpro.com | (470) 476-1038"""

content = content.replace(jason_old, jason_new)

# Write back
with open('PITCH_DECK_SLIDES.md', 'w') as f:
    f.write(content)

print("✅ Updated PITCH_DECK_SLIDES.md")