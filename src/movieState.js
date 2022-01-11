import attack from "./img/attackOnTitan.jpg";
import attack2 from "./img/attack2.jpg";
import vikings from "./img/vikings.jpg";
import vikings2 from "./img/vikings2.jpg";
import onePiece from "./img/onePiece.jpg";
import onePiece2 from "./img/onepiece2.jpg";

export const MovieState = () => {
  return [
    //Single Movie
    {
      title: "Attack On Titan",
      mainImg: attack,
      secondaryImg: attack2,
      url: "/work/attack-on-titan",
      awards: [
        {
          title: "یک شاهکار واقعی!",
          description:
            "داستان پسری که مادرش توسط تایتان ها خورده شد را به رخ می کشد",
        },
        {
          title: "حقیقت گریز ناپذیر",
          description:
            "به راستی اگر دسته ای از تایتان ها به شهر ها حمله شود چه اتفاقی می افتد؟ آیا مردم توان مقابله خواهند داشت؟",
        },
        {
          title: "به سوی آزادی",
          description:
            "ارن ییگر بعد از کشف حقیقت راستین تایتان ها دست به هر کاری می زند تا مفهوم آزادی را یه چنگ آورد",
        },
      ],
    },
    //Single Movie
    {
      title: "Vikings",
      mainImg: vikings,
      secondaryImg: vikings2,
      url: "/work/vikings",
      awards: [
        {
          title: "یک شاهکار واقعی!",
          description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافی مجله در ستون و سطرآنچنان که لازم است",
        },
        {
          title: "حقیقت گریز ناپذیر",
          description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحجله در ستون و سطرآنچنان که لازم است",
        },
        {
          title: "به سوی آزادی",
          description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپتون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        },
      ],
    },
    //Single Movie
    {
      title: "One Piece",
      mainImg: onePiece,
      secondaryImg: onePiece2,
      url: "/work/one-piece",
      awards: [
        {
          title: "یک شاهکار واقعی!",
          description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراو مجله ستون و سطرآنچنان که لازم است",
        },
        {
          title: "حقیقت گریز ناپذیر",
          description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهومراحان گرافیک است ستون و سطرآنچنان که لازم است",
        },
        {
          title: "به سوی آزادی",
          description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت امه و مجله در ستون و سطرآنچنان که لازم است",
        },
      ],
    },
  ];
};
