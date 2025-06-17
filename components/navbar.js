// navbar.js - Loader para el Navbar Unificado de ESCOTEL
function loadNavbar(basePath = '') {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-unified">
      <div class="container-fluid">
        <a class="navbar-brand font-weight-bolder" href="https://www.escotel.com.mx" target="_blank">
          <img src="${basePath}https://www.escotel.com.mx/images/logo@2x.png" alt="Escotel Logo">
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
        
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-auto">
            <li class="nav-item">
              <a class="nav-link d-flex cursor-pointer align-items-center" href="${basePath}index.html">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">home</i>Inicio
              </a>
            </li>
            
            <li class="nav-item dropdown dropdown-hover mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center" 
                 id="dropdownMenuFortalezas" data-bs-toggle="dropdown" aria-expanded="false" 
                 href="${basePath}pages/fortalezas.html"
                 onclick="window.location.href='${basePath}pages/fortalezas.html'">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">psychology</i>Fortalezas
                <img src="${basePath}assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
              </a>
              <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                   aria-labelledby="dropdownMenuFortalezas">
                <a class="dropdown-item border-radius-md" href="${basePath}pages/fortalezas.html"><span>Visión / Misión</span></a>
                <a class="dropdown-item border-radius-md" href="${basePath}pages/fortalezas.html"><span>Política de Calidad</span></a>
                <a class="dropdown-item border-radius-md" href="${basePath}pages/fortalezas.html"><span>Trabajo en Equipo</span></a>
                <a class="dropdown-item border-radius-md" href="${basePath}pages/fortalezas.html"><span>Certificaciones</span></a>
                <a class="dropdown-item border-radius-md" href="${basePath}pages/fortalezas.html"><span>Clientes</span></a>
                <a class="dropdown-item border-radius-md" href="${basePath}pages/fortalezas.html"><span>Industrias</span></a>
              </div>
            </li>
            
            <li class="nav-item dropdown dropdown-hover mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center"
                 id="dropdownMenuSoluciones" data-bs-toggle="dropdown" aria-expanded="false" 
                 href="${basePath}pages/soluciones.html"
                 onclick="window.location.href='${basePath}pages/soluciones.html'">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">settings</i>Soluciones
                <img src="${basePath}assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
              </a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                  aria-labelledby="dropdownMenuSoluciones">
                <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="${basePath}pages/soluciones.html">
                    <div>
                      <h6 class="dropdown-header text-dark font-weight-bolder p-0">Call Center</h6>
                      <span class="text-sm">Centro de Contacto Telefónico</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="${basePath}pages/soluciones.html">
                    <div>
                      <h6 class="dropdown-header text-dark font-weight-bolder p-0">Asistencia</h6>
                      <span class="text-sm">Servicios integrales de asistencia</span>
                    </div>
                  </a>
                  <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia en el Hogar</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Vial</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia en Viajes</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Médica</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Legal</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Técnica</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Prevención Salud</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia en Viajes Internacionales</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Migrante</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Seguridad Bancaria</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Funeraria</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Educativa</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Mascota</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Fraude</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Soporte Técnico</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Oficina Virtual</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Gestoría Administrativa</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Asistencia Senior (3° edad)</a>
                    <a class="dropdown-item ps-3 border-radius-md mb-1" href="${basePath}pages/soluciones.html">Servicios en Campo</a>
                  </div>
                </li>
              </ul>
            </li>
            
            <li class="nav-item dropdown dropdown-hover mx-2">
              <a class="nav-link d-flex cursor-pointer align-items-center"
                 id="dropdownMenuNuevosNegocios" data-bs-toggle="dropdown" aria-expanded="false" 
                 href="${basePath}pages/nuevos-negocios.html"
                 onclick="window.location.href='${basePath}pages/nuevos-negocios.html'">
                <i class="material-symbols-rounded opacity-6 me-2 text-md">business_center</i>Nuevos Negocios
                <img src="${basePath}assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
              </a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                  aria-labelledby="dropdownMenuNuevosNegocios">
                <li class="nav-item list-group-item border-0 p-0">
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="${basePath}pages/nuevos-negocios.html">
                    <h6 class="dropdown-header text-dark font-weight-bolder p-0">Affinity Sponsoring</h6>
                    <span class="text-sm">Programas de patrocinio</span>
                  </a>
                </li>
                <li class="nav-item list-group-item border-0 p-0">
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="${basePath}pages/nuevos-negocios.html">
                    <h6 class="dropdown-header text-dark font-weight-bolder p-0">Unidades de Negocio</h6>
                    <span class="text-sm">Divisiones especializadas</span>
                  </a>
                </li>
              </ul>
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