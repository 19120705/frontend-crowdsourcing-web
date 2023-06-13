import config from '~/config';
// Layouts

//Pages
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Action from '~/pages/Action';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.training, component: Upload },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
];

const privateRoutes = [{ path: config.routes.action, component: Action }];

export { publicRoutes, privateRoutes };
