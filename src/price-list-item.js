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
            <li>TODO: Item edit markup goes here</li>
        );
    },

    save() {
        return (
            <li>TODO: Item save markup goes here</li>
        );
    }
});
