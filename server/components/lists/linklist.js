import { html } from '@popeindustries/lit-html-server';

export { LinkList };

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
