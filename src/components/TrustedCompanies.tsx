
import { trustedCompanies } from "@/@fake-db/companies";

const TrustedCompanies = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">{trustedCompanies.length}k+ trusted companies</h2>
          <p className="text-gray-500 text-center mb-8">
            Nullam imperdiet tellus at enim ornare tristique.
            Class aptent taciti sociosqu ad litora torquent
            per conubia nostra.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedCompanies.slice(0, 4).map((company) => (
              <div key={company.id} className="bg-white p-6 rounded-lg flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {trustedCompanies.slice(4).map((company) => (
              <div key={company.id} className="bg-white p-6 rounded-lg flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
