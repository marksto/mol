declare namespace $ { }
export = $;
declare var $node: any;
declare namespace $ {
}
declare namespace $ {
    var $mol_dom_context: Window & {
        Node: typeof Node;
        Element: typeof Element;
        HTMLElement: typeof HTMLElement;
        XMLHttpRequest: typeof XMLHttpRequest;
    };
}
declare namespace JSX {
    interface Element extends HTMLElement {
    }
    interface ElementClass {
        render(): Element;
    }
    interface IntrinsicElements {
        [key: string]: {
            [prop: string]: any;
        };
    }
    interface ElementAttributesProperty {
        props: {};
    }
}
declare namespace $ {
    function $mol_dom_jsx<Props, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...children: Children): Element;
}
declare namespace $ {
    function $mol_dom_patch(target: Node | null, source: Node): Node;
}
declare namespace $ {
    class $mol_app_bench_list_tsx {
        static data: {
            sample: string;
            items: {
                id: number;
                title: string;
                content: string;
            }[];
        };
        static selected: number;
        static onClick(id: number, event: MouseEvent): void;
        static render(): Node;
    }
}
