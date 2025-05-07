<?php
/**
 * Plugin Name:       WP Feature API - Independent Client Example
 * Plugin URI:        https://example.com
 * Description:       A test plugin to demonstrate usage of @automattic/wp-feature-api client package.
 * Version:           0.1.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-feature-api-test
 * Domain Path:       /languages
 * Requires Plugins:  wp-feature-api
 */


if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Enqueue scripts and styles.
 */
function wp_feature_api_test_enqueue_scripts() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	wp_enqueue_script(
		'wp-feature-api-test-script',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		array_merge( $asset_file['dependencies'], array( 'wp-features' ) ),
		$asset_file['version'],
		true
	);
}
add_action( 'admin_enqueue_scripts', 'wp_feature_api_test_enqueue_scripts' );
