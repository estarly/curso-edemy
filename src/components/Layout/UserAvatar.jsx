"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./UserAvatar.module.css";

function getInitial(name, email) {
	const source = name?.trim() || email?.trim() || "?";
	return source.charAt(0).toUpperCase();
}

function hasImageUrl(image) {
	return typeof image === "string" && image.trim() !== "";
}

const UserAvatar = ({
	user,
	size = 35,
	className = "",
	shape = "circle",
	fill = false,
}) => {
	const [imageError, setImageError] = useState(false);
	const showImage = hasImageUrl(user?.image) && !imageError;
	const initial = getInitial(user?.name, user?.email);
	const fontSize = Math.max(12, Math.round(size * 0.42));
	const shapeClass = shape === "rounded" ? styles.rounded : "";
	const fillClass = fill ? styles.fill : "";
	const containerStyle = fill
		? { fontSize }
		: { width: size, height: size, fontSize };

	if (showImage) {
		return (
			<span
				className={`${styles.avatar} ${styles.bordered} ${shapeClass} ${fillClass} ${className}`}
				style={containerStyle}
			>
				<Image
					src={user.image}
					alt={user?.name || "Usuario"}
					{...(fill
						? { fill: true, sizes: "(max-width: 768px) 100vw, 200px" }
						: { width: size, height: size })}
					onError={() => setImageError(true)}
				/>
			</span>
		);
	}

	return (
		<span
			className={`${styles.avatar} ${styles.initial} ${shapeClass} ${fillClass} ${className}`}
			style={containerStyle}
			aria-label={user?.name || "Usuario"}
			title={user?.name || user?.email}
		>
			{initial}
		</span>
	);
};

export default UserAvatar;
