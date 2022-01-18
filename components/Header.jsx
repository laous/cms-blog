import { useContext } from "react";
import Link from "next/link";
const Header = () => {
  const categories = [
    {
      name: "Categorie",
      slug: "categorie-1",
    },
    {
      name: "Categorie",
      slug: "categorie-2",
    },
    {
      name: "Categorie",
      slug: "categorie-3",
    },
    {
      name: "Categorie",
      slug: "categorie-4",
    },
  ];
  return (
    <header className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Graph CMS
            </span>
          </Link>
        </div>
        <nav className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
