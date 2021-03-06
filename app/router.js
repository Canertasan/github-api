import EmberRouter from '@ember/routing/router';
import config from 'github-api/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home-page', { path: '/' });
  this.route('organization', { path: '/organization/:organizationName' });
});
