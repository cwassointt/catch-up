import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.scss';
import 'primeicons/primeicons.css';

import i18n from "./i18n.js";
import Aura from '@primevue/themes/aura';
import Toolbar from "primevue/toolbar";
import Menubar from "primevue/menubar";
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
import Drawer from "primevue/drawer";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Card from "primevue/card";

// Create App instance
const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura,
        options:{
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }});

// Specify PrimeVue Components to use in application
app.component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);

// Use i18n
app.use(i18n);


// Mount App instance info #app div
createApp(App).mount('#app')
