const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
    },
    actions: {
      getPeople: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          if (response.status != 200) {
            throw new Error("Ha ocurrido un erro con la solicitud /people");
          }
          const body = await response.json();
          setStore({ people: body.results });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets");
          if (response.status != 200) {
            throw new Error("Ha ocurrido un erro con la solicitud /people");
          }
          const body = await response.json();
          setStore({ planets: body.results });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
