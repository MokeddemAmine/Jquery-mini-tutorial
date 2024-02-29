// Effect
$(document).ready(function(){
    // hide , show , toggle
    $('button.hide').click(function(){
        $('.hideshow').hide(2000);
    })
    $('button.show').click(function(){
        $('.hideshow').show(2000);
    })
    $('button.toggle').click(function(){
        $('.hideshow').toggle(2000);
    })
    $('button.stop1').click(function(){
        $('.hideshow').stop();
    })
    // fadeIn , fadeOut , fadeToggle
    $('button.fadeIn').click(function(){
        $('.fade').fadeIn(2000);
    })
    $('button.fadeOut').click(function(){
        $('.fade').fadeOut(2000);
    })
    $('button.fadeToggle').click(function(){
        $('.fade').fadeToggle(2000);
    })
    $('button.stop2').click(function(){
        $('.fade').stop();
    })
    // slideUp , slideDown , slideToggle
    $('button.slideUp').click(function(){
        $('.slide').slideUp(2000);
    })
    $('button.slideDown').click(function(){
        $('.slide').slideDown(2000);
    })
    $('button.slideToggle').click(function(){
        $('.slide').slideToggle(2000);
    })
    $('button.stop3').click(function(){
        $('.slide').stop();
    })
})

// get and set
$(document).ready(function(){
    $('.clear').click(function(){
        $('.setinput').val('');
        $('.getinput').val('');
        $('.text').html('first text in the div');
        $('#input').val('first value');
    })
    $('.gethtml').click(function(){
        $('.getinput').val($('.text').html());
    })
    $('.sethtml').click(function(){
        $('.text').html($('.setinput').val());
    })
    $('.gettext').click(function(){
        $('.getinput').val($('.text').text());
    })
    $('.settext').click(function(){
        $('.text').text($('.setinput').val());
    })
    $('.getvalue').click(function(){
        $('.getinput').val($('#input').val());
    })
    $('.setvalue').click(function(){
        $('#input').val($('.setinput').val());
    })
    $('.getattribute').click(function(){
        $('.getinput').val($('#input').attr($('.setinput').val()));
    })
    $('.setattribute').click(function(){
        $('#input').attr($('.setinput').val(),$('.getinput').val());
        $('.getinput').val($('.setinput').val()+"="+$('.getinput').val());
    })
})

// add & remove

$(document).ready(function(){
    $('.clearelement').click(function(){
        $('.parentelement').html('<div class="element">element worked in</div>');
    })
    $('.append').click(function(){
        $('.element').append($('.textadd').val());
    })
    $('.prepend').click(function(){
        $('.element').prepend($('.textadd').val());
    })
    $('.after').click(function(){
        $('.element').after($('.textadd').val());
    })
    $('.before').click(function(){
        $('.element').before($('.textadd').val());
    })
    $('.remove').click(function(){
        $('.parentelement '+$('.textadd').val()).remove();
    })
})

// class & css

$(document).ready(function(){
    $('button.addclass').click(function(){
        $('.ele').addClass('active');
    })
    $('button.removeclass').click(function(){
        $('.ele').removeClass('active');
    })
    $('button.toggleclass').click(function(){
        $('.ele').toggleClass('active');
    })
})


// dimension

$(document).ready(function(){
    $('.getwidth').click(function(){
        $('.dimensionresult').val($('.dimension').width());
    })
    $('.pluspadding').click(function(){
        $('.dimensionresult').val($('.dimension').innerWidth());
    })
    $('.plusborder').click(function(){
        $('.dimensionresult').val($('.dimension').outerWidth());
    })
    $('.plusmargin').click(function(){
        $('.dimensionresult').val($('.dimension').outerWidth(true));
    })
    $('.setwidth').click(function(){
        $('.dimension').width($('.dimensionnumber').val());
    })
})

// ancestors

$(document).ready(function(){
    $('.parentclear').click(function(){
        $('.elements1 *').css('border','1px solid gray');
    })
    $('.parent').click(function(){
        $('.elements1 '+$('.parentInput').val()).parent().css('border','1px solid red');
    })
    $('.parents').click(function(){
        $('.elements1 '+$('.parentInput').val()).parentsUntil('.elements1').css('border','1px solid red')
    })
    $('.parentsuntil').click(function(){
        $('.elements1 '+$('.parentInput').val()).parentsUntil($('.parentspecial').val()).css('border','1px solid red');
    })
})