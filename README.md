somesite
========

Appex sample code

Playing with Appex https://github.com/sinclairzx81/appex

Really easy to use web framework, making use of Typescript in smart ways. It's for example compiling the typescript in memory, not using javascript files.

Simply add modules with functions for each url endpoint.

For example, in the main module (usually saved in program.ts):

export function about(context:appex.web.IContext) {
    context.response.send('hello from about');
}

will answer calls to /about

Serving json is done with:

export function somedata(context:appex.web.IContext) {
    context.response.json({id:0,foo:'bar'});
}

A typical resource endpoint could look like this:

export module someresource {

    export function index(context:appex.web.IContext){
        context.response.send('Hello from someresource');
    }

    export function wildcard(context:appex.web.IContext, id:number){
        var someObject = {id:id, somedata:'xyz'};
        context.response.json(someObject);
    }

}

Serving data from /someresource/:id
