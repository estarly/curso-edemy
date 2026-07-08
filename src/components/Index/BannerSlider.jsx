"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { isVideoUrl } from "@/utils/bannerUtils";
import "./BannerSlider.css";

const MOBILE_BREAKPOINT = 700;
const AUTOPLAY_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;
const MOBILE_TRANSITION_MS = 450;

function preloadBannerMedia(banners) {
	banners.forEach((banner) => {
		const url = banner.image;
		if (!url) return;

		if (isVideoUrl(url)) {
			const video = document.createElement("video");
			video.preload = "auto";
			video.muted = true;
			video.playsInline = true;
			video.src = url;
			video.load();
			return;
		}

		const img = new Image();
		img.src = url;
	});
}

const BannerSlider = ({ banners = [] }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const touchStartX = useRef(null);
	const touchDeltaX = useRef(0);
	const isCorrectingMove = useRef(false);
	const videoRefs = useRef({});

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		if (banners.length) {
			preloadBannerMedia(banners);
		}
	}, [banners]);

	useEffect(() => {
		if (!isMobile || banners.length <= 1) return;

		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % banners.length);
		}, AUTOPLAY_INTERVAL);

		return () => clearInterval(timer);
	}, [isMobile, banners.length]);

	// En móvil, cambiar el atributo autoPlay no reinicia la reproducción al
	// deslizar. Forzamos play() en el slide activo y pausamos los demás.
	useEffect(() => {
		if (!isMobile) return;

		Object.entries(videoRefs.current).forEach(([idx, video]) => {
			if (!video) return;

			if (Number(idx) === activeIndex) {
				video.muted = true;
				video.playsInline = true;
				const playPromise = video.play();
				if (playPromise && typeof playPromise.catch === "function") {
					playPromise.catch(() => {});
				}
			} else {
				video.pause();
			}
		});
	}, [activeIndex, isMobile, banners]);

	const handleBannerClick = useCallback((url) => {
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		}
	}, []);

	const goToSlide = useCallback((index) => {
		setActiveIndex(index);
	}, []);

	const goNext = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % banners.length);
	}, [banners.length]);

	const goPrev = useCallback(() => {
		setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
	}, [banners.length]);

	const handleTouchStart = useCallback((event) => {
		touchStartX.current = event.touches[0].clientX;
		touchDeltaX.current = 0;
	}, []);

	const handleTouchMove = useCallback((event) => {
		if (touchStartX.current === null) return;
		touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
	}, []);

	const handleTouchEnd = useCallback(() => {
		if (touchStartX.current === null) return;

		if (touchDeltaX.current <= -SWIPE_THRESHOLD) {
			goNext();
		} else if (touchDeltaX.current >= SWIPE_THRESHOLD) {
			goPrev();
		}

		touchStartX.current = null;
		touchDeltaX.current = 0;
	}, [goNext, goPrev]);

	const handleSplideMounted = useCallback((splide) => {
		splide.go(0);
		requestAnimationFrame(() => {
			splide.refresh();
		});

		splide.on("move", (_newIndex, prevIndex, destIndex) => {
			if (isCorrectingMove.current) return;

			const total = splide.length;
			if (total <= 1) return;

			const diff = destIndex - prevIndex;
			const absDiff = Math.abs(diff);
			const isSingleStep = absDiff === 1 || absDiff === total - 1;

			if (!isSingleStep) {
				isCorrectingMove.current = true;
				const direction = diff > 0 ? 1 : -1;
				splide.go(prevIndex + direction);
				requestAnimationFrame(() => {
					isCorrectingMove.current = false;
				});
			}
		});

		const onResize = () => splide.refresh();
		window.addEventListener("resize", onResize);

		splide.on("destroy", () => {
			window.removeEventListener("resize", onResize);
		});
	}, []);

	if (!banners.length) {
		return null;
	}

	const renderMedia = (banner, { mobile = false, isActive = true, index = 0 } = {}) => {
		const mediaUrl = banner.image;

		if (isVideoUrl(mediaUrl)) {
			return (
				<video
					key={mediaUrl}
					ref={
						mobile
							? (el) => {
									if (el) {
										videoRefs.current[index] = el;
									} else {
										delete videoRefs.current[index];
									}
							  }
							: undefined
					}
					src={mediaUrl}
					autoPlay={isActive}
					muted
					loop
					playsInline
					preload="auto"
					className="banner-slider__media"
				>
					Tu navegador no soporta video.
				</video>
			);
		}

		return (
			<img
				src={mediaUrl}
				alt={`Banner ${banner.id}`}
				className="banner-slider__media"
				loading={mobile ? "eager" : "lazy"}
				decoding="sync"
			/>
		);
	};

	if (isMobile) {
		return (
			<section className="banner-slider banner-slider--mobile">
				<div
					className="banner-slider__mobile-viewport"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div
						className="banner-slider__mobile-track"
						style={{
							transform: `translateX(-${activeIndex * 100}%)`,
							transitionDuration: `${MOBILE_TRANSITION_MS}ms`,
						}}
					>
						{banners.map((banner, index) => (
							<div
								key={banner.id}
								className={`banner-slider__mobile-slide banner-slider__slide ${
									banner.url ? "banner-slider__slide--clickable" : ""
								}`}
								onClick={() => handleBannerClick(banner.url)}
								onKeyDown={(event) => {
									if (
										banner.url &&
										(event.key === "Enter" || event.key === " ")
									) {
										event.preventDefault();
										handleBannerClick(banner.url);
									}
								}}
								role={banner.url ? "button" : undefined}
								tabIndex={banner.url ? 0 : undefined}
							>
								{renderMedia(banner, {
									mobile: true,
									isActive: index === activeIndex,
									index,
								})}
							</div>
						))}
					</div>

					{banners.length > 1 && (
						<>
							<button
								type="button"
								className="banner-slider__mobile-arrow banner-slider__mobile-arrow--prev"
								onClick={goPrev}
								aria-label="Banner anterior"
							>
								‹
							</button>
							<button
								type="button"
								className="banner-slider__mobile-arrow banner-slider__mobile-arrow--next"
								onClick={goNext}
								aria-label="Banner siguiente"
							>
								›
							</button>
						</>
					)}
				</div>

				{banners.length > 1 && (
					<div className="banner-slider__mobile-dots">
						{banners.map((banner, index) => (
							<button
								key={banner.id}
								type="button"
								className={`banner-slider__mobile-dot ${
									index === activeIndex ? "is-active" : ""
								}`}
								onClick={() => goToSlide(index)}
								aria-label={`Ir al banner ${index + 1}`}
							/>
						))}
					</div>
				)}
			</section>
		);
	}

	const desktopOptions = {
		type: "loop",
		focus: "center",
		perPage: 1,
		perMove: 1,
		flickMaxPages: 0.3,
		flickPower: 60,
		dragMinThreshold: 15,
		rewindByDrag: false,
		fixedWidth: 560,
		fixedHeight: 290,
		gap: 56,
		pagination: true,
		arrows: true,
		autoplay: true,
		interval: AUTOPLAY_INTERVAL,
		pauseOnHover: true,
		speed: 700,
		drag: true,
		trimSpace: false,
		updateOnMove: true,
		waitForTransition: true,
	};

	return (
		<section className="banner-slider banner-slider--desktop">
			<Splide
				key="desktop"
				options={desktopOptions}
				className="banner-slider__splide"
				aria-label="Carrusel de banners"
				onMounted={handleSplideMounted}
			>
				{banners.map((banner) => (
					<SplideSlide key={banner.id}>
						<div
							className={`banner-slider__slide ${
								banner.url ? "banner-slider__slide--clickable" : ""
							}`}
							onClick={() => handleBannerClick(banner.url)}
							onKeyDown={(event) => {
								if (banner.url && (event.key === "Enter" || event.key === " ")) {
									event.preventDefault();
									handleBannerClick(banner.url);
								}
							}}
							role={banner.url ? "button" : undefined}
							tabIndex={banner.url ? 0 : undefined}
						>
							{renderMedia(banner)}
						</div>
					</SplideSlide>
				))}
			</Splide>
		</section>
	);
};

export default BannerSlider;
