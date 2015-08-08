'use strict';

var $ = window.jQuery;

function updateSplit() {
  var img0 = $('#preview0');
  var img1 = $('#preview1');
  if (!(img0.length || img1.length)) {
    return;
  }
  var minWidth = 999999999.2;
  var minHeight = 999999999.2;
  var imgs = [];
  if (img0.width()) {
    imgs.push(img0);
    minWidth = Math.min(img0.width(), minWidth);
    minHeight = Math.min(img0.height(), minHeight);
  }
  if (img1.width()) {
    imgs.push(img1);
    minWidth = Math.min(img1.width(), minWidth);
    minHeight = Math.min(img1.height(), minHeight);
  }
  var numFolds = parseInt($('input[name=folds]').val());
  var canvas = document.getElementById('output');
  canvas.width = minWidth * 2;
  canvas.height = minHeight;
  var context = canvas.getContext('2d');

  var dx = minWidth / numFolds;
  for (var iFold = 0; iFold <= numFolds; iFold++) {
    var srcOffsetX = dx * iFold;
    for (var iImg = 0; iImg < imgs.length; iImg++) {
      var img = imgs[iImg][0];
      var destOffsetX = dx * (iFold * imgs.length + iImg);
      context.drawImage(img, srcOffsetX, 0, dx, minHeight, destOffsetX, 0, dx, minHeight);
    }
  }
}

function readURL(input, target) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(target).attr('src', e.target.result);
      updateSplit();
    };
    reader.readAsDataURL(input.files[0]);
  }
}

$('input[name=image0]').change(function () {
  readURL(this, '#preview0');
});
$('input[name=image1]').change(function () {
  readURL(this, '#preview1');
});
$('input[name=folds]').change(function () {
  updateSplit();
});

