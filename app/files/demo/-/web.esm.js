
var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) + ".js" ] }; 

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mol.js.map
;

$node[ "../mol/mol.js" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , self ) : self
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    class $mol_object {
        get $() {
            const owner = this.object_owner();
            return (owner && owner.$ || $);
        }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return this.name;
        }
        object_owner(next) {
            return this['object_owner()'] || (this['object_owner()'] = next);
        }
        object_host(next) {
            return this['object_host()'] || (this['object_host()'] = next);
        }
        object_field(next) {
            return this['object_field()'] || (this['object_field()'] = next) || '';
        }
        object_id(next) {
            return this[Symbol.toStringTag] || (this[Symbol.toStringTag] = next) || '';
        }
        toString() {
            return this.object_id();
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $mol_object.$ = $;
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target.constructor !== source.constructor)
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target.constructor);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    $mol_conform_handler(Array, (target, source) => {
        let equal = target.length === source.length;
        for (let i = 0; i < target.length; ++i) {
            const conformed = $mol_conform(target[i], source[i]);
            if (!$.$mol_compare_any(conformed, target[i])) {
                try {
                    target[i] = conformed;
                }
                catch (error) {
                    equal = false;
                }
            }
            if (equal && !$.$mol_compare_any(conformed, source[i]))
                equal = false;
        }
        return equal ? source : target;
    });
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_fail_catched = new WeakSet();
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        if ($.$mol_log_context())
            $.$mol_log_context()();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_debug(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_debug()');
            }
            else {
                sessionStorage.setItem('$mol_log_debug()', next);
            }
        }
        return sessionStorage.getItem('$mol_log_debug()');
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.web.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_filter()');
            }
            else {
                sessionStorage.setItem('$mol_log_filter()', next);
            }
            filter = next;
        }
        if (filter !== undefined)
            return filter;
        return filter = sessionStorage.getItem('$mol_log_filter()');
    };
    if (typeof sessionStorage === 'undefined')
        $.$mol_log_filter = (next) => filter = next;
    if ($.$mol_log_filter() == null)
        console.info('Use $mol_log_filter( needle : string|null ) to toggle logs');
})($ || ($ = {}));
//log_filter.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_state_stack = new Map();
})($ || ($ = {}));
//stack.js.map
;
void function() {

	if( typeof alert === 'function' ) {
		var nativeAlert = alert
		window.alert = function alert( message ) {
			console.warn( 'Alerts causes atom synchronization problems in IE. Use custom notificator instead.' )
			return nativeAlert( message )
		}
	}

	if( typeof confirm === 'function' ) {
		var nativeConfirm = confirm
		window.confirm = function confirm( question ) {
			console.warn( 'Confirms causes atom synchronization problems in IE. Use custom dialog instead.' )
			return nativeConfirm( question )
		}
	}

	if( typeof confirm === 'function' ) {
		var nativePrompt = prompt
		window.prompt = function prompt( question , def ) {
			console.warn( 'Prompts causes atom synchronization problems in IE. Use custom dialog instead.' )
			return nativePrompt( question , def )
		}
	}

}()

;
"use strict";
var $;
(function ($) {
    let $mol_atom_status;
    (function ($mol_atom_status) {
        $mol_atom_status["obsolete"] = "obsolete";
        $mol_atom_status["checking"] = "checking";
        $mol_atom_status["pulling"] = "pulling";
        $mol_atom_status["actual"] = "actual";
    })($mol_atom_status = $.$mol_atom_status || ($.$mol_atom_status = {}));
    class $mol_atom extends $.$mol_object {
        constructor(id, handler = next => next) {
            super();
            this.masters = null;
            this.slaves = null;
            this.status = $mol_atom_status.obsolete;
            this.object_id(id);
            this.handler = handler;
        }
        destructor() {
            this.unlink();
            this.status = $mol_atom_status.actual;
            const value = this['value()'];
            if (value instanceof $.$mol_object) {
                if (value.object_owner() === this)
                    value.destructor();
            }
            this['value()'] = undefined;
        }
        unlink() {
            this.disobey_all();
            if (this.slaves)
                this.check_slaves();
        }
        get(force) {
            const slave = $mol_atom.stack[0];
            if (slave) {
                this.lead(slave);
                slave.obey(this);
            }
            this.actualize(force);
            const value = this['value()'];
            if (typeof Proxy !== 'function' && value instanceof Error) {
                throw value;
            }
            return value;
        }
        actualize(force) {
            if (this.status === $mol_atom_status.pulling) {
                throw new Error(`Cyclic atom dependency of ${this}`);
            }
            if (!force && this.status === $mol_atom_status.actual)
                return;
            const slave = $mol_atom.stack[0];
            $mol_atom.stack[0] = this;
            if (!force && this.status === $mol_atom_status.checking) {
                this.masters.forEach(master => {
                    if (this.status !== $mol_atom_status.checking)
                        return;
                    master.actualize();
                });
                if (this.status === $mol_atom_status.checking) {
                    this.status = $mol_atom_status.actual;
                }
            }
            if (force || this.status !== $mol_atom_status.actual) {
                const oldMasters = this.masters;
                this.masters = null;
                if (oldMasters)
                    oldMasters.forEach(master => {
                        master.dislead(this);
                    });
                this.status = $mol_atom_status.pulling;
                const next = this.pull(force);
                if (next === undefined) {
                    this.status = $mol_atom_status.actual;
                }
                else {
                    this.push(next);
                }
            }
            $mol_atom.stack[0] = slave;
        }
        pull(force) {
            try {
                return this.handler(this._next, force);
            }
            catch (error) {
                if (error['$mol_atom_catched'])
                    return error;
                if (error instanceof $mol_atom_wait)
                    return error;
                console.error(error.stack || error);
                if (!(error instanceof Error)) {
                    error = new Error(error.stack || error);
                }
                error['$mol_atom_catched'] = true;
                return error;
            }
        }
        set(next) {
            return this.value(next);
        }
        push(next_raw) {
            if (!(next_raw instanceof $mol_atom_wait)) {
                this._ignore = this._next;
                this._next = undefined;
            }
            this.status = next_raw === undefined ? $mol_atom_status.obsolete : $mol_atom_status.actual;
            const prev = this['value()'];
            let next = (next_raw instanceof Error || prev instanceof Error) ? next_raw : $.$mol_conform(next_raw, prev);
            if (next === prev)
                return prev;
            if (prev instanceof $.$mol_object) {
                if (prev.object_owner() === this)
                    prev.destructor();
            }
            if (next instanceof $.$mol_object) {
                next.object_owner(this);
            }
            if ((typeof Proxy === 'function') && (next instanceof Error)) {
                next = new Proxy(next, {
                    get(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                    ownKeys(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                });
            }
            this['value()'] = next;
            $.$mol_log(this, prev, '➔', next);
            this.obsolete_slaves();
            return next;
        }
        obsolete_slaves() {
            if (!this.slaves)
                return;
            this.slaves.forEach(slave => slave.obsolete());
        }
        check_slaves() {
            if (this.slaves) {
                this.slaves.forEach(slave => slave.check());
            }
            else {
                $mol_atom.actualize(this);
            }
        }
        check() {
            if (this.status === $mol_atom_status.actual || this.status === $mol_atom_status.pulling) {
                this.status = $mol_atom_status.checking;
                this.check_slaves();
            }
        }
        obsolete() {
            if (this.status === $mol_atom_status.obsolete)
                return;
            this.status = $mol_atom_status.obsolete;
            this.check_slaves();
            return;
        }
        lead(slave) {
            if (!this.slaves) {
                this.slaves = new Set();
                $mol_atom.unreap(this);
            }
            this.slaves.add(slave);
        }
        dislead(slave) {
            if (!this.slaves)
                return;
            if (this.slaves.size === 1) {
                this.slaves = null;
                $mol_atom.reap(this);
            }
            else {
                this.slaves.delete(slave);
            }
        }
        obey(master) {
            if (!this.masters)
                this.masters = new Set();
            this.masters.add(master);
        }
        disobey(master) {
            if (!this.masters)
                return;
            this.masters.delete(master);
        }
        disobey_all() {
            if (!this.masters)
                return;
            this.masters.forEach(master => master.dislead(this));
            this.masters = null;
        }
        cache(next) {
            if (next === undefined)
                return this['value()'];
            return this['value()'] = next;
        }
        value(next, force) {
            if (force === $mol_atom_force_cache)
                return this.push(next);
            if (next !== undefined) {
                if (force === $mol_atom_force)
                    return this.push(next);
                let next_normal = $.$mol_conform(next, this._ignore);
                if (next_normal === this._ignore)
                    return this.get(force);
                if (!(this['value()'] instanceof Error)) {
                    next_normal = $.$mol_conform(next, this['value()']);
                    if (next_normal === this['value()'])
                        return this.get(force);
                }
                this._next = next_normal;
                this._ignore = next_normal;
                force = $mol_atom_force_update;
            }
            return this.get(force);
        }
        static actualize(atom) {
            $mol_atom.updating.push(atom);
            $mol_atom.schedule();
        }
        static reap(atom) {
            $mol_atom.reaping.add(atom);
            $mol_atom.schedule();
        }
        static unreap(atom) {
            $mol_atom.reaping.delete(atom);
        }
        static schedule() {
            if (this.scheduled)
                return;
            new $.$mol_defer($.$mol_log_group('$mol_atom.sync()', () => {
                if (!this.scheduled)
                    return;
                this.scheduled = false;
                this.sync();
            }));
            this.scheduled = true;
        }
        static sync() {
            this.schedule();
            while (true) {
                const atom = this.updating.shift();
                if (!atom)
                    break;
                if (this.reaping.has(atom))
                    continue;
                if (atom.status !== $mol_atom_status.actual)
                    atom.get();
            }
            while (this.reaping.size) {
                this.reaping.forEach(atom => {
                    this.reaping.delete(atom);
                    if (!atom.slaves)
                        atom.destructor();
                });
            }
            this.scheduled = false;
        }
        then(done, fail) {
            let prev;
            let next;
            const atom = new $mol_atom(`${this}.then(${done})`, () => {
                try {
                    if (prev == undefined) {
                        const val = this.get();
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val.valueOf();
                        prev = val;
                    }
                    if (next == undefined) {
                        const val = done(prev);
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val.valueOf();
                        next = val;
                    }
                    return next;
                }
                catch (error) {
                    if (error instanceof $mol_atom_wait)
                        return error;
                    if (fail)
                        return fail(error);
                    return error;
                }
            });
            $mol_atom.actualize(atom);
            return atom;
        }
        catch(fail) {
            return this.then(next => next, fail);
        }
    }
    $mol_atom.stack = [];
    $mol_atom.updating = [];
    $mol_atom.reaping = new Set();
    $mol_atom.scheduled = false;
    $.$mol_atom = $mol_atom;
    $.$mol_state_stack.set('$mol_atom.stack', $mol_atom.stack);
    function $mol_atom_current() {
        return $mol_atom.stack[0];
    }
    $.$mol_atom_current = $mol_atom_current;
    class $mol_atom_wait extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mol_atom_wait';
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    class $mol_atom_force extends Object {
        static toString() { return this.name; }
    }
    $.$mol_atom_force = $mol_atom_force;
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    $.$mol_atom_force_cache = $mol_atom_force_cache;
    class $mol_atom_force_update extends $mol_atom_force {
    }
    $.$mol_atom_force_update = $mol_atom_force_update;
})($ || ($ = {}));
//atom.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object')
            return JSON.stringify(value);
        if (value instanceof Array)
            return JSON.stringify(value);
        if (value.constructor === Object)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_value(next, force) {
            const host = this;
            let atom = store.get(host);
            if (!atom) {
                const id = `${host}.${name}()`;
                atom = new $.$mol_atom(id, function () {
                    const v = value.apply(host, arguments);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                atom.object_owner(host);
                const destructor = atom.destructor;
                atom.destructor = () => {
                    store.delete(host);
                    destructor.call(atom);
                };
                store.set(host, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        descr.value['value'] = value;
    }
    $.$mol_mem = $mol_mem;
    function $mol_mem_key(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_key_value(key, next, force) {
            const host = this;
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let atom = dict.get(key);
            if (!atom) {
                const id = `${host}.${name}(${JSON.stringify(key)})`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.apply(host, [key, ...args]);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                const destructor = atom.destructor;
                atom.destructor = () => {
                    dict.delete(key);
                    destructor.call(atom);
                };
                dict.set(key, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        void (descr.value['value'] = value);
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next, force) {
            return next || {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_window, "size", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', $.$mol_log_group(`$mol_window resize`, () => {
        $mol_window.size(undefined, $.$mol_atom_force_cache);
    }));
})($ || ($ = {}));
//window.web.js.map
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
    $.$mol_dom_context = self;
})($ || ($ = {}));
//context.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set();
        for (let i = 0; i < childNodes.length; ++i) {
            let node = childNodes[i];
            if (node == null)
                continue;
            if (Object(node) === node) {
                if (node['dom_tree'])
                    node = node['dom_tree']();
                node_list.push(node);
                node_set.add(node);
            }
            else {
                node_list.push(String(node));
            }
        }
        let nextNode = el.firstChild;
        for (let view_ of node_list) {
            const view = view_.valueOf();
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//render.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $$;
    (function ($$_1) {
        let $$;
    })($$ = $.$$ || ($.$$ = {}));
    let $mol;
    (function ($mol_1) {
        let $mol;
    })($mol = $.$mol || ($.$mol = {}));
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_tree(nodes.item(i));
                document.title = view.title();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : next ? [node] : []) || [];
            return value.indexOf(node) !== -1;
        }
        context(next) {
            return next || $;
        }
        get $() {
            return this.context();
        }
        set $(next) {
            this.context(next);
        }
        context_sub() {
            return this.context();
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return this.constructor.toString().replace('$', '');
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return null;
        }
        sub_visible() {
            const sub = this.sub();
            if (!sub)
                return sub;
            const context = this.context_sub();
            sub.forEach(child => {
                if (child instanceof $mol_view) {
                    child.$ = context;
                }
            });
            return sub;
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        minimal_height() {
            return this.content_height();
        }
        content_height() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_height());
                }
            });
            return min;
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || this.$.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            node.setAttribute('id', this.dom_id());
            $.$mol_dom_render_attributes(node, this.attr_static());
            $.$mol_dom_render_events(node, this.event());
            $.$mol_dom_render_events_async(node, this.event_async());
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                for (let plugin of this.plugins()) {
                    plugin.dom_node(node);
                    plugin.render();
                }
                this.render();
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name });
                if (error instanceof $.$mol_atom_wait)
                    return node;
                try {
                    void (node.innerText = error.message);
                }
                catch (e) { }
                if (error['$mol_atom_catched'])
                    return node;
                console.error(error);
                error['$mol_atom_catched'] = true;
            }
            return node;
        }
        render() {
            const node = this.dom_node();
            const sub = this.sub_visible();
            if (sub)
                $.$mol_dom_render_children(node, sub);
            $.$mol_dom_render_attributes(node, this.attr());
            $.$mol_dom_render_styles(node, this.style());
            const fields = this.field();
            $.$mol_dom_render_fields(node, fields);
            new $.$mol_defer(() => $.$mol_dom_render_fields(node, fields));
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = this.object_host();
            if (owner instanceof $mol_view) {
                const suffix = this.object_field();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                'mol_view_error': false,
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "context", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "content_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        const event_name = self.cordova ? 'deviceready' : 'DOMContentLoaded';
        $.$mol_dom_context.document.addEventListener(event_name, $.$mol_log_group(`$mol_view ${event_name}`, (event) => {
            $.$mol_view.autobind();
            $.$mol_defer.run();
        }));
    }
})($ || ($ = {}));
//view.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next, force) {
            if (next === undefined)
                return [];
            const node = next[0];
            const atom = $.$mol_atom_current();
            new $.$mol_defer(() => {
                if (node)
                    return node.focus();
                const el = atom.cache()[0];
                if (el)
                    el.blur();
            });
            return undefined;
        }
        static position(next, force) {
            if (next !== undefined) {
                var start = next.start;
                var end = next.end;
                if (!(start <= end))
                    throw new Error(`Wrong offsets (${start},${end})`);
                var root = $.$mol_dom_context.document.getElementById(next.id);
                root.focus();
                var range = new Range;
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= start)
                            break;
                        start -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            start = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setStart(cur, start);
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= end)
                            break;
                        end -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            end = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setEnd(cur, end);
                var sel = $.$mol_dom_context.document.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                return next;
            }
            else {
                var sel = $.$mol_dom_context.document.getSelection();
                if (sel.rangeCount === 0)
                    return null;
                var range = sel.getRangeAt(0);
                var el = range.commonAncestorContainer;
                while (el && !el.id)
                    el = el.parentElement;
                if (!el)
                    return { id: null, start: 0, end: 0 };
                var meter = new Range;
                meter.selectNodeContents(el);
                meter.setEnd(range.startContainer, range.startOffset);
                var startOffset = meter.toString().length;
                meter.setEnd(range.endContainer, range.endOffset);
                var endOffset = meter.toString().length;
                return { id: el.id, start: startOffset, end: endOffset };
            }
        }
        static onFocus(event) {
            const parents = [];
            let element = event.target;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            this.focused(parents, $.$mol_atom_force_cache);
        }
        static onBlur(event) {
            const focused = this.focused();
            setTimeout($.$mol_log_group('$mol_view_selection blur', () => {
                if (focused !== this.focused())
                    return;
                this.focused([], $.$mol_atom_force_cache);
            }));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "position", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        $.$mol_dom_context.document.addEventListener('selectionchange', event => {
            $.$mol_view_selection.position(undefined, $.$mol_atom_force_cache);
        });
        $.$mol_dom_context.document.addEventListener('focus', $.$mol_log_group('$mol_view_selection focus', (event) => $.$mol_view_selection.onFocus(event)), true);
        $.$mol_dom_context.document.addEventListener('blur', (event) => $.$mol_view_selection.onBlur(event), true);
    }
})($ || ($ = {}));
//selection.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_object {
        dom_node() {
            return null;
        }
        attr_static() {
            return ({});
        }
        event() {
            return ({});
        }
        event_async() {
            return ({});
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plugin extends $.$mol_plugin {
            dom_node() {
                const node = this.object_host().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            render() {
                return this.dom_node();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plugin.prototype, "dom_node", null);
        $$.$mol_plugin = $mol_plugin;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//plugin.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision, next, force) {
            const atom = $.$mol_atom_current();
            const handler = () => {
                atom['value()'] = Date.now();
                atom.obsolete_slaves();
                if (precision > 0) {
                    setTimeout(handler, precision);
                }
                else {
                    requestAnimationFrame(handler);
                }
            };
            handler();
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        zoom() {
            return 1;
        }
        width(val, force) {
            return (val !== void 0) ? val : 0;
        }
        height(val, force) {
            return (val !== void 0) ? val : 0;
        }
        left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        top(val, force) {
            return (val !== void 0) ? val : 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                if (node !== $.$mol_dom_context.document.body) {
                    $.$mol_state_time.now();
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: window.devicePixelRatio || 1 };
                    }
                    catch (error) {
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: window.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        start_pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event) }));
        }
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_async() {
            return ({
                "wheel": (event) => this.event_wheel(event),
            });
        }
        event_wheel(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        const pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = Math.pow((Math.pow((event.touches[1].pageX - event.touches[0].pageX), 2) + Math.pow((event.touches[1].pageY - event.touches[0].pageY), 2)), .5);
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
                else if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        const pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1)
                        pos = [event.pageX, event.pageY];
                    else
                        this.start_pos(null);
                }
                if (event instanceof TouchEvent) {
                    if (event.touches.length === 1)
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                    else
                        this.start_pos(null);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    const precision = this.swipe_precision();
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (event instanceof TouchEvent && event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = Math.pow((Math.pow((pos1[0] - pos0[0]), 2) + Math.pow((pos1[1] - pos0[1]), 2)), .5);
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.dom_node().getBoundingClientRect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.dom_node().getBoundingClientRect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
            }
            swipe_top(event) {
                if (this.dom_node().getBoundingClientRect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.dom_node().getBoundingClientRect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                const zoom_prev = this.zoom();
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.layerX, event.layerY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        moving_hor(val, force) {
            return (val !== void 0) ? val : false;
        }
        moving_vert(val, force) {
            return (val !== void 0) ? val : false;
        }
        field() {
            return (Object.assign({}, super.field(), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left(), "scrollBottom": this.scroll_bottom(), "scrollRight": this.scroll_right() }));
        }
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        event_async() {
            return (Object.assign({}, super.event_async(), { "scroll": (event) => this.event_scroll(event) }));
        }
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
        Strut() {
            return ((obj) => {
                obj.style = () => ({
                    "transform": this.strut_transform(),
                });
                return obj;
            })(new this.$.$mol_view);
        }
        strut_transform() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_hor", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_vert", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "Strut", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $mol_scroll_top() {
            return 0;
        }
        $$.$mol_scroll_top = $mol_scroll_top;
        function $mol_scroll_left() {
            return 0;
        }
        $$.$mol_scroll_left = $mol_scroll_left;
        function $mol_scroll_moving() {
            return false;
        }
        $$.$mol_scroll_moving = $mol_scroll_moving;
        function $mol_scroll_moving_vert() {
            return false;
        }
        $$.$mol_scroll_moving_vert = $mol_scroll_moving_vert;
        function $mol_scroll_moving_hor() {
            return false;
        }
        $$.$mol_scroll_moving_hor = $mol_scroll_moving_hor;
        class $mol_scroll extends $.$mol_scroll {
            constructor() {
                super(...arguments);
                this._moving_task_timer = null;
            }
            scroll_bottom(next) {
                return next || 0;
            }
            scroll_right(next) {
                return next || 0;
            }
            event_scroll(next) {
                this.moving_vert(this.scroll_top() !== this.dom_node().scrollTop);
                this.moving_hor(this.scroll_left() !== this.dom_node().scrollLeft);
                this.moving_task_stop();
                new $.$mol_defer($.$mol_log_group(`${this}.event_scroll()`, () => {
                    const el = this.dom_node();
                    const top = Math.max(0, el.scrollTop);
                    const left = Math.max(0, el.scrollLeft);
                    this.scroll_top(top);
                    this.scroll_left(left);
                    this.scroll_bottom(Math.max(0, el.scrollHeight - top - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - left - el.offsetWidth));
                }));
            }
            event_repos(next) {
                new $.$mol_defer(() => {
                    const el = this.dom_node();
                    this.scroll_bottom(Math.max(0, el.scrollHeight - this.scroll_top() - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - this.scroll_left() - el.offsetWidth));
                });
            }
            moving_task_stop() {
                clearTimeout(this._moving_task_timer);
                this._moving_task_timer = setTimeout($.$mol_log_group(`${this}.moving_task_stop()`, () => {
                    this.moving_vert(false);
                    this.moving_hor(false);
                }), 50);
            }
            moving() {
                return this.moving_hor() || this.moving_vert();
            }
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_height();
                        return this.scroll_top() + Math.min(sizeWin.height, limit);
                    },
                    $mol_view_visible_width: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_width();
                        return this.scroll_left() + Math.min(sizeWin.width, limit);
                    },
                    $mol_scroll_top: () => this.scroll_top(),
                    $mol_scroll_left: () => this.scroll_left(),
                    $mol_scroll_moving: () => this.moving(),
                    $mol_scroll_moving_vert: () => this.moving_vert(),
                    $mol_scroll_moving_hor: () => this.moving_hor(),
                });
            }
            strut_transform() {
                try {
                    return `translate3d( 0 , ${this.content_height()}px , 0 )`;
                }
                catch (error) {
                    return '';
                }
            }
            sub_visible() {
                const sub = [
                    this.Strut(),
                    ...(this.sub() || []),
                ];
                const context = this.context_sub();
                sub.forEach(child => {
                    if (child instanceof $.$mol_view) {
                        child.$ = context;
                    }
                });
                return sub;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_right", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "context_sub", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            dom_tree() {
                const node = this.Sub().dom_tree();
                super.render();
                return node;
            }
            title() {
                return this.Sub().title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        sub() {
            return this.pages_wrapped();
        }
        pages_wrapped() {
            return [];
        }
        pages() {
            return [];
        }
        plugins() {
            return [].concat(this.Meter(), this.Touch());
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter);
        }
        Touch() {
            return ((obj) => {
                obj.swipe_from_left = (val) => this.event_front_up(val);
                obj.swipe_to_left = (val) => this.event_front_down(val);
                return obj;
            })(new this.$.$mol_touch);
        }
        event_front_up(val, force) {
            return (val !== void 0) ? val : null;
        }
        event_front_down(val, force) {
            return (val !== void 0) ? val : null;
        }
        Page(index) {
            return ((obj) => {
                obj.Sub = () => this.page(index);
                obj.visible = () => this.page_visible(index);
                return obj;
            })(new this.$.$mol_book_page);
        }
        page(index) {
            return null;
        }
        page_visible(index) {
            return true;
        }
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    $.$mol_book = $mol_book;
})($ || ($ = {}));
(function ($) {
    class $mol_book_placeholder extends $.$mol_scroll {
        minimal_width() {
            return 400;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": null }));
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_book_page extends $.$mol_ghost {
        attr() {
            return (Object.assign({}, super.attr(), { "tabindex": 0, "mol_book_page_focused": this.focused(), "mol_book_page_visible": this.visible() }));
        }
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder()].concat(this.pages());
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => {
        $.$mol_state_local.value(event.key, void 0, $.$mol_atom_force_cache);
    });
})($ || ($ = {}));
//local.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_http extends $.$mol_object {
        static resource(uri) {
            const resolver = $.$mol_dom_context.document.createElement('a');
            resolver.href = uri;
            return this.resource_absolute(resolver.href);
        }
        static resource_absolute(uri) {
            return $mol_http.make({
                uri: $.$mol_const(uri)
            });
        }
        uri() { return ''; }
        method_get() { return 'Get'; }
        method_put() { return 'Put'; }
        credentials() {
            return null;
        }
        headers() {
            return {};
        }
        response_type() {
            return '';
        }
        request() {
            if (this['request()'])
                return this['request()'];
            var next = this['request()'] = new $.$mol_dom_context.XMLHttpRequest;
            next.withCredentials = Boolean(this.credentials());
            next.onload = $.$mol_log_group(this.object_id() + ' load', (event) => {
                if ((next.status === 0) || (Math.floor(next.status / 100) === 2)) {
                    this.response(next, $.$mol_atom_force_cache);
                }
                else {
                    this.response(new Error(next.statusText || next.responseText || `HTTP error ${next.status}`), $.$mol_atom_force_cache);
                }
            });
            next.onerror = $.$mol_log_group(this.object_id() + ' error', (event) => {
                const right_event = event;
                new $.$mol_defer(() => {
                    this.response(right_event.error || new Error('Unknown HTTP error'), $.$mol_atom_force_cache);
                });
            });
            return next;
        }
        destructor() {
            const native = this['request()'];
            if (native)
                native.abort();
        }
        response(next, force) {
            const creds = this.credentials();
            const native = this.request();
            const method = (next === void 0) ? this.method_get() : this.method_put();
            const uri = this.uri();
            native.open(method, uri, true, creds && creds.login, creds && creds.password);
            native.responseType = this.response_type();
            const headers = this.headers();
            for (let name in headers)
                native.setRequestHeader(name, headers[name]);
            native.send(...$.$mol_maybe(next));
            return $.$mol_fail_hidden(new $.$mol_atom_wait(`${method} ${uri}`));
        }
        text(next, force) {
            return this.response(next, force).responseText;
        }
        xml(next, force) {
            return this.response(next, force).responseXML;
        }
        json(next, force) {
            const next2 = next && JSON.stringify(next, null, '\t');
            return JSON.parse(this.text(next2, force));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "response", null);
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_http, "resource_absolute", null);
    $.$mol_http = $mol_http;
})($ || ($ = {}));
//http.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return function (host, field, descr) {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper() {
                console.warn(`${host.constructor}::${field} is deprecated. ${message}`);
                return value.apply(this, arguments);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_http_resource extends $.$mol_http {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource, "item", null);
    $.$mol_http_resource = $mol_http_resource;
    class $mol_http_resource_json {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource_json, "item", null);
    $.$mol_http_resource_json = $mol_http_resource_json;
})($ || ($ = {}));
//resource.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            return $mol_file.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            var match = /((?:\.\w+)+)$/.exec(this.path());
            return match && match[1].substring(1);
        }
        content(next, force) {
            return $.$mol_http.resource(this.path()).text(next);
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('Not implemented yet');
        }
    }
    $mol_file.base = $.$mol_dom_context.document
        ? new URL('.', $.$mol_dom_context.document.currentScript['src']).toString()
        : '';
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof $.$mol_atom_wait)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_merge_dict(target, source) {
        let result = {};
        for (let key in target)
            result[key] = target[key];
        for (let key in source)
            result[key] = source[key];
        return result;
    }
    $.$mol_merge_dict = $mol_merge_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next, force) {
            if (next)
                history.replaceState(history.state, $.$mol_dom_context.document.title, next);
            return window.location.href;
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#/)[1] || '';
            var chunks = href.split(/[\/\?#&;]/g);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : $.$mol_merge_dict(this.dict(), { [key]: next });
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link($.$mol_merge_dict(this.dict_cut(Object.keys(next)), next));
        }
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key] ? next[key] : []).map(this.encode).join('='));
            }
            return new URL('#' + chunks.join('/'), window.location.href).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
    self.addEventListener('hashchange', $.$mol_log_group('$mol_state_arg hashchange', (event) => {
        $mol_state_arg.href(undefined, $.$mol_atom_force_cache);
    }));
})($ || ($ = {}));
//arg.web.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        sub() {
            return [].concat(this.title());
        }
        arg() {
            return ({});
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.click(event) }));
        }
        click(event, force) {
            return this.event_click(event);
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new $.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                return this.uri() === $.$mol_state_arg.href();
            }
            event_click(event) {
                setTimeout($.$mol_log_group(`${this}.event_click()`, () => this.focused(false)), 50);
            }
            file_name() {
                return null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        sub() {
            return [].concat(this.Path());
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path);
        }
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_folder extends $.$mol_icon {
        path() {
            return "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";
        }
    }
    $.$mol_icon_folder = $mol_icon_folder;
})($ || ($ = {}));
//folder.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_file extends $.$mol_icon {
        path() {
            return "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z";
        }
    }
    $.$mol_icon_file = $mol_icon_file;
})($ || ($ = {}));
//file.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
//code.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign({}, super.event(), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        sub() {
            return [].concat(this.title());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === 13) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : null;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [].concat(this.Head(), this.Body(), this.Foot());
        }
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view);
        }
        head() {
            return [].concat(this.Title(), this.Tools());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button);
        }
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view);
        }
        tools() {
            return [];
        }
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll);
        }
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        body() {
            return [];
        }
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view);
        }
        foot() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        sub() {
            return this.rows();
        }
        rows() {
            return [];
        }
        Empty() {
            return null;
        }
    }
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            row_offsets() {
                var sub = this.sub();
                if (!sub)
                    return null;
                let heightLimit = this.$.$mol_view_visible_height();
                var offset = 0;
                var next = [];
                for (let child of sub) {
                    next.push(offset);
                    if (child instanceof $.$mol_view) {
                        offset += child.minimal_height();
                    }
                    if (offset > heightLimit)
                        break;
                }
                return next;
            }
            row_context(index) {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => this.$.$mol_view_visible_height() - this.row_offsets()[index],
                });
            }
            sub_visible() {
                var sub = this.sub();
                if (!sub)
                    return sub;
                var limit = this.row_offsets().length;
                var next = [];
                for (let i = 0; i < limit; ++i) {
                    const child = sub[i];
                    if (child == null)
                        continue;
                    if (child instanceof $.$mol_view) {
                        child.$ = this.row_context(i);
                    }
                    next.push(child);
                }
                return next;
            }
            minimal_height() {
                var height = 0;
                var sub = this.sub();
                if (sub)
                    sub.forEach(child => {
                        if (child instanceof $.$mol_view) {
                            height += child.minimal_height();
                        }
                    });
                return height;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "row_offsets", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list.prototype, "row_context", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return (Object.assign({}, super.attr(), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [].concat(this.Icon(), this.label());
        }
        Icon() {
            return null;
        }
        label() {
            return [].concat(this.Title());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_view);
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 32;
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron);
        }
        level() {
            return 0;
        }
        style() {
            return (Object.assign({}, super.style(), { "paddingLeft": this.level_style() }));
        }
        level_style() {
            return "0px";
        }
        checked(val, force) {
            return this.expanded(val);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        enabled() {
            return this.expandable();
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        parts() {
            return [];
        }
        Low(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.string(id));
                return obj;
            })(new this.$.$mol_view);
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return ({});
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [].concat(this.Table());
        }
        Table() {
            return ((obj) => {
                obj.offset = () => this.gap_top();
                obj.sub = () => [].concat(this.rows_visible());
                return obj;
            })(new this.$.$mol_grid_table);
        }
        gap_top() {
            return 0;
        }
        rows_visible() {
            return [];
        }
        rows() {
            return [];
        }
        Head() {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row);
        }
        row_height() {
            return 40;
        }
        head_cells() {
            return [];
        }
        Row(id) {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row);
        }
        cells(id) {
            return [];
        }
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view);
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_text(id));
                return obj;
            })(new this.$.$mol_grid_cell);
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content(id) {
            return [];
        }
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_number(id));
                return obj;
            })(new this.$.$mol_grid_number);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => [].concat(this.col_head_content(id));
                return obj;
            })(new this.$.$mol_float);
        }
        col_head_content(id) {
            return [];
        }
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand);
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        Cell_content(id) {
            return [].concat(this.Cell_dimmer(id));
        }
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer);
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_view {
        dom_name() {
            return "table";
        }
        style() {
            return (Object.assign({}, super.style(), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_gap extends $.$mol_view {
        style() {
            return (Object.assign({}, super.style(), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_gap = $mol_grid_gap;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        style() {
            return (Object.assign({}, super.style(), { "height": this.height() }));
        }
        height() {
            return 40;
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            rows_visible() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const view_window = this.view_window();
                return [].concat(this.Head(), rows.slice(view_window.top, view_window.bottom).valueOf());
            }
            rows_visible_max() {
                return Math.ceil(this.$.$mol_view_visible_height() / this.row_height());
            }
            view_window() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const count = rows.length;
                const context = this.context_sub();
                const scrollTop = context.$mol_scroll_top();
                const top = Math.max(0, Math.floor(scrollTop / this.row_height()) - 1);
                const bottom = Math.min(count, top + this.rows_visible_max());
                return { top, bottom, count };
            }
            gap_top() {
                const view_window = this.view_window();
                return view_window.top * this.row_height();
            }
            height() {
                const view_window = this.view_window();
                return view_window.count * this.row_height();
            }
            content_height() {
                return this.rows().length * this.row_height();
            }
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
        class $mol_grid_table extends $.$mol_grid_table {
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_scroll_top: () => this.$.$mol_scroll_top() - this.offset(),
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid_table.prototype, "context_sub", null);
        $$.$mol_grid_table = $mol_grid_table;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:)/,
        'code-global': /[$]\w*/,
        'code-decorator': /@.*?$/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text);
        }
        quote_text(id) {
            return "";
        }
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row);
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span);
        }
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link);
        }
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image);
        }
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header);
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid);
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row);
        }
        table_cells(id) {
            return [];
        }
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell);
        }
        table_cell_content(id) {
            return [];
        }
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type() }));
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        dom_name() {
            return "h";
        }
        minimal_height() {
            return 50;
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_header_level": this.level() }));
        }
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        sub() {
            return this.content();
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_view {
        dom_name() {
            return "span";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type(), "href": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "mol_text_type": this.type(), "data": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [].concat(this.title());
        }
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return $.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return $.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^#|(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return $.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_embed extends $.$mol_ghost {
        Pdf() {
            return ((obj) => {
                obj.uri = () => this.uri();
                return obj;
            })(new this.$.$mol_embed_pdf);
        }
        uri() {
            return "";
        }
        Native() {
            return ((obj) => {
                obj.uri = () => this.uri();
                obj.mime = () => this.mime();
                return obj;
            })(new this.$.$mol_embed_native);
        }
        mime() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed.prototype, "Pdf", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed.prototype, "Native", null);
    $.$mol_embed = $mol_embed;
})($ || ($ = {}));
//embed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed extends $.$mol_embed {
            Sub() {
                if (this.mime() === 'application/pdf') {
                    return this.Pdf();
                }
                return this.Native();
            }
        }
        $$.$mol_embed = $mol_embed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//embed.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_embed_native extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign({}, super.attr(), { "data": this.uri(), "type": this.mime() }));
        }
        uri() {
            return "";
        }
        mime() {
            return "";
        }
        sub() {
            return [].concat(this.Open());
        }
        Open() {
            return ((obj) => {
                obj.uri = () => this.uri();
                obj.sub = () => [].concat(this.Open_button());
                return obj;
            })(new this.$.$mol_link);
        }
        Open_button() {
            return ((obj) => {
                obj.title = () => this.open_label();
                return obj;
            })(new this.$.$mol_button_major);
        }
        open_label() {
            return this.$.$mol_locale.text("$mol_embed_native_open_label");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_native.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed_native.prototype, "Open_button", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//native.view.tree.js.map
;
"use strict";
var $node = {};
//node.web.js.map
;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "pdfjs-dist/build/" ) + ".js" ] }; 

;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=t():e["pdfjs-dist/build/pdf"]=e.pdfjsDistBuildPdf=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=75)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unreachable=t.warn=t.utf8StringToString=t.stringToUTF8String=t.stringToPDFString=t.stringToBytes=t.string32=t.shadow=t.setVerbosityLevel=t.ReadableStream=t.removeNullCharacters=t.readUint32=t.readUint16=t.readInt8=t.log2=t.loadJpegStream=t.isEvalSupported=t.isLittleEndian=t.createValidAbsoluteUrl=t.isSameOrigin=t.isNodeJS=t.isSpace=t.isString=t.isNum=t.isEmptyObj=t.isBool=t.isArrayBuffer=t.info=t.getVerbosityLevel=t.getLookupTableFactory=t.deprecated=t.createObjectURL=t.createPromiseCapability=t.createBlob=t.bytesToString=t.assert=t.arraysToBytes=t.arrayByteLength=t.FormatError=t.XRefParseException=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.StatTimer=t.PasswordResponses=t.PasswordException=t.PageViewport=t.NotImplementedException=t.NativeImageDecoding=t.MissingPDFException=t.MissingDataException=t.MessageHandler=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VERBOSITY_LEVELS=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r(76);var i=r(116),a={errors:0,warnings:1,infos:5},o=a.warnings;function s(e){o>=a.warnings&&console.log("Warning: "+e)}function l(e){throw new Error(e)}function u(e,t){e||l(t)}var c=function(){function e(e,t){this.name="PasswordException",this.message=e,this.code=t}return e.prototype=new Error,e.constructor=e,e}(),h=function(){function e(e,t){this.name="UnknownErrorException",this.message=e,this.details=t}return e.prototype=new Error,e.constructor=e,e}(),d=function(){function e(e){this.name="InvalidPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),f=function(){function e(e){this.name="MissingPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),p=function(){function e(e,t){this.name="UnexpectedResponseException",this.message=e,this.status=t}return e.prototype=new Error,e.constructor=e,e}(),m=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="NotImplementedException",e.constructor=e,e}(),v=function(){function e(e,t){this.begin=e,this.end=t,this.message="Missing data ["+e+", "+t+")"}return e.prototype=new Error,e.prototype.name="MissingDataException",e.constructor=e,e}(),g=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="XRefParseException",e.constructor=e,e}(),b=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="FormatError",e.constructor=e,e}(),y=function(){function e(e){this.name="AbortException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),_=/\x00/g;function A(e){u("string"==typeof e,"Invalid argument for stringToBytes");for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n);return r}function S(e){return void 0!==e.length?e.length:(u(void 0!==e.byteLength),e.byteLength)}var w=function(){function e(){}var t=["rgb(",0,",",0,",",0,")"];e.makeCssRgb=function(e,r,n){return t[1]=e,t[3]=r,t[5]=n,t.join("")},e.transform=function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]},e.applyTransform=function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]},e.applyInverseTransform=function(e,t){var r=t[0]*t[3]-t[1]*t[2];return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]},e.getAxialAlignedBoundingBox=function(t,r){var n=e.applyTransform(t,r),i=e.applyTransform(t.slice(2,4),r),a=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r);return[Math.min(n[0],i[0],a[0],o[0]),Math.min(n[1],i[1],a[1],o[1]),Math.max(n[0],i[0],a[0],o[0]),Math.max(n[1],i[1],a[1],o[1])]},e.inverseTransform=function(e){var t=e[0]*e[3]-e[1]*e[2];return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]},e.apply3dTransform=function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]},e.singularValueDecompose2dScale=function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],a=e[2]*t[1]+e[3]*t[3],o=(r+a)/2,s=Math.sqrt((r+a)*(r+a)-4*(r*a-i*n))/2,l=o+s||1,u=o-s||1;return[Math.sqrt(l),Math.sqrt(u)]},e.normalizeRect=function(e){var t=e.slice(0);return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t},e.intersect=function(t,r){function n(e,t){return e-t}var i=[t[0],t[2],r[0],r[2]].sort(n),a=[t[1],t[3],r[1],r[3]].sort(n),o=[];return t=e.normalizeRect(t),r=e.normalizeRect(r),(i[0]===t[0]&&i[1]===r[0]||i[0]===r[0]&&i[1]===t[0])&&(o[0]=i[1],o[2]=i[2],(a[0]===t[1]&&a[1]===r[1]||a[0]===r[1]&&a[1]===t[1])&&(o[1]=a[1],o[3]=a[2],o))};var r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];return e.toRoman=function(e,t){u(Number.isInteger(e)&&e>0,"The number should be a positive integer.");for(var n,i=[];e>=1e3;)e-=1e3,i.push("M");n=e/100|0,e%=100,i.push(r[n]),n=e/10|0,e%=10,i.push(r[10+n]),i.push(r[20+e]);var a=i.join("");return t?a.toLowerCase():a},e.appendToArray=function(e,t){Array.prototype.push.apply(e,t)},e.prependToArray=function(e,t){Array.prototype.unshift.apply(e,t)},e.extendObj=function(e,t){for(var r in t)e[r]=t[r]},e.getInheritableProperty=function(e,t,r){for(;e&&!e.has(t);)e=e.get("Parent");return e?r?e.getArray(t):e.get(t):null},e.inherit=function(e,t,r){for(var n in e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r)e.prototype[n]=r[n]},e.loadScript=function(e,t){var r=document.createElement("script"),n=!1;r.setAttribute("src",e),t&&(r.onload=function(){n||t(),n=!0}),document.getElementsByTagName("head")[0].appendChild(r)},e}(),P=function(){function e(e,t,r,n,i,a){this.viewBox=e,this.scale=t,this.rotation=r,this.offsetX=n,this.offsetY=i;var o,s,l,u,c,h,d,f,p=(e[2]+e[0])/2,m=(e[3]+e[1])/2;switch(r=(r%=360)<0?r+360:r){case 180:o=-1,s=0,l=0,u=1;break;case 90:o=0,s=1,l=1,u=0;break;case 270:o=0,s=-1,l=-1,u=0;break;default:o=1,s=0,l=0,u=-1}a&&(l=-l,u=-u),0===o?(c=Math.abs(m-e[1])*t+n,h=Math.abs(p-e[0])*t+i,d=Math.abs(e[3]-e[1])*t,f=Math.abs(e[2]-e[0])*t):(c=Math.abs(p-e[0])*t+n,h=Math.abs(m-e[1])*t+i,d=Math.abs(e[2]-e[0])*t,f=Math.abs(e[3]-e[1])*t),this.transform=[o*t,s*t,l*t,u*t,c-o*t*p-l*t*m,h-s*t*p-u*t*m],this.width=d,this.height=f,this.fontScale=t}return e.prototype={clone:function(t){var r="scale"in(t=t||{})?t.scale:this.scale,n="rotation"in t?t.rotation:this.rotation;return new e(this.viewBox.slice(),r,n,this.offsetX,this.offsetY,t.dontFlip)},convertToViewportPoint:function(e,t){return w.applyTransform([e,t],this.transform)},convertToViewportRectangle:function(e){var t=w.applyTransform([e[0],e[1]],this.transform),r=w.applyTransform([e[2],e[3]],this.transform);return[t[0],t[1],r[0],r[1]]},convertToPdfPoint:function(e,t){return w.applyInverseTransform([e,t],this.transform)}},e}(),k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364];function C(){var e={};return e.promise=new Promise(function(t,r){e.resolve=t,e.reject=r}),e}var R,x=function(){function e(e,t,r){for(;e.length<r;)e+=t;return e}function t(){this.started=Object.create(null),this.times=[],this.enabled=!0}return t.prototype={time:function(e){this.enabled&&(e in this.started&&s("Timer is already running for "+e),this.started[e]=Date.now())},timeEnd:function(e){this.enabled&&(e in this.started||s("Timer has not been started for "+e),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e])},toString:function(){var t,r,n=this.times,i="",a=0;for(t=0,r=n.length;t<r;++t){var o=n[t].name;o.length>a&&(a=o.length)}for(t=0,r=n.length;t<r;++t){var s=n[t],l=s.end-s.start;i+=e(s.name," ",a)+" "+l+"ms\n"}return i}},t}(),T=function(e,t){if("undefined"!=typeof Blob)return new Blob([e],{type:t});throw new Error('The "Blob" constructor is not supported.')},E=(R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&URL.createObjectURL){var r=T(e,t);return URL.createObjectURL(r)}for(var n="data:"+t+";base64,",i=0,a=e.length;i<a;i+=3){var o=255&e[i],s=255&e[i+1],l=255&e[i+2];n+=R[o>>2]+R[(3&o)<<4|s>>4]+R[i+1<a?(15&s)<<2|l>>6:64]+R[i+2<a?63&l:64]}return n});function O(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?new Promise(function(n,i){n(e.apply(r,t))}):Promise.resolve(void 0)}function L(e){if("object"!==(void 0===e?"undefined":n(e)))return e;switch(e.name){case"AbortException":return new y(e.message);case"MissingPDFException":return new f(e.message);case"UnexpectedResponseException":return new p(e.message,e.status);default:return new h(e.message,e.details)}}function I(e,t,r){t?e.resolve():e.reject(r)}function F(e,t,r){var n=this;this.sourceName=e,this.targetName=t,this.comObj=r,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null);var i=this.callbacksCapabilities=Object.create(null),a=this.actionHandler=Object.create(null);this._onComObjOnMessage=function(e){var t=e.data;if(t.targetName===n.sourceName)if(t.stream)n._processStreamMessage(t);else if(t.isReply){var o=t.callbackId;if(!(t.callbackId in i))throw new Error("Cannot resolve callback "+o);var s=i[o];delete i[o],"error"in t?s.reject(L(t.error)):s.resolve(t.data)}else{if(!(t.action in a))throw new Error("Unknown action from worker: "+t.action);var l=a[t.action];if(t.callbackId){var u=n.sourceName,c=t.sourceName;Promise.resolve().then(function(){return l[0].call(l[1],t.data)}).then(function(e){r.postMessage({sourceName:u,targetName:c,isReply:!0,callbackId:t.callbackId,data:e})},function(e){r.postMessage({sourceName:u,targetName:c,isReply:!0,callbackId:t.callbackId,error:function(e){return!(e instanceof Error)||e instanceof y||e instanceof f||e instanceof p||e instanceof h?e:new h(e.message,e.toString())}(e)})})}else t.streamId?n._createStreamSink(t):l[0].call(l[1],t.data)}},r.addEventListener("message",this._onComObjOnMessage)}F.prototype={on:function(e,t,r){var n=this.actionHandler;if(n[e])throw new Error('There is already an actionName called "'+e+'"');n[e]=[t,r]},send:function(e,t,r){var n={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t};this.postMessage(n,r)},sendWithPromise:function(e,t,r){var n=this.callbackId++,i={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t,callbackId:n},a=C();this.callbacksCapabilities[n]=a;try{this.postMessage(i,r)}catch(e){a.reject(e)}return a.promise},sendWithStream:function(e,t,r,n){var a=this,o=this.streamId++,s=this.sourceName,l=this.targetName;return new i.ReadableStream({start:function(r){var n=C();return a.streamControllers[o]={controller:r,startCall:n,isClosed:!1},a.postMessage({sourceName:s,targetName:l,action:e,streamId:o,data:t,desiredSize:r.desiredSize}),n.promise},pull:function(e){var t=C();return a.streamControllers[o].pullCall=t,a.postMessage({sourceName:s,targetName:l,stream:"pull",streamId:o,desiredSize:e.desiredSize}),t.promise},cancel:function(e){var t=C();return a.streamControllers[o].cancelCall=t,a.streamControllers[o].isClosed=!0,a.postMessage({sourceName:s,targetName:l,stream:"cancel",reason:e,streamId:o}),t.promise}},r)},_createStreamSink:function(e){var t=this,r=this,n=this.actionHandler[e.action],i=e.streamId,a=e.desiredSize,o=this.sourceName,s=e.sourceName,l=function(e){var r=e.stream,n=e.chunk,a=e.transfers,l=e.success,u=e.reason;t.postMessage({sourceName:o,targetName:s,stream:r,streamId:i,chunk:n,success:l,reason:u},a)},u={enqueue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments[2];if(!this.isCancelled){var n=this.desiredSize;this.desiredSize-=t,n>0&&this.desiredSize<=0&&(this.sinkCapability=C(),this.ready=this.sinkCapability.promise),l({stream:"enqueue",chunk:e,transfers:r})}},close:function(){this.isCancelled||(this.isCancelled=!0,l({stream:"close"}),delete r.streamSinks[i])},error:function(e){this.isCancelled||(this.isCancelled=!0,l({stream:"error",reason:e}))},sinkCapability:C(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:a,ready:null};u.sinkCapability.resolve(),u.ready=u.sinkCapability.promise,this.streamSinks[i]=u,O(n[0],[e.data,u],n[1]).then(function(){l({stream:"start_complete",success:!0})},function(e){l({stream:"start_complete",success:!1,reason:e})})},_processStreamMessage:function(e){var t=this,r=this.sourceName,n=e.sourceName,i=e.streamId,a=function(e){var a=e.stream,o=e.success,s=e.reason;t.comObj.postMessage({sourceName:r,targetName:n,stream:a,success:o,streamId:i,reason:s})},o=function(){Promise.all([t.streamControllers[e.streamId].startCall,t.streamControllers[e.streamId].pullCall,t.streamControllers[e.streamId].cancelCall].map(function(e){return e&&(t=e.promise,Promise.resolve(t).catch(function(){}));var t})).then(function(){delete t.streamControllers[e.streamId]})};switch(e.stream){case"start_complete":I(this.streamControllers[e.streamId].startCall,e.success,L(e.reason));break;case"pull_complete":I(this.streamControllers[e.streamId].pullCall,e.success,L(e.reason));break;case"pull":if(!this.streamSinks[e.streamId]){a({stream:"pull_complete",success:!0});break}this.streamSinks[e.streamId].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[e.streamId].sinkCapability.resolve(),this.streamSinks[e.streamId].desiredSize=e.desiredSize,O(this.streamSinks[e.streamId].onPull).then(function(){a({stream:"pull_complete",success:!0})},function(e){a({stream:"pull_complete",success:!1,reason:e})});break;case"enqueue":u(this.streamControllers[e.streamId],"enqueue should have stream controller"),this.streamControllers[e.streamId].isClosed||this.streamControllers[e.streamId].controller.enqueue(e.chunk);break;case"close":if(u(this.streamControllers[e.streamId],"close should have stream controller"),this.streamControllers[e.streamId].isClosed)break;this.streamControllers[e.streamId].isClosed=!0,this.streamControllers[e.streamId].controller.close(),o();break;case"error":u(this.streamControllers[e.streamId],"error should have stream controller"),this.streamControllers[e.streamId].controller.error(L(e.reason)),o();break;case"cancel_complete":I(this.streamControllers[e.streamId].cancelCall,e.success,L(e.reason)),o();break;case"cancel":if(!this.streamSinks[e.streamId])break;O(this.streamSinks[e.streamId].onCancel,[L(e.reason)]).then(function(){a({stream:"cancel_complete",success:!0})},function(e){a({stream:"cancel_complete",success:!1,reason:e})}),this.streamSinks[e.streamId].sinkCapability.reject(L(e.reason)),this.streamSinks[e.streamId].isCancelled=!0,delete this.streamSinks[e.streamId];break;default:throw new Error("Unexpected stream case")}},postMessage:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0],t.IDENTITY_MATRIX=[1,0,0,1,0,0],t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91},t.VERBOSITY_LEVELS=a,t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"},t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864},t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512},t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},t.FontType={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10},t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2},t.AbortException=y,t.InvalidPDFException=d,t.MessageHandler=F,t.MissingDataException=v,t.MissingPDFException=f,t.NativeImageDecoding={NONE:"none",DECODE:"decode",DISPLAY:"display"},t.NotImplementedException=m,t.PageViewport=P,t.PasswordException=c,t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},t.StatTimer=x,t.StreamType={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9},t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},t.UnexpectedResponseException=p,t.UnknownErrorException=h,t.Util=w,t.XRefParseException=g,t.FormatError=b,t.arrayByteLength=S,t.arraysToBytes=function(e){if(1===e.length&&e[0]instanceof Uint8Array)return e[0];var t,r,n,i=0,a=e.length;for(t=0;t<a;t++)i+=n=S(r=e[t]);var o=0,s=new Uint8Array(i);for(t=0;t<a;t++)(r=e[t])instanceof Uint8Array||(r="string"==typeof r?A(r):new Uint8Array(r)),n=r.byteLength,s.set(r,o),o+=n;return s},t.assert=u,t.bytesToString=function(e){u(null!==e&&"object"===(void 0===e?"undefined":n(e))&&void 0!==e.length,"Invalid argument for bytesToString");var t=e.length;if(t<8192)return String.fromCharCode.apply(null,e);for(var r=[],i=0;i<t;i+=8192){var a=Math.min(i+8192,t),o=e.subarray(i,a);r.push(String.fromCharCode.apply(null,o))}return r.join("")},t.createBlob=T,t.createPromiseCapability=C,t.createObjectURL=E,t.deprecated=function(e){console.log("Deprecated API usage: "+e)},t.getLookupTableFactory=function(e){var t;return function(){return e&&(t=Object.create(null),e(t),e=null),t}},t.getVerbosityLevel=function(){return o},t.info=function(e){o>=a.infos&&console.log("Info: "+e)},t.isArrayBuffer=function(e){return"object"===(void 0===e?"undefined":n(e))&&null!==e&&void 0!==e.byteLength},t.isBool=function(e){return"boolean"==typeof e},t.isEmptyObj=function(e){for(var t in e)return!1;return!0},t.isNum=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSpace=function(e){return 32===e||9===e||13===e||10===e},t.isNodeJS=function(){return"object"===("undefined"==typeof process?"undefined":n(process))&&process+""=="[object process]"},t.isSameOrigin=function(e,t){try{var r=new URL(e);if(!r.origin||"null"===r.origin)return!1}catch(e){return!1}var n=new URL(t,r);return r.origin===n.origin},t.createValidAbsoluteUrl=function(e,t){if(!e)return null;try{var r=t?new URL(e,t):new URL(e);if(function(e){if(!e)return!1;switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0;default:return!1}}(r))return r}catch(e){}return null},t.isLittleEndian=function(){var e=new Uint8Array(4);return e[0]=1,1===new Uint32Array(e.buffer,0,1)[0]},t.isEvalSupported=function(){try{return new Function(""),!0}catch(e){return!1}},t.loadJpegStream=function(e,t,r){var n=new Image;n.onload=function(){r.resolve(e,n)},n.onerror=function(){r.resolve(e,null),s("Error during JPEG image loading")},n.src=t},t.log2=function(e){for(var t=1,r=0;e>t;)t<<=1,r++;return r},t.readInt8=function(e,t){return e[t]<<24>>24},t.readUint16=function(e,t){return e[t]<<8|e[t+1]},t.readUint32=function(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0},t.removeNullCharacters=function(e){return"string"!=typeof e?(s("The argument for removeNullCharacters must be a string."),e):e.replace(_,"")},t.ReadableStream=i.ReadableStream,t.setVerbosityLevel=function(e){o=e},t.shadow=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r},t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=A,t.stringToPDFString=function(e){var t,r=e.length,n=[];if("þ"===e[0]&&"ÿ"===e[1])for(t=2;t<r;t+=2)n.push(String.fromCharCode(e.charCodeAt(t)<<8|e.charCodeAt(t+1)));else for(t=0;t<r;++t){var i=k[e.charCodeAt(t)];n.push(i?String.fromCharCode(i):e.charAt(t))}return n.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))},t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=s,t.unreachable=l},function(e,t,r){"use strict";var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){return"object"===(void 0===e?"undefined":n(e))?null!==e:"function"==typeof e}},function(e,t,r){"use strict";var n=r(51)("wks"),i=r(16),a=r(1).Symbol,o="function"==typeof a;(e.exports=function(e){return n[e]||(n[e]=o&&a[e]||(o?a:i)("Symbol."+e))}).store=n},function(e,t,r){"use strict";var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,r){"use strict";var n=r(1),i=r(4),a=r(6),o=r(14),s=r(11),l=function e(t,r,l){var u,c,h,d,f=t&e.F,p=t&e.G,m=t&e.P,v=t&e.B,g=p?n:t&e.S?n[r]||(n[r]={}):(n[r]||{}).prototype,b=p?i:i[r]||(i[r]={}),y=b.prototype||(b.prototype={});for(u in p&&(l=r),l)h=((c=!f&&g&&void 0!==g[u])?g:l)[u],d=v&&c?s(h,n):m&&"function"==typeof h?s(Function.call,h):h,g&&o(g,u,h,t&e.U),b[u]!=h&&a(b,u,d),m&&y[u]!=h&&(y[u]=h)};n.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t,r){"use strict";var n=r(13),i=r(27);e.exports=r(8)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){"use strict";e.exports=!r(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict";e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict";var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,r){"use strict";var n=r(22);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){"use strict";var n=r(17),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t,r){"use strict";var n=r(7),i=r(45),a=r(33),o=Object.defineProperty;t.f=r(8)?Object.defineProperty:function(e,t,r){if(n(e),t=a(t,!0),n(r),i)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){"use strict";var n=r(1),i=r(6),a=r(10),o=r(16)("src"),s=Function.toString,l=(""+s).split("toString");r(4).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,r,s){var u="function"==typeof r;u&&(a(r,"name")||i(r,"name",t)),e[t]!==r&&(u&&(a(r,o)||i(r,o,e[t]?""+e[t]:l.join(String(t)))),e===n?e[t]=r:s?e[t]?e[t]=r:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DOMSVGFactory=t.DOMCMapReaderFactory=t.DOMCanvasFactory=t.DEFAULT_LINK_REL=t.getDefaultSetting=t.LinkTarget=t.getFilenameFromUrl=t.isValidUrl=t.isExternalLinkTargetSet=t.addLinkAttributes=t.RenderingCancelledException=t.CustomStyle=void 0;var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),o=r(20),s=(n=o)&&n.__esModule?n:{default:n};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u="noopener noreferrer nofollow",c="http://www.w3.org/2000/svg",h=function(){function e(){l(this,e)}return i(e,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("invalid canvas size");var r=document.createElement("canvas"),n=r.getContext("2d");return r.width=e,r.height=t,{canvas:r,context:n}}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("canvas is not specified");if(t<=0||r<=0)throw new Error("invalid canvas size");e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("canvas is not specified");e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}}]),e}(),d=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r,i=t.isCompressed,a=void 0!==i&&i;l(this,e),this.baseUrl=n,this.isCompressed=a}return i(e,[{key:"fetch",value:function(e){var t=this,r=e.name;return this.baseUrl?r?new Promise(function(e,n){var i=t.baseUrl+r+(t.isCompressed?".bcmap":""),o=new XMLHttpRequest;o.open("GET",i,!0),t.isCompressed&&(o.responseType="arraybuffer"),o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE){if(200===o.status||0===o.status){var r=void 0;if(t.isCompressed&&o.response?r=new Uint8Array(o.response):!t.isCompressed&&o.responseText&&(r=(0,a.stringToBytes)(o.responseText)),r)return void e({cMapData:r,compressionType:t.isCompressed?a.CMapCompressionType.BINARY:a.CMapCompressionType.NONE})}n(new Error("Unable to load "+(t.isCompressed?"binary ":"")+"CMap at: "+i))}},o.send(null)}):Promise.reject(new Error("CMap name must be specified.")):Promise.reject(new Error('CMap baseUrl must be specified, see "PDFJS.cMapUrl" (and also "PDFJS.cMapPacked").'))}}]),e}(),f=function(){function e(){l(this,e)}return i(e,[{key:"create",value:function(e,t){(0,a.assert)(e>0&&t>0,"Invalid SVG dimensions");var r=document.createElementNS(c,"svg:svg");return r.setAttribute("version","1.1"),r.setAttribute("width",e+"px"),r.setAttribute("height",t+"px"),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox","0 0 "+e+" "+t),r}},{key:"createElement",value:function(e){return(0,a.assert)("string"==typeof e,"Invalid SVG element type"),document.createElementNS(c,e)}}]),e}(),p=function(){var e=["ms","Moz","Webkit","O"],t=Object.create(null);function r(){}return r.getProp=function(r,n){if(1===arguments.length&&"string"==typeof t[r])return t[r];var i,a,o=(n=n||document.documentElement).style;if("string"==typeof o[r])return t[r]=r;a=r.charAt(0).toUpperCase()+r.slice(1);for(var s=0,l=e.length;s<l;s++)if("string"==typeof o[i=e[s]+a])return t[r]=i;return t[r]="undefined"},r.setProp=function(e,t,r){var n=this.getProp(e);"undefined"!==n&&(t.style[n]=r)},r}(),m=function(){function e(e,t){this.message=e,this.type=t}return e.prototype=new Error,e.prototype.name="RenderingCancelledException",e.constructor=e,e}(),v={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4},g=["","_self","_blank","_parent","_top"];function b(e){var t=s.default.PDFJS;switch(e){case"pdfBug":return!!t&&t.pdfBug;case"disableAutoFetch":return!!t&&t.disableAutoFetch;case"disableStream":return!!t&&t.disableStream;case"disableRange":return!!t&&t.disableRange;case"disableFontFace":return!!t&&t.disableFontFace;case"disableCreateObjectURL":return!!t&&t.disableCreateObjectURL;case"disableWebGL":return!t||t.disableWebGL;case"cMapUrl":return t?t.cMapUrl:null;case"cMapPacked":return!!t&&t.cMapPacked;case"postMessageTransfers":return!t||t.postMessageTransfers;case"workerPort":return t?t.workerPort:null;case"workerSrc":return t?t.workerSrc:null;case"disableWorker":return!!t&&t.disableWorker;case"maxImageSize":return t?t.maxImageSize:-1;case"imageResourcesPath":return t?t.imageResourcesPath:"";case"isEvalSupported":return!t||t.isEvalSupported;case"externalLinkTarget":if(!t)return v.NONE;switch(t.externalLinkTarget){case v.NONE:case v.SELF:case v.BLANK:case v.PARENT:case v.TOP:return t.externalLinkTarget}return(0,a.warn)("PDFJS.externalLinkTarget is invalid: "+t.externalLinkTarget),t.externalLinkTarget=v.NONE,v.NONE;case"externalLinkRel":return t?t.externalLinkRel:u;case"enableStats":return!(!t||!t.enableStats);case"pdfjsNext":return!(!t||!t.pdfjsNext);default:throw new Error("Unknown default setting: "+e)}}t.CustomStyle=p,t.RenderingCancelledException=m,t.addLinkAttributes=function(e,t){var r=t&&t.url;if(e.href=e.title=r?(0,a.removeNullCharacters)(r):"",r){var n=t.target;void 0===n&&(n=b("externalLinkTarget")),e.target=g[n];var i=t.rel;void 0===i&&(i=b("externalLinkRel")),e.rel=i}},t.isExternalLinkTargetSet=function(){switch(b("externalLinkTarget")){case v.NONE:return!1;case v.SELF:case v.BLANK:case v.PARENT:case v.TOP:return!0}},t.isValidUrl=function(e,t){(0,a.deprecated)("isValidUrl(), please use createValidAbsoluteUrl() instead.");var r=t?"http://example.com":null;return null!==(0,a.createValidAbsoluteUrl)(e,r)},t.getFilenameFromUrl=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length);return e.substring(e.lastIndexOf("/",n)+1,n)},t.LinkTarget=v,t.getDefaultSetting=b,t.DEFAULT_LINK_REL=u,t.DOMCanvasFactory=h,t.DOMCMapReaderFactory=d,t.DOMSVGFactory=f},function(e,t,r){"use strict";var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t,r){"use strict";var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,r){"use strict";var n=r(35);e.exports=function(e){return Object(n(e))}},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";e.exports="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:{}},function(e,t,r){"use strict";e.exports=!1},function(e,t,r){"use strict";e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";var n=r(14);e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r);return e}},function(e,t,r){"use strict";e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},function(e,t,r){"use strict";var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,r){"use strict";var n=r(13).f,i=r(10),a=r(3)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t,r){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){"use strict";var n=r(34),i=r(35);e.exports=function(e){return n(i(e))}},function(e,t,r){"use strict";var n=r(17),i=Math.max,a=Math.min;e.exports=function(e,t){return(e=n(e))<0?i(e+t,0):a(e,t)}},function(e,t,r){"use strict";var n=r(25),i=r(3)("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?r:a?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,r){"use strict";var n=r(11),i=r(98),a=r(53),o=r(7),s=r(12),l=r(57),u={},c={},h=e.exports=function(e,t,r,h,d){var f,p,m,v,g=d?function(){return e}:l(e),b=n(r,h,t?2:1),y=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(a(g)){for(f=s(e.length);f>y;y++)if((v=t?b(o(p=e[y])[0],p[1]):b(e[y]))===u||v===c)return v}else for(m=g.call(e);!(p=m.next()).done;)if((v=i(m,b,p.value,t))===u||v===c)return v};h.BREAK=u,h.RETURN=c},function(e,t,r){"use strict";var n=r(2),i=r(1).document,a=n(i)&&n(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){"use strict";var n=r(25);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){"use strict";e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){"use strict";var n=r(51)("keys"),i=r(16);e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,r){"use strict";e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){"use strict";var n=r(49),i=r(37);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){"use strict";var n=r(11),i=r(34),a=r(18),o=r(12),s=r(82);e.exports=function(e,t){var r=1==e,l=2==e,u=3==e,c=4==e,h=6==e,d=5==e||h,f=t||s;return function(t,s,p){for(var m,v,g=a(t),b=i(g),y=n(s,p,3),_=o(b.length),A=0,S=r?f(t,_):l?f(t,0):void 0;_>A;A++)if((d||A in b)&&(v=y(m=b[A],A,g),e))if(r)S[A]=v;else if(v)switch(e){case 3:return!0;case 5:return m;case 6:return A;case 2:S.push(m)}else if(c)return!1;return h?-1:u||c?c:S}}},function(e,t,r){"use strict";var n=r(7),i=r(22),a=r(3)("species");e.exports=function(e,t){var r,o=n(e).constructor;return void 0===o||void 0==(r=n(o)[a])?t:i(r)}},function(e,t,r){"use strict";var n=r(3)("iterator"),i=!1;try{var a=[7][n]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var a=[7],o=a[n]();o.next=function(){return{done:r=!0}},a[n]=function(){return o},e(a)}catch(e){}return r}},function(e,t,r){"use strict";var n=r(22);e.exports.f=function(e){return new function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)}(e)}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(16)("meta"),a=r(2),o=r(10),s=r(13).f,l=0,u=Object.isExtensible||function(){return!0},c=!r(9)(function(){return u(Object.preventExtensions({}))}),h=function(e){s(e,i,{value:{i:"O"+ ++l,w:{}}})},d=e.exports={KEY:i,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==(void 0===e?"undefined":n(e))?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!u(e))return"F";if(!t)return"E";h(e)}return e[i].i},getWeak:function(e,t){if(!o(e,i)){if(!u(e))return!0;if(!t)return!1;h(e)}return e[i].w},onFreeze:function(e){return c&&d.NEED&&u(e)&&!o(e,i)&&h(e),e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateResponseStatus=t.validateRangeRequestCapabilities=t.createResponseStatusError=void 0;var n=r(0);t.createResponseStatusError=function(e,t){return 404===e||0===e&&/^file:/.test(t)?new n.MissingPDFException('Missing PDF "'+t+'".'):new n.UnexpectedResponseException("Unexpected server response ("+e+') while retrieving PDF "'+t+'".',e)},t.validateRangeRequestCapabilities=function(e){var t=e.getResponseHeader,r=e.isHttp,i=e.rangeChunkSize,a=e.disableRange;(0,n.assert)(i>0);var o={allowRangeRequests:!1,suggestedLength:void 0};if(a||!r)return o;if("bytes"!==t("Accept-Ranges"))return o;if("identity"!==(t("Content-Encoding")||"identity"))return o;var s=parseInt(t("Content-Length"),10);return Number.isInteger(s)?(o.suggestedLength=s,s<=2*i?o:(o.allowRangeRequests=!0,o)):o},t.validateResponseStatus=function(e){return 200===e||206===e}},function(e,t,r){"use strict";e.exports=!r(8)&&!r(9)(function(){return 7!=Object.defineProperty(r(32)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict";for(var n,i=r(1),a=r(6),o=r(16),s=o("typed_array"),l=o("view"),u=!(!i.ArrayBuffer||!i.DataView),c=u,h=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");h<9;)(n=i[d[h++]])?(a(n.prototype,s,!0),a(n.prototype,l,!0)):c=!1;e.exports={ABV:u,CONSTR:c,TYPED:s,VIEW:l}},function(e,t,r){"use strict";var n=r(17),i=r(12);e.exports=function(e){if(void 0===e)return 0;var t=n(e),r=i(t);if(t!==r)throw RangeError("Wrong length!");return r}},function(e,t,r){"use strict";var n=r(49),i=r(37).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){"use strict";var n=r(10),i=r(28),a=r(50)(!1),o=r(36)("IE_PROTO");e.exports=function(e,t){var r,s=i(e),l=0,u=[];for(r in s)r!=o&&n(s,r)&&u.push(r);for(;t.length>l;)n(s,r=t[l++])&&(~a(u,r)||u.push(r));return u}},function(e,t,r){"use strict";var n=r(28),i=r(12),a=r(29);e.exports=function(e){return function(t,r,o){var s,l=n(t),u=i(l.length),c=a(o,u);if(e&&r!=r){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===r)return e||c||0;return!e&&-1}}},function(e,t,r){"use strict";var n=r(4),i=r(1),a=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){"use strict";var n=r(18),i=r(29),a=r(12);e.exports=function(e){for(var t=n(this),r=a(t.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,r),l=o>2?arguments[2]:void 0,u=void 0===l?r:i(l,r);u>s;)t[s++]=e;return t}},function(e,t,r){"use strict";var n=r(19),i=r(3)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||a[i]===e)}},function(e,t,r){"use strict";var n=r(7),i=r(81),a=r(37),o=r(36)("IE_PROTO"),s=function(){},l=function(){var e,t=r(32)("iframe"),n=a.length;for(t.style.display="none",r(55).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;n--;)delete l.prototype[a[n]];return l()};e.exports=Object.create||function(e,t){var r;return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[o]=e):r=l(),void 0===t?r:i(r,t)}},function(e,t,r){"use strict";var n=r(1).document;e.exports=n&&n.documentElement},function(e,t,r){"use strict";var n=r(10),i=r(18),a=r(36)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,r){"use strict";var n=r(30),i=r(3)("iterator"),a=r(19);e.exports=r(4).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||a[n(e)]}},function(e,t,r){"use strict";var n=r(85),i=r(86),a=r(19),o=r(28);e.exports=r(59)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},function(e,t,r){"use strict";var n=r(21),i=r(5),a=r(14),o=r(6),s=r(19),l=r(87),u=r(26),c=r(56),h=r(3)("iterator"),d=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,r,p,m,v,g){l(r,t,p);var b,y,_,A=function(e){if(!d&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},S=t+" Iterator",w="values"==m,P=!1,k=e.prototype,C=k[h]||k["@@iterator"]||m&&k[m],R=C||A(m),x=m?w?A("entries"):R:void 0,T="Array"==t&&k.entries||C;if(T&&(_=c(T.call(new e)))!==Object.prototype&&_.next&&(u(_,S,!0),n||"function"==typeof _[h]||o(_,h,f)),w&&C&&"values"!==C.name&&(P=!0,R=function(){return C.call(this)}),n&&!g||!d&&!P&&k[h]||o(k,h,R),s[t]=R,s[S]=f,m)if(b={values:w?R:A("values"),keys:v?R:A("keys"),entries:x},g)for(y in b)y in k||a(k,y,b[y]);else i(i.P+i.F*(d||P),t,b);return b}},function(e,t,r){"use strict";var n=r(1),i=r(13),a=r(8),o=r(3)("species");e.exports=function(e){var t=n[e];a&&t&&!t[o]&&i.f(t,o,{configurable:!0,get:function(){return this}})}},function(e,t,r){"use strict";var n=r(62),i=r(27),a=r(28),o=r(33),s=r(10),l=r(45),u=Object.getOwnPropertyDescriptor;t.f=r(8)?u:function(e,t){if(e=a(e),t=o(t,!0),l)try{return u(e,t)}catch(e){}if(s(e,t))return i(!n.f.call(e,t),e[t])}},function(e,t,r){"use strict";t.f={}.propertyIsEnumerable},function(e,t,r){"use strict";var n=r(30),i={};i[r(3)("toStringTag")]="z",i+""!="[object z]"&&r(14)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},function(e,t,r){"use strict";for(var n=r(58),i=r(38),a=r(14),o=r(1),s=r(6),l=r(19),u=r(3),c=u("iterator"),h=u("toStringTag"),d=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(f),m=0;m<p.length;m++){var v,g=p[m],b=f[g],y=o[g],_=y&&y.prototype;if(_&&(_[c]||s(_,c,d),_[h]||s(_,h,g),l[g]=d,b))for(v in n)_[v]||a(_,v,n[v],!0)}},function(e,t,r){"use strict";var n,i,a,o=r(11),s=r(99),l=r(55),u=r(32),c=r(1),h=c.process,d=c.setImmediate,f=c.clearImmediate,p=c.MessageChannel,m=c.Dispatch,v=0,g={},b=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},y=function(e){b.call(e.data)};d&&f||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){s("function"==typeof e?e:Function(e),t)},n(v),v},f=function(e){delete g[e]},"process"==r(25)(h)?n=function(e){h.nextTick(o(b,e,1))}:m&&m.now?n=function(e){m.now(o(b,e,1))}:p?(a=(i=new p).port2,i.port1.onmessage=y,n=o(a.postMessage,a,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(n=function(e){c.postMessage(e+"","*")},c.addEventListener("message",y,!1)):n="onreadystatechange"in u("script")?function(e){l.appendChild(u("script")).onreadystatechange=function(){l.removeChild(this),b.call(e)}}:function(e){setTimeout(o(b,e,1),0)}),e.exports={set:d,clear:f}},function(e,t,r){"use strict";e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},function(e,t,r){"use strict";var n=r(7),i=r(2),a=r(42);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=a.f(e);return(0,r.resolve)(t),r.promise}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.build=t.version=t._UnsupportedManager=t.setPDFNetworkStreamClass=t.PDFPageProxy=t.PDFDocumentProxy=t.PDFWorker=t.PDFDataRangeTransport=t.LoopbackPort=t.getDocument=void 0;var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(0),s=r(15),l=r(119),u=r(120),c=r(20),h=(n=c)&&n.__esModule?n:{default:n},d=r(71),f=r(123);var p,m=65536,v=!1,g=!1,b="undefined"!=typeof document&&document.currentScript?document.currentScript.src:null,y=null,_=!1;"undefined"==typeof window?(v=!0,void 0===require.ensure&&(require.ensure=require("node-ensure")),_=!0):"undefined"!=typeof require&&"function"==typeof require.ensure&&(_=!0),"undefined"!=typeof requirejs&&requirejs.toUrl&&(p=requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));var A,S="undefined"!=typeof requirejs&&requirejs.load;y=_?function(e){require.ensure([],function(){var t;t=require("./pdf.worker.js"),e(t.WorkerMessageHandler)})}:S?function(e){requirejs(["pdfjs-dist/build/pdf.worker"],function(t){e(t.WorkerMessageHandler)})}:null;var w,P=function(){var e=0;function t(){this._capability=(0,o.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d"+e++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}return t.prototype={get promise(){return this._capability.promise},destroy:function(){var e=this;return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then(function(){e._transport=null,e._worker&&(e._worker.destroy(),e._worker=null)})},then:function(e,t){return this.promise.then.apply(this.promise,arguments)}},t}(),k=function(){function e(e,t){this.length=e,this.initialData=t,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._readyCapability=(0,o.createPromiseCapability)()}return e.prototype={addRangeListener:function(e){this._rangeListeners.push(e)},addProgressListener:function(e){this._progressListeners.push(e)},addProgressiveReadListener:function(e){this._progressiveReadListeners.push(e)},onDataRange:function(e,t){for(var r=this._rangeListeners,n=0,i=r.length;n<i;++n)r[n](e,t)},onDataProgress:function(e){var t=this;this._readyCapability.promise.then(function(){for(var r=t._progressListeners,n=0,i=r.length;n<i;++n)r[n](e)})},onDataProgressiveRead:function(e){var t=this;this._readyCapability.promise.then(function(){for(var r=t._progressiveReadListeners,n=0,i=r.length;n<i;++n)r[n](e)})},transportReady:function(){this._readyCapability.resolve()},requestDataRange:function(e,t){throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")},abort:function(){}},e}(),C=function(){function e(e,t,r){this.pdfInfo=e,this.transport=t,this.loadingTask=r}return e.prototype={get numPages(){return this.pdfInfo.numPages},get fingerprint(){return this.pdfInfo.fingerprint},getPage:function(e){return this.transport.getPage(e)},getPageIndex:function(e){return this.transport.getPageIndex(e)},getDestinations:function(){return this.transport.getDestinations()},getDestination:function(e){return this.transport.getDestination(e)},getPageLabels:function(){return this.transport.getPageLabels()},getPageMode:function(){return this.transport.getPageMode()},getAttachments:function(){return this.transport.getAttachments()},getJavaScript:function(){return this.transport.getJavaScript()},getOutline:function(){return this.transport.getOutline()},getMetadata:function(){return this.transport.getMetadata()},getData:function(){return this.transport.getData()},getDownloadInfo:function(){return this.transport.downloadInfoCapability.promise},getStats:function(){return this.transport.getStats()},cleanup:function(){this.transport.startCleanup()},destroy:function(){return this.loadingTask.destroy()}},e}(),R=function(){function e(e,t,r){this.pageIndex=e,this.pageInfo=t,this.transport=r,this.stats=new o.StatTimer,this.stats.enabled=(0,s.getDefaultSetting)("enableStats"),this.commonObjs=r.commonObjs,this.objs=new O,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this.intentStates=Object.create(null),this.destroyed=!1}return e.prototype={get pageNumber(){return this.pageIndex+1},get rotate(){return this.pageInfo.rotate},get ref(){return this.pageInfo.ref},get userUnit(){return this.pageInfo.userUnit},get view(){return this.pageInfo.view},getViewport:function(e,t){return arguments.length<2&&(t=this.rotate),new o.PageViewport(this.view,e,t,0,0)},getAnnotations:function(e){var t=e&&e.intent||null;return this.annotationsPromise&&this.annotationsIntent===t||(this.annotationsPromise=this.transport.getAnnotations(this.pageIndex,t),this.annotationsIntent=t),this.annotationsPromise},render:function(e){var t=this,r=this.stats;r.time("Overall"),this.pendingCleanup=!1;var n="print"===e.intent?"print":"display",i=e.canvasFactory||new s.DOMCanvasFactory;this.intentStates[n]||(this.intentStates[n]=Object.create(null));var a=this.intentStates[n];a.displayReadyCapability||(a.receivingOperatorList=!0,a.displayReadyCapability=(0,o.createPromiseCapability)(),a.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.stats.time("Page Request"),this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageNumber-1,intent:n,renderInteractiveForms:!0===e.renderInteractiveForms}));var l=function(e){var n=a.renderTasks.indexOf(u);n>=0&&a.renderTasks.splice(n,1),t.cleanupAfterRender&&(t.pendingCleanup=!0),t._tryCleanup(),e?u.capability.reject(e):u.capability.resolve(),r.timeEnd("Rendering"),r.timeEnd("Overall")},u=new I(l,e,this.objs,this.commonObjs,a.operatorList,this.pageNumber,i);u.useRequestAnimationFrame="print"!==n,a.renderTasks||(a.renderTasks=[]),a.renderTasks.push(u);var c=u.task;return e.continueCallback&&((0,o.deprecated)("render is used with continueCallback parameter"),c.onContinue=e.continueCallback),a.displayReadyCapability.promise.then(function(e){t.pendingCleanup?l():(r.time("Rendering"),u.initializeGraphics(e),u.operatorListChanged())}).catch(l),c},getOperatorList:function(){this.intentStates.oplist||(this.intentStates.oplist=Object.create(null));var e,t=this.intentStates.oplist;return t.opListReadCapability||((e={}).operatorListChanged=function(){if(t.operatorList.lastChunk){t.opListReadCapability.resolve(t.operatorList);var r=t.renderTasks.indexOf(e);r>=0&&t.renderTasks.splice(r,1)}},t.receivingOperatorList=!0,t.opListReadCapability=(0,o.createPromiseCapability)(),t.renderTasks=[],t.renderTasks.push(e),t.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageIndex,intent:"oplist"})),t.opListReadCapability.promise},streamTextContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:!0===e.normalizeWhitespace,combineTextItems:!0!==e.disableCombineTextItems},{highWaterMark:100,size:function(e){return e.items.length}})},getTextContent:function(e){e=e||{};var t=this.streamTextContent(e);return new Promise(function(e,r){var n=t.getReader(),i={items:[],styles:Object.create(null)};!function t(){n.read().then(function(r){var n=r.value;r.done?e(i):(o.Util.extendObj(i.styles,n.styles),o.Util.appendToArray(i.items,n.items),t())},r)}()})},_destroy:function(){this.destroyed=!0,this.transport.pageCache[this.pageIndex]=null;var e=[];return Object.keys(this.intentStates).forEach(function(t){"oplist"!==t&&this.intentStates[t].renderTasks.forEach(function(t){var r=t.capability.promise.catch(function(){});e.push(r),t.cancel()})},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(e)},destroy:function(){(0,o.deprecated)("page destroy method, use cleanup() instead"),this.cleanup()},cleanup:function(){this.pendingCleanup=!0,this._tryCleanup()},_tryCleanup:function(){this.pendingCleanup&&!Object.keys(this.intentStates).some(function(e){var t=this.intentStates[e];return 0!==t.renderTasks.length||t.receivingOperatorList},this)&&(Object.keys(this.intentStates).forEach(function(e){delete this.intentStates[e]},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1)},_startRenderPage:function(e,t){var r=this.intentStates[t];r.displayReadyCapability&&r.displayReadyCapability.resolve(e)},_renderPageChunk:function(e,t){var r,n,i=this.intentStates[t];for(r=0,n=e.length;r<n;r++)i.operatorList.fnArray.push(e.fnArray[r]),i.operatorList.argsArray.push(e.argsArray[r]);for(i.operatorList.lastChunk=e.lastChunk,r=0;r<i.renderTasks.length;r++)i.renderTasks[r].operatorListChanged();e.lastChunk&&(i.receivingOperatorList=!1,this._tryCleanup())}},e}(),x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}return i(e,[{key:"postMessage",value:function(e,t){var r=this;if(this._defer){var n=new WeakMap,i={data:function e(r){if("object"!==(void 0===r?"undefined":a(r))||null===r)return r;if(n.has(r))return n.get(r);var i,s;if((s=r.buffer)&&(0,o.isArrayBuffer)(s)){var l=t&&t.indexOf(s)>=0;return i=r===s?r:l?new r.constructor(s,r.byteOffset,r.byteLength):new r.constructor(r),n.set(r,i),i}for(var u in i=Array.isArray(r)?[]:{},n.set(r,i),r){for(var c,h=r;!(c=Object.getOwnPropertyDescriptor(h,u));)h=Object.getPrototypeOf(h);void 0!==c.value&&"function"!=typeof c.value&&(i[u]=e(c.value))}return i}(e)};this._deferred.then(function(){r._listeners.forEach(function(e){e.call(this,i)},r)})}else this._listeners.forEach(function(t){t.call(this,{data:e})},this)}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t);this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners=[]}}]),e}(),T=function(){var e=0;function t(){if(void 0!==p)return p;if((0,s.getDefaultSetting)("workerSrc"))return(0,s.getDefaultSetting)("workerSrc");if(b)return b.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2");throw new Error("No PDFJS.workerSrc specified")}var r=void 0;var n=new WeakMap;function i(e,t){if(t&&n.has(t))throw new Error("Cannot use more than one PDFWorker per port");if(this.name=e,this.destroyed=!1,this.postMessageTransfers=!0,this._readyCapability=(0,o.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,t)return n.set(t,this),void this._initializeFromPort(t);this._initialize()}return i.prototype={get promise(){return this._readyCapability.promise},get port(){return this._port},get messageHandler(){return this._messageHandler},_initializeFromPort:function(e){this._port=e,this._messageHandler=new o.MessageHandler("main","worker",e),this._messageHandler.on("ready",function(){}),this._readyCapability.resolve()},_initialize:function(){var e,r,n=this;if(!v&&!(0,s.getDefaultSetting)("disableWorker")&&"undefined"!=typeof Worker){var i=t();try{(0,o.isSameOrigin)(window.location.href,i)||(e=new URL(i,window.location).href,r="importScripts('"+e+"');",i=URL.createObjectURL(new Blob([r])));var a=new Worker(i),l=new o.MessageHandler("main","worker",a),u=function(){a.removeEventListener("error",c),l.destroy(),a.terminate(),n.destroyed?n._readyCapability.reject(new Error("Worker was destroyed")):n._setupFakeWorker()},c=function(){n._webWorker||u()};a.addEventListener("error",c),l.on("test",function(e){(a.removeEventListener("error",c),n.destroyed)?u():e&&e.supportTypedArray?(n._messageHandler=l,n._port=a,n._webWorker=a,e.supportTransfers||(n.postMessageTransfers=!1,g=!0),n._readyCapability.resolve(),l.send("configure",{verbosity:(0,o.getVerbosityLevel)()})):(n._setupFakeWorker(),l.destroy(),a.terminate())}),l.on("console_log",function(e){console.log.apply(console,e)}),l.on("console_error",function(e){console.error.apply(console,e)}),l.on("ready",function(e){if(a.removeEventListener("error",c),n.destroyed)u();else try{h()}catch(e){n._setupFakeWorker()}});var h=function(){var e=(0,s.getDefaultSetting)("postMessageTransfers")&&!g,t=new Uint8Array([e?255:0]);try{l.send("test",t,[t.buffer])}catch(e){(0,o.info)("Cannot use postMessage transfers"),t[0]=0,l.send("test",t)}};return void h()}catch(e){(0,o.info)("The worker has been disabled.")}}this._setupFakeWorker()},_setupFakeWorker:function(){var n=this;v||(0,s.getDefaultSetting)("disableWorker")||((0,o.warn)("Setting up fake worker."),v=!0),(r?r.promise:(r=(0,o.createPromiseCapability)(),(y||function(e){o.Util.loadScript(t(),function(){e(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)})})(r.resolve),r.promise)).then(function(t){if(n.destroyed)n._readyCapability.reject(new Error("Worker was destroyed"));else{var r=Uint8Array!==Float32Array,i=new x(r);n._port=i;var a="fake"+e++,s=new o.MessageHandler(a+"_worker",a,i);t.setup(s,i);var l=new o.MessageHandler(a,a+"_worker",i);n._messageHandler=l,n._readyCapability.resolve()}})},destroy:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),n.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},i.fromPort=function(e){return n.has(e)?n.get(e):new i(null,e)},i}(),E=function(){function e(e,t,r,n){this.messageHandler=e,this.loadingTask=t,this.commonObjs=new O,this.fontLoader=new l.FontLoader(t.docId),this.CMapReaderFactory=new n({baseUrl:(0,s.getDefaultSetting)("cMapUrl"),isCompressed:(0,s.getDefaultSetting)("cMapPacked")}),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=r,this._fullReader=null,this._lastProgress=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=(0,o.createPromiseCapability)(),this.setupMessageHandler()}return e.prototype={destroy:function(){var e=this;if(this.destroyCapability)return this.destroyCapability.promise;this.destroyed=!0,this.destroyCapability=(0,o.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));var t=[];this.pageCache.forEach(function(e){e&&t.push(e._destroy())}),this.pageCache=[],this.pagePromises=[];var r=this.messageHandler.sendWithPromise("Terminate",null);return t.push(r),Promise.all(t).then(function(){e.fontLoader.clear(),e._networkStream&&e._networkStream.cancelAllRequests(),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise},setupMessageHandler:function(){var e=this.messageHandler,t=this.loadingTask;e.on("GetReader",function(e,t){var r=this;(0,o.assert)(this._networkStream),this._fullReader=this._networkStream.getFullReader(),this._fullReader.onProgress=function(e){r._lastProgress={loaded:e.loaded,total:e.total}},t.onPull=function(){r._fullReader.read().then(function(e){var r=e.value;e.done?t.close():((0,o.assert)((0,o.isArrayBuffer)(r)),t.enqueue(new Uint8Array(r),1,[r]))}).catch(function(e){t.error(e)})},t.onCancel=function(e){r._fullReader.cancel(e)}},this),e.on("ReaderHeadersReady",function(e){var t=this,r=(0,o.createPromiseCapability)(),n=this._fullReader;return n.headersReady.then(function(){if(!n.isStreamingSupported||!n.isRangeSupported){if(t._lastProgress){var e=t.loadingTask;e.onProgress&&e.onProgress(t._lastProgress)}n.onProgress=function(e){var r=t.loadingTask;r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}r.resolve({isStreamingSupported:n.isStreamingSupported,isRangeSupported:n.isRangeSupported,contentLength:n.contentLength})},r.reject),r.promise},this),e.on("GetRangeReader",function(e,t){(0,o.assert)(this._networkStream);var r=this._networkStream.getRangeReader(e.begin,e.end);t.onPull=function(){r.read().then(function(e){var r=e.value;e.done?t.close():((0,o.assert)((0,o.isArrayBuffer)(r)),t.enqueue(new Uint8Array(r),1,[r]))}).catch(function(e){t.error(e)})},t.onCancel=function(e){r.cancel(e)}},this),e.on("GetDoc",function(e){var t=e.pdfInfo;this.numPages=e.pdfInfo.numPages;var r=this.loadingTask,n=new C(t,this,r);this.pdfDocument=n,r._capability.resolve(n)},this),e.on("PasswordRequest",function(e){var r=this;if(this._passwordCapability=(0,o.createPromiseCapability)(),t.onPassword){t.onPassword(function(e){r._passwordCapability.resolve({password:e})},e.code)}else this._passwordCapability.reject(new o.PasswordException(e.message,e.code));return this._passwordCapability.promise},this),e.on("PasswordException",function(e){t._capability.reject(new o.PasswordException(e.message,e.code))},this),e.on("InvalidPDF",function(e){this.loadingTask._capability.reject(new o.InvalidPDFException(e.message))},this),e.on("MissingPDF",function(e){this.loadingTask._capability.reject(new o.MissingPDFException(e.message))},this),e.on("UnexpectedResponse",function(e){this.loadingTask._capability.reject(new o.UnexpectedResponseException(e.message,e.status))},this),e.on("UnknownError",function(e){this.loadingTask._capability.reject(new o.UnknownErrorException(e.message,e.details))},this),e.on("DataLoaded",function(e){this.downloadInfoCapability.resolve(e)},this),e.on("PDFManagerReady",function(e){},this),e.on("StartRenderPage",function(e){if(!this.destroyed){var t=this.pageCache[e.pageIndex];t.stats.timeEnd("Page Request"),t._startRenderPage(e.transparency,e.intent)}},this),e.on("RenderPageChunk",function(e){this.destroyed||this.pageCache[e.pageIndex]._renderPageChunk(e.operatorList,e.intent)},this),e.on("commonobj",function(e){var t=this;if(!this.destroyed){var r=e[0],n=e[1];if(!this.commonObjs.hasData(r))switch(n){case"Font":var i=e[2];if("error"in i){var a=i.error;(0,o.warn)("Error during font loading: "+a),this.commonObjs.resolve(r,a);break}var u=null;(0,s.getDefaultSetting)("pdfBug")&&h.default.FontInspector&&h.default.FontInspector.enabled&&(u={registerFont:function(e,t){h.default.FontInspector.fontAdded(e,t)}});var c=new l.FontFaceObject(i,{isEvalSupported:(0,s.getDefaultSetting)("isEvalSupported"),disableFontFace:(0,s.getDefaultSetting)("disableFontFace"),fontRegistry:u});this.fontLoader.bind([c],function(e){t.commonObjs.resolve(r,c)});break;case"FontPath":this.commonObjs.resolve(r,e[2]);break;default:throw new Error("Got unknown common object type "+n)}}},this),e.on("obj",function(e){if(!this.destroyed){var t,r=e[0],n=e[1],i=e[2],a=this.pageCache[n];if(!a.objs.hasData(r))switch(i){case"JpegStream":t=e[3],(0,o.loadJpegStream)(r,t,a.objs);break;case"Image":t=e[3],a.objs.resolve(r,t);t&&"data"in t&&t.data.length>8e6&&(a.cleanupAfterRender=!0);break;default:throw new Error("Got unknown object type "+i)}}},this),e.on("DocProgress",function(e){if(!this.destroyed){var t=this.loadingTask;t.onProgress&&t.onProgress({loaded:e.loaded,total:e.total})}},this),e.on("PageError",function(e){if(!this.destroyed){var t=this.pageCache[e.pageNum-1].intentStates[e.intent];if(!t.displayReadyCapability)throw new Error(e.error);if(t.displayReadyCapability.reject(e.error),t.operatorList){t.operatorList.lastChunk=!0;for(var r=0;r<t.renderTasks.length;r++)t.renderTasks[r].operatorListChanged()}}},this),e.on("UnsupportedFeature",function(e){if(!this.destroyed){var t=e.featureId,r=this.loadingTask;r.onUnsupportedFeature&&r.onUnsupportedFeature(t),F.notify(t)}},this),e.on("JpegDecode",function(e){if(this.destroyed)return Promise.reject(new Error("Worker was destroyed"));if("undefined"==typeof document)return Promise.reject(new Error('"document" is not defined.'));var t=e[0],r=e[1];return 3!==r&&1!==r?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise(function(e,n){var i=new Image;i.onload=function(){var t=i.width,n=i.height,a=t*n,o=4*a,s=new Uint8Array(a*r),l=document.createElement("canvas");l.width=t,l.height=n;var u=l.getContext("2d");u.drawImage(i,0,0);var c,h,d=u.getImageData(0,0,t,n).data;if(3===r)for(c=0,h=0;c<o;c+=4,h+=3)s[h]=d[c],s[h+1]=d[c+1],s[h+2]=d[c+2];else if(1===r)for(c=0,h=0;c<o;c+=4,h++)s[h]=d[c];e({data:s,width:t,height:n})},i.onerror=function(){n(new Error("JpegDecode failed to load image"))},i.src=t})},this),e.on("FetchBuiltInCMap",function(e){return this.destroyed?Promise.reject(new Error("Worker was destroyed")):this.CMapReaderFactory.fetch({name:e.name})},this)},getData:function(){return this.messageHandler.sendWithPromise("GetData",null)},getPage:function(e,t){var r=this;if(!Number.isInteger(e)||e<=0||e>this.numPages)return Promise.reject(new Error("Invalid page request"));var n=e-1;if(n in this.pagePromises)return this.pagePromises[n];var i=this.messageHandler.sendWithPromise("GetPage",{pageIndex:n}).then(function(e){if(r.destroyed)throw new Error("Transport destroyed");var t=new R(n,e,r);return r.pageCache[n]=t,t});return this.pagePromises[n]=i,i},getPageIndex:function(e){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:e}).catch(function(e){return Promise.reject(new Error(e))})},getAnnotations:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})},getDestinations:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)},getDestination:function(e){return this.messageHandler.sendWithPromise("GetDestination",{id:e})},getPageLabels:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)},getPageMode:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)},getAttachments:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)},getJavaScript:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)},getOutline:function(){return this.messageHandler.sendWithPromise("GetOutline",null)},getMetadata:function(){return this.messageHandler.sendWithPromise("GetMetadata",null).then(function(e){return{info:e[0],metadata:e[1]?new d.Metadata(e[1]):null}})},getStats:function(){return this.messageHandler.sendWithPromise("GetStats",null)},startCleanup:function(){var e=this;this.messageHandler.sendWithPromise("Cleanup",null).then(function(){for(var t=0,r=e.pageCache.length;t<r;t++){var n=e.pageCache[t];n&&n.cleanup()}e.commonObjs.clear(),e.fontLoader.clear()})}},e}(),O=function(){function e(){this.objs=Object.create(null)}return e.prototype={ensureObj:function(e){if(this.objs[e])return this.objs[e];var t={capability:(0,o.createPromiseCapability)(),data:null,resolved:!1};return this.objs[e]=t,t},get:function(e,t){if(t)return this.ensureObj(e).capability.promise.then(t),null;var r=this.objs[e];if(!r||!r.resolved)throw new Error("Requesting object that isn't resolved yet "+e);return r.data},resolve:function(e,t){var r=this.ensureObj(e);r.resolved=!0,r.data=t,r.capability.resolve(t)},isResolved:function(e){var t=this.objs;return!!t[e]&&t[e].resolved},hasData:function(e){return this.isResolved(e)},getData:function(e){var t=this.objs;return t[e]&&t[e].resolved?t[e].data:null},clear:function(){this.objs=Object.create(null)}},e}(),L=function(){function e(e){this._internalRenderTask=e,this.onContinue=null}return e.prototype={get promise(){return this._internalRenderTask.capability.promise},cancel:function(){this._internalRenderTask.cancel()},then:function(e,t){return this.promise.then.apply(this.promise,arguments)}},e}(),I=function(){var e=new WeakMap;function t(e,t,r,n,i,a,s){this.callback=e,this.params=t,this.objs=r,this.commonObjs=n,this.operatorListIdx=null,this.operatorList=i,this.pageNumber=a,this.canvasFactory=s,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this.useRequestAnimationFrame=!1,this.cancelled=!1,this.capability=(0,o.createPromiseCapability)(),this.task=new L(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=t.canvasContext.canvas}return t.prototype={initializeGraphics:function(t){if(this._canvas){if(e.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");e.set(this._canvas,this)}if(!this.cancelled){(0,s.getDefaultSetting)("pdfBug")&&h.default.StepperManager&&h.default.StepperManager.enabled&&(this.stepper=h.default.StepperManager.create(this.pageNumber-1),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint());var r=this.params;this.gfx=new u.CanvasGraphics(r.canvasContext,this.commonObjs,this.objs,this.canvasFactory,r.imageLayer),this.gfx.beginDrawing({transform:r.transform,viewport:r.viewport,transparency:t,background:r.background}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}},cancel:function(){this.running=!1,this.cancelled=!0,this._canvas&&e.delete(this._canvas),(0,s.getDefaultSetting)("pdfjsNext")?this.callback(new s.RenderingCancelledException("Rendering cancelled, page "+this.pageNumber,"canvas")):this.callback("cancelled")},operatorListChanged:function(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)},_continue:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())},_scheduleNext:function(){this.useRequestAnimationFrame&&"undefined"!=typeof window?window.requestAnimationFrame(this._nextBound):Promise.resolve(void 0).then(this._nextBound)},_next:function(){this.cancelled||(this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&e.delete(this._canvas),this.callback())))}},t}(),F=(w=[],{listen:function(e){(0,o.deprecated)("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"),w.push(e)},notify:function(e){for(var t=0,r=w.length;t<r;t++)w[t](e)}});t.version="1.10.100",t.build="ea29ec83",t.getDocument=function(e,t,r,n){var i,l=new P;if(arguments.length>1&&(0,o.deprecated)("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"),t&&(t instanceof k||((t=Object.create(t)).length=e.length,t.initialData=e.initialData,t.abort||(t.abort=function(){})),(e=Object.create(e)).range=t),l.onPassword=r||null,l.onProgress=n||null,"string"==typeof e)i={url:e};else if((0,o.isArrayBuffer)(e))i={data:e};else if(e instanceof k)i={range:e};else{if("object"!==(void 0===e?"undefined":a(e)))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object");if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url");i=e}var u={},c=null,h=null,d=s.DOMCMapReaderFactory;for(var p in i)if("url"!==p||"undefined"==typeof window)if("range"!==p)if("worker"!==p)if("data"!==p||i[p]instanceof Uint8Array)"CMapReaderFactory"!==p?u[p]=i[p]:d=i[p];else{var v=i[p];if("string"==typeof v)u[p]=(0,o.stringToBytes)(v);else if("object"!==(void 0===v?"undefined":a(v))||null===v||isNaN(v.length)){if(!(0,o.isArrayBuffer)(v))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.");u[p]=new Uint8Array(v)}else u[p]=new Uint8Array(v)}else h=i[p];else c=i[p];else u[p]=new URL(i[p],window.location).href;if(u.rangeChunkSize=u.rangeChunkSize||m,u.ignoreErrors=!0!==u.stopAtErrors,void 0!==u.disableNativeImageDecoder&&(0,o.deprecated)("parameter disableNativeImageDecoder, use nativeImageDecoderSupport instead"),u.nativeImageDecoderSupport=u.nativeImageDecoderSupport||(!0===u.disableNativeImageDecoder?o.NativeImageDecoding.NONE:o.NativeImageDecoding.DECODE),u.nativeImageDecoderSupport!==o.NativeImageDecoding.DECODE&&u.nativeImageDecoderSupport!==o.NativeImageDecoding.NONE&&u.nativeImageDecoderSupport!==o.NativeImageDecoding.DISPLAY&&((0,o.warn)("Invalid parameter nativeImageDecoderSupport: need a state of enum {NativeImageDecoding}"),u.nativeImageDecoderSupport=o.NativeImageDecoding.DECODE),!h){var b=(0,s.getDefaultSetting)("workerPort");h=b?T.fromPort(b):new T,l._worker=h}var y=l.docId;return h.promise.then(function(){if(l.destroyed)throw new Error("Loading aborted");return function(e,t,r,n){return e.destroyed?Promise.reject(new Error("Worker was destroyed")):(t.disableAutoFetch=(0,s.getDefaultSetting)("disableAutoFetch"),t.disableStream=(0,s.getDefaultSetting)("disableStream"),t.chunkedViewerLoading=!!r,r&&(t.length=r.length,t.initialData=r.initialData),e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,apiVersion:"1.10.100",source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:(0,s.getDefaultSetting)("maxImageSize"),disableFontFace:(0,s.getDefaultSetting)("disableFontFace"),disableCreateObjectURL:(0,s.getDefaultSetting)("disableCreateObjectURL"),postMessageTransfers:(0,s.getDefaultSetting)("postMessageTransfers")&&!g,docBaseUrl:t.docBaseUrl,nativeImageDecoderSupport:t.nativeImageDecoderSupport,ignoreErrors:t.ignoreErrors,isEvalSupported:(0,s.getDefaultSetting)("isEvalSupported")}).then(function(t){if(e.destroyed)throw new Error("Worker was destroyed");return t}))}(h,u,c,y).then(function(e){if(l.destroyed)throw new Error("Loading aborted");var t=void 0;c?t=new f.PDFDataTransportStream(u,c):u.data||(t=new A({source:u,disableRange:(0,s.getDefaultSetting)("disableRange")}));var r=new o.MessageHandler(y,e,h.port);r.postMessageTransfers=h.postMessageTransfers;var n=new E(r,l,t,d);l._transport=n,r.send("Ready",null)})}).catch(l._capability.reject),l},t.LoopbackPort=x,t.PDFDataRangeTransport=k,t.PDFWorker=T,t.PDFDocumentProxy=C,t.PDFPageProxy=R,t.setPDFNetworkStreamClass=function(e){A=e},t._UnsupportedManager=F,t.version="1.10.100",t.build="ea29ec83"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLUtils=void 0;var n=r(15),i=r(0),a=function(){function e(e,t,r){var n=e.createShader(r);if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var i=e.getShaderInfoLog(n);throw new Error("Error during shader compilation: "+i)}return n}function t(t,r){return e(t,r,t.VERTEX_SHADER)}function r(t,r){return e(t,r,t.FRAGMENT_SHADER)}function a(e,t){for(var r=e.createProgram(),n=0,i=t.length;n<i;++n)e.attachShader(r,t[n]);if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){var a=e.getProgramInfoLog(r);throw new Error("Error during program linking: "+a)}return r}function o(e,t,r){e.activeTexture(r);var n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n}var s,l;function u(){s||(l=document.createElement("canvas"),s=l.getContext("webgl",{premultipliedalpha:!1}))}var c="  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",h="  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",d=null;var f="  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",p="  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",m=null;return{get isEnabled(){if((0,n.getDefaultSetting)("disableWebGL"))return!1;var e=!1;try{u(),e=!!s}catch(e){}return(0,i.shadow)(this,"isEnabled",e)},composeSMask:function(e,n,i){var f=e.width,p=e.height;d||function(){var e,n;u(),e=l,l=null,n=s,s=null;var i=a(n,[t(n,c),r(n,h)]);n.useProgram(i);var o={};o.gl=n,o.canvas=e,o.resolutionLocation=n.getUniformLocation(i,"u_resolution"),o.positionLocation=n.getAttribLocation(i,"a_position"),o.backdropLocation=n.getUniformLocation(i,"u_backdrop"),o.subtypeLocation=n.getUniformLocation(i,"u_subtype");var f=n.getAttribLocation(i,"a_texCoord"),p=n.getUniformLocation(i,"u_image"),m=n.getUniformLocation(i,"u_mask"),v=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,v),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(f),n.vertexAttribPointer(f,2,n.FLOAT,!1,0,0),n.uniform1i(p,0),n.uniform1i(m,1),d=o}();var m=d,v=m.canvas,g=m.gl;v.width=f,v.height=p,g.viewport(0,0,g.drawingBufferWidth,g.drawingBufferHeight),g.uniform2f(m.resolutionLocation,f,p),i.backdrop?g.uniform4f(m.resolutionLocation,i.backdrop[0],i.backdrop[1],i.backdrop[2],1):g.uniform4f(m.resolutionLocation,0,0,0,0),g.uniform1i(m.subtypeLocation,"Luminosity"===i.subtype?1:0);var b=o(g,e,g.TEXTURE0),y=o(g,n,g.TEXTURE1),_=g.createBuffer();return g.bindBuffer(g.ARRAY_BUFFER,_),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,0,f,0,0,p,0,p,f,0,f,p]),g.STATIC_DRAW),g.enableVertexAttribArray(m.positionLocation),g.vertexAttribPointer(m.positionLocation,2,g.FLOAT,!1,0,0),g.clearColor(0,0,0,0),g.enable(g.BLEND),g.blendFunc(g.ONE,g.ONE_MINUS_SRC_ALPHA),g.clear(g.COLOR_BUFFER_BIT),g.drawArrays(g.TRIANGLES,0,6),g.flush(),g.deleteTexture(b),g.deleteTexture(y),g.deleteBuffer(_),v},drawFigures:function(e,n,i,o,c){m||function(){var e,n;u(),e=l,l=null,n=s,s=null;var i=a(n,[t(n,f),r(n,p)]);n.useProgram(i);var o={};o.gl=n,o.canvas=e,o.resolutionLocation=n.getUniformLocation(i,"u_resolution"),o.scaleLocation=n.getUniformLocation(i,"u_scale"),o.offsetLocation=n.getUniformLocation(i,"u_offset"),o.positionLocation=n.getAttribLocation(i,"a_position"),o.colorLocation=n.getAttribLocation(i,"a_color"),m=o}();var h=m,d=h.canvas,v=h.gl;d.width=e,d.height=n,v.viewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),v.uniform2f(h.resolutionLocation,e,n);var g,b,y,_=0;for(g=0,b=o.length;g<b;g++)switch(o[g].type){case"lattice":_+=((y=o[g].coords.length/o[g].verticesPerRow|0)-1)*(o[g].verticesPerRow-1)*6;break;case"triangles":_+=o[g].coords.length}var A=new Float32Array(2*_),S=new Uint8Array(3*_),w=c.coords,P=c.colors,k=0,C=0;for(g=0,b=o.length;g<b;g++){var R=o[g],x=R.coords,T=R.colors;switch(R.type){case"lattice":var E=R.verticesPerRow;y=x.length/E|0;for(var O=1;O<y;O++)for(var L=O*E+1,I=1;I<E;I++,L++)A[k]=w[x[L-E-1]],A[k+1]=w[x[L-E-1]+1],A[k+2]=w[x[L-E]],A[k+3]=w[x[L-E]+1],A[k+4]=w[x[L-1]],A[k+5]=w[x[L-1]+1],S[C]=P[T[L-E-1]],S[C+1]=P[T[L-E-1]+1],S[C+2]=P[T[L-E-1]+2],S[C+3]=P[T[L-E]],S[C+4]=P[T[L-E]+1],S[C+5]=P[T[L-E]+2],S[C+6]=P[T[L-1]],S[C+7]=P[T[L-1]+1],S[C+8]=P[T[L-1]+2],A[k+6]=A[k+2],A[k+7]=A[k+3],A[k+8]=A[k+4],A[k+9]=A[k+5],A[k+10]=w[x[L]],A[k+11]=w[x[L]+1],S[C+9]=S[C+3],S[C+10]=S[C+4],S[C+11]=S[C+5],S[C+12]=S[C+6],S[C+13]=S[C+7],S[C+14]=S[C+8],S[C+15]=P[T[L]],S[C+16]=P[T[L]+1],S[C+17]=P[T[L]+2],k+=12,C+=18;break;case"triangles":for(var F=0,D=x.length;F<D;F++)A[k]=w[x[F]],A[k+1]=w[x[F]+1],S[C]=P[T[F]],S[C+1]=P[T[F]+1],S[C+2]=P[T[F]+2],k+=2,C+=3}}i?v.clearColor(i[0]/255,i[1]/255,i[2]/255,1):v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT);var j=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,j),v.bufferData(v.ARRAY_BUFFER,A,v.STATIC_DRAW),v.enableVertexAttribArray(h.positionLocation),v.vertexAttribPointer(h.positionLocation,2,v.FLOAT,!1,0,0);var M=v.createBuffer();return v.bindBuffer(v.ARRAY_BUFFER,M),v.bufferData(v.ARRAY_BUFFER,S,v.STATIC_DRAW),v.enableVertexAttribArray(h.colorLocation),v.vertexAttribPointer(h.colorLocation,3,v.UNSIGNED_BYTE,!1,0,0),v.uniform2f(h.scaleLocation,c.scaleX,c.scaleY),v.uniform2f(h.offsetLocation,c.offsetX,c.offsetY),v.drawArrays(v.TRIANGLES,0,_),v.flush(),v.deleteBuffer(j),v.deleteBuffer(M),d},clear:function(){d&&d.canvas&&(d.canvas.width=0,d.canvas.height=0),m&&m.canvas&&(m.canvas.width=0,m.canvas.height=0),d=null,m=null}}}();t.WebGLUtils=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=r(122);var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,i.assert)("string"==typeof t,"Metadata: input is not a string"),t=this._repair(t);var r=(new a.SimpleXMLParser).parseFromString(t);this._metadata=Object.create(null),r&&this._parse(r)}return n(e,[{key:"_repair",value:function(e){return e.replace(/>\\376\\377([^<]+)/g,function(e,t){for(var r=t.replace(/\\([0-3])([0-7])([0-7])/g,function(e,t,r,n){return String.fromCharCode(64*t+8*r+1*n)}),n="",i=0,a=r.length;i<a;i+=2){var o=256*r.charCodeAt(i)+r.charCodeAt(i+1);n+=o>=32&&o<127&&60!==o&&62!==o&&38!==o?String.fromCharCode(o):"&#x"+(65536+o).toString(16).substring(1)+";"}return">"+n})}},{key:"_parse",value:function(e){var t=e.documentElement;if("rdf:rdf"!==t.nodeName.toLowerCase())for(t=t.firstChild;t&&"rdf:rdf"!==t.nodeName.toLowerCase();)t=t.nextSibling;var r=t?t.nodeName.toLowerCase():null;if(t&&"rdf:rdf"===r&&t.hasChildNodes())for(var n=t.childNodes,i=0,a=n.length;i<a;i++){var o=n[i];if("rdf:description"===o.nodeName.toLowerCase())for(var s=0,l=o.childNodes.length;s<l;s++)if("#text"!==o.childNodes[s].nodeName.toLowerCase()){var u=o.childNodes[s],c=u.nodeName.toLowerCase();this._metadata[c]=u.textContent.trim()}}}},{key:"get",value:function(e){return this._metadata[e]||null}},{key:"getAll",value:function(){return this._metadata}},{key:"has",value:function(e){return void 0!==this._metadata[e]}},{key:"metadata",get:function(){return(0,i.deprecated)("`metadata` getter; use `getAll()` instead."),this.getAll()}}]),e}();t.Metadata=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(15),a=r(0);function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(){l(this,e)}return n(e,null,[{key:"create",value:function(e){switch(e.data.annotationType){case a.AnnotationType.LINK:return new h(e);case a.AnnotationType.TEXT:return new d(e);case a.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new p(e);case"Btn":if(e.data.radioButton)return new v(e);if(e.data.checkBox)return new m(e);(0,a.warn)("Unimplemented button widget annotation: pushbutton");break;case"Ch":return new g(e)}return new f(e);case a.AnnotationType.POPUP:return new b(e);case a.AnnotationType.LINE:return new _(e);case a.AnnotationType.SQUARE:return new A(e);case a.AnnotationType.CIRCLE:return new S(e);case a.AnnotationType.POLYLINE:return new w(e);case a.AnnotationType.POLYGON:return new P(e);case a.AnnotationType.HIGHLIGHT:return new k(e);case a.AnnotationType.UNDERLINE:return new C(e);case a.AnnotationType.SQUIGGLY:return new R(e);case a.AnnotationType.STRIKEOUT:return new x(e);case a.AnnotationType.STAMP:return new T(e);case a.AnnotationType.FILEATTACHMENT:return new E(e);default:return new c(e)}}}]),e}(),c=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,e),this.isRenderable=r,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderInteractiveForms=t.renderInteractiveForms,this.svgFactory=t.svgFactory,r&&(this.container=this._createContainer(n))}return n(e,[{key:"_createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,n=this.viewport,o=document.createElement("section"),s=t.rect[2]-t.rect[0],l=t.rect[3]-t.rect[1];o.setAttribute("data-annotation-id",t.id);var u=a.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]]);if(i.CustomStyle.setProp("transform",o,"matrix("+n.transform.join(",")+")"),i.CustomStyle.setProp("transformOrigin",o,-u[0]+"px "+-u[1]+"px"),!e&&t.borderStyle.width>0){o.style.borderWidth=t.borderStyle.width+"px",t.borderStyle.style!==a.AnnotationBorderStyleType.UNDERLINE&&(s-=2*t.borderStyle.width,l-=2*t.borderStyle.width);var c=t.borderStyle.horizontalCornerRadius,h=t.borderStyle.verticalCornerRadius;if(c>0||h>0){var d=c+"px / "+h+"px";i.CustomStyle.setProp("borderRadius",o,d)}switch(t.borderStyle.style){case a.AnnotationBorderStyleType.SOLID:o.style.borderStyle="solid";break;case a.AnnotationBorderStyleType.DASHED:o.style.borderStyle="dashed";break;case a.AnnotationBorderStyleType.BEVELED:(0,a.warn)("Unimplemented border style: beveled");break;case a.AnnotationBorderStyleType.INSET:(0,a.warn)("Unimplemented border style: inset");break;case a.AnnotationBorderStyleType.UNDERLINE:o.style.borderBottomStyle="solid"}t.color?o.style.borderColor=a.Util.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):o.style.borderWidth=0}return o.style.left=u[0]+"px",o.style.top=u[1]+"px",o.style.width=s+"px",o.style.height=l+"px",o}},{key:"_createPopup",value:function(e,t,r){t||((t=document.createElement("div")).style.height=e.style.height,t.style.width=e.style.width,e.appendChild(t));var n=new y({container:e,trigger:t,color:r.color,title:r.title,contents:r.contents,hideWrapper:!0}).render();n.style.left=e.style.width,e.appendChild(n)}},{key:"render",value:function(){throw new Error("Abstract method `AnnotationElement.render` called")}}]),e}(),h=function(e){function t(e){l(this,t);var r=!!(e.data.url||e.data.dest||e.data.action);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,c),n(t,[{key:"render",value:function(){this.container.className="linkAnnotation";var e=document.createElement("a");return(0,i.addLinkAttributes)(e,{url:this.data.url,target:this.data.newWindow?i.LinkTarget.BLANK:void 0}),this.data.url||(this.data.action?this._bindNamedAction(e,this.data.action):this._bindLink(e,this.data.dest)),this.container.appendChild(e),this.container}},{key:"_bindLink",value:function(e,t){var r=this;e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.navigateTo(t),!1},t&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function(e,t){var r=this;e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}}]),t}(),d=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,c),n(t,[{key:"render",value:function(){this.container.className="textAnnotation";var e=document.createElement("img");return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}}]),t}(),f=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,c),n(t,[{key:"render",value:function(){return this.container}}]),t}(),p=function(e){function t(e){l(this,t);var r=e.renderInteractiveForms||!e.data.hasAppearance&&!!e.data.fieldValue;return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,f),n(t,[{key:"render",value:function(){this.container.className="textWidgetAnnotation";var e=null;if(this.renderInteractiveForms){if(this.data.multiLine?(e=document.createElement("textarea")).textContent=this.data.fieldValue:((e=document.createElement("input")).type="text",e.setAttribute("value",this.data.fieldValue)),e.disabled=this.data.readOnly,null!==this.data.maxLen&&(e.maxLength=this.data.maxLen),this.data.comb){var t=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen;e.classList.add("comb"),e.style.letterSpacing="calc("+t+"px - 1ch)"}}else{(e=document.createElement("div")).textContent=this.data.fieldValue,e.style.verticalAlign="middle",e.style.display="table-cell";var r=null;this.data.fontRefName&&(r=this.page.commonObjs.getData(this.data.fontRefName)),this._setTextStyle(e,r)}return null!==this.data.textAlignment&&(e.style.textAlign=["left","center","right"][this.data.textAlignment]),this.container.appendChild(e),this.container}},{key:"_setTextStyle",value:function(e,t){var r=e.style;if(r.fontSize=this.data.fontSize+"px",r.direction=this.data.fontDirection<0?"rtl":"ltr",t){r.fontWeight=t.black?t.bold?"900":"bold":t.bold?"bold":"normal",r.fontStyle=t.italic?"italic":"normal";var n=t.loadedName?'"'+t.loadedName+'", ':"",i=t.fallbackName||"Helvetica, sans-serif";r.fontFamily=n+i}}}]),t}(),m=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,e.renderInteractiveForms))}return s(t,f),n(t,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation checkBox";var e=document.createElement("input");return e.disabled=this.data.readOnly,e.type="checkbox",this.data.fieldValue&&"Off"!==this.data.fieldValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}]),t}(),v=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,e.renderInteractiveForms))}return s(t,f),n(t,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation radioButton";var e=document.createElement("input");return e.disabled=this.data.readOnly,e.type="radio",e.name=this.data.fieldName,this.data.fieldValue===this.data.buttonValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}]),t}(),g=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,e.renderInteractiveForms))}return s(t,f),n(t,[{key:"render",value:function(){this.container.className="choiceWidgetAnnotation";var e=document.createElement("select");e.disabled=this.data.readOnly,this.data.combo||(e.size=this.data.options.length,this.data.multiSelect&&(e.multiple=!0));for(var t=0,r=this.data.options.length;t<r;t++){var n=this.data.options[t],i=document.createElement("option");i.textContent=n.displayValue,i.value=n.exportValue,this.data.fieldValue.indexOf(n.displayValue)>=0&&i.setAttribute("selected",!0),e.appendChild(i)}return this.container.appendChild(e),this.container}}]),t}(),b=function(e){function t(e){l(this,t);var r=!(!e.data.title&&!e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,c),n(t,[{key:"render",value:function(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon"].indexOf(this.data.parentType)>=0)return this.container;var e='[data-annotation-id="'+this.data.parentId+'"]',t=this.layer.querySelector(e);if(!t)return this.container;var r=new y({container:this.container,trigger:t,color:this.data.color,title:this.data.title,contents:this.data.contents}),n=parseFloat(t.style.left),a=parseFloat(t.style.width);return i.CustomStyle.setProp("transformOrigin",this.container,-(n+a)+"px -"+t.style.top),this.container.style.left=n+a+"px",this.container.appendChild(r.render()),this.container}}]),t}(),y=function(){function e(t){l(this,e),this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.title=t.title,this.contents=t.contents,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return n(e,[{key:"render",value:function(){var e=document.createElement("div");e.className="popupWrapper",this.hideElement=this.hideWrapper?e:this.container,this.hideElement.setAttribute("hidden",!0);var t=document.createElement("div");t.className="popup";var r=this.color;if(r){var n=.7*(255-r[0])+r[0],i=.7*(255-r[1])+r[1],o=.7*(255-r[2])+r[2];t.style.backgroundColor=a.Util.makeCssRgb(0|n,0|i,0|o)}var s=this._formatContents(this.contents),l=document.createElement("h1");return l.textContent=this.title,this.trigger.addEventListener("click",this._toggle.bind(this)),this.trigger.addEventListener("mouseover",this._show.bind(this,!1)),this.trigger.addEventListener("mouseout",this._hide.bind(this,!1)),t.addEventListener("click",this._hide.bind(this,!0)),t.appendChild(l),t.appendChild(s),e.appendChild(t),e}},{key:"_formatContents",value:function(e){for(var t=document.createElement("p"),r=e.split(/(?:\r\n?|\n)/),n=0,i=r.length;n<i;++n){var a=r[n];t.appendChild(document.createTextNode(a)),n<i-1&&t.appendChild(document.createElement("br"))}return t}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)}},{key:"_hide",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}}]),e}(),_=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){this.container.className="lineAnnotation";var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=this.svgFactory.createElement("svg:line");return i.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),i.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),i.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),i.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),i.setAttribute("stroke-width",e.borderStyle.width),i.setAttribute("stroke","transparent"),n.appendChild(i),this.container.append(n),this._createPopup(this.container,i,e),this.container}}]),t}(),A=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){this.container.className="squareAnnotation";var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:rect");return a.setAttribute("x",i/2),a.setAttribute("y",i/2),a.setAttribute("width",t-i),a.setAttribute("height",r-i),a.setAttribute("stroke-width",i),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),t}(),S=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){this.container.className="circleAnnotation";var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:ellipse");return a.setAttribute("cx",t/2),a.setAttribute("cy",r/2),a.setAttribute("rx",t/2-i/2),a.setAttribute("ry",r/2-i/2),a.setAttribute("stroke-width",i),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),t}(),w=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents),n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0));return n.containerClassName="polylineAnnotation",n.svgElementName="svg:polyline",n}return s(t,c),n(t,[{key:"render",value:function(){this.container.className=this.containerClassName;for(var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.vertices,a=[],o=0,s=i.length;o<s;o++){var l=i[o].x-e.rect[0],u=e.rect[3]-i[o].y;a.push(l+","+u)}a=a.join(" ");var c=e.borderStyle.width,h=this.svgFactory.createElement(this.svgElementName);return h.setAttribute("points",a),h.setAttribute("stroke-width",c),h.setAttribute("stroke","transparent"),h.setAttribute("fill","none"),n.appendChild(h),this.container.append(n),this._createPopup(this.container,h,e),this.container}}]),t}(),P=function(e){function t(e){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.containerClassName="polygonAnnotation",r.svgElementName="svg:polygon",r}return s(t,w),t}(),k=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){return this.container.className="highlightAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(),C=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){return this.container.className="underlineAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(),R=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){return this.container.className="squigglyAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(),x=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){return this.container.className="strikeoutAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(),T=function(e){function t(e){l(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,!0))}return s(t,c),n(t,[{key:"render",value:function(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(),E=function(e){function t(e){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,!0)),n=r.data.file;return r.filename=(0,i.getFilenameFromUrl)(n.filename),r.content=n.content,r.linkService.onFileAttachmentAnnotation({id:(0,a.stringToPDFString)(n.filename),filename:n.filename,content:n.content}),r}return s(t,c),n(t,[{key:"render",value:function(){this.container.className="fileAttachmentAnnotation";var e=document.createElement("div");return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}},{key:"_download",value:function(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,a.warn)("Download cannot be started due to unavailable download manager")}}]),t}(),O=function(){function e(){l(this,e)}return n(e,null,[{key:"render",value:function(e){for(var t=0,r=e.annotations.length;t<r;t++){var n=e.annotations[t];if(n){var a=u.create({data:n,layer:e.div,page:e.page,viewport:e.viewport,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||(0,i.getDefaultSetting)("imageResourcesPath"),renderInteractiveForms:e.renderInteractiveForms||!1,svgFactory:new i.DOMSVGFactory});a.isRenderable&&e.div.appendChild(a.render())}}}},{key:"update",value:function(e){for(var t=0,r=e.annotations.length;t<r;t++){var n=e.annotations[t],a=e.div.querySelector('[data-annotation-id="'+n.id+'"]');a&&i.CustomStyle.setProp("transform",a,"matrix("+e.viewport.transform.join(",")+")")}e.div.removeAttribute("hidden")}}]),e}();t.AnnotationLayer=O},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=void 0;var n=r(0),i=r(15),a=function(){var e=1e5,t=/\S/;var r=["left: ",0,"px; top: ",0,"px; font-size: ",0,"px; font-family: ","",";"];function a(e,a,o){var s,l=document.createElement("div"),u={style:null,angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1};if(e._textDivs.push(l),s=a.str,!t.test(s))return u.isWhitespace=!0,void e._textDivProperties.set(l,u);var c=n.Util.transform(e._viewport.transform,a.transform),h=Math.atan2(c[1],c[0]),d=o[a.fontName];d.vertical&&(h+=Math.PI/2);var f,p,m=Math.sqrt(c[2]*c[2]+c[3]*c[3]),v=m;if(d.ascent?v=d.ascent*v:d.descent&&(v=(1+d.descent)*v),0===h?(f=c[4],p=c[5]-v):(f=c[4]+v*Math.sin(h),p=c[5]-v*Math.cos(h)),r[1]=f,r[3]=p,r[5]=m,r[7]=d.fontFamily,u.style=r.join(""),l.setAttribute("style",u.style),l.textContent=a.str,(0,i.getDefaultSetting)("pdfBug")&&(l.dataset.fontName=a.fontName),0!==h&&(u.angle=h*(180/Math.PI)),a.str.length>1&&(d.vertical?u.canvasWidth=a.height*e._viewport.scale:u.canvasWidth=a.width*e._viewport.scale),e._textDivProperties.set(l,u),e._textContentStream&&e._layoutText(l),e._enhanceTextSelection){var g=1,b=0;0!==h&&(g=Math.cos(h),b=Math.sin(h));var y,_,A=(d.vertical?a.height:a.width)*e._viewport.scale,S=m;0!==h?(y=[g,b,-b,g,f,p],_=n.Util.getAxialAlignedBoundingBox([0,0,A,S],y)):_=[f,p,f+A,p+S],e._bounds.push({left:_[0],top:_[1],right:_[2],bottom:_[3],div:l,size:[A,S],m:y})}}function o(t){if(!t._canceled){var r=t._textDivs,n=t._capability,i=r.length;if(i>e)return t._renderingDone=!0,void n.resolve();if(!t._textContentStream)for(var a=0;a<i;a++)t._layoutText(r[a]);t._renderingDone=!0,n.resolve()}}function s(e){for(var t=e._bounds,r=e._viewport,i=function(e,t,r){var n=r.map(function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}});l(e,n);var i=new Array(r.length);return n.forEach(function(e){var t=e.index;i[t]={left:e.x1New,top:0,right:e.x2New,bottom:0}}),r.map(function(t,r){var a=i[r],o=n[r];o.x1=t.top,o.y1=e-a.right,o.x2=t.bottom,o.y2=e-a.left,o.index=r,o.x1New=void 0,o.x2New=void 0}),l(t,n),n.forEach(function(e){var t=e.index;i[t].top=e.x1New,i[t].bottom=e.x2New}),i}(r.width,r.height,t),a=0;a<i.length;a++){var o=t[a].div,s=e._textDivProperties.get(o);if(0!==s.angle){var u=i[a],c=t[a],h=c.m,d=h[0],f=h[1],p=[[0,0],[0,c.size[1]],[c.size[0],0],c.size],m=new Float64Array(64);p.forEach(function(e,t){var r=n.Util.applyTransform(e,h);m[t+0]=d&&(u.left-r[0])/d,m[t+4]=f&&(u.top-r[1])/f,m[t+8]=d&&(u.right-r[0])/d,m[t+12]=f&&(u.bottom-r[1])/f,m[t+16]=f&&(u.left-r[0])/-f,m[t+20]=d&&(u.top-r[1])/d,m[t+24]=f&&(u.right-r[0])/-f,m[t+28]=d&&(u.bottom-r[1])/d,m[t+32]=d&&(u.left-r[0])/-d,m[t+36]=f&&(u.top-r[1])/-f,m[t+40]=d&&(u.right-r[0])/-d,m[t+44]=f&&(u.bottom-r[1])/-f,m[t+48]=f&&(u.left-r[0])/f,m[t+52]=d&&(u.top-r[1])/-d,m[t+56]=f&&(u.right-r[0])/f,m[t+60]=d&&(u.bottom-r[1])/-d});var v=function(e,t,r){for(var n=0,i=0;i<r;i++){var a=e[t++];a>0&&(n=n?Math.min(a,n):a)}return n},g=1+Math.min(Math.abs(d),Math.abs(f));s.paddingLeft=v(m,32,16)/g,s.paddingTop=v(m,48,16)/g,s.paddingRight=v(m,0,16)/g,s.paddingBottom=v(m,16,16)/g,e._textDivProperties.set(o,s)}else s.paddingLeft=t[a].left-i[a].left,s.paddingTop=t[a].top-i[a].top,s.paddingRight=i[a].right-t[a].right,s.paddingBottom=i[a].bottom-t[a].bottom,e._textDivProperties.set(o,s)}}function l(e,t){t.sort(function(e,t){return e.x1-t.x1||e.index-t.index});var r=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}];t.forEach(function(e){for(var t=0;t<r.length&&r[t].end<=e.y1;)t++;for(var n,i,a=r.length-1;a>=0&&r[a].start>=e.y2;)a--;var o,s,l=-1/0;for(o=t;o<=a;o++){var u;(u=(i=(n=r[o]).boundary).x2>e.x1?i.index>e.index?i.x1New:e.x1:void 0===i.x2New?(i.x2+e.x1)/2:i.x2New)>l&&(l=u)}for(e.x1New=l,o=t;o<=a;o++)void 0===(i=(n=r[o]).boundary).x2New?i.x2>e.x1?i.index>e.index&&(i.x2New=i.x2):i.x2New=l:i.x2New>l&&(i.x2New=Math.max(l,i.x2));var c=[],h=null;for(o=t;o<=a;o++){var d=(i=(n=r[o]).boundary).x2>e.x2?i:e;h===d?c[c.length-1].end=n.end:(c.push({start:n.start,end:n.end,boundary:d}),h=d)}for(r[t].start<e.y1&&(c[0].start=e.y1,c.unshift({start:r[t].start,end:e.y1,boundary:r[t].boundary})),e.y2<r[a].end&&(c[c.length-1].end=e.y2,c.push({start:e.y2,end:r[a].end,boundary:r[a].boundary})),o=t;o<=a;o++)if(void 0===(i=(n=r[o]).boundary).x2New){var f=!1;for(s=t-1;!f&&s>=0&&r[s].start>=i.y1;s--)f=r[s].boundary===i;for(s=a+1;!f&&s<r.length&&r[s].end<=i.y2;s++)f=r[s].boundary===i;for(s=0;!f&&s<c.length;s++)f=c[s].boundary===i;f||(i.x2New=l)}Array.prototype.splice.apply(r,[t,a-t+1].concat(c))}),r.forEach(function(t){var r=t.boundary;void 0===r.x2New&&(r.x2New=Math.max(e,r.x2))})}function u(e){var t=e.textContent,r=e.textContentStream,i=e.container,a=e.viewport,o=e.textDivs,s=e.textContentItemsStr,l=e.enhanceTextSelection;this._textContent=t,this._textContentStream=r,this._container=i,this._viewport=a,this._textDivs=o||[],this._textContentItemsStr=s||[],this._enhanceTextSelection=!!l,this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[]}return u.prototype={get promise(){return this._capability.promise},cancel:function(){this._reader&&(this._reader.cancel(new n.AbortException("text layer task cancelled")),this._reader=null),this._canceled=!0,null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject("canceled")},_processItems:function(e,t){for(var r=0,n=e.length;r<n;r++)this._textContentItemsStr.push(e[r].str),a(this,e[r],t)},_layoutText:function(e){var t=this._container,r=this._textDivProperties.get(e);if(!r.isWhitespace){var n=e.style.fontSize,a=e.style.fontFamily;n===this._layoutTextLastFontSize&&a===this._layoutTextLastFontFamily||(this._layoutTextCtx.font=n+" "+a,this._lastFontSize=n,this._lastFontFamily=a);var o=this._layoutTextCtx.measureText(e.textContent).width,s="";0!==r.canvasWidth&&o>0&&(r.scale=r.canvasWidth/o,s="scaleX("+r.scale+")"),0!==r.angle&&(s="rotate("+r.angle+"deg) "+s),""!==s&&(r.originalTransform=s,i.CustomStyle.setProp("transform",e,s)),this._textDivProperties.set(e,r),t.appendChild(e)}},_render:function(e){var t=this,r=(0,n.createPromiseCapability)(),i=Object.create(null),a=document.createElement("canvas");if(a.mozOpaque=!0,this._layoutTextCtx=a.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,l=this._textContent.styles;this._processItems(s,l),r.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');this._reader=this._textContentStream.getReader(),function e(){t._reader.read().then(function(a){var o=a.value;a.done?r.resolve():(n.Util.extendObj(i,o.styles),t._processItems(o.items,i),e())},r.reject)}()}r.promise.then(function(){i=null,e?t._renderTimer=setTimeout(function(){o(t),t._renderTimer=null},e):o(t)},this._capability.reject)},expandTextDivs:function(e){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(s(this),this._bounds=null);for(var t=0,r=this._textDivs.length;t<r;t++){var n=this._textDivs[t],a=this._textDivProperties.get(n);if(!a.isWhitespace)if(e){var o="",l="";1!==a.scale&&(o="scaleX("+a.scale+")"),0!==a.angle&&(o="rotate("+a.angle+"deg) "+o),0!==a.paddingLeft&&(l+=" padding-left: "+a.paddingLeft/a.scale+"px;",o+=" translateX("+-a.paddingLeft/a.scale+"px)"),0!==a.paddingTop&&(l+=" padding-top: "+a.paddingTop+"px;",o+=" translateY("+-a.paddingTop+"px)"),0!==a.paddingRight&&(l+=" padding-right: "+a.paddingRight/a.scale+"px;"),0!==a.paddingBottom&&(l+=" padding-bottom: "+a.paddingBottom+"px;"),""!==l&&n.setAttribute("style",a.style+l),""!==o&&i.CustomStyle.setProp("transform",n,o)}else n.style.padding=0,i.CustomStyle.setProp("transform",n,a.originalTransform||"")}}}},function(e){var t=new u({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection});return t._render(e.timeout),t}}();t.renderTextLayer=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0;var n,i=r(0),a=r(15),o={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},s=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=12,r=new Int32Array(256),n=0;n<256;n++){for(var a=n,o=0;o<8;o++)a=1&a?3988292384^a>>1&2147483647:a>>1&2147483647;r[n]=a}function s(e,t,n,i){var a=i,o=t.length;n[a]=o>>24&255,n[a+1]=o>>16&255,n[a+2]=o>>8&255,n[a+3]=255&o,n[a+=4]=255&e.charCodeAt(0),n[a+1]=255&e.charCodeAt(1),n[a+2]=255&e.charCodeAt(2),n[a+3]=255&e.charCodeAt(3),a+=4,n.set(t,a);var s=function(e,t,n){for(var i=-1,a=t;a<n;a++){var o=255&(i^e[a]);i=i>>>8^r[o]}return-1^i}(n,i+4,a+=t.length);n[a]=s>>24&255,n[a+1]=s>>16&255,n[a+2]=s>>8&255,n[a+3]=255&s}function l(e){var t=e.length,r=Math.ceil(t/65535),n=new Uint8Array(2+t+5*r+4),i=0;n[i++]=120,n[i++]=156;for(var a=0;t>65535;)n[i++]=0,n[i++]=255,n[i++]=255,n[i++]=0,n[i++]=0,n.set(e.subarray(a,a+65535),i),i+=65535,a+=65535,t-=65535;n[i++]=1,n[i++]=255&t,n[i++]=t>>8&255,n[i++]=255&~t,n[i++]=(65535&~t)>>8&255,n.set(e.subarray(a),i),i+=e.length-a;var o=function(e,t,r){for(var n=1,i=0,a=t;a<r;++a)i=(i+(n=(n+(255&e[a]))%65521))%65521;return i<<16|n}(e,0,e.length);return n[i++]=o>>24&255,n[i++]=o>>16&255,n[i++]=o>>8&255,n[i++]=255&o,n}function u(r,n,a){var o,u,c,h=r.width,d=r.height,f=r.data;switch(n){case i.ImageKind.GRAYSCALE_1BPP:u=0,o=1,c=h+7>>3;break;case i.ImageKind.RGB_24BPP:u=2,o=8,c=3*h;break;case i.ImageKind.RGBA_32BPP:u=6,o=8,c=4*h;break;default:throw new Error("invalid format")}var p,m,v=new Uint8Array((1+c)*d),g=0,b=0;for(p=0;p<d;++p)v[g++]=0,v.set(f.subarray(b,b+c),g),b+=c,g+=c;if(n===i.ImageKind.GRAYSCALE_1BPP)for(g=0,p=0;p<d;p++)for(g++,m=0;m<c;m++)v[g++]^=255;var y=new Uint8Array([h>>24&255,h>>16&255,h>>8&255,255&h,d>>24&255,d>>16&255,d>>8&255,255&d,o,u,0,0,0]),_=function(e){if(!(0,i.isNodeJS)())return l(e);try{var t;t=parseInt(process.versions.node)>=8?e:new Buffer(e);var r=require("zlib").deflateSync(t,{level:9});return r instanceof Uint8Array?r:new Uint8Array(r)}catch(e){(0,i.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e)}return l(e)}(v),A=e.length+3*t+y.length+_.length,S=new Uint8Array(A),w=0;return S.set(e,w),s("IHDR",y,S,w+=e.length),s("IDATA",_,S,w+=t+y.length),w+=t+_.length,s("IEND",new Uint8Array(0),S,w),(0,i.createObjectURL)(S,"image/png",a)}return function(e,t){return u(e,void 0===e.kind?i.ImageKind.GRAYSCALE_1BPP:e.kind,t)}}(),l=function(){function e(){this.fontSizeScale=1,this.fontWeight=o.fontWeight,this.fontSize=0,this.textMatrix=i.IDENTITY_MATRIX,this.fontMatrix=i.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=o.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null,this.maskId=""}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}();t.SVGGraphics=n=function(){function e(e){if(Number.isInteger(e))return e.toString();var t=e.toFixed(10),r=t.length-1;if("0"!==t[r])return t;do{r--}while("0"===t[r]);return t.substr(0,"."===t[r]?r:r+1)}function t(t){if(0===t[4]&&0===t[5]){if(0===t[1]&&0===t[2])return 1===t[0]&&1===t[3]?"":"scale("+e(t[0])+" "+e(t[3])+")";if(t[0]===t[3]&&t[1]===-t[2])return"rotate("+e(180*Math.acos(t[0])/Math.PI)+")"}else if(1===t[0]&&0===t[1]&&0===t[2]&&1===t[3])return"translate("+e(t[4])+" "+e(t[5])+")";return"matrix("+e(t[0])+" "+e(t[1])+" "+e(t[2])+" "+e(t[3])+" "+e(t[4])+" "+e(t[5])+")"}function r(e,t,r){this.svgFactory=new a.DOMSVGFactory,this.current=new l,this.transformMatrix=i.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=e,this.objs=t,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!r}var n="http://www.w3.org/1999/xlink",u=["butt","round","square"],c=["miter","round","bevel"],h=0,d=0;return r.prototype={save:function(){this.transformStack.push(this.transformMatrix);var e=this.current;this.extraStack.push(e),this.current=e.clone()},restore:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null},group:function(e){this.save(),this.executeOpTree(e),this.restore()},loadDependencies:function(e){for(var t=this,r=e.fnArray,n=r.length,a=e.argsArray,o=0;o<n;o++)if(i.OPS.dependency===r[o])for(var s=a[o],l=0,u=s.length;l<u;l++){var c,h=s[l];c="g_"===h.substring(0,2)?new Promise(function(e){t.commonObjs.get(h,e)}):new Promise(function(e){t.objs.get(h,e)}),this.current.dependencies.push(c)}return Promise.all(this.current.dependencies)},transform:function(e,t,r,n,a,o){var s=[e,t,r,n,a,o];this.transformMatrix=i.Util.transform(this.transformMatrix,s),this.tgrp=null},getSVG:function(e,t){var r=this;this.viewport=t;var n=this._initialize(t);return this.loadDependencies(e).then(function(){r.transformMatrix=i.IDENTITY_MATRIX;var t=r.convertOpList(e);return r.executeOpTree(t),n})},convertOpList:function(e){var t=e.argsArray,r=e.fnArray,n=r.length,a=[],o=[];for(var s in i.OPS)a[i.OPS[s]]=s;for(var l=0;l<n;l++){var u=r[l];o.push({fnId:u,fn:a[u],args:t[l]})}return function(e){for(var t=[],r=[],n=e.length,i=0;i<n;i++)"save"!==e[i].fn?"restore"===e[i].fn?t=r.pop():t.push(e[i]):(t.push({fnId:92,fn:"group",items:[]}),r.push(t),t=t[t.length-1].items);return t}(o)},executeOpTree:function(e){for(var t=e.length,r=0;r<t;r++){var n=e[r].fn,a=e[r].fnId,o=e[r].args;switch(0|a){case i.OPS.beginText:this.beginText();break;case i.OPS.setLeading:this.setLeading(o);break;case i.OPS.setLeadingMoveText:this.setLeadingMoveText(o[0],o[1]);break;case i.OPS.setFont:this.setFont(o);break;case i.OPS.showText:case i.OPS.showSpacedText:this.showText(o[0]);break;case i.OPS.endText:this.endText();break;case i.OPS.moveText:this.moveText(o[0],o[1]);break;case i.OPS.setCharSpacing:this.setCharSpacing(o[0]);break;case i.OPS.setWordSpacing:this.setWordSpacing(o[0]);break;case i.OPS.setHScale:this.setHScale(o[0]);break;case i.OPS.setTextMatrix:this.setTextMatrix(o[0],o[1],o[2],o[3],o[4],o[5]);break;case i.OPS.setTextRise:this.setTextRise(o[0]);break;case i.OPS.setLineWidth:this.setLineWidth(o[0]);break;case i.OPS.setLineJoin:this.setLineJoin(o[0]);break;case i.OPS.setLineCap:this.setLineCap(o[0]);break;case i.OPS.setMiterLimit:this.setMiterLimit(o[0]);break;case i.OPS.setFillRGBColor:this.setFillRGBColor(o[0],o[1],o[2]);break;case i.OPS.setStrokeRGBColor:this.setStrokeRGBColor(o[0],o[1],o[2]);break;case i.OPS.setDash:this.setDash(o[0],o[1]);break;case i.OPS.setGState:this.setGState(o[0]);break;case i.OPS.fill:this.fill();break;case i.OPS.eoFill:this.eoFill();break;case i.OPS.stroke:this.stroke();break;case i.OPS.fillStroke:this.fillStroke();break;case i.OPS.eoFillStroke:this.eoFillStroke();break;case i.OPS.clip:this.clip("nonzero");break;case i.OPS.eoClip:this.clip("evenodd");break;case i.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case i.OPS.paintJpegXObject:this.paintJpegXObject(o[0],o[1],o[2]);break;case i.OPS.paintImageXObject:this.paintImageXObject(o[0]);break;case i.OPS.paintInlineImageXObject:this.paintInlineImageXObject(o[0]);break;case i.OPS.paintImageMaskXObject:this.paintImageMaskXObject(o[0]);break;case i.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(o[0],o[1]);break;case i.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case i.OPS.closePath:this.closePath();break;case i.OPS.closeStroke:this.closeStroke();break;case i.OPS.closeFillStroke:this.closeFillStroke();break;case i.OPS.nextLine:this.nextLine();break;case i.OPS.transform:this.transform(o[0],o[1],o[2],o[3],o[4],o[5]);break;case i.OPS.constructPath:this.constructPath(o[0],o[1]);break;case i.OPS.endPath:this.endPath();break;case 92:this.group(e[r].items);break;default:(0,i.warn)("Unimplemented operator "+n)}}},setWordSpacing:function(e){this.current.wordSpacing=e},setCharSpacing:function(e){this.current.charSpacing=e},nextLine:function(){this.moveText(0,this.current.leading)},setTextMatrix:function(t,r,n,i,a,o){var s=this.current;this.current.textMatrix=this.current.lineMatrix=[t,r,n,i,a,o],this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,s.xcoords=[],s.tspan=this.svgFactory.createElement("svg:tspan"),s.tspan.setAttributeNS(null,"font-family",s.fontFamily),s.tspan.setAttributeNS(null,"font-size",e(s.fontSize)+"px"),s.tspan.setAttributeNS(null,"y",e(-s.y)),s.txtElement=this.svgFactory.createElement("svg:text"),s.txtElement.appendChild(s.tspan)},beginText:function(){this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,this.current.textMatrix=i.IDENTITY_MATRIX,this.current.lineMatrix=i.IDENTITY_MATRIX,this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.txtElement=this.svgFactory.createElement("svg:text"),this.current.txtgrp=this.svgFactory.createElement("svg:g"),this.current.xcoords=[]},moveText:function(t,r){var n=this.current;this.current.x=this.current.lineX+=t,this.current.y=this.current.lineY+=r,n.xcoords=[],n.tspan=this.svgFactory.createElement("svg:tspan"),n.tspan.setAttributeNS(null,"font-family",n.fontFamily),n.tspan.setAttributeNS(null,"font-size",e(n.fontSize)+"px"),n.tspan.setAttributeNS(null,"y",e(-n.y))},showText:function(r){var n=this.current,a=n.font,s=n.fontSize;if(0!==s){var l,u=n.charSpacing,c=n.wordSpacing,h=n.fontDirection,d=n.textHScale*h,f=r.length,p=a.vertical,m=s*n.fontMatrix[0],v=0;for(l=0;l<f;++l){var g=r[l];if(null!==g)if((0,i.isNum)(g))v+=-g*s*.001;else{var b=g.width,y=g.fontChar,_=b*m+((g.isSpace?c:0)+u)*h;g.isInFont||a.missingFile?(n.xcoords.push(n.x+v*d),n.tspan.textContent+=y,v+=_):v+=_}else v+=h*c}p?n.y-=v*d:n.x+=v*d,n.tspan.setAttributeNS(null,"x",n.xcoords.map(e).join(" ")),n.tspan.setAttributeNS(null,"y",e(-n.y)),n.tspan.setAttributeNS(null,"font-family",n.fontFamily),n.tspan.setAttributeNS(null,"font-size",e(n.fontSize)+"px"),n.fontStyle!==o.fontStyle&&n.tspan.setAttributeNS(null,"font-style",n.fontStyle),n.fontWeight!==o.fontWeight&&n.tspan.setAttributeNS(null,"font-weight",n.fontWeight),n.fillColor!==o.fillColor&&n.tspan.setAttributeNS(null,"fill",n.fillColor);var A=n.textMatrix;0!==n.textRise&&((A=A.slice())[5]+=n.textRise),n.txtElement.setAttributeNS(null,"transform",t(A)+" scale(1, -1)"),n.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.txtElement.appendChild(n.tspan),n.txtgrp.appendChild(n.txtElement),this._ensureTransformGroup().appendChild(n.txtElement)}},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},addFontStyle:function(e){this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle));var t=(0,i.createObjectURL)(e.data,e.mimetype,this.forceDataSchema);this.cssStyle.textContent+='@font-face { font-family: "'+e.loadedName+'"; src: url('+t+"); }\n"},setFont:function(t){var r=this.current,n=this.commonObjs.get(t[0]),a=t[1];this.current.font=n,this.embedFonts&&n.data&&!this.embeddedFonts[n.loadedName]&&(this.addFontStyle(n),this.embeddedFonts[n.loadedName]=n),r.fontMatrix=n.fontMatrix?n.fontMatrix:i.FONT_IDENTITY_MATRIX;var o=n.black?n.bold?"bolder":"bold":n.bold?"bold":"normal",s=n.italic?"italic":"normal";a<0?(a=-a,r.fontDirection=-1):r.fontDirection=1,r.fontSize=a,r.fontFamily=n.loadedName,r.fontWeight=o,r.fontStyle=s,r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"y",e(-r.y)),r.xcoords=[]},endText:function(){},setLineWidth:function(e){this.current.lineWidth=e},setLineCap:function(e){this.current.lineCap=u[e]},setLineJoin:function(e){this.current.lineJoin=c[e]},setMiterLimit:function(e){this.current.miterLimit=e},setStrokeAlpha:function(e){this.current.strokeAlpha=e},setStrokeRGBColor:function(e,t,r){var n=i.Util.makeCssRgb(e,t,r);this.current.strokeColor=n},setFillAlpha:function(e){this.current.fillAlpha=e},setFillRGBColor:function(e,t,r){var n=i.Util.makeCssRgb(e,t,r);this.current.fillColor=n,this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[]},setDash:function(e,t){this.current.dashArray=e,this.current.dashPhase=t},constructPath:function(t,r){var n=this.current,a=n.x,o=n.y;n.path=this.svgFactory.createElement("svg:path");for(var s=[],l=t.length,u=0,c=0;u<l;u++)switch(0|t[u]){case i.OPS.rectangle:a=r[c++],o=r[c++];var h=a+r[c++],d=o+r[c++];s.push("M",e(a),e(o),"L",e(h),e(o),"L",e(h),e(d),"L",e(a),e(d),"Z");break;case i.OPS.moveTo:a=r[c++],o=r[c++],s.push("M",e(a),e(o));break;case i.OPS.lineTo:a=r[c++],o=r[c++],s.push("L",e(a),e(o));break;case i.OPS.curveTo:a=r[c+4],o=r[c+5],s.push("C",e(r[c]),e(r[c+1]),e(r[c+2]),e(r[c+3]),e(a),e(o)),c+=6;break;case i.OPS.curveTo2:a=r[c+2],o=r[c+3],s.push("C",e(a),e(o),e(r[c]),e(r[c+1]),e(r[c+2]),e(r[c+3])),c+=4;break;case i.OPS.curveTo3:a=r[c+2],o=r[c+3],s.push("C",e(r[c]),e(r[c+1]),e(a),e(o),e(a),e(o)),c+=4;break;case i.OPS.closePath:s.push("Z")}n.path.setAttributeNS(null,"d",s.join(" ")),n.path.setAttributeNS(null,"fill","none"),this._ensureTransformGroup().appendChild(n.path),n.element=n.path,n.setCurrentPoint(a,o)},endPath:function(){if(this.pendingClip){var e=this.current,r="clippath"+h;h++;var n=this.svgFactory.createElement("svg:clipPath");n.setAttributeNS(null,"id",r),n.setAttributeNS(null,"transform",t(this.transformMatrix));var i=e.element.cloneNode();"evenodd"===this.pendingClip?i.setAttributeNS(null,"clip-rule","evenodd"):i.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,n.appendChild(i),this.defs.appendChild(n),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach(function(e){e.clipGroup=null})),e.activeClipUrl="url(#"+r+")",this.tgrp=null}},clip:function(e){this.pendingClip=e},closePath:function(){var e=this.current,t=e.path.getAttributeNS(null,"d");t+="Z",e.path.setAttributeNS(null,"d",t)},setLeading:function(e){this.current.leading=-e},setTextRise:function(e){this.current.textRise=e},setHScale:function(e){this.current.textHScale=e/100},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],a=n[0],o=n[1];switch(a){case"LW":this.setLineWidth(o);break;case"LC":this.setLineCap(o);break;case"LJ":this.setLineJoin(o);break;case"ML":this.setMiterLimit(o);break;case"D":this.setDash(o[0],o[1]);break;case"Font":this.setFont(o);break;case"CA":this.setStrokeAlpha(o);break;case"ca":this.setFillAlpha(o);break;default:(0,i.warn)("Unimplemented graphic state "+a)}}},fill:function(){var e=this.current;e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha)},stroke:function(){var t=this.current;t.element.setAttributeNS(null,"stroke",t.strokeColor),t.element.setAttributeNS(null,"stroke-opacity",t.strokeAlpha),t.element.setAttributeNS(null,"stroke-miterlimit",e(t.miterLimit)),t.element.setAttributeNS(null,"stroke-linecap",t.lineCap),t.element.setAttributeNS(null,"stroke-linejoin",t.lineJoin),t.element.setAttributeNS(null,"stroke-width",e(t.lineWidth)+"px"),t.element.setAttributeNS(null,"stroke-dasharray",t.dashArray.map(e).join(" ")),t.element.setAttributeNS(null,"stroke-dashoffset",e(t.dashPhase)+"px"),t.element.setAttributeNS(null,"fill","none")},eoFill:function(){this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()},fillStroke:function(){this.stroke(),this.fill()},eoFillStroke:function(){this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()},closeStroke:function(){this.closePath(),this.stroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},paintSolidColorImageMask:function(){var e=this.current,t=this.svgFactory.createElement("svg:rect");t.setAttributeNS(null,"x","0"),t.setAttributeNS(null,"y","0"),t.setAttributeNS(null,"width","1px"),t.setAttributeNS(null,"height","1px"),t.setAttributeNS(null,"fill",e.fillColor),this._ensureTransformGroup().appendChild(t)},paintJpegXObject:function(t,r,i){var a=this.objs.get(t),o=this.svgFactory.createElement("svg:image");o.setAttributeNS(n,"xlink:href",a.src),o.setAttributeNS(null,"width",e(r)),o.setAttributeNS(null,"height",e(i)),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",e(-i)),o.setAttributeNS(null,"transform","scale("+e(1/r)+" "+e(-1/i)+")"),this._ensureTransformGroup().appendChild(o)},paintImageXObject:function(e){var t=this.objs.get(e);t?this.paintInlineImageXObject(t):(0,i.warn)("Dependent image isn't ready yet")},paintInlineImageXObject:function(t,r){var i=t.width,a=t.height,o=s(t,this.forceDataSchema),l=this.svgFactory.createElement("svg:rect");l.setAttributeNS(null,"x","0"),l.setAttributeNS(null,"y","0"),l.setAttributeNS(null,"width",e(i)),l.setAttributeNS(null,"height",e(a)),this.current.element=l,this.clip("nonzero");var u=this.svgFactory.createElement("svg:image");u.setAttributeNS(n,"xlink:href",o),u.setAttributeNS(null,"x","0"),u.setAttributeNS(null,"y",e(-a)),u.setAttributeNS(null,"width",e(i)+"px"),u.setAttributeNS(null,"height",e(a)+"px"),u.setAttributeNS(null,"transform","scale("+e(1/i)+" "+e(-1/a)+")"),r?r.appendChild(u):this._ensureTransformGroup().appendChild(u)},paintImageMaskXObject:function(t){var r=this.current,n=t.width,i=t.height,a=r.fillColor;r.maskId="mask"+d++;var o=this.svgFactory.createElement("svg:mask");o.setAttributeNS(null,"id",r.maskId);var s=this.svgFactory.createElement("svg:rect");s.setAttributeNS(null,"x","0"),s.setAttributeNS(null,"y","0"),s.setAttributeNS(null,"width",e(n)),s.setAttributeNS(null,"height",e(i)),s.setAttributeNS(null,"fill",a),s.setAttributeNS(null,"mask","url(#"+r.maskId+")"),this.defs.appendChild(o),this._ensureTransformGroup().appendChild(s),this.paintInlineImageXObject(t,o)},paintFormXObjectBegin:function(t,r){if(Array.isArray(t)&&6===t.length&&this.transform(t[0],t[1],t[2],t[3],t[4],t[5]),Array.isArray(r)&&4===r.length){var n=r[2]-r[0],i=r[3]-r[1],a=this.svgFactory.createElement("svg:rect");a.setAttributeNS(null,"x",r[0]),a.setAttributeNS(null,"y",r[1]),a.setAttributeNS(null,"width",e(n)),a.setAttributeNS(null,"height",e(i)),this.current.element=a,this.clip("nonzero"),this.endPath()}},paintFormXObjectEnd:function(){},_initialize:function(e){var r=this.svgFactory.create(e.width,e.height),n=this.svgFactory.createElement("svg:defs");r.appendChild(n),this.defs=n;var i=this.svgFactory.createElement("svg:g");return i.setAttributeNS(null,"transform",t(e.transform)),r.appendChild(i),this.svg=i,r},_ensureClipGroup:function(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g");e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup},_ensureTransformGroup:function(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",t(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}},r}(),t.SVGGraphics=n},function(e,t,r){"use strict";var n=r(0),i=r(118),a=r(69),o=r(73),s=r(72),l=r(15),u=r(74);if(n.isNodeJS()){var c=r(124).PDFNodeStream;a.setPDFNetworkStreamClass(c)}else if("undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream){var h=r(125).PDFFetchStream;a.setPDFNetworkStreamClass(h)}else{var d=r(126).PDFNetworkStream;a.setPDFNetworkStreamClass(d)}t.PDFJS=i.PDFJS,t.build=a.build,t.version=a.version,t.getDocument=a.getDocument,t.LoopbackPort=a.LoopbackPort,t.PDFDataRangeTransport=a.PDFDataRangeTransport,t.PDFWorker=a.PDFWorker,t.renderTextLayer=o.renderTextLayer,t.AnnotationLayer=s.AnnotationLayer,t.CustomStyle=l.CustomStyle,t.createPromiseCapability=n.createPromiseCapability,t.PasswordResponses=n.PasswordResponses,t.InvalidPDFException=n.InvalidPDFException,t.MissingPDFException=n.MissingPDFException,t.SVGGraphics=u.SVGGraphics,t.NativeImageDecoding=n.NativeImageDecoding,t.UnexpectedResponseException=n.UnexpectedResponseException,t.OPS=n.OPS,t.UNSUPPORTED_FEATURES=n.UNSUPPORTED_FEATURES,t.isValidUrl=l.isValidUrl,t.createValidAbsoluteUrl=n.createValidAbsoluteUrl,t.createObjectURL=n.createObjectURL,t.removeNullCharacters=n.removeNullCharacters,t.shadow=n.shadow,t.createBlob=n.createBlob,t.RenderingCancelledException=l.RenderingCancelledException,t.getFilenameFromUrl=l.getFilenameFromUrl,t.addLinkAttributes=l.addLinkAttributes,t.StatTimer=n.StatTimer},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("undefined"==typeof PDFJS||!PDFJS.compatibilityChecked){var i=r(20),a="undefined"!=typeof navigator&&navigator.userAgent||"",o=/Android/.test(a),s=/Android\s[0-2][^\d]/.test(a),l=/Android\s[0-4][^\d]/.test(a),u=a.indexOf("Chrom")>=0,c=/Chrome\/(39|40)\./.test(a),h=a.indexOf("CriOS")>=0,d=a.indexOf("Trident")>=0,f=/\b(iPad|iPhone|iPod)(?=;)/.test(a),p=a.indexOf("Opera")>=0,m=/Safari\//.test(a)&&!/(Chrome\/|Android\s)/.test(a),v="object"===("undefined"==typeof window?"undefined":n(window))&&"object"===("undefined"==typeof document?"undefined":n(document));"undefined"==typeof PDFJS&&(i.PDFJS={}),PDFJS.compatibilityChecked=!0,function(){if("undefined"==typeof Uint8ClampedArray&&(i.Uint8ClampedArray=r(77)),"undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(i.Float64Array=Float32Array));function e(e,t){return new l(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0);for(var r=0,n=e.length;r<n;++r,++t)this[t]=255&e[r]}function a(e,t){this.buffer=e,this.byteLength=e.length,this.length=t,function(e){for(;o<e;)Object.defineProperty(a.prototype,o,s(o)),o++}(this.length)}a.prototype=Object.create(null);var o=0;function s(e){return{get:function(){var t=this.buffer,r=e<<2;return(t[r]|t[r+1]<<8|t[r+2]<<16|t[r+3]<<24)>>>0},set:function(t){var r=this.buffer,n=e<<2;r[n]=255&t,r[n+1]=t>>8&255,r[n+2]=t>>16&255,r[n+3]=t>>>24&255}}}function l(r){var i,a,o;if("number"==typeof r)for(i=[],a=0;a<r;++a)i[a]=0;else if("slice"in r)i=r.slice(0);else for(i=[],a=0,o=r.length;a<o;++a)i[a]=r[a];return i.subarray=e,i.buffer=i,i.byteLength=i.length,i.set=t,"object"===(void 0===r?"undefined":n(r))&&r.buffer&&(i.buffer=r.buffer),i}i.Uint8Array=l,i.Int8Array=l,i.Int32Array=l,i.Uint16Array=l,i.Float32Array=l,i.Float64Array=l,i.Uint32Array=function(){if(3===arguments.length){if(0!==arguments[1])throw new Error("offset !== 0 is not supported");return new a(arguments[0],arguments[2])}return l.apply(this,arguments)}}(),function(){if(v&&window.CanvasPixelArray){var e=window.CanvasPixelArray.prototype;"buffer"in e||(Object.defineProperty(e,"buffer",{get:function(){return this},enumerable:!1,configurable:!0}),Object.defineProperty(e,"byteLength",{get:function(){return this.length},enumerable:!1,configurable:!0}))}}(),i.URL||(i.URL=i.webkitURL),function(){if(void 0!==Object.defineProperty){var e=!0;try{v&&Object.defineProperty(new Image,"id",{value:"test"});var t=function(){};t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(t){e=!1}if(e)return}Object.defineProperty=function(e,t,r){delete e[t],"get"in r&&e.__defineGetter__(t,r.get),"set"in r&&e.__defineSetter__(t,r.set),"value"in r&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=r.value)}}(),function(){if("undefined"!=typeof XMLHttpRequest){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest;"overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),"responseType"in t||(Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){"text"!==e&&"arraybuffer"!==e||(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"==typeof VBArray?Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText;var e,t=this.responseText,r=t.length,n=new Uint8Array(r);for(e=0;e<r;++e)n[e]=255&t.charCodeAt(e);return n.buffer}}):Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}}))}}(),function(){if(!("btoa"in i)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.btoa=function(t){var r,n,i="";for(r=0,n=t.length;r<n;r+=3){var a=255&t.charCodeAt(r),o=255&t.charCodeAt(r+1),s=255&t.charCodeAt(r+2),l=(3&a)<<4|o>>4,u=r+1<n?(15&o)<<2|s>>6:64,c=r+2<n?63&s:64;i+=e.charAt(a>>2)+e.charAt(l)+e.charAt(u)+e.charAt(c)}return i}}}(),function(){if(!("atob"in i)){i.atob=function(e){if((e=e.replace(/=+$/,"")).length%4==1)throw new Error("bad atob input");for(var t,r,n=0,i=0,a="";r=e.charAt(i++);~r&&(t=n%4?64*t+r:r,n++%4)?a+=String.fromCharCode(255&t>>(-2*n&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return a}}}(),void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,r=Array.prototype.slice.call(arguments,1);return function(){var n=r.concat(Array.prototype.slice.call(arguments));return t.apply(e,n)}}),v&&("dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset;for(var e={},t=0,r=this.attributes.length;t<r;t++){var n=this.attributes[t];"data-"===n.name.substring(0,5)&&(e[n.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})]=n.value)}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})),function(){function e(e,t,r,n){var i=(e.className||"").split(/\s+/g);""===i[0]&&i.shift();var a=i.indexOf(t);return a<0&&r&&i.push(t),a>=0&&n&&i.splice(a,1),e.className=i.join(" "),a>=0}if(v&&!("classList"in document.createElement("div"))){var t={add:function(t){e(this.element,t,!0,!1)},contains:function(t){return e(this.element,t,!1,!1)},remove:function(t){e(this.element,t,!1,!0)},toggle:function(t){e(this.element,t,!0,!0)}};Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList;var e=Object.create(t,{element:{value:this,writable:!1,enumerable:!0}});return Object.defineProperty(this,"_classList",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}(),function(){if(!("undefined"==typeof importScripts||"console"in i)){var e={},t={log:function(){var e=Array.prototype.slice.call(arguments);i.postMessage({targetName:"main",action:"console_log",data:e})},error:function(){var e=Array.prototype.slice.call(arguments);i.postMessage({targetName:"main",action:"console_error",data:e})},time:function(t){e[t]=Date.now()},timeEnd:function(t){var r=e[t];if(!r)throw new Error("Unknown timer name "+t);this.log("Timer:",t,Date.now()-r)}};i.console=t}}(),function(){var e;if(v){if("console"in window)return"bind"in console.log?void 0:(console.log=(e=console.log,function(t){return e(t)}),console.error=function(e){return function(t){return e(t)}}(console.error),void(console.warn=function(e){return function(t){return e(t)}}(console.warn)));window.console={log:function(){},error:function(){},warn:function(){}}}}(),function(){p&&document.addEventListener("click",function(e){(function e(t){return t.disabled||t.parentNode&&e(t.parentNode)})(e.target)&&e.stopPropagation()},!0)}(),(d||h)&&(PDFJS.disableCreateObjectURL=!0),"undefined"!=typeof navigator&&("language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US")),(m||s||c||f)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0),v&&(history.pushState&&!s||(PDFJS.disableHistory=!0)),function(){if(v)if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,r=this.length;t<r;t++)this[t]=e[t]});else{var e,t=!1;if(u?t=(e=a.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(e[2])<21:o?t=l:m&&(t=(e=a.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//))&&parseInt(e[1])<6),t){var r=window.CanvasRenderingContext2D.prototype,n=r.createImageData;r.createImageData=function(e,t){var r=n.call(this,e,t);return r.data.set=function(e){for(var t=0,r=this.length;t<r;t++)this[t]=e[t]},r},r=null}}}(),function(){function e(){window.requestAnimationFrame=function(e){return window.setTimeout(e,20)},window.cancelAnimationFrame=function(e){window.clearTimeout(e)}}v&&(f?e():"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame,window.requestAnimationFrame||e()))}(),(f||o)&&(PDFJS.maxCanvasPixels=5242880),v&&d&&window.parent!==window&&(PDFJS.disableFullscreen=!0),v&&("currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script");return e[e.length-1]},enumerable:!0,configurable:!0})),function(){if(v){var e=document.createElement("input");try{e.type="number"}catch(n){var t=e.constructor.prototype,r=Object.getOwnPropertyDescriptor(t,"type");Object.defineProperty(t,"type",{get:function(){return r.get.call(this)},set:function(e){r.set.call(this,"number"===e?"text":e)},enumerable:!0,configurable:!0})}}}(),function(){if(v&&document.attachEvent){var e=document.constructor.prototype,t=Object.getOwnPropertyDescriptor(e,"readyState");Object.defineProperty(e,"readyState",{get:function(){var e=t.get.call(this);return"interactive"===e?"loading":e},set:function(e){t.set.call(this,e)},enumerable:!0,configurable:!0})}}(),v&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),Number.isNaN||(Number.isNaN=r(89)),Number.isInteger||(Number.isInteger=r(91)),i.Promise||(i.Promise=r(94)),i.WeakMap||(i.WeakMap=r(104)),function(){var e=!1;try{if("function"==typeof URL&&"object"===n(URL.prototype)&&"origin"in URL.prototype){var t=new URL("b","http://a");t.pathname="c%20d",e="http://a/c%20d"===t.href}}catch(e){}if(!e){var r=Object.create(null);r.ftp=21,r.file=0,r.gopher=70,r.http=80,r.https=443,r.ws=80,r.wss=443;var a=Object.create(null);a["%2e"]=".",a[".%2e"]="..",a["%2e."]="..",a["%2e%2e"]="..";var o,s=/[a-zA-Z]/,l=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var e="";return""===this._username&&null===this._password||(e=this._username+(null!==this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){v.call(this),m.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||m.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&m.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&m.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&m.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],m.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"===this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"===e[0]&&(e=e.slice(1)),m.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"===this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"===e[0]&&(e=e.slice(1)),m.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null";case"blob":try{return new g(this._schemeData).origin||"null"}catch(e){}return"null"}return(e=this.host)?this._scheme+"://"+e:""}};var u=i.URL;u&&(g.createObjectURL=function(e){return u.createObjectURL.apply(u,arguments)},g.revokeObjectURL=function(e){u.revokeObjectURL(e)}),i.URL=g}function c(e){return void 0!==r[e]}function h(){v.call(this),this._isInvalid=!0}function d(e){return""===e&&h.call(this),e.toLowerCase()}function f(e){var t=e.charCodeAt(0);return t>32&&t<127&&-1===[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function p(e){var t=e.charCodeAt(0);return t>32&&t<127&&-1===[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function m(e,t,n){function i(e){y.push(e)}var u=t||"scheme start",m=0,v="",g=!1,b=!1,y=[];e:for(;(e[m-1]!==o||0===m)&&!this._isInvalid;){var _=e[m];switch(u){case"scheme start":if(!_||!s.test(_)){if(t){i("Invalid scheme.");break e}v="",u="no scheme";continue}v+=_.toLowerCase(),u="scheme";break;case"scheme":if(_&&l.test(_))v+=_.toLowerCase();else{if(":"!==_){if(t){if(_===o)break e;i("Code point not allowed in scheme: "+_);break e}v="",m=0,u="no scheme";continue}if(this._scheme=v,v="",t)break e;c(this._scheme)&&(this._isRelative=!0),u="file"===this._scheme?"relative":this._isRelative&&n&&n._scheme===this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"===_?(this._query="?",u="query"):"#"===_?(this._fragment="#",u="fragment"):_!==o&&"\t"!==_&&"\n"!==_&&"\r"!==_&&(this._schemeData+=f(_));break;case"no scheme":if(n&&c(n._scheme)){u="relative";continue}i("Missing scheme."),h.call(this);break;case"relative or authority":if("/"!==_||"/"!==e[m+1]){i("Expected /, got: "+_),u="relative";continue}u="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!==this._scheme&&(this._scheme=n._scheme),_===o){this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query=n._query,this._username=n._username,this._password=n._password;break e}if("/"===_||"\\"===_)"\\"===_&&i("\\ is an invalid code point."),u="relative slash";else if("?"===_)this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query="?",this._username=n._username,this._password=n._password,u="query";else{if("#"!==_){var A=e[m+1],S=e[m+2];("file"!==this._scheme||!s.test(_)||":"!==A&&"|"!==A||S!==o&&"/"!==S&&"\\"!==S&&"?"!==S&&"#"!==S)&&(this._host=n._host,this._port=n._port,this._username=n._username,this._password=n._password,this._path=n._path.slice(),this._path.pop()),u="relative path";continue}this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query=n._query,this._fragment="#",this._username=n._username,this._password=n._password,u="fragment"}break;case"relative slash":if("/"!==_&&"\\"!==_){"file"!==this._scheme&&(this._host=n._host,this._port=n._port,this._username=n._username,this._password=n._password),u="relative path";continue}"\\"===_&&i("\\ is an invalid code point."),u="file"===this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!==_){i("Expected '/', got: "+_),u="authority ignore slashes";continue}u="authority second slash";break;case"authority second slash":if(u="authority ignore slashes","/"!==_){i("Expected '/', got: "+_);continue}break;case"authority ignore slashes":if("/"!==_&&"\\"!==_){u="authority";continue}i("Expected authority, got: "+_);break;case"authority":if("@"===_){g&&(i("@ already seen."),v+="%40"),g=!0;for(var w=0;w<v.length;w++){var P=v[w];if("\t"!==P&&"\n"!==P&&"\r"!==P)if(":"!==P||null!==this._password){var k=f(P);null!==this._password?this._password+=k:this._username+=k}else this._password="";else i("Invalid whitespace in authority.")}v=""}else{if(_===o||"/"===_||"\\"===_||"?"===_||"#"===_){m-=v.length,v="",u="host";continue}v+=_}break;case"file host":if(_===o||"/"===_||"\\"===_||"?"===_||"#"===_){2!==v.length||!s.test(v[0])||":"!==v[1]&&"|"!==v[1]?0===v.length?u="relative path start":(this._host=d.call(this,v),v="",u="relative path start"):u="relative path";continue}"\t"===_||"\n"===_||"\r"===_?i("Invalid whitespace in file host."):v+=_;break;case"host":case"hostname":if(":"!==_||b){if(_===o||"/"===_||"\\"===_||"?"===_||"#"===_){if(this._host=d.call(this,v),v="",u="relative path start",t)break e;continue}"\t"!==_&&"\n"!==_&&"\r"!==_?("["===_?b=!0:"]"===_&&(b=!1),v+=_):i("Invalid code point in host/hostname: "+_)}else if(this._host=d.call(this,v),v="",u="port","hostname"===t)break e;break;case"port":if(/[0-9]/.test(_))v+=_;else{if(_===o||"/"===_||"\\"===_||"?"===_||"#"===_||t){if(""!==v){var C=parseInt(v,10);C!==r[this._scheme]&&(this._port=C+""),v=""}if(t)break e;u="relative path start";continue}"\t"===_||"\n"===_||"\r"===_?i("Invalid code point in port: "+_):h.call(this)}break;case"relative path start":if("\\"===_&&i("'\\' not allowed in path."),u="relative path","/"!==_&&"\\"!==_)continue;break;case"relative path":var R;if(_!==o&&"/"!==_&&"\\"!==_&&(t||"?"!==_&&"#"!==_))"\t"!==_&&"\n"!==_&&"\r"!==_&&(v+=f(_));else"\\"===_&&i("\\ not allowed in relative path."),(R=a[v.toLowerCase()])&&(v=R),".."===v?(this._path.pop(),"/"!==_&&"\\"!==_&&this._path.push("")):"."===v&&"/"!==_&&"\\"!==_?this._path.push(""):"."!==v&&("file"===this._scheme&&0===this._path.length&&2===v.length&&s.test(v[0])&&"|"===v[1]&&(v=v[0]+":"),this._path.push(v)),v="","?"===_?(this._query="?",u="query"):"#"===_&&(this._fragment="#",u="fragment");break;case"query":t||"#"!==_?_!==o&&"\t"!==_&&"\n"!==_&&"\r"!==_&&(this._query+=p(_)):(this._fragment="#",u="fragment");break;case"fragment":_!==o&&"\t"!==_&&"\n"!==_&&"\r"!==_&&(this._fragment+=_)}m++}}function v(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function g(e,t){void 0===t||t instanceof g||(t=new g(String(t))),this._url=e,v.call(this);var r=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");m.call(this,r,null,t)}}()}},function(e,t,r){"use strict";r(78),e.exports=r(4).Uint8ClampedArray},function(e,t,r){"use strict";r(79)("Uint8",1,function(e){return function(t,r,n){return e(this,t,r,n)}},!0)},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if(r(8)){var i=r(21),a=r(1),o=r(9),s=r(5),l=r(46),u=r(80),c=r(11),h=r(24),d=r(27),f=r(6),p=r(23),m=r(17),v=r(12),g=r(47),b=r(29),y=r(33),_=r(10),A=r(30),S=r(2),w=r(18),P=r(53),k=r(54),C=r(56),R=r(48).f,x=r(57),T=r(16),E=r(3),O=r(39),L=r(50),I=r(40),F=r(58),D=r(19),j=r(41),M=r(60),N=r(52),q=r(88),U=r(13),W=r(61),B=U.f,z=W.f,G=a.RangeError,H=a.TypeError,X=a.Uint8Array,V=Array.prototype,Y=u.ArrayBuffer,J=u.DataView,Q=O(0),K=O(2),Z=O(3),$=O(4),ee=O(5),te=O(6),re=L(!0),ne=L(!1),ie=F.values,ae=F.keys,oe=F.entries,se=V.lastIndexOf,le=V.reduce,ue=V.reduceRight,ce=V.join,he=V.sort,de=V.slice,fe=V.toString,pe=V.toLocaleString,me=E("iterator"),ve=E("toStringTag"),ge=T("typed_constructor"),be=T("def_constructor"),ye=l.CONSTR,_e=l.TYPED,Ae=l.VIEW,Se=O(1,function(e,t){return Re(I(e,e[be]),t)}),we=o(function(){return 1===new X(new Uint16Array([1]).buffer)[0]}),Pe=!!X&&!!X.prototype.set&&o(function(){new X(1).set({})}),ke=function(e,t){var r=m(e);if(r<0||r%t)throw G("Wrong offset!");return r},Ce=function(e){if(S(e)&&_e in e)return e;throw H(e+" is not a typed array!")},Re=function(e,t){if(!(S(e)&&ge in e))throw H("It is not a typed array constructor!");return new e(t)},xe=function(e,t){return Te(I(e,e[be]),t)},Te=function(e,t){for(var r=0,n=t.length,i=Re(e,n);n>r;)i[r]=t[r++];return i},Ee=function(e,t,r){B(e,t,{get:function(){return this._d[r]}})},Oe=function(e){var t,r,n,i,a,o,s=w(e),l=arguments.length,u=l>1?arguments[1]:void 0,h=void 0!==u,d=x(s);if(void 0!=d&&!P(d)){for(o=d.call(s),n=[],t=0;!(a=o.next()).done;t++)n.push(a.value);s=n}for(h&&l>2&&(u=c(u,arguments[2],2)),t=0,r=v(s.length),i=Re(this,r);r>t;t++)i[t]=h?u(s[t],t):s[t];return i},Le=function(){for(var e=0,t=arguments.length,r=Re(this,t);t>e;)r[e]=arguments[e++];return r},Ie=!!X&&o(function(){pe.call(new X(1))}),Fe=function(){return pe.apply(Ie?de.call(Ce(this)):Ce(this),arguments)},De={copyWithin:function(e,t){return q.call(Ce(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return $(Ce(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return N.apply(Ce(this),arguments)},filter:function(e){return xe(this,K(Ce(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return ee(Ce(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return te(Ce(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){Q(Ce(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(Ce(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return re(Ce(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return ce.apply(Ce(this),arguments)},lastIndexOf:function(e){return se.apply(Ce(this),arguments)},map:function(e){return Se(Ce(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return le.apply(Ce(this),arguments)},reduceRight:function(e){return ue.apply(Ce(this),arguments)},reverse:function(){for(var e,t=Ce(this).length,r=Math.floor(t/2),n=0;n<r;)e=this[n],this[n++]=this[--t],this[t]=e;return this},some:function(e){return Z(Ce(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return he.call(Ce(this),e)},subarray:function(e,t){var r=Ce(this),n=r.length,i=b(e,n);return new(I(r,r[be]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,v((void 0===t?n:b(t,n))-i))}},je=function(e,t){return xe(this,de.call(Ce(this),e,t))},Me=function(e){Ce(this);var t=ke(arguments[1],1),r=this.length,n=w(e),i=v(n.length),a=0;if(i+t>r)throw G("Wrong length!");for(;a<i;)this[t+a]=n[a++]},Ne={entries:function(){return oe.call(Ce(this))},keys:function(){return ae.call(Ce(this))},values:function(){return ie.call(Ce(this))}},qe=function(e,t){return S(e)&&e[_e]&&"symbol"!=(void 0===t?"undefined":n(t))&&t in e&&String(+t)==String(t)},Ue=function(e,t){return qe(e,t=y(t,!0))?d(2,e[t]):z(e,t)},We=function(e,t,r){return!(qe(e,t=y(t,!0))&&S(r)&&_(r,"value"))||_(r,"get")||_(r,"set")||r.configurable||_(r,"writable")&&!r.writable||_(r,"enumerable")&&!r.enumerable?B(e,t,r):(e[t]=r.value,e)};ye||(W.f=Ue,U.f=We),s(s.S+s.F*!ye,"Object",{getOwnPropertyDescriptor:Ue,defineProperty:We}),o(function(){fe.call({})})&&(fe=pe=function(){return ce.call(this)});var Be=p({},De);p(Be,Ne),f(Be,me,Ne.values),p(Be,{slice:je,set:Me,constructor:function(){},toString:fe,toLocaleString:Fe}),Ee(Be,"buffer","b"),Ee(Be,"byteOffset","o"),Ee(Be,"byteLength","l"),Ee(Be,"length","e"),B(Be,ve,{get:function(){return this[_e]}}),e.exports=function(e,t,r,n){var u=e+((n=!!n)?"Clamped":"")+"Array",c="get"+e,d="set"+e,p=a[u],m=p||{},b=p&&C(p),y=!p||!l.ABV,_={},w=p&&p.prototype,P=function(e,r){B(e,r,{get:function(){return function(e,r){var n=e._d;return n.v[c](r*t+n.o,we)}(this,r)},set:function(e){return function(e,r,i){var a=e._d;n&&(i=(i=Math.round(i))<0?0:i>255?255:255&i),a.v[d](r*t+a.o,i,we)}(this,r,e)},enumerable:!0})};y?(p=r(function(e,r,n,i){h(e,p,u,"_d");var a,o,s,l,c=0,d=0;if(S(r)){if(!(r instanceof Y||"ArrayBuffer"==(l=A(r))||"SharedArrayBuffer"==l))return _e in r?Te(p,r):Oe.call(p,r);a=r,d=ke(n,t);var m=r.byteLength;if(void 0===i){if(m%t)throw G("Wrong length!");if((o=m-d)<0)throw G("Wrong length!")}else if((o=v(i)*t)+d>m)throw G("Wrong length!");s=o/t}else s=g(r),a=new Y(o=s*t);for(f(e,"_d",{b:a,o:d,l:o,e:s,v:new J(a)});c<s;)P(e,c++)}),w=p.prototype=k(Be),f(w,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&j(function(e){new p,new p(null),new p(1.5),new p(e)},!0)||(p=r(function(e,r,n,i){var a;return h(e,p,u),S(r)?r instanceof Y||"ArrayBuffer"==(a=A(r))||"SharedArrayBuffer"==a?void 0!==i?new m(r,ke(n,t),i):void 0!==n?new m(r,ke(n,t)):new m(r):_e in r?Te(p,r):Oe.call(p,r):new m(g(r))}),Q(b!==Function.prototype?R(m).concat(R(b)):R(m),function(e){e in p||f(p,e,m[e])}),p.prototype=w,i||(w.constructor=p));var x=w[me],T=!!x&&("values"==x.name||void 0==x.name),E=Ne.values;f(p,ge,!0),f(w,_e,u),f(w,Ae,!0),f(w,be,p),(n?new p(1)[ve]==u:ve in w)||B(w,ve,{get:function(){return u}}),_[u]=p,s(s.G+s.W+s.F*(p!=m),_),s(s.S,u,{BYTES_PER_ELEMENT:t}),s(s.S+s.F*o(function(){m.of.call(p,1)}),u,{from:Oe,of:Le}),"BYTES_PER_ELEMENT"in w||f(w,"BYTES_PER_ELEMENT",t),s(s.P,u,De),M(u),s(s.P+s.F*Pe,u,{set:Me}),s(s.P+s.F*!T,u,Ne),i||w.toString==fe||(w.toString=fe),s(s.P+s.F*o(function(){new p(1).slice()}),u,{slice:je}),s(s.P+s.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){w.toLocaleString.call([1,2])})),u,{toLocaleString:Fe}),D[u]=T?x:E,i||T||f(w,me,E)}}else e.exports=function(){}},function(e,t,r){"use strict";var n=r(1),i=r(8),a=r(21),o=r(46),s=r(6),l=r(23),u=r(9),c=r(24),h=r(17),d=r(12),f=r(47),p=r(48).f,m=r(13).f,v=r(52),g=r(26),b="prototype",y="Wrong index!",_=n.ArrayBuffer,A=n.DataView,S=n.Math,w=n.RangeError,P=n.Infinity,k=_,C=S.abs,R=S.pow,x=S.floor,T=S.log,E=S.LN2,O=i?"_b":"buffer",L=i?"_l":"byteLength",I=i?"_o":"byteOffset";function F(e,t,r){var n,i,a,o=new Array(r),s=8*r-t-1,l=(1<<s)-1,u=l>>1,c=23===t?R(2,-24)-R(2,-77):0,h=0,d=e<0||0===e&&1/e<0?1:0;for((e=C(e))!=e||e===P?(i=e!=e?1:0,n=l):(n=x(T(e)/E),e*(a=R(2,-n))<1&&(n--,a*=2),(e+=n+u>=1?c/a:c*R(2,1-u))*a>=2&&(n++,a/=2),n+u>=l?(i=0,n=l):n+u>=1?(i=(e*a-1)*R(2,t),n+=u):(i=e*R(2,u-1)*R(2,t),n=0));t>=8;o[h++]=255&i,i/=256,t-=8);for(n=n<<t|i,s+=t;s>0;o[h++]=255&n,n/=256,s-=8);return o[--h]|=128*d,o}function D(e,t,r){var n,i=8*r-t-1,a=(1<<i)-1,o=a>>1,s=i-7,l=r-1,u=e[l--],c=127&u;for(u>>=7;s>0;c=256*c+e[l],l--,s-=8);for(n=c&(1<<-s)-1,c>>=-s,s+=t;s>0;n=256*n+e[l],l--,s-=8);if(0===c)c=1-o;else{if(c===a)return n?NaN:u?-P:P;n+=R(2,t),c-=o}return(u?-1:1)*n*R(2,c-t)}function j(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function M(e){return[255&e]}function N(e){return[255&e,e>>8&255]}function q(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function U(e){return F(e,52,8)}function W(e){return F(e,23,4)}function B(e,t,r){m(e[b],t,{get:function(){return this[r]}})}function z(e,t,r,n){var i=f(+r);if(i+t>e[L])throw w(y);var a=e[O]._b,o=i+e[I],s=a.slice(o,o+t);return n?s:s.reverse()}function G(e,t,r,n,i,a){var o=f(+r);if(o+t>e[L])throw w(y);for(var s=e[O]._b,l=o+e[I],u=n(+i),c=0;c<t;c++)s[l+c]=u[a?c:t-c-1]}if(o.ABV){if(!u(function(){_(1)})||!u(function(){new _(-1)})||u(function(){return new _,new _(1.5),new _(NaN),"ArrayBuffer"!=_.name})){for(var H,X=(_=function(e){return c(this,_),new k(f(e))})[b]=k[b],V=p(k),Y=0;V.length>Y;)(H=V[Y++])in _||s(_,H,k[H]);a||(X.constructor=_)}var J=new A(new _(2)),Q=A[b].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||l(A[b],{setInt8:function(e,t){Q.call(this,e,t<<24>>24)},setUint8:function(e,t){Q.call(this,e,t<<24>>24)}},!0)}else _=function(e){c(this,_,"ArrayBuffer");var t=f(e);this._b=v.call(new Array(t),0),this[L]=t},A=function(e,t,r){c(this,A,"DataView"),c(e,_,"DataView");var n=e[L],i=h(t);if(i<0||i>n)throw w("Wrong offset!");if(i+(r=void 0===r?n-i:d(r))>n)throw w("Wrong length!");this[O]=e,this[I]=i,this[L]=r},i&&(B(_,"byteLength","_l"),B(A,"buffer","_b"),B(A,"byteLength","_l"),B(A,"byteOffset","_o")),l(A[b],{getInt8:function(e){return z(this,1,e)[0]<<24>>24},getUint8:function(e){return z(this,1,e)[0]},getInt16:function(e){var t=z(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=z(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return j(z(this,4,e,arguments[1]))},getUint32:function(e){return j(z(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return D(z(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return D(z(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){G(this,1,e,M,t)},setUint8:function(e,t){G(this,1,e,M,t)},setInt16:function(e,t){G(this,2,e,N,t,arguments[2])},setUint16:function(e,t){G(this,2,e,N,t,arguments[2])},setInt32:function(e,t){G(this,4,e,q,t,arguments[2])},setUint32:function(e,t){G(this,4,e,q,t,arguments[2])},setFloat32:function(e,t){G(this,4,e,W,t,arguments[2])},setFloat64:function(e,t){G(this,8,e,U,t,arguments[2])}});g(_,"ArrayBuffer"),g(A,"DataView"),s(A[b],o.VIEW,!0),t.ArrayBuffer=_,t.DataView=A},function(e,t,r){"use strict";var n=r(13),i=r(7),a=r(38);e.exports=r(8)?Object.defineProperties:function(e,t){i(e);for(var r,o=a(t),s=o.length,l=0;s>l;)n.f(e,r=o[l++],t[r]);return e}},function(e,t,r){"use strict";var n=r(83);e.exports=function(e,t){return new(n(e))(t)}},function(e,t,r){"use strict";var n=r(2),i=r(84),a=r(3)("species");e.exports=function(e){var t;return i(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},function(e,t,r){"use strict";var n=r(25);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict";var n=r(3)("unscopables"),i=Array.prototype;void 0==i[n]&&r(6)(i,n,{}),e.exports=function(e){i[n][e]=!0}},function(e,t,r){"use strict";e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){"use strict";var n=r(54),i=r(27),a=r(26),o={};r(6)(o,r(3)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(o,{next:i(1,r)}),a(e,t+" Iterator")}},function(e,t,r){"use strict";var n=r(18),i=r(29),a=r(12);e.exports=[].copyWithin||function(e,t){var r=n(this),o=a(r.length),s=i(e,o),l=i(t,o),u=arguments.length>2?arguments[2]:void 0,c=Math.min((void 0===u?o:i(u,o))-l,o-s),h=1;for(l<s&&s<l+c&&(h=-1,l+=c-1,s+=c-1);c-- >0;)l in r?r[s]=r[l]:delete r[s],s+=h,l+=h;return r}},function(e,t,r){"use strict";r(90),e.exports=r(4).Number.isNaN},function(e,t,r){"use strict";var n=r(5);n(n.S,"Number",{isNaN:function(e){return e!=e}})},function(e,t,r){"use strict";r(92),e.exports=r(4).Number.isInteger},function(e,t,r){"use strict";var n=r(5);n(n.S,"Number",{isInteger:r(93)})},function(e,t,r){"use strict";var n=r(2),i=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},function(e,t,r){"use strict";r(63),r(95),r(64),r(97),r(102),r(103),e.exports=r(4).Promise},function(e,t,r){"use strict";var n=r(96)(!0);r(59)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){"use strict";var n=r(17),i=r(35);e.exports=function(e){return function(t,r){var a,o,s=String(i(t)),l=n(r),u=s.length;return l<0||l>=u?e?"":void 0:(a=s.charCodeAt(l))<55296||a>56319||l+1===u||(o=s.charCodeAt(l+1))<56320||o>57343?e?s.charAt(l):a:e?s.slice(l,l+2):o-56320+(a-55296<<10)+65536}}},function(e,t,r){"use strict";var n,i,a,o,s=r(21),l=r(1),u=r(11),c=r(30),h=r(5),d=r(2),f=r(22),p=r(24),m=r(31),v=r(40),g=r(65).set,b=r(100)(),y=r(42),_=r(66),A=r(101),S=r(67),w=l.TypeError,P=l.process,k=P&&P.versions,C=k&&k.v8||"",R=l.Promise,x="process"==c(P),T=function(){},E=i=y.f,O=!!function(){try{var e=R.resolve(1),t=(e.constructor={})[r(3)("species")]=function(e){e(T,T)};return(x||"function"==typeof PromiseRejectionEvent)&&e.then(T)instanceof t&&0!==C.indexOf("6.6")&&-1===A.indexOf("Chrome/66")}catch(e){}}(),L=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},I=function(e,t){if(!e._n){e._n=!0;var r=e._c;b(function(){for(var n=e._v,i=1==e._s,a=0,o=function(t){var r,a,o,s=i?t.ok:t.fail,l=t.resolve,u=t.reject,c=t.domain;try{s?(i||(2==e._h&&j(e),e._h=1),!0===s?r=n:(c&&c.enter(),r=s(n),c&&(c.exit(),o=!0)),r===t.promise?u(w("Promise-chain cycle")):(a=L(r))?a.call(r,l,u):l(r)):u(n)}catch(e){c&&!o&&c.exit(),u(e)}};r.length>a;)o(r[a++]);e._c=[],e._n=!1,t&&!e._h&&F(e)})}},F=function(e){g.call(l,function(){var t,r,n,i=e._v,a=D(e);if(a&&(t=_(function(){x?P.emit("unhandledRejection",i,e):(r=l.onunhandledrejection)?r({promise:e,reason:i}):(n=l.console)&&n.error&&n.error("Unhandled promise rejection",i)}),e._h=x||D(e)?2:1),e._a=void 0,a&&t.e)throw t.v})},D=function(e){return 1!==e._h&&0===(e._a||e._c).length},j=function(e){g.call(l,function(){var t;x?P.emit("rejectionHandled",e):(t=l.onrejectionhandled)&&t({promise:e,reason:e._v})})},M=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),I(t,!0))},N=function e(t){var r,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(r=L(t))?b(function(){var i={_w:n,_d:!1};try{r.call(t,u(e,i,1),u(M,i,1))}catch(e){M.call(i,e)}}):(n._v=t,n._s=1,I(n,!1))}catch(e){M.call({_w:n,_d:!1},e)}}};O||(R=function(e){p(this,R,"Promise","_h"),f(e),n.call(this);try{e(u(N,this,1),u(M,this,1))}catch(e){M.call(this,e)}},(n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(23)(R.prototype,{then:function(e,t){var r=E(v(this,R));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=x?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&I(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),a=function(){var e=new n;this.promise=e,this.resolve=u(N,e,1),this.reject=u(M,e,1)},y.f=E=function(e){return e===R||e===o?new a(e):i(e)}),h(h.G+h.W+h.F*!O,{Promise:R}),r(26)(R,"Promise"),r(60)("Promise"),o=r(4).Promise,h(h.S+h.F*!O,"Promise",{reject:function(e){var t=E(this);return(0,t.reject)(e),t.promise}}),h(h.S+h.F*(s||!O),"Promise",{resolve:function(e){return S(s&&this===o?R:this,e)}}),h(h.S+h.F*!(O&&r(41)(function(e){R.all(e).catch(T)})),"Promise",{all:function(e){var t=this,r=E(t),n=r.resolve,i=r.reject,a=_(function(){var r=[],a=0,o=1;m(e,!1,function(e){var s=a++,l=!1;r.push(void 0),o++,t.resolve(e).then(function(e){l||(l=!0,r[s]=e,--o||n(r))},i)}),--o||n(r)});return a.e&&i(a.v),r.promise},race:function(e){var t=this,r=E(t),n=r.reject,i=_(function(){m(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var a=e.return;throw void 0!==a&&n(a.call(e)),t}}},function(e,t,r){"use strict";e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},function(e,t,r){"use strict";var n=r(1),i=r(65).set,a=n.MutationObserver||n.WebKitMutationObserver,o=n.process,s=n.Promise,l="process"==r(25)(o);e.exports=function(){var e,t,r,u=function(){var n,i;for(l&&(n=o.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};if(l)r=function(){o.nextTick(u)};else if(!a||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var c=s.resolve(void 0);r=function(){c.then(u)}}else r=function(){i.call(n,u)};else{var h=!0,d=document.createTextNode("");new a(u).observe(d,{characterData:!0}),r=function(){d.data=h=!h}}return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},function(e,t,r){"use strict";var n=r(1).navigator;e.exports=n&&n.userAgent||""},function(e,t,r){"use strict";var n=r(5),i=r(4),a=r(1),o=r(40),s=r(67);n(n.P+n.R,"Promise",{finally:function(e){var t=o(this,i.Promise||a.Promise),r="function"==typeof e;return this.then(r?function(r){return s(t,e()).then(function(){return r})}:e,r?function(r){return s(t,e()).then(function(){throw r})}:e)}})},function(e,t,r){"use strict";var n=r(5),i=r(42),a=r(66);n(n.S,"Promise",{try:function(e){var t=i.f(this),r=a(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},function(e,t,r){"use strict";r(63),r(64),r(105),r(112),r(114),e.exports=r(4).WeakMap},function(e,t,r){"use strict";var n,i=r(39)(0),a=r(14),o=r(43),s=r(106),l=r(108),u=r(2),c=r(9),h=r(68),d=o.getWeak,f=Object.isExtensible,p=l.ufstore,m={},v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(e){if(u(e)){var t=d(e);return!0===t?p(h(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(h(this,"WeakMap"),e,t)}},b=e.exports=r(109)("WeakMap",v,g,l,!0,!0);c(function(){return 7!=(new b).set((Object.freeze||Object)(m),7).get(m)})&&(s((n=l.getConstructor(v,"WeakMap")).prototype,g),o.NEED=!0,i(["delete","has","get","set"],function(e){var t=b.prototype,r=t[e];a(t,e,function(t,i){if(u(t)&&!f(t)){this._f||(this._f=new n);var a=this._f[e](t,i);return"set"==e?this:a}return r.call(this,t,i)})}))},function(e,t,r){"use strict";var n=r(38),i=r(107),a=r(62),o=r(18),s=r(34),l=Object.assign;e.exports=!l||r(9)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=l({},e)[r]||Object.keys(l({},t)).join("")!=n})?function(e,t){for(var r=o(e),l=arguments.length,u=1,c=i.f,h=a.f;l>u;)for(var d,f=s(arguments[u++]),p=c?n(f).concat(c(f)):n(f),m=p.length,v=0;m>v;)h.call(f,d=p[v++])&&(r[d]=f[d]);return r}:l},function(e,t,r){"use strict";t.f=Object.getOwnPropertySymbols},function(e,t,r){"use strict";var n=r(23),i=r(43).getWeak,a=r(7),o=r(2),s=r(24),l=r(31),u=r(39),c=r(10),h=r(68),d=u(5),f=u(6),p=0,m=function(e){return e._l||(e._l=new v)},v=function(){this.a=[]},g=function(e,t){return d(e.a,function(e){return e[0]===t})};v.prototype={get:function(e){var t=g(this,e);if(t)return t[1]},has:function(e){return!!g(this,e)},set:function(e,t){var r=g(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=f(this.a,function(t){return t[0]===e});return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,a){var u=e(function(e,n){s(e,u,t,"_i"),e._t=t,e._i=p++,e._l=void 0,void 0!=n&&l(n,r,e[a],e)});return n(u.prototype,{delete:function(e){if(!o(e))return!1;var r=i(e);return!0===r?m(h(this,t)).delete(e):r&&c(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=i(e);return!0===r?m(h(this,t)).has(e):r&&c(r,this._i)}}),u},def:function(e,t,r){var n=i(a(t),!0);return!0===n?m(e).set(t,r):n[e._i]=r,e},ufstore:m}},function(e,t,r){"use strict";var n=r(1),i=r(5),a=r(14),o=r(23),s=r(43),l=r(31),u=r(24),c=r(2),h=r(9),d=r(41),f=r(26),p=r(110);e.exports=function(e,t,r,m,v,g){var b=n[e],y=b,_=v?"set":"add",A=y&&y.prototype,S={},w=function(e){var t=A[e];a(A,e,"delete"==e?function(e){return!(g&&!c(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!c(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!c(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,r){return t.call(this,0===e?0:e,r),this})};if("function"==typeof y&&(g||A.forEach&&!h(function(){(new y).entries().next()}))){var P=new y,k=P[_](g?{}:-0,1)!=P,C=h(function(){P.has(1)}),R=d(function(e){new y(e)}),x=!g&&h(function(){for(var e=new y,t=5;t--;)e[_](t,t);return!e.has(-0)});R||((y=t(function(t,r){u(t,y,e);var n=p(new b,t,y);return void 0!=r&&l(r,v,n[_],n),n})).prototype=A,A.constructor=y),(C||x)&&(w("delete"),w("has"),v&&w("get")),(x||k)&&w(_),g&&A.clear&&delete A.clear}else y=m.getConstructor(t,e,v,_),o(y.prototype,r),s.NEED=!0;return f(y,e),S[e]=y,i(i.G+i.W+i.F*(y!=b),S),g||m.setStrong(y,e,v),y}},function(e,t,r){"use strict";var n=r(2),i=r(111).set;e.exports=function(e,t,r){var a,o=t.constructor;return o!==r&&"function"==typeof o&&(a=o.prototype)!==r.prototype&&n(a)&&i&&i(e,a),e}},function(e,t,r){"use strict";var n=r(2),i=r(7),a=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=r(11)(Function.call,r(61).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return a(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:a}},function(e,t,r){"use strict";r(113)("WeakMap")},function(e,t,r){"use strict";var n=r(5);e.exports=function(e){n(n.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},function(e,t,r){"use strict";r(115)("WeakMap")},function(e,t,r){"use strict";var n=r(5),i=r(22),a=r(11),o=r(31);e.exports=function(e){n(n.S,e,{from:function(e){var t,r,n,s,l=arguments[1];return i(this),(t=void 0!==l)&&i(l),void 0==e?new this:(r=[],t?(n=0,s=a(l,arguments[2],2),o(e,!1,function(e){r.push(s(e,n++))})):o(e,!1,r.push,r),new this(r))}})}},function(e,t,r){"use strict";var n=!1;if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),n=!0}catch(e){}t.ReadableStream=n?ReadableStream:r(117).ReadableStream},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t,r){var i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},a=r(1).assert;function o(e){return"string"==typeof e||"symbol"===(void 0===e?"undefined":i(e))}function s(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}t.typeIsObject=function(e){return"object"===(void 0===e?"undefined":i(e))&&null!==e||"function"==typeof e},t.createDataProperty=function(e,r,n){a(t.typeIsObject(e)),Object.defineProperty(e,r,{value:n,writable:!0,enumerable:!0,configurable:!0})},t.createArrayFromList=function(e){return e.slice()},t.ArrayBufferCopy=function(e,t,r,n,i){new Uint8Array(e).set(new Uint8Array(r,n,i),t)},t.CreateIterResultObject=function(e,t){a("boolean"==typeof t);var r={};return Object.defineProperty(r,"value",{value:e,enumerable:!0,writable:!0,configurable:!0}),Object.defineProperty(r,"done",{value:t,enumerable:!0,writable:!0,configurable:!0}),r},t.IsFiniteNonNegativeNumber=function(e){return!Number.isNaN(e)&&(e!==1/0&&!(e<0))},t.InvokeOrNoop=function(e,t,r){a(void 0!==e),a(o(t)),a(Array.isArray(r));var n=e[t];if(void 0!==n)return s(n,e,r)},t.PromiseInvokeOrNoop=function(e,r,n){a(void 0!==e),a(o(r)),a(Array.isArray(n));try{return Promise.resolve(t.InvokeOrNoop(e,r,n))}catch(e){return Promise.reject(e)}},t.PromiseInvokeOrPerformFallback=function(e,t,r,n,i){a(void 0!==e),a(o(t)),a(Array.isArray(r)),a(Array.isArray(i));var l=void 0;try{l=e[t]}catch(e){return Promise.reject(e)}if(void 0===l)return n.apply(null,i);try{return Promise.resolve(s(l,e,r))}catch(e){return Promise.reject(e)}},t.TransferArrayBuffer=function(e){return e.slice()},t.ValidateAndNormalizeHighWaterMark=function(e){if(e=Number(e),Number.isNaN(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN");return e},t.ValidateAndNormalizeQueuingStrategy=function(e,r){if(void 0!==e&&"function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function");return{size:e,highWaterMark:r=t.ValidateAndNormalizeHighWaterMark(r)}}},function(e,t,r){function n(e){this.name="AssertionError",this.message=e||"",this.stack=(new Error).stack}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,e.exports={rethrowAssertionErrorRejection:function(e){e&&e.constructor===n&&setTimeout(function(){throw e},0)},AssertionError:n,assert:function(e,t){if(!e)throw new n(t)}}},function(e,t,r){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=r(0),o=a.InvokeOrNoop,s=a.PromiseInvokeOrNoop,l=a.ValidateAndNormalizeQueuingStrategy,u=a.typeIsObject,c=r(1),h=c.assert,d=c.rethrowAssertionErrorRejection,f=r(3),p=f.DequeueValue,m=f.EnqueueValueWithSize,v=f.PeekQueueValue,g=f.ResetQueue,b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.size,a=r.highWaterMark,o=void 0===a?1:a;if(i(this,e),this._state="writable",this._storedError=void 0,this._writer=void 0,this._writableStreamController=void 0,this._writeRequests=[],this._inFlightWriteRequest=void 0,this._closeRequest=void 0,this._inFlightCloseRequest=void 0,this._pendingAbortRequest=void 0,this._backpressure=!1,void 0!==t.type)throw new RangeError("Invalid type is specified");this._writableStreamController=new N(this,t,n,o),this._writableStreamController.__startSteps()}return n(e,[{key:"abort",value:function(e){return!1===_(this)?Promise.reject(G("abort")):!0===A(this)?Promise.reject(new TypeError("Cannot abort a stream that already has a writer")):S(this,e)}},{key:"getWriter",value:function(){if(!1===_(this))throw G("getWriter");return y(this)}},{key:"locked",get:function(){if(!1===_(this))throw G("locked");return A(this)}}]),e}();function y(e){return new O(e)}function _(e){return!!u(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function A(e){return h(!0===_(e),"IsWritableStreamLocked should only be used on known writable streams"),void 0!==e._writer}function S(e,t){var r=e._state;if("closed"===r)return Promise.resolve(void 0);if("errored"===r)return Promise.reject(e._storedError);var n=new TypeError("Requested to abort");if(void 0!==e._pendingAbortRequest)return Promise.reject(n);h("writable"===r||"erroring"===r,"state must be writable or erroring");var i=!1;"erroring"===r&&(i=!0,t=void 0);var a=new Promise(function(r,n){e._pendingAbortRequest={_resolve:r,_reject:n,_reason:t,_wasAlreadyErroring:i}});return!1===i&&P(e,n),a}function w(e,t){var r=e._state;"writable"!==r?(h("erroring"===r),k(e)):P(e,t)}function P(e,t){h(void 0===e._storedError,"stream._storedError === undefined"),h("writable"===e._state,"state must be writable");var r=e._writableStreamController;h(void 0!==r,"controller must not be undefined"),e._state="erroring",e._storedError=t;var n=e._writer;void 0!==n&&D(n,t),!1===x(e)&&!0===r._started&&k(e)}function k(e){h("erroring"===e._state,"stream._state === erroring"),h(!1===x(e),"WritableStreamHasOperationMarkedInFlight(stream) === false"),e._state="errored",e._writableStreamController.__errorSteps();for(var t=e._storedError,r=0;r<e._writeRequests.length;r++){e._writeRequests[r]._reject(t)}if(e._writeRequests=[],void 0!==e._pendingAbortRequest){var n=e._pendingAbortRequest;if(e._pendingAbortRequest=void 0,!0===n._wasAlreadyErroring)return n._reject(t),void T(e);e._writableStreamController.__abortSteps(n._reason).then(function(){n._resolve(),T(e)},function(t){n._reject(t),T(e)})}else T(e)}function C(e){h(void 0!==e._inFlightCloseRequest),e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0;var t=e._state;h("writable"===t||"erroring"===t),"erroring"===t&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed";var r=e._writer;void 0!==r&&function(e){h(void 0!==e._closedPromise_resolve,"writer._closedPromise_resolve !== undefined"),h(void 0!==e._closedPromise_reject,"writer._closedPromise_reject !== undefined"),h("pending"===e._closedPromiseState,"writer._closedPromiseState is pending"),e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}(r),h(void 0===e._pendingAbortRequest,"stream._pendingAbortRequest === undefined"),h(void 0===e._storedError,"stream._storedError === undefined")}function R(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function x(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}function T(e){h("errored"===e._state,'_stream_.[[state]] is `"errored"`'),void 0!==e._closeRequest&&(h(void 0===e._inFlightCloseRequest),e._closeRequest._reject(e._storedError),e._closeRequest=void 0);var t=e._writer;void 0!==t&&(Y(t,e._storedError),t._closedPromise.catch(function(){}))}function E(e,t){h("writable"===e._state),h(!1===R(e));var r=e._writer;void 0!==r&&t!==e._backpressure&&(!0===t?function(e){h(void 0===e._readyPromise_resolve,"writer._readyPromise_resolve === undefined"),h(void 0===e._readyPromise_reject,"writer._readyPromise_reject === undefined"),e._readyPromise=new Promise(function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}(r):(h(!1===t),K(r))),e._backpressure=t}e.exports={AcquireWritableStreamDefaultWriter:y,IsWritableStream:_,IsWritableStreamLocked:A,WritableStream:b,WritableStreamAbort:S,WritableStreamDefaultControllerError:z,WritableStreamDefaultWriterCloseWithErrorPropagation:function(e){var t=e._ownerWritableStream;h(void 0!==t);var r=t._state;if(!0===R(t)||"closed"===r)return Promise.resolve();if("errored"===r)return Promise.reject(t._storedError);return h("writable"===r||"erroring"===r),I(e)},WritableStreamDefaultWriterRelease:j,WritableStreamDefaultWriterWrite:M,WritableStreamCloseQueuedOrInFlight:R};var O=function(){function e(t){if(i(this,e),!1===_(t))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance");if(!0===A(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=t,t._writer=this;var r,n=t._state;if("writable"===n)!1===R(t)&&!0===t._backpressure?((r=this)._readyPromise=new Promise(function(e,t){r._readyPromise_resolve=e,r._readyPromise_reject=t}),r._readyPromiseState="pending"):Q(this),V(this);else if("erroring"===n)J(this,t._storedError),this._readyPromise.catch(function(){}),V(this);else if("closed"===n)Q(this),function(e){e._closedPromise=Promise.resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}(this);else{h("errored"===n,"state must be errored");var a=t._storedError;J(this,a),this._readyPromise.catch(function(){}),function(e,t){e._closedPromise=Promise.reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}(this,a),this._closedPromise.catch(function(){})}}return n(e,[{key:"abort",value:function(e){return!1===L(this)?Promise.reject(H("abort")):void 0===this._ownerWritableStream?Promise.reject(X("abort")):function(e,t){var r=e._ownerWritableStream;return h(void 0!==r),S(r,t)}(this,e)}},{key:"close",value:function(){if(!1===L(this))return Promise.reject(H("close"));var e=this._ownerWritableStream;return void 0===e?Promise.reject(X("close")):!0===R(e)?Promise.reject(new TypeError("cannot close an already-closing stream")):I(this)}},{key:"releaseLock",value:function(){if(!1===L(this))throw H("releaseLock");var e=this._ownerWritableStream;void 0!==e&&(h(void 0!==e._writer),j(this))}},{key:"write",value:function(e){return!1===L(this)?Promise.reject(H("write")):void 0===this._ownerWritableStream?Promise.reject(X("write to")):M(this,e)}},{key:"closed",get:function(){return!1===L(this)?Promise.reject(H("closed")):this._closedPromise}},{key:"desiredSize",get:function(){if(!1===L(this))throw H("desiredSize");if(void 0===this._ownerWritableStream)throw X("desiredSize");return function(e){var t=e._ownerWritableStream,r=t._state;if("errored"===r||"erroring"===r)return null;if("closed"===r)return 0;return q(t._writableStreamController)}(this)}},{key:"ready",get:function(){return!1===L(this)?Promise.reject(H("ready")):this._readyPromise}}]),e}();function L(e){return!!u(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function I(e){var t=e._ownerWritableStream;h(void 0!==t);var r=t._state;if("closed"===r||"errored"===r)return Promise.reject(new TypeError("The stream (in "+r+" state) is not in the writable state and cannot be closed"));h("writable"===r||"erroring"===r),h(!1===R(t));var n,i=new Promise(function(e,r){var n={_resolve:e,_reject:r};t._closeRequest=n});return!0===t._backpressure&&"writable"===r&&K(e),n=t._writableStreamController,m(n,"close",0),U(n),i}function F(e,t){"pending"===e._closedPromiseState?Y(e,t):function(e,t){h(void 0===e._closedPromise_resolve,"writer._closedPromise_resolve === undefined"),h(void 0===e._closedPromise_reject,"writer._closedPromise_reject === undefined"),h("pending"!==e._closedPromiseState,"writer._closedPromiseState is not pending"),e._closedPromise=Promise.reject(t),e._closedPromiseState="rejected"}(e,t),e._closedPromise.catch(function(){})}function D(e,t){"pending"===e._readyPromiseState?function(e,t){h(void 0!==e._readyPromise_resolve,"writer._readyPromise_resolve !== undefined"),h(void 0!==e._readyPromise_reject,"writer._readyPromise_reject !== undefined"),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}(e,t):function(e,t){h(void 0===e._readyPromise_resolve,"writer._readyPromise_resolve === undefined"),h(void 0===e._readyPromise_reject,"writer._readyPromise_reject === undefined"),e._readyPromise=Promise.reject(t),e._readyPromiseState="rejected"}(e,t),e._readyPromise.catch(function(){})}function j(e){var t=e._ownerWritableStream;h(void 0!==t),h(t._writer===e);var r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");D(e,r),F(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function M(e,t){var r=e._ownerWritableStream;h(void 0!==r);var n=r._writableStreamController,i=function(e,t){var r=e._strategySize;if(void 0===r)return 1;try{return r(t)}catch(t){return W(e,t),1}}(n,t);if(r!==e._ownerWritableStream)return Promise.reject(X("write to"));var a=r._state;if("errored"===a)return Promise.reject(r._storedError);if(!0===R(r)||"closed"===a)return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"));if("erroring"===a)return Promise.reject(r._storedError);h("writable"===a);var o=function(e){return h(!0===A(e)),h("writable"===e._state),new Promise(function(t,r){var n={_resolve:t,_reject:r};e._writeRequests.push(n)})}(r);return function(e,t,r){var n={chunk:t};try{m(e,n,r)}catch(t){return void W(e,t)}var i=e._controlledWritableStream;if(!1===R(i)&&"writable"===i._state){var a=B(e);E(i,a)}U(e)}(n,t,i),o}var N=function(){function e(t,r,n,a){if(i(this,e),!1===_(t))throw new TypeError("WritableStreamDefaultController can only be constructed with a WritableStream instance");if(void 0!==t._writableStreamController)throw new TypeError("WritableStreamDefaultController instances can only be created by the WritableStream constructor");this._controlledWritableStream=t,this._underlyingSink=r,this._queue=void 0,this._queueTotalSize=void 0,g(this),this._started=!1;var o=l(n,a);this._strategySize=o.size,this._strategyHWM=o.highWaterMark,E(t,B(this))}return n(e,[{key:"error",value:function(e){if(!1===function(e){if(!u(e))return!1;if(!Object.prototype.hasOwnProperty.call(e,"_underlyingSink"))return!1;return!0}(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");"writable"===this._controlledWritableStream._state&&z(this,e)}},{key:"__abortSteps",value:function(e){return s(this._underlyingSink,"abort",[e])}},{key:"__errorSteps",value:function(){g(this)}},{key:"__startSteps",value:function(){var e=this,t=o(this._underlyingSink,"start",[this]),r=this._controlledWritableStream;Promise.resolve(t).then(function(){h("writable"===r._state||"erroring"===r._state),e._started=!0,U(e)},function(t){h("writable"===r._state||"erroring"===r._state),e._started=!0,w(r,t)}).catch(d)}}]),e}();function q(e){return e._strategyHWM-e._queueTotalSize}function U(e){var t=e._controlledWritableStream;if(!1!==e._started&&void 0===t._inFlightWriteRequest){var r=t._state;if("closed"!==r&&"errored"!==r)if("erroring"!==r){if(0!==e._queue.length){var n=v(e);"close"===n?function(e){var t=e._controlledWritableStream;(function(e){h(void 0===e._inFlightCloseRequest),h(void 0!==e._closeRequest),e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0})(t),p(e),h(0===e._queue.length,"queue must be empty once the final write record is dequeued"),s(e._underlyingSink,"close",[]).then(function(){C(t)},function(e){!function(e,t){h(void 0!==e._inFlightCloseRequest),e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,h("writable"===e._state||"erroring"===e._state),void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),w(e,t)}(t,e)}).catch(d)}(e):function(e,t){var r=e._controlledWritableStream;(function(e){h(void 0===e._inFlightWriteRequest,"there must be no pending write request"),h(0!==e._writeRequests.length,"writeRequests must not be empty"),e._inFlightWriteRequest=e._writeRequests.shift()})(r),s(e._underlyingSink,"write",[t,e]).then(function(){!function(e){h(void 0!==e._inFlightWriteRequest),e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}(r);var t=r._state;if(h("writable"===t||"erroring"===t),p(e),!1===R(r)&&"writable"===t){var n=B(e);E(r,n)}U(e)},function(e){!function(e,t){h(void 0!==e._inFlightWriteRequest),e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,h("writable"===e._state||"erroring"===e._state),w(e,t)}(r,e)}).catch(d)}(e,n.chunk)}}else k(t)}}function W(e,t){"writable"===e._controlledWritableStream._state&&z(e,t)}function B(e){return q(e)<=0}function z(e,t){var r=e._controlledWritableStream;h("writable"===r._state),P(r,t)}function G(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function H(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function X(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function V(e){e._closedPromise=new Promise(function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"})}function Y(e,t){h(void 0!==e._closedPromise_resolve,"writer._closedPromise_resolve !== undefined"),h(void 0!==e._closedPromise_reject,"writer._closedPromise_reject !== undefined"),h("pending"===e._closedPromiseState,"writer._closedPromiseState is pending"),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function J(e,t){e._readyPromise=Promise.reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function Q(e){e._readyPromise=Promise.resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function K(e){h(void 0!==e._readyPromise_resolve,"writer._readyPromise_resolve !== undefined"),h(void 0!==e._readyPromise_reject,"writer._readyPromise_reject !== undefined"),e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}},function(e,t,r){var n=r(0).IsFiniteNonNegativeNumber,i=r(1).assert;t.DequeueValue=function(e){i("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),i(e._queue.length>0,"Spec-level failure: should never dequeue from an empty queue.");var t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value},t.EnqueueValueWithSize=function(e,t,r){if(i("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."),r=Number(r),!n(r))throw new RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r},t.PeekQueueValue=function(e){return i("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),i(e._queue.length>0,"Spec-level failure: should never peek at an empty queue."),e._queue[0].value},t.ResetQueue=function(e){i("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."),e._queue=[],e._queueTotalSize=0}},function(e,t,r){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=r(0),o=a.ArrayBufferCopy,s=a.CreateIterResultObject,l=a.IsFiniteNonNegativeNumber,u=a.InvokeOrNoop,c=a.PromiseInvokeOrNoop,h=a.TransferArrayBuffer,d=a.ValidateAndNormalizeQueuingStrategy,f=a.ValidateAndNormalizeHighWaterMark,p=r(0),m=p.createArrayFromList,v=p.createDataProperty,g=p.typeIsObject,b=r(1),y=b.assert,_=b.rethrowAssertionErrorRejection,A=r(3),S=A.DequeueValue,w=A.EnqueueValueWithSize,P=A.ResetQueue,k=r(2),C=k.AcquireWritableStreamDefaultWriter,R=k.IsWritableStream,x=k.IsWritableStreamLocked,T=k.WritableStreamAbort,E=k.WritableStreamDefaultWriterCloseWithErrorPropagation,O=k.WritableStreamDefaultWriterRelease,L=k.WritableStreamDefaultWriterWrite,I=k.WritableStreamCloseQueuedOrInFlight,F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.size,a=r.highWaterMark;i(this,e),this._state="readable",this._reader=void 0,this._storedError=void 0,this._disturbed=!1,this._readableStreamController=void 0;var o=t.type;if("bytes"===String(o))void 0===a&&(a=0),this._readableStreamController=new de(this,t,a);else{if(void 0!==o)throw new RangeError("Invalid type is specified");void 0===a&&(a=1),this._readableStreamController=new ne(this,t,n,a)}}return n(e,[{key:"cancel",value:function(e){return!1===j(this)?Promise.reject(Te("cancel")):!0===M(this)?Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")):W(this,e)}},{key:"getReader",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mode;if(!1===j(this))throw Te("getReader");if(void 0===e)return D(this);if("byob"===(e=String(e)))return new Q(this);throw new RangeError("Invalid mode is specified")}},{key:"pipeThrough",value:function(e,t){var r=e.writable,n=e.readable;return function(e){try{Promise.prototype.then.call(e,void 0,function(){})}catch(e){}}(this.pipeTo(r,t)),n}},{key:"pipeTo",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.preventClose,i=r.preventAbort,a=r.preventCancel;if(!1===j(this))return Promise.reject(Te("pipeTo"));if(!1===R(e))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));if(n=Boolean(n),i=Boolean(i),a=Boolean(a),!0===M(this))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));if(!0===x(e))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));var o=D(this),s=C(e),l=!1,u=Promise.resolve();return new Promise(function(r,c){var h,d,f;if(v(t,o._closedPromise,function(t){!1===i?g(function(){return T(e,t)},!0,t):b(!0,t)}),v(e,s._closedPromise,function(e){!1===a?g(function(){return W(t,e)},!0,e):b(!0,e)}),h=t,d=o._closedPromise,f=function(){!1===n?g(function(){return E(s)}):b()},"closed"===h._state?f():d.then(f).catch(_),!0===I(e)||"closed"===e._state){var p=new TypeError("the destination writable stream closed before all data could be piped to it");!1===a?g(function(){return W(t,p)},!0,p):b(!0,p)}function m(){var e=u;return u.then(function(){return e!==u?m():void 0})}function v(e,t,r){"errored"===e._state?r(e._storedError):t.catch(r).catch(_)}function g(t,r,n){function i(){t().then(function(){return y(r,n)},function(e){return y(!0,e)}).catch(_)}!0!==l&&(l=!0,"writable"===e._state&&!1===I(e)?m().then(i):i())}function b(t,r){!0!==l&&(l=!0,"writable"===e._state&&!1===I(e)?m().then(function(){return y(t,r)}).catch(_):y(t,r))}function y(e,t){O(s),te(o),e?c(t):r(void 0)}(function e(){return u=Promise.resolve(),!0===l?Promise.resolve():s._readyPromise.then(function(){return re(o).then(function(e){var t=e.value;!0!==e.done&&(u=L(s,t).catch(function(){}))})}).then(e)})().catch(function(e){u=Promise.resolve(),_(e)})})}},{key:"tee",value:function(){if(!1===j(this))throw Te("tee");var e=N(this,!1);return m(e)}},{key:"locked",get:function(){if(!1===j(this))throw Te("locked");return M(this)}}]),e}();function D(e){return new J(e)}function j(e){return!!g(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function M(e){return y(!0===j(e),"IsReadableStreamLocked should only be used on known readable streams"),void 0!==e._reader}function N(e,t){y(!0===j(e)),y("boolean"==typeof t);var r=D(e),n={closedOrErrored:!1,canceled1:!1,canceled2:!1,reason1:void 0,reason2:void 0};n.promise=new Promise(function(e){n._resolve=e});var i=function(){return function e(){var t=e._reader,r=e._branch1,n=e._branch2,i=e._teeState;return re(t).then(function(e){y(g(e));var t=e.value,a=e.done;if(y("boolean"==typeof a),!0===a&&!1===i.closedOrErrored&&(!1===i.canceled1&&oe(r),!1===i.canceled2&&oe(n),i.closedOrErrored=!0),!0!==i.closedOrErrored){var o=t,s=t;!1===i.canceled1&&se(r,o),!1===i.canceled2&&se(n,s)}})}}();i._reader=r,i._teeState=n,i._cloneForBranch2=t;var a=function(){return function e(t){var r=e._stream,n=e._teeState;n.canceled1=!0;n.reason1=t;if(!0===n.canceled2){var i=m([n.reason1,n.reason2]),a=W(r,i);n._resolve(a)}return n.promise}}();a._stream=e,a._teeState=n;var o=function(){return function e(t){var r=e._stream,n=e._teeState;n.canceled2=!0;n.reason2=t;if(!0===n.canceled1){var i=m([n.reason1,n.reason2]),a=W(r,i);n._resolve(a)}return n.promise}}();o._stream=e,o._teeState=n;var s=Object.create(Object.prototype);v(s,"pull",i),v(s,"cancel",a);var l=new F(s),u=Object.create(Object.prototype);v(u,"pull",i),v(u,"cancel",o);var c=new F(u);return i._branch1=l._readableStreamController,i._branch2=c._readableStreamController,r._closedPromise.catch(function(e){!0!==n.closedOrErrored&&(le(i._branch1,e),le(i._branch2,e),n.closedOrErrored=!0)}),[l,c]}function q(e){return y(!0===K(e._reader)),y("readable"===e._state||"closed"===e._state),new Promise(function(t,r){var n={_resolve:t,_reject:r};e._reader._readIntoRequests.push(n)})}function U(e){return y(!0===Z(e._reader)),y("readable"===e._state),new Promise(function(t,r){var n={_resolve:t,_reject:r};e._reader._readRequests.push(n)})}function W(e,t){return e._disturbed=!0,"closed"===e._state?Promise.resolve(void 0):"errored"===e._state?Promise.reject(e._storedError):(B(e),e._readableStreamController.__cancelSteps(t).then(function(){}))}function B(e){y("readable"===e._state),e._state="closed";var t=e._reader;if(void 0!==t){if(!0===Z(t)){for(var r=0;r<t._readRequests.length;r++){(0,t._readRequests[r]._resolve)(s(void 0,!0))}t._readRequests=[]}!function(e){y(void 0!==e._closedPromise_resolve),y(void 0!==e._closedPromise_reject),e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}(t)}}function z(e,t){y(!0===j(e),"stream must be ReadableStream"),y("readable"===e._state,"state must be readable"),e._state="errored",e._storedError=t;var r=e._reader;if(void 0!==r){if(!0===Z(r)){for(var n=0;n<r._readRequests.length;n++){r._readRequests[n]._reject(t)}r._readRequests=[]}else{y(K(r),"reader must be ReadableStreamBYOBReader");for(var i=0;i<r._readIntoRequests.length;i++){r._readIntoRequests[i]._reject(t)}r._readIntoRequests=[]}Le(r,t),r._closedPromise.catch(function(){})}}function G(e,t,r){var n=e._reader;y(n._readRequests.length>0),n._readRequests.shift()._resolve(s(t,r))}function H(e){return e._reader._readIntoRequests.length}function X(e){return e._reader._readRequests.length}function V(e){var t=e._reader;return void 0!==t&&!1!==K(t)}function Y(e){var t=e._reader;return void 0!==t&&!1!==Z(t)}e.exports={ReadableStream:F,IsReadableStreamDisturbed:function(e){return y(!0===j(e),"IsReadableStreamDisturbed should only be used on known readable streams"),e._disturbed},ReadableStreamDefaultControllerClose:oe,ReadableStreamDefaultControllerEnqueue:se,ReadableStreamDefaultControllerError:le,ReadableStreamDefaultControllerGetDesiredSize:ce};var J=function(){function e(t){if(i(this,e),!1===j(t))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance");if(!0===M(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");$(this,t),this._readRequests=[]}return n(e,[{key:"cancel",value:function(e){return!1===Z(this)?Promise.reject(Oe("cancel")):void 0===this._ownerReadableStream?Promise.reject(Ee("cancel")):ee(this,e)}},{key:"read",value:function(){return!1===Z(this)?Promise.reject(Oe("read")):void 0===this._ownerReadableStream?Promise.reject(Ee("read from")):re(this)}},{key:"releaseLock",value:function(){if(!1===Z(this))throw Oe("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");te(this)}}},{key:"closed",get:function(){return!1===Z(this)?Promise.reject(Oe("closed")):this._closedPromise}}]),e}(),Q=function(){function e(t){if(i(this,e),!j(t))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source");if(!1===fe(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");if(M(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");$(this,t),this._readIntoRequests=[]}return n(e,[{key:"cancel",value:function(e){return K(this)?void 0===this._ownerReadableStream?Promise.reject(Ee("cancel")):ee(this,e):Promise.reject(Ie("cancel"))}},{key:"read",value:function(e){return K(this)?void 0===this._ownerReadableStream?Promise.reject(Ee("read from")):ArrayBuffer.isView(e)?0===e.byteLength?Promise.reject(new TypeError("view must have non-zero byteLength")):function(e,t){var r=e._ownerReadableStream;if(y(void 0!==r),r._disturbed=!0,"errored"===r._state)return Promise.reject(r._storedError);return function(e,t){var r=e._controlledReadableStream,n=1;t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT);var i=t.constructor,a={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,ctor:i,readerType:"byob"};if(e._pendingPullIntos.length>0)return a.buffer=h(a.buffer),e._pendingPullIntos.push(a),q(r);if("closed"===r._state){var o=new t.constructor(a.buffer,a.byteOffset,0);return Promise.resolve(s(o,!0))}if(e._queueTotalSize>0){if(!0===_e(e,a)){var l=be(a);return Se(e),Promise.resolve(s(l,!1))}if(!0===e._closeRequested){var u=new TypeError("Insufficient bytes to fill elements in the given buffer");return Re(e,u),Promise.reject(u)}}a.buffer=h(a.buffer),e._pendingPullIntos.push(a);var c=q(r);return me(e),c}(r._readableStreamController,t)}(this,e):Promise.reject(new TypeError("view must be an array buffer view")):Promise.reject(Ie("read"))}},{key:"releaseLock",value:function(){if(!K(this))throw Ie("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");te(this)}}},{key:"closed",get:function(){return K(this)?this._closedPromise:Promise.reject(Ie("closed"))}}]),e}();function K(e){return!!g(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function Z(e){return!!g(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function $(e,t){e._ownerReadableStream=t,t._reader=e,"readable"===t._state?function(e){e._closedPromise=new Promise(function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r})}(e):"closed"===t._state?function(e){e._closedPromise=Promise.resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}(e):(y("errored"===t._state,"state must be errored"),function(e,t){e._closedPromise=Promise.reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}(e,t._storedError),e._closedPromise.catch(function(){}))}function ee(e,t){var r=e._ownerReadableStream;return y(void 0!==r),W(r,t)}function te(e){y(void 0!==e._ownerReadableStream),y(e._ownerReadableStream._reader===e),"readable"===e._ownerReadableStream._state?Le(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(e,t){y(void 0===e._closedPromise_resolve),y(void 0===e._closedPromise_reject),e._closedPromise=Promise.reject(t)}(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._closedPromise.catch(function(){}),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function re(e){var t=e._ownerReadableStream;return y(void 0!==t),t._disturbed=!0,"closed"===t._state?Promise.resolve(s(void 0,!0)):"errored"===t._state?Promise.reject(t._storedError):(y("readable"===t._state),t._readableStreamController.__pullSteps())}var ne=function(){function e(t,r,n,a){if(i(this,e),!1===j(t))throw new TypeError("ReadableStreamDefaultController can only be constructed with a ReadableStream instance");if(void 0!==t._readableStreamController)throw new TypeError("ReadableStreamDefaultController instances can only be created by the ReadableStream constructor");this._controlledReadableStream=t,this._underlyingSource=r,this._queue=void 0,this._queueTotalSize=void 0,P(this),this._started=!1,this._closeRequested=!1,this._pullAgain=!1,this._pulling=!1;var o=d(n,a);this._strategySize=o.size,this._strategyHWM=o.highWaterMark;var s=this,l=u(r,"start",[this]);Promise.resolve(l).then(function(){s._started=!0,y(!1===s._pulling),y(!1===s._pullAgain),ae(s)},function(e){ue(s,e)}).catch(_)}return n(e,[{key:"close",value:function(){if(!1===ie(this))throw Fe("close");if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");var e=this._controlledReadableStream._state;if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed");oe(this)}},{key:"enqueue",value:function(e){if(!1===ie(this))throw Fe("enqueue");if(!0===this._closeRequested)throw new TypeError("stream is closed or draining");var t=this._controlledReadableStream._state;if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to");return se(this,e)}},{key:"error",value:function(e){if(!1===ie(this))throw Fe("error");var t=this._controlledReadableStream;if("readable"!==t._state)throw new TypeError("The stream is "+t._state+" and so cannot be errored");le(this,e)}},{key:"__cancelSteps",value:function(e){return P(this),c(this._underlyingSource,"cancel",[e])}},{key:"__pullSteps",value:function(){var e=this._controlledReadableStream;if(this._queue.length>0){var t=S(this);return!0===this._closeRequested&&0===this._queue.length?B(e):ae(this),Promise.resolve(s(t,!1))}var r=U(e);return ae(this),r}},{key:"desiredSize",get:function(){if(!1===ie(this))throw Fe("desiredSize");return ce(this)}}]),e}();function ie(e){return!!g(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingSource")}function ae(e){!1!==function(e){var t=e._controlledReadableStream;if("closed"===t._state||"errored"===t._state)return!1;if(!0===e._closeRequested)return!1;if(!1===e._started)return!1;if(!0===M(t)&&X(t)>0)return!0;if(ce(e)>0)return!0;return!1}(e)&&(!0!==e._pulling?(y(!1===e._pullAgain),e._pulling=!0,c(e._underlyingSource,"pull",[e]).then(function(){if(e._pulling=!1,!0===e._pullAgain)return e._pullAgain=!1,ae(e)},function(t){ue(e,t)}).catch(_)):e._pullAgain=!0)}function oe(e){var t=e._controlledReadableStream;y(!1===e._closeRequested),y("readable"===t._state),e._closeRequested=!0,0===e._queue.length&&B(t)}function se(e,t){var r=e._controlledReadableStream;if(y(!1===e._closeRequested),y("readable"===r._state),!0===M(r)&&X(r)>0)G(r,t,!1);else{var n=1;if(void 0!==e._strategySize){var i=e._strategySize;try{n=i(t)}catch(t){throw ue(e,t),t}}try{w(e,t,n)}catch(t){throw ue(e,t),t}}ae(e)}function le(e,t){var r=e._controlledReadableStream;y("readable"===r._state),P(e),z(r,t)}function ue(e,t){"readable"===e._controlledReadableStream._state&&le(e,t)}function ce(e){var t=e._controlledReadableStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}var he=function(){function e(t,r){i(this,e),this._associatedReadableByteStreamController=t,this._view=r}return n(e,[{key:"respond",value:function(e){if(!1===pe(this))throw De("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");!function(e,t){if(t=Number(t),!1===l(t))throw new RangeError("bytesWritten must be a finite");y(e._pendingPullIntos.length>0),ke(e,t)}(this._associatedReadableByteStreamController,e)}},{key:"respondWithNewView",value:function(e){if(!1===pe(this))throw De("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views");!function(e,t){y(e._pendingPullIntos.length>0);var r=e._pendingPullIntos[0];if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");r.buffer=t.buffer,ke(e,t.byteLength)}(this._associatedReadableByteStreamController,e)}},{key:"view",get:function(){return this._view}}]),e}(),de=function(){function e(t,r,n){if(i(this,e),!1===j(t))throw new TypeError("ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source");if(void 0!==t._readableStreamController)throw new TypeError("ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source");this._controlledReadableStream=t,this._underlyingByteSource=r,this._pullAgain=!1,this._pulling=!1,ve(this),this._queue=this._queueTotalSize=void 0,P(this),this._closeRequested=!1,this._started=!1,this._strategyHWM=f(n);var a=r.autoAllocateChunkSize;if(void 0!==a&&(!1===Number.isInteger(a)||a<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer");this._autoAllocateChunkSize=a,this._pendingPullIntos=[];var o=this,s=u(r,"start",[this]);Promise.resolve(s).then(function(){o._started=!0,y(!1===o._pulling),y(!1===o._pullAgain),me(o)},function(e){"readable"===t._state&&Re(o,e)}).catch(_)}return n(e,[{key:"close",value:function(){if(!1===fe(this))throw je("close");if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");var e=this._controlledReadableStream._state;if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed");!function(e){var t=e._controlledReadableStream;if(y(!1===e._closeRequested),y("readable"===t._state),e._queueTotalSize>0)return void(e._closeRequested=!0);if(e._pendingPullIntos.length>0){var r=e._pendingPullIntos[0];if(r.bytesFilled>0){var n=new TypeError("Insufficient bytes to fill elements in the given buffer");throw Re(e,n),n}}B(t)}(this)}},{key:"enqueue",value:function(e){if(!1===fe(this))throw je("enqueue");if(!0===this._closeRequested)throw new TypeError("stream is closed or draining");var t=this._controlledReadableStream._state;if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to");if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController");!function(e,t){var r=e._controlledReadableStream;y(!1===e._closeRequested),y("readable"===r._state);var n=t.buffer,i=t.byteOffset,a=t.byteLength,o=h(n);if(!0===Y(r))if(0===X(r))ye(e,o,i,a);else{y(0===e._queue.length);var s=new Uint8Array(o,i,a);G(r,s,!1)}else!0===V(r)?(ye(e,o,i,a),Pe(e)):(y(!1===M(r),"stream must not be locked"),ye(e,o,i,a))}(this,e)}},{key:"error",value:function(e){if(!1===fe(this))throw je("error");var t=this._controlledReadableStream;if("readable"!==t._state)throw new TypeError("The stream is "+t._state+" and so cannot be errored");Re(this,e)}},{key:"__cancelSteps",value:function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos[0].bytesFilled=0);return P(this),c(this._underlyingByteSource,"cancel",[e])}},{key:"__pullSteps",value:function(){var e=this._controlledReadableStream;if(y(!0===Y(e)),this._queueTotalSize>0){y(0===X(e));var t=this._queue.shift();this._queueTotalSize-=t.byteLength,Se(this);var r=void 0;try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(e){return Promise.reject(e)}return Promise.resolve(s(r,!1))}var n=this._autoAllocateChunkSize;if(void 0!==n){var i=void 0;try{i=new ArrayBuffer(n)}catch(e){return Promise.reject(e)}var a={buffer:i,byteOffset:0,byteLength:n,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(a)}var o=U(e);return me(this),o}},{key:"byobRequest",get:function(){if(!1===fe(this))throw je("byobRequest");if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos[0],t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled);this._byobRequest=new he(this,t)}return this._byobRequest}},{key:"desiredSize",get:function(){if(!1===fe(this))throw je("desiredSize");return xe(this)}}]),e}();function fe(e){return!!g(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingByteSource")}function pe(e){return!!g(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function me(e){!1!==function(e){var t=e._controlledReadableStream;if("readable"!==t._state)return!1;if(!0===e._closeRequested)return!1;if(!1===e._started)return!1;if(!0===Y(t)&&X(t)>0)return!0;if(!0===V(t)&&H(t)>0)return!0;if(xe(e)>0)return!0;return!1}(e)&&(!0!==e._pulling?(y(!1===e._pullAgain),e._pulling=!0,c(e._underlyingByteSource,"pull",[e]).then(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,me(e))},function(t){"readable"===e._controlledReadableStream._state&&Re(e,t)}).catch(_)):e._pullAgain=!0)}function ve(e){we(e),e._pendingPullIntos=[]}function ge(e,t){y("errored"!==e._state,"state must not be errored");var r=!1;"closed"===e._state&&(y(0===t.bytesFilled),r=!0);var n=be(t);"default"===t.readerType?G(e,n,r):(y("byob"===t.readerType),function(e,t,r){var n=e._reader;y(n._readIntoRequests.length>0),n._readIntoRequests.shift()._resolve(s(t,r))}(e,n,r))}function be(e){var t=e.bytesFilled,r=e.elementSize;return y(t<=e.byteLength),y(t%r==0),new e.ctor(e.buffer,e.byteOffset,t/r)}function ye(e,t,r,n){e._queue.push({buffer:t,byteOffset:r,byteLength:n}),e._queueTotalSize+=n}function _e(e,t){var r=t.elementSize,n=t.bytesFilled-t.bytesFilled%r,i=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),a=t.bytesFilled+i,s=a-a%r,l=i,u=!1;s>n&&(l=s-t.bytesFilled,u=!0);for(var c=e._queue;l>0;){var h=c[0],d=Math.min(l,h.byteLength),f=t.byteOffset+t.bytesFilled;o(t.buffer,f,h.buffer,h.byteOffset,d),h.byteLength===d?c.shift():(h.byteOffset+=d,h.byteLength-=d),e._queueTotalSize-=d,Ae(e,d,t),l-=d}return!1===u&&(y(0===e._queueTotalSize,"queue must be empty"),y(t.bytesFilled>0),y(t.bytesFilled<t.elementSize)),u}function Ae(e,t,r){y(0===e._pendingPullIntos.length||e._pendingPullIntos[0]===r),we(e),r.bytesFilled+=t}function Se(e){y("readable"===e._controlledReadableStream._state),0===e._queueTotalSize&&!0===e._closeRequested?B(e._controlledReadableStream):me(e)}function we(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function Pe(e){for(y(!1===e._closeRequested);e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return;var t=e._pendingPullIntos[0];!0===_e(e,t)&&(Ce(e),ge(e._controlledReadableStream,t))}}function ke(e,t){var r=e._pendingPullIntos[0],n=e._controlledReadableStream;if("closed"===n._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");!function(e,t){t.buffer=h(t.buffer),y(0===t.bytesFilled,"bytesFilled must be 0");var r=e._controlledReadableStream;if(!0===V(r))for(;H(r)>0;)ge(r,Ce(e))}(e,r)}else y("readable"===n._state),function(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range");if(Ae(e,t,r),!(r.bytesFilled<r.elementSize)){Ce(e);var n=r.bytesFilled%r.elementSize;if(n>0){var i=r.byteOffset+r.bytesFilled,a=r.buffer.slice(i-n,i);ye(e,a,0,a.byteLength)}r.buffer=h(r.buffer),r.bytesFilled-=n,ge(e._controlledReadableStream,r),Pe(e)}}(e,t,r)}function Ce(e){var t=e._pendingPullIntos.shift();return we(e),t}function Re(e,t){var r=e._controlledReadableStream;y("readable"===r._state),ve(e),P(e),z(r,t)}function xe(e){var t=e._controlledReadableStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Te(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}function Ee(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function Oe(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}function Le(e,t){y(void 0!==e._closedPromise_resolve),y(void 0!==e._closedPromise_reject),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function Ie(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}function Fe(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function De(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function je(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}},function(e,t,r){var n=r(6),i=r(4),a=r(2);t.TransformStream=n.TransformStream,t.ReadableStream=i.ReadableStream,t.IsReadableStreamDisturbed=i.IsReadableStreamDisturbed,t.ReadableStreamDefaultControllerClose=i.ReadableStreamDefaultControllerClose,t.ReadableStreamDefaultControllerEnqueue=i.ReadableStreamDefaultControllerEnqueue,t.ReadableStreamDefaultControllerError=i.ReadableStreamDefaultControllerError,t.ReadableStreamDefaultControllerGetDesiredSize=i.ReadableStreamDefaultControllerGetDesiredSize,t.AcquireWritableStreamDefaultWriter=a.AcquireWritableStreamDefaultWriter,t.IsWritableStream=a.IsWritableStream,t.IsWritableStreamLocked=a.IsWritableStreamLocked,t.WritableStream=a.WritableStream,t.WritableStreamAbort=a.WritableStreamAbort,t.WritableStreamDefaultControllerError=a.WritableStreamDefaultControllerError,t.WritableStreamDefaultWriterCloseWithErrorPropagation=a.WritableStreamDefaultWriterCloseWithErrorPropagation,t.WritableStreamDefaultWriterRelease=a.WritableStreamDefaultWriterRelease,t.WritableStreamDefaultWriterWrite=a.WritableStreamDefaultWriterWrite},function(e,t,r){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=r(1).assert,o=r(0),s=o.InvokeOrNoop,l=o.PromiseInvokeOrPerformFallback,u=o.PromiseInvokeOrNoop,c=o.typeIsObject,h=r(4),d=h.ReadableStream,f=h.ReadableStreamDefaultControllerClose,p=h.ReadableStreamDefaultControllerEnqueue,m=h.ReadableStreamDefaultControllerError,v=h.ReadableStreamDefaultControllerGetDesiredSize,g=r(2),b=g.WritableStream,y=g.WritableStreamDefaultControllerError;function _(e,t){if(!0===e._errored)throw new TypeError("TransformStream is already errored");if(!0===e._readableClosed)throw new TypeError("Readable side is already closed");var r=e._readableController;try{p(r,t)}catch(t){throw e._readableClosed=!0,S(e,t),e._storedError}!0===v(r)<=0&&!1===e._backpressure&&k(e,!0)}function A(e){a(!1===e._errored),a(!1===e._readableClosed);try{f(e._readableController)}catch(e){a(!1)}e._readableClosed=!0}function S(e,t){!1===e._errored&&w(e,t)}function w(e,t){a(!1===e._errored),e._errored=!0,e._storedError=t,!1===e._writableDone&&y(e._writableController,t),!1===e._readableClosed&&m(e._readableController,t)}function P(e){return a(void 0!==e._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),!1===e._backpressure?Promise.resolve():(a(!0===e._backpressure,"_backpressure should have been initialized"),e._backpressureChangePromise)}function k(e,t){a(e._backpressure!==t,"TransformStreamSetBackpressure() should be called only when backpressure is changed"),void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(t),e._backpressureChangePromise=new Promise(function(t){e._backpressureChangePromise_resolve=t}),e._backpressureChangePromise.then(function(e){a(e!==t,"_backpressureChangePromise should be fulfilled only when backpressure is changed")}),e._backpressure=t}function C(e,t){return _(t._controlledTransformStream,e),Promise.resolve()}function R(e){return!!c(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function x(e){return!!c(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}var T=function(){function e(t,r){i(this,e),this._transformStream=t,this._startPromise=r}return n(e,[{key:"start",value:function(e){var t=this._transformStream;return t._writableController=e,this._startPromise.then(function(){return P(t)})}},{key:"write",value:function(e){return function(e,t){a(!1===e._errored),a(!1===e._transforming),a(!1===e._backpressure),e._transforming=!0;var r=e._transformer,n=e._transformStreamController;return l(r,"transform",[t,n],C,[t,n]).then(function(){return e._transforming=!1,P(e)},function(t){return S(e,t),Promise.reject(t)})}(this._transformStream,e)}},{key:"abort",value:function(){var e=this._transformStream;e._writableDone=!0,w(e,new TypeError("Writable side aborted"))}},{key:"close",value:function(){var e=this._transformStream;return a(!1===e._transforming),e._writableDone=!0,u(e._transformer,"flush",[e._transformStreamController]).then(function(){return!0===e._errored?Promise.reject(e._storedError):(!1===e._readableClosed&&A(e),Promise.resolve())}).catch(function(t){return S(e,t),Promise.reject(e._storedError)})}}]),e}(),E=function(){function e(t,r){i(this,e),this._transformStream=t,this._startPromise=r}return n(e,[{key:"start",value:function(e){var t=this._transformStream;return t._readableController=e,this._startPromise.then(function(){return a(void 0!==t._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),!0===t._backpressure?Promise.resolve():(a(!1===t._backpressure,"_backpressure should have been initialized"),t._backpressureChangePromise)})}},{key:"pull",value:function(){var e=this._transformStream;return a(!0===e._backpressure,"pull() should be never called while _backpressure is false"),a(void 0!==e._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),k(e,!1),e._backpressureChangePromise}},{key:"cancel",value:function(){var e=this._transformStream;e._readableClosed=!0,w(e,new TypeError("Readable side canceled"))}}]),e}(),O=function(){function e(t){if(i(this,e),!1===x(t))throw new TypeError("TransformStreamDefaultController can only be constructed with a TransformStream instance");if(void 0!==t._transformStreamController)throw new TypeError("TransformStreamDefaultController instances can only be created by the TransformStream constructor");this._controlledTransformStream=t}return n(e,[{key:"enqueue",value:function(e){if(!1===R(this))throw I("enqueue");_(this._controlledTransformStream,e)}},{key:"close",value:function(){if(!1===R(this))throw I("close");!function(e){if(!0===e._errored)throw new TypeError("TransformStream is already errored");if(!0===e._readableClosed)throw new TypeError("Readable side is already closed");A(e)}(this._controlledTransformStream)}},{key:"error",value:function(e){if(!1===R(this))throw I("error");!function(e,t){if(!0===e._errored)throw new TypeError("TransformStream is already errored");w(e,t)}(this._controlledTransformStream,e)}},{key:"desiredSize",get:function(){if(!1===R(this))throw I("desiredSize");var e=this._controlledTransformStream._readableController;return v(e)}}]),e}(),L=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this._transformer=t;var r=t.readableStrategy,n=t.writableStrategy;this._transforming=!1,this._errored=!1,this._storedError=void 0,this._writableController=void 0,this._readableController=void 0,this._transformStreamController=void 0,this._writableDone=!1,this._readableClosed=!1,this._backpressure=void 0,this._backpressureChangePromise=void 0,this._backpressureChangePromise_resolve=void 0,this._transformStreamController=new O(this);var o=void 0,l=new Promise(function(e){o=e}),u=new E(this,l);this._readable=new d(u,r);var c=new T(this,l);this._writable=new b(c,n),a(void 0!==this._writableController),a(void 0!==this._readableController),k(this,v(this._readableController)<=0);var h=this,f=s(t,"start",[h._transformStreamController]);o(f),l.catch(function(e){!1===h._errored&&(h._errored=!0,h._storedError=e)})}return n(e,[{key:"readable",get:function(){if(!1===x(this))throw F("readable");return this._readable}},{key:"writable",get:function(){if(!1===x(this))throw F("writable");return this._writable}}]),e}();function I(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function F(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}e.exports={TransformStream:L}},function(e,t,r){e.exports=r(5)}]))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFJS=t.globalScope=void 0;var n,i=r(69),a=r(15),o=r(0),s=r(72),l=r(20),u=(n=l)&&n.__esModule?n:{default:n},c=r(71),h=r(73),d=r(74);u.default.PDFJS||(u.default.PDFJS={});var f=u.default.PDFJS;f.version="1.10.100",f.build="ea29ec83",f.pdfBug=!1,void 0!==f.verbosity&&(0,o.setVerbosityLevel)(f.verbosity),delete f.verbosity,Object.defineProperty(f,"verbosity",{get:function(){return(0,o.getVerbosityLevel)()},set:function(e){(0,o.setVerbosityLevel)(e)},enumerable:!0,configurable:!0}),f.VERBOSITY_LEVELS=o.VERBOSITY_LEVELS,f.OPS=o.OPS,f.UNSUPPORTED_FEATURES=o.UNSUPPORTED_FEATURES,f.isValidUrl=a.isValidUrl,f.shadow=o.shadow,f.createBlob=o.createBlob,f.createObjectURL=function(e,t){return(0,o.createObjectURL)(e,t,f.disableCreateObjectURL)},Object.defineProperty(f,"isLittleEndian",{configurable:!0,get:function(){return(0,o.shadow)(f,"isLittleEndian",(0,o.isLittleEndian)())}}),f.removeNullCharacters=o.removeNullCharacters,f.PasswordResponses=o.PasswordResponses,f.PasswordException=o.PasswordException,f.UnknownErrorException=o.UnknownErrorException,f.InvalidPDFException=o.InvalidPDFException,f.MissingPDFException=o.MissingPDFException,f.UnexpectedResponseException=o.UnexpectedResponseException,f.Util=o.Util,f.PageViewport=o.PageViewport,f.createPromiseCapability=o.createPromiseCapability,f.maxImageSize=void 0===f.maxImageSize?-1:f.maxImageSize,f.cMapUrl=void 0===f.cMapUrl?null:f.cMapUrl,f.cMapPacked=void 0!==f.cMapPacked&&f.cMapPacked,f.disableFontFace=void 0!==f.disableFontFace&&f.disableFontFace,f.imageResourcesPath=void 0===f.imageResourcesPath?"":f.imageResourcesPath,f.disableWorker=void 0!==f.disableWorker&&f.disableWorker,f.workerSrc=void 0===f.workerSrc?null:f.workerSrc,f.workerPort=void 0===f.workerPort?null:f.workerPort,f.disableRange=void 0!==f.disableRange&&f.disableRange,f.disableStream=void 0!==f.disableStream&&f.disableStream,f.disableAutoFetch=void 0!==f.disableAutoFetch&&f.disableAutoFetch,f.pdfBug=void 0!==f.pdfBug&&f.pdfBug,f.postMessageTransfers=void 0===f.postMessageTransfers||f.postMessageTransfers,f.disableCreateObjectURL=void 0!==f.disableCreateObjectURL&&f.disableCreateObjectURL,f.disableWebGL=void 0===f.disableWebGL||f.disableWebGL,f.externalLinkTarget=void 0===f.externalLinkTarget?a.LinkTarget.NONE:f.externalLinkTarget,f.externalLinkRel=void 0===f.externalLinkRel?a.DEFAULT_LINK_REL:f.externalLinkRel,f.isEvalSupported=void 0===f.isEvalSupported||f.isEvalSupported,f.pdfjsNext=void 0!==f.pdfjsNext&&f.pdfjsNext;var p=f.openExternalLinksInNewWindow;delete f.openExternalLinksInNewWindow,Object.defineProperty(f,"openExternalLinksInNewWindow",{get:function(){return f.externalLinkTarget===a.LinkTarget.BLANK},set:function(e){e&&(0,o.deprecated)('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'),f.externalLinkTarget===a.LinkTarget.NONE?f.externalLinkTarget=e?a.LinkTarget.BLANK:a.LinkTarget.NONE:(0,o.warn)("PDFJS.externalLinkTarget is already initialized")},enumerable:!0,configurable:!0}),p&&(f.openExternalLinksInNewWindow=p),f.getDocument=i.getDocument,f.LoopbackPort=i.LoopbackPort,f.PDFDataRangeTransport=i.PDFDataRangeTransport,f.PDFWorker=i.PDFWorker,f.hasCanvasTypedArrays=!0,f.CustomStyle=a.CustomStyle,f.LinkTarget=a.LinkTarget,f.addLinkAttributes=a.addLinkAttributes,f.getFilenameFromUrl=a.getFilenameFromUrl,f.isExternalLinkTargetSet=a.isExternalLinkTargetSet,f.AnnotationLayer=s.AnnotationLayer,f.renderTextLayer=h.renderTextLayer,f.Metadata=c.Metadata,f.SVGGraphics=d.SVGGraphics,f.UnsupportedManager=i._UnsupportedManager,t.globalScope=u.default,t.PDFJS=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0;var n=r(0);function i(e){this.docId=e,this.styleElement=null,this.nativeFontFaces=[],this.loadTestFontId=0,this.loadingContext={requests:[],nextRequestId:0}}i.prototype={insertRule:function(e){var t=this.styleElement;t||((t=this.styleElement=document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_"+this.docId,document.documentElement.getElementsByTagName("head")[0].appendChild(t));var r=t.sheet;r.insertRule(e,r.cssRules.length)},clear:function(){this.styleElement&&(this.styleElement.remove(),this.styleElement=null),this.nativeFontFaces.forEach(function(e){document.fonts.delete(e)}),this.nativeFontFaces.length=0}};Object.defineProperty(i.prototype,"loadTestFont",{get:function(){return(0,n.shadow)(this,"loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))},configurable:!0}),i.prototype.addNativeFontFace=function(e){this.nativeFontFaces.push(e),document.fonts.add(e)},i.prototype.bind=function(e,t){for(var r=[],a=[],o=[],s=function(e){return e.loaded.catch(function(t){(0,n.warn)('Failed to load font "'+e.family+'": '+t)})},l=i.isFontLoadingAPISupported&&!i.isSyncFontLoadingSupported,u=0,c=e.length;u<c;u++){var h=e[u];if(!h.attached&&!1!==h.loading)if(h.attached=!0,l){var d=h.createNativeFontFace();d&&(this.addNativeFontFace(d),o.push(s(d)))}else{var f=h.createFontFaceRule();f&&(this.insertRule(f),r.push(f),a.push(h))}}var p=this.queueLoadingCallback(t);l?Promise.all(o).then(function(){p.complete()}):r.length>0&&!i.isSyncFontLoadingSupported?this.prepareFontLoadEvent(r,a,p):p.complete()},i.prototype.queueLoadingCallback=function(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-"+t.nextRequestId++,complete:function(){for((0,n.assert)(!r.end,"completeRequest() cannot be called twice"),r.end=Date.now();t.requests.length>0&&t.requests[0].end;){var e=t.requests.shift();setTimeout(e.callback,0)}},callback:e,started:Date.now()};return t.requests.push(r),r},i.prototype.prepareFontLoadEvent=function(e,t,r){function i(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function a(e,t,r,n){return e.substr(0,t)+n+e.substr(t+r)}var o,s,l=document.createElement("canvas");l.width=1,l.height=1;var u=l.getContext("2d"),c=0;var h="lt"+Date.now()+this.loadTestFontId++,d=this.loadTestFont,f=i(d=a(d,976,h.length,h),16);for(o=0,s=h.length-3;o<s;o+=4)f=f-1482184792+i(h,o)|0;o<h.length&&(f=f-1482184792+i(h+"XXX",o)|0),d=a(d,16,4,(0,n.string32)(f));var p='@font-face { font-family:"'+h+'";src:'+("url(data:font/opentype;base64,"+btoa(d)+");")+"}";this.insertRule(p);var m=[];for(o=0,s=t.length;o<s;o++)m.push(t[o].loadedName);m.push(h);var v=document.createElement("div");for(v.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),o=0,s=m.length;o<s;++o){var g=document.createElement("span");g.textContent="Hi",g.style.fontFamily=m[o],v.appendChild(g)}document.body.appendChild(v),function e(t,r){if(++c>30)return(0,n.warn)("Load test font never loaded."),void r();u.font="30px "+t,u.fillText(".",0,20),u.getImageData(0,0,1,1).data[3]>0?r():setTimeout(e.bind(null,t,r))}(h,function(){document.body.removeChild(v),r.complete()})},i.isFontLoadingAPISupported="undefined"!=typeof document&&!!document.fonts;Object.defineProperty(i,"isSyncFontLoadingSupported",{get:function(){return(0,n.shadow)(i,"isSyncFontLoadingSupported",function(){if("undefined"==typeof navigator)return!0;var e=!1,t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);return t&&t[1]>=14&&(e=!0),e}())},enumerable:!0,configurable:!0});var a={get value(){return(0,n.shadow)(this,"value",(0,n.isEvalSupported)())}},o=function(){function e(e,t){for(var r in this.compiledGlyphs=Object.create(null),e)this[r]=e[r];this.options=t}return e.prototype={createNativeFontFace:function(){if(!this.data)return null;if(this.options.disableFontFace)return this.disableFontFace=!0,null;var e=new FontFace(this.loadedName,this.data,{});return this.options.fontRegistry&&this.options.fontRegistry.registerFont(this),e},createFontFaceRule:function(){if(!this.data)return null;if(this.options.disableFontFace)return this.disableFontFace=!0,null;var e=(0,n.bytesToString)(new Uint8Array(this.data)),t=this.loadedName,r="url(data:"+this.mimetype+";base64,"+btoa(e)+");",i='@font-face { font-family:"'+t+'";src:'+r+"}";return this.options.fontRegistry&&this.options.fontRegistry.registerFont(this,r),i},getPathGenerator:function(e,t){if(!(t in this.compiledGlyphs)){var r,n,i,o=e.get(this.loadedName+"_path_"+t);if(this.options.isEvalSupported&&a.value){var s,l="";for(n=0,i=o.length;n<i;n++)s=void 0!==(r=o[n]).args?r.args.join(","):"",l+="c."+r.cmd+"("+s+");\n";this.compiledGlyphs[t]=new Function("c","size",l)}else this.compiledGlyphs[t]=function(e,t){for(n=0,i=o.length;n<i;n++)"scale"===(r=o[n]).cmd&&(r.args=[t,-t]),e[r.cmd].apply(e,r.args)}}return this.compiledGlyphs[t]}},e}();t.FontFaceObject=o,t.FontLoader=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0;var n=r(0),i=r(121),a=r(70),o=16,s={get value(){return(0,n.shadow)(s,"value",(0,n.isLittleEndian)())}};function l(e){e.mozCurrentTransform||(e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[],Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=this._transformMatrix,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=t*i-r*n,l=r*n-t*i;return[i/s,r/l,n/l,t/s,(i*a-n*o)/l,(r*a-t*o)/s]}}),e.save=function(){var e=this._transformMatrix;this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){var e=this._transformStack.pop();e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix;r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix;r[0]=r[0]*e,r[1]=r[1]*e,r[2]=r[2]*t,r[3]=r[3]*t,this._originalScale(e,t)},e.transform=function(t,r,n,i,a,o){var s=this._transformMatrix;this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*i,s[1]*n+s[3]*i,s[0]*a+s[2]*o+s[4],s[1]*a+s[3]*o+s[5]],e._originalTransform(t,r,n,i,a,o)},e.setTransform=function(t,r,n,i,a,o){this._transformMatrix=[t,r,n,i,a,o],e._originalSetTransform(t,r,n,i,a,o)},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix;this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)})}var u=function(){function e(e){this.canvasFactory=e,this.cache=Object.create(null)}return e.prototype={getCanvas:function(e,t,r,n){var i;return void 0!==this.cache[e]?(i=this.cache[e],this.canvasFactory.reset(i,t,r),i.context.setTransform(1,0,0,1,0,0)):(i=this.canvasFactory.create(t,r),this.cache[e]=i),n&&l(i.context),i},clear:function(){for(var e in this.cache){var t=this.cache[e];this.canvasFactory.destroy(t),delete this.cache[e]}}},e}();var c=function(){function e(){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=n.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=n.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}(),h=function(){function e(e,t,r,n,i){this.ctx=e,this.current=new c,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=n,this.imageLayer=i,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.cachedCanvases=new u(this.canvasFactory),e&&l(e),this.cachedGetSinglePixelWidth=null}function t(e,t){if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0);else{var r,i,a,l,u,c=t.height,h=t.width,d=c%o,f=(c-d)/o,p=0===d?f:f+1,m=e.createImageData(h,o),v=0,g=t.data,b=m.data;if(t.kind===n.ImageKind.GRAYSCALE_1BPP){var y=g.byteLength,_=new Uint32Array(b.buffer,0,b.byteLength>>2),A=_.length,S=h+7>>3,w=4294967295,P=s.value?4278190080:255;for(i=0;i<p;i++){for(l=i<f?o:d,r=0,a=0;a<l;a++){for(var k=y-v,C=0,R=k>S?h:8*k-7,x=-8&R,T=0,E=0;C<x;C+=8)E=g[v++],_[r++]=128&E?w:P,_[r++]=64&E?w:P,_[r++]=32&E?w:P,_[r++]=16&E?w:P,_[r++]=8&E?w:P,_[r++]=4&E?w:P,_[r++]=2&E?w:P,_[r++]=1&E?w:P;for(;C<R;C++)0===T&&(E=g[v++],T=128),_[r++]=E&T?w:P,T>>=1}for(;r<A;)_[r++]=0;e.putImageData(m,0,i*o)}}else if(t.kind===n.ImageKind.RGBA_32BPP){for(a=0,u=h*o*4,i=0;i<f;i++)b.set(g.subarray(v,v+u)),v+=u,e.putImageData(m,0,a),a+=o;i<p&&(u=h*d*4,b.set(g.subarray(v,v+u)),e.putImageData(m,0,a))}else{if(t.kind!==n.ImageKind.RGB_24BPP)throw new Error("bad image kind: "+t.kind);for(u=h*(l=o),i=0;i<p;i++){for(i>=f&&(u=h*(l=d)),r=0,a=u;a--;)b[r++]=g[v++],b[r++]=g[v++],b[r++]=g[v++],b[r++]=255;e.putImageData(m,0,i*o)}}}}function r(e,t){for(var r=t.height,n=t.width,i=r%o,a=(r-i)/o,s=0===i?a:a+1,l=e.createImageData(n,o),u=0,c=t.data,h=l.data,d=0;d<s;d++){for(var f=d<a?o:i,p=3,m=0;m<f;m++)for(var v=0,g=0;g<n;g++){if(!v){var b=c[u++];v=128}h[p]=b&v?0:255,p+=4,v>>=1}e.putImageData(l,0,d*o)}}function h(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,i=r.length;n<i;n++){var a=r[n];void 0!==e[a]&&(t[a]=e[a])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function d(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function f(e,t,r,n){for(var i=e.length,a=3;a<i;a+=4){var o=e[a];if(0===o)e[a-3]=t,e[a-2]=r,e[a-1]=n;else if(o<255){var s=255-o;e[a-3]=e[a-3]*o+t*s>>8,e[a-2]=e[a-2]*o+r*s>>8,e[a-1]=e[a-1]*o+n*s>>8}}}function p(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=r?r[e[i]]:e[i];t[i]=t[i]*a*(1/255)|0}}function m(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=77*e[i-3]+152*e[i-2]+28*e[i-1];t[i]=r?t[i]*r[a>>8]>>8:t[i]*a>>16}}function v(e,t,r){var n=t.canvas,i=t.context;e.setTransform(t.scaleX,0,0,t.scaleY,t.offsetX,t.offsetY);var o=t.backdrop||null;if(!t.transferMap&&a.WebGLUtils.isEnabled){var s=a.WebGLUtils.composeSMask(r.canvas,n,{subtype:t.subtype,backdrop:o});return e.setTransform(1,0,0,1,0,0),void e.drawImage(s,t.offsetX,t.offsetY)}!function(e,t,r,n,i,a,o){var s,l=!!a,u=l?a[0]:0,c=l?a[1]:0,h=l?a[2]:0;s="Luminosity"===i?m:p;for(var d=Math.min(n,Math.ceil(1048576/r)),v=0;v<n;v+=d){var g=Math.min(d,n-v),b=e.getImageData(0,v,r,g),y=t.getImageData(0,v,r,g);l&&f(b.data,u,c,h),s(b.data,y.data,o),e.putImageData(y,0,v)}}(i,r,n.width,n.height,t.subtype,o,t.transferMap),e.drawImage(n,0,0)}var g=["butt","round","square"],b=["miter","round","bevel"],y={},_={};for(var A in e.prototype={beginDrawing:function(e){var t=e.transform,r=e.viewport,n=e.transparency,i=e.background,a=void 0===i?null:i,o=this.ctx.canvas.width,s=this.ctx.canvas.height;if(this.ctx.save(),this.ctx.fillStyle=a||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,o,s),this.ctx.restore(),n){var l=this.cachedCanvases.getCanvas("transparent",o,s,!0);this.compositeCtx=this.ctx,this.transparentCanvas=l.canvas,this.ctx=l.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),d(this.ctx),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,r.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(e,t,r,i){var a=e.argsArray,o=e.fnArray,s=t||0,l=a.length;if(l===s)return s;for(var u,c=l-s>10&&"function"==typeof r,h=c?Date.now()+15:0,d=0,f=this.commonObjs,p=this.objs;;){if(void 0!==i&&s===i.nextBreakPoint)return i.breakIt(s,r),s;if((u=o[s])!==n.OPS.dependency)this[u].apply(this,a[s]);else for(var m=a[s],v=0,g=m.length;v<g;v++){var b=m[v],y="g"===b[0]&&"_"===b[1]?f:p;if(!y.isResolved(b))return y.get(b,r),s}if(++s===l)return s;if(c&&++d>10){if(Date.now()>h)return r(),s;d=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup(),this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),a.WebGLUtils.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e},setLineCap:function(e){this.ctx.lineCap=g[e]},setLineJoin:function(e){this.ctx.lineJoin=b[e]},setMiterLimit:function(e){this.ctx.miterLimit=e},setDash:function(e,t){var r=this.ctx;void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)},setRenderingIntent:function(e){},setFlatness:function(e){},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],i=n[0],a=n[1];switch(i){case"LW":this.setLineWidth(a);break;case"LC":this.setLineCap(a);break;case"LJ":this.setLineJoin(a);break;case"ML":this.setMiterLimit(a);break;case"D":this.setDash(a[0],a[1]);break;case"RI":this.setRenderingIntent(a);break;case"FL":this.setFlatness(a);break;case"Font":this.setFont(a[0],a[1]);break;case"CA":this.current.strokeAlpha=n[1];break;case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1];break;case"BM":this.ctx.globalCompositeOperation=a;break;case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=a?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null}}},beginSMaskGroup:function(){var e=this.current.activeSMask,t=e.canvas.width,r=e.canvas.height,n="smaskGroupAt"+this.groupLevel,i=this.cachedCanvases.getCanvas(n,t,r,!0),a=this.ctx,o=a.mozCurrentTransform;this.ctx.save();var s=i.context;s.scale(1/e.scaleX,1/e.scaleY),s.translate(-e.offsetX,-e.offsetY),s.transform.apply(s,o),e.startTransformInverse=s.mozCurrentTransformInverse,h(a,s),this.ctx=s,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(a),this.groupLevel++},suspendSMaskGroup:function(){var e=this.ctx;this.groupLevel--,this.ctx=this.groupStack.pop(),v(this.ctx,this.current.activeSMask,e),this.ctx.restore(),this.ctx.save(),h(e,this.ctx),this.current.resumeSMaskCtx=e;var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform);this.ctx.transform.apply(this.ctx,t),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()},resumeSMaskGroup:function(){var e=this.current.resumeSMaskCtx,t=this.ctx;this.ctx=e,this.groupStack.push(t),this.groupLevel++},endSMaskGroup:function(){var e=this.ctx;this.groupLevel--,this.ctx=this.groupStack.pop(),v(this.ctx,this.current.activeSMask,e),this.ctx.restore(),h(e,this.ctx);var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform);this.ctx.transform.apply(this.ctx,t)},save:function(){this.ctx.save();var e=this.current;this.stateStack.push(e),this.current=e.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this.cachedGetSinglePixelWidth=null)},transform:function(e,t,r,n,i,a){this.ctx.transform(e,t,r,n,i,a),this.cachedGetSinglePixelWidth=null},constructPath:function(e,t){for(var r=this.ctx,i=this.current,a=i.x,o=i.y,s=0,l=0,u=e.length;s<u;s++)switch(0|e[s]){case n.OPS.rectangle:a=t[l++],o=t[l++];var c=t[l++],h=t[l++];0===c&&(c=this.getSinglePixelWidth()),0===h&&(h=this.getSinglePixelWidth());var d=a+c,f=o+h;this.ctx.moveTo(a,o),this.ctx.lineTo(d,o),this.ctx.lineTo(d,f),this.ctx.lineTo(a,f),this.ctx.lineTo(a,o),this.ctx.closePath();break;case n.OPS.moveTo:a=t[l++],o=t[l++],r.moveTo(a,o);break;case n.OPS.lineTo:a=t[l++],o=t[l++],r.lineTo(a,o);break;case n.OPS.curveTo:a=t[l+4],o=t[l+5],r.bezierCurveTo(t[l],t[l+1],t[l+2],t[l+3],a,o),l+=6;break;case n.OPS.curveTo2:r.bezierCurveTo(a,o,t[l],t[l+1],t[l+2],t[l+3]),a=t[l+2],o=t[l+3],l+=4;break;case n.OPS.curveTo3:a=t[l+2],o=t[l+3],r.bezierCurveTo(t[l],t[l+1],a,o,a,o),l+=4;break;case n.OPS.closePath:r.closePath()}i.setCurrentPoint(a,o)},closePath:function(){this.ctx.closePath()},stroke:function(e){e=void 0===e||e;var t=this.ctx,r=this.current.strokeColor;t.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth),t.globalAlpha=this.current.strokeAlpha,r&&r.hasOwnProperty("type")&&"Pattern"===r.type?(t.save(),t.strokeStyle=r.getPattern(t,this),t.stroke(),t.restore()):t.stroke(),e&&this.consumePath(),t.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(e){e=void 0===e||e;var t=this.ctx,r=this.current.fillColor,n=!1;this.current.patternFill&&(t.save(),this.baseTransform&&t.setTransform.apply(t,this.baseTransform),t.fillStyle=r.getPattern(t,this),n=!0),this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill(),n&&t.restore(),e&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=y},eoClip:function(){this.pendingClip=_},beginText:function(){this.current.textMatrix=n.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var e=this.pendingTextPaths,t=this.ctx;if(void 0!==e){t.save(),t.beginPath();for(var r=0;r<e.length;r++){var n=e[r];t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()},setCharSpacing:function(e){this.current.charSpacing=e},setWordSpacing:function(e){this.current.wordSpacing=e},setHScale:function(e){this.current.textHScale=e/100},setLeading:function(e){this.current.leading=-e},setFont:function(e,t){var r=this.commonObjs.get(e),i=this.current;if(!r)throw new Error("Can't find font for "+e);if(i.fontMatrix=r.fontMatrix?r.fontMatrix:n.FONT_IDENTITY_MATRIX,0!==i.fontMatrix[0]&&0!==i.fontMatrix[3]||(0,n.warn)("Invalid font matrix for font "+e),t<0?(t=-t,i.fontDirection=-1):i.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var a=r.loadedName||"sans-serif",o=r.black?"900":r.bold?"bold":"normal",s=r.italic?"italic":"normal",l='"'+a+'", '+r.fallbackName,u=t<16?16:t>100?100:t;this.current.fontSizeScale=t/u;var c=s+" "+o+" "+u+"px "+l;this.ctx.font=c}},setTextRenderingMode:function(e){this.current.textRenderingMode=e},setTextRise:function(e){this.current.textRise=e},moveText:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},setTextMatrix:function(e,t,r,n,i,a){this.current.textMatrix=[e,t,r,n,i,a],this.current.textMatrixScale=Math.sqrt(e*e+t*t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(e,t,r){var i,a=this.ctx,o=this.current,s=o.font,l=o.textRenderingMode,u=o.fontSize/o.fontSizeScale,c=l&n.TextRenderingMode.FILL_STROKE_MASK,h=!!(l&n.TextRenderingMode.ADD_TO_PATH_FLAG);((s.disableFontFace||h)&&(i=s.getPathGenerator(this.commonObjs,e)),s.disableFontFace?(a.save(),a.translate(t,r),a.beginPath(),i(a,u),c!==n.TextRenderingMode.FILL&&c!==n.TextRenderingMode.FILL_STROKE||a.fill(),c!==n.TextRenderingMode.STROKE&&c!==n.TextRenderingMode.FILL_STROKE||a.stroke(),a.restore()):(c!==n.TextRenderingMode.FILL&&c!==n.TextRenderingMode.FILL_STROKE||a.fillText(e,t,r),c!==n.TextRenderingMode.STROKE&&c!==n.TextRenderingMode.FILL_STROKE||a.strokeText(e,t,r)),h)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:a.mozCurrentTransform,x:t,y:r,fontSize:u,addToPath:i})},get isFontSubpixelAAEnabled(){var e=this.canvasFactory.create(10,10).context;e.scale(1.5,1),e.fillText("I",0,10);for(var t=e.getImageData(0,0,10,10).data,r=!1,i=3;i<t.length;i+=4)if(t[i]>0&&t[i]<255){r=!0;break}return(0,n.shadow)(this,"isFontSubpixelAAEnabled",r)},showText:function(e){var t=this.current,r=t.font;if(r.isType3Font)return this.showType3Text(e);var i=t.fontSize;if(0!==i){var a=this.ctx,o=t.fontSizeScale,s=t.charSpacing,l=t.wordSpacing,u=t.fontDirection,c=t.textHScale*u,h=e.length,d=r.vertical,f=d?1:-1,p=r.defaultVMetrics,m=i*t.fontMatrix[0],v=t.textRenderingMode===n.TextRenderingMode.FILL&&!r.disableFontFace;a.save(),a.transform.apply(a,t.textMatrix),a.translate(t.x,t.y+t.textRise),t.patternFill&&(a.fillStyle=t.fillColor.getPattern(a,this)),u>0?a.scale(c,-1):a.scale(c,1);var g=t.lineWidth,b=t.textMatrixScale;if(0===b||0===g){var y=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK;y!==n.TextRenderingMode.STROKE&&y!==n.TextRenderingMode.FILL_STROKE||(this.cachedGetSinglePixelWidth=null,g=.65*this.getSinglePixelWidth())}else g/=b;1!==o&&(a.scale(o,o),g/=o),a.lineWidth=g;var _,A=0;for(_=0;_<h;++_){var S=e[_];if((0,n.isNum)(S))A+=f*S*i/1e3;else{var w,P,k,C,R,x,T,E=!1,O=(S.isSpace?l:0)+s,L=S.fontChar,I=S.accent,F=S.width;if(d)R=S.vmetric||p,x=-(x=S.vmetric?R[1]:.5*F)*m,T=R[2]*m,F=R?-R[0]:F,w=x/o,P=(A+T)/o;else w=A/o,P=0;if(r.remeasure&&F>0){var D=1e3*a.measureText(L).width/i*o;if(F<D&&this.isFontSubpixelAAEnabled){var j=F/D;E=!0,a.save(),a.scale(j,1),w/=j}else F!==D&&(w+=(F-D)/2e3*i/o)}(S.isInFont||r.missingFile)&&(v&&!I?a.fillText(L,w,P):(this.paintChar(L,w,P),I&&(k=w+I.offset.x/o,C=P-I.offset.y/o,this.paintChar(I.fontChar,k,C)))),A+=F*m+O*u,E&&a.restore()}}d?t.y-=A*c:t.x+=A*c,a.restore()}},showType3Text:function(e){var t,r,i,a,o=this.ctx,s=this.current,l=s.font,u=s.fontSize,c=s.fontDirection,h=l.vertical?1:-1,d=s.charSpacing,f=s.wordSpacing,p=s.textHScale*c,m=s.fontMatrix||n.FONT_IDENTITY_MATRIX,v=e.length;if(!(s.textRenderingMode===n.TextRenderingMode.INVISIBLE)&&0!==u){for(this.cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,c),t=0;t<v;++t)if(r=e[t],(0,n.isNum)(r))a=h*r*u/1e3,this.ctx.translate(a,0),s.x+=a*p;else{var g=(r.isSpace?f:0)+d,b=l.charProcOperatorList[r.operatorListId];if(b)this.processingType3=r,this.save(),o.scale(u,u),o.transform.apply(o,m),this.executeOperatorList(b),this.restore(),i=n.Util.applyTransform([r.width,0],m)[0]*u+g,o.translate(i,0),s.x+=i*p;else(0,n.warn)('Type3 character "'+r.operatorListId+'" is not available.')}o.restore(),this.processingType3=null}},setCharWidth:function(e,t){},setCharWidthAndBounds:function(e,t,r,n,i,a){this.ctx.rect(r,n,i-r,a-n),this.clip(),this.endPath()},getColorN_Pattern:function(t){var r,n=this;if("TilingPattern"===t[0]){var a=t[1],o=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory)}};r=new i.TilingPattern(t,a,this.ctx,s,o)}else r=(0,i.getShadingPatternFromIR)(t);return r},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r);this.ctx.strokeStyle=i,this.current.strokeColor=i},setFillRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r);this.ctx.fillStyle=i,this.current.fillColor=i,this.current.patternFill=!1},shadingFill:function(e){var t=this.ctx;this.save();var r=(0,i.getShadingPatternFromIR)(e);t.fillStyle=r.getPattern(t,this,!0);var a=t.mozCurrentTransformInverse;if(a){var o=t.canvas,s=o.width,l=o.height,u=n.Util.applyTransform([0,0],a),c=n.Util.applyTransform([0,l],a),h=n.Util.applyTransform([s,0],a),d=n.Util.applyTransform([s,l],a),f=Math.min(u[0],c[0],h[0],d[0]),p=Math.min(u[1],c[1],h[1],d[1]),m=Math.max(u[0],c[0],h[0],d[0]),v=Math.max(u[1],c[1],h[1],d[1]);this.ctx.fillRect(f,p,m-f,v-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10);this.restore()},beginInlineImage:function(){throw new Error("Should not call beginInlineImage")},beginImageData:function(){throw new Error("Should not call beginImageData")},paintFormXObjectBegin:function(e,t){if(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,Array.isArray(t)&&4===t.length){var r=t[2]-t[0],n=t[3]-t[1];this.ctx.rect(t[0],t[1],r,n),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.restore(),this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(e){this.save();var t=this.ctx;e.isolated||(0,n.info)("TODO: Support non-isolated groups."),e.knockout&&(0,n.warn)("Knockout groups not supported.");var r=t.mozCurrentTransform;if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.");var i=n.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),a=[0,0,t.canvas.width,t.canvas.height];i=n.Util.intersect(i,a)||[0,0,0,0];var o=Math.floor(i[0]),s=Math.floor(i[1]),l=Math.max(Math.ceil(i[2])-o,1),u=Math.max(Math.ceil(i[3])-s,1),c=1,d=1;l>4096&&(c=l/4096,l=4096),u>4096&&(d=u/4096,u=4096);var f="groupAt"+this.groupLevel;e.smask&&(f+="_smask_"+this.smaskCounter++%2);var p=this.cachedCanvases.getCanvas(f,l,u,!0),m=p.context;m.scale(1/c,1/d),m.translate(-o,-s),m.transform.apply(m,r),e.smask?this.smaskStack.push({canvas:p.canvas,context:m,offsetX:o,offsetY:s,scaleX:c,scaleY:d,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(o,s),t.scale(c,d)),h(t,m),this.ctx=m,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++,this.current.activeSMask=null},endGroup:function(e){this.groupLevel--;var t=this.ctx;this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,e.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(t.canvas,0,0),this.restore()},beginAnnotations:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(e,t,r){if(this.save(),d(this.ctx),this.current=new c,Array.isArray(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1];this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}this.transform.apply(this,t),this.transform.apply(this,r)},endAnnotation:function(){this.restore()},paintJpegXObject:function(e,t,r){var i=this.objs.get(e);if(i){this.save();var a=this.ctx;if(a.scale(1/t,-1/r),a.drawImage(i,0,0,i.width,i.height,0,-r,t,r),this.imageLayer){var o=a.mozCurrentTransformInverse,s=this.getCanvasPosition(0,0);this.imageLayer.appendImage({objId:e,left:s[0],top:s[1],width:t/o[0],height:r/o[3]})}this.restore()}else(0,n.warn)("Dependent image isn't ready yet")},paintImageMaskXObject:function(e){var t=this.ctx,n=e.width,i=e.height,a=this.current.fillColor,o=this.current.patternFill,s=this.processingType3;if(s&&void 0===s.compiled&&(s.compiled=n<=1e3&&i<=1e3?function(e){var t,r,n,i,a=e.width,o=e.height,s=a+1,l=new Uint8Array(s*(o+1)),u=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),c=a+7&-8,h=e.data,d=new Uint8Array(c*o),f=0;for(t=0,i=h.length;t<i;t++)for(var p=128,m=h[t];p>0;)d[f++]=m&p?0:255,p>>=1;var v=0;for(0!==d[f=0]&&(l[0]=1,++v),r=1;r<a;r++)d[f]!==d[f+1]&&(l[r]=d[f]?2:1,++v),f++;for(0!==d[f]&&(l[r]=2,++v),t=1;t<o;t++){n=t*s,d[(f=t*c)-c]!==d[f]&&(l[n]=d[f]?1:8,++v);var g=(d[f]?4:0)+(d[f-c]?8:0);for(r=1;r<a;r++)u[g=(g>>2)+(d[f+1]?4:0)+(d[f-c+1]?8:0)]&&(l[n+r]=u[g],++v),f++;if(d[f-c]!==d[f]&&(l[n+r]=d[f]?2:4,++v),v>1e3)return null}for(n=t*s,0!==d[f=c*(o-1)]&&(l[n]=8,++v),r=1;r<a;r++)d[f]!==d[f+1]&&(l[n+r]=d[f]?4:8,++v),f++;if(0!==d[f]&&(l[n+r]=4,++v),v>1e3)return null;var b=new Int32Array([0,s,-1,0,-s,0,0,0,1]),y=[];for(t=0;v&&t<=o;t++){for(var _=t*s,A=_+a;_<A&&!l[_];)_++;if(_!==A){var S,w=[_%s,t],P=l[_],k=_;do{var C=b[P];do{_+=C}while(!l[_]);5!==(S=l[_])&&10!==S?(P=S,l[_]=0):(P=S&51*P>>4,l[_]&=P>>2|P<<2),w.push(_%s),w.push(_/s|0),--v}while(k!==_);y.push(w),--t}}return function(e){e.save(),e.scale(1/a,-1/o),e.translate(0,-o),e.beginPath();for(var t=0,r=y.length;t<r;t++){var n=y[t];e.moveTo(n[0],n[1]);for(var i=2,s=n.length;i<s;i+=2)e.lineTo(n[i],n[i+1])}e.fill(),e.beginPath(),e.restore()}}({data:e.data,width:n,height:i}):null),s&&s.compiled)s.compiled(t);else{var l=this.cachedCanvases.getCanvas("maskCanvas",n,i),u=l.context;u.save(),r(u,e),u.globalCompositeOperation="source-in",u.fillStyle=o?a.getPattern(u,this):a,u.fillRect(0,0,n,i),u.restore(),this.paintInlineImageXObject(l.canvas)}},paintImageMaskXObjectRepeat:function(e,t,n,i){var a=e.width,o=e.height,s=this.current.fillColor,l=this.current.patternFill,u=this.cachedCanvases.getCanvas("maskCanvas",a,o),c=u.context;c.save(),r(c,e),c.globalCompositeOperation="source-in",c.fillStyle=l?s.getPattern(c,this):s,c.fillRect(0,0,a,o),c.restore();for(var h=this.ctx,d=0,f=i.length;d<f;d+=2)h.save(),h.transform(t,0,0,n,i[d],i[d+1]),h.scale(1,-1),h.drawImage(u.canvas,0,0,a,o,0,-1,1,1),h.restore()},paintImageMaskXObjectGroup:function(e){for(var t=this.ctx,n=this.current.fillColor,i=this.current.patternFill,a=0,o=e.length;a<o;a++){var s=e[a],l=s.width,u=s.height,c=this.cachedCanvases.getCanvas("maskCanvas",l,u),h=c.context;h.save(),r(h,s),h.globalCompositeOperation="source-in",h.fillStyle=i?n.getPattern(h,this):n,h.fillRect(0,0,l,u),h.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(c.canvas,0,0,l,u,0,-1,1,1),t.restore()}},paintImageXObject:function(e){var t=this.objs.get(e);t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image isn't ready yet")},paintImageXObjectRepeat:function(e,t,r,i){var a=this.objs.get(e);if(a){for(var o=a.width,s=a.height,l=[],u=0,c=i.length;u<c;u+=2)l.push({transform:[t,0,0,r,i[u],i[u+1]],x:0,y:0,w:o,h:s});this.paintInlineImageXObjectGroup(a,l)}else(0,n.warn)("Dependent image isn't ready yet")},paintInlineImageXObject:function(e){var r=e.width,n=e.height,i=this.ctx;this.save(),i.scale(1/r,-1/n);var a,o,s=i.mozCurrentTransformInverse,l=s[0],u=s[1],c=Math.max(Math.sqrt(l*l+u*u),1),h=s[2],d=s[3],f=Math.max(Math.sqrt(h*h+d*d),1);if(e instanceof HTMLElement||!e.data)a=e;else{var p=(o=this.cachedCanvases.getCanvas("inlineImage",r,n)).context;t(p,e),a=o.canvas}for(var m=r,v=n,g="prescale1";c>2&&m>1||f>2&&v>1;){var b=m,y=v;c>2&&m>1&&(c/=m/(b=Math.ceil(m/2))),f>2&&v>1&&(f/=v/(y=Math.ceil(v/2))),(p=(o=this.cachedCanvases.getCanvas(g,b,y)).context).clearRect(0,0,b,y),p.drawImage(a,0,0,m,v,0,0,b,y),a=o.canvas,m=b,v=y,g="prescale1"===g?"prescale2":"prescale1"}if(i.drawImage(a,0,0,m,v,0,-n,r,n),this.imageLayer){var _=this.getCanvasPosition(0,-n);this.imageLayer.appendImage({imgData:e,left:_[0],top:_[1],width:r/s[0],height:n/s[3]})}this.restore()},paintInlineImageXObjectGroup:function(e,r){var n=this.ctx,i=e.width,a=e.height,o=this.cachedCanvases.getCanvas("inlineImage",i,a);t(o.context,e);for(var s=0,l=r.length;s<l;s++){var u=r[s];if(n.save(),n.transform.apply(n,u.transform),n.scale(1,-1),n.drawImage(o.canvas,u.x,u.y,u.w,u.h,0,-1,1,1),this.imageLayer){var c=this.getCanvasPosition(u.x,u.y);this.imageLayer.appendImage({imgData:e,left:c[0],top:c[1],width:i,height:a})}n.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){(0,n.warn)("Unsupported 'paintXObject' command.")},markPoint:function(e){},markPointProps:function(e,t){},beginMarkedContent:function(e){},beginMarkedContentProps:function(e,t){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var e=this.ctx;this.pendingClip&&(this.pendingClip===_?e.clip("evenodd"):e.clip(),this.pendingClip=null),e.beginPath()},getSinglePixelWidth:function(e){if(null===this.cachedGetSinglePixelWidth){this.ctx.save();var t=this.ctx.mozCurrentTransformInverse;this.ctx.restore(),this.cachedGetSinglePixelWidth=Math.sqrt(Math.max(t[0]*t[0]+t[1]*t[1],t[2]*t[2]+t[3]*t[3]))}return this.cachedGetSinglePixelWidth},getCanvasPosition:function(e,t){var r=this.ctx.mozCurrentTransform;return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]}},n.OPS)e.prototype[n.OPS[A]]=e.prototype[A];return e}();t.CanvasGraphics=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TilingPattern=t.getShadingPatternFromIR=void 0;var n=r(0),i=r(70),a={RadialAxial:{fromIR:function(e){var t=e[1],r=e[2],n=e[3],i=e[4],a=e[5],o=e[6];return{type:"Pattern",getPattern:function(e){var s;"axial"===t?s=e.createLinearGradient(n[0],n[1],i[0],i[1]):"radial"===t&&(s=e.createRadialGradient(n[0],n[1],a,i[0],i[1],o));for(var l=0,u=r.length;l<u;++l){var c=r[l];s.addColorStop(c[0],c[1])}return s}}}}},o=function(){function e(e,t,r,n,i,a,o,s){var l,u=t.coords,c=t.colors,h=e.data,d=4*e.width;u[r+1]>u[n+1]&&(l=r,r=n,n=l,l=a,a=o,o=l),u[n+1]>u[i+1]&&(l=n,n=i,i=l,l=o,o=s,s=l),u[r+1]>u[n+1]&&(l=r,r=n,n=l,l=a,a=o,o=l);var f=(u[r]+t.offsetX)*t.scaleX,p=(u[r+1]+t.offsetY)*t.scaleY,m=(u[n]+t.offsetX)*t.scaleX,v=(u[n+1]+t.offsetY)*t.scaleY,g=(u[i]+t.offsetX)*t.scaleX,b=(u[i+1]+t.offsetY)*t.scaleY;if(!(p>=b))for(var y,_,A,S,w,P,k,C,R,x=c[a],T=c[a+1],E=c[a+2],O=c[o],L=c[o+1],I=c[o+2],F=c[s],D=c[s+1],j=c[s+2],M=Math.round(p),N=Math.round(b),q=M;q<=N;q++){q<v?(y=f-(f-m)*(R=q<p?0:p===v?1:(p-q)/(p-v)),_=x-(x-O)*R,A=T-(T-L)*R,S=E-(E-I)*R):(y=m-(m-g)*(R=q>b?1:v===b?0:(v-q)/(v-b)),_=O-(O-F)*R,A=L-(L-D)*R,S=I-(I-j)*R),w=f-(f-g)*(R=q<p?0:q>b?1:(p-q)/(p-b)),P=x-(x-F)*R,k=T-(T-D)*R,C=E-(E-j)*R;for(var U=Math.round(Math.min(y,w)),W=Math.round(Math.max(y,w)),B=d*q+4*U,z=U;z<=W;z++)R=(R=(y-z)/(y-w))<0?0:R>1?1:R,h[B++]=_-(_-P)*R|0,h[B++]=A-(A-k)*R|0,h[B++]=S-(S-C)*R|0,h[B++]=255}}function t(t,r,n){var i,a,o=r.coords,s=r.colors;switch(r.type){case"lattice":var l=r.verticesPerRow,u=Math.floor(o.length/l)-1,c=l-1;for(i=0;i<u;i++)for(var h=i*l,d=0;d<c;d++,h++)e(t,n,o[h],o[h+1],o[h+l],s[h],s[h+1],s[h+l]),e(t,n,o[h+l+1],o[h+1],o[h+l],s[h+l+1],s[h+1],s[h+l]);break;case"triangles":for(i=0,a=o.length;i<a;i+=3)e(t,n,o[i],o[i+1],o[i+2],s[i],s[i+1],s[i+2]);break;default:throw new Error("illegal figure")}}return function(e,r,n,a,o,s,l){var u,c,h,d,f=Math.floor(e[0]),p=Math.floor(e[1]),m=Math.ceil(e[2])-f,v=Math.ceil(e[3])-p,g=Math.min(Math.ceil(Math.abs(m*r[0]*1.1)),3e3),b=Math.min(Math.ceil(Math.abs(v*r[1]*1.1)),3e3),y=m/g,_=v/b,A={coords:n,colors:a,offsetX:-f,offsetY:-p,scaleX:1/y,scaleY:1/_},S=g+4,w=b+4;if(i.WebGLUtils.isEnabled)u=i.WebGLUtils.drawFigures(g,b,s,o,A),(c=l.getCanvas("mesh",S,w,!1)).context.drawImage(u,2,2),u=c.canvas;else{var P=(c=l.getCanvas("mesh",S,w,!1)).context,k=P.createImageData(g,b);if(s){var C=k.data;for(h=0,d=C.length;h<d;h+=4)C[h]=s[0],C[h+1]=s[1],C[h+2]=s[2],C[h+3]=255}for(h=0;h<o.length;h++)t(k,o[h],A);P.putImageData(k,2,2),u=c.canvas}return{canvas:u,offsetX:f-2*y,offsetY:p-2*_,scaleX:y,scaleY:_}}}();a.Mesh={fromIR:function(e){var t=e[2],r=e[3],i=e[4],a=e[5],s=e[6],l=e[8];return{type:"Pattern",getPattern:function(e,u,c){var h;if(c)h=n.Util.singularValueDecompose2dScale(e.mozCurrentTransform);else if(h=n.Util.singularValueDecompose2dScale(u.baseTransform),s){var d=n.Util.singularValueDecompose2dScale(s);h=[h[0]*d[0],h[1]*d[1]]}var f=o(a,h,t,r,i,c?null:l,u.cachedCanvases);return c||(e.setTransform.apply(e,u.baseTransform),s&&e.transform.apply(e,s)),e.translate(f.offsetX,f.offsetY),e.scale(f.scaleX,f.scaleY),e.createPattern(f.canvas,"no-repeat")}}}},a.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}};var s=function(){var e=1,t=2;function r(e,t,r,n,i){this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.canvasGraphicsFactory=n,this.baseTransform=i,this.type="Pattern",this.ctx=r}return r.prototype={createPatternCanvas:function(e){var t=this.operatorList,r=this.bbox,i=this.xstep,a=this.ystep,o=this.paintType,s=this.tilingType,l=this.color,u=this.canvasGraphicsFactory;(0,n.info)("TilingType: "+s);var c=r[0],h=r[1],d=r[2],f=r[3],p=[c,h],m=[c+i,h+a],v=m[0]-p[0],g=m[1]-p[1],b=n.Util.singularValueDecompose2dScale(this.matrix),y=n.Util.singularValueDecompose2dScale(this.baseTransform),_=[b[0]*y[0],b[1]*y[1]];v=Math.min(Math.ceil(Math.abs(v*_[0])),3e3),g=Math.min(Math.ceil(Math.abs(g*_[1])),3e3);var A=e.cachedCanvases.getCanvas("pattern",v,g,!0),S=A.context,w=u.createCanvasGraphics(S);w.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(w,o,l),this.setScale(v,g,i,a),this.transformToScale(w);var P=[1,0,0,1,-p[0],-p[1]];return w.transform.apply(w,P),this.clipBbox(w,r,c,h,d,f),w.executeOperatorList(t),A.canvas},setScale:function(e,t,r,n){this.scale=[e/r,t/n]},transformToScale:function(e){var t=this.scale,r=[t[0],0,0,t[1],0,0];e.transform.apply(e,r)},scaleToContext:function(){var e=this.scale;this.ctx.scale(1/e[0],1/e[1])},clipBbox:function(e,t,r,n,i,a){if(Array.isArray(t)&&4===t.length){var o=i-r,s=a-n;e.ctx.rect(r,n,o,s),e.clip(),e.endPath()}},setFillAndStrokeStyleToContext:function(r,i,a){var o=r.ctx,s=r.current;switch(i){case e:var l=this.ctx;o.fillStyle=l.fillStyle,o.strokeStyle=l.strokeStyle,s.fillColor=l.fillStyle,s.strokeColor=l.strokeStyle;break;case t:var u=n.Util.makeCssRgb(a[0],a[1],a[2]);o.fillStyle=u,o.strokeStyle=u,s.fillColor=u,s.strokeColor=u;break;default:throw new n.FormatError("Unsupported paint type: "+i)}},getPattern:function(e,t){var r=this.createPatternCanvas(t);return(e=this.ctx).setTransform.apply(e,this.baseTransform),e.transform.apply(e,this.matrix),this.scaleToContext(),e.createPattern(r,"repeat")}},r}();t.getShadingPatternFromIR=function(e){var t=a[e[0]];if(!t)throw new Error("Unknown IR type: "+e[0]);return t.fromIR(e)},t.TilingPattern=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o={NoError:0,EndOfDocument:-1,UnterminatedCdat:-2,UnterminatedXmlDeclaration:-3,UnterminatedDoctypeDeclaration:-4,UnterminatedComment:-5,MalformedElement:-6,OutOfMemory:-7,UnterminatedAttributeValue:-8,UnterminatedElement:-9,ElementNeverBegun:-10};function s(e,t){var r=e[t];return" "===r||"\n"===r||"\r"===r||"\t"===r}var l=function(){function e(){a(this,e)}return i(e,[{key:"_resolveEntities",value:function(e){return e.replace(/&([^;]+);/g,function(e,t){if("#x"===t.substring(0,2))return String.fromCharCode(parseInt(t.substring(2),16));if("#"===t.substring(0,1))return String.fromCharCode(parseInt(t.substring(1),10));switch(t){case"lt":return"<";case"gt":return">";case"amp":return"&";case"quot":return'"'}return this.onResolveEntity(t)})}},{key:"_parseContent",value:function(e,t){var r,n=t,i=[];function a(){for(;n<e.length&&s(e,n);)++n}for(;n<e.length&&!s(e,n)&&">"!==e[n]&&"/"!==e[n];)++n;for(r=e.substring(t,n),a();n<e.length&&">"!==e[n]&&"/"!==e[n]&&"?"!==e[n];){a();for(var o,l="";n<e.length&&!s(e,n)&&"="!==e[n];)l+=e[n],++n;if(a(),"="!==e[n])return null;++n,a();var u=e[n];if('"'!==u&&"'"!==u)return null;var c=e.indexOf(u,++n);if(c<0)return null;o=e.substring(n,c),i.push({name:l,value:this._resolveEntities(o)}),n=c+1,a()}return{name:r,attributes:i,parsed:n-t}}},{key:"_parseProcessingInstruction",value:function(e,t){var r,n=t;for(;n<e.length&&!s(e,n)&&">"!==e[n]&&"/"!==e[n];)++n;r=e.substring(t,n),function(){for(;n<e.length&&s(e,n);)++n}();for(var i=n;n<e.length&&("?"!==e[n]||">"!==e[n+1]);)++n;return{name:r,value:e.substring(i,n),parsed:n-t}}},{key:"parseXml",value:function(e){for(var t=0;t<e.length;){var r=t;if("<"===e[t]){var n=void 0;switch(e[++r]){case"/":if(++r,(n=e.indexOf(">",r))<0)return void this.onError(o.UnterminatedElement);this.onEndElement(e.substring(r,n)),r=n+1;break;case"?":++r;var i=this._parseProcessingInstruction(e,r);if("?>"!==e.substring(r+i.parsed,r+i.parsed+2))return void this.onError(o.UnterminatedXmlDeclaration);this.onPi(i.name,i.value),r+=i.parsed+2;break;case"!":if("--"===e.substring(r+1,r+3)){if((n=e.indexOf("--\x3e",r+3))<0)return void this.onError(o.UnterminatedComment);this.onComment(e.substring(r+3,n)),r=n+3}else if("[CDATA["===e.substring(r+1,r+8)){if((n=e.indexOf("]]>",r+8))<0)return void this.onError(o.UnterminatedCdat);this.onCdata(e.substring(r+8,n)),r=n+3}else{if("DOCTYPE"!==e.substring(r+1,r+8))return void this.onError(o.MalformedElement);var a=e.indexOf("[",r+8),s=!1;if((n=e.indexOf(">",r+8))<0)return void this.onError(o.UnterminatedDoctypeDeclaration);if(a>0&&n>a){if((n=e.indexOf("]>",r+8))<0)return void this.onError(o.UnterminatedDoctypeDeclaration);s=!0}var l=e.substring(r+8,n+(s?1:0));this.onDoctype(l),r=n+(s?2:1)}break;default:var u=this._parseContent(e,r);if(null===u)return void this.onError(o.MalformedElement);var c=!1;if("/>"===e.substring(r+u.parsed,r+u.parsed+2))c=!0;else if(">"!==e.substring(r+u.parsed,r+u.parsed+1))return void this.onError(o.UnterminatedElement);this.onBeginElement(u.name,u.attributes,c),r+=u.parsed+(c?2:1)}}else{for(;r<e.length&&"<"!==e[r];)r++;var h=e.substring(t,r);this.onText(this._resolveEntities(h))}t=r}}},{key:"onResolveEntity",value:function(e){return"&"+e+";"}},{key:"onPi",value:function(e,t){}},{key:"onComment",value:function(e){}},{key:"onCdata",value:function(e){}},{key:"onDoctype",value:function(e){}},{key:"onText",value:function(e){}},{key:"onBeginElement",value:function(e,t,r){}},{key:"onEndElement",value:function(e){}},{key:"onError",value:function(e){}}]),e}(),u=function(){function e(t,r){a(this,e),this.nodeName=t,this.nodeValue=r,Object.defineProperty(this,"parentNode",{value:null,writable:!0})}return i(e,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"firstChild",get:function(){return this.childNodes[0]}},{key:"nextSibling",get:function(){var e=this.parentNode.childNodes.indexOf(this);return this.parentNode.childNodes[e+1]}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map(function(e){return e.textContent}).join(""):this.nodeValue||""}}]),e}(),c=function(e){function t(){a(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._currentFragment=null,e._stack=null,e._errorCode=o.NoError,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l),i(t,[{key:"parseFromString",value:function(e){if(this._currentFragment=[],this._stack=[],this._errorCode=o.NoError,this.parseXml(e),this._errorCode===o.NoError)return{documentElement:n(this._currentFragment,1)[0]}}},{key:"onResolveEntity",value:function(e){switch(e){case"apos":return"'"}return function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in i)return i.value;var o=i.get;return void 0!==o?o.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"onResolveEntity",this).call(this,e)}},{key:"onText",value:function(e){if(!function(e){for(var t=0,r=e.length;t<r;t++)if(!s(e,t))return!1;return!0}(e)){var t=new u("#text",e);this._currentFragment.push(t)}}},{key:"onCdata",value:function(e){var t=new u("#text",e);this._currentFragment.push(t)}},{key:"onBeginElement",value:function(e,t,r){var n=new u(e);n.childNodes=[],this._currentFragment.push(n),r||(this._stack.push(this._currentFragment),this._currentFragment=n.childNodes)}},{key:"onEndElement",value:function(e){this._currentFragment=this._stack.pop();for(var t=this._currentFragment[this._currentFragment.length-1],r=0,n=t.childNodes.length;r<n;r++)t.childNodes[r].parentNode=t}},{key:"onError",value:function(e){this._errorCode=e}}]),t}();t.SimpleXMLParser=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0;var n=r(0),i=function(){function e(e,t){var r=this;(0,n.assert)(t),this._queuedChunks=[];var i=e.initialData;if(i&&i.length>0){var a=new Uint8Array(i).buffer;this._queuedChunks.push(a)}this._pdfDataRangeTransport=t,this._isRangeSupported=!e.disableRange,this._isStreamingSupported=!e.disableStream,this._contentLength=e.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener(function(e,t){r._onReceiveData({begin:e,chunk:t})}),this._pdfDataRangeTransport.addProgressListener(function(e){r._onProgress({loaded:e})}),this._pdfDataRangeTransport.addProgressiveReadListener(function(e){r._onReceiveData({chunk:e})}),this._pdfDataRangeTransport.transportReady()}function t(e,t){this._stream=e,this._done=!1,this._queuedChunks=t||[],this._requests=[],this._headersReady=Promise.resolve(),e._fullRequestReader=this,this.onProgress=null}function r(e,t,r){this._stream=e,this._begin=t,this._end=r,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}return e.prototype={_onReceiveData:function(e){var t=new Uint8Array(e.chunk).buffer;if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t);else{var r=this._rangeReaders.some(function(r){return r._begin===e.begin&&(r._enqueue(t),!0)});(0,n.assert)(r)}},_onProgress:function(e){if(this._rangeReaders.length>0){var t=this._rangeReaders[0];t.onProgress&&t.onProgress({loaded:e.loaded})}},_removeRangeReader:function(e){var t=this._rangeReaders.indexOf(e);t>=0&&this._rangeReaders.splice(t,1)},getFullReader:function(){(0,n.assert)(!this._fullRequestReader);var e=this._queuedChunks;return this._queuedChunks=null,new t(this,e)},getRangeReader:function(e,t){var n=new r(this,e,t);return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(n),n},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach(function(t){t.cancel(e)}),this._pdfDataRangeTransport.abort()}},t.prototype={_enqueue:function(e){this._done||(this._requests.length>0?this._requests.shift().resolve({value:e,done:!1}):this._queuedChunks.push(e))},get headersReady(){return this._headersReady},get isRangeSupported(){return this._stream._isRangeSupported},get isStreamingSupported(){return this._stream._isStreamingSupported},get contentLength(){return this._stream._contentLength},read:function(){if(this._queuedChunks.length>0){var e=this._queuedChunks.shift();return Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0});var t=(0,n.createPromiseCapability)();return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[]}},r.prototype={_enqueue:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e;else this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[];this._done=!0,this._stream._removeRangeReader(this)}},get isStreamingSupported(){return!1},read:function(){if(this._queuedChunk){var e=this._queuedChunk;return this._queuedChunk=null,Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0});var t=(0,n.createPromiseCapability)();return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._stream._removeRangeReader(this)}},e}();t.PDFDataTransportStream=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=r(44);function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=require("fs"),c=require("http"),h=require("https"),d=require("url"),f=function(){function e(t){l(this,e),this.options=t,this.source=t.source,this.url=d.parse(this.source.url),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol||!this.url.host,this.httpHeaders=this.isHttp&&this.source.httpHeaders||{},this._fullRequest=null,this._rangeRequestReaders=[]}return n(e,[{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequest),this._fullRequest=this.isFsUrl?new y(this):new g(this),this._fullRequest}},{key:"getRangeReader",value:function(e,t){var r=this.isFsUrl?new _(this,e,t):new b(this,e,t);return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequest&&this._fullRequest.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}}]),e}(),p=function(){function e(t){l(this,e),this._url=t.url,this._done=!1,this._errored=!1,this._reason=null,this.onProgress=null,this._contentLength=t.source.length,this._loaded=0,this._disableRange=t.options.disableRange||!1,this._rangeChunkSize=t.source.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!t.source.disableStream,this._isRangeSupported=!t.options.disableRange,this._readableStream=null,this._readCapability=(0,i.createPromiseCapability)(),this._headersCapability=(0,i.createPromiseCapability)()}return n(e,[{key:"read",value:function(){var e=this;return this._readCapability.promise.then(function(){if(e._done)return Promise.resolve({value:void 0,done:!0});if(e._errored)return Promise.reject(e._reason);var t=e._readableStream.read();if(null===t)return e._readCapability=(0,i.createPromiseCapability)(),e.read();e._loaded+=t.length,e.onProgress&&e.onProgress({loaded:e._loaded,total:e._contentLength});var r=new Uint8Array(t).buffer;return Promise.resolve({value:r,done:!1})})}},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._errored=!0,this._reason=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this;this._readableStream=e,e.on("readable",function(){t._readCapability.resolve()}),e.on("end",function(){e.destroy(),t._done=!0,t._readCapability.resolve()}),e.on("error",function(e){t._error(e)}),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new i.AbortException("streaming is disabled")),this._errored&&this._readableStream.destroy(this._reason)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),m=function(){function e(t){l(this,e),this._url=t.url,this._done=!1,this._errored=!1,this._reason=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,i.createPromiseCapability)(),this._isStreamingSupported=!t.source.disableStream}return n(e,[{key:"read",value:function(){var e=this;return this._readCapability.promise.then(function(){if(e._done)return Promise.resolve({value:void 0,done:!0});if(e._errored)return Promise.reject(e._reason);var t=e._readableStream.read();if(null===t)return e._readCapability=(0,i.createPromiseCapability)(),e.read();e._loaded+=t.length,e.onProgress&&e.onProgress({loaded:e._loaded});var r=new Uint8Array(t).buffer;return Promise.resolve({value:r,done:!1})})}},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._errored=!0,this._reason=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this;this._readableStream=e,e.on("readable",function(){t._readCapability.resolve()}),e.on("end",function(){e.destroy(),t._done=!0,t._readCapability.resolve()}),e.on("error",function(e){t._error(e)}),this._errored&&this._readableStream.destroy(this._reason)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}();function v(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var g=function(e){function t(e){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=function(t){r._headersCapability.resolve(),r._setReadableStream(t);var n=(0,a.validateRangeRequestCapabilities)({getResponseHeader:function(e){return r._readableStream.headers[e.toLowerCase()]},isHttp:e.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),i=n.allowRangeRequests,o=n.suggestedLength;i&&(r._isRangeSupported=!0),r._contentLength=o};return r._request=null,"http:"===r._url.protocol?r._request=c.request(v(r._url,e.httpHeaders),n):r._request=h.request(v(r._url,e.httpHeaders),n),r._request.on("error",function(e){r._errored=!0,r._reason=e,r._headersCapability.reject(e)}),r._request.end(),r}return s(t,p),t}(),b=function(e){function t(e,r,n){l(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));for(var a in i._httpHeaders={},e.httpHeaders){var s=e.httpHeaders[a];void 0!==s&&(i._httpHeaders[a]=s)}return i._httpHeaders.Range="bytes="+r+"-"+(n-1),i._request=null,"http:"===i._url.protocol?i._request=c.request(v(i._url,i._httpHeaders),function(e){i._setReadableStream(e)}):i._request=h.request(v(i._url,i._httpHeaders),function(e){i._setReadableStream(e)}),i._request.on("error",function(e){i._errored=!0,i._reason=e}),i._request.end(),i}return s(t,m),t}(),y=function(e){function t(e){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=decodeURI(r._url.path);return u.lstat(n,function(e,t){if(e)return r._errored=!0,r._reason=e,void r._headersCapability.reject(e);r._contentLength=t.size,r._setReadableStream(u.createReadStream(n)),r._headersCapability.resolve()}),r}return s(t,p),t}(),_=function(e){function t(e,r,n){l(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i._setReadableStream(u.createReadStream(decodeURI(i._url.path),{start:r,end:n-1})),i}return s(t,m),t}();t.PDFNodeStream=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=r(44);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return{method:"GET",headers:e,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}var l=function(){function e(t){o(this,e),this.options=t,this.source=t.source,this.isHttp=/^https?:/i.test(this.source.url),this.httpHeaders=this.isHttp&&this.source.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return n(e,[{key:"getFullReader",value:function(){return(0,i.assert)(!this._fullRequestReader),this._fullRequestReader=new u(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new c(this,e,t);return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}}]),e}(),u=function(){function e(t){var r=this;for(var n in o(this,e),this._stream=t,this._reader=null,this._loaded=0,this._withCredentials=t.source.withCredentials,this._contentLength=this._stream.source.length,this._headersCapability=(0,i.createPromiseCapability)(),this._disableRange=this._stream.options.disableRange,this._rangeChunkSize=this._stream.source.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isRangeSupported=!this._stream.options.disableRange,this._isStreamingSupported=!this._stream.source.disableStream,this._headers=new Headers,this._stream.httpHeaders){var l=this._stream.httpHeaders[n];void 0!==l&&this._headers.append(n,l)}var u=this._stream.source.url;fetch(u,s(this._headers,this._withCredentials)).then(function(e){if(!(0,a.validateResponseStatus)(e.status))throw(0,a.createResponseStatusError)(e.status,u);r._reader=e.body.getReader(),r._headersCapability.resolve();var t=(0,a.validateRangeRequestCapabilities)({getResponseHeader:function(t){return e.headers.get(t)},isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),n=t.allowRangeRequests,o=t.suggestedLength;r._contentLength=o,r._isRangeSupported=n,!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new i.AbortException("streaming is disabled"))}).catch(this._headersCapability.reject),this.onProgress=null}return n(e,[{key:"read",value:function(){var e=this;return this._headersCapability.promise.then(function(){return e._reader.read().then(function(t){var r=t.value,n=t.done;if(n)return Promise.resolve({value:r,done:n});e._loaded+=r.byteLength,e.onProgress&&e.onProgress({loaded:e._loaded,total:e._contentLength});var i=new Uint8Array(r).buffer;return Promise.resolve({value:i,done:!1})})})}},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),c=function(){function e(t,r,n){var l=this;for(var u in o(this,e),this._stream=t,this._reader=null,this._loaded=0,this._withCredentials=t.source.withCredentials,this._readCapability=(0,i.createPromiseCapability)(),this._isStreamingSupported=!t.source.disableStream,this._headers=new Headers,this._stream.httpHeaders){var c=this._stream.httpHeaders[u];void 0!==c&&this._headers.append(u,c)}var h=r+"-"+(n-1);this._headers.append("Range","bytes="+h);var d=this._stream.source.url;fetch(d,s(this._headers,this._withCredentials)).then(function(e){if(!(0,a.validateResponseStatus)(e.status))throw(0,a.createResponseStatusError)(e.status,d);l._readCapability.resolve(),l._reader=e.body.getReader()}),this.onProgress=null}return n(e,[{key:"read",value:function(){var e=this;return this._readCapability.promise.then(function(){return e._reader.read().then(function(t){var r=t.value,n=t.done;if(n)return Promise.resolve({value:r,done:n});e._loaded+=r.byteLength,e.onProgress&&e.onProgress({loaded:e._loaded});var i=new Uint8Array(r).buffer;return Promise.resolve({value:i,done:!1})})})}},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}();t.PDFFetchStream=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkManager=t.PDFNetworkStream=void 0;var n,i=r(0),a=r(44),o=r(20),s=(n=o)&&n.__esModule?n:{default:n};function l(e,t){this.url=e,t=t||{},this.isHttp=/^https?:/i.test(e),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this.withCredentials=t.withCredentials||!1,this.getXhr=t.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null),this.loadedRequests=Object.create(null)}function u(e){var t=e.response;return"string"!=typeof t?t:(0,i.stringToBytes)(t).buffer}var c=function(){try{var e=new XMLHttpRequest;return e.open("GET",s.default.location.href),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(e){return!1}}();function h(e){this._options=e;var t=e.source;this._manager=new l(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}function d(e,t){this._manager=e;var r=t.source,n={onHeadersReceived:this._onHeadersReceived.bind(this),onProgressiveData:r.disableStream?null:this._onProgressiveData.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=r.url,this._fullRequestId=e.requestFull(n),this._headersReceivedCapability=(0,i.createPromiseCapability)(),this._disableRange=t.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this.onProgress=null}function f(e,t,r){this._manager=e;var n={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)};this._requestId=e.requestRange(t,r,n),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}l.prototype={requestRange:function(e,t,r){var n={begin:e,end:t};for(var i in r)n[i]=r[i];return this.request(n)},requestFull:function(e){return this.request(e)},request:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t};for(var i in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var a=this.httpHeaders[i];void 0!==a&&t.setRequestHeader(i,a)}if(this.isHttp&&"begin"in e&&"end"in e){var o=e.begin+"-"+(e.end-1);t.setRequestHeader("Range","bytes="+o),n.expectedStatus=206}else n.expectedStatus=200;return c&&!!e.onProgressiveData?(t.responseType="moz-chunked-arraybuffer",n.onProgressiveData=e.onProgressiveData,n.mozChunked=!0):t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r},onProgress:function(e,t){var r=this.pendingRequests[e];if(r){if(r.mozChunked){var n=u(r.xhr);r.onProgressiveData(n)}var i=r.onProgress;i&&i(t)}},onStateChange:function(e,t){var r=this.pendingRequests[e];if(r){var n=r.xhr;if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===n.status&&this.isHttp)r.onError&&r.onError(n.status);else{var i=n.status||200;if(200===i&&206===r.expectedStatus||i===r.expectedStatus){this.loadedRequests[e]=!0;var a=u(n);if(206===i){var o=n.getResponseHeader("Content-Range"),s=/bytes (\d+)-(\d+)\/(\d+)/.exec(o),l=parseInt(s[1],10);r.onDone({begin:l,chunk:a})}else r.onProgressiveData?r.onDone(null):a?r.onDone({begin:0,chunk:a}):r.onError&&r.onError(n.status)}else r.onError&&r.onError(n.status)}}},hasPendingRequests:function(){for(var e in this.pendingRequests)return!0;return!1},getRequestXhr:function(e){return this.pendingRequests[e].xhr},isStreamingRequest:function(e){return!!this.pendingRequests[e].onProgressiveData},isPendingRequest:function(e){return e in this.pendingRequests},isLoadedRequest:function(e){return e in this.loadedRequests},abortAllRequests:function(){for(var e in this.pendingRequests)this.abortRequest(0|e)},abortRequest:function(e){var t=this.pendingRequests[e].xhr;delete this.pendingRequests[e],t.abort()}},h.prototype={_onRangeRequestReaderClosed:function(e){var t=this._rangeRequestReaders.indexOf(e);t>=0&&this._rangeRequestReaders.splice(t,1)},getFullReader:function(){return(0,i.assert)(!this._fullRequestReader),this._fullRequestReader=new d(this._manager,this._options),this._fullRequestReader},getRangeReader:function(e,t){var r=new f(this._manager,e,t);return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}},d.prototype={_onHeadersReceived:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=(0,a.validateRangeRequestCapabilities)({getResponseHeader:function(e){return t.getResponseHeader(e)},isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),n=r.allowRangeRequests,i=r.suggestedLength;this._contentLength=i||this._contentLength,n&&(this._isRangeSupported=!0);var o=this._manager;o.isStreamingRequest(e)?this._isStreamingSupported=!0:this._isRangeSupported&&o.abortRequest(e),this._headersReceivedCapability.resolve()},_onProgressiveData:function(e){this._requests.length>0?this._requests.shift().resolve({value:e,done:!1}):this._cachedChunks.push(e)},_onDone:function(e){e&&this._onProgressiveData(e.chunk),this._done=!0,this._cachedChunks.length>0||(this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[])},_onError:function(e){var t=this._url,r=(0,a.createResponseStatusError)(e,t);this._storedError=r,this._headersReceivedCapability.reject(r),this._requests.forEach(function(e){e.reject(r)}),this._requests=[],this._cachedChunks=[]},_onProgress:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})},get isRangeSupported(){return this._isRangeSupported},get isStreamingSupported(){return this._isStreamingSupported},get contentLength(){return this._contentLength},get headersReady(){return this._headersReceivedCapability.promise},read:function(){if(this._storedError)return Promise.reject(this._storedError);if(this._cachedChunks.length>0){var e=this._cachedChunks.shift();return Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0});var t=(0,i.createPromiseCapability)();return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},f.prototype={_close:function(){this.onClosed&&this.onClosed(this)},_onDone:function(e){var t=e.chunk;this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t;this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._close()},_onProgress:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})},get isStreamingSupported(){return!1},read:function(){if(null!==this._queuedChunk){var e=this._queuedChunk;return this._queuedChunk=null,Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0});var t=(0,i.createPromiseCapability)();return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},t.PDFNetworkStream=h,t.NetworkManager=l}])});
;

$node[ "pdfjs-dist/build/pdf.min.js" ] = $node[ "pdfjs-dist/build/pdf.min.js" ] = module.exports }.call( {} , {} )

;
"use strict";
var $;
(function ($) {
    $.$lib_pdfjs = $node['pdfjs-dist/build/pdf.min.js'].PDFJS;
    $.$lib_pdfjs.disableRange = true;
    $.$lib_pdfjs.workerSrc = '-/node_modules/pdfjs-dist/build/pdf.worker.min.js';
})($ || ($ = {}));
//pdfjs.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_range_in(source) {
        return new $mol_range_lazy(source);
    }
    $.$mol_range_in = $mol_range_in;
    class $mol_range_common {
        item(id) {
            return;
        }
        get length() {
            return 0;
        }
        get '0'() {
            throw new Error('Direct access to items not supported. Use item( id : number ) method instead.');
        }
        forEach(handle) {
            const length = this.length;
            for (let i = 0; i < length; ++i) {
                handle(this.item(i), i);
            }
        }
        valueOf() {
            const list = [];
            this.forEach(val => list.push(val));
            return list;
        }
        concat(...args) {
            const ranges = args.map(range => range.valueOf());
            return this.valueOf().concat(...ranges);
        }
        slice(start = 0, end) {
            const source = this;
            return new $mol_range_lazy({
                item(id) {
                    return source.item(id + start);
                },
                get length() {
                    return Math.min(end, source.length) - start;
                }
            });
        }
        map(proceed) {
            const source = this;
            return new $mol_range_lazy({
                item(id) {
                    return proceed(source.item(id), id);
                },
                get length() {
                    return source.length;
                }
            });
        }
        join(delim = ',') {
            const list = [];
            this.forEach(val => list.push(val));
            return list.join(delim);
        }
        every(check) {
            let res = true;
            this.forEach((val, id) => {
                if (!res)
                    return;
                res = check(val, id);
            });
            return res;
        }
        some(check) {
            let res = false;
            this.forEach((val, id) => {
                if (res)
                    return;
                res = check(val, id);
            });
            return res;
        }
    }
    $.$mol_range_common = $mol_range_common;
    class $mol_range_lazy extends $mol_range_common {
        constructor(source = {
            item(id) { return undefined; },
            length: 0
        }) {
            super();
            this.source = source;
        }
        item(id) {
            return this.source.item(id);
        }
        get length() {
            return this.source.length;
        }
    }
    $.$mol_range_lazy = $mol_range_lazy;
})($ || ($ = {}));
//range.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_embed_pdf extends $.$mol_scroll {
        uri() {
            return "";
        }
        sub() {
            return [].concat(this.Pages());
        }
        Pages() {
            return ((obj) => {
                obj.rows = () => this.pages();
                return obj;
            })(new this.$.$mol_list);
        }
        pages() {
            return [];
        }
        Page(index) {
            return ((obj) => {
                obj.page = () => this.page(index);
                return obj;
            })(new this.$.$mol_embed_pdf_page);
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_pdf.prototype, "Pages", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_embed_pdf.prototype, "Page", null);
    $.$mol_embed_pdf = $mol_embed_pdf;
})($ || ($ = {}));
(function ($) {
    class $mol_embed_pdf_page extends $.$mol_view {
        dom_name() {
            return "canvas";
        }
        page() {
            return null;
        }
        max_width() {
            return 640;
        }
        scale_over() {
            return 1.25;
        }
        plugins() {
            return [].concat(this.Touch());
        }
        Touch() {
            return ((obj) => {
                obj.zoom = (val) => this.scale(val);
                return obj;
            })(new this.$.$mol_touch);
        }
        scale(val, force) {
            return (val !== void 0) ? val : 1;
        }
        style() {
            return ({
                "zoom": this.zoom(),
            });
        }
        zoom() {
            return 0.8;
        }
        field() {
            return ({
                "width": this.width(),
                "height": this.height(),
            });
        }
        width() {
            return 0;
        }
        height() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_pdf_page.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed_pdf_page.prototype, "scale", null);
    $.$mol_embed_pdf_page = $mol_embed_pdf_page;
})($ || ($ = {}));
//pdf.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_pdf extends $.$mol_embed_pdf {
            document(doc, force) {
                var loadingTask = $.$lib_pdfjs.getDocument(this.uri()).promise
                    .then((doc) => this.document(doc, $.$mol_atom_force_cache))
                    .catch((error) => this.document(error, $.$mol_atom_force_cache));
                throw new $.$mol_atom_wait(`Loading PDF document: ${this.uri()}`);
            }
            page(index, page, force) {
                this.document().getPage(index + 1)
                    .then((page) => this.page(index, page, $.$mol_atom_force_cache))
                    .catch((error) => this.page(index, error, $.$mol_atom_force_cache));
                throw new $.$mol_atom_wait(`Rendering PDF page=${index}`);
            }
            pages() {
                return $.$mol_range_in({
                    item: index => this.Page(index),
                    length: this.document().numPages,
                }).valueOf();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_embed_pdf.prototype, "document", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_embed_pdf.prototype, "page", null);
        $$.$mol_embed_pdf = $mol_embed_pdf;
        class $mol_embed_pdf_page extends $.$mol_embed_pdf_page {
            viewport() {
                return this.page().getViewport(this.scale_over());
            }
            zoom() {
                return this.scale() / this.scale_over();
            }
            width() {
                return Math.floor(this.viewport().width);
            }
            height() {
                return Math.floor(this.viewport().height);
            }
            minimal_width() {
                return this.width() * this.zoom();
            }
            minimal_height() {
                return this.height() * this.zoom();
            }
            paint(next, force) {
                this.page().render({
                    canvasContext: this.dom_node().getContext('2d'),
                    viewport: this.viewport(),
                })
                    .then(() => this.paint(null, $.$mol_atom_force_cache))
                    .catch((error) => this.paint(error, $.$mol_atom_force_cache));
                throw new $.$mol_atom_wait('Painting...');
            }
            render() {
                super.render();
                this.paint();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_embed_pdf_page.prototype, "paint", null);
        $$.$mol_embed_pdf_page = $mol_embed_pdf_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pdf.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_webdav extends $.$mol_http {
        static item(uri) {
            return this.make({
                uri: $.$mol_const(uri),
            });
        }
        data_tree() {
            const dom = this.response().responseXML;
            const responses = dom.querySelectorAll('response');
            const data = {};
            for (let response of responses) {
                const uri = this.resolve(response.querySelector('href').textContent).uri();
                data[uri] = response;
            }
            return data;
        }
        data_self() {
            return this.parent().data_tree();
        }
        parent() {
            return $mol_webdav.item(this.uri().replace(/\/[^\/]*\/?$/, '/'));
        }
        sub() {
            const next = [];
            for (let uri of Object.keys(this.data_tree())) {
                if (uri == this.uri())
                    continue;
                next.push($mol_webdav.item(uri));
            }
            return next;
        }
        depth() {
            return 1;
        }
        headers() {
            return {
                'Depth': String(this.depth())
            };
        }
        method_get() {
            return 'PROPFIND';
        }
        resolve(uri) {
            if (!uri)
                return this;
            if (/^[-\w]+:/.test(uri)) {
                return $mol_webdav.item(uri);
            }
            if (uri[0] === '/') {
                return $mol_webdav.item(this.uri().replace(/^([^\/]+\/\/[^\/]+).*/, '$1') + uri);
            }
            let res = this.uri() + '/' + uri;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            while (true) {
                let prev = res;
                res = res.replace(/\/\.\.\/[^\/]+\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.item(res);
        }
        prop(prop) {
            return this.data_self()[this.uri()].querySelector(prop).textContent;
        }
        type() {
            return this.data_self()[this.uri()].querySelector('collection') ? 'dir' : 'file';
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_webdav.prototype, "data_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_webdav.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_webdav, "item", null);
    $.$mol_webdav = $mol_webdav;
})($ || ($ = {}));
//webdav.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_files extends $.$mol_book {
        uri_current() {
            return this.uri_root();
        }
        uri_root() {
            return this.uri_root_default();
        }
        uri_root_default() {
            return "";
        }
        credentials() {
            return ({
                "login": "",
                "password": "",
            });
        }
        title() {
            return this.title_root();
        }
        title_root() {
            return this.$.$mol_locale.text("$mol_app_files_title_root");
        }
        Folder(folder) {
            return ((obj) => {
                obj.title = () => this.webdav_title(folder);
                obj.description = () => this.webdav_description(folder);
                obj.tools = () => this.page_tools(folder);
                obj.rows = () => this.folder_rows(folder);
                obj.event_top = (val) => this.event_front_up(val);
                return obj;
            })(new this.$.$mol_app_files_folder);
        }
        webdav_title(folder) {
            return "";
        }
        webdav_description(folder) {
            return "";
        }
        folder_rows(folder) {
            return [];
        }
        Folder_row(uri) {
            return ((obj) => {
                obj.minimal_height = () => 40;
                obj.arg = () => this.folder_row_arg(uri);
                obj.current = () => this.folder_row_current(uri);
                obj.sub = () => [].concat(this.folder_row_icon(uri), this.Folder_row_info(uri));
                return obj;
            })(new this.$.$mol_link);
        }
        folder_row_arg(uri) {
            return ({});
        }
        folder_row_current(uri) {
            return false;
        }
        folder_row_icon(uri) {
            return null;
        }
        Folder_row_info(uri) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Folder_row_descr(uri), this.Folder_row_title(uri));
                return obj;
            })(new this.$.$mol_view);
        }
        Folder_row_descr(uri) {
            return ((obj) => {
                obj.sub = () => [].concat(this.folder_row_descr(uri));
                return obj;
            })(new this.$.$mol_view);
        }
        folder_row_descr(uri) {
            return "";
        }
        Folder_row_title(uri) {
            return ((obj) => {
                obj.sub = () => [].concat(this.folder_row_title(uri));
                return obj;
            })(new this.$.$mol_view);
        }
        folder_row_title(uri) {
            return "";
        }
        File(file) {
            return ((obj) => {
                obj.title = () => this.webdav_title(file);
                obj.tools = () => this.page_tools(file);
                obj.src = () => this.file_uri(file);
                obj.mime = () => this.file_mime(file);
                obj.event_top = (val) => this.event_front_up(val);
                return obj;
            })(new this.$.$mol_app_files_file);
        }
        file_uri(file) {
            return "";
        }
        file_mime(file) {
            return "";
        }
        Icon_folder(uri) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_folder);
        }
        Icon_file(uri) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_file);
        }
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder);
        }
        tools_root() {
            return [];
        }
        page_tools(uri) {
            return [].concat(this.Close(uri));
        }
        Close(uri) {
            return ((obj) => {
                obj.sub = () => [].concat(this.Close_icon(uri));
                obj.arg = () => this.close_arg(uri);
                return obj;
            })(new this.$.$mol_link);
        }
        Close_icon(uri) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross);
        }
        close_arg(uri) {
            return ({});
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Folder", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Folder_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Folder_row_info", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Folder_row_descr", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Folder_row_title", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "File", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Icon_folder", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Icon_file", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_files.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Close", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_files.prototype, "Close_icon", null);
    $.$mol_app_files = $mol_app_files;
})($ || ($ = {}));
(function ($) {
    class $mol_app_files_folder extends $.$mol_page {
        minimal_width() {
            return 400;
        }
        body() {
            return [].concat(this.Description(), this.Folder_rows());
        }
        Description() {
            return ((obj) => {
                obj.text = () => this.description();
                return obj;
            })(new this.$.$mol_text);
        }
        description() {
            return "";
        }
        Folder_rows() {
            return ((obj) => {
                obj.rows = () => this.rows();
                return obj;
            })(new this.$.$mol_list);
        }
        rows() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_files_folder.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_files_folder.prototype, "Folder_rows", null);
    $.$mol_app_files_folder = $mol_app_files_folder;
})($ || ($ = {}));
(function ($) {
    class $mol_app_files_file extends $.$mol_page {
        minimal_width() {
            return 800;
        }
        body() {
            return [].concat(this.Embed());
        }
        Embed() {
            return ((obj) => {
                obj.uri = () => this.src();
                obj.mime = () => this.mime();
                return obj;
            })(new this.$.$mol_embed);
        }
        src() {
            return "";
        }
        mime() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_files_file.prototype, "Embed", null);
    $.$mol_app_files_file = $mol_app_files_file;
})($ || ($ = {}));
//files.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_files extends $.$mol_app_files {
            pages() {
                return [
                    ...this.webdavs().map((webdav) => (this.webdav_type(webdav.uri()) === 'dir')
                        ? this.Folder(webdav.uri())
                        : this.File(webdav.uri())),
                ];
            }
            uri_root(next) {
                return $.$mol_state_arg.value(this.state_key('root'), next) || this.uri_root_default();
            }
            uri_current(next) {
                return $.$mol_state_arg.value(this.state_key('current'), next) || super.uri_current();
            }
            root() {
                return $.$mol_webdav.item(this.uri_root());
            }
            current() {
                const root = this.uri_root();
                const current = this.uri_current();
                if (current.substring(0, root.length) !== root)
                    return this.root();
                return $.$mol_webdav.item(current);
            }
            webdav(uri) {
                const webdav = $.$mol_webdav.item(uri);
                webdav.credentials = () => this.credentials();
                return webdav;
            }
            folder_row_current(uri) {
                return this.webdavs().indexOf(this.webdav(uri)) !== -1;
            }
            webdavs() {
                const root = this.root();
                const current = this.current();
                const webdavs = [current];
                let webdav = current;
                while (webdav !== root) {
                    webdav = webdav.parent();
                    webdavs.unshift(webdav);
                }
                return webdavs;
            }
            webdav_type(uri) {
                const webdav = this.webdav(uri);
                if (webdav === this.root() || webdav.type() === 'dir')
                    return 'dir';
                return 'file';
            }
            webdav_title(uri) {
                const webdav = this.webdav(uri);
                if (webdav === this.root())
                    return this.title_root();
                return webdav.prop('displayname') || '';
            }
            folder_rows(uri) {
                return this.webdav(uri).sub().map(webdav => this.Folder_row(webdav.uri()));
            }
            folder_row_arg(uri) {
                return { 'current': uri };
            }
            folder_row_icon(uri) {
                return this.webdav_type(uri) === 'dir'
                    ? this.Icon_folder(uri)
                    : this.Icon_file(uri);
            }
            folder_row_title(uri) {
                return this.webdav(uri).prop('displayname');
            }
            folder_row_descr(uri) {
                if (this.webdav_type(uri) !== 'file')
                    return '';
                const size = this.file_size(uri);
                return `${size.toLocaleString()} B`;
            }
            file_uri(uri) {
                return uri;
            }
            file_mime(uri) {
                return this.webdav(uri).prop('getcontenttype');
            }
            file_size(uri) {
                return Number(this.webdav(uri).prop('getcontentlength'));
            }
            title() {
                return this.webdav_title(this.uri_current());
            }
            page_tools(uri) {
                return uri === this.uri_root()
                    ? this.tools_root()
                    : [this.Close(uri)];
            }
            close_arg(uri) {
                return { 'current': this.webdav(uri).parent().uri() };
            }
        }
        $$.$mol_app_files = $mol_app_files;
        class $mol_app_files_folder extends $.$mol_app_files_folder {
            body() {
                return [
                    ...this.description() ? [this.Description()] : [],
                    this.Folder_rows(),
                ];
            }
        }
        $$.$mol_app_files_folder = $mol_app_files_folder;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//files.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_large extends $.$mol_view {
    }
    $.$mol_demo_large = $mol_demo_large;
})($ || ($ = {}));
//large.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_demo_large extends $.$mol_demo_large {
            minimal_height() {
                return $.$mol_window.size().height - 100;
            }
            minimal_width() {
                return this.$.$mol_window.size().width - 300;
            }
        }
        $$.$mol_demo_large = $mol_demo_large;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//large.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_files_demo extends $.$mol_demo_large {
        sub() {
            return [].concat(this.App());
        }
        App() {
            return ((obj) => {
                obj.title_root = () => this.title();
                obj.uri_root_default = () => this.uri_root();
                return obj;
            })(new this.$.$mol_app_files);
        }
        title() {
            return this.$.$mol_locale.text("$mol_app_files_demo_title");
        }
        uri_root() {
            return "https://ajaxexplorer.com:443/User5df12c6/";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_files_demo.prototype, "App", null);
    $.$mol_app_files_demo = $mol_app_files_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_files_demo extends $.$mol_app_files_demo {
            render() {
                $.$mol_http.resource(this.uri_root()).text();
                return super.render();
            }
        }
        $$.$mol_app_files_demo = $mol_app_files_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
export default $
//# sourceMappingURL=web.esm.js.map