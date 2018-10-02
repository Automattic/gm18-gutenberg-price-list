const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;
const {InnerBlocks, RichText} = wp.editor;

registerBlockType( "gm18-gutenberg-price-list/price-list", {
    title: "Price List",
    description: "Price list/restaurant menu",
    icon: "admin-site",
    category: "common",
    attributes: {
        name: {
            type: 'string',
            source: 'children',
            selector: 'h1',
        }
    },

    edit( props ) {
        function updateNameAttribute( newValue ) {
            props.setAttributes({
                name: newValue,
            });
        }

        return (
            <section>
                {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                <InnerBlocks template={[
                    [ 'gm18-gutenberg-price-list/price-list-category' ],
                    [ 'gm18-gutenberg-price-list/price-list-category' ],
                    [ 'gm18-gutenberg-price-list/price-list-category' ],
                ]} />
            </section>
        );
    },

    save( props ) {
        return (
            <section>
                <h1>
                    <RichText.Content
                        value={ props.attributes.name }
                    />
                </h1>
                <InnerBlocks.Content />
            </section>
        );
    }
});
