
import { trustedCompanies } from "@/@fake-db/courses/collections.tsx";

const TrustedCompanies = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container">
        <div className="flex max-md:flex-col items-center justify-between">
          <div className="flex flex-col gap-6 max-w-[424px] w-full shrink-0">
            <h2 className="text-3xl font-bold">6.3k+ trusted companies</h2>
            <p className="text-gray-500 md:mr-28">
              Nullam imperdiet tellus at enim ornare tristique.
              Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustedCompanies.map((company) => (
              <div key={company.id} className="h-[100px] px-[50px] bg-white flex items-center justify-center shadow-custom">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
