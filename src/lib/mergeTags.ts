export function mergeTags(template: string, data: Record<string, string>) {
  return template.replace(/\{\{(.*?)\}\}/g, (_, key) => data[key.trim()] || '');
}
