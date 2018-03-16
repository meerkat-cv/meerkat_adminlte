(function (global, $) {

    var Page502 = {};

    Page502.init = function () {
        var self = this;
        $(document).ready( function () {
            self.checkFrapiLoading();
        }); 
    }

    Page502.checkFrapiLoading = function() {
        setInterval(function() {
            console.log("Checking...");
            $.ajax({
                type: 'get',
                url: '/{{cookiecutter.project_name}}/',
                complete: function(jqXHR) {
                    if (jqXHR.status == 502) {
                        // not yet
                    }
                    else if (jqXHR.status == 200) {
                        location.reload();
                    }
                }
            });
        }, 3000);

    }

    global.Page502 = Page502;
    global.Page502.init();

}(window, jQuery));
