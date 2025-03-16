import React from "react";

const ProgressManager = () => {
	return (
		<>
			<div className="mb-3">
				<p className="mb-2">
					Your progress <strong>1 of 1 complete</strong>.{" "}
					<span
						style={{
							textDecoration: "underline",
							color: "blue",
							fontWeight: "800",
							cursor: "pointer",
						}}
					>
						Get certificate
					</span>
				</p>
				<div className="progress">
					<div
						className="progress-bar bg-1cab94"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="80"
						aria-valuemin="0"
						aria-valuemax="80"
						style={{ width: "80%" }}
					>
						80%
					</div>
				</div>
			</div>
		</>
	);
};

export default ProgressManager;
