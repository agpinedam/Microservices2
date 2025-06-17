import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'master',
    clientId: 'myfrontend',
    onLoad: 'login-required'
});

let initialized = false;

const initKeycloak = () =>
    new Promise((resolve, reject) => {
        if (initialized) {
            resolve(keycloak);
            return;
        }

        keycloak
            .init({
                onLoad: 'login-required',
                checkLoginIframe: false,
            })
            .then((authenticated) => {
                if (authenticated) {
                    initialized = true;
                    resolve(keycloak);
                } else {
                    reject(new Error('Not authenticated'));
                }
            })
            .catch(reject);
    });

export { keycloak, initKeycloak };