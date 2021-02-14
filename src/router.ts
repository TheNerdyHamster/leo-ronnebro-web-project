// Pages
import Home from './views/pages/home';

// Components
import Navbar from './views/components/navbar';
import Footer from './views/components/footer';

import Error404 from './views/pages/error404';

const routes = {
    '/': Home,
};

const router = async () => {
    const navbar = null || document.getElementById('navbar');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    navbar.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    const path = window.location.pathname;

    const page = routes[path] ? routes[path] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();
};

// Rerender page on hash change or load.
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
