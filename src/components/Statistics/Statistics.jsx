import PropTypes from 'prop-types';
import { List, Item, Title, Percentage, Label } from './StyledStatistics';
import { Box } from '../Box';

export const Statistics = ({ stats, title = null }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mx="auto"
      pt={[6]}
      pb={[6]}
      width="400px"
      bg="background"
      as="section"
    >
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(element => {
          return (
            <Item key={element.id}>
              <Label>{element.label}</Label>
              <Percentage>{element.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
