class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #85054D;
                    z-index: 1000;
                    box-shadow: 0 2px 10px rgba(133, 5, 77, 0.2);
                }
                
                .logo-rect {
                    width: 170px;
                    height: 80px;
                    overflow: hidden;
                }
                
                .logo-rect img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                nav {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                
                a {
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.2s;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    font-size: 0.875rem;
                }
                
                a:hover {
                    color: rgba(255,255,255,0.8);
                }

                /* Botón hamburguesa */
                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 25px;
                    height: 18px;
                    cursor: pointer;
                }
                .menu-toggle span {
                    display: block;
                    height: 3px;
                    background: white;
                    border-radius: 2px;
                    transition: all 0.3s;
                }

                @media (max-width: 768px) {
                    nav {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        background-color: #85054D;
                        flex-direction: column;
                        width: 200px;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease-in-out;
                    }

                    nav.show {
                        max-height: 300px; /* altura suficiente para mostrar todos los enlaces */
                    }

                    .menu-toggle {
                        display: flex;
                    }
                }
            </style>

            <header>
                <a href="index.html">
                    <div class="logo-rect">
                        <img src="img/logolargo.png" alt="Logo Rectangular">
                    </div>
                </a>

                <div class="menu-toggle" id="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav id="nav">
                    <a href="navtab.html">PROYECTOS</a>
                    <a href="index.html#contact">CONTÁCTAME</a>
                    <a href="index.html" class="home-icon" title="Inicio">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                            <path d="M12 3l8 8h-3v8h-10v-8h-3l8-8z"/>
                        </svg>
                    </a>
                </nav>
            </header>
        `;

        const toggle = this.shadowRoot.getElementById('menu-toggle');
        const nav = this.shadowRoot.getElementById('nav');

        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

customElements.define('custom-header', CustomHeader);
