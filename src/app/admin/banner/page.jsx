
import React, { useState } from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getBanners,saveBanners } from "@/actions/banner";
import Swal from "sweetalert2";

const Page = async ({}) => {
	const [showModal, setShowModal] = useState(false);
	const [newBanner, setNewBanner] = useState({ name: "", description: "", image: "" });
	
	const  banners  = await getBanners();
	const  saveBanners = await saveBanners();
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";

	const handleSave = async () => {
		const result = await Swal.fire({
			title: '¿Está seguro de guardar?',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'No'
		});

		if (result.isConfirmed) {
			//await saveBanners(newBanner);
			setShowModal(false);
			Swal.fire('Guardado!', 'El banner ha sido guardado.', 'success');
		}
	};

	return (
		<>
			<div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<AdminSideNav isAdmin={isAdmin} />
						</div>

						<div className="col-lg-9 col-md-8">
							<div className="main-content-box">
								<ul className="nav-style1">
									<li>
										<Link href="/admin/banner">
											Banners
										</Link>
									</li>
									<li>
										<button onClick={() => setShowModal(true)} className="btn btn-primary">
											Registrar
										</button>
									</li>
								</ul>

								<div className="table-responsive">
									<table className="table align-middle table-hover fs-14">
										<thead>
											<tr className="text-left bg-secondary text-white">
												<th scope="col">Imagen</th>
												<th scope="col">Nombre</th>
												<th scope="col">Acciones</th>
											</tr>
										</thead>
										<tbody>
											{banners.length === 0 && (
												<tr>
													<td colSpan="6">
														<div className="text-center">
															No hay banners disponibles.
														</div>
													</td>
												</tr>
											)}
											{banners.map((banner) => (
												<tr key={banner.id}>
													<td>
														<a href={banner.url} target="_blank" rel="noopener noreferrer">
															<img src={banner.image} alt="Banner" style={{ height: '100px', width: '200px' }} />
														</a>
													</td>
													<td>
														<strong>{banner.name}</strong>
														<br />
														<span className="text-muted">{banner.description || "No hay descripción"}</span>
													</td>
													<td>
														<button className={`btn ${banner.status === 0 ? "btn-success" : "btn-warning"}`}>
															{banner.status === 0 ? "Habilitar" : "Deshabilitar"}
														</button>
														<button className={`btn btn-info`}>
															Editar
														</button>
													</td>
													
												</tr>
											))}
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={() => setShowModal(false)}>&times;</span>
						<h2>Registrar Banner</h2>
						<input
							type="text"
							placeholder="Nombre"
							value={newBanner.name}
							onChange={(e) => setNewBanner({ ...newBanner, name: e.target.value })}
						/>
						<input
							type="text"
							placeholder="Descripción"
							value={newBanner.description}
							onChange={(e) => setNewBanner({ ...newBanner, description: e.target.value })}
						/>
						<input
							type="text"
							placeholder="URL de la imagen"
							value={newBanner.image}
							onChange={(e) => setNewBanner({ ...newBanner, image: e.target.value })}
						/>
						<button onClick={handleSave}>Guardar</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Page;
