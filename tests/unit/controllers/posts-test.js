import { module, test } from 'qunit';
import { setupTest } from 'blog/tests/helpers';

module('Unit | Controller | posts', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:posts');
    assert.ok(controller);
  });
});
