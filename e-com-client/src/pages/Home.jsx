import React from "react";

const offers = [
  {
    name: "Download the app",
    description: "Get an exclusive $5 off code",
    href: "#",
  },
  {
    name: "Return when you're ready",
    description: "60 days of free returns",
    href: "#",
  },
  {
    name: "Sign up for our newsletter",
    description: "15% off your first order",
    href: "#",
  },
];
const trendingProducts = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];
const collections = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers" className="order-last lg:order-first">
          <div className="max-w-7xl mx-auto lg:px-8">
            <ul
              role="list"
              className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
            >
              {offers.map((offer) => (
                <li key={offer.name} className="flex flex-col">
                  <a
                    href={offer.href}
                    className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">{offer.name}</p>
                    <p className="font-semibold text-gray-900">
                      {offer.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden absolute w-1/2 h-full bg-gray-100 lg:block"
          />
          <div className="relative bg-gray-100 lg:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
              <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                <div className="lg:pr-16">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    Focus on what matters
                  </h1>
                  <p className="mt-4 text-xl text-gray-600">
                    All the charts, datepickers, and notifications in the world
                    can't beat checking off some items on a paper card.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
                    >
                      Shop Productivity
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>

      {/* Trending products */}
      <section aria-labelledby="trending-heading" className="bg-white">
        <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
          <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <h2
              id="trending-heading"
              className="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              Trending products
            </h2>
            <a
              href="#"
              className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-8 relative">
            <div className="relative w-full overflow-x-auto">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
              >
                {trendingProducts.map((product) => (
                  <li
                    key={product.id}
                    className="w-64 inline-flex flex-col text-center lg:w-auto"
                  >
                    <div className="group relative">
                      <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                      </div>
                    </div>

                    <h4 className="sr-only">Available colors</h4>
                    <ul
                      role="list"
                      className="mt-auto pt-6 flex items-center justify-center space-x-3"
                    >
                      {product.availableColors.map((color) => (
                        <li
                          key={color.name}
                          className="w-4 h-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: color.colorBg }}
                        >
                          <span className="sr-only">{color.name}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 px-4 sm:hidden">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section aria-labelledby="collections-heading" className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2
              id="collections-heading"
              className="text-2xl font-extrabold text-gray-900"
            >
              Collections
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {collections.map((collection) => (
                <div key={collection.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {collection.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sale and testimonials */}
      <div className="relative overflow-hidden">
        {/* Decorative background image and gradient */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        {/* Sale */}
        <section
          aria-labelledby="sale-heading"
          className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <h2
              id="sale-heading"
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our one-time sale
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
              Most of our products are limited releases that won't come back.
              Get your favorite items while they're in stock.
            </p>
            <a
              href="#"
              className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
            >
              Get access to our one-time sale
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section
          aria-labelledby="testimonial-heading"
          className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8"
        >
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <h2
              id="testimonial-heading"
              className="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              What are people saying?
            </h2>

            <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.id} className="sm:flex lg:block">
                  <svg
                    width={24}
                    height={18}
                    viewBox="0 0 24 18"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="flex-shrink-0 text-gray-300"
                  >
                    <path
                      d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                    <p className="text-lg text-gray-600">{testimonial.quote}</p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      {testimonial.attribution}
                    </cite>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
