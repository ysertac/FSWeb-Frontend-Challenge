import { data } from "../data";

const Profile = () => {
  return (
    <div className="bg-spcBlue">
      <div className="w-x mx-auto py-24">
        <h2 className="text-5xl text-spcGreen font-bold pb-6">
          {data.profile.header}
        </h2>

        {/* Soldaki 1/3 lik kısım */}
        <div>
          <h3 className="text-3xl font-medium">{data.profile.subHeaders[0]}</h3>
          <div className="w-y h-56 flex flex-col justify-between mt-6">
            {data.profile.content.map((content) => (
              <div>
                <p className="inline-block text-spcGreen text-base font-semibold">
                  {content.def}: &nbsp;
                </p>
                <p className="inline-block text-base font-semibold">
                  {content.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ortadaki 1/3 lik kısım */}
      </div>
    </div>
  );
};

export default Profile;
