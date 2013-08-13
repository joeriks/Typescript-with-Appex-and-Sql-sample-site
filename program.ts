/// <reference path="node_modules/appex/appex.d.ts" />
/// <reference path="someresource.ts"/>
/// <reference path="products.ts"/>

// url path: /
export function index(context:appex.web.IContext) {
    context.response.send('home');
}

// url path: /about
export function about(context:appex.web.IContext) {
    context.response.send('about');
}

// url path: (.*) wildcard
export function wildcard (context:appex.web.IContext, path) {
    context.response.send(404, path + " not found");
}