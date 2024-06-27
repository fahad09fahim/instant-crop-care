const CardData = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, img, measurement, elements, details } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl max-h-full md:max-h-full lg:max-h-dvh	">
        <figure>
          <img
            className="p-1 lg:p-3 rounded-md"
            src={img}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-semibold">কার্যকারী উপাদানঃ </span>{elements}</p>
          <p><span className="font-semibold">প্রয়োগক্ষেত্রঃ </span>{details}</p>
          <p><span className="font-semibold">প্রয়োগ মাত্রাঃ </span>{measurement}</p>
          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardData;
