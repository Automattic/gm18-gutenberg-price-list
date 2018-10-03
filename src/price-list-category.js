const {createElement, Fragment} = wp.element;
const {registerBlockType} = wp.blocks;
const { RichText } = wp.editor;
const {InnerBlocks} = wp.editor;

registerBlockType("gm18-gutenberg-price-list/price-list-category", {
    title: "Price List Category",
    description: "Price list/restaurant menu category",
    icon: "admin-site",
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
            <section className="menu-section">
                <header>

					<h3 className="category-name">
						<RichText
							value={ attributes.categoryName }
							placeholder={ 'Category Name' }
							keepPlaceholderOnFocus={ true }
							formattingControls={ [] }
							onChange={ updateCategoryName }
						/>
					</h3>

					<p className="category-description">
						<RichText
							value={ attributes.categoryDescription }
							placeholder={ 'Category Description' }
							keepPlaceholderOnFocus={ true }
							formattingControls={ [] }
							onChange={ updateCategoryDescription }
						/>
					</p>
                </header>
				<ul>
                    {/* Want to do allowedBlocks={ [] }, but that seems buggy - https://github.com/WordPress/gutenberg/issues/7763 */}
                    <InnerBlocks template={[
                        [ 'gm18-gutenberg-price-list/price-list-item' ],
                        [ 'gm18-gutenberg-price-list/price-list-item' ],
                        [ 'gm18-gutenberg-price-list/price-list-item' ],
                    ]} />
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
