// ------------------ ROUTER -----------------
if(Meteor.isClient) {
	Router.configure({
		layoutTemplate:'routerLayout'
	});

	Router.route('/', function () {
		this.render('prologue', {
			to: 'prologue'});
		this.render('mainTask', {
			to: 'main'});
	});

	Router.route('/statistic', function () {
		this.render('statistic', {
			to: 'main'});
	});
}
