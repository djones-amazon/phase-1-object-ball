const gameObject = function () {

    const homeTeamName = `Brooklyn Nets`;
    const homeTeamColors = [`Black`, `White`];
    const awayTeamName = `Charlotte Hornets`;
    const awayTeamColors = [`Turquoise`, `Purple`];

    const gameLog = {
        home:{            
            teamName: homeTeamName,
            colors: [...homeTeamColors],
            players: {
                "Alan Anderson": {
                    number: `0`,
                    shoe: `16`,
                    points: `22`,
                    rebounds: `12`,
                    assists: `12`,
                    steals: `3`,
                    blocks: `1`,
                    slamDunks: `1`, 
                },
                "Reggie Evans": {
                    number: `30`,
                    shoe: `14`,
                    points: `12`,
                    rebounds: `12`,
                    assists: `12`,
                    steals: `12`,
                    blocks: `12`,
                    slamDunks: `7`, 
                },
                "Brook Lopez": {
                    number: `11`,
                    shoe: `17`,
                    points: `17`,
                    rebounds: `19`,
                    assists: `10`,
                    steals: `3`,
                    blocks: `1`,
                    slamDunks: `15`, 
                },
                "Mason Plumlee": {
                    number: `1`,
                    shoe: `19`,
                    points: `26`,
                    rebounds: `12`,
                    assists: `6`,
                    steals: `3`,
                    blocks: `8`,
                    slamDunks: `5`, 
                },
                "Jason Terry": {
                    number: `31`,
                    shoe: `15`,
                    points: `19`,
                    rebounds: `2`,
                    assists: `2`,
                    steals: `4`,
                    blocks: `11`,
                    slamDunks: `1`, 
                    
                }
            }
        },
        away: {
            teamName: awayTeamName,
            colors: [...awayTeamColors],
            players: {
                "Jeff Adrien": {
                    number: `4`,
                    shoe: `18`,
                    points: `10`,
                    rebounds: `1`,
                    assists: `1`,
                    steals: `2`,
                    blocks: `7`,
                    slamDunks: `2`, 
                },
            
                "Bismak Biyombo": {
                    number: `0`,
                    shoe: `16`,
                    points: `12`,
                    rebounds: `4`,
                    assists: `7`,
                    steals: `7`,
                    blocks: `15`,
                    slamDunks: `10`, 
                },
            
                "DeSanga Diop": {
                    number: `2`,
                    shoe: `14`,
                    points: `24`,
                    rebounds: `12`,
                    assists: `12`,
                    steals: `4`,
                    blocks: `5`,
                    slamDunks: `5`, 
                },
            
                "Ben Gordon": {
                    number: `8`,
                    shoe: `15`,
                    points: `33`,
                    rebounds: `3`,
                    assists: `2`,
                    steals: `1`,
                    blocks: `1`,
                    slamDunks: `0`, 
                },
            
            
                "Brendan Haywood": {
                    number: `33`,
                    shoe: `15`,
                    points: `6`,
                    rebounds: `12`,
                    assists: `12`,
                    steals: `22`,
                    blocks: `5`,
                    slamDunks: `12`, 
                }
            }

        }
    };
    
    return gameLog;
}
    //console.log(gameObject());
   

const numPointsScored = function (playerName) {
    const gameLog = gameObject();
    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            let data = teamObj.players;
            debugger;
            for (let key in data) {
                debugger;
                if (key === playerName) {
                debugger;
                let selectedPlayer  = teamObj.players[playerName];
                debugger;
                for (let statKey in selectedPlayer) {
                    debugger;
                    if (statKey === "points") {
                        let playerScore = selectedPlayer[statKey];
                        debugger;
                        return playerScore;
                    }                    
                }
                }
            }
        }
    }
}
//console.log(numPointsScored("Jason Terry"));
const shoeSize = function (playerName) {
    const gameLog = gameObject();
    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            let data = teamObj.players;
            debugger;
            for (let key in data) {
                debugger;
                if (key === playerName) {
                debugger;
                let selectedPlayer  = teamObj.players[playerName];
                debugger;
                for (let statKey in selectedPlayer) {
                    debugger;
                    if (statKey === "shoe") {
                        let playerScore = selectedPlayer[statKey];
                        debugger;
                        return playerScore;
                    }                    
                }
                }
            }
        }
    }
}

const teamColors = function (targetTeam) {
    const gameLog = gameObject();
    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            if (teamKey === "teamName") {
                debugger;
                let teamNameKey = teamObj[teamKey];
                if (teamNameKey === targetTeam) {
                    debugger;
                    let targetTeamColors = teamObj.colors;
                    debugger;
                    return targetTeamColors;
                }
            }
        }
    }
}
//teamColors ("Charlotte Hornets");

const teamNames = function () {
    const gameLog = gameObject();
    const gameTeams = [`Home`, `Away`];
    let indexNum = 0;

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            if (teamKey === "teamName") {
                debugger;
                gameTeams[indexNum] = teamObj[teamKey];
                debugger;
                indexNum++;
                debugger;
            }
        }
    }
    return gameTeams;
}
//teamNames();
const playerNumbers = function (targetTeam) {
    const gameLog = gameObject();
    const teamPlayers = ["Player1", "Player2", "Player3", "Player4", "Player5"];
    let indexNum = 0;

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            if (teamKey === "teamName") {
                debugger;
                let teamNameKey = teamObj[teamKey];
                debugger;
                if (teamNameKey === targetTeam) {
                    debugger;
                    let playersObj = teamObj.players;
                    debugger;
                    for (let playerKey in playersObj) {
                        debugger;
                        let selectedPlayer = playersObj[playerKey];
                        debugger;
                        teamPlayers[indexNum] = selectedPlayer.number;
                        debugger;
                        indexNum++;
                        debugger;
                        if (indexNum > 4) {
                            debugger;
                            return teamPlayers;
                       }
                    }
                }
            }
        }
    }
}
//playerNumbers("Brooklyn Nets");

const playerStats = function (playerName) {
    const gameLog = gameObject();
    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            let data = teamObj.players;
            debugger;
            for (let key in data) {
                debugger;
                if (key === playerName) {
                debugger;
                let selectedPlayer  = teamObj.players[playerName];
                debugger;
                return selectedPlayer;
                }
            }
        }
    }
}
//console.log(playerStats("Alan Anderson"));
const bigShoeRebounds = function () {
    const gameLog = gameObject();
    const teamPlayers = ["PlayerH1", "PlayerH2", "PlayerH3", "PlayerH4", "PlayerH5", "PlayerA1", "PlayerA2", "PlayerA3", "PlayerA4", "PlayerA5"];
    //const rebTotals = ["PlayerH1", "PlayerH2", "PlayerH3", "PlayerH4", "PlayerH5", "PlayerA1", "PlayerA2", "PlayerA3", "PlayerA4", "PlayerA5"];
    let indexNum = 0;
    let biggestShoeIndex = 0;
    let biggestShoeSize = 0;

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        let playersObj = teamObj.players;
        debugger;
        for (let playerKey in playersObj) {
            debugger;
            let keyName = playersObj[playerKey];
            let shoeKey = keyName.shoe;
            debugger;
            teamPlayers[indexNum] = keyName;
            debugger;
            if (shoeKey > biggestShoeSize) {
                debugger;
                biggestShoeSize = shoeKey;
                biggestShoeIndex = indexNum;
                debugger;
            }
            indexNum++;
            debugger;
        }
    }
    debugger;
    let biggestShoeRebounds = teamPlayers[biggestShoeIndex].rebounds;
    debugger;
    return biggestShoeRebounds; 
}
//console.log(bigShoeRebounds());
const mostPointsScored = function () {
    const gameLog = gameObject();
    const teamPlayers = ["PlayerH1", "PlayerH2", "PlayerH3", "PlayerH4", "PlayerH5", "PlayerA1", "PlayerA2", "PlayerA3", "PlayerA4", "PlayerA5"];
    let indexNum = 0;
    let mostPointsIndex = 0;
    let highScore = 0;
    let topPlayer = "PLAYER NAME";

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        let playersObj = teamObj.players;
        debugger;
        for (let playerKey in playersObj) {
            debugger;
            let keyName = playersObj[playerKey];
            let scoreKey = keyName.points;
            debugger;
            teamPlayers[indexNum] = keyName;
            debugger;
            if (parseInt(scoreKey) > parseInt(highScore)) {
                debugger;
                highScore = scoreKey;
                mostPointsIndex = indexNum;
                topPlayer = playerKey;
                debugger;
            }
            indexNum++;
            debugger;
        }
    }
    debugger;
    return topPlayer;
}

const winningTeam = function () {
    const gameLog = gameObject();
    //const teamHomeScore = ["Player1", "Player2", "Player3", "Player4", "Player5"];
    //const teamAwayScore = ["Player1", "Player2", "Player3", "Player4", "Player5"];
    let homeTotal = 0;
    let awayTotal = 0;

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            debugger;
            if (teamKey === "players") {
                let playersObj = teamObj[teamKey];
                for (let playerNamekey in playersObj) {
                    let selectedPlayerPoints = playersObj[playerNamekey].points;
                    if (teamObj.teamName === "Brooklyn Nets") {
                        debugger;
                        homeTotal = parseInt(homeTotal) + parseInt(selectedPlayerPoints);
                        debugger;
                    }   else {
                        debugger;
                        awayTotal = parseInt(awayTotal) + parseInt(selectedPlayerPoints);
                        }
                    }
                }
            }
    }    
    if (parseInt(homeTotal) > parseInt(awayTotal)) {
        debugger;
        return "Brooklyn Nets";
    }   else {
        debugger;    
        return "Charlotte Hornets"
        }
}
//winningTeam();
//mostPointsScored();
const playerWithLongestName = function () {
    const gameLog = gameObject();
    let longestName = "";
    let longestNameNum = 0;

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        let playersObj = teamObj.players;
        debugger;
        for (let playerKey in playersObj) {
            debugger;
            if (playerKey.length > longestName.length) {
                longestName = playerKey;
                debugger;
            }                        
        }    
    }    
    return (longestName);
}
console.log(playerWithLongestName());
const doesLongestNameStealATon = function () {
    const gameLog = gameObject();
    const longestNamedPlayer = playerWithLongestName();
    let mostStealsPlayer = "";
    let topStealsNum = 0;

    for (let gameKey in gameLog) {
        debugger;
        let teamObj = gameLog[gameKey];
        debugger;
        let playersObj = teamObj.players;
        debugger;
        for (let playerKey in playersObj) {
            debugger;
            let selectedPlayerKey = playersObj[playerKey];
            debugger;
            if (parseInt(selectedPlayerKey.steals) > parseInt(topStealsNum)) {
                topStealsNum = selectedPlayerKey.steals;
                mostStealsPlayer = playerKey;
                debugger;
            }
        }
    }
    debugger;
    return (longestNamedPlayer === mostStealsPlayer);
}
//console.log(doesLongestNameStealATon());