const doTask =(interaciones)=>{
    return new Promise((resolve, reject)=>{
        const numeros = [];

        for(let i = 0; 1 < interaciones; i++ ){
            const numeros2 = 1 + Math.floor(Math.random() * 6);
            numeros.push(numeros2);
            if(numeros2 === 6){
                reject({
                    error:true,
                    message:"sea sacado un 6"
                    
                });
                return;
            };

        };

        resolve({
            error:false,
            value:numeros
        });
    });
};

doTask(0)
  .then(result => console.log("Tiradas correctas:", result.value))
  .catch(err => console.error("Ha ocurrido algo:", err.message));