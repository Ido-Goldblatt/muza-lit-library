import { LitElement, css, svg } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-songs')
export class IconSongs extends LitElement {
  static styles = css`
    :host {
      text-align: center;
      display: block;
    }
  `;

  render() {
    return svg`<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1013_2623)">
<path d="M14.5292 4.26504V6.95582C14.5292 7.21384 14.3272 7.42578 14.0702 7.435H13.9784C13.1339 7.45343 11.9405 6.96503 11.61 6.73466C11.2795 6.50428 11.0959 6.60565 11.0959 6.85445V15.6087C11.0959 17.295 9.59044 18.6404 7.84627 18.3363C6.7355 18.1428 5.8267 17.2305 5.62474 16.1247C5.31263 14.3739 6.6437 12.8534 8.32362 12.8534C8.63573 12.8534 8.94785 12.9087 9.25078 13.0101V3.37119C9.25078 3.02102 9.53536 2.73535 9.88419 2.73535H10.6645C10.9032 2.73535 11.1418 2.80907 11.3438 2.9473L11.5825 3.11317C12.2801 3.58313 13.1063 3.82272 13.9417 3.80429H14.0243C14.2905 3.79508 14.5108 4.00702 14.5108 4.27426L14.5292 4.26504Z" fill="#374151"/>
</g>
<defs>
<clipPath id="clip0_1013_2623">
<rect width="8.94118" height="15.6471" fill="white" transform="translate(5.58789 2.73535)"/>
</clipPath>
</defs>
</svg>
`;
  }
}
