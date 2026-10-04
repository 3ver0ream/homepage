const postContent = document.querySelector('[data-post-content]');
const tableOfContents = document.querySelector('[data-toc]');

if (postContent && tableOfContents) {
  const headings = [...postContent.querySelectorAll('h2, h3')];
  const list = tableOfContents.querySelector('ol');

  for (const [index, heading] of headings.entries()) {
    if (!heading.id) heading.id = `section-${index + 1}`;
    const item = document.createElement('li');
    if (heading.tagName === 'H3') item.className = 'subheading';
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent;
    item.append(link);
    list.append(item);
  }

  tableOfContents.hidden = headings.length === 0;
}
