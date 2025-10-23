import re

# Read the about page
with open('app/about/page.tsx', 'r') as f:
    content = f.read()

# Find and replace the team member display section
old_pattern = r'(<p className="text-gray-500 text-xs">\{member\.expertise\}</p>)'
new_replacement = r'\1\n                     {member.contact && (\n                       <p className="text-cyan-400 text-sm font-semibold mt-4">\n                         📧 {member.contact}\n                       </p>\n                     )}'

content = re.sub(old_pattern, new_replacement, content)

# Write back
with open('app/about/page.tsx', 'w') as f:
    f.write(content)

print("✅ Updated about page to display contact information")