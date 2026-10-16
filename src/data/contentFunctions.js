export async function getContent() {
  const randomString = Math.random().toString(36).substring(2, 12);
  const response = await fetch(`/data/content_PL.json?${randomString}`)
  const data = await response.json()
  console.log("Content loaded", data)
  return data
}
export function displayParagraph(content, paragraphID) {
  return content?.paragraphs[paragraphID] || "Ładowanie..."
}
