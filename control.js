$().ready(()=>
{
    $('.hamburger').on('click',(evt)=>
    {

        evt.stopPropagation()
        $(".mobileNavigation").slideToggle(1000);
    })

    $('.cancelForm').click((evt)=>
    {
        $('.formCover').toggle(500)
    })

    $('.openForm').click((evt)=>
    {
        $('.formCover').toggle(500)
    })
})