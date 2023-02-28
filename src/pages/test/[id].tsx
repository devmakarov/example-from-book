import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const TestByIdPage = ({
  title,
}: PublicOrganizationPageProps) => {
  return <div>{title}</div>;
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  return {
    props: {
      title: `Fake title ${params?.id}`,
    },
  };
};

export default TestByIdPage;
