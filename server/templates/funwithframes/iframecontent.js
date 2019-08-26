import { html } from '@popeindustries/lit-html-server';

export { IFRameContent };

function IFRameContent() {
  return html`
    <div>
      <p class="text"></p>
      <div class="canvas" style="border:1px solid black;height:100px"></div>
    </div>
    <script>
      window.addEventListener('message', (event) => {
        console.log('got message', event.data);
        const { text, value } = event.data;
        document.querySelector('.text').textContent = text;
        document.querySelector('.canvas').style.backgroundColor = value;
      });
    </script>
  `;
}
