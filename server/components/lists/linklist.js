import { html } from '@popeindustries/lit-html-server';

export { LinkList };

/**
 * Build an unordered list of links
 *
 * @param {Object[]} links - the links for the list
 * @param {string} links[].text - the link text
 * @param {string} links[].href - the link href
 */
function LinkList(links) {
  return html`
    <ul>
      ${links.map((link) => {
        return html`
          <li>
            <a href="${link.href}">${link.text}</a>
          </li>
        `;
      })}
    </ul>
  `;
}
