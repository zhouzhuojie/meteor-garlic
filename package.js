Package.describe({
  summary: "Automatically persist your forms' text field values locally",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-garlic.git",
  name: "mrt:garlic"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.add_files('garlicjs/dist/garlic.min.js', 'client');
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:garlic', 'tinytest', 'test-helpers'], ['client']);
    } else {
      api.use(['garlic', 'tinytest', 'test-helpers'], ['client']);
    }
    api.add_files('test-mrt:garlic.js', ['client']);
  });
}
