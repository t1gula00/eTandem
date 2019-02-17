Router.route('/', {
  name: 'intro',
    action: function () {
        return Router.go('dashboard');
    }
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  except: ['atSignUp', 'atSignIn']
});