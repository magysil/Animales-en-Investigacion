// -----Funcion obter datos del Json
const obtenerData = (() => {
  return {
    mostrar: async () => {
      try {
        let res = await fetch("animales.json");
        if (!res.ok) {
          throw new Error("Error al obtener los datos del archivo JSON");
        }

        const data = await res.json();
        //console.log(data);
        let { animales } = data;
        //console.log(animales);
        return animales;
      } catch (error) {
        console.error("Error:", error);
        return null;
      }
    },
  };
})();

export { obtenerData };
