
do {
    var CantidadDePartidas = +prompt(`
       
    Ingrese la cantidad de partidas:
    
    `);
    } while ( isNaN(CantidadDePartidas) || CantidadDePartidas<0)



if(CantidadDePartidas>0){
    var ptosPlayer = 0;
    var ptosComputer = 0;
      for(i=0;i<CantidadDePartidas; i++){
        do {
        var decisiondelPlayer = +prompt(`
        Partida N°: ${i+1}
        Ingrese su opción:
            - 1 ) Piedra
            - 2 ) Papel
            - 3 ) Tijera
        
        `);
        } while ( isNaN(decisiondelPlayer) || decisiondelPlayer< 1 || decisiondelPlayer>3)
        
        
        const decisionComputer = Math.floor(Math.random()*3+1);
        alert("EL computador eligió la opción "+decisionComputer)
        var p = decisiondelPlayer;
        var c = decisionComputer;

        
        if(p==c) alert("Empate!"), ptosComputer++,    ptosPlayer++;
        else if(p==1 && c==2) alert("El computador ganó"), ptosComputer++;
        else if(p==1 && c==3) alert("El usuario ganó"),    ptosPlayer++;
    
        else if(p==2 && c==3) alert("El computador ganó"), ptosComputer++;
        else if(p==2 && c==1) alert("El usuario ganó"),    ptosPlayer++;
    
        else if(p==3 && c==1) alert("El computador ganó"), ptosComputer++;
        else if(p==3 && c==2) alert("El usuario ganó"),    ptosPlayer++;
      }
    
        alert(`
        Puntaje final:
            - Usuario: ${ptosPlayer}
            - Computador: ${ptosComputer}
        
        `)
       


}
  else{
      alert("Bueno, adiós!")
  }