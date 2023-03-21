// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
        _id: number;
        title: string;
        description: string;
        oldPrice: number;
        price: number;
        brand: string;
        image: string;
        isNew: boolean;
        category: string;
}[];

const productData = [
  {
    _id: 101,
    title: "Nike Mercurial Superfly 8 Elite",
    description:
      "Nike Mercurial Superfly 8 Elite FG Men's Firm-Ground Soccer Cleat delivers explosive speed with an updated plate designed with Nike Aerotrak technology and a lightweight Flyknit upper for precision touch at high speeds.",
    oldPrice: 250.0,
    price: 199.99,
    brand: "Nike",
    image: "https://thumblr.uniid.it/product/235072/2042d76f02c6.jpg",
    isNew: true,
    category: "Football shoes",
  },

  {
    _id: 102,
    title: "adidas Tango Street Skillz",
    description:
      "The adidas Tango Street Skillz soccer ball is designed for street play with a durable cover and machine-stitched construction for long-lasting performance.",
    oldPrice: 30.0,
    price: 24.99,
    brand: "adidas",
    image: "https://www.cdiscount.com/pdt2/2/7/7/1/700x700/mp45992277/rw/ballon-adidas-tango-street-skillz-blanc-noir-rou.jpg",
    isNew: false,
    category: "Football balls",
  },

  {
    _id: 103,
    title: "FC Barcelona Jersey",
    description:
      "Show your support for FC Barcelona with this official team jersey featuring the iconic blue and red stripes and embroidered club crest.",
    oldPrice: 80.0,
    price: 59.99,
    brand: "FC Barcelona",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/575e9e88-7aa1-4ac5-b297-ce2b881b4d0c/maillot-de-football-dri-fit-fc-barcelona-2022-23-stadium-domicile-pour-plus-age-7fxt6w.png",
    isNew: false,
    category: "Football jerseys",
  },
  {
    _id: 104,
    title: "Puma One Grip 1 Goalkeeper Gloves",
    description: "Make game-winning saves with the Puma One Grip 1 goalkeeper gloves featuring a latex palm for superior grip and a flexible finger protection system.",
    oldPrice: 100.0,
    price: 74.99,
    brand: "Puma",
    image: "https://www.picclickimg.com/nD8AAOSwyV5jHr6q/Puma-ONE-GRIP-1-RC-Goalkeeper-Gloves.webp",
    isNew: true,
    category: "Goalkeeper gloves"
  },

  {
    _id: 105,
    title: "Nike Strike Football Training Pants",
    description: "Stay comfortable during training sessions with the Nike Strike Football Training Pants featuring sweat-wicking fabric and zippers at the ankles for easy on and off.",
    oldPrice: 60.0,
    price: 44.99,
    brand: "Nike",
    image: "https://i.ebayimg.com/images/g/yNkAAOSwnPJgnCWD/s-l500.jpg",
    isNew: false,
    category: "Football clothing",
  },

  {
    _id: 106,
    title: "Umbro Speciali Eternal Pro FG Football Boots",
    description: "Experience premium comfort and performance with the Umbro Speciali Eternal Pro FG Football Boots featuring soft leather upper and a unique outsole design for excellent traction on firm ground.",
    oldPrice: 150.0,
    price: 119.99,
    brand: "Umbro",
    image: "https://www.tradeinn.com/h/13698/136985102/umbro-chaussures-football-speciali-pro-fg.jpg",
    isNew: false,
    category: "Football shoes",
  },
  {
    _id: 107,
    title: "Nike Phantom GT Academy Dynamic Fit FG",
    description: "The Nike Phantom GT Academy Dynamic Fit FG soccer cleats provide precise touch and control with an innovative textured upper and a comfortable Dynamic Fit collar.",
    oldPrice: 80.0,
    price: 59.99,
    brand: "Nike",
    image: "https://www.tradeinn.com/f/13748/137483806/nike-chaussures-football-phantom-gt-academy-dynamic-fit-fg-mg.jpg",
    isNew: true,
    category: "Football shoes",
  },
  {
    _id: 108,
    title: "adidas Predator Freak .1 Low Firm Ground Cleats",
    description: "Get control and accuracy with the adidas Predator Freak .1 Low Firm Ground Cleats featuring Demonskin rubber spines on the upper for improved ball control and swerve.",
    oldPrice: 200.0,
    price: 159.99,
    brand: "adidas",
    image: "https://thumblr.uniid.it/product/211904/5a109c6925f2.jpg",
    isNew: false,
    category: "Football shoes",
  },
  {
    _id: 109,
    title: "Manchester United 2022/23 Home Jersey",
    description: "Show your support for Manchester United with this official team jersey featuring the iconic red and black stripes and embroidered club crest.",
    oldPrice: 90.0,
    price: 69.99,
    brand: "Manchester United",
    image: "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23-kids-with-martinez-6-printing_ss4_p-13359236+pv-1+u-10eiwxrogu1dsfxh5ovd+v-e645fe04a91a4b31a0b84bad5d535149.jpg?_hv=2&w=900",
    isNew: false,
    category: "Football jerseys",
  },
  {
    _id: 110,
    title: "Nike Phantom GT Club FG",
    description: "The Nike Phantom GT Club FG soccer cleat features textured synthetic leather and an off-center lacing system for precision control and accuracy on the field.",
    oldPrice: 70.0,
    price: 49.99,
    brand: "Nike",
    image: "https://www.tradeinn.com/f/13798/137983294/nike-chaussures-football-phantom-gt-club-dynamic-fit-fg-mg.jpg",
    isNew: true,
    category: "Football shoes",
  },
  
  {
    _id: 111,
    title: "adidas Predator Match Soccer Ball",
    description: "Play like a pro with the adidas Predator Match Soccer Ball, designed with a machine-stitched construction and butyl bladder for excellent air retention.",
    oldPrice: 35.0,
    price: 29.99,
    brand: "adidas",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/00d951f1a5b940a2bc78af4800acc4a3_9366/Ballon_dentrainement_Predator_Noir_HT2466_01_standard.jpg",
    isNew: false,
    category: "Football balls",
  },
  
  {
    _id: 112,
    title: "FC Barcelona Home Stadium Shorts",
    description: "Stay cool and comfortable on the field with the FC Barcelona Home Stadium Shorts, featuring Nike Dri-FIT technology and an elastic waistband for a secure fit.",
    oldPrice: 45.0,
    price: 34.99,
    brand: "FC Barcelona",
    image: "https://images.footballfanatics.com/barcelona/barcelona-home-stadium-shorts-2022-23-womens_ss4_p-13304298+pv-1+u-13veyo069vuw01gf7ad6+v-39a3cc3cd8834e8c95009108d5fef34f.jpg?_hv=2&w=600",
    isNew: false,
    category: "Football clothing",
  },
  
  {
    _id: 113,
    title: "Puma King Top FG Football Boots",
    description: "Experience classic style and comfort with the Puma King Top FG Football Boots, featuring premium leather construction and a lightweight TPU outsole for excellent traction.",
    oldPrice: 120.0,
    price: 89.99,
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/105607/01/sv01/fnd/EEA/fmt/png/Chaussure-de-football-KING-Top",
    isNew: true,
    category: "Football shoes",
  },
  
  {
    _id: 114,
    title: "Nike TechKnit Ultra Football Gloves",
    description: "Stay warm and comfortable on the field with the Nike TechKnit Ultra Football Gloves, featuring a lightweight knit construction and a silicone grip pattern for enhanced control.",
    oldPrice: 50.0,
    price: 39.99,
    brand: "Nike",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec190a6e-d0da-415a-a670-edf474716b41/vapor-jet-7-football-gloves-1-pair-C04SdP.png",
    isNew: false,
    category: "Football accessories",
  },
  
  {
    _id: 115,
    title: "adidas Tiro 21 Training Jacket",
    description: "Stay comfortable and stylish during training sessions with the adidas Tiro 21 Training Jacket, featuring breathable fabric and a classic adidas design.",
    oldPrice: 75.0,
    price: 59.99,
    brand: "adidas",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ecaac6c713b34b1185bdac4600c0fc3a_9366/Veste_de_survetement_Tiro_21_Noir_GM7314_01_laydown.jpg",
    isNew: false,
    category: "Football clothing",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData);
}
