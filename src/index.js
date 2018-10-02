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
            <section>
                <h1>TODO: Price List edit markup goes here</h1>
                {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                <InnerBlocks />
            </section>
        );
    },

    save() {
        return (
            <section>
                <h1>TODO: Price List save markup goes here</h1>
                <InnerBlocks.Content />
            </section>
        );
    }
});
