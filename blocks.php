<!-- blocks/blocks.php -->
<?php

/**
 * Enqueue scripts for custom blocks
 */
function custom_block_scripts() {
  // Add custom Gutenberg block scripts
  wp_enqueue_script(
    'custom-block-scripts',
    get_template_directory_uri() . '/dist/js/blocks.js',
    array(
      'wp-blocks',
      'wp-components',
      'wp-element',
      'wp-i18n',
      'wp-editor'
    ),
    '1.0.0',
    true);

  // Register custom block types
  register_block_type(
    'iamtimsmith/blocks',
    array(
      'editor_script' => 'custom-block-scripts',
    )
  );
}
add_action('enqueue_block_assets', 'custom_block_scripts');