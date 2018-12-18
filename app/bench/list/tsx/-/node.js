require( "source-map-support" ).install(); var exports = void 0;

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = Object.setPrototypeOf( module['export'+'s'] , global )
$.$$ = $

$.$mol = $  // deprecated

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) + ".js" ] }; 

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mol.js.map
;

$node[ "../mol/mol.js" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )

;
"use strict";
var $node = new Proxy({}, { get(target, field, wrapper) {
        return require(field);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = $node['jsdom'].jsdom().defaultView;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_jsx(Elem, props, ...children) {
        if (typeof Elem !== 'string')
            return Elem(props, ...children);
        const document = $.$mol_dom_context.document;
        const node = document.createElement(Elem);
        for (let child of [].concat.call([], ...children)) {
            if (typeof child === 'string')
                child = document.createTextNode(child);
            node.appendChild(child);
        }
        for (const key in props) {
            let descr;
            let proto = node;
            while (true) {
                proto = Object.getPrototypeOf(proto);
                if (!proto) {
                    node.setAttribute(key, String(props[key]));
                    break;
                }
                descr = Object.getOwnPropertyDescriptor(proto, key);
                if (!descr)
                    continue;
                if (descr.set)
                    Object.defineProperty(node, key, descr);
                break;
            }
            node[key] = props[key];
        }
        return node;
    }
    $.$mol_dom_jsx = $mol_dom_jsx;
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_patch(target, source) {
        if (target == null)
            return source;
        if (target.nodeName !== source.nodeName)
            return source;
        switch (source.nodeType) {
            case Node.TEXT_NODE:
                if (target.nodeValue !== source.nodeValue)
                    target.nodeValue = source.nodeValue;
                return target;
            case Node.ELEMENT_NODE:
                let overflow = -source.childNodes.length;
                let next = target.firstChild;
                for (let child of source.childNodes) {
                    child = $mol_dom_patch(next, child);
                    if (next === child)
                        next = next.nextSibling;
                    else
                        target.insertBefore(child, next);
                }
                overflow += target.childNodes.length;
                for (let i = 0; i < overflow; ++i) {
                    target.removeChild(target.lastChild);
                }
                for (let key of Object.getOwnPropertyNames(source)) {
                    target[key] = source[key];
                }
                for (const attr of target.attributes) {
                    if (source.hasAttribute(attr.nodeName))
                        continue;
                    target.removeAttribute(attr.nodeName);
                }
                for (const attr of source.attributes) {
                    ;
                    target.setAttribute(attr.nodeName, attr.nodeValue);
                }
                return target;
            default: throw new Error(`Unsupported node type ${source.nodeType}`);
        }
    }
    $.$mol_dom_patch = $mol_dom_patch;
})($ || ($ = {}));
//patch.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_app_bench_list_tsx {
        static onClick(id, event) {
            this.selected = id;
            this.render();
        }
        static render() {
            let Item = ({ id, title, content }) => ($.$mol_dom_jsx("div", { id: id, className: `list-item list-item-selected-${this.selected === id}`, onclick: this.onClick.bind(this, id) },
                $.$mol_dom_jsx("div", { id: `${id}.title`, className: "list-item-title" }, title),
                $.$mol_dom_jsx("div", { id: `${id}.content`, className: "list-item-content" }, content)));
            return $.$mol_dom_patch(document.getElementById('list'), $.$mol_dom_jsx("div", { id: "list", className: "list" }, this.data.items.map(item => $.$mol_dom_jsx(Item, Object.assign({}, item)))));
        }
    }
    $mol_app_bench_list_tsx.data = {
        sample: '',
        items: []
    };
    $mol_app_bench_list_tsx.selected = null;
    $.$mol_app_bench_list_tsx = $mol_app_bench_list_tsx;
})($ || ($ = {}));
//index.js.map
//# sourceMappingURL=node.js.map