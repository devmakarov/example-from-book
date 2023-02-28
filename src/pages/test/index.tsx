import { InferGetServerSidePropsType } from 'next';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const TestPage = ({
  title,
}: PublicOrganizationPageProps) => {
  return <div>{title}</div>;
};

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'Fake title',
    },
  };
};

export default TestPage;
