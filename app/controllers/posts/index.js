import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostsController extends Controller {
  @tracked newTitle;

  @service store;

  @action
  addPost() {
    this.store.createRecord('post', {
      title: this.newTitle,
      body:'Empty for now..',
      publishedAt: new Date()
    }).save();
    this.newTitle = '';
  }


}
