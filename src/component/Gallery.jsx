const Gallery = () => {
  const photos = [
    {
      id: 1,
      img: "https://i.postimg.cc/jSLQsS0h/img.png",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/SRd7KXxg/img2.png",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/QxNJyqfw/img3.png",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/FzNVmbNf/img4.png",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/HW9tzN9b/img5.png",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/28H7RBJ6/img6.png",
    },
  ];

  return (
    <div className="my-5">
      <h1 className="text-center text-xl  md:text-3xl lg:text-5xl font-medium my-3">
        Gallery
      </h1>
      <div>
        <div className="diff aspect-auto">
          <div className="diff-item-1">
            <div className="bg-green-600 text-primary-content grid place-content-center text-3xl font-black">
              Drag it to right
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 grid place-content-center text-3xl font-black">
              Instant crop care Gallery
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 my-5">
      {photos.map((photo) => (
         
     
              <img key={photo.id} className="cursor-default object-cover transition-transform duration-500  scale-90 transform-gpu hover:scale-95 rounded-md" src={photo.img} alt={`Image ${photo.id}`} />
      
        ))}
      </div>
    </div>
  );
};

export default Gallery;
