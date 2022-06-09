$().ready(()=>
{
    $('.hamburger').on('click',(evt)=>
    {

        evt.stopPropagation()
        $(".mobileNavigation").slideToggle(1000);
    })
})