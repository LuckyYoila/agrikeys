import Head from "next/head";
interface MetaDataProps {
  page?: string;
}

const Meta = ({ page }: MetaDataProps) => {
    const title = `${page ? page : "Welcome"} | Agrikeys Services Limited`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Welcome to Agrikeys Services Limited." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default Meta;
