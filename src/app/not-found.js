import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="error-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="error-content">
							<Image
								src="/images/error.png"
								width={500}
								height={198}
								alt="image"
							/>
							<h3>Error 404 : Pagina no encontrada</h3>
							<p>
								La página que está buscando podría haber sido
								eliminada, haber cambiado de nombre o estar temporalmente
								unavailable.
							</p>

							<div className="btn-box">
								<Link href="/" className="default-btn">
									<i className="flaticon-history"></i> Go Back{" "}
									<span></span>
								</Link>
								<Link href="/" className="default-btn">
									<i className="flaticon-home"></i> Homepage{" "}
									<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
