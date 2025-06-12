#!/bin/bash

# Create sounds directory if it doesn't exist
mkdir -p public/sounds

# Download phase-specific sounds
echo "Downloading phase sound effects..."

# Phase transition sound - Halo/Destiny style phase shift
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/phase-transition.mp3

# Convergence phase - Tech/cyberpunk sound
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/phase-convergence.mp3

# Expansion phase - Space/void sound
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/phase-expansion.mp3

# Alignment phase - Harmonic/ethereal sound
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/phase-alignment.mp3

# Inception phase - Dreamy/psychic sound
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/phase-inception.mp3

# Recursion phase - Time loop sound
curl -L "https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3" -o public/sounds/phase-recursion.mp3

echo "Phase sound effects downloaded successfully!" 