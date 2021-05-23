import { GetBoxerWithStandingAndMatchesRequest, LoginRequest } from '../../requests_pb/Requests_pb';
import { BoxerServiceClient, AuthServiceClient } from '../../requests_pb/Requests_grpc_web_pb';

export default class Requests {
  constructor() {
    this.client = new BoxerServiceClient('');
    this.authServiceClient = new AuthServiceClient('');
  }
  GetBoxerWithStandingAndMatches = async (username, password) => { // AuthService
    const req = new LoginRequest();
    req.setUsername('test-password');
    req.setPassword('test-password-1234');
    const x = this.authServiceClient.login(req, {}, (err, res) => {
      console.log('auth err: ', err);
      console.log('auth res: ', res);
    })
    return x;
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
  Login = async (arg) => { // BoxerService
    console.log('arg: ', arg);
    const int = parseInt(arg.slice(1), 10);
    console.log('int: ', int);
    let getBoxerWithStandingAndMatchesRequest = new GetBoxerWithStandingAndMatchesRequest();
    getBoxerWithStandingAndMatchesRequest.setId(int);
    const GetBoxerWithStandingAndMatchesResponse = this.client.getBoxerWithStandingAndMatches(getBoxerWithStandingAndMatchesRequest, {}, 
      (err, res) => {
        console.log('err: ', err);
        console.log('res: ', res);
        console.log(err);
        console.log(res);
    });
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