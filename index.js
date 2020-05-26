$(document).ready(function(e)
{
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win,$navbar,width);

    //resize event
    $win.resize(function()
    {
        toggle_onclick($win,$navbar,width);
    });
    $toggle.click(function(e)
        {
            $navbar.toggleClass("toggle-left");
        })

});
function toggle_onclick($win,$navbar,width)
{
    if($win.width() <= 768)
    {
        $navbar.css({left:`-${width}px`});
    }else
    {
        $navbar.css({left:'Opx'});
    }
}
var typed = new Typed('#typed',{
    strings: [
        'Web Developer',
        'Java Programmer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});
var typed_2 = new Typed('#typed_2',{
    strings: [
        'Web Developer',
        'Java Programmer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

//for smoothly moving slides up and down
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});