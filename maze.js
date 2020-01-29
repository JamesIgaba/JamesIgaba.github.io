$(function () {

    let boundaryTouched = false;

    $('div.boundary').on('mouseenter',()=>{
        $('div.boundary').addClass('youlose');
        $('h2#status').html('You lose');
        boundaryTouched = true;
    })

    $('div#end').on('mouseenter',()=>{
        if(boundaryTouched === false){
            $('h2#status').html('You win! :]');
        }
        else{
            $('h2#status').html('You lose');
        }
    })

    $('div#start').on('mouseenter',()=>{
        $('div.boundary').removeClass('youlose');
        $('h2#status').html('Click the "S" to begin');
        boundaryTouched = false;
    })
});