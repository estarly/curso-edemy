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

const UserAvatar = ({ user, size = 35, className = "" }) => {
	const [imageError, setImageError] = useState(false);
	const showImage = hasImageUrl(user?.image) && !imageError;
	const initial = getInitial(user?.name, user?.email);
	const fontSize = Math.max(12, Math.round(size * 0.42));

	if (showImage) {
		return (
			<span
				className={`${styles.avatar} ${className}`}
				style={{ width: size, height: size }}
			>
				<Image
					src={user.image}
					alt={user?.name || "Usuario"}
					width={size}
					height={size}
					onError={() => setImageError(true)}
				/>
			</span>
		);
	}

	return (
		<span
			className={`${styles.avatar} ${styles.initial} ${className}`}
			style={{ width: size, height: size, fontSize }}
			aria-label={user?.name || "Usuario"}
			title={user?.name || user?.email}
		>
			{initial}
		</span>
	);
};

export default UserAvatar;
