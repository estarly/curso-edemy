export const generateStars = (rating) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		const starClass = i <= rating ? "bx bxs-star checked" : "bx bxs-star";
		stars.push(<i key={i} className={starClass}></i>);
	}
	return stars;
};

export const ratingLabel = (rating) => {
	return rating === 5
		? "Excellent"
		: rating === 4
		? "Good"
		: rating === 3
		? "Average"
		: rating === 2
		? "Poor"
		: rating === 1 && "Terrible";
};

export const averageRating = (ratings) => {
	const totalRatings = ratings.reduce(
		(sum, review) => sum + review.rating,
		0
	);
	const averageRating = totalRatings / ratings.length;

	return averageRating;
};

export const averageStarRating = (reviews) => {
	const totalRatings = reviews.reduce(
		(sum, review) => sum + review.rating,
		0
	);
	const averageRating = totalRatings / reviews.length;

	const roundedRating = Math.round(averageRating);

	const generateStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			const starClass =
				i <= roundedRating ? "bx bxs-star checked" : "bx bxs-star";
			stars.push(<span key={i} className={starClass}></span>);
		}
		return stars;
	};

	return <div className="rating">{generateStars()}</div>;
};

export const generateHTMLBars = (reviews) => {
	const summary = {
		"5 star": 0,
		"4 star": 0,
		"3 star": 0,
		"2 star": 0,
		"1 star": 0,
	};

	reviews.forEach((review) => {
		summary[`${review.rating} star`] += 1;
	});

	let html = "";

	Object.keys(summary).forEach((key) => {
		const starRating = key.split(" ")[0];
		const count = summary[key].toString().padStart(2, "0");

		html += '<div class="row">';
		html += '<div class="side">';
		html += "<div>" + starRating + " star</div>";
		html += "</div>";
		html += '<div class="middle">';
		html += '<div class="bar-container">';
		html +=
			'<div class="bar-' +
			starRating.toLowerCase() +
			'" style="width: ' +
			summary[key] * 20 +
			'px;"></div>';
		html += "</div>";
		html += "</div>";
		html += '<div class="side right">';
		html += "<div>" + count + "</div>";
		html += "</div>";
		html += "</div>";
	});

	return html;
};
