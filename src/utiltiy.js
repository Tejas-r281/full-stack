 starter={
   price: 50,
   kilometer:35,
   min:60
}

const calprice =(km,min)=>{
    let fare=50
    fare +=(km>5)?((km-5)*10):0
    fare +=(min>15)?((min-15)*2):0

    return fare;
}

   exports = module.exports={
    starter,
    calprice
   }