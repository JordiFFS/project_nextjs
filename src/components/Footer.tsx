import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter, FaYoutube, FaPinterest } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcPaypal } from "react-icons/fa";
import { SiApplepay, SiGooglepay } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">SEBCAMI</div>
          </Link>
          <p>Av Pedro Vicente Maldonado y fenicio angulo</p>
          <span className='font-semibold'>Sebcam2024@hotmail.com</span>
          <span className='font-semibold'>(+593) 93 939 8951</span>
          <div className="flex gap-6">
            <FaFacebook />
            <FaTiktok />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Empresa</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Sobre nosotros</Link>
              <Link href="">Carrera</Link>
              <Link href="">Blog</Link>
              <Link href="">Contacto</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Compra</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Nuevos productos</Link>
              <Link href="">Promociones</Link>
              <Link href="">Ofertas</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Ayuda</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Preguntas frecuentes</Link>
              <Link href="">Términos y condiciones</Link>
              <Link href="">Política de privacidad</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg"> SUSCRÍBETE </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex">
            <input type="text" placeholder='Ingresa tu correo' className='p-4 w-3/4' />
            <button className='w-1/4 bg-notify text-white'> Enviar </button>
          </div>
          <span className='font-semibold'> Secure Payment </span>
          <div className="flex justify-between">
            <FaCcVisa style={{ color: "#1a1f71" }} />
            <FaCcMastercard style={{ color: "#eb001b" }} />
            <FaCcAmex style={{ color: "#2e77bb" }} />
            <FaCcDiscover style={{ color: "#ff6000" }} />
            <FaCcPaypal style={{ color: "#003087" }} />
            <SiApplepay style={{ color: "black" }} />
            <SiGooglepay style={{ color: "#34a853" }} />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className=""> © 2025 SEBCAMI Confort y Estilo. Todos los derechos reservados </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="">
            <span className='text-gray-500 mr-4'>Lenguaje</span>
            <span className='font-medium'>Español 🇪🇸</span>
          </div>
          <div className="">
            <span className='text-gray-500 mr-4'>Moneda</span>
            <span className='font-medium'>USD $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
