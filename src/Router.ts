// Pages
import Home from './views/pages/Home';
import Error404 from './views/pages/Error404';
import Auth from './views/pages/Auth';
import About from './views/pages/About';
import Profile from './views/pages/Profile';

const routes = {
    '/': Home,
    '/auth': Auth,
    '/profile': Profile,
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
