Package.describe({
  summary: "Automatically persist your forms' text field values locally"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('garlicjs/dist/garlic.min.js', 'client');
});
