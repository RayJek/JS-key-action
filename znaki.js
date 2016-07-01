// konstruktor press
function press(name) {
    this.points = 0;
    this.name = name;
}
// kliknij metoda
press.prototype.kliknij = function () {
    this.points += 1;
    mediator.kliknijed();
};


var scoreboard = {
    
    // html wyświetlanie
    element: document.getElementById('wynik'),
    
    
    update: function (score) {
        
        var i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '<\/strong>: ';
                msg += score[i];
                msg += '<\/p>';
            }
        }
        this.element.innerHTML = msg;
    }
};


var mediator = {
    
    // wyświetlanie
    klawisze: {},
    
    // 
    setup: function () {
        var klawisze = this.klawisze;
        klawisze.Wciśnięto1 = new press('Wciśnięto1');
        klawisze.Wciśnięto2 = new press('Wciśnięto2');
        
    },
    
    
    kliknijed: function () {
        var klawisze = this.klawisze,
            score = {
                Wciśnięto1:  klawisze.Wciśnięto1.points,
                Wciśnięto2: klawisze.Wciśnięto2.points
            };
            
        scoreboard.update(score);
    },
    
    // interakcja 
    keypress: function (e) {
        e = e || window.event; // IE
        if (e.which === 49) { //"1"
            mediator.klawisze.Wciśnięto1.kliknij();
            return;
        }
        if (e.which ===  50){ //"2"
            mediator.klawisze.Wciśnięto2.kliknij();
            return;
        }
    }
};


// start
mediator.setup();
window.onkeypress = mediator.keypress;

// komunikat końcowy po 10s
setTimeout(function () {
    window.onkeypress = null;
    alert('koniec czasu!');
}, 10000);
