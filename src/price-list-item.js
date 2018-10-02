const { createElement, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;

//import './price-list-item.scss';

registerBlockType( "gm18-gutenberg-price-list/price-list-item", {
    title: "Price List Item",
    description: "Price list/restaurant menu item",
    icon: "admin-site",
    category: "common",
    parent: [ "gm18-gutenberg-price-list/price-list-category" ],

	attributes: {
		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		price: {
			type: 'string'
		}
	},

    edit( { setAttributes, attributes, isSelected } ) {
		function updatePriceListItemName( newValue ) {
			setAttributes( {
				name: newValue
			} );
		}

		function updatePriceListItemDescription( newValue ) {
			setAttributes( {
				description: newValue
			} );
		}

		function updatePriceListItemPrice( newValue ) {
			setAttributes( {
				price: newValue
			} );
		}

        return (
            <li className="menu-item">
				{ isSelected && (
					<Fragment>
						<TextControl
							label="Item Name"
							value={ attributes.name }
							onChange={ updatePriceListItemName }
						/>
						<TextControl
							label="Item Description"
							value={ attributes.description }
							onChange={ updatePriceListItemDescription }
						/>
						<TextControl
							label="Item Price"
							value={ attributes.price }
							onChange={ updatePriceListItemPrice }
						/>
					</Fragment>
				) }
				{ ! isSelected && (
					<Fragment>
						<strong className="menu-item-name">
							{ attributes.name }
						</strong>
						<span className="menu-item-description">
							{ attributes.description }
						</span>
						<span className="menu-item-price">
							{ attributes.price }
						</span>
					</Fragment>
				) }
            </li>
        );
    },

    save( { attributes } ) {
        return (
            <li className="menu-item">
				<strong className="menu-item-name">{ attributes.name }</strong>
				<span className="menu-item-description">{ attributes.description }</span>
				<span className="menu-item-price">{ attributes.price }</span>
			</li>
        );
    }
});
