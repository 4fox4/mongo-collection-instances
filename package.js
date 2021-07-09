Package.describe({
  name: '4fox4:mongo-collection-instances',
  summary: 'Access your Mongo instances',
  version: '0.3.6',
  git: 'https://github.com/4fox4/mongo-collection-instances.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'mongo',
    'lai:collection-extensions@0.2.1_1']);
  api.addFiles('mongo-instances.js');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'accounts-base',
    'mongo',
    '4fox4:mongo-collection-instances']);
  api.addFiles('mongo-instances-tests.js');
});
