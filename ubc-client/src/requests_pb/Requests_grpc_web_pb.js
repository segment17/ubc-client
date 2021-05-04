/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./Requests_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BoxerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BoxerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetBoxerWithStandingAndMatchesRequest,
 *   !proto.GetBoxerWithStandingAndMatchesResponse>}
 */
const methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches = new grpc.web.MethodDescriptor(
  '/BoxerService/GetBoxerWithStandingAndMatches',
  grpc.web.MethodType.UNARY,
  proto.GetBoxerWithStandingAndMatchesRequest,
  proto.GetBoxerWithStandingAndMatchesResponse,
  /**
   * @param {!proto.GetBoxerWithStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetBoxerWithStandingAndMatchesRequest,
 *   !proto.GetBoxerWithStandingAndMatchesResponse>}
 */
const methodInfo_BoxerService_GetBoxerWithStandingAndMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetBoxerWithStandingAndMatchesResponse,
  /**
   * @param {!proto.GetBoxerWithStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.GetBoxerWithStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetBoxerWithStandingAndMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetBoxerWithStandingAndMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BoxerServiceClient.prototype.getBoxerWithStandingAndMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BoxerService/GetBoxerWithStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches,
      callback);
};


/**
 * @param {!proto.GetBoxerWithStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetBoxerWithStandingAndMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.BoxerServicePromiseClient.prototype.getBoxerWithStandingAndMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BoxerService/GetBoxerWithStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.FrontendServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.FrontendServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoginRequest,
 *   !proto.LoginResponse>}
 */
const methodDescriptor_FrontendService_Login = new grpc.web.MethodDescriptor(
  '/FrontendService/Login',
  grpc.web.MethodType.UNARY,
  proto.LoginRequest,
  proto.LoginResponse,
  /**
   * @param {!proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.LoginRequest,
 *   !proto.LoginResponse>}
 */
const methodInfo_FrontendService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.LoginResponse,
  /**
   * @param {!proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/Login',
      request,
      metadata || {},
      methodDescriptor_FrontendService_Login,
      callback);
};


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/Login',
      request,
      metadata || {},
      methodDescriptor_FrontendService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Null,
 *   !proto.GetAllBoxersResponse>}
 */
const methodDescriptor_FrontendService_GetAllBoxers = new grpc.web.MethodDescriptor(
  '/FrontendService/GetAllBoxers',
  grpc.web.MethodType.UNARY,
  proto.Null,
  proto.GetAllBoxersResponse,
  /**
   * @param {!proto.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllBoxersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Null,
 *   !proto.GetAllBoxersResponse>}
 */
const methodInfo_FrontendService_GetAllBoxers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAllBoxersResponse,
  /**
   * @param {!proto.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllBoxersResponse.deserializeBinary
);


/**
 * @param {!proto.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAllBoxersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllBoxersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.getAllBoxers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/GetAllBoxers',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllBoxers,
      callback);
};


/**
 * @param {!proto.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllBoxersResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.getAllBoxers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/GetAllBoxers',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllBoxers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddBoxerRequest,
 *   !proto.AddBoxerResponse>}
 */
const methodDescriptor_FrontendService_AddBoxer = new grpc.web.MethodDescriptor(
  '/FrontendService/AddBoxer',
  grpc.web.MethodType.UNARY,
  proto.AddBoxerRequest,
  proto.AddBoxerResponse,
  /**
   * @param {!proto.AddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddBoxerRequest,
 *   !proto.AddBoxerResponse>}
 */
const methodInfo_FrontendService_AddBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AddBoxerResponse,
  /**
   * @param {!proto.AddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.AddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.addBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/AddBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddBoxer,
      callback);
};


/**
 * @param {!proto.AddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.addBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/AddBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveBoxerRequest,
 *   !proto.RemoveBoxerResponse>}
 */
const methodDescriptor_FrontendService_RemoveBoxer = new grpc.web.MethodDescriptor(
  '/FrontendService/RemoveBoxer',
  grpc.web.MethodType.UNARY,
  proto.RemoveBoxerRequest,
  proto.RemoveBoxerResponse,
  /**
   * @param {!proto.RemoveBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveBoxerRequest,
 *   !proto.RemoveBoxerResponse>}
 */
const methodInfo_FrontendService_RemoveBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RemoveBoxerResponse,
  /**
   * @param {!proto.RemoveBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.removeBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/RemoveBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveBoxer,
      callback);
};


/**
 * @param {!proto.RemoveBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.removeBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/RemoveBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EditBoxerRequest,
 *   !proto.EditBoxerResponse>}
 */
const methodDescriptor_FrontendService_EditBoxer = new grpc.web.MethodDescriptor(
  '/FrontendService/EditBoxer',
  grpc.web.MethodType.UNARY,
  proto.EditBoxerRequest,
  proto.EditBoxerResponse,
  /**
   * @param {!proto.EditBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EditBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EditBoxerRequest,
 *   !proto.EditBoxerResponse>}
 */
const methodInfo_FrontendService_EditBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EditBoxerResponse,
  /**
   * @param {!proto.EditBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EditBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.EditBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EditBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EditBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.editBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/EditBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_EditBoxer,
      callback);
};


/**
 * @param {!proto.EditBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EditBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.editBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/EditBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_EditBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Null,
 *   !proto.GetAllMatchesResponse>}
 */
const methodDescriptor_FrontendService_GetAllMatches = new grpc.web.MethodDescriptor(
  '/FrontendService/GetAllMatches',
  grpc.web.MethodType.UNARY,
  proto.Null,
  proto.GetAllMatchesResponse,
  /**
   * @param {!proto.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Null,
 *   !proto.GetAllMatchesResponse>}
 */
const methodInfo_FrontendService_GetAllMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAllMatchesResponse,
  /**
   * @param {!proto.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAllMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.getAllMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/GetAllMatches',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllMatches,
      callback);
};


/**
 * @param {!proto.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.getAllMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/GetAllMatches',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddMatchRequest,
 *   !proto.AddMatchResponse>}
 */
const methodDescriptor_FrontendService_AddMatch = new grpc.web.MethodDescriptor(
  '/FrontendService/AddMatch',
  grpc.web.MethodType.UNARY,
  proto.AddMatchRequest,
  proto.AddMatchResponse,
  /**
   * @param {!proto.AddMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddMatchRequest,
 *   !proto.AddMatchResponse>}
 */
const methodInfo_FrontendService_AddMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AddMatchResponse,
  /**
   * @param {!proto.AddMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddMatchResponse.deserializeBinary
);


/**
 * @param {!proto.AddMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AddMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.addMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/AddMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddMatch,
      callback);
};


/**
 * @param {!proto.AddMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddMatchResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.addMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/AddMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveMatchRequest,
 *   !proto.RemoveMatchResponse>}
 */
const methodDescriptor_FrontendService_RemoveMatch = new grpc.web.MethodDescriptor(
  '/FrontendService/RemoveMatch',
  grpc.web.MethodType.UNARY,
  proto.RemoveMatchRequest,
  proto.RemoveMatchResponse,
  /**
   * @param {!proto.RemoveMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveMatchRequest,
 *   !proto.RemoveMatchResponse>}
 */
const methodInfo_FrontendService_RemoveMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RemoveMatchResponse,
  /**
   * @param {!proto.RemoveMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveMatchResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.removeMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/RemoveMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveMatch,
      callback);
};


/**
 * @param {!proto.RemoveMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveMatchResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.removeMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/RemoveMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateMatchRequest,
 *   !proto.UpdateMatchResponse>}
 */
const methodDescriptor_FrontendService_UpdateMatch = new grpc.web.MethodDescriptor(
  '/FrontendService/UpdateMatch',
  grpc.web.MethodType.UNARY,
  proto.UpdateMatchRequest,
  proto.UpdateMatchResponse,
  /**
   * @param {!proto.UpdateMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateMatchRequest,
 *   !proto.UpdateMatchResponse>}
 */
const methodInfo_FrontendService_UpdateMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateMatchResponse,
  /**
   * @param {!proto.UpdateMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateMatchResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.updateMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/UpdateMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_UpdateMatch,
      callback);
};


/**
 * @param {!proto.UpdateMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateMatchResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.updateMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/UpdateMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_UpdateMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Null,
 *   !proto.GetAllStandingsResponse>}
 */
const methodDescriptor_FrontendService_GetAllStandings = new grpc.web.MethodDescriptor(
  '/FrontendService/GetAllStandings',
  grpc.web.MethodType.UNARY,
  proto.Null,
  proto.GetAllStandingsResponse,
  /**
   * @param {!proto.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllStandingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Null,
 *   !proto.GetAllStandingsResponse>}
 */
const methodInfo_FrontendService_GetAllStandings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAllStandingsResponse,
  /**
   * @param {!proto.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllStandingsResponse.deserializeBinary
);


/**
 * @param {!proto.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAllStandingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllStandingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FrontendServiceClient.prototype.getAllStandings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FrontendService/GetAllStandings',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllStandings,
      callback);
};


/**
 * @param {!proto.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllStandingsResponse>}
 *     Promise that resolves to the response
 */
proto.FrontendServicePromiseClient.prototype.getAllStandings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FrontendService/GetAllStandings',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllStandings);
};


module.exports = proto;

