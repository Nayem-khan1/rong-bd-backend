const products = [
  {
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748293211/eo3n589s04orrke7zyme.png",
    ],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: true,
    date: 1748293212745,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748293940/isz0dlgr54qv5aleh958.png",
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748293940/ahrdkcl3gzlaubf1wzjo.png",
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748293941/khy58e8qz4ksycl7xd9b.png",
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748293940/odyngkaygexxvfogfuhc.png",
    ],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: true,
    date: 1748293942205,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294036/fqxvgbflygfxpzrkbc7k.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: true,
    date: 1748294037611,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294127/haugq9jvyoeelabiodf0.png",
    ],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: true,
    date: 1748294128098,
  },
  {
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294253/lpwypx7soaosngiygjqu.png",
    ],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: true,
    date: 1748294162211,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294268/s4bjl9yo58svo5yokkgx.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294198220,
  },
  {
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294229/bsdeslftw0ungsazziph.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294230664,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294327/rp0ngdr6lovhfi06jr9i.png",
    ],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294329014,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294379/uyc2lh2menvmyfsahnkk.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294379894,
  },
  {
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294455/aeo07qn5oaprxhxwsc6t.png",
    ],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294456356,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 120,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294493/erntonsu4libx0ydmaqu.png",
    ],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294494343,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294521/uqocefcvyil2xhtway4n.png",
    ],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294522497,
  },
  {
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294548/p15ytd4hjamtdxowvujl.png",
    ],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294548883,
  },
  {
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294581/arhtqos0omhkuorkeinb.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294581907,
  },
  {
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294610/eaicmwnfqojyrrhtzzvr.png",
    ],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294611642,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 167,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294674/z2hgnicj303nrm4laxsy.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294675354,
  },
  {
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294705/cbxig7hqf9e86slsd5ig.png",
    ],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294706249,
  },
  {
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294742/pcrapgrhnbodym2f1ypg.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294743004,
  },
  {
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294770/qel9cb1ska4w67krfclw.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294771782,
  },
  {
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294808/ubxihk5czvz9z1dzzise.png",
    ],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294809407,
  },
  {
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 170,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294849/xpdnsxmeury2jxiiaszx.png",
    ],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294850613,
  },
  {
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294901/ekhoi0yvn2btedwau1ex.png"
    ],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294902817,
  },
  {
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 170,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294931/csi4wsrknnk75pjpdl4x.png"
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294932702,
  },
  {
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294959/clhxaeyx4hnszjthramw.png"
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294959905,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748294981/nonwvz6aynldd6rybzzo.png"
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748294982297,
  },
  {
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [
        "https://res.cloudinary.com/dbc7aucky/image/upload/v1748295037/ell7nzx2tkouezjk1def.png"
    ],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748295037935,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748295070/due1ifgtpxrtxjcy2pv2.png"
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748295071139,
  },
  {
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748295178/lnkujiaebbxhq7q9zv7q.png"
    ],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748295099123,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748295193/h6grakofghy6lha84qqm.png"
    ],
    category: "Women", // Note: this one might be miscategorized
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748295119699,
  },
  {
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 0,
    image: [
      "https://res.cloudinary.com/dbc7aucky/image/upload/v1748295147/f5pklzu635qcvcavspen.png"
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestSeller: false,
    date: 1748295148730,
  },
];

export default products;
