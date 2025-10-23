import re

# Read the pitch deck
with open('INVESTOR_PITCH_DECK.md', 'r') as f:
    content = f.read()

# Update Jess Thompson section
jess_old = """**Jess Thompson - Chief Visionary Officer & Co-Founder**
   - 15+ years in life sciences industry
   - Former positions at Pfizer, IQVIA, ICON
   - Clinical research experience at Vanderbilt, University of Washington, University of Louisville
   - Extensive site management and clinical operations expertise
   - Deep understanding of clinical trial logistics pain points
   - Subject matter expert in specimen handling and compliance"""

jess_new = """**Jess Thompson - Chief Visionary Officer & Co-Founder**
   - 15+ years in life sciences industry
   - Former positions at Pfizer, IQVIA, ICON
   - Clinical research experience at Vanderbilt, University of Washington, University of Louisville
   - Extensive site management and clinical operations expertise
   - Deep understanding of clinical trial logistics pain points
   - Subject matter expert in specimen handling and compliance
   - **Contact:** jess@clinicalresearchpro.com"""

content = content.replace(jess_old, jess_new)

# Update Jason Long section
jason_old = """**Jason Long - Chief Operating Officer & Co-Founder**
   - COO of Clinical Research Pro Corporation
   - Strategic operations and business development leadership
   - Platform architecture and go-to-market strategy
   - Technology commercialization expertise
   - Healthcare technology and operations management"""

jason_new = """**Jason Long - Chief Operating Officer & Co-Founder**
   - COO of Clinical Research Pro Corporation
   - 18+ years of sales and leadership experience
   - Former leadership roles at AT&T and State Farm
   - Proven track record growing and scaling startups
   - Strategic operations and business development expert
   - **Contact:** jason@clinicalresearchpro.com | (470) 476-1038"""

content = content.replace(jason_old, jason_new)

# Write back
with open('INVESTOR_PITCH_DECK.md', 'w') as f:
    f.write(content)

print("✅ Updated INVESTOR_PITCH_DECK.md")