import Model, { attr, belongsTo } from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class RepositoryModel extends Model {
  @attr('string') name;
  @attr('string') htmlUrl;
  @attr('number', { defaultValue: 0 }) branchCount;
  @attr('string') language;
  @attr('boolean') private;

  @belongsTo('organization') organization;
}
