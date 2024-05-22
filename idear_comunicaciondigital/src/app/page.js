import Image from "next/image";

export default function Home() {
  return (
    <main className="m-4 flex flex-col justify-center">
     

 



  



     <div className="flex flex-col justify-center items-center mt-4  ">



     <Image
          src="/asd.jpg" // Replace with your actual logo file path
          alt="Logo"
          width={100} // Adjust the width as needed
          height={100} // Adjust the height as needed
         // Position the logo above the card
        />



      <div className="bg-yellow-400  w-[90%]  sm:w-[66%] rotate-1 rounded-lg mt-4 shadow-lg">
        <div className="p-8 ">
          <h2 className="text-4xl text-slate-800 font-bold mb-4 text-center">IDEAR  </h2>
          <h2 className="text-4xl text-slate-800 font-bold mb-4 text-center">  Comunicación Digital</h2>

          <p className="text-gray-700 text-xl ">
            Soy @m.florenciasosa y junto a mi equipo de jóvenes profesionales podemos ayudarte en tu comunicación digital.
          </p>

          <div className="text-center">
 
          <p className="text-gray-700 mt-4">
              🔍 Analizamos
              🗓 Planificamos - Gestionamos
              💡 Ideamos
              📊 Medimos tus contenidos digitales
    </p>
    </div>








    

        </div>
      </div>
    </div>






    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl  my-12   md:p-2">
  <div className="border-2 border-yellow-200 rounded-2xl overflow-hidden">
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-2">Gestión de redes</h3>
      <p className="text-gray-500 dark:text-gray-400">Administración efectiva de tus plataformas sociales para una presencia sólida.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-2xl overflow-hidden">
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-2">Producciones de fotos</h3>
      <p className="text-gray-500 dark:text-gray-400">Creación de contenido visual atractivo y profesional para impulsar tu marca.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-2xl overflow-hidden">
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-2">Creación de videos</h3>
      <p className="text-gray-500 dark:text-gray-400">Videos cautivadores y estratégicos para conectar con tu audiencia.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-2xl overflow-hidden">
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-2">Marketing de influencers</h3>
      <p className="text-gray-500 dark:text-gray-400">Colaboraciones con líderes de opinión para amplificar tu alcance.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-2xl overflow-hidden">
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-2">Gestión de meta ads</h3>
      <p className="text-gray-500 dark:text-gray-400">Campañas publicitarias efectivas en Facebook e Instagram para impulsar conversiones.</p>
    </div>
  </div>
  <div className="border-2 border-yellow-200 rounded-2xl overflow-hidden">
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-2">Asesorías personalizadas</h3>
      <p className="text-gray-500 dark:text-gray-400">Asesoramiento experto y personalizado para optimizar tu estrategia digital.</p>
    </div>
  </div>
</div>















    </main>
  );
}
