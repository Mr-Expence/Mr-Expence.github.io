import argparse
import json
import sys
import pyperclip


def escape_for_json(text: str) -> str:
    return json.dumps(text, ensure_ascii=False)


def read_input(path: str | None) -> str:
    if path:
        with open(path, 'r', encoding='utf-8') as file_handle:
            return file_handle.read()
    if sys.stdin.isatty():
        return input('Paste SVG text: ')
    return sys.stdin.read()


def main() -> int:
    parser = argparse.ArgumentParser(description='Convert SVG markup into a JSON-safe string.')
    parser.add_argument('path', nargs='?', help='Optional path to an SVG file or text file')
    args = parser.parse_args()

    try:
        input_text = read_input(args.path)
    except KeyboardInterrupt:
        print('\nOperation cancelled.')
        return 1
    print("svg for json")
    pyperclip.copy(escape_for_json(input_text))
    print(escape_for_json(input_text))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())