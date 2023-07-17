windows.addEventlistener('DOMContentLoaded', (event) =>{
    document.querySelectorAll('.progress').forEach((item) => {
        let value = item.getAttribute('data-value');
        let bar = item.querySelector('.progress_bar');
        setTimeout(function(){
            bar.style.width = value;
    }, 500);
        })
        
} );