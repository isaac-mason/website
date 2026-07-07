#!/usr/bin/env bash
# Converts PNG/JPG images in assets-raw/ to WebP in public/
# Skips files where the output already exists and is newer than the source

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_DIR="$SCRIPT_DIR/../assets-raw"
DEST_DIR="$SCRIPT_DIR/../public"

mkdir -p "$DEST_DIR"

converted=0
skipped=0

while IFS= read -r src; do
  filename="$(basename "$src")"
  base="${filename%.*}"
  dest="$DEST_DIR/$base.webp"

  if [[ -f "$dest" && "$dest" -nt "$src" ]]; then
    ((skipped++)) || true
    continue
  fi

  echo "Converting: $filename -> $base.webp"
  cwebp -q 90 "$src" -o "$dest" -quiet
  ((converted++)) || true
done < <(find "$SRC_DIR" -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \))

echo "Done: $converted converted, $skipped skipped."
