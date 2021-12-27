import MasterLayout from "../../components/hoc/landing/MasterLayout"
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, PlusSmIcon } from '@heroicons/react/solid'

const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {value: 'white', label: 'White'},
            {value: 'beige', label: 'Beige'},
            {value: 'blue', label: 'Blue'},
            {value: 'brown', label: 'Brown'},
            {value: 'green', label: 'Green'},
            {value: 'purple', label: 'Purple'},
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            {value: 'new-arrivals', label: 'All New Arrivals'},
            {value: 'tees', label: 'Tees'},
            {value: 'crewnecks', label: 'Crewnecks'},
            {value: 'sweatshirts', label: 'Sweatshirts'},
            {value: 'pants-shorts', label: 'Pants & Shorts'},
        ],
    },
    {
        id: 'sizes',
        name: 'Sizes',
        options: [
            {value: 'xs', label: 'XS'},
            {value: 's', label: 'S'},
            {value: 'm', label: 'M'},
            {value: 'l', label: 'L'},
            {value: 'xl', label: 'XL'},
            {value: '2xl', label: '2XL'},
        ],
    },
]
const products = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://picsum.photos/seed/1/600/400',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://picsum.photos/seed/2/600/400',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 3,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://picsum.photos/seed/3/600/400',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://picsum.photos/seed/4/600/400',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 5,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://picsum.photos/seed/5/600/400',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://picsum.photos/seed/6/600/400',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 7,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://picsum.photos/seed/7/600/400',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://picsum.photos/seed/8/600/400',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 5,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://picsum.photos/seed/5/600/400',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
]


const Index = () => {
    return (
        <MasterLayout opacity={100}>
            <main className="mt-8">
                <div className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8 bg-white">
                    <div className="border-b border-gray-200 pt-24 pb-10">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Event Listings</h1>
                        <p className="mt-4 text-base text-gray-500">
                            Checkout out all the upcoming events!
                        </p>
                    </div>

                    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>
                            <h2 className="sr-only">Filters</h2>

                            <button
                                type="button"
                                className="inline-flex items-center lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="text-sm font-medium text-gray-700">Filters</span>
                                <PlusSmIcon className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </button>

                            <div className="hidden lg:block">
                                <form className="divide-y divide-gray-200 space-y-10">
                                    {filters.map((section, sectionIdx) => (
                                        <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                                            <fieldset>
                                                <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                                                <div className="pt-6 space-y-3">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </fieldset>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </aside>

                        <section aria-labelledby="product-heading" className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                            <h2 id="product-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                                    >
                                        <div className="aspect-w-6 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none">
                                            <img
                                                src={`https://picsum.photos/seed/${Math.random()}/600/400`}
                                                alt={product.imageAlt}
                                                className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                            />
                                        </div>
                                        <div className="flex-1 p-4 space-y-2 flex flex-col">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0"/>
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div className="flex-1 flex flex-col justify-end">
                                                <p className="text-sm italic text-gray-500">{product.options}</p>
                                                <p className="text-base font-medium text-gray-900">{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mb-8">
                        <div className="-mt-px w-0 flex-1 flex">
                            <a
                                href="#"
                                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            >
                                <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                Previous
                            </a>
                        </div>
                        <div className="hidden md:-mt-px md:flex">
                            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                            <a
                                href="#"
                                className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                aria-current="page"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                2
                            </a>
                            <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                ...
                            </span>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                8
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                9
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                10
                            </a>
                        </div>
                        <div className="-mt-px w-0 flex-1 flex justify-end">
                            <a
                                href="#"
                                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            >
                                Next
                                <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </a>
                        </div>
                    </nav>

                </div>
            </main>
        </MasterLayout>
    )
}

export default Index
