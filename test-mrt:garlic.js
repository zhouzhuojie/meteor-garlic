Tinytest.add('Garlic can be initalized', function (test) {
  test.isNotNull($.fn.garlic, 'garlicjs should exist');
  test.isTrue(typeof($.fn.garlic) === "function", 'garlicjs should be a function');
});
