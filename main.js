let page = Scrollbar.initAll()[0];
let slides = $('.slide');

function slidePosition(start, scroll) {
  const pos = start - scroll;
  return pos > 0 ? pos : pos * 0.3;
}

page.addListener((status) => {
  let scroll = page.scrollTop,
      vh = $(window).height();
  slides.each(function updatePosition(index, slide) {
    $(slide).css('top', slidePosition(index * vh, scroll));
  });
});
