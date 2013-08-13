/// <reference path="node_modules/appex/appex.d.ts" />

export module someresource {

    export function index(context:appex.web.IContext){
        context.response.send('Hello from someresource');
    }

    export function wildcard(context:appex.web.IContext, id:number){
        var someObject = {id:id, somedata:'xyz'};
        context.response.json(someObject);
    }

}