import {
  Container,
  Section
} from 'components';

export const Movies = () => {
<Section>
<Container>
  <h2>Country</h2>
</Container>
</Section>
};

// import {
//   Container,
//   SearchForm,
//   Section,
//   Heading,
//   Loader,
//   CountryList,
// } from 'components';
// import { useState, useEffect } from 'react';
// import { fetchByRegion } from 'service/country-service';

// export const Movies = () => {
  // const [query, setQuery] = useState('');
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   if (!query) return;
  //   fetchByRegion(query).then(data => setCountries(data));
  // }, [query]);
  
  // const handleSubmit = q => {
  //   setQuery(q);
  // };
  // return (
  //   <Section>
  //     <Container>
  //       <SearchForm onSubmit={handleSubmit} />
  //       {countries.length > 0 && <CountryList countries={countries} />}
  //     </Container>
  //   </Section>
  // );
// };
