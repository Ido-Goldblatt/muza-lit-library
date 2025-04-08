import { LitElement, css, svg } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-playlist')
export class IconPlaylist extends LitElement {
  static styles = css`
    :host {
      text-align: center;
      display: block;
    }
  `;

  render() {
    return svg`<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
        <style>.cls-1{fill:none;}</style>
    </defs>
    <title>playlist</title>
    <rect x="4" y="6" width="18" height="2" />
    <rect x="4" y="12" width="18" height="2" />
    <rect x="4" y="18" width="12" height="2" />
    <polygon points="21 18 28 23 21 28 21 18" />
    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1"
        width="32" height="32" />
</svg>`;
  }
}
