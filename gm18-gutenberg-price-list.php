<?php
/**
 * Plugin Name: Price List
 * Plugin URI: https://github.com/Automattic/gm18-gutenberg-price-list
 * Description: Gutenberg price list/restaurant menu
 * Version: 1.0.0
 * Author: Michael Cain, David (Lenny) Lenehan, Matt Sherman
 *
 * @package gm18-gutenberg-price-list
 */

 /**
 * Retrieves a URL to a file in the plugin's directory.
 *
 * @param  string $path Relative path of the desired file.
 *
 * @return string       Fully qualified URL pointing to the desired file.
 *
 * @since 1.0.0
 */
function gm18_gutenberg_price_list_url( $path ) {
	return plugins_url( $path, __FILE__ );
}

/**
 * Registers the plugin's block.
 *
 * @since 1.0.0
 */
function gm18_gutenberg_price_list_register_block() {
	//
	// Price List
	//
	wp_register_script(
		'gm18-gutenberg-price-list',
		gm18_gutenberg_price_list_url( 'dist/index.js' ),
		array( 'wp-element', 'wp-blocks', 'wp-editor' )
	);
	wp_register_style(
		'gm18-gutenberg-price-list',
		gm18_gutenberg_price_list_url( 'dist/index.css' )
	);

	register_block_type( 'gm18-gutenberg-price-list/price-list', array(
		'editor_script' => 'gm18-gutenberg-price-list',
		'style' => 'gm18-gutenberg-price-list',
	) );

	//
	// Category
	//
	wp_register_script(
		'gm18-gutenberg-price-list-category',
		gm18_gutenberg_price_list_url( 'dist/price-list-category.js' ),
		array( 'wp-element', 'wp-blocks', 'wp-editor', 'wp-components' )
	);
	wp_register_style(
		'gm18-gutenberg-price-list-category',
		gm18_gutenberg_price_list_url( 'dist/price-list-category.css' )
	);

	register_block_type( 'gm18-gutenberg-price-list/price-list-category', array(
		'editor_script' => 'gm18-gutenberg-price-list-category',
		'style' => 'gm18-gutenberg-price-list-category',
	) );

	//
	// Item
	//
	wp_register_script(
		'gm18-gutenberg-price-list-item',
		gm18_gutenberg_price_list_url( 'dist/price-list-item.js' ),
		array( 'wp-element', 'wp-blocks', 'wp-editor' )
	);
	wp_register_style(
		'gm18-gutenberg-price-list-item',
		gm18_gutenberg_price_list_url( 'dist/price-list-item.css' )
	);

	register_block_type( 'gm18-gutenberg-price-list/price-list-item', array(
		'editor_script' => 'gm18-gutenberg-price-list-item',
		'style' => 'gm18-gutenberg-price-list-item',
	) );
}

/**
 * Trigger the block registration on init.
 */
add_action( 'init', 'gm18_gutenberg_price_list_register_block' );
