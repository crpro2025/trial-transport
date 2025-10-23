# Read the file
with open('trial-transport/PITCH_DECK_SLIDES.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find and update Jason Long section
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # Check if we're at Jason Long's section
    if '**Jason Long**' in line and 'Chief Operating Officer' in lines[i+1] if i+1 < len(lines) else False:
        new_lines.append(line)  # Keep the header
        new_lines.append(lines[i+1])  # Keep the role line
        i += 2
        
        # Replace the bullet points
        new_lines.append('\n')
        new_lines.append('• COO of Clinical Research Pro Corporation\n')
        new_lines.append('• 18+ years of sales and leadership experience\n')
        new_lines.append('• Former leadership at AT&T and State Farm\n')
        new_lines.append('• Proven track record growing and scaling startups\n')
        new_lines.append('• Strategic operations & business development expert\n')
        new_lines.append('• Contact: jason@clinicalresearchpro.com | (470) 476-1038\n')
        
        # Skip the old bullet points
        while i < len(lines) and (lines[i].strip().startswith('•') or lines[i].strip() == ''):
            i += 1
        continue
    
    # Check if we're at Jess Thompson's section
    elif '**Jess Thompson**' in line and 'Chief Visionary Officer' in lines[i+1] if i+1 < len(lines) else False:
        new_lines.append(line)  # Keep the header
        new_lines.append(lines[i+1])  # Keep the role line
        i += 2
        
        # Keep existing lines and add contact at the end
        temp_lines = []
        while i < len(lines) and (lines[i].strip().startswith('•') or lines[i].strip() == ''):
            if 'Contact' not in lines[i]:
                temp_lines.append(lines[i])
            i += 1
        
        # Add all the temp lines
        new_lines.extend(temp_lines)
        # Add contact info
        new_lines.append('• Contact: jess@clinicalresearchpro.com\n')
        continue
    
    new_lines.append(line)
    i += 1

# Write back
with open('trial-transport/PITCH_DECK_SLIDES.md', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✅ Successfully updated PITCH_DECK_SLIDES.md")