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
    <header className="container mx-auto mb-8 px-10">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block ">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-white">
              CMS Blog
            </span>
          </Link>
        </div>
        <nav className="md:float-left md:contents hidden">
          {categories.map((category) => {
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>;
          })}
        </nav>
      </div>
    </header>
  );
};
export default Header;
