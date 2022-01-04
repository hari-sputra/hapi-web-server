const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Home Page';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return `The page cannot be accessed with that method`;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'The page cannot be accessed with that method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "Stranger" } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Page not found!';
        },
    },

];

module.exports = routes;