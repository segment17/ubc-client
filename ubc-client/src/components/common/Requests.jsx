import { GetBoxerWithStandingAndMatchesRequest } from '../../requests_pb/Requests_pb';
import { FrontendServiceClient } from '../../requests_pb/Requests_grpc_web_pb';

export default class Requests {
  constructor() {
    this.client = new FrontendServiceClient('http://localhost:8000');
  }
  Login = async (username, password) => { // AuthService
    const LoginResponse = {code: 200};
    return LoginResponse;
  }
  GetAllBoxers = async () => { // BoxerService
    const GetAllBoxersResponse = {
      code: 200,
      boxers: [
        {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968,
          height: 178,
          weight: 100,
        },
        {
          id: 4,
          fullName: "Connor McGregor",
          birthDate: 127419968,
          height: 175,
          weight: 80,
        },
        {
          id: 6,
          fullName: "Logan Paul",
          birthDate: 127419968,
          height: 195,
          weight: 120,
        },
        {
          id: 8,
          fullName: 'Dwayne "The Rock" Johnson',
          birthDate: 127419968,
          height: 196,
          weight: 118,
        }
      ]
    };
    return GetAllBoxersResponse;
  }
  GetBoxerWithStandingAndMatches = async (int) => { // BoxerService
    const GetBoxerWithStandingAndMatchesResponse = this.client.getBoxerWithStandingAndMatches(GetBoxerWithStandingAndMatchesRequest, {int});

    /* const GetBoxerWithStandingAndMatchesResponse = 
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
    }; */
    return GetBoxerWithStandingAndMatchesResponse;
  }
  AddBoxer = async (fullName, birthDate, height, weight, token) => { // BoxerService
    const AddBoxerResponse = null;
    return AddBoxerResponse;
  }
  RemoveBoxer = async (id, token) => { // BoxerService
    const RemoveBoxerResponse = null;
    return RemoveBoxerResponse;
  }
  EditBoxer = async (id, fullName, birthDate, height, weight, token) => { // BoxerService
    const EditBoxerResponse = null;
    return EditBoxerResponse;
  }
  GetAllMatches = async () => { // MatchService
    const GetAllMatchesResponse = null;
    return GetAllMatchesResponse;
  }
  AddMatch = async (homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token) => { // MatchService
    const AddMatchResponse = null;
    return AddMatchResponse;
  }
  RemoveMatch = async (id, token) => { // MatchService
    const RemoveMatchResponse = null;
    return RemoveMatchResponse;
  }
  UpdateMatch = async (id, homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token) => { // MatchService
    const UpdateMatchResponse = null;
    return UpdateMatchResponse;
  }
  GetAllStandings = async () => { // StandingsService
    const GetAllStandingsResponse = null;
    return GetAllStandingsResponse;
  }
}