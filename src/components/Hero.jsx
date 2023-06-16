import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Zoom,
  Keyboard,
} from 'swiper'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Member } from '@/components/Member'
import img1 from '@/images/home/p1.png'
import img2 from '@/images/home/p2.png'
import img4 from '@/images/home/p4.png'
import img3 from '@/images/home/p3.png'

const images = [img1, img2, img3, img4]

const routs = [
  {
    name: 'Creativity',
    link: '/creativity',
  },
  {
    name: 'APS',
    link: '/aps',
  },
  {
    name: 'Computer Society',
    link: '/computersociety',
  },
  {
    name: 'PR Sponsorship',
    link: '/pr_sponsorship',
  },
  {
    name: 'Documentation',
    link: '/documentation',
  },
  {
    name: 'RoboRIT',
    link: '/roborit',
  },
  {
    name: 'XTREME',
    link: '/xtreme',
  },
  {
    name: 'Digital Design',
    link: '/digitaldesign',
  },
  {
    name: 'Sensor Council',
    link: '/sensor_council',
  },
  {
    name: 'WIE',
    link: '/wie',
  },
  {
    name: 'MTTS',
    link: '/mtts',
  },
  {
    name: 'PES',
    link: '/pes',
  },
  {
    name: 'SPS',
    link: '/sps',
  },
]

export function Hero() {
  return (
    <section className="text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 pt-10 text-center  md:px-10 md:pt-10 lg:px-10 ">
        <h1 className="text-3xl font-bold leading-none sm:text-4xl">
          IEEE <span className="text-pri">Ramaiah Institute Of Technology</span>
        </h1>
        <p className="mt-1 text-lg text-red-600">
          Advancing Technology For Humanity
        </p>
      </div>
      <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          loop={true}
          autoHeight={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          keyboard={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="h-auto w-full rounded-lg"
                src={image}
                alt={index + 'image'}
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Container className="pt-5 pb-16 text-justify lg:pt-8">
        <p class="text-md mx-auto max-w-3xl rounded-xl bg-slate-100 p-3 tracking-tight text-slate-800 lg:text-xl">
          <b>IEEE-RIT Student Branch</b> was inaugurated in RIT in November
          2003. The branch endeavors to enrich the students of RIT with the
          latest developments in various fields of technology and research and
          ensure that their competency levels meet all the required standards in
          today’s industry and participation in a kaleidoscope of technical
          events throughout the year, implicitly emphasizing on extra-curricular
          activities in a student’s life.
        </p>
        <div className="flex flex-wrap justify-center">
          <ButtonLink
            href="https://site.ieee.org/sb-ritb/about-ieee/ieee-ramaiah/"
            className="text-md mt-10 rounded bg-sky-900 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 pt-5 md:grid md:grid-rows-3">
          <h1 className="flex flex-wrap justify-center">
            Here is the list of all the societies and councils under IEEE-RIT
          </h1>
          {routs.map((rout, index) => (
            <ButtonLink
              key={index}
              href={rout.link}
              className="mt-5 w-auto rounded-lg py-2"
            >
              {rout.name}
            </ButtonLink>
          ))}
          <p className="mt-6 text-base text-gray-600">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Member
                name="SUHAS KATRAHALLI"
                designation="SB Chair"
                link="https://www.linkedin.com/in/suhaskatrahalli"
                image="https://drive.google.com/uc?id=1bJ38lrFlwMrD6Byz16Ed0R333CDFpHVW&export=view"
              ></Member>

              <Member
                name="SRINIVAS C"
                designation="SB Secretary"
                link="https://www.linkedin.com/in/srinivas-c-678105249/"
                image="https://drive.google.com/uc?id=1JjKLA1zCL5BZMBB8qnfgxs_nFkoh3aAh&export=view"
              ></Member>

              <Member
                name="VINAYAK SHARMA"
                designation="SB Treasurer"
                link="https://www.linkedin.com/in/vinayak-sharma-033500210"
                image="https://drive.google.com/uc?id=1_AMkkaKxbzlr0QfX5wbDMf6RO4L60gWj&export=view"
              ></Member>

              <Member
                name="PRAJWAL B MEHENDARKAR"
                designation="SB Technical Head"
                link="https://www.linkedin.com/in/prajwal-b-mehendarkar-657544210"
                image="https://drive.google.com/uc?id=1DJb27tCJxoOUgAvCJXyXaogFQRT7BqjR&export=view"
              ></Member>

              <Member
                name="SNEGA UMAPATHI"
                designation="SB Convener"
                link="https://www.linkedin.com/in/snega-umapathi-b73480210"
                image="https://drive.google.com/uc?id=13vngh3QbtTF58xImFpsYYGHgYnn1-dw5&export=view"
              ></Member>

              <Member
                name="DIVYANSH MISHRA"
                designation="SB Vice-Chair"
                link="https://www.linkedin.com/in/divyansh-mishra-0a3168229"
                image="https://drive.google.com/uc?id=1fe_XkP7UrbuPAMBhQnB5rVBzxlNy_0xY&export=view"
              ></Member>

              <Member
                name="ASKANDA MAHAJAN"
                designation="SB Vice-Secretary"
                link="https://in.linkedin.com/in/askanda-mahajan-9a2004200"
                image="https://drive.google.com/uc?id=1a5WSd-AxMViNf7w8C6plRybQThMcsNtY&export=view"
              ></Member>

              <Member
                name="GURTEZ SINGH"
                designation="SB Vice-Treasurer"
                link="https://www.linkedin.com/in/gurtezsingh"
                image="https://drive.google.com/uc?id=1AmN3WmW2wZ8Nqfysn1Jz528byd6HuA8f&export=download"
              ></Member>

              <Member
                name="SANJAY KUMAR"
                designation="SB Vice-Technical Head"
                link="https://www.linkedin.com/in/sanjay-kumar-947911229/"
                image="https://drive.google.com/uc?id=1uNkrtldaPHXTKc62unwr_ejEBBWRInNn&export=view"
              ></Member>

              <Member
                name="SHUBHAM ANAND"
                designation="SB Vice-Convener"
                link="https://www.linkedin.com/in/shubham-anand-507785226/"
                image="https://drive.google.com/uc?id=1W1uCRJvOSW8wBet8GfYbz2AWQ2UcHKIX&export=view"
              ></Member>
            </div>
          </p>
        </div>
      </Container>
    </section>
  )
}
