new Splide( '.splide', {
  classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
} );

const splide = new Splide( '.splide' );

splide.on( 'pagination:mounted', function ( data ) {
  // ULエレメントにクラスを追加できます
  data.list.classList.add( 'splide__pagination--custom' );

  // `items`は、すべてのLI要素とボタン要素を保持しています
  data.items.forEach( function ( item ) {
    item.button.textContent = String( item.page + 1 );
  } );
} );

splide.mount();