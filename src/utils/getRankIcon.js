import bronzeRank from '../assets/RankIcons/Emblem_Bronze.png';
import silverRank from '../assets/RankIcons/Emblem_Silver.png';
import goldRank from '../assets/RankIcons/Emblem_Gold.png';
import platinumRank from '../assets/RankIcons/Emblem_Platinum.png';
import diamondRank from '../assets/RankIcons/Emblem_Diamond.png';
import masterRank from '../assets/RankIcons/Emblem_Master.png';
import grandmasterRank from '../assets/RankIcons/Emblem_Grandmaster.png';
import challengerRank from '../assets/RankIcons/Emblem_Challenger.png';

export const getRankIcon = (rank) => {
    if (rank?.toLowerCase() === 'bronze') {
        return bronzeRank
    }
    if (rank?.toLowerCase() === 'silver') {
        return silverRank
    }
    if (rank?.toLowerCase() === 'gold') {
        return goldRank
    }
    if (rank?.toLowerCase() === 'platinum') {
        return platinumRank
    }
    if (rank?.toLowerCase() === 'diamond') {
        return diamondRank
    }
    if (rank?.toLowerCase() === 'master') {
        return masterRank
    }
    if (rank?.toLowerCase() === 'grandmaster') {
        return grandmasterRank
    }
    if (rank?.toLowerCase() === 'challenger') {
        return challengerRank
    }
};