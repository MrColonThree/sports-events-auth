const Card = ({ card }) => {
  const { title, icon, description } = card;
  return (
    <div className="flex flex-col p-5 text-center" data-aos="fade-up">
      <img
        className="w-16 mx-auto p-2 border-2 border-blue-500 rounded-full hover:scale-110 transition-transform"
        src={icon}
        alt=""
      />
      <h1 className="text-lg font-semibold my-2">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
