import App from './App.san';

import routes from './routes';
import {Router} from 'san-router';

const app = new App();
const router = new Router();

app.attach(document.getElementById('app'));

routes.forEach(route => router.add(route));
router.start();

// hmr 更新逻辑
if (module.hot) {
    module.hot.data = {app, router};

    // 接受热更新的依赖数组
    module.hot.accept(['./routes', './App.san'], () => {

        // 销毁旧的app
        module.hot.data.app.dispose();
        // 停止router并销毁
        module.hot.data.router.stop();
        // 这里要注意，router中存活的组件实例和App是没有父子关系的
        // 所以要手动dispose
        module.hot.data.router.routeAlives.forEach(item => {
            item.component.dispose();
        });
        module.hot.data.router = null;

        // 创建新的app和router
        const app = new App();
        const router = new Router();
        app.attach(document.getElementById('app'));
        routes.forEach(route => router.add(route));
        router.start();

        // app传递给module.hot.data以便下次更新时销毁
        module.hot.data = {app, router};
    });
}