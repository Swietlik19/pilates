function headerAnimate() {
  var images            = $('.header img'),
    imagesCount         = images.length,
    imagesCountLoaded   = 0,
    imagesSrc = [];

  for (var i = 0; i < imagesCount; i++) {
    imagesSrc.push(images[i].src);
  }

  getBgImages();
  function getBgImages() {
    var url = '';
    var urlArr = [];

    if ($('.header').css('background-image') != 'none') {
        url = $('.header').css('background-image');
    }
    if ($('.header__wrapper').css('background-image') != 'none') {
        url += ',' + $('.header__wrapper').css('background-image');
    }

    if (url.length > 0) {
      urlArr = url.split(',');
      for (var i = 0; i < urlArr.length; i++) {
        urlArr[i] = urlArr[i].replace("url(\"", "");
        urlArr[i] = urlArr[i].replace("url(", "");
        urlArr[i] = urlArr[i].replace("\")", "");
        urlArr[i] = urlArr[i].replace(")", "");
        if (urlArr[i] != '') {
          imagesSrc.push(urlArr[i]);
          imagesCount++;
        }
      }
    }
  }

  if (imagesCount == 0) {
    runAnimation();
  } else {

    for (var i = 0; i < imagesCount; i++) {
      var imageClone = new Image();
      imageClone.onload  = imageLoaded;
      imageClone.onerror = imageLoaded;
      imageClone.src     = imagesSrc[i];
    }

    function imageLoaded() {
      imagesCountLoaded++;
      if (imagesCount == imagesCountLoaded) runAnimation();
    }
  }

  function runAnimation() {
    $('.header__content').animate({
      top: 0,
      opacity: 1
    },500);
    $('.header__wrapper').animate({
      opacity: 1
    },500);
  }
}
