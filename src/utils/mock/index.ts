import { ProductType, TestimonialType, AsSeenListType, HomeFooterDataType, HelpDeskDataType, FaqDataType, OtherQuestionsDataType, ContactFooterDataType } from "../type";

export const TestimonialData: TestimonialType[] = [
  {
    name: "Rober Smith",
    product: "Monstera deliciosa",
    message:
      "I absolutely love my Monstera deliciosa! This plant is a true showstopper with its large, vibrant green leaves and unique holey patterns. It adds a touch of tropical elegance to my living room and never fails to impress my guests.",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/avt-pl1.png?v=1684383467&ecom-need-replace",
    stars: 5,
  },
  {
    name: "BeautySurferJ",
    product: "Pilea peperomioides",
    message: "It is a delightful addition to any plant lover's collection. Its round, pancake-shaped leaves and slender stems create a visually appealing look. The plant is relatively easy to care for, preferring bright, indirect light and regular watering.",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/avt-pl2.png?v=1684383486&ecom-need-replace",
    stars: 5,
  },
  {
    name: "AngieYuuup",
    product: "Sansevieria trifasciata",
    message: "It is a must-have for any plant enthusiast, especially if you're looking for an incredibly resilient and low-maintenance option. This plant can tolerate a wide range, making it perfect for even the darkest corners of your home.",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/avt-pl3.png?v=1684383504&ecom-need-replace",
    stars: 5,
  },
];

export const ProductList: ProductType[] = [
  {
    id: 1,
    name: "Pothos Marble Queen",
    imgColor: [
      {
        color: "#ede5da",
        name: "Cream",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p6-1.png?v=1685928123",
      },
      {
        color: "#000000",
        name: "Black",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p6-4.jpg?v=1685928749",
      },
      {
        color: "#e7e8e9",
        name: "Stone",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p6-3.jpg?v=1685928748",
      },
      {
        color: "#c38364",
        name: "Terracotta",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p6-2.jpg?v=1685928748",
      },
    ],
    rate: 68,
    isSale: false,
    saleRate: 0,
    size: ["Small", "Medium", "Large"],
    planter: ["Grow Pot", "Ceramic Pot", "Terracotta Pot"],
    isFeatured: true,
    isPopular: false,
    isNew: true,
    isExclusive: false,
    starRating: 5,
    reviewCount: 100,
    stock: 6,
  },
  {
    id: 2,
    name: "Bird of Paradise",
    imgColor: [
      {
        color: "#ede5da",
        name: "Cream",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p7-1.png?v=1685926568",
      },
      {
        color: "#000000",
        name: "Black",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p7-3.jpg?v=1685927824",
      },
      {
        color: "#e7e8e9",
        name: "Stone",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p7-4.jpg?v=1685927824",
      },
      {
        color: "#c38364",
        name: "Terracotta",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p7-2.jpg?v=1685927824",
      },
    ],
    rate: 78,
    isSale: false,
    saleRate: 0,
    size: ["Small", "Medium", "Large"],
    planter: ["Grow Pot", "Ceramic Pot"],
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isExclusive: false,
    starRating: 4,
    reviewCount: 50,
    stock: 8,
  },
  {
    id: 3,
    name: "Hoya Carnosa Tricolor",
    imgColor: [
      {
        color: "#d86e41",
        name: "Terracotta",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p5-1_533x.png?v=1685928890",
      },
    ],
    rate: 55,
    isSale: true,
    saleRate: 35,
    size: ["Small", "Medium", "Large"],
    planter: ["Grow Pot", "Ceramic Pot", "Terracotta Pot"],
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isExclusive: false,
    starRating: 5,
    reviewCount: 40,
    stock: 14,
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    imgColor: [
      {
        color: "#ede5da",
        name: "Cream",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1.png?v=1685929723",
      },
      {
        color: "#000000",
        name: "Black",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-2.jpg?v=1685930236",
      },
      {
        color: "#e7e8e9",
        name: "Stone",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-3.jpg?v=1685930236",
      },
      {
        color: "#c38364",
        name: "Terracotta",
        img: "https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/pr-p1-4.jpg?v=1685930236",
      },
    ],
    rate: 89,
    isSale: true,
    saleRate: 68,
    size: ["Small", "Large"],
    planter: ["Grow Pot", "Grant", "Hyde"],
    isFeatured: false,
    isPopular: true,
    isNew: true,
    isExclusive: true,
    starRating: 5,
    reviewCount: 100,
    stock: 6,
  },
];

export const AsSeenList: AsSeenListType[] = [
  {
    id: 1,
    alt: "as-seen-1",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p1.png?v=1685960073&ecom-need-replace",
  },
  {
    id: 2,
    alt: "as-seen-2",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p2.png?v=1685960090&ecom-need-replace",
  },
  {
    id: 3,
    alt: "as-seen-3",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p3.png?v=1685960110&ecom-need-replace",
  },
  {
    id: 4,
    alt: "as-seen-4",
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p4.png?v=1685960126&ecom-need-replace",
  },
];

export const FooterData:HomeFooterDataType = {
  links: [
    {
      title: "COMPANY",
      list: [
        {
          title: "About",
          link: "/",
        },
        {
          title: "Careers",
          link: "/",
        },
        {
          title: "Corporate Gifting",
          link: "/",
        },
        {
          title: "Trade Program",
          link: "/",
        },
        {
          title: "Refer a Friend",
          link: "/",
        },
      ],
    },
    {
      title: "SUPPORT",
      list: [
        {
          title: "Help + FAQs",
          link: "/",
        },
        {
          title: "Track Your Order",
          link: "/",
        },
        {
          title: "Shipping",
          link: "/",
        },
        {
          title: "Returns",
          link: "/",
        },
        {
          title: "Contact Support",
          link: "/",
        },
      ],
    },
    {
      title: "RESOURCES",
      list: [
        {
          title: "Find Your Plant",
          link: "/",
        },
        {
          title: "Plant Care Library",
          link: "/",
        },
        {
          title: "Blog",
          link: "/",
        },
        {
          title: "Free Online Course",
          link: "/",
        },
      ],
    },
  ],
  terms: [
    {
      title: "Terms",
      link: "/",
    },
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Accessbility",
      link: "/",
    },
  ],
  socialMedia: [
    {
      title: "Facebook",
      icon: "bi bi-facebook",
      link: "/",
    },
    {
      title: "Twitter",
      icon: "bi bi-twitter-x",
      link: "/",
    },
    {
      title: "Instagram",
      icon: "bi bi-instagram",
      link: "/",
    },
    {
      title: "Telegram",
      icon: "bi bi-telegram",
      link: "/",
    },
  ],
  paymentPartners:
    "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/pay-m.svg?v=1677899548",
  form: {
    title: "Get the Dirt.",
    description:
      "Get plant care tips, exclusive offers, & event invites straight to your inbox.",
  },
};











// ContactUs
export const HelpDeskData: HelpDeskDataType[] = [
  {
      title: 'Size Guide',
      description: 'Ensure your customers get the right fit',
      icon: 'fa-solid fa-shirt',
      viewMore: '#'
  },
  {
      title: 'Loyalty Program',
      description: 'Offer exclusive rewards',
      icon: 'fa-solid fa-hand-holding',
      viewMore: '#'
  },
  {
      title: 'Order & Shipping',
      description: 'Looking for your order status',
      icon: 'bi bi-box-seam',
      viewMore: '#'
  },
  {
      title: 'Payment & Gift cards',
      description: 'Wonder of what payment we accept?',
      icon: 'bi bi-credit-card',
      viewMore: '#'
  },
  {
      title: 'Discount Codes',
      description: 'Have a discount you like to use?',
      icon: 'bi bi-ticket-perforated',
      viewMore: '#'
  },
  {
      title: 'Store Location',
      description: 'Want to find a store near you?',
      icon: 'bi bi-shop',
      viewMore: '#'
  },
]

export const FaqData: FaqDataType[] = [
  {
    que: "How do I join the affiliate program?",
    ans: "Simply sign up through our affiliate program page by filling out the registration form. Once approved, you'll receive a unique affiliate link to start promoting our products.",
  },
  {
    que: "What commission rates do you offer?",
    ans: "We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners.",
  },
  {
    que: "How and when do I get paid?",
    ans: "For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family.",
  },
  {
    que: "What marketing resources are available to affiliates?",
    ans: "Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.",
  },
];

export const OtherQuestionsData: OtherQuestionsDataType[] = [
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    title: "Call",
    desc: "012-345-6789",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488",
    title: "Email",
    desc: "Contact Us",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522",
    title: "Chat",
    desc: "Chat Now",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557",
    title: "Message",
    desc: "Support Now",
  },
];

export const ContactFooterData: ContactFooterDataType[] = [
  {
    title: "About Us",
    links: [
      {
        title: "Careers",
        link: "/contact-us",
      },
      {
        title: "Blog",
        link: "/contact-us",
      },
      {
        title: "Affiliate",
        link: "/contact-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
      {
        title: "Terms of use",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Resource",
    links: [
      {
        title: "Return policy",
        link: "/contact-us",
      },
      {
        title: "My Account",
        link: "/contact-us",
      },
      {
        title: "Find a Store",
        link: "/contact-us",
      },
      {
        title: "Legal & Privacy",
        link: "/contact-us",
      },
      {
        title: "Contact",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        title: "Our Story",
        link: "/contact-us",
      },
      {
        title: "Visit Our Store",
        link: "/contact-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
      {
        title: "Account",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        title: "FAQ",
        link: "/contact-us",
      },
      {
        title: "Terms of Use",
        link: "/contact-us",
      },
      {
        title: "Privacy Policy",
        link: "/contact-us",
      },
      {
        title: "Cookie Policy",
        link: "/contact-us",
      },
      {
        title: "Sitemap",
        link: "/contact-us",
      },
    ],
  },
];