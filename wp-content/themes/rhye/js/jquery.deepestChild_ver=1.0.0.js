(function ($) {
  $.fn.deepestChild = function () {
    var
      $el = $(this),
      $target,
      $children = $el.children().filter(function () {
        var $el = $(this);

        return !$el.is('br') && $el.css('display') !== 'inline-block';
      }); // exclude line breaks and inline-block elements

    // element doesn't have children
    // return actual element
    if (!$children.length) {
      return $el;
    }

    $target = $children;
    $next = $target;

    while ($next.length) {
      $target = $next;
      $next = $next.children();
    }

    return $target;
  };
}(jQuery));
