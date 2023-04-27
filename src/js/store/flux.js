const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

		},
		actions: {
			fetchStarWars:async (element,page=1,limit=10)=>{
				let baseUrl=`https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`

				try{
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status

					let data = await response.json()
					let obj ={}
					obj[element]=data.results
					setStore(obj)
				}catch (error){
					console.error(error)
				}
				
			},
			markFavorite:(elemenId,name)=>{
				let {favorites} = getStore()
				//verificando si el favorito exista
				if(!favorites.some(item=>item.id==elemenId)){
					// en caso de que no exista, se agg...
					setStore({favorites:[...favorites,{id:elemenId, name}]})
				}else{
					//en caso que si se elimina
					let index=favorites.findIndex(item=>item.id==elemenId)
					let newFavorites=[...favorites]
					newFavorites.splice(index,1)
					setStore({favorites:newFavorites})
				}
			}
		}
	};
};

export default getState;
