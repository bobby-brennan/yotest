/* global sandbox, describe, it, expect, should */

describe('sandbox()', function () {
  'use strict';

  it('exists', function () {
    expect(sandbox).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
