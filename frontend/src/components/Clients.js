import { gql, useQuery } from "@apollo/client";

const GET_CLIENT = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENT);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return <>{!loading && !error && <div>Clients</div>}</>;
};

export default Clients;
