export function parseCsv(csv: string): Record<string, string>[] {
  const [headerLine, ...lines] = csv.trim().split('\n');
  const headers = headerLine.split(',');
  return lines.map(line => {
    const values = line.split(',');
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']));
  });
}
