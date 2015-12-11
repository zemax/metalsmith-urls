var plugin = function (options) {
	options = options || {};

	return function (files, metalsmith, done) {
		var metadata = metalsmith.metadata();

		metadata.urls = [];

		var base_path = options.base_path || metadata.base_path || '';
		var base_url = options.base_url || metadata.base_url || base_path;

		for ( var key in files ) {
			var file = files[ key ];

			var url = key.replace('index.html', '');
			file.url = base_path + url;
			file.absolute_url = base_url + url;

			if ( !!file.id ) {
				metadata.urls[ file.id ] = base_path + url;
			}
		}

		return done();
	};
};

module.exports = plugin;
