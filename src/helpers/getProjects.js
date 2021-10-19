import { projects } from "../projects";

/**
 * Helper que carga la data desde el arreglo de proyectos, filtrando los que cumplan con el filtro de búsqueda. 
 */
export const getProjects = (category)=>{
    const projs = projects();
    let data = [];

    //Filtrar
    if (category.length === 0){
        data = projs;
    }
    else{
        for (var i=0; i<projs.length; i++){
            if (projs[i].periodo === category || 
                projs[i].arquitecturas.toLowerCase().indexOf(category.toLowerCase())!==-1 ||
                projs[i].tecnologias.toLowerCase().indexOf(category.toLowerCase())!==-1)
                {
                data.push(projs[i]);
    
            } else {
                
            }
        }

    }

    return data;
  }
