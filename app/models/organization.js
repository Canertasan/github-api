import Model, { attr, hasMany } from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class OrganizationModel extends Model {
  @service store;

  @hasMany('repository', { async: true }) repositories;
}
