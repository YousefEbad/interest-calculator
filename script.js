

document.getElementById("btn").onclick = function(){
    let principal = document.getElementById("principal").value;
    principal = Number(principal);
    let years = document.getElementById("years").value;
    years = Number(years);
    let interest = document.getElementById("interest").value;
    interest = Number(interest);
    for(i=0; i<years;i+=1){
        principal = principal*(1+interest/100);
    }

    principal = principal.toLocaleString(undefined,
                                        {style: "currency",
                                         currency: "USD"});

    document.getElementById("total-amount").innerHTML = (principal)
}






