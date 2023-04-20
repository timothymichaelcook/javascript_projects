const team = {
  _players: [
    {
      firstName: 'Michael',
      lastName: 'Jordan',
      age: 40
    },
    {
      firstName: 'Allen',
      lastName: 'Iverson',
      age: 30
    },
    {
      firstName: 'Kobe',
      lastName: 'Bryant',
      age: 20
    }
  ],
  _games: [
    {
      opponent: 'Bulls',
      teamPoints: 120,
      opponentPoints: 115
    },
    {
      opponent: '76ers',
      teamPoints: 110,
      opponentPoints: 105
    },
    {
      opponent: 'Lakes',
      teamPoints: 105,
      opponentPoints: 100
    }    
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 25);
console.log(team._players);
team.addGame('Suns', 100, 98);
console.log(team._games);