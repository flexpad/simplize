import Redirect from './redirect';
import { on, off } from '../utils/index';

import { picker } from "../components/picker/index";
import { middle } from "../components/middle/index";
import { ratio } from "../components/ratio/index";
import { datetime } from "../components/datetime/index";

import * as PROXY from './proxy';
export let filters = {
    rem: function(val){
        return val / this.$root.env.viewScale;
    }
}

export let directives = {
    "redirect": {
        priority: 3000,
        deep: true,
        _url: null,
        bind(){
             this._cb = () => { Redirect(this.vm.$root)(this._url); };
             on(this.el, 'click', this._cb);
        },
        update(newValue){
            this._url = newValue;
        },
        unbind(){
            off(this.el, 'click', this._cb);
        }
    }
}

export let methods = {
    $redirect(url){ Redirect(this.$root)(url); }
}

export let components = {
    picker,
    middle,
    ratio,
    datetime
}
