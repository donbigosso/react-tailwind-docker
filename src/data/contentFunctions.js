export async function getContent() {
  const randomString = Math.random().toString(36).substring(2, 12);
  const response = await fetch(`/data/content_PL.json?${randomString}`);
  const data = await response.json();

  return data;
}
export function displayParagraph(content, paragraphID) {
  return content?.paragraphs[paragraphID] || 'Ładowanie...';
}
export function displayHeader(content, headerID) {
  return content?.headers[headerID] || 'Ładowanie...';
}
export function displaySubheading(content, subheadingID) {
  return content?.subheadings[subheadingID] || 'Ładowanie...';
}
