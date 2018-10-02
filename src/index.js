const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;

registerBlockType("gm18-gutenberg-price-list/price-list", {
    title: "Price List",
    description: "Price list/restaurant menu",
    icon: "admin-site",
    category: "common",

    edit() {
        return (
            <p>Hello Editor</p>
        );
    },

    save() {
        return (
            <p>Hello Frontend</p>
        );
    }
});
