import { createApp } from 'vue';
<<<<<<< HEAD

createApp({}).mount('#app');
=======
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.mount('#app');
>>>>>>> 513448e64132e9a7df56caa66afe16d41ca1d53d
