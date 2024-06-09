export default async function Images({
  searchParams,
}: {
  searchParams: { q: string; start: string };
}) {
  const url = `https://www.googleapis.com/customsearch/v1?fields=searchInformation,queries,items
    &key=${process.env.GOOGLE_SEARCH_ENGINE_KEY}&cx=${process.env.GOOGLE_SEARCH_ID}&q=${searchParams.q}&start=${searchParams.start}&searchType=image`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <div className="container py-4  mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.items?.map(
        (
          item: {
            link: string;
            image: { height: number; width: number };
            title: string;
          },
          i: React.Key | null | undefined
        ) => {
          return (
            <div key={i}>
              <img
                src={item.link}
                alt="image"
                loading="lazy"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          );
        }
      )}
    </div>
  );
}
