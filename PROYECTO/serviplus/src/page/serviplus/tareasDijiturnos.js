// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
// import ContentHeader from "../../components/ContentHeader";
// import { Link, useParams } from "react-router-dom";
// import Footer from "../../components/Footer";
// import APIInvoke from "../../utils/APIInvoke";
// import swal from "sweetalert";

// const TareasTurno = () => {

//   const [tareas, settareas] = useState([]);

//   const { idTurno } = useParams();
//   let array = idTurno.split("@");
//   const idt = array[0];
//   const nombret = array[1];
//   const documentot = array[2];
//   const titulob = `listado de tareas: ${nombret} ${documentot}`;

//   const cargartareas = async () => {
//     const response = await APIInvoke.invokeGET(`/tareas?turnos=${idTurno}`);
//     //window.alert(response.turnos);
//     settareas(response.tareas);
//   };

//   useEffect(() => {
//     cargartareas();
//   }, []);

//   const deleteTarea = async (e, idTarea, idt) => {
//     e.proventDefault();
//     const response = await APIInvoke.invokeDELETE(`/tareas/${idTarea}?turno=${idt}`);

//     if (response.msg === "tarea eliminado") {
//         const msg = "tarea eliminado corectamente";
//         swal({
//           title: "Error",
//           text: msg,
//           icon: "success",
//           buttons: {
//             confirm: {
//               text: "Ok",
//               value: "true",
//               visible: "btn btn-primary",
//               closeModal: true,
//             },
//           },
//         });
//         cargartareas();
//       } else {
//         const msg = "tarea no eliminado";
//         swal({
//           title: "Error",
//           text: msg,
//           icon: "Error",
//           buttons: {
//             confirm: {
//               text: "Ok",
//               value: "true",
//               visible: "btn btn-danger",
//               closeModal: true,
//             },
//           },
//         });
//   };

//   return (
//     <div className="wrapper">
//       <Navbar></Navbar>
//       <Sidebar></Sidebar>
//       <div className="content-wrapper">
//         <ContentHeader
//           titulo={titulob}
//           breadCumb1={"Inicio"}
//           breadCumb2={"Listar Tareas"}
//           ruta1={"/listar-dijiturno"}
//         />
//         <div className="content">
//           <div className="card">
//             <div className="card-header">
//               <h3 className="card-title">
//                 <Link
//                   to={`/crear-tarea${idTurno}`}
//                   className="btn btn-block btn-primary btn-sm"
//                 >
//                   Crear Tarea
//                 </Link>
//               </h3>
//               <div className="card-tools">
//                 <button
//                   type="button"
//                   className="btn btn-tool"
//                   data-card-widget="collapse"
//                   title="Collapse"
//                 >
//                   <i className="fas fa-minus" />
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-tool"
//                   data-card-widget="remove"
//                   title="Remove"
//                 >
//                   <i className="fas fa-times" />
//                 </button>
//               </div>
//             </div>
//             <div className="card-body">
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th style={{ width: "10%" }}>Turno</th>
//                     <th style={{ width: "20%" }}>Nombre</th>
//                     <th style={{ width: "60%" }}>Documento</th>
//                     <th style={{ width: "10%" }}>Opciones</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tareas.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.id}</td>
//                       <td>{item.nombre}</td>
//                       <td>{item.documento}</td>
//                       <td>
//                         <Link
//                           to={`/editar-tarea/${item.id}@${item.nombre}@${item.turno}@${nombret}`}
//                           className="btn btn-sm btn-primary"
//                         >
//                           Edit
//                         </Link>
//                         &nbsp;&nbsp;
//                         <button
//                           onClick={(e) => deleteTarea(e, item.id)}
//                           className="btn btn-sm btn-danger"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };
// };

// export default TareasTurno;
