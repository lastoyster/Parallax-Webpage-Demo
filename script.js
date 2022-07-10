// Plugin parallax
$.fn.parallax = function(opt) {
    return this.each(function() {
        var optDefault = {
                speed: 0.3
            },
            self = $(this),
            optDataSpeed = {
                speed: self.data('parallax-speed')
            },
            bpFirst = self.css('background-position').split(' ')[0],
            bpLast = self.css('background-position').split(' ')[1],
            opts = $.extend(optDefault, opt, optDataSpeed);
        function parallax() {
            var st = $(window).scrollTop(),
                wh = $(window).outerHeight(),
                o = self.offset(),
                h = self.outerHeight(),
                bp = bpFirst + ' ' + 'calc(' + bpLast + ' + ' + (o.top-st)*opts.speed + 'px)';
            if ( (st + wh >= o.top) && (st <= o.top + h) ) {
                self.css('background-position', bp);
            }
        }
        $(window).on('scroll', parallax);
    });
}

// Demo
$('.parallax-demo').parallax({
    speed: 0.2
});