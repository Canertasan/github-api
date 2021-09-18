import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomePageController extends Controller {
  @service router;

  @tracked organizationName = null;

  @action
  async findOrganization() {
    await this.router.transitionTo('organization', this.organizationName);
  }

  @action
  updateOrganizationName(e) {
    this.organizationName = e.target.value;
  }
}
