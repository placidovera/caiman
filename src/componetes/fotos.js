const fotosTapa =[
    { id: 1,nombre:"negro" ,img:"/imagenes/negroUno.jpg"},
    { id: 2,nombre:"beltran" ,img:"/imagenes/beltranUno.jpg"},
    { id: 3,nombre:"panda" ,img:"/imagenes/pandaUno.jpg"}

]

 export const getTraerFotos = ()=>{
    return new Promise ( res =>{
        res(fotosTapa)
    }) 


}