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

    # 打印文件数量结果
    print("部门文件统计（不包括README.md）：")
    print("=" * 40)
    print(f"{'部门名称':<20} {'文件数量':<10}")
    print("-" * 40)
    for dept, count in sorted_departments:
        print(f"{dept:<20} {count:<10}")
    print("=" * 40)

    # 打印每个部门的文件标题
    print("\n各部门文件标题：")
    print("=" * 60)
    for dept, titles in department_titles.items():
        if titles:
            print(f"\n【{dept}】部门文件标题列表：")
            print("-" * 60)
            for file_name, title in titles:
                print(f"{file_name:<30} {title}")
        else:
            print(f"\n【{dept}】部门没有MD文件")
    print("=" * 60)


if __name__ == "__main__":
    main()
