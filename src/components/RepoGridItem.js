import React from 'react';

/**
 * Componente que renderiza un proyecto en particular como una card.
 */
export const RepoGridItem = (proj) => {
    return (
        <>
            <div className="card animate__animated animate__backInDown">
                <div className="card-body">
                    <h5 className="card-title text-center">Id: {proj.id} &nbsp;
                        {proj.winner &&
                            <img src={process.env.PUBLIC_URL + '/images/winner.png'} alt="Ganador" title="Proyecto ganador"></img>
                        }

                    </h5>
                    <p className="card-text"><strong>Proyecto:</strong> {proj.titulo}. <br />
                        {/* <strong>Estudiantes:</strong> {proj.estudiantes.map(est=>est.nombres + "; ")} <br /> */}
                        <br />
                        <button class="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Ver estudiantes
                        </button>   
                        <br/>                     
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                            {proj.estudiantes.map(est=>est.nombres + "; ")}
                            </div>
                        </div>
                        <strong>Profesores:</strong> {proj.docentes.map(doc=>doc.nombres + "; ")} <br />
                        <strong>Asigntura:</strong> {proj.asignatura} <br />
                        <strong>Arquitecturas:</strong> {proj.arquitecturas} <br />
                        <strong>Tecnologías:</strong> {proj.tecnologias} <br />
                        <strong>Período:</strong> {proj.periodo}. &nbsp;  
                        <a href={proj.link} className="btn btn-primary" target="_blank" rel="noreferrer">Visitar </a>
                    </p>

                </div>
            </div>

        </>
    )
}


