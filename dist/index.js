import { packd_export_3 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { __decorate,__metadata } = packd_export_3;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { html,css,LitElement } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { customElement,property } = packd_export_2;;
let UcscBadge = class UcscBadge extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <a href="https://success.ucsc.edu/" class="container">
        <div class="media">
          <img src="https://www.ucsc.edu/images/ssi-badge.svg" alt="Student Success Initiative">
        </div>
        <div class="text">
          <p>Another inspiring story of how UC Santa Cruz supports student success. Join us in changing students’ trajectories so they can change the world.</p>
        </div>
      </a>
    `;
    }
    inc() {
        this.count++;
    }
    dec() {
        this.count--;
    }
};
UcscBadge.styles = css `
    
    .container {
      font-family: Roboto,sans-serif;;
      max-width: 100%;
      font-size:clamp(18px, 1.3vw); 
      max-width:100%;
      display: flex;
      flex-direction: row;
      gap: 1.25rem;
      margin: 2rem auto;
      line-height: 1.3;
      padding: 1rem 0.5rem;
      text-decoration: none;
      color: #333;
      width: max(50%, 1080px);
      box-sizing: border-box;
    }

    .container:focus,
    .container:hover,
    .container:active {
      background-color: #fff1bf;
      transition: all 0.3s;
    }

    .media {
      flex: 0 1 30%;
      display: grid;
      place-content: center;
    }

    .text {
      flex: 0 1 70%;
      padding: 0;
      display: grid;
      place-content: center;
    }

    img {
      width: 100%;
      height: auto;
      color: black;
      margin: 0;
    }

    p {
      margin: 0;
    }
  `;
__decorate([
    property(),
    __metadata("design:type", Object)
], UcscBadge.prototype, "count", void 0);
UcscBadge = __decorate([
    customElement('ucsc-badge')
], UcscBadge);
export { UcscBadge };
//# sourceMappingURL=index.js.map