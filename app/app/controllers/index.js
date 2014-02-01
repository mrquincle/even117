function clickImage(e) {
	Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
}

function clickHH(e) {
	Titanium.UI.createAlertDialog({title:'Helpende hand', message:'Nou, gefeliciteerd hoor! succes ermee!'}).show();
}


$.index.addEventListener('open', function() {
    if (OS_ANDROID) {
        var activity = $.index.getActivity();
        var actionBar = activity.actionBar;
        if (actionBar){
            actionBar.hide();
        }
    }   
});

$.index.open();
