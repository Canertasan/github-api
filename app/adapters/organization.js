import ApplicationAdapter from './application';

export default class OrganizationAdapter extends ApplicationAdapter {
  fetchRepos(organizationName) {
    let url = `${this.host}/orgs/${organizationName}/repos`;
    return this.ajax(url, 'GET');
  }

  fetchBranchNumber(fullName) {
    let url = `${this.host}/repos/${fullName}/branches`;
    return this.ajax(url, 'GET');
  }
}
