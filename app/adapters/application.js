import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'github-api/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.APP.apiHost;

  headers = {
    Authorization: 'token <auth_token>',
  };
}
