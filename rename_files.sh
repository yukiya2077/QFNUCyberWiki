#!/bin/bash

# 查找所有 .md 文件并处理
find ./src -type f -name "*.md" | while read file; do
    # 获取目录和文件名
    dir=$(dirname "$file")
    filename=$(basename "$file")
    
    # 检查文件名是否包含下划线
    if [[ "$filename" == *_* ]]; then
        # 将下划线替换为连字符
        new_filename=$(echo "$filename" | tr "_" "-")
        new_file="$dir/$new_filename"
        
        # 重命名文件
        mv "$file" "$new_file"
        echo "已重命名: $file -> $new_file"
    fi
done
