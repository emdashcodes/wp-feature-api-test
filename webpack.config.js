const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
    ...defaultConfig,
    externals: {
        ...defaultConfig.externals,
        '@automattic/wp-feature-api': 'wp.features',
        '@wordpress/data': 'wp.data',
        '@wordpress/core-data': 'wp.coreData',
        '@wordpress/api-fetch': 'wp.apiFetch',
        '@wordpress/plugins': 'wp.plugins',
        '@wordpress/dom-ready': 'wp.domReady',
        '@wordpress/element': 'wp.element',
        '@wordpress/i18n': 'wp.i18n',
    },
};
