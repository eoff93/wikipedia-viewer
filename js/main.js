'use strict';

var search = $('.search');
var result = $('.results');

search.keyup(function () {
  if (search.val() === '') {
    result.html('');
    exit;
  }

  $.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: {
      action: 'query',
      list: 'search',
      srsearch: search.val(),
      format: 'json'
    },
    dataType: 'jsonp',
    success: function success(x) {
      var html = '<div>';
      x.query.search.map(function (w) {
        html += '<a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
        html += ' <div class="panel panel-default panel-alt">';
        html += '   <div class="panel-heading">';
        html += '     <h3 class="panel-title">' + w.title + '</h3>';
        html += '   </div>';
        html += '   <div class="panel-body">';
        html += '     ' + w.snippet;
        html += '   </div>';
        html += '  </div>';
        html += '</a>';
      });
      html += '</div>';
      result.html(html);
    }
  });
});