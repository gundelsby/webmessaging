import { html } from '@popeindustries/lit-html-server';

export { IFrame };

function IFrame(data) {
  return html`
    <iframe src="${data.src}" frameborder="1"></iframe>
  `;
}
