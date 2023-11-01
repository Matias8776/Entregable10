export const generateUserErrorInfo = (user) => {
  console.log(user);
  return `
  Una o mas propiedades del usuario están incompletas o no son validas.
  Lista de propiedades requeridas:
  * first_name: necesita ser un string, recibido ${user.first_name}
  * last_name: necesita ser un string, recibido ${user.last_name}
  * email: necesita ser un string, recibido ${user.email}
  * age: necesita ser un numero, recibido ${user.age}
  * password: necesita ser un string
  `;
};
