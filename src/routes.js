import Wang from './components/Wang.san';
import ant from './components/ant.san';
import san from 'san';

const routes = [
    {
        rule: '/',
        Component: san.defineComponent({
            template: '<p>zzz欢迎</p>'
        }),
        target: '#content'
    }
    , {
        rule: '/wang',
        Component: Wang,
        target: '#content'
    },
    {
        rule: '/ant',
        Component: ant,
        target: '#content'
    }];

export default routes;
