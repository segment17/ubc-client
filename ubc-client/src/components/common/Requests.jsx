export const Login = async (username, password) => { // AuthService
	const LoginResponse = {code: 200};
	return LoginResponse;
}
export const GetAllBoxers = async () => { // BoxerService
	const GetAllBoxersResponse = null;
	return GetAllBoxersResponse;
}
export const GetBoxerWithStandingAndMatches = async (int) => { // BoxerService
	const GetBoxerWithStandingAndMatchesResponse = 
  {
    code: 200,
    message: "success",
    boxer: {
      id: 1,
      fullName: "Mike Tyson",
      birthDate: 127419968,
      height: 178,
      weight: 100
    },
    standingAndMatches: {
      standing: {
        winCount: 1,
        lossCount: 1,
        score: 0.5
      },
      matches: [
        {
          id: 1,
          homeBoxer: {
            id: 1,
            fullName: "Mike Tyson",
            birthDate: 127419968, // Timestamp
            height: 178,
            weight: 100
          },
          awayBoxer: {
            id: 4,
            fullName: "Connor McGregor",
            birthDate: 127419968, // Timestamp
            height: 175,
            weight: 80
          },
          matchTime: 127419968,
          isFinished: true,
          winnerBoxer: {
            id: 4,
            fullName: "Connor McGregor",
            birthDate: 127419968, // Timestamp
            height: 175,
            weight: 80
          }
        },
        {
          id: 1,
          awayBoxer: {
            id: 1,
            fullName: "Mike Tyson",
            birthDate: 127419968, // Timestamp
            height: 178,
            weight: 100
          },
          homeBoxer: {
            id: 6,
            fullName: "Logan Paul",
            birthDate: 127419968, // Timestamp
            height: 195,
            weight: 120
          },
          matchTime: 127419968,
          isFinished: true,
          winnerBoxer: {
            id: 1,
            fullName: "Mike Tyson",
            birthDate: 127419968, // Timestamp
            height: 178,
            weight: 100
          }
        },
        {
          id: 1,
          awayBoxer: {
            id: 1,
            fullName: "Mike Tyson",
            birthDate: 127419968, // Timestamp
            height: 178,
            weight: 100
          },
          homeBoxer: {
            id: 8,
            fullName: "Dwayne \"The Rock\" Johnson",
            birthDate: 127419968, // Timestamp
            height: 196,
            weight: 118
          },
          matchTime: 129419968,
          isFinished: false
        }
      ]
    }
  };
	return GetBoxerWithStandingAndMatchesResponse;
}
export const AddBoxer = async (fullName, birthDate, height, weight, token) => { // BoxerService
	const AddBoxerResponse = null;
	return AddBoxerResponse;
}
export const RemoveBoxer = async (id, token) => { // BoxerService
	const RemoveBoxerResponse = null;
	return RemoveBoxerResponse;
}
export const EditBoxer = async (id, fullName, birthDate, height, weight, token) => { // BoxerService
	const EditBoxerResponse = null;
	return EditBoxerResponse;
}
export const GetAllMatches = async () => { // MatchService
	const GetAllMatchesResponse = null;
	return GetAllMatchesResponse;
}
export const AddMatch = async (homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token) => { // MatchService
	const AddMatchResponse = null;
	return AddMatchResponse;
}
export const RemoveMatch = async (id, token) => { // MatchService
	const RemoveMatchResponse = null;
	return RemoveMatchResponse;
}
export const UpdateMatch = async (id, homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token) => { // MatchService
	const UpdateMatchResponse = null;
	return UpdateMatchResponse;
}
export const GetAllStandings = async () => { // StandingsService
	const GetAllStandingsResponse = null;
	return GetAllStandingsResponse;
}