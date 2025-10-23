# Read the file
with open('trial-transport/INVESTOR_PITCH_DECK.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find and update Jason Long section
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # Check if we're at Jason Long's section
    if '**Jason Long - Chief Operating Officer & Co-Founder**' in line:
        new_lines.append(line)  # Keep the header
        i += 1
        
        # Replace the next 5 lines with updated content
        new_lines.append('   - COO of Clinical Research Pro Corporation\n')
        new_lines.append('   - 18+ years of sales and leadership experience\n')
        new_lines.append('   - Former leadership roles at AT&T and State Farm\n')
        new_lines.append('   - Proven track record growing and scaling startups\n')
        new_lines.append('   - Strategic operations and business development expert\n')
        new_lines.append('   - **Contact:** jason@clinicalresearchpro.com | (470) 476-1038\n')
        
        # Skip the old lines
        while i < len(lines) and lines[i].strip().startswith('-'):
            i += 1
        continue
    
    # Check if we're at Jess Thompson's section
    elif '**Jess Thompson - Chief Visionary Officer & Co-Founder**' in line:
        new_lines.append(line)  # Keep the header
        i += 1
        
        # Keep existing lines and add contact at the end
        temp_lines = []
        while i < len(lines) and lines[i].strip().startswith('-') and 'Contact' not in lines[i]:
            temp_lines.append(lines[i])
            i += 1
        
        # Add all the temp lines
        new_lines.extend(temp_lines)
        # Add contact info
        new_lines.append('   - **Contact:** jess@clinicalresearchpro.com\n')
        continue
    
    new_lines.append(line)
    i += 1

# Write back
with open('trial-transport/INVESTOR_PITCH_DECK.md', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✅ Successfully updated INVESTOR_PITCH_DECK.md")