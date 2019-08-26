import { IFrame } from '../../components/frames/iframe';
import { html } from '@popeindustries/lit-html-server';

export { FramesTemplate };

function FramesTemplate(data) {
  return html`
    <h2>IFrame</h2>
    <p>Click some buttons</p>
    <div>
      <button data-value="#f00">Roses are</button>
      <button data-value="#0f0">Grass is</button>
      <button data-value="#00f">Sky is</button>
    </div>
    ${IFrame({ src: data.iframe.src })}
  `;
}
