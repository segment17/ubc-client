import {
  AddBoxerRequest,
  AddMatchRequest,
  EditBoxerRequest,
  Empty,
  GetBoxerWithStandingAndMatchesRequest,
  GetMultipleBoxersRequest,
  LoginRequest,
  Null,
  RemoveBoxerRequest,
  RemoveMatchRequest,
  UpdateMatchRequest,
} from '../../requests_pb/Requests_pb';

import {
  AuthServiceClient,
  BoxerServiceClient,
  MatchServiceClient,
  StandingsServiceClient,
} from '../../requests_pb/Requests_grpc_web_pb';

export default class Requests {
  constructor() {
    this.authServiceClient = new AuthServiceClient('');
    this.boxerServiceClient = new BoxerServiceClient('');
    this.matchServiceClient = new MatchServiceClient('');
    this.standingsServiceClient = new StandingsServiceClient('');
  }

  Login = async (username, password) => { // AuthService
    const req = new LoginRequest();
    req.setUsername(username);
    req.setPassword(password);
    return new Promise((resolve, reject) => {
      this.authServiceClient.login(req, {}, async (err, res) => {
        // TODO :: handle err, and 403
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          token: res.getToken()
        });
      });
    });
  }

  GetMultipleBoxers = async (boxerIds) => { // BoxerService
    const req = new GetMultipleBoxersRequest();
    req.setIdsList(boxerIds);
    return new Promise((resolve, reject) => {
      this.boxerServiceClient.getMultipleBoxers(req, {}, async (err, res) => {
        console.log('GetMultipleBoxers err: ', err);
        console.log('GetMultipleBoxers res: ', res);
        const _boxers = res.getBoxersList();
        const boxers = _boxers.map(boxer => {
          return {
            id: boxer.getId(),
            fullName: boxer.getFullname(),
            birthDate: boxer.getBirthdate(),
            weight: boxer.getWeight(),
            height: boxer.getHeight(),
          };
        });
        // TODO :: handle err, and 403
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          boxers,
        });
      });
    });
  }

  GetAllBoxers = async () => { // BoxerService
    const req = new GetMultipleBoxersRequest();
    req.setIdsList([]);
    return new Promise((resolve, reject) => {
      this.boxerServiceClient.getMultipleBoxers(req, {}, async (err, res) => {
        console.log('GetAllBoxers err: ', err);
        console.log('GetAllBoxers res: ', res);
        const _boxers = res.getBoxersList();
        const boxers = _boxers.map(boxer => {
          return {
            id: boxer.getId(),
            fullName: boxer.getFullname(),
            birthDate: boxer.getBirthdate(),
            weight: boxer.getWeight(),
            height: boxer.getHeight(),
          };
        });
        // TODO :: handle err, and 403
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          boxers,
        });
      });
    });
  }

  GetBoxerWithStandingAndMatches = async (arg) => { // BoxerService
    const req = new GetBoxerWithStandingAndMatchesRequest();
    const boxerId = parseInt(arg.slice(1), 10);
    req.setId(boxerId);
    return new Promise((resolve, reject) => {
      this.boxerServiceClient.getBoxerWithStandingAndMatches(req, {}, async (err, res) => {
        console.log('err: ', err);
        console.log('res: ', res);
        const boxer = res.getBoxer();
        const standingAndMatches = res.getStandingandmatches();
        const standing = standingAndMatches.getStanding();
        // TODO :: handle err, and 403
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          standingAndMatches: {
            standing: {
              winCount: standing.getWincount(),
              lossCount: standing.getLosscount(),
              score: standing.getScore(),
            },
            matches: standingAndMatches.getMatchesList()
          },
          boxer: {
            id: boxer.getId(),
            fullName: boxer.getFullname(),
            birthDate: boxer.getBirthdate(),
            weight: boxer.getWeight(),
            height: boxer.getHeight(),
          }
        });
      });
    });
  }

  AddBoxer = async (fullName, birthDate, weight, height, token) => { // BoxerService
    console.log('addBoxer fullName, birthDate, height, weight, token: ', fullName, birthDate, height, weight, token);
    const req = new AddBoxerRequest();
    req.setFullname(fullName);
    req.setBirthdate(birthDate);
    req.setHeight(height);
    req.setWeight(weight);
    req.setToken(token);
    console.log('req: ', req);
    return new Promise((resolve, reject) => {
      this.boxerServiceClient.addBoxer(req, {}, async (err, res) => {
        console.log('addBoxer err: ', err);
        console.log('addBoxer res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          boxer: res.getBoxer()
        });
      });
    });
  }

  RemoveBoxer = async (id, token) => { // BoxerService
    const req = new RemoveBoxerRequest();
    req.setId(id);
    req.setToken(token);

    return new Promise((resolve, reject) => {
      this.boxerServiceClient.removeBoxer(req, {}, async (err, res) => {
        console.log('RemoveBoxer err: ', err);
        console.log('RemoveBoxer res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          boxer: res.getBoxer()
        });
      });
    });
  }

  EditBoxer = async (id, fullName, birthDate, weight, height, token) => { // BoxerService
    console.log('editboxer fullName, birthDate, height, weight, token: ', id, fullName, birthDate, height, weight, token);
    const req = new EditBoxerRequest();
    req.setId(id);
    req.setToken(token);

    if (fullName) {
      req.setFullname(fullName);
    }
    if (birthDate) {
      req.setBirthdate(birthDate);
    }
    if (height) {
      req.setHeight(height);
    }
    if (weight) {
      req.setWeight(weight);
    }

    return new Promise((resolve, reject) => {
      this.boxerServiceClient.editBoxer(req, {}, async (err, res) => {
        console.log('editBoxer err: ', err);
        console.log('editBoxer res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          boxer: res.getBoxer()
        });
      });
    });
  }

  GetAllMatches = async () => { // MatchService
    const req = new Empty();
    return new Promise((resolve, reject) => {
      this.matchServiceClient.getAllMatches(req, {}, async (err, res) => {
        console.log('GetAllMatches err: ', err);
        console.log('GetAllMatches res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          matches: res.getMatchesList()
        });
      });
    });
  }
  AddMatch = async (homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token) => { // MatchService
    console.log('homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token: ', homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token);
    const req = new AddMatchRequest();
    req.setHomeboxerid(homeBoxerId);
    req.setAwayboxerid(awayBoxerId);
    req.setMatchtime(matchTime);
    req.setIsfinished(isFinished);
    req.setToken(token);

    if (winnerBoxerId) {
      req.setWinnerboxerid(winnerBoxerId);
    }

    return new Promise((resolve, reject) => {
      this.matchServiceClient.addMatch(req, {}, async (err, res) => {
        console.log('AddMatch err: ', err);
        console.log('AddMatch res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
        });
      });
    });
  }
  RemoveMatch = async (id, token) => { // MatchService
    const req = new RemoveMatchRequest();
    req.setId(id);
    req.setToken(token);

    return new Promise((resolve, reject) => {
      this.matchServiceClient.removeMatch(req, {}, async (err, res) => {
        console.log('RemoveMatch err: ', err);
        console.log('RemoveMatch res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
        });
      });
    });
  }
  UpdateMatch = async (id, homeBoxerId, awayBoxerId, matchTime, isFinished, winnerBoxerId, token) => { // MatchService
    const req = new UpdateMatchRequest();
    req.setId(id);
    req.setToken(token);

    if (homeBoxerId) {
      req.setHomeboxerid(homeBoxerId);
    }
    if (awayBoxerId) {
      req.setAwayboxerid(awayBoxerId);
    }
    if (winnerBoxerId) {
      req.setWinnerboxerid(winnerBoxerId);
    }
    if (matchTime) {
      req.setMatchtime(matchTime);
    }
    if (isFinished) {
      req.setIsfinished(isFinished);
    }
    return new Promise((resolve, reject) => {
      this.matchServiceClient.updateMatch(req, {}, async (err, res) => {
        console.log('UpdateMatch err: ', err);
        console.log('UpdateMatch res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
        });
      });
    });
  }

  GetAllStandings = async () => { // StandingsService
    const req = new Null();
    return new Promise((resolve, reject) => {
      this.standingsServiceClient.getAllStandings(req, {}, async (err, res) => {
        console.log('GetAllStandings err: ', err);
        console.log('GetAllStandings res: ', res);
        // TODO :: handle err
        resolve({
          code: res.getCode(),
          message: res.getMessage(),
          standings: res.getStandingsList()
        });
      });
    });
  }
}