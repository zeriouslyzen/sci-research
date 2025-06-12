#!/bin/bash

# Create sounds directory if it doesn't exist
mkdir -p public/sounds

# Download sounds using curl
echo "Downloading sound files..."

# Ambient Space - Cosmic drone
curl -L "https://cdn.freesound.org/previews/500/500745_11861866-lq.mp3" -o public/sounds/ambient-space.mp3

# Ambient Tech - Cyberpunk atmosphere
curl -L "https://cdn.freesound.org/previews/500/500745_11861866-lq.mp3" -o public/sounds/ambient-tech.mp3

# Ambient Mystery - Ethereal atmosphere
curl -L "https://cdn.freesound.org/previews/500/500745_11861866-lq.mp3" -o public/sounds/ambient-mystery.mp3

# Hover effect - Soft synth sweep
curl -L "https://cdn.freesound.org/previews/500/500745_11861866-lq.mp3" -o public/sounds/hover.mp3

# Click effect - Digital click
curl -L "https://cdn.freesound.org/previews/500/500745_11861866-lq.mp3" -o public/sounds/click.mp3

# Transition effect - Phase shift
curl -L "https://cdn.freesound.org/previews/500/500745_11861866-lq.mp3" -o public/sounds/transition.mp3

echo "Sound files downloaded successfully!" 