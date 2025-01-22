const HomepageServices = () => {
 const services =   [
      {
        id: 1,
        title:  () => (

          <p> <span className="text-[#0163be]">MEP Estimating  </span> Service</p>       ),
        description: 'We provide comprehensive MEP estimating and construction takeoff services tailored for contractors. Our MEP services encompass mechanical, electrical, and plumbing systems, handled by a dedicated team of expert MEP estimators.',
        img:'/mepIcon.svg',
      },
      {
        id: 2,
        title:  () => (

          <p> <span className="text-[#0163be]">Concrete Estimating</span> Service</p>       ),
        description: 'We offer comprehensive and reliable concrete estimating services for contractors. Our concrete takeoffs and estimates cover a wide range of elements, including foundations, footings, slabs, blocks, pavers, driveways, garages, basements, and parking lots.',
        img:'/troyicon.svg',
      },
      {
        id: 3,
        title:  () => (

          <p> <span className="text-[#0163be]">Painting Estimating </span> Service</p>       ),
        description: 'We offer comprehensive and reliable concrete estimating services for contractors. Our concrete takeoffs and estimates cover a wide range of elements, including foundations, footings, slabs, blocks, pavers, driveways, garages, basements, and parking lots.',

        img:'/painticon.svg',
      },
      {
        id: 4,
        title:  () => (

          <p> <span className="text-[#0163be]">Steel Estimating </span> Service</p>       ),
        description: 'We provide accurate and cost-effective steel estimating and takeoff services for detailing and steel contractors, framers, distributors, and fabricators. Our structural and miscellaneous steel takeoffs encompass a wide range of quantities.',
        img:'/Steelicon.svg',
      },
      {
        id: 5,
        title:  () => (

          <p> <span className="text-[#0163be]">Masonry Takeoff </span> Service</p>       ),
        description: 'We offer comprehensive masonry takeoff services for contractors engaged in both residential and commercial projects. Our takeoffs meticulously quantify every aspect of the masonry trade, providing detailed descriptions that include concrete blocks,.',
        img:'/mesonicon.svg',
      },
      {
        id: 6,
        title:  () => (

          <p> <span className="text-[#0163be]">Drywall Takeoff </span> Service</p>       ),
        description: 'We regularly serve drywall contractors who require accurate estimates and takeoffs for pricing quotes to general contractors and suppliers. Our diverse client base includes general contractors, drywall installation service providers, homeowners.',
        img:'/drywallicon.svg',
      },
      {
        id: 7,
        title:  () => (

          <p> <span className="text-[#0163be]">Lumber Takeoff</span> Service</p>       ),
        description: 'We assist framing contractors, millwork contractors, commercial contractors, and builders by providing precise millwork estimates and lumber takeoffs. Our comprehensive takeoffs include rough and finish carpentry, wood trusses, drywall.',
        img:'/lumbericon.svg',
      },
      {
        id: 8,
        title:  () => (

          <p> <span className="text-[#0163be]">Sitework and Earthwork </span>Takeoff Service</p> ),
        description: 'WeOur experienced estimators provide comprehensive sitework takeoffs, including cut and fill dirt takeoffs, earthwork estimates, and site utility assessments for excavators and contractors.',

        img:'/earthworkicon.svg',
      },
    ];  

  return (
    <>
    <div className=" bg-[#ebebeb] pt-20 pb-10 h-auto">
        <div className="service-content">
<h2 className="font-semibold text-center text-4xl">Our Bidworks Estimating <span className="text-blue-500">Services</span> </h2>
<p className="text-center pt-5">Our comprehensive construction estimating and takeoff services cover every trade and project type, <br /> ensuring precision and reliability from start to finish. </p>
      </div>
    <div className="grid grid-cols-4 grid-rows-2 p-12 gap-4">
     
      { services.map((service) => (
        <div key={service.id} className=" p-4 border-b-8 border-[#0163be] rounded-lg shadow-md  bg-white">
 <img src={service.img} alt={service.title} className="w-15 h-15 mb-2" />
           <h3 className="text-xl font-semibold">{service.title()}</h3>
          <p className="text-gray-600">{service.description} <button className="text-blue-600 underline">View More</button></p>
         
        </div>
      ))}
    </div>
      {/* FAQ Link */}
    
    </div>
    <div className="text-sm text-gray-600 mb-4 text-center">
        Have specific questions about our services? Check out our{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800">
          FAQs
        </a>{' '}
        for detailed answers and get started with confidence.
      </div>
    </>
  );
};

     

    



export default HomepageServices