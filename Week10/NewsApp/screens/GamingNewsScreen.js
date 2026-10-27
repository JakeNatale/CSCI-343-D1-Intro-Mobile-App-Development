import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

export default function GamingNewsScreen() {
  const type = "Gaming";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.category === type;
  });

  return <List items={displayedNews} />;
}
