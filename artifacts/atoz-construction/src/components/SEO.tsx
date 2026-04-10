export function SEO({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title} | A to Z Construction NYC</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | A to Z Construction NYC`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}