import sys
content = open('resume_content.txt', 'r', encoding='utf-8').read()
with open('src/pages/ResumePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('done')