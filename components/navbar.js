function loadNavbar(basePath = '') {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-unified">
      <div class="container-fluid">
        <a class="navbar-brand font-weight-bolder" href="https://www.escotel.com.mx" target="_blank">
          <img src="https://www.escotel.com.mx/images/logo@2x.png" alt="Escotel Logo">
        </a>
        
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" 
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100 navbar-solid" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-auto">
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}index.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">home</i>Inicio
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}pages/fortalezas.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">psychology</i>Fortalezas
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}pages/soluciones.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">settings</i>Soluciones
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}pages/nuevos-negocios.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">business_center</i>Nuevos Negocios
              </a>
            </li>
            
            <li class="nav-item mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}pages/unete.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">handshake</i>Únete
              </a>
            </li>
            
            <li class="nav-item my-auto ms-3 ms-lg-0">
              <a href="${basePath}pages/contacto.html" class="btn-contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Insertar navbar en el contenedor
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
    
    // Configurar auto-cierre del menú móvil
    setupMobileNavigation();
    
    console.log('✅ Navbar cargado correctamente');
  } else {
    console.error('❌ Error: No se encontró el contenedor #navbar-container');
  }
}

// Función para configurar la navegación móvil
function setupMobileNavigation() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    // Cerrar menu al hacer click en un enlace (mobile)
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  }
}

// Auto-ejecutar si estamos en el índice
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Detectar si estamos en el root o en pages/
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : '';
    loadNavbar(basePath);
  });
} else {
  // Detectar si estamos en el root o en pages/
  const isInPages = window.location.pathname.includes('/pages/');
  const basePath = isInPages ? '../' : '';
  loadNavbar(basePath);
}