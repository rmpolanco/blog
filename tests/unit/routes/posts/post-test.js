import { module, test } from 'qunit';
import { setupTest } from 'blog/tests/helpers';

module('Unit | Route | posts/post', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:posts/post');
    assert.ok(route);
  });
});
