const CERVEZAS = [
{
  id: 0,
  name: "Quilmes",
  description: "Rubia",
  price: 200,
  img: "https://firebasestorage.googleapis.com/v0/b/webquilmes-1330e.appspot.com/o/PRUEBAS%2FCLASICA-op.png?alt=media&token=51e7b45d-51b8-4f8a-8c69-1d2cae6b4153"

},
{
  id: 1,
  name: "Heineken",
  description: "Rubia",
  price: 250,
  img: "https://www.google.com/search?q=botella+heineken+png&tbm=isch&ved=2ahUKEwiX_p6muMv1AhUSMrkGHTnPBXkQ2-cCegQIABAA&oq=botella+heineken+png&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAgQHjIGCAAQCBAeOgcIIxDvAxAnOgYIABAHEB46CAgAEAgQBxAeUMMOWI0iYI4maABwAHgAgAHrAYgBpgiSAQU4LjIuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=kSjvYdfxJJLk5OUPuZ6XyAc&bih=686&biw=1440&hl=es-419#imgrc=7zJBRjMiMeKttM"
}
];

 export function getCervezas() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> resolve(CERVEZAS), 3000);
    });
  }
 
  const ESPIRITUOSAS = [
    {
      id: 2,
      name: "Flor de Caña",
      description: "Ron",
      price: 2000,
      img: "https://images.nidux.net/eyJidWNrZXQiOiJuaWR1eC1zdG9yZXMiLCJrZXkiOiIxMzUyM1wvMjQ4LXByb2R1Y3QtNWY4NTE3ZjcxNGYwMS1wMTY3Nzg1MjAwMjU0NzM3My0xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODUwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjowfX0sInNoYXJwZW4iOnRydWUsIm5vcm1hbGl6ZSI6dHJ1ZX19--0e903a5118965e30748ca63cc42107b7a3cfe6b8b094e51e98a7eff441e5943d"
    
    },
    {
      id: 3,
      name: "Tanqueray",
      description: "Gin",
      price: 1800,
      img: "https://merkadoo.com/pub/media/catalog/product/cache/94fa5753886b33168fef394c99e1c8bb/1/_/1_akfhfbtm6bts3dyp.png"
    }
    ];
    
  export function getEspirituosas() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> resolve(ESPIRITUOSAS), 2000);
    });
  }