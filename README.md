# Microservices2# Microservices2

noms :

Fadia Allani
Angie Pineda

## TP1 : Service Web sécurisé

Pour le projet nous avons utilisé comme technologies java scrpit et react, pour la délégation d'autorisation et l'utilisation de l'api nous avons utilisé google. Pour la délégation d'autorisation nous avons utilisé un container docker avec keycloak.

Lorsque le projet est lancé et que l'on se rend sur la page d'accueil “localhost:5173/”, la première chose qui s'affiche est la page de connexion keycloak qui demande à l'utilisateur de se connecter, si un identifiant et un mot de passe valides sont saisis, un token est récupéré et il autorise la navigation sur le site web. En outre, il existe une api protégée par keycloak, et si le front-end doit accéder à cette ressource, il fera une requête du type :

```js
fetch('http://localhost:3000/protected', {
  headers: {
    Authorization: `Bearer ${keycloak.token}`
  }
})
```

Avec ce qui précède, le backend vérifie la demande et si le jeton est valide, il renvoie les données demandées, sinon il renvoie une erreur 401.

Une fois entrée, la page est redirigée vers la page de connexion dans laquelle se trouve un bouton permettant de se connecter avec Google. Lorsque l'on clique sur ce bouton, un appel est lancé au backend qui redirige la demande vers la page Google, où l'authentification de l'utilisateur est demandée et où il est ensuite demandé d'accepter les conditions générales d'utilisation. Avec les données ci-dessus, le backend appelle l'api google people où il demande des informations sur l'utilisateur (mail, nom et photo) qui sont récupérées par le frontend et affichées sur la page /info.


### Difficultés rencontrées.

**Google:** 

La configuration sur le site de google est confuse, car il y a beaucoup d'onglets, ce qui rend difficile de trouver la bonne page pour s'enregistrer, éditer et obtenir l'identifiant client pour l'application. Ensuite, pour la redirection des URI, il n'y a pas de documentation claire et il est donc difficile de l'intégrer. 

**Keycloak**

La configuration pour permettre l'authentification à partir de keycloak est confuse, car bien que la page donne un exemple d'utilisation avec javascript, elle n'indique pas clairement les termes, par exemple elle ne décrit pas la signification de realm, ce qui rend difficile la compréhension de ce que fait le code. Ensuite, comme dans le cas précédent, l'adresse des URLs n'est pas claire et nous avons eu des problèmes pour accéder à la page qui se lance de Keycloak. 


# TP2 : Kubernetes

### Problèmes rencontrés

Pour faire le docker compose push de l'application nous avons eu des problèmes dus à la configuration de docker qui bloquait le processus, de plus il y avait des problèmes avec la version de doker. 

Il y a également eu des problèmes dans la configuration de kubernetes, ainsi lorsque nous avons essayé de créer une connexion à http://vulnnode.infres.fr/lookup.html celle-ci n'a pas été trouvée, nous avons donc dû revenir à la configuration du document précédent et vérifier étape par étape où se trouvait l'erreur.


