const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;

registerBlockType("gm18-gutenberg-price-list/price-list-item", {
    title: "Price List Item",
    description: "Price list/restaurant menu item",
    icon: "admin-site",
    category: "common",
    parent: [ "gm18-gutenberg-price-list/price-list-category" ],

    edit() {
        return (
            <p>TODO: Item edit markup goes here</p>
        );
    },

    save() {
        return (
            <p>TODO: Item save markup goes here</p>
        );
    }
});
