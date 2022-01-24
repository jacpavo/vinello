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