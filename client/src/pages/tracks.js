import React from 'react';
import { Layout, QueryResult } from '../components';
import { useQuery,gql } from '@apollo/client'
import TrackCard from '../containers/track-card'
const TRACKS = gql`
query ExampleQuery {
  tracksForHome {
    id
    title
    author {
      id
    }
    thumbnail
    length
  }
}
`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 * <Layout grid>{JSON.stringify(data)}</Layout>;
 */
const Tracks = () => {
  const {loading,error,data}=useQuery(TRACKS)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return(<Layout grid><QueryResult error={error} loading={loading} data={data}>
    {data?.tracksForHome?.map(track => (
      <TrackCard key={track.id} track={track} />
    ))}
  </QueryResult> </Layout>) 
};

export default Tracks;
