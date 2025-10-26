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
                    width: 170px;  /* ancho del rectángulo */
                    height: 80px;  /* alto del rectángulo */
                    overflow: hidden;
                }
                
                .logo-rect img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* mantiene proporción y recorta si es necesario */
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

                @media (max-width: 640px) {
                    nav {
                        gap: 1rem;
                    }
                }
            </style>
            
            <header>
                <!-- Logo rectangular con hipervínculo -->
                <a href="index.html">
                    <div class="logo-rect">
                        <img src="img/logolargo.png" alt="Logo Rectangular">
                    </div>
                </a>

                <nav>
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
    }
}

customElements.define('custom-header', CustomHeader);
