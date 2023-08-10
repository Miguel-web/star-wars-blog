const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      singleItem: {},
      favorites: [],
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
      getItemDetails: async (type, uid) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/${type}/${uid}`
          );
          if (response.status != 200) {
            throw new Error(`Ha ocurrido un error con la solicitud /${type}`);
          }
          const body = await response.json();
          setStore({ singleItem: body.result });
        } catch (error) {
          console.log(error);
        }
      },
      addFavorite: (name, url) => {
        // let store = getStore()
        const favs = [
          ...getStore().favorites,
          { favoriteName: name, favoriteUrl: url },
        ];
        setStore({ favorites: favs });
      },
      removeFavorite: (name) => {
        const favs = getStore().favorites.filter(
          (favorite) => favorite.favoriteName !== name
        );
        setStore({ favorites: favs });
      },
    },
  };
};

export default getState;
