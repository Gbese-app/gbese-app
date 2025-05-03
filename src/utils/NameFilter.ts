export function getFirstWordInUpper(str: string): string {
    const [first = '', second = ''] = str.trim().split(/\s+/);
    return `${first[0]?.toUpperCase() ?? ''}${second[0]?.toUpperCase() ?? ''}`;
}