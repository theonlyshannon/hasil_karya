document.querySelectorAll('.link-label').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelectorAll('.link-label').forEach(function(link) {
            link.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});
