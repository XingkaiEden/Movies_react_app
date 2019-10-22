import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({
        dsn: "https://518fab357d5b49a38eb533653246d59c@sentry.io/1788771",
        release: "my-project-name@0.1.0"
    });
}

function log(error) {
    Sentry.captureException(new Error("Something broke"));
}

export default {
    init,
    log
}

