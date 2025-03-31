#!/bin/bash
find ./src -type f -name "*.md" | while read file; do dir=$(dirname "$file"); filename=$(basename "$file"); if [[ "$filename" == *_* ]]; then new_filename=$(echo "$filename" | tr "_" "-"); new_file="$dir/$new_filename"; mv "$file" "$new_file"; echo "已重命名: $file -> $new_file"; fi; done
