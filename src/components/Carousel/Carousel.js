// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "./Carousel.css";
// import { Navigation } from "swiper/modules";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// //img
// import img1 from "../../assets/1.jpg";
// import img2 from "../../assets/10.jpg";
// import img3 from "../../assets/10.jpg";
// // import ContactForm from "../../pages/ContactForm";

// const Carousel = () => {
//     return (
//         <div className="relative group">
//             <div className="hidden swiper-button image-swiper-button-next rounded-full p-2 bg-white/30 group-hover:block">
//                 <FaChevronRight />
//             </div>
//             <div className="hidden swiper-button rounded-full p-2 bg-white/30 image-swiper-button-prev group-hover:block">
//                 <FaChevronLeft />
//             </div>
//             <Swiper
//                 navigation={{
//                     nextEl: ".image-swiper-button-next",
//                     prevEl: ".image-swiper-button-prev",
//                     disabledClass: "swiper-button-disabled",
//                 }}
//                 modules={[Navigation]}
//                 className="mySwiper"
//                 loop:true
//             >
//                 <SwiperSlide
//                     style={{
//                         backgroundImage: `url(${img1})`,
//                         // backgroundRepeat: "no-repeat",
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                     }}
//                 >
//                     <div className="py-2">
//                         <h1 className="text-4xl text-black font-bold  ">
//                             The Device You Desire
//                         </h1>
//                         <h3 className="text-4xl text-black font-bold mb-4">
//                             At a Price You will Admire
//                         </h3>
//                         <h3 className="text-xl text-black   ">
//                             Sign up to be an early user
//                         </h3>

//                         <ContactForm></ContactForm>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage: `url(${img2})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                     }}
//                 >
//                     <div className="">
//                         <div className="py-24 ">
//                             <h1 className="text-4xl text-white font-bold  ">
//                                 The Device You Desire
//                             </h1>
//                             <h3 className="text-4xl text-white font-bold mb-4">
//                                 At a Price You will Admire
//                             </h3>
//                             <h3 className="text-xl text-white   ">
//                                 Sign up to be an early user
//                             </h3>
//                             {/*
//                             <ContactForm></ContactForm> */}
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide
//                     style={{
//                         backgroundImage: `url(${img3})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                     }}
//                 >
//                     <div className="">
//                         <div className="py-24 ">
//                             <h1 className="text-4xl text-black font-bold  ">
//                                 The Device You Desire
//                             </h1>
//                             <h3 className="text-4xl text-black font-bold mb-4">
//                                 At a Price You will Admire
//                             </h3>
//                             <h3 className="text-xl text-black   ">
//                                 Sign up to be an early user
//                             </h3>


//                         </div>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default Carousel;
