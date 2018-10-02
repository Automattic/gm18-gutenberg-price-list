const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.editor;

registerBlockType("gm18-gutenberg-price-list/price-list-category", {
    title: "Price List Category",
    description: "Price list/restaurant menu category",
    icon: "admin-site",
    category: "common",
    parent: [ "gm18-gutenberg-price-list/price-list" ],

    edit() {
        return (
            <React.Fragment>
                <p>TODO: Category edit markup goes here</p>
                {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                <InnerBlocks />
            </React.Fragment>
        );
    },

    save() {
        return (
            <React.Fragment>
                <p>TODO: Category save markup goes here</p>
                <InnerBlocks.Content />
            </React.Fragment>
        );
    }
});
