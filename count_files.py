import os
import re


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


def main():
    # 项目根目录的src文件夹
    src_dir = os.path.join(os.getcwd(), "src")

    # 保存部门及其文件数量的字典
    departments = {}

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

    # 按文件数量从多到少排序
    sorted_departments = sorted(departments.items(), key=lambda x: x[1], reverse=True)

    # 打印结果
    print("部门文件统计（不包括README.md）：")
    print("=" * 40)
    print(f"{'部门名称':<20} {'文件数量':<10}")
    
    print("-" * 40)
    for dept, count in sorted_departments:
        print(f"{dept:<20} {count:<10}")
    print("=" * 40)


if __name__ == "__main__":
    main()
