import * as jspb from 'google-protobuf'



export class Null extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Null.AsObject;
  static toObject(includeInstance: boolean, msg: Null): Null.AsObject;
  static serializeBinaryToWriter(message: Null, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Null;
  static deserializeBinaryFromReader(message: Null, reader: jspb.BinaryReader): Null;
}

export namespace Null {
  export type AsObject = {
  }
}

export class Boxer extends jspb.Message {
  getId(): number;
  setId(value: number): Boxer;

  getFullname(): string;
  setFullname(value: string): Boxer;

  getBirthdate(): number;
  setBirthdate(value: number): Boxer;

  getHeight(): number;
  setHeight(value: number): Boxer;

  getWeight(): number;
  setWeight(value: number): Boxer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Boxer.AsObject;
  static toObject(includeInstance: boolean, msg: Boxer): Boxer.AsObject;
  static serializeBinaryToWriter(message: Boxer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Boxer;
  static deserializeBinaryFromReader(message: Boxer, reader: jspb.BinaryReader): Boxer;
}

export namespace Boxer {
  export type AsObject = {
    id: number,
    fullname: string,
    birthdate: number,
    height: number,
    weight: number,
  }
}

export class Match extends jspb.Message {
  getId(): number;
  setId(value: number): Match;

  getHomeboxer(): Boxer | undefined;
  setHomeboxer(value?: Boxer): Match;
  hasHomeboxer(): boolean;
  clearHomeboxer(): Match;

  getAwayboxer(): Boxer | undefined;
  setAwayboxer(value?: Boxer): Match;
  hasAwayboxer(): boolean;
  clearAwayboxer(): Match;

  getMatchtime(): number;
  setMatchtime(value: number): Match;

  getIsfinished(): boolean;
  setIsfinished(value: boolean): Match;

  getWinnerboxer(): Boxer | undefined;
  setWinnerboxer(value?: Boxer): Match;
  hasWinnerboxer(): boolean;
  clearWinnerboxer(): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    id: number,
    homeboxer?: Boxer.AsObject,
    awayboxer?: Boxer.AsObject,
    matchtime: number,
    isfinished: boolean,
    winnerboxer?: Boxer.AsObject,
  }
}

export class Standing extends jspb.Message {
  getBoxer(): Boxer | undefined;
  setBoxer(value?: Boxer): Standing;
  hasBoxer(): boolean;
  clearBoxer(): Standing;

  getWincount(): number;
  setWincount(value: number): Standing;

  getLosscount(): number;
  setLosscount(value: number): Standing;

  getScore(): number;
  setScore(value: number): Standing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Standing.AsObject;
  static toObject(includeInstance: boolean, msg: Standing): Standing.AsObject;
  static serializeBinaryToWriter(message: Standing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Standing;
  static deserializeBinaryFromReader(message: Standing, reader: jspb.BinaryReader): Standing;
}

export namespace Standing {
  export type AsObject = {
    boxer?: Boxer.AsObject,
    wincount: number,
    losscount: number,
    score: number,
  }
}

export class StandingAndMatches extends jspb.Message {
  getStanding(): Standing | undefined;
  setStanding(value?: Standing): StandingAndMatches;
  hasStanding(): boolean;
  clearStanding(): StandingAndMatches;

  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): StandingAndMatches;
  clearMatchesList(): StandingAndMatches;
  addMatches(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandingAndMatches.AsObject;
  static toObject(includeInstance: boolean, msg: StandingAndMatches): StandingAndMatches.AsObject;
  static serializeBinaryToWriter(message: StandingAndMatches, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandingAndMatches;
  static deserializeBinaryFromReader(message: StandingAndMatches, reader: jspb.BinaryReader): StandingAndMatches;
}

export namespace StandingAndMatches {
  export type AsObject = {
    standing?: Standing.AsObject,
    matchesList: Array<Match.AsObject>,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): LoginResponse;

  getMessage(): string;
  setMessage(value: string): LoginResponse;

  getToken(): string;
  setToken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    code: number,
    message: string,
    token: string,
  }
}

export class GetAllBoxersResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): GetAllBoxersResponse;

  getMessage(): string;
  setMessage(value: string): GetAllBoxersResponse;

  getBoxersList(): Array<Boxer>;
  setBoxersList(value: Array<Boxer>): GetAllBoxersResponse;
  clearBoxersList(): GetAllBoxersResponse;
  addBoxers(value?: Boxer, index?: number): Boxer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllBoxersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllBoxersResponse): GetAllBoxersResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllBoxersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllBoxersResponse;
  static deserializeBinaryFromReader(message: GetAllBoxersResponse, reader: jspb.BinaryReader): GetAllBoxersResponse;
}

export namespace GetAllBoxersResponse {
  export type AsObject = {
    code: number,
    message: string,
    boxersList: Array<Boxer.AsObject>,
  }
}

export class GetBoxerWithStandingAndMatchesRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetBoxerWithStandingAndMatchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoxerWithStandingAndMatchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoxerWithStandingAndMatchesRequest): GetBoxerWithStandingAndMatchesRequest.AsObject;
  static serializeBinaryToWriter(message: GetBoxerWithStandingAndMatchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoxerWithStandingAndMatchesRequest;
  static deserializeBinaryFromReader(message: GetBoxerWithStandingAndMatchesRequest, reader: jspb.BinaryReader): GetBoxerWithStandingAndMatchesRequest;
}

export namespace GetBoxerWithStandingAndMatchesRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetBoxerWithStandingAndMatchesResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): GetBoxerWithStandingAndMatchesResponse;

  getMessage(): string;
  setMessage(value: string): GetBoxerWithStandingAndMatchesResponse;

  getBoxer(): Boxer | undefined;
  setBoxer(value?: Boxer): GetBoxerWithStandingAndMatchesResponse;
  hasBoxer(): boolean;
  clearBoxer(): GetBoxerWithStandingAndMatchesResponse;

  getStandingandmatches(): StandingAndMatches | undefined;
  setStandingandmatches(value?: StandingAndMatches): GetBoxerWithStandingAndMatchesResponse;
  hasStandingandmatches(): boolean;
  clearStandingandmatches(): GetBoxerWithStandingAndMatchesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoxerWithStandingAndMatchesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoxerWithStandingAndMatchesResponse): GetBoxerWithStandingAndMatchesResponse.AsObject;
  static serializeBinaryToWriter(message: GetBoxerWithStandingAndMatchesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoxerWithStandingAndMatchesResponse;
  static deserializeBinaryFromReader(message: GetBoxerWithStandingAndMatchesResponse, reader: jspb.BinaryReader): GetBoxerWithStandingAndMatchesResponse;
}

export namespace GetBoxerWithStandingAndMatchesResponse {
  export type AsObject = {
    code: number,
    message: string,
    boxer?: Boxer.AsObject,
    standingandmatches?: StandingAndMatches.AsObject,
  }
}

export class EditBoxerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): EditBoxerRequest;

  getFullname(): string;
  setFullname(value: string): EditBoxerRequest;

  getBirthdate(): number;
  setBirthdate(value: number): EditBoxerRequest;

  getHeight(): number;
  setHeight(value: number): EditBoxerRequest;

  getWeight(): number;
  setWeight(value: number): EditBoxerRequest;

  getToken(): string;
  setToken(value: string): EditBoxerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditBoxerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditBoxerRequest): EditBoxerRequest.AsObject;
  static serializeBinaryToWriter(message: EditBoxerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditBoxerRequest;
  static deserializeBinaryFromReader(message: EditBoxerRequest, reader: jspb.BinaryReader): EditBoxerRequest;
}

export namespace EditBoxerRequest {
  export type AsObject = {
    id: number,
    fullname: string,
    birthdate: number,
    height: number,
    weight: number,
    token: string,
  }
}

export class EditBoxerResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): EditBoxerResponse;

  getMessage(): string;
  setMessage(value: string): EditBoxerResponse;

  getBoxer(): Boxer | undefined;
  setBoxer(value?: Boxer): EditBoxerResponse;
  hasBoxer(): boolean;
  clearBoxer(): EditBoxerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditBoxerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditBoxerResponse): EditBoxerResponse.AsObject;
  static serializeBinaryToWriter(message: EditBoxerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditBoxerResponse;
  static deserializeBinaryFromReader(message: EditBoxerResponse, reader: jspb.BinaryReader): EditBoxerResponse;
}

export namespace EditBoxerResponse {
  export type AsObject = {
    code: number,
    message: string,
    boxer?: Boxer.AsObject,
  }
}

export class AddBoxerRequest extends jspb.Message {
  getFullname(): string;
  setFullname(value: string): AddBoxerRequest;

  getBirthdate(): number;
  setBirthdate(value: number): AddBoxerRequest;

  getHeight(): number;
  setHeight(value: number): AddBoxerRequest;

  getWeight(): number;
  setWeight(value: number): AddBoxerRequest;

  getToken(): string;
  setToken(value: string): AddBoxerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBoxerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBoxerRequest): AddBoxerRequest.AsObject;
  static serializeBinaryToWriter(message: AddBoxerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBoxerRequest;
  static deserializeBinaryFromReader(message: AddBoxerRequest, reader: jspb.BinaryReader): AddBoxerRequest;
}

export namespace AddBoxerRequest {
  export type AsObject = {
    fullname: string,
    birthdate: number,
    height: number,
    weight: number,
    token: string,
  }
}

export class AddBoxerResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): AddBoxerResponse;

  getMessage(): string;
  setMessage(value: string): AddBoxerResponse;

  getBoxer(): Boxer | undefined;
  setBoxer(value?: Boxer): AddBoxerResponse;
  hasBoxer(): boolean;
  clearBoxer(): AddBoxerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBoxerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBoxerResponse): AddBoxerResponse.AsObject;
  static serializeBinaryToWriter(message: AddBoxerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBoxerResponse;
  static deserializeBinaryFromReader(message: AddBoxerResponse, reader: jspb.BinaryReader): AddBoxerResponse;
}

export namespace AddBoxerResponse {
  export type AsObject = {
    code: number,
    message: string,
    boxer?: Boxer.AsObject,
  }
}

export class RemoveBoxerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RemoveBoxerRequest;

  getToken(): string;
  setToken(value: string): RemoveBoxerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBoxerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBoxerRequest): RemoveBoxerRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveBoxerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBoxerRequest;
  static deserializeBinaryFromReader(message: RemoveBoxerRequest, reader: jspb.BinaryReader): RemoveBoxerRequest;
}

export namespace RemoveBoxerRequest {
  export type AsObject = {
    id: number,
    token: string,
  }
}

export class RemoveBoxerResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): RemoveBoxerResponse;

  getMessage(): string;
  setMessage(value: string): RemoveBoxerResponse;

  getBoxer(): Boxer | undefined;
  setBoxer(value?: Boxer): RemoveBoxerResponse;
  hasBoxer(): boolean;
  clearBoxer(): RemoveBoxerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBoxerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBoxerResponse): RemoveBoxerResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveBoxerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBoxerResponse;
  static deserializeBinaryFromReader(message: RemoveBoxerResponse, reader: jspb.BinaryReader): RemoveBoxerResponse;
}

export namespace RemoveBoxerResponse {
  export type AsObject = {
    code: number,
    message: string,
    boxer?: Boxer.AsObject,
  }
}

export class GetAllStandingsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): GetAllStandingsResponse;

  getMessage(): string;
  setMessage(value: string): GetAllStandingsResponse;

  getStandingsList(): Array<Standing>;
  setStandingsList(value: Array<Standing>): GetAllStandingsResponse;
  clearStandingsList(): GetAllStandingsResponse;
  addStandings(value?: Standing, index?: number): Standing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStandingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStandingsResponse): GetAllStandingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllStandingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStandingsResponse;
  static deserializeBinaryFromReader(message: GetAllStandingsResponse, reader: jspb.BinaryReader): GetAllStandingsResponse;
}

export namespace GetAllStandingsResponse {
  export type AsObject = {
    code: number,
    message: string,
    standingsList: Array<Standing.AsObject>,
  }
}

export class GetAllMatchesResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): GetAllMatchesResponse;

  getMessage(): string;
  setMessage(value: string): GetAllMatchesResponse;

  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): GetAllMatchesResponse;
  clearMatchesList(): GetAllMatchesResponse;
  addMatches(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMatchesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMatchesResponse): GetAllMatchesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllMatchesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMatchesResponse;
  static deserializeBinaryFromReader(message: GetAllMatchesResponse, reader: jspb.BinaryReader): GetAllMatchesResponse;
}

export namespace GetAllMatchesResponse {
  export type AsObject = {
    code: number,
    message: string,
    matchesList: Array<Match.AsObject>,
  }
}

export class AddMatchRequest extends jspb.Message {
  getHomeboxerid(): number;
  setHomeboxerid(value: number): AddMatchRequest;

  getAwayboxerid(): number;
  setAwayboxerid(value: number): AddMatchRequest;

  getMatchtime(): number;
  setMatchtime(value: number): AddMatchRequest;

  getIsfinished(): boolean;
  setIsfinished(value: boolean): AddMatchRequest;

  getWinnerboxerid(): number;
  setWinnerboxerid(value: number): AddMatchRequest;

  getToken(): string;
  setToken(value: string): AddMatchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddMatchRequest): AddMatchRequest.AsObject;
  static serializeBinaryToWriter(message: AddMatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMatchRequest;
  static deserializeBinaryFromReader(message: AddMatchRequest, reader: jspb.BinaryReader): AddMatchRequest;
}

export namespace AddMatchRequest {
  export type AsObject = {
    homeboxerid: number,
    awayboxerid: number,
    matchtime: number,
    isfinished: boolean,
    winnerboxerid: number,
    token: string,
  }
}

export class AddMatchResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): AddMatchResponse;

  getMessage(): string;
  setMessage(value: string): AddMatchResponse;

  getMatch(): Match | undefined;
  setMatch(value?: Match): AddMatchResponse;
  hasMatch(): boolean;
  clearMatch(): AddMatchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddMatchResponse): AddMatchResponse.AsObject;
  static serializeBinaryToWriter(message: AddMatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMatchResponse;
  static deserializeBinaryFromReader(message: AddMatchResponse, reader: jspb.BinaryReader): AddMatchResponse;
}

export namespace AddMatchResponse {
  export type AsObject = {
    code: number,
    message: string,
    match?: Match.AsObject,
  }
}

export class RemoveMatchRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RemoveMatchRequest;

  getToken(): string;
  setToken(value: string): RemoveMatchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMatchRequest): RemoveMatchRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMatchRequest;
  static deserializeBinaryFromReader(message: RemoveMatchRequest, reader: jspb.BinaryReader): RemoveMatchRequest;
}

export namespace RemoveMatchRequest {
  export type AsObject = {
    id: number,
    token: string,
  }
}

export class RemoveMatchResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): RemoveMatchResponse;

  getMessage(): string;
  setMessage(value: string): RemoveMatchResponse;

  getMatch(): Match | undefined;
  setMatch(value?: Match): RemoveMatchResponse;
  hasMatch(): boolean;
  clearMatch(): RemoveMatchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMatchResponse): RemoveMatchResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveMatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMatchResponse;
  static deserializeBinaryFromReader(message: RemoveMatchResponse, reader: jspb.BinaryReader): RemoveMatchResponse;
}

export namespace RemoveMatchResponse {
  export type AsObject = {
    code: number,
    message: string,
    match?: Match.AsObject,
  }
}

export class UpdateMatchRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateMatchRequest;

  getHomeboxer(): Boxer | undefined;
  setHomeboxer(value?: Boxer): UpdateMatchRequest;
  hasHomeboxer(): boolean;
  clearHomeboxer(): UpdateMatchRequest;

  getAwayboxer(): Boxer | undefined;
  setAwayboxer(value?: Boxer): UpdateMatchRequest;
  hasAwayboxer(): boolean;
  clearAwayboxer(): UpdateMatchRequest;

  getMatchtime(): number;
  setMatchtime(value: number): UpdateMatchRequest;

  getIsfinished(): boolean;
  setIsfinished(value: boolean): UpdateMatchRequest;

  getWinnerboxerid(): number;
  setWinnerboxerid(value: number): UpdateMatchRequest;

  getToken(): string;
  setToken(value: string): UpdateMatchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMatchRequest): UpdateMatchRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMatchRequest;
  static deserializeBinaryFromReader(message: UpdateMatchRequest, reader: jspb.BinaryReader): UpdateMatchRequest;
}

export namespace UpdateMatchRequest {
  export type AsObject = {
    id: number,
    homeboxer?: Boxer.AsObject,
    awayboxer?: Boxer.AsObject,
    matchtime: number,
    isfinished: boolean,
    winnerboxerid: number,
    token: string,
  }
}

export class UpdateMatchResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): UpdateMatchResponse;

  getMessage(): string;
  setMessage(value: string): UpdateMatchResponse;

  getMatch(): Match | undefined;
  setMatch(value?: Match): UpdateMatchResponse;
  hasMatch(): boolean;
  clearMatch(): UpdateMatchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMatchResponse): UpdateMatchResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMatchResponse;
  static deserializeBinaryFromReader(message: UpdateMatchResponse, reader: jspb.BinaryReader): UpdateMatchResponse;
}

export namespace UpdateMatchResponse {
  export type AsObject = {
    code: number,
    message: string,
    match?: Match.AsObject,
  }
}

