$(document).ready(function() {
    var counter = 1;

    $('.more').each(function() {
        var div = $(this);

        var height = "300px";
        if (div.attr('data-height'))
            height = div.attr('data-height') + 'px';
        else {
            div.attr('data-height', 300);
        } 
            
        if (div.height > height) {
            var html = 
                '<div class="morelink">' + 
                '<a href="" data-count="' + counter + 
                '" data-view="more">More ...</a>' +
                '</div>';

            div.attr('data-count', counter);
            div.css('max-height', height);
            div.after(html);

            counter++;
        }
    });

    $('.morelink a').click(function () {
        var count = $(this).attr('data-count');
        var view = $(this).attr('data-view');

        var div = $("div").find("[data-count='" + count +"']");

        if (view == 'more') {
            div.css('max-height', '');
            $(this).attr('data-view', 'less');
            $(this).text('Less ...');
        }
        else {
            var height = div.attr('data-height') + 'px';

            div.css('max-height', height);
            $(this).attr('data-view', 'more');
            $(this).text('More ...');

            $('html,body').animate({scrollTop: div.offset().top},'slow');
        }
        
        return false;
    });

});
