var Links = {
    setColor:function(color) {
        $('a').css('color', color)
    }
}
var Body = {
    setBackgroundColor:function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color)
    },
    setColor:function(color) {
        $('body').css('color', color)
    }
}
function nightDayHandler(self){
    if(self.value === 'night'){
        Body.setBackgroundColor('#222222');
        Body.setColor('white');
        Links.setColor('white')
        self.value = 'day';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('black')
        self.value = 'night';
    }
}