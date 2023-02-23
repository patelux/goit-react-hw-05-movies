import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
display: block;
border-bottom: 1px solid ${props => props.theme.colors.dark};
@include tablet {
  display: flex;
  justify-content: center;
  gap: 16px;

`;

export const ReviewWrapper = styled.div`
margin-top: 20px;
width: 100wv;
display: flex;
justify-content: center;
text-align: center;
gap: 20px;
border-bottom: 1px solid ${props => props.theme.colors.dark};
@include tablet {
  display: flex;
  gap: 16px;
`;

export const MovieDescription = styled.div`
  widht: 100%;
  display: block;
  
  @include tablet {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  @include desktop {
    display: flex;
    justify-content: center;
    gap: 16px;
    gap: 16px;
`;

export const Poster = styled.div`
margin: 0 auto;
min-width: 240px;
min-height: 360px;
overflow: hidden;
border-radius: 5px;
`;

export const Image = styled.img`
width: 340px;
object-fit: contain;
margin: 0 auto 20px;
`;

export const InfoContainer = styled.div`
margin: 0 auto;
min-width: 240px;
min-height: 360px;
overflow: hidden;
border-radius: 5px;
`;
export const MovieTitle = styled.h1`
  margin: 0 0 20px 0;
  font-size: 28px;
  line-height: calc(23 / 20);
  color: #000000;
  text-transform: uppercase;
  text-align: center;
`;

export const MovieInfoList = styled.ul`
margin: 0 0 1rem 0;
font-size: 24px;
letter-spacing: 0.5px;
color: #333;
margin: 0;
`;

export const MovieInfoListEl = styled.li`
display: flex;
`;

export const MovieInfoListItem = styled.p`
  width: 30%;
  line-height: calc(16 / 12);
  font-weight: bold;
  color: #8c8c8c;
  @media screen and (min-width: 450px) {
    width: 30%;
  }
`;

export const MovieInfoListValue = styled.p`
  width: 70%;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: calc(14 / 12);
  color: #000000;
  @media screen and (min-width: 450px) {
    width: 70%;
  }
`;

export const MovieOverviewTitle = styled.p`
font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin: 20px 0;
`;

export const MovieOverview = styled.p`
font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(20 / 12);
  color: #000000;
  margin-bottom: 60px;
`;


export const MovieDate = styled.p`
margin: 0 0 1rem 0;
font-size: 1.25rem;
color: #999;
margin: 0;
`;

export const UserScore = styled.p`
margin: 0 0 1rem 0;
font-size: 1.25rem;
color: #999;
margin: 0;
`;



export const MovieGenres = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: #999;
  margin: 0;
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

export const BtnBackToPrevious = styled.button`
margin-top: 1rem;
padding: 0;
width: 160px;
height: 44px;

font-family: inherit;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.33;
color: ${props => props.theme.colors.primary};

align-items: center;
text-align: center;
text-transform: uppercase;

border: 1px solid #ffffff;
border-radius: 5px;
background-color: transparent;


cursor: pointer;

&:hover,
&:focus,
&:active {
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  box-shadow: (0px 8px 43px rgba(255, 107, 1, 0.6));
  border-style: none;
}
@include tablet {
  width: 125px;
}

@include desktop {
  width: 136px;
}
`;

export const GeneralsectionTitle = styled.p`
font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin: 20px 0;
`;
