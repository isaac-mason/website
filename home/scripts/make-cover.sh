#!/usr/bin/env bash
# Makes a 1024x682 feed cover: centre-crops an image to 3:2 and writes a title over it
# Usage: [COVER_DARKEN=0.7] [COVER_OUTLINE=4] make-cover.sh <source image> <title> <output png>
#   COVER_DARKEN multiplies the image brightness (1 = unchanged)
#   COVER_OUTLINE adds a black outline of this many pixels behind the title (0 = just the offset shadow)

set -euo pipefail

src="$1"
title="$2"
out="$3"
font="${COVER_FONT:-$HOME/Library/Fonts/RobotoMono-VariableFont_wght.ttf}"
darken="${COVER_DARKEN:-1}"
outline="${COVER_OUTLINE:-0}"

text="fontfile='$font':text='$title':fontsize=93:x=(w-text_w)/2:y=(h-text_h)/2"

ffmpeg -loglevel error -y -i "$src" -vf "\
crop='min(iw,ih*3/2)':'min(ih,iw*2/3)',\
scale=1024:682,\
lutrgb=r=val*$darken:g=val*$darken:b=val*$darken,\
drawtext=$text:fontcolor=black:borderw=$outline:bordercolor=black,\
drawtext=$text:fontcolor=white:borderw=1:bordercolor=white:shadowcolor=black:shadowx=-3:shadowy=-3" \
  -frames:v 1 "$out"
