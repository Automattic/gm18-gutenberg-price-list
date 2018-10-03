const { createElement, Fragment } = wp.element;
const { RichText } = wp.editor;
const { registerBlockType } = wp.blocks;

import './price-list-item.scss';

registerBlockType( "gm18-gutenberg-price-list/price-list-item", {
    title: "Price List Item",
    description: "Price list/restaurant menu item",
    icon: "carrot", // TODO: not working
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

    edit( { setAttributes, attributes } ) {
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
            <li className="price-list-item">
				<span className="price-list-item-header">
					<strong className="price-list-item-name">
						<RichText
							value={ attributes.name }
							placeholder={ 'Item Name' }
							keepPlaceholderOnFocus={ true }
							formattingControls={ [] }
							onChange={ updatePriceListItemName }
						/>
					</strong>
					<span className="price-list-item-price">
						<RichText
							value={ attributes.price }
							placeholder={ '2.00' }
							keepPlaceholderOnFocus={ true }
							formattingControls={ [] }
							onChange={ updatePriceListItemPrice }
						/>
					</span>
				</span>
				<span className="price-list-item-description">
					<RichText
						value={ attributes.description }
						placeholder={ 'Item Description' }
						keepPlaceholderOnFocus={ true }
						formattingControls={ [] }
						onChange={ updatePriceListItemDescription }
					/>
				</span>
            </li>
        );
    },

    save( { attributes } ) {
		return (
			<li className="price-list-item">
				<span className="price-list-item-header">
					<strong className="price-list-item-name">
						<RichText.Content value={ attributes.name } />
					</strong>
					<span className="price-list-item-price">
						<RichText.Content value={ attributes.price } />
					</span>
				</span>
				<span className="price-list-item-description">
					<RichText.Content value={ attributes.description } />
				</span>
			</li>
		);
    },
} );
