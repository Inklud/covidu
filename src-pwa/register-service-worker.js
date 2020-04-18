import { register } from "register-service-worker";
import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from "quasar";

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    // console.log("Service worker is active.");
  },

  registered(/* registration */) {
    // console.log("Service worker has been registered.");
  },

  cached(/* registration */) {
    //  console.log("Content has been cached for offline use.");
  },

  updatefound(registration) {
    // console.log("New content is downloading.");
    Loading.show({
      spinner: QSpinnerGears,
      spinnerColor: "negative",
      backgroundColor: "primary"
      // message: "A new update is available! Updating..."
    });
  },

  updated(registration) {
    // registration -> a ServiceWorkerRegistration instance
    // fully customizable
    Loading.show({
      spinner: QSpinnerGears,
      spinnerColor: "white",
      backgroundColor: "primary"
      // message: "A new update is available! Updating..."
    });

    window.location.reload(true);
  },

  offline() {
    // console .log "No internet connection found. App is running in offline mode." ();
  },

  error(/*err*/) {
    // console.error("Error during service worker registration:", err);
  }
});
