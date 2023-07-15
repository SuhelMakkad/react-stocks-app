import ThemeToggle from "@/components/theme-toggle";
import { stockNewsList } from "@/assets/data/stock-news";
import { Separator } from "@/components/ui/separator";

const PortfolioPage = () => {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex gap-2 justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Latest News</h1>
          <p className="text-sm text-muted-foreground">
            Get the latest news related to stock market
          </p>
        </div>

        <ThemeToggle />
      </div>

      <ul className="flex flex-col mt-8">
        {stockNewsList.map((news) => (
          <li key={news.id}>
            <article className="flex gap-2">
              <img src={news.imgUrl} className="border shrink-0 w-24 h-16 object-cover rounded" />
              <h4 className="">{news.title}</h4>
            </article>

            <Separator className="my-5" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;
