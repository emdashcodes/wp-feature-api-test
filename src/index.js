/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

/**
 * External dependencies
 */
import { getRegisteredFeatures, registerFeature } from '@automattic/wp-feature-api';

domReady( async () => {
	console.log( 'WP Feature API Test Plugin: Initializing...' );

	registerFeature( {
		id: 'example-client-feature',
		title: 'Example Client Feature',
		description: 'A simple feature registered from the test plugin.',
		location: 'client',
		callback: async ( args ) => {
			console.log( 'Example Client Feature executed with args:', args );
			return { success: true, message: 'Client feature ran!' };
		},
	} );

	console.log( 'WP Feature API Test Plugin: Example feature registered.' );

	try {
		// Now fetch and log all features (including the one just registered)
		const features = await getRegisteredFeatures();
		if ( features ) {
			console.log( 'WP Feature API Test Plugin: All Registered Features:', features );
		} else {
			console.log( 'WP Feature API Test Plugin: No features found or store not ready.' );
		}

        
	} catch ( error ) {
		console.error( 'WP Feature API Test Plugin: Error fetching features:', error );
	}
} );
