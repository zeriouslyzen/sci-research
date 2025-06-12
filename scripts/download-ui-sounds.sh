#!/bin/bash

# Create sounds directory if it doesn't exist
mkdir -p public/sounds

# Download UI sounds
echo "Downloading UI sound effects..."

# Menu open sound - Halo/Destiny style menu open
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/menu-open.mp3

# Menu close sound - Halo/Destiny style menu close
curl -L "https://cdn.freesound.org/previews/131/131143_2337290-lq.mp3" -o public/sounds/menu-close.mp3

# Menu select sound - Jak and Daxter style selection
curl -L "https://cdn.freesound.org/previews/131/131144_2337290-lq.mp3" -o public/sounds/menu-select.mp3

# Menu hover sound - Subtle tech hover
curl -L "https://cdn.freesound.org/previews/131/131145_2337290-lq.mp3" -o public/sounds/menu-hover.mp3

echo "UI sound effects downloaded successfully!" 