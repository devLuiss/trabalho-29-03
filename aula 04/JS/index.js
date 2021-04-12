$("#bt_inicio").click(
    function(){
        alert("voce clicou no inicio");
    }
)

$("#bt_sobre").click(
    function(){
        $("#corpo").load("pages/sobre.html")
    }
)

$("#bt_cadastre-se").click(
    function(){
        $("#corpo").load("pages/cadastro.html")
    }
)