const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;

registerBlockType("gm18-gutenberg-price-list/price-list-category", {
    title: "Price List Category",
    description: "Price list/restaurant menu category",
    icon: "admin-site",
    category: "common",
    parent: [ "gm18-gutenberg-price-list/price-list" ],

    edit() {
        return (
            <p>TODO: Category edit markup goes here</p>
        );
    },

    save() {
        return (
            <p>TODO: Category save markup goes here</p>
        );
    }
});
