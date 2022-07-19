import mongoose from 'mongoose'

const shopItemsSchema = new mongoose.Schema({
  mcDonny: {
    type: Array,
    default: [
      {
        img: 'https://www.mcdonalds.com/is/image/content/dam/ua/mediaassets/to_eat/best_burgers/574x574_best.jpg?$Publication_Two_Column_Desktop$',
        name: 'Big mac menu',
        price: 100,
      },
      {
        img: 'https://storage1b.censor.net/images/3/7/e/9/37e9d2bd1eaf6603892416a1831aef98/original.jpg',
        name: 'Big mac',
        price: 50,
      },
      {
        img: 'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000',
        name: 'Big mac chicken',
        price: 60,
      },
    ],
  },
  cfk: {
    type: Array,
    default: [
      {
        img: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4093.png',
        name: 'Cfk bucket',
        price: 110,
      },
      {
        img: 'https://onecms-res.cloudinary.com/image/upload/s--OA35EnB9--/c_fill%2Cg_auto%2Ch_338%2Cw_600/f_auto%2Cq_auto/kfc-singapore-fried-chicken.jpg?itok=CcRj9Zua',
        name: 'Wings',
        price: 30,
      },
      {
        img: 'https://kyiv.media/wp-content/uploads/2020/10/kfc-02-10-2020.jpg',
        name: 'Big menu',
        price: 180,
      },
    ],
  },
  bullet: {
    type: Array,
    default: [
      {
        img: 'https://bufet.ua/wp-content/uploads/2014/04/firmennaya-1.jpg',
        name: 'Branded',
        price: 10,
      },
      {
        img: 'https://bufet.ua/wp-content/uploads/2014/04/kurica-s-ananasom-1.jpg',
        name: 'Chicken and pineapple',
        price: 12,
      },
      {
        img: 'https://bufet.ua/wp-content/uploads/2014/04/s-vetchinoj-1.jpg',
        name: 'With ham',
        price: 11,
      },
    ],
  },
  freshCircle: {
    type: Array,
    default: [
      {
        img: 'https://franch.ua/wp-content/uploads/2017/08/franshiza-freshline-3-510x300.jpg',
        name: 'Sandwich',
        price: 10,
      },
      {
        img: 'https://cdn-tipmymenus-com.fra1.digitaloceanspaces.com/files/de212f40-3a01-444e-a724-62a5167f1263-large.jpg',
        name: 'Chicken sandwich',
        price: 15,
      },
      {
        img: 'https://franch.biz/franch/file/3128/freshline-2005771.jpg',
        name: 'Big sandwich',
        price: 20,
      },
    ],
  },
  yakit: {
    type: Array,
    default: [
      {
        img: 'https://dnepr.news/images/thumbNews/feed/eda_1600866850.jpg',
        name: 'Mini Philadelfia',
        price: 50,
      },
      {
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/5e/83/fa/caption.jpg',
        name: 'Philadelfia',
        price: 70,
      },
      {
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/08/51/c3/90/caption.jpg',
        name: 'Philadelfia with Rapan',
        price: 65,
      },
    ],
  },
})

export const ShopItems = mongoose.model('shopItems', shopItemsSchema)
