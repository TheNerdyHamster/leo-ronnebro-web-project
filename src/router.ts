// Pages
import Home from './views/pages/home';
import Error404 from './views/pages/error404';
import Auth from './views/pages/auth';
import About from './views/pages/about';

const routes = {
    '/': Home,
    '/auth': Auth,
    '/about': About,
};

const router = async () => {
    const content = null || document.getElementById('content');

    const path = window.location.pathname;

    const page = routes[path] ? routes[path] : Error404;
    content.innerHTML = await page.render();
    await page.post_render();
};

// Rerender page on hash change or load.
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
