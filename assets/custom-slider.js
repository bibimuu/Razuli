let count = 0;
const minCount = 0; // カウントの最小値
const maxCount = 5; // カウントの最大値（適宜変更）

$('.next-box').on('click', function() {

  function increaseCount() {
    if(count == 4){
      $('.next-box').addClass("disable-button");
    }

    if (count < maxCount) {
      $('.prev-box').removeClass("disable-button");
      count++; // 変数の値を1増やす。
      let leftValue = -376 * count;
      let lineLeftValue = 18 * count;
      $('.carousel_area__inner').css('left', leftValue + 'px'); // スタイルを設定
      $('.carousel-moveable-line-style').css('left', lineLeftValue + '%');
    }
  }

  increaseCount(); // 関数を呼び出す

});

$('.prev-box').on('click', function() {
  console.log(count)
  if(count == 0) {
    $('.prev-box').addClass("disable-button");
    $('.next-box').removeClass("disable-button");
  } else {
    $('.next-box').removeClass("disable-button");
  }

  function decreaseCount() {
    if (count > minCount) {
      count--; // 変数の値を1増やす。
      let leftValue = -376 * count;
      let lineLeftValue = 18 * count;
      $('.carousel_area__inner').css('left', leftValue + 'px'); // スタイルを設定
      $('.carousel-moveable-line-style').css('left', lineLeftValue + '%');
    }
  }

  decreaseCount()

});
