import os
import re
import random

# Base directory containing all your React apps
BASE_DIR = r"C:\Users\itsdi\OneDrive\Desktop\Template_Clone\News-Site-HTML-Templates\React_Base_Layouts"

#  List of popular professional fonts
POPULAR_FONTS = [
    "Inter", "Roboto", "Poppins", "Lato", "Montserrat",
    "Open Sans", "Nunito", "Rubik", "Source Sans Pro", "Raleway",
    "Ubuntu", "Work Sans", "PT Sans", "Noto Sans", "Manrope",
    "Cabin", "Quicksand", "Mulish", "DM Sans", "Heebo"
]

# Regex to match any previous Google Fonts import and body font-family line
font_import_pattern = re.compile(r"@import url\('https://fonts\.googleapis\.com/css2\?family=[^']+'\);", re.IGNORECASE)
font_family_pattern = re.compile(r"body\s*\{[^}]font-family:[^;]+;[^}]\}", re.IGNORECASE)

# Process each React project
for folder in os.listdir(BASE_DIR):
    project_path = os.path.join(BASE_DIR, folder)
    if not os.path.isdir(project_path):
        continue

    index_css_path = os.path.join(project_path, "src", "index.css")
    if not os.path.exists(index_css_path):
        print(f"No index.css found in {folder}")
        continue

    # Pick a random font for this project
    new_font = random.choice(POPULAR_FONTS)
    new_font_import = f"@import url('https://fonts.googleapis.com/css2?family={new_font.replace(' ', '+')}&display=swap');"
    new_font_family = f"body {{ font-family: '{new_font}', sans-serif; }}"

    try:
        with open(index_css_path, "r+", encoding="utf-8") as f:
            content = f.read()

            # Replace old font imports and font-family if found
            content = font_import_pattern.sub(new_font_import, content)
            content = font_family_pattern.sub(new_font_family, content)

            # If the file didn’t have a font line before, prepend new font config
            if new_font_import not in content:
                content = f"{new_font_import}\n\n{new_font_family}\n\n" + content

            f.seek(0)
            f.write(content)
            f.truncate()

        print(f" {folder} → Updated to '{new_font}'")

    except Exception as e:
        print(f" Error updating {folder}: {e}")

print("\n All React projects now have new randomized popular fonts successfully!")