const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.editor;
const {TextControl} = wp.components;

registerBlockType("gm18-gutenberg-price-list/price-list", {
    title: "Price List",
    description: "Price list/restaurant menu",
    icon: "admin-site",
    category: "common",
    attributes: {
        name: {
            type: 'string',
            default: 'My Price List',
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
                <h1>
                    <TextControl
                        value={ props.attributes.name }
                        onChange={ updateNameAttribute }
                    />
                </h1>
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
                <h1>{ props.attributes.name }</h1>
                <InnerBlocks.Content />
            </section>
        );
    }
});
