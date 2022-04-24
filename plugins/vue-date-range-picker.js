import Vue from "vue";
// import DateRangePicker from "@gravitano/vue-date-range-picker";

// Vue.config.productionTip = false;

// // use the plugin
// Vue.use(DateRangePicker);

import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
// Register
Vue.component('Datepicker', VueDatepickerUi)
// Or locally
export default {
    components: {
        Datepicker: VueDatepickerUi
    }
}
