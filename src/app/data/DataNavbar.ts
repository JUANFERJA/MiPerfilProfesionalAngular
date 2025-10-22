import { faLinkedin, faGithub, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

let DataNavbar = {
    itemsMenu: [
                    { name: 'Sobre mí', link: '/sobre-mi', isRoute: true },
                    { name: 'Experiencia', link: '/experiencia', isRoute: true },
                    { name: 'Certificaciones', link: '/certificaciones', isRoute: true },
                    { name: 'Proyectos', link: '/proyectos', isRoute: true },
                    { name: 'Habilidades', link: '/habilidades', isRoute: true }    
                 ],
      itemsRedesSociales: [
                    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tu-perfil', icon: faLinkedin },
                    { name: 'GitHub', link: 'https://github.com/tu-perfil', icon: faGithub },
                    { name: 'YouTube', link: 'https://www.youtube.com/channel/tu-canal', icon: faYoutube },
                    { name: 'TikTok', link: 'https://www.tiktok.com/@tu-perfil', icon: faTiktok }
                ]
}

export default DataNavbar;