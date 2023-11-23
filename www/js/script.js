var ans   = "", 
    clear = false, 
    calc  = "",
    eq1   = '',
    eq2   = '',
    x1    = '',
    y1    = '',
    r1    = '',
    x2    = '',
    y2    = '',
    r2    = '',
    x     = '',
    y     = '',
    pantalla = 1;

$(document).ready(function() {
  // Agregar carateres
  $(".button").click(function() {
    var text = $(this).attr("value");
    if(parseInt(text, 10) == text || text === "." || text === "-" || text === "+" || text === "x" || text === "y" || text === "=") {
      if(pantalla === 1) {
        eq1 += text;
        $("#Pantalla1").val(eq1);
      } else {
        eq2 += text;
        $("#Pantalla2").val(eq2);
      }
    } else if(text === "Resolver") {
      x1    = eq1.split("x",1);
      eq1   = eq1.replace(x1+'x', '');
      y1    = eq1.split("y",1);
      eq1   = eq1.replace(y1+'y','');
      r1    = eq1.replace('=','');
      x2    = eq2.split("x",1);
      eq2   = eq2.replace(x2+'x', '');
      y2    = eq2.split("y",1);
      eq2   = eq2.replace(y2+'y','');
      r2    = eq2.replace('=','');
      let res1 = x1*y2+x2*y1;
      x     = ( r1 * y2 + y1 * r2 ) / res1;
      y     = ( x1 * r2 + r1 * x1 ) / res1;
      let result = "X="+x+" Y="+y;
      $("#Pantalla3").val(result);
      clear = true;
    }
  });
// Cambio al siguiente input para ingresar la 2da ecuacion
$( "#ecuacion_2" ).on( "click", function() {
  $( "#Pantalla2" ).trigger( "focus" );
  pantalla = 2;
} );


});


