import PropTypes from 'prop-types';
import { StatisticsContainer, StatsList, StatsTitle, StatsItem, StatsLabel, StatsPercentage } from './Statistics.styled';


export const Statistics =({ title, stats }) => {
    return (
        <StatisticsContainer>
        {title && <StatsTitle>{title}</StatsTitle>}

        <StatsList>
            {stats.map(stat => {
                return  <StatsItem key={stat.id}>
                <StatsLabel>{stat.label}</StatsLabel>
                <StatsPercentage>{stat.percentage}%</StatsPercentage>
                </StatsItem>
            })}
        </StatsList>
        </StatisticsContainer>

    )
}

Statistics.prototype = { 
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired

};
