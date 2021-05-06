/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as Requests_pb from './Requests_pb';


export class FrontendServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.LoginResponse,
    (request: Requests_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.LoginResponse.deserializeBinary
  );

  login(
    request: Requests_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.LoginResponse>;

  login(
    request: Requests_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.LoginResponse>;

  login(
    request: Requests_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoGetAllBoxers = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.GetAllBoxersResponse,
    (request: Requests_pb.Null) => {
      return request.serializeBinary();
    },
    Requests_pb.GetAllBoxersResponse.deserializeBinary
  );

  getAllBoxers(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.GetAllBoxersResponse>;

  getAllBoxers(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.GetAllBoxersResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.GetAllBoxersResponse>;

  getAllBoxers(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.GetAllBoxersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/GetAllBoxers',
        request,
        metadata || {},
        this.methodInfoGetAllBoxers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/GetAllBoxers',
    request,
    metadata || {},
    this.methodInfoGetAllBoxers);
  }

  methodInfoGetBoxerWithStandingAndMatches = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.GetBoxerWithStandingAndMatchesResponse,
    (request: Requests_pb.GetBoxerWithStandingAndMatchesRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
  );

  getBoxerWithStandingAndMatches(
    request: Requests_pb.GetBoxerWithStandingAndMatchesRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.GetBoxerWithStandingAndMatchesResponse>;

  getBoxerWithStandingAndMatches(
    request: Requests_pb.GetBoxerWithStandingAndMatchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.GetBoxerWithStandingAndMatchesResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.GetBoxerWithStandingAndMatchesResponse>;

  getBoxerWithStandingAndMatches(
    request: Requests_pb.GetBoxerWithStandingAndMatchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.GetBoxerWithStandingAndMatchesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/GetBoxerWithStandingAndMatches',
        request,
        metadata || {},
        this.methodInfoGetBoxerWithStandingAndMatches,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/GetBoxerWithStandingAndMatches',
    request,
    metadata || {},
    this.methodInfoGetBoxerWithStandingAndMatches);
  }

  methodInfoAddBoxer = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.AddBoxerResponse,
    (request: Requests_pb.AddBoxerRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.AddBoxerResponse.deserializeBinary
  );

  addBoxer(
    request: Requests_pb.AddBoxerRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.AddBoxerResponse>;

  addBoxer(
    request: Requests_pb.AddBoxerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.AddBoxerResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.AddBoxerResponse>;

  addBoxer(
    request: Requests_pb.AddBoxerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.AddBoxerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/AddBoxer',
        request,
        metadata || {},
        this.methodInfoAddBoxer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/AddBoxer',
    request,
    metadata || {},
    this.methodInfoAddBoxer);
  }

  methodInfoRemoveBoxer = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.RemoveBoxerResponse,
    (request: Requests_pb.RemoveBoxerRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.RemoveBoxerResponse.deserializeBinary
  );

  removeBoxer(
    request: Requests_pb.RemoveBoxerRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.RemoveBoxerResponse>;

  removeBoxer(
    request: Requests_pb.RemoveBoxerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.RemoveBoxerResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.RemoveBoxerResponse>;

  removeBoxer(
    request: Requests_pb.RemoveBoxerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.RemoveBoxerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/RemoveBoxer',
        request,
        metadata || {},
        this.methodInfoRemoveBoxer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/RemoveBoxer',
    request,
    metadata || {},
    this.methodInfoRemoveBoxer);
  }

  methodInfoEditBoxer = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.EditBoxerResponse,
    (request: Requests_pb.EditBoxerRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.EditBoxerResponse.deserializeBinary
  );

  editBoxer(
    request: Requests_pb.EditBoxerRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.EditBoxerResponse>;

  editBoxer(
    request: Requests_pb.EditBoxerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.EditBoxerResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.EditBoxerResponse>;

  editBoxer(
    request: Requests_pb.EditBoxerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.EditBoxerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/EditBoxer',
        request,
        metadata || {},
        this.methodInfoEditBoxer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/EditBoxer',
    request,
    metadata || {},
    this.methodInfoEditBoxer);
  }

  methodInfoGetAllMatches = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.GetAllMatchesResponse,
    (request: Requests_pb.Null) => {
      return request.serializeBinary();
    },
    Requests_pb.GetAllMatchesResponse.deserializeBinary
  );

  getAllMatches(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.GetAllMatchesResponse>;

  getAllMatches(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.GetAllMatchesResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.GetAllMatchesResponse>;

  getAllMatches(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.GetAllMatchesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/GetAllMatches',
        request,
        metadata || {},
        this.methodInfoGetAllMatches,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/GetAllMatches',
    request,
    metadata || {},
    this.methodInfoGetAllMatches);
  }

  methodInfoAddMatch = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.AddMatchResponse,
    (request: Requests_pb.AddMatchRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.AddMatchResponse.deserializeBinary
  );

  addMatch(
    request: Requests_pb.AddMatchRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.AddMatchResponse>;

  addMatch(
    request: Requests_pb.AddMatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.AddMatchResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.AddMatchResponse>;

  addMatch(
    request: Requests_pb.AddMatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.AddMatchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/AddMatch',
        request,
        metadata || {},
        this.methodInfoAddMatch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/AddMatch',
    request,
    metadata || {},
    this.methodInfoAddMatch);
  }

  methodInfoRemoveMatch = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.RemoveMatchResponse,
    (request: Requests_pb.RemoveMatchRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.RemoveMatchResponse.deserializeBinary
  );

  removeMatch(
    request: Requests_pb.RemoveMatchRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.RemoveMatchResponse>;

  removeMatch(
    request: Requests_pb.RemoveMatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.RemoveMatchResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.RemoveMatchResponse>;

  removeMatch(
    request: Requests_pb.RemoveMatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.RemoveMatchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/RemoveMatch',
        request,
        metadata || {},
        this.methodInfoRemoveMatch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/RemoveMatch',
    request,
    metadata || {},
    this.methodInfoRemoveMatch);
  }

  methodInfoUpdateMatch = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.UpdateMatchResponse,
    (request: Requests_pb.UpdateMatchRequest) => {
      return request.serializeBinary();
    },
    Requests_pb.UpdateMatchResponse.deserializeBinary
  );

  updateMatch(
    request: Requests_pb.UpdateMatchRequest,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.UpdateMatchResponse>;

  updateMatch(
    request: Requests_pb.UpdateMatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.UpdateMatchResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.UpdateMatchResponse>;

  updateMatch(
    request: Requests_pb.UpdateMatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.UpdateMatchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/UpdateMatch',
        request,
        metadata || {},
        this.methodInfoUpdateMatch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/UpdateMatch',
    request,
    metadata || {},
    this.methodInfoUpdateMatch);
  }

  methodInfoGetAllStandings = new grpcWeb.AbstractClientBase.MethodInfo(
    Requests_pb.GetAllStandingsResponse,
    (request: Requests_pb.Null) => {
      return request.serializeBinary();
    },
    Requests_pb.GetAllStandingsResponse.deserializeBinary
  );

  getAllStandings(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null): Promise<Requests_pb.GetAllStandingsResponse>;

  getAllStandings(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Requests_pb.GetAllStandingsResponse) => void): grpcWeb.ClientReadableStream<Requests_pb.GetAllStandingsResponse>;

  getAllStandings(
    request: Requests_pb.Null,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Requests_pb.GetAllStandingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/FrontendService/GetAllStandings',
        request,
        metadata || {},
        this.methodInfoGetAllStandings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/FrontendService/GetAllStandings',
    request,
    metadata || {},
    this.methodInfoGetAllStandings);
  }

}

