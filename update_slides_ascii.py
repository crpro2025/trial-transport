# Read the file
with open('trial-transport/PITCH_DECK_SLIDES.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Jason Long's section in the ASCII art
old_jason = """│  👨‍💼 Jason Long                         │
   │     Chief Operating Officer            │
   │     • COO, Clinical Research Pro       │
   │     • Strategic operations & BD        │
   │     • Platform architecture            │
   │     • Healthcare technology            │"""

new_jason = """│  👨‍💼 Jason Long                         │
   │     Chief Operating Officer            │
   │     • 18+ years sales & leadership     │
   │     • Former AT&T & State Farm leader  │
   │     • Proven startup growth track      │
   │     • jason@clinicalresearchpro.com    │
   │     • (470) 476-1038                   │"""

content = content.replace(old_jason, new_jason)

# Add contact to Jess Thompson's section
old_jess = """│  👩‍💼 Jess Thompson                     │
   │     Chief Visionary Officer            │
   │     • 15+ years life sciences          │
   │     • Pfizer, IQVIA, ICON              │
   │     • Vanderbilt, UW, U of Louisville  │
   │     • Clinical operations expert       │
   │     • Specimen handling & compliance   │"""

new_jess = """│  👩‍💼 Jess Thompson                     │
   │     Chief Visionary Officer            │
   │     • 15+ years life sciences          │
   │     • Pfizer, IQVIA, ICON              │
   │     • Vanderbilt, UW, U of Louisville  │
   │     • Clinical operations expert       │
   │     • jess@clinicalresearchpro.com     │"""

content = content.replace(old_jess, new_jess)

# Write back
with open('trial-transport/PITCH_DECK_SLIDES.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully updated PITCH_DECK_SLIDES.md ASCII art")