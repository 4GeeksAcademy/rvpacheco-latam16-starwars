import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";


const DropdownMenu =() =>{
	const {store,actions} = useContext(Context);

	const handdeletefav = (elementId) =>{
		actions.markFavorite(elementId)	
	};
	return (
		<ul className="dropdown-menu dropdown-menu-end">
			{store.favorites.map((favorite, index)=>(
				<li key={index}>
					<a className="dropdown-item" href="#">
						{favorite.name}
						
					</a>
					<button className="btn btn-link" onClick={()=>handdeletefav(index)}>
							<i class="bi bi-trash"></i>
						</button>
					

				</li>

			))}
		</ul>
					

	);
};

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="dropdown ms-auto">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<DropdownMenu/>
			</div>
		</nav>
	);
};
