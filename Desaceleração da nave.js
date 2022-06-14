let velocity = 150
let desaceleration = 20

function SpeedDown(velocity, printer){
    while(velocity >0){
        velocity -=desaceleration
        printer(velocity)
    }
    alert("Nave estacionada. As comportas já podem ser abertas")
}

SpeedDown(velocity, function(velocity){
    if(velocity < 0){
        velocity = 0
        
    }
    console.log("Velocidade atual: " + velocity)
})