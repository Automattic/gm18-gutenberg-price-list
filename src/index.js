const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.editor;

registerBlockType("gm18-gutenberg-price-list/price-list", {
    title: "Price List",
    description: "Price list/restaurant menu",
    icon: "admin-site",
    category: "common",

    edit() {
        return (
            <React.Fragment>
                <h1>TODO: Price List edit markup goes here</h1>
                {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                <InnerBlocks />
            </React.Fragment>
        );
    },

    save() {
        return (
            <React.Fragment>
                <h1>TODO: Price List save markup goes here</h1>
                <InnerBlocks.Content />
            </React.Fragment>
        );
    }
});
