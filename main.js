let page = Scrollbar.initAll()[0];
let slides = $('.slide');

function slidePosition(start, scroll) {
  const pos = start - scroll;
  return pos > 0 ? pos : pos * 0.3;
}

page.addListener((status) => {
  let scroll = page.scrollTop,
    vh = $(window).height();
  slides.eq(0).css('top', slidePosition(0, scroll));
  slides.eq(1).css('top', slidePosition(vh, scroll));
  slides.eq(2).css('top', slidePosition(vh * 2, scroll));
});
