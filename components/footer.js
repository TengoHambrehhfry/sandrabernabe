class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        footer {
          background-color: #85054D;
          color: white;
          text-align: center;
          padding: 1.5rem 0;
          margin: 0;
          border: none;
          width: 100%;
          box-sizing: border-box;
        }

        .copyright {
          color: rgba(255,255,255,0.9);
          font-size: 0.875rem;
          margin: 0;
        }
      </style>

      <footer>
        <p class="copyright">
          © ${new Date().getFullYear()} Portafolio Sandra Bernabé. Todos los derechos reservados.
        </p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
