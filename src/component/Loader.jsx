import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <DNA
        visible={true}
        height={100}
        width={100}
        ariaLabel="dna-loading"
        wrapperClassName="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
