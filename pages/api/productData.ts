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
        isFavorite: boolean;
}[];

const productData = [
  {
    _id: 101,
    title: "Maillot domicile PSG 2022/23",
    description:
    "Maillot domicile du Paris Saint-Germain pour la saison 2022/23. Montrez votre soutien à l'équipe avec ce maillot Nike.",
    oldPrice: 90.0,
    price: 74.99,
    brand: "Nike",
    image: "https://i.ibb.co/3vx76TN/image.png",
    isNew: true,
    category: "Maillots de football",
    isFavorite: false,
    },
    
    {
    _id: 102,
    title: "Maillot domicile FC Barcelone 2022/23",
    description:
    "Maillot domicile du FC Barcelone pour la saison 2022/23. Montrez votre soutien à l'équipe avec ce maillot Nike.",
    oldPrice: 85.0,
    price: 69.99,
    brand: "Nike",
    image: "https://i.ibb.co/xfQG70m/image.png",
    isNew: true,
    category: "Maillots de football",
    isFavorite: false,
    },
    
    {
    _id: 103,
    title: "Maillot domicile Real Madrid 2022/23",
    description:
    "Maillot domicile du Real Madrid pour la saison 2022/23. Montrez votre soutien à l'équipe avec ce maillot adidas.",
    oldPrice: 90.0,
    price: 74.99,
    brand: "adidas",
    image: "https://i.ibb.co/3yJZFcP/image.png",
    isNew: true,
    category: "Maillots de football",
    isFavorite: false,
    },
    
    {
    _id: 104,
    title: "Maillot domicile Liverpool FC 2022/23",
    description: "Maillot domicile du Liverpool FC pour la saison 2022/23. Montrez votre soutien à l'équipe avec ce maillot Nike.",
    oldPrice: 85.0,
    price: 69.99,
    brand: "Nike",
    image: "https://i.ibb.co/3C9nVZN/image.png",
    isNew: true,
    category: "Maillots de football",
    isFavorite: false,
    },

  {
    _id: 105,
    title: "Maillot domicile Argentine FC 2022/23",
    description: "Stay comfortable during training sessions with the Nike Strike Football Training Pants featuring sweat-wicking fabric and zippers at the ankles for easy on and off.",
    oldPrice: 60.0,
    price: 44.99,
    brand: "Nike",
    image: "https://i.ibb.co/k8PHHZr/image.png",
    isNew: false,
    category: "Football clothing",
    isFavorite: false,
  },

  {
    _id: 106,
    title: "Maillot domicile France 2022/23",
    description: "Experience premium comfort and performance with the Umbro Speciali Eternal Pro FG Football Boots featuring soft leather upper and a unique outsole design for excellent traction on firm ground.",
    oldPrice: 150.0,
    price: 119.99,
    brand: "Umbro",
    image: "https://i.ibb.co/WBHPzD3/image.png",
    isNew: false,
    category: "Football shoes",
    isFavorite: false,
  },
  {
    _id: 107,
    title: "Maillot domicile Arsenal FC 2022/23",
    description: "The Nike Phantom GT Academy Dynamic Fit FG soccer cleats provide precise touch and control with an innovative textured upper and a comfortable Dynamic Fit collar.",
    oldPrice: 80.0,
    price: 59.99,
    brand: "Nike",
    image: "https://i.ibb.co/jV2GWMq/image.png",
    isNew: true,
    category: "Football shoes",
    isFavorite: false,
  },
  {
    _id: 108,
    title: "Maillot domicile Dortmund FC 2022/23",
    description: "Get control and accuracy with the adidas Predator Freak .1 Low Firm Ground Cleats featuring Demonskin rubber spines on the upper for improved ball control and swerve.",
    oldPrice: 200.0,
    price: 159.99,
    brand: "adidas",
    image: "https://i.ibb.co/KKRQGzm/image.png",
    isNew: false,
    category: "Football shoes",
    isFavorite: false,
  },
  {
    _id: 109,
    title: "Maillot domicile Marseille FC 2022/23",
    description: "Show your support for Manchester United with this official team jersey featuring the iconic red and black stripes and embroidered club crest.",
    oldPrice: 90.0,
    price: 69.99,
    brand: "Manchester United",
    image: "https://i.ibb.co/6XK9ykN/image.png",
    isNew: false,
    category: "Football jerseys",
    isFavorite: false,
  },
  {
    _id: 110,
    title: "Maillot domicile Bayern FC 2022/23",
    description: "The Nike Phantom GT Club FG soccer cleat features textured synthetic leather and an off-center lacing system for precision control and accuracy on the field.",
    oldPrice: 70.0,
    price: 49.99,
    brand: "Nike",
    image: "https://i.ibb.co/sVXjKZd/image.png",
    isNew: true,
    category: "Football shoes",
    isFavorite: false,
  },
  
  {
    _id: 111,
    title: "Maillot domicile Tothenam FC 2022/23",
    description: "Play like a pro with the adidas Predator Match Soccer Ball, designed with a machine-stitched construction and butyl bladder for excellent air retention.",
    oldPrice: 35.0,
    price: 29.99,
    brand: "adidas",
    image: "https://i.ibb.co/hB4qvhh/image.png",
    isNew: false,
    category: "Football balls",
    isFavorite: false,
  },
  
  {
    _id: 112,
    title: "Maillot domicile Milan AC FC 2022/23",
    description: "Stay cool and comfortable on the field with the FC Barcelona Home Stadium Shorts, featuring Nike Dri-FIT technology and an elastic waistband for a secure fit.",
    oldPrice: 45.0,
    price: 34.99,
    brand: "FC Barcelona",
    image: "https://i.ibb.co/k11xNWG/image.png",
    isNew: false,
    category: "Football clothing",
    isFavorite: false,
  },
  
  {
    _id: 113,
    title: "Maillot domicile Lyon FC 2022/23",
    description: "Experience classic style and comfort with the Puma King Top FG Football Boots, featuring premium leather construction and a lightweight TPU outsole for excellent traction.",
    oldPrice: 120.0,
    price: 89.99,
    brand: "Puma",
    image: "https://i.ibb.co/HtXj5yN/image.png",
    isNew: true,
    category: "Football shoes",
    isFavorite: false,
  },
  
  {
    _id: 114,
    title: "Maillot domicile Manchester United FC 2022/23",
    description: "Stay warm and comfortable on the field with the Nike TechKnit Ultra Football Gloves, featuring a lightweight knit construction and a silicone grip pattern for enhanced control.",
    oldPrice: 50.0,
    price: 39.99,
    brand: "Nike",
    image: "https://i.ibb.co/c1J4B88/image.png",
    isNew: false,
    category: "Football accessories",
    isFavorite: false,
  },
  
  {
    _id: 115,
    title: "Maillot domicile Manchester City FC 2022/23",
    description: "Stay comfortable and stylish during training sessions with the adidas Tiro 21 Training Jacket, featuring breathable fabric and a classic adidas design.",
    oldPrice: 75.0,
    price: 59.99,
    brand: "adidas",
    image: "https://i.ibb.co/8srP6XS/image.png",
    isNew: false,
    category: "Football clothing",
    isFavorite: false,
  },

  {
    _id: 116,
    title: "Maillot domicile Espagne FC 2022/23",
    description: "Stay comfortable and stylish during training sessions with the adidas Tiro 21 Training Jacket, featuring breathable fabric and a classic adidas design.",
    oldPrice: 75.0,
    price: 59.99,
    brand: "adidas",
    image: "https://i.ibb.co/FgbNKPr/image.png",
    isNew: false,
    category: "Football clothing",
    isFavorite: false,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData);
}
