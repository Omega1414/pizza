// import components
import Pizza from './components/Pizza';
import Banner from './components/Banner';
import { Suspense } from 'react';
import Loading from './loading';




// pizza data
const pizzas = [
  {
    id: 1,
    name: 'capricciosa',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'pendirli',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'hawaii',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/hawaii.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'İtalyan',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/italian.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'marqarita',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/margherita.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'pepperoni',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/pepperoni.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'quattro formaggi',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/quattro-formaggi.webp',
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'quattro stagioni',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/quattro-stagioni.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'tonno',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/tonno.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'vegetarian',
    description:
      'Sayt təqdimat məqsədi ilə hazırlanmışdır. Burada gördüyünüz məlumatlar hər hansı pizza restoranını təmsil etmir, sadəcə proqramçının portfoliosuna əlavə olunacaq.',
    image: '/vegetarian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'Çerri Pomidor',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'qarğıdalı',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'təzə pomidor',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'Jalapeno bibəri',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'Parmezan pendiri',
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return <section>
  
  <Banner />
   <div className="container mx-auto">
    <div className='lg:grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
      {pizzas.map((pizza, index) => {
        return <Pizza pizza={pizza} key={index} />
      })}
    </div>
   </div>

  </section>;
}
