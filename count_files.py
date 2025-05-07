import os
import re


def get_title_from_md(file_path):
    """从MD文件中提取标题"""
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
            match = re.search(r"title:\s*(.*)", content)
            if match:
                return match.group(1).strip()
    except Exception as e:
        pass
    return None


def get_department_name(readme_path):
    """从README.md文件中提取部门名称"""
    try:
        with open(readme_path, "r", encoding="utf-8") as file:
            content = file.read()
            # 使用正则表达式匹配title字段
            match = re.search(r"title:\s*(.*)", content)
            if match:
                return match.group(1).strip()
            return os.path.basename(os.path.dirname(readme_path))
    except Exception as e:
        return os.path.basename(os.path.dirname(readme_path))


def count_files_in_department(dept_dir):
    """统计部门目录中的文件数量（忽略README.md）"""
    count = 0
    for root, _, files in os.walk(dept_dir):
        for file in files:
            if file != "README.md":
                count += 1
    return count


def get_md_files_titles(dept_dir):
    """获取部门目录中所有MD文件的标题"""
    titles = []
    for root, _, files in os.walk(dept_dir):
        for file in files:
            if file.endswith(".md") and file != "README.md":
                file_path = os.path.join(root, file)
                title = get_title_from_md(file_path)
                if title:
                    titles.append((file, title))
                else:
                    titles.append((file, "无标题"))
    return titles


def main():
    # 项目根目录的src文件夹
    src_dir = os.path.join(os.getcwd(), "src")
    output_filename = "部门文件统计报告.md"
    markdown_content = []

    # 保存部门及其文件数量的字典
    departments = {}
    # 保存部门及其文件标题的字典
    department_titles = {}

    # 遍历src下的所有目录
    for item in os.listdir(src_dir):
        item_path = os.path.join(src_dir, item)

        # 忽略.vuepress目录和非目录文件
        if item == ".vuepress" or not os.path.isdir(item_path):
            continue

        # 查找部门名称
        readme_path = os.path.join(item_path, "README.md")
        if os.path.exists(readme_path):
            dept_name = get_department_name(readme_path)
        else:
            dept_name = item

        # 统计文件数量
        file_count = count_files_in_department(item_path)
        departments[dept_name] = file_count

        # 获取文件标题
        department_titles[dept_name] = get_md_files_titles(item_path)

    # 按文件数量从多到少排序
    sorted_departments = sorted(departments.items(), key=lambda x: x[1], reverse=True)

    # 构建文件数量结果的Markdown表格
    markdown_content.append("# 部门文件统计")
    markdown_content.append("(不包括README.md)")
    markdown_content.append("")  # Blank line
    markdown_content.append("| 部门名称 | 文件数量 |")
    markdown_content.append("| :------- | :------- |")
    for dept, count in sorted_departments:
        markdown_content.append(f"| {dept} | {count} |")
    markdown_content.append("")  # Blank line

    # 构建每个部门的文件标题的Markdown表格
    markdown_content.append("# 各部门文件标题")
    for dept, titles_list in department_titles.items():
        markdown_content.append("")  # Blank line before department section
        markdown_content.append(f"## 【{dept}】")
        if titles_list:
            markdown_content.append("")  # Blank line before table
            markdown_content.append("| 文件名 | 标题 |")
            markdown_content.append("| :----- | :--- |")
            for file_name, title_text in titles_list:
                safe_title_text = title_text.replace(
                    "|", "\\|"
                )  # Escape pipe characters
                markdown_content.append(f"| {file_name} | {safe_title_text} |")
        else:
            markdown_content.append("")  # Blank line
            markdown_content.append("该部门没有MD文件。")
    markdown_content.append(
        ""
    )  # Final blank line ensures content block ends with a newline if not empty

    # 将Markdown内容写入文件
    file_body = "\n".join(markdown_content)  # Use actual newline character

    # Ensure a single trailing newline for the file.
    # If content is empty or only whitespace (e.g., after join if markdown_content was [""] or ["", ""])
    if not file_body.strip():
        file_body = "\n"
    # Else, if there is content but it doesn't end with a newline, add one.
    elif not file_body.endswith("\n"):
        file_body += "\n"

    with open(output_filename, "w", encoding="utf-8") as md_file:
        md_file.write(file_body)

    print(f"统计结果已保存到 {output_filename}")


if __name__ == "__main__":
    main()
