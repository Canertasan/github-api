import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class OrganizationRoute extends Route {
  @service store;

  @tracked organizationName = null;

  @tracked organization = null;

  @tracked errorMessage = null;

  beforeModel() {
    this.organization = this.store.createRecord('organization')
  }

  async model(params) {
    const adapter = this.store.adapterFor('organization');
    try {
      let repos = await adapter.fetchRepos(params.organizationName);
      let all_repos = [];
      for (const repo of repos) {
        const newRepo = this.store.createRecord('repository', {
          name: repo.name,
          htmlUrl: repo.html_url,
          // maximum call stack size error
          // branchCount: await adapter.fetchBranchNumber(repo.full_name).length, 
          language: repo.language,
          private: repo.private,
          organization: this.organization
        });
        all_repos.push(newRepo);
      };

      this.organization.repositories = all_repos;
      return repos;
    }
    catch (e) {
      this.errorMessage = e.errors.firstObject.title + ' ' +  e.errors.firstObject.status;
    }
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('errorMessage', this.errorMessage);
  }

  willTransition() {
    this.errorMessage = null;
  }
}
