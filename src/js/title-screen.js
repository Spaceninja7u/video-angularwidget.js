
vjs.TitleScreen = vjs.Component.extend({
    init: function (player, options) {
        vjs.Component.call(this, player, options);
        this.on(this.player_, 'firstplay', this.hide);
        this.on(this.player_, 'ended', this.showNext);
    }
});
vjs.TitleScreen.prototype.createEl = function() {
    var template = '<div class="container-fluid">'
                    +'<div class="row">'
                        +'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
                         +'<div class="jumbotron">'
                            +'<h4>Lifehacker.com</h4>'
                            +'<h1>{{currentVideo.title}}</h1>'
                             + '<p><a class="btn btn-flat btn-info pull-right btn-play" href="#" ng-click="play($event)"><i class="fa fa-play fa-4x"></i></a> {{currentVideo.description}} </p>'
                            +'<div class="container-fluid"><div class="row">'
                            +'<div class="col-xs-5"><a class="btn btn-flat btn-default btn-block" ng-show="prevVideo != null" ui-sref="videojsview({index:itemIndex})"><i class="fa fa-backward fa-4x pull-left"></i> {{prevVideo.title}}</a></div>'
                            +'<div class="col-xs-5"><a class="btn btn-flat btn-default btn-block" ng-show="nextVideo != null" ui-sref="videojsview({index:itemIndex + 2})"><i class="fa fa-forward fa-4x pull-right"></i>{{nextVideo.title}}</a> </div>'
                       +'</div></div>'
                 +'</div>' //jumbotron
             +'</div>' //col
            +'</div>' //row
        +'</div>'; //container
    var uiNode = jQuery('<div/>');
    uiNode.addClass('demo-vjs-titlescreen');
    uiNode.html(template);

    return uiNode[0];
};
vjs.TitleScreen.prototype.hide = function() {
    jQuery('.demo-vjs-titlescreen').fadeOut();
};
vjs.TitleScreen.prototype.showNext = function() {
    jQuery('.demo-vjs-titlescreen').fadeIn();
};
