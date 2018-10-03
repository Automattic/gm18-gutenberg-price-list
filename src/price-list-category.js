const {createElement, Fragment} = wp.element;
const {registerBlockType} = wp.blocks;
const { RichText } = wp.editor;
const {InnerBlocks} = wp.editor;

import './price-list-category.scss';

registerBlockType("gm18-gutenberg-price-list/price-list-category", {
    title: "Price List Category",
    description: "Price list/restaurant menu category",
    icon: "portfolio",
    category: "common",
    parent: [ "gm18-gutenberg-price-list/price-list" ],

	attributes: {
			categoryName: {
				type: 'string'
			},
			categoryDescription: {
				type: 'string'
			},
		},


    edit( { setAttributes, attributes, isSelected } ) {

		function updateCategoryName( newValue ) {
			setAttributes( {
				categoryName: newValue
			} );
		}

		function updateCategoryDescription( newValue ) {
			setAttributes( {
				categoryDescription: newValue
			} );
		}

        return (
            <section className="price-list-category">
                <header>
					<h3 className="price-list-category-name">
						<RichText
							value={ attributes.categoryName }
							placeholder={ 'Category Name' }
							keepPlaceholderOnFocus={ true }
							formattingControls={ [] }
							onChange={ updateCategoryName }
						/>
					</h3>

					<p className="price-list-category-description">
						<RichText
							value={ attributes.categoryDescription }
							placeholder={ 'Category Description' }
							keepPlaceholderOnFocus={ true }
							formattingControls={ [] }
							onChange={ updateCategoryDescription }
						/>
					</p>
                </header>
				<ul className="price-list-items">
                    {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                    <InnerBlocks template={[
                        [ 'gm18-gutenberg-price-list/price-list-item' ],
                        [ 'gm18-gutenberg-price-list/price-list-item' ],
                    ]} />
                </ul>
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className="price-list-category">
                <header>
					{ attributes.categoryName && (
						<h3 className="price-list-category-name">
							<RichText.Content
								value={ attributes.categoryName }
							/>
						</h3>
					) }

					{ attributes.categoryDescription && (
						<p className="price-list-category-description">
							<RichText.Content
								value={ attributes.categoryDescription }
							/>
						</p>
					) }
                </header>
                <ul className="price-list-items">
                    <InnerBlocks.Content />
                </ul>
            </section>
        );
    }
});
