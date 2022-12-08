import topRole from '../assets/Roles/Position_Gold-Top.png';
import midRole from '../assets/Roles/Position_Gold-Mid.png';
import jungleRole from '../assets/Roles/Position_Gold-Jungle.png';
import adcRole from '../assets/Roles/Position_Gold-Bot.png';
import supportRole from '../assets/Roles/Position_Gold-Support.png';

export const getRoleIcon = (role) => {
    if (role.toLowerCase() === 'top') {
        return topRole;
    }
    if (role.toLowerCase() === 'mid') {
        return midRole;
    }
    if (role.toLowerCase() === 'jungle') {
        return jungleRole;
    }
    if (role.toLowerCase() === 'adc') {
        return adcRole;
    }
    if (role.toLowerCase() === 'support') {
        return supportRole;
    }
}