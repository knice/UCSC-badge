import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ucsc-badge')
export class UcscBadge extends LitElement {
  @property() public count = 0;

  static styles = css`
    
    .container {
      font-family: Roboto,sans-serif;;
      width: 100%;
      font-size:clamp(14px, 3vw, 36px); 
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

  render() {
    return html`
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

}
