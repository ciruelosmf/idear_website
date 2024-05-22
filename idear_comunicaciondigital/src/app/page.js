import Image from "next/image";
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoIosMountain } from 'react-icons/io5';
import Link from 'next/link'; // Assuming you are using Next.js for the Link component
 





export default function Home() {
  return (
    <main className="m-4 flex flex-col items-center justify-center">
     

 





     <div className="flex flex-col justify-center items-center m-1 sm:m-4 mb-12  ">



    

      <div className="bg-[#fcc82d]  w-[99%]  sm:w-[66%] rotate-1 rounded-lg mt-4 shadow-lg  border-8   border-yellow-400 rounded-xl overflow-hidden animate-border-color-change">
        <div className="p-2 sm:p-8 ">
          <h2 className=" text-xl sm:text-5xl text-slate-800 font-sans font-bold mb-1 text-center">IDEAR  </h2>
          <h2 className="text-xl sm:text-2xl text-slate-800 font-sans font-bold mb-6 text-center">  Comunicación Digital</h2>

          <p className="text-gray-700 text-base sm:text-xl font-mono">
            Soy <Link className="text-gray-900 text-lg mb-6"  href="https://www.instagram.com/m.florenciasosa"> @m.florenciasosa</Link> y junto a mi equipo de jóvenes profesionales podemos ayudarte en tu comunicación digital.
          </p>

          <div className="text-center">
 
          <p className="text-gray-700 font-mono text-center mt-6">
              🔍 Analizamos
              🗓 Planificamos - Gestionamos
              💡 Ideamos
              📊 Medimos tus contenidos digitales
        </p>
    </div>








    

        </div>
      </div>
    </div>


    <Image
          src="/idear_logo.jpg" // Replace with your actual logo file path
          alt="Logo"
          width={100} // Adjust the width as needed
          height={100} // Adjust the height as needed
          className="border-2 border-yellow-100 rounded-xl mt-4 sm:mt-10 "
         // Position the logo above the card
        />



    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl  my-14   sm:p-2">





  <div className= "   border-2 border-yellow-200 rounded-xl overflow-hidden">
    <div className="p-2 md:p-6">
      <h3 className="text-lg sm:text-2xl font-semibold  mb-2">Gestión de redes</h3>
      <p className="text-sm sm:text-lg text-sm sm:text-lg text-gray-500 font-mono dark:text-gray-400">Administración efectiva de tus plataformas sociales para una presencia sólida.</p>
    </div>
  </div>

 

 
 
 

 










  <div className="border-2 border-yellow-200 rounded-xl overflow-hidden">
    <div className="p-2 md:p-6">
      <h3 className="text-lg sm:text-2xl font-semibold mb-2">Producciones de fotos</h3>
      <p className="text-sm sm:text-lg text-sm sm:text-lg text-gray-500 font-mono dark:text-gray-400">Creación de contenido visual atractivo y profesional para impulsar tu marca.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-xl overflow-hidden">
    <div className="p-2 md:p-6">
      <h3 className="text-lg sm:text-2xl font-semibold mb-2">Creación de videos</h3>
      <p className="text-sm sm:text-lg text-gray-500 font-mono dark:text-gray-400">Videos cautivadores y estratégicos para conectar con tu audiencia.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-xl overflow-hidden">
    <div className="p-2 md:p-6">
      <h3 className="text-lg sm:text-2xl font-semibold mb-2">Marketing de influencers</h3>
      <p className="text-sm sm:text-lg text-gray-500 font-mono dark:text-gray-400">Colaboraciones con líderes de opinión para amplificar tu alcance.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-xl overflow-hidden">
    <div className="p-2 md:p-6">
      <h3 className="text-lg sm:text-2xl font-semibold mb-2">Gestión de meta ads</h3>
      <p className="text-sm sm:text-lg text-gray-500 font-mono dark:text-gray-400">Campañas publicitarias efectivas en Facebook e Instagram para impulsar conversiones.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-xl overflow-hidden">
    <div className="p-2 md:p-6">
      <h3 className="text-lg sm:text-2xl font-semibold mb-2">Asesorías personalizadas</h3>
      <p className="text-sm sm:text-lg text-gray-500 font-mono dark:text-gray-400">Asesoramiento experto y personalizado para optimizar tu estrategia digital.</p>
    </div>
  </div>
</div>






<h3 className="text-6xl font-bold  text-center my-12">Escribinos para que trabajemos juntos</h3>



<div className="flex justify-center mb-20">
      <Link   href="mailto:idear.comunicaciondigital@gmail.com">
        <p className="bg-[#fcc82d] text-2xl  text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 transition duration-200 ease-in-out">
          Contacto
        </p>
      </Link>
    </div>























<footer className="bg-yellow-200  rounded-xl text-slate-950 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
             
            <span className="text-slate-950 font-bold text-lg">IDEAR</span>
          </div>
          <p className="text-sm font-mono leading-relaxed max-w-md">
          Desde gestión de redes hasta la producción de contenidos. Ofrecemos un abanico completo de servicios para potenciar tu presencia en las redes. 
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-slate-900 font-semibold mb-4">Links</h3>
          <nav className="space-y-2 flex flex-col items-start">
            <Link className="hover:text-yellow-900 px-1 font-mono transition-colors" href="#">
              Home
            </Link>
            <Link className="hover:text-yellow-900 px-1 font-mono transition-colors" href="#">
              Acerca de nuestro equipo
            </Link>
            <Link className="hover:text-yellow-900 px-1 font-mono transition-colors" href="#">
              Trabajos
            </Link>
            <Link className="hover:yellow-900 px-1 font-mono transition-colors" href="#">
              Artículos
            </Link>
            <Link className="hover:yellow-900 px-1 font-mono transition-colors" href="#">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-slate-900 font-semibold mb-4">Seguinos</h3>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-200 transition-colors" href="#">
              <IoLogoTwitter className="h-5 w-5" />
            </Link>
            <Link className="hover:text-gray-200 transition-colors" href="https://www.facebook.com/profile.php?id=100064967556048">
              <IoLogoFacebook className="h-5 w-5" />
            </Link>
            <Link className="hover:text-gray-200 transition-colors" href="https://www.instagram.com/idear.comunicaciondigital/">
              <IoLogoInstagram className="h-5 w-5" />
            </Link>
            <Link className="hover:text-gray-200 transition-colors" href="#">
              <IoLogoLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>


    

 



    </main>
  );
}
