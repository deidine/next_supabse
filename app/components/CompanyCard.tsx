import React from 'react'; 

  function CompanyCard ({ company }:{company: any})  {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={company.img} alt={company.nom} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{company.nom}</div>
        <p className="text-gray-700 text-base">
          Location: {company.location}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #company
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
