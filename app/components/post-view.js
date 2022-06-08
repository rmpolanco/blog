import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class PostViewComponent extends Component {

  @tracked newBody;
  @service router;

  @action
  async removePost(post) {
    await post.destroyRecord();
    this.router.transitionTo('posts');
  }

  @action
  updateBody(post) {
    post.body = this.newBody;
    post.save();
    this.newBody = '';
  }
}
