function takalTicket(){
    return new Promise((resolve,reject)=>{
        let is_booked = false;
        if (is_booked)
            resolve(400)
        else
            reject()
    })
}

takalTicket().then((amt)=>console.log(`thanks for booking, will pay the amount ${amt}`)).catch(()=>console.log('thanks for searching'))

