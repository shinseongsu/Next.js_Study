import css from 'styled-jsx/css';
import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile';

const name = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <Profile user={user} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;

  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      user = await userRes.json();
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=updated&page=1&perpage=10`
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }
    console.log(repos);
    return { props: { user, repos } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;
