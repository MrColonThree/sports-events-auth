import Marquee from "react-fast-marquee";
const Sponsors = () => {
  return (
    <div className="my-20 max-w-screen-xl mx-auto px-5">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10 graduate uppercase">Partners & Sponsors</h1>
      <Marquee pauseOnHover={true} speed={80}>
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1555274175-75f4056dfd05"
          alt="Adidas"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1521058001910-55b77aba2203"
          alt="BMW"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1621460244115-aae28aad2b45"
          alt="Porsche"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb"
          alt="McDonald"
        />
        <img
          className="h-28 w-52 mr-20"
          src=" https://images.unsplash.com/photo-1623257573668-c10b95c45fff"
          alt="Good Year"
        />

        <img
          className="h-28 w-52 mr-20"
          src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
          alt="Paypal"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1577223597229-2a83f97def38"
          alt="Arsenal"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1558979634-599249d06627"
          alt="Ceska Teliviz"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
          alt="Volkswagon"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1661348027228-e7f05cd5a254"
          alt="Xbox"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1589200412802-8a0fc9ce8875"
          alt="Leeds"
        />
        <img
          className="h-28 w-52 mr-20"
          src="https://images.unsplash.com/photo-1669975862965-a092cd94a81a"
          alt="Speed"
        />
      </Marquee>
    </div>
  );
};

export default Sponsors;
