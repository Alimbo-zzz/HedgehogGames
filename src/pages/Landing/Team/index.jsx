import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { СharacterBox } from '@components';
import { SVG } from "@UI";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import stars_img_1 from '@images/icons/stars_1.svg';
import stars_img_2 from '@images/icons/stars_2.svg';



const Team = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-team", { returnObjects: true });
	const theme = useSelector(state => state.theme.value);
	const stars_icon = (theme === 'dark') ? stars_img_1 : stars_img_2;
	const [swiper, setSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const swiperData = {
		spaceBetween: 20,
		slidesPerView: 2,
		onSwiper: setSwiper,
		onSlideChange: (data) => setActiveIndex(data.activeIndex),
		breakpoints: {
			// when window width is >= 640px
			768: {
				slidesPerView: 3,
			},
			1280: {
				slidesPerView: 4,
			}
		}
	}




	return (<>
		<section className={classNames(['section', cls.wrap])} id="team">
			<div className={classNames(['container', cls.grid])}>
				<h2 className={classNames(['title', cls.title])} data-aos="fade-up" >{lang_section.title} <img src={stars_icon} /></h2>
				<Swiper {...swiperData} data-aos="fade-left" >
					{lang_section.team.map((el, i) => (
						<SwiperSlide key={i}>
							<СharacterBox {...el} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className={cls.controllers} data-aos="fade-down" >
					<button
						data-arrow='prev'
						onClick={() => swiper.slidePrev()}
						disabled={swiper?.isBeginning}
					>
						<SVG icon='arrow-prev' />
					</button>
					<button
						data-arrow='next'
						onClick={() => swiper.slideNext()}
						disabled={swiper?.isEnd}
					>
						<SVG icon='arrow-next' />
					</button>
				</div>
			</div>
		</section>
	</>);
}

export default Team;