function establecerRecordatorio(fechaHoraRecordatorio,mensaje){
    const ahora = new Date()

    const HoraRecordatorio = new Date(fechaHoraRecordatorio)

    const TiempoDiferencia = HoraRecordatorio.getTime() - ahora.getTime();

    if(TiempoDiferencia > 0){
        setTimeout(()=>{
            const anio = HoraRecordatorio.getFullYear() ;
            const mes = HoraRecordatorio.getMonth() + 1 ;
            const dia = HoraRecordatorio.getDate();
            const hora = HoraRecordatorio.getHours();
            const minutos = HoraRecordatorio.getMinutes();
            const segundos = HoraRecordatorio.getSeconds();
        
            console.log(`Recordatorio para: ${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}: ${mensaje}`)
        })
    }else{
        console.log(`La fecha y hora ya pasaron.`)
    }
}



establecerRecordatorio("2024-08-30T09:35:00","Es hora de la practica")


