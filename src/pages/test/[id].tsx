import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

import { NotFound } from '@/components/not-found';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const TestByIdPage = ({
  title,
}: PublicOrganizationPageProps) => {
  if (!title) return <NotFound />;

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
