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
            <section className="menu-section">
                <header>
                    <h3>TODO: Category Name edit markup goes here</h3>
                    <p>Category description goes here</p>
                </header>
                {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                <ul>
                    <InnerBlocks />
                </ul>
            </section>
        );
    },

    save() {
        return (
            <section>
                <header>
                    <h2>TODO: Category Name save markup goes here</h2>
                    <p>Category description goes here</p>
                </header>
                <ul>
                    <InnerBlocks.Content />
                </ul>
            </section>
        );
    }
});
