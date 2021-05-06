/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for boxerservice_package
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.boxerservice_package = require('./Requests_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.boxerservice_package.BoxerServiceClient =
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
proto.boxerservice_package.BoxerServicePromiseClient =
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
 *   !proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest,
 *   !proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse>}
 */
const methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches = new grpc.web.MethodDescriptor(
  '/boxerservice_package.BoxerService/GetBoxerWithStandingAndMatches',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest,
  proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse,
  /**
   * @param {!proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest,
 *   !proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse>}
 */
const methodInfo_BoxerService_GetBoxerWithStandingAndMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse,
  /**
   * @param {!proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.BoxerServiceClient.prototype.getBoxerWithStandingAndMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.BoxerService/GetBoxerWithStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches,
      callback);
};


/**
 * @param {!proto.boxerservice_package.GetBoxerWithStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.GetBoxerWithStandingAndMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.BoxerServicePromiseClient.prototype.getBoxerWithStandingAndMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.BoxerService/GetBoxerWithStandingAndMatches',
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
proto.boxerservice_package.FrontendServiceClient =
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
proto.boxerservice_package.FrontendServicePromiseClient =
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
 *   !proto.boxerservice_package.LoginRequest,
 *   !proto.boxerservice_package.LoginResponse>}
 */
const methodDescriptor_FrontendService_Login = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/Login',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.LoginRequest,
  proto.boxerservice_package.LoginResponse,
  /**
   * @param {!proto.boxerservice_package.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.LoginRequest,
 *   !proto.boxerservice_package.LoginResponse>}
 */
const methodInfo_FrontendService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.LoginResponse,
  /**
   * @param {!proto.boxerservice_package.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/Login',
      request,
      metadata || {},
      methodDescriptor_FrontendService_Login,
      callback);
};


/**
 * @param {!proto.boxerservice_package.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/Login',
      request,
      metadata || {},
      methodDescriptor_FrontendService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.Null,
 *   !proto.boxerservice_package.GetAllBoxersResponse>}
 */
const methodDescriptor_FrontendService_GetAllBoxers = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/GetAllBoxers',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.Null,
  proto.boxerservice_package.GetAllBoxersResponse,
  /**
   * @param {!proto.boxerservice_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetAllBoxersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.Null,
 *   !proto.boxerservice_package.GetAllBoxersResponse>}
 */
const methodInfo_FrontendService_GetAllBoxers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.GetAllBoxersResponse,
  /**
   * @param {!proto.boxerservice_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetAllBoxersResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.GetAllBoxersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.GetAllBoxersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.getAllBoxers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/GetAllBoxers',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllBoxers,
      callback);
};


/**
 * @param {!proto.boxerservice_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.GetAllBoxersResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.getAllBoxers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/GetAllBoxers',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllBoxers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.AddBoxerRequest,
 *   !proto.boxerservice_package.AddBoxerResponse>}
 */
const methodDescriptor_FrontendService_AddBoxer = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/AddBoxer',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.AddBoxerRequest,
  proto.boxerservice_package.AddBoxerResponse,
  /**
   * @param {!proto.boxerservice_package.AddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.AddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.AddBoxerRequest,
 *   !proto.boxerservice_package.AddBoxerResponse>}
 */
const methodInfo_FrontendService_AddBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.AddBoxerResponse,
  /**
   * @param {!proto.boxerservice_package.AddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.AddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.AddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.AddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.AddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.addBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/AddBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddBoxer,
      callback);
};


/**
 * @param {!proto.boxerservice_package.AddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.AddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.addBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/AddBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.RemoveBoxerRequest,
 *   !proto.boxerservice_package.RemoveBoxerResponse>}
 */
const methodDescriptor_FrontendService_RemoveBoxer = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/RemoveBoxer',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.RemoveBoxerRequest,
  proto.boxerservice_package.RemoveBoxerResponse,
  /**
   * @param {!proto.boxerservice_package.RemoveBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.RemoveBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.RemoveBoxerRequest,
 *   !proto.boxerservice_package.RemoveBoxerResponse>}
 */
const methodInfo_FrontendService_RemoveBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.RemoveBoxerResponse,
  /**
   * @param {!proto.boxerservice_package.RemoveBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.RemoveBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.RemoveBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.RemoveBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.RemoveBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.removeBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/RemoveBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveBoxer,
      callback);
};


/**
 * @param {!proto.boxerservice_package.RemoveBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.RemoveBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.removeBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/RemoveBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.EditBoxerRequest,
 *   !proto.boxerservice_package.EditBoxerResponse>}
 */
const methodDescriptor_FrontendService_EditBoxer = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/EditBoxer',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.EditBoxerRequest,
  proto.boxerservice_package.EditBoxerResponse,
  /**
   * @param {!proto.boxerservice_package.EditBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.EditBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.EditBoxerRequest,
 *   !proto.boxerservice_package.EditBoxerResponse>}
 */
const methodInfo_FrontendService_EditBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.EditBoxerResponse,
  /**
   * @param {!proto.boxerservice_package.EditBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.EditBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.EditBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.EditBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.EditBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.editBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/EditBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_EditBoxer,
      callback);
};


/**
 * @param {!proto.boxerservice_package.EditBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.EditBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.editBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/EditBoxer',
      request,
      metadata || {},
      methodDescriptor_FrontendService_EditBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.Null,
 *   !proto.boxerservice_package.GetAllMatchesResponse>}
 */
const methodDescriptor_FrontendService_GetAllMatches = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/GetAllMatches',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.Null,
  proto.boxerservice_package.GetAllMatchesResponse,
  /**
   * @param {!proto.boxerservice_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetAllMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.Null,
 *   !proto.boxerservice_package.GetAllMatchesResponse>}
 */
const methodInfo_FrontendService_GetAllMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.GetAllMatchesResponse,
  /**
   * @param {!proto.boxerservice_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetAllMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.GetAllMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.GetAllMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.getAllMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/GetAllMatches',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllMatches,
      callback);
};


/**
 * @param {!proto.boxerservice_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.GetAllMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.getAllMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/GetAllMatches',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.AddMatchRequest,
 *   !proto.boxerservice_package.AddMatchResponse>}
 */
const methodDescriptor_FrontendService_AddMatch = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/AddMatch',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.AddMatchRequest,
  proto.boxerservice_package.AddMatchResponse,
  /**
   * @param {!proto.boxerservice_package.AddMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.AddMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.AddMatchRequest,
 *   !proto.boxerservice_package.AddMatchResponse>}
 */
const methodInfo_FrontendService_AddMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.AddMatchResponse,
  /**
   * @param {!proto.boxerservice_package.AddMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.AddMatchResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.AddMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.AddMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.AddMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.addMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/AddMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddMatch,
      callback);
};


/**
 * @param {!proto.boxerservice_package.AddMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.AddMatchResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.addMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/AddMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_AddMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.RemoveMatchRequest,
 *   !proto.boxerservice_package.RemoveMatchResponse>}
 */
const methodDescriptor_FrontendService_RemoveMatch = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/RemoveMatch',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.RemoveMatchRequest,
  proto.boxerservice_package.RemoveMatchResponse,
  /**
   * @param {!proto.boxerservice_package.RemoveMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.RemoveMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.RemoveMatchRequest,
 *   !proto.boxerservice_package.RemoveMatchResponse>}
 */
const methodInfo_FrontendService_RemoveMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.RemoveMatchResponse,
  /**
   * @param {!proto.boxerservice_package.RemoveMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.RemoveMatchResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.RemoveMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.RemoveMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.RemoveMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.removeMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/RemoveMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveMatch,
      callback);
};


/**
 * @param {!proto.boxerservice_package.RemoveMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.RemoveMatchResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.removeMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/RemoveMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_RemoveMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.UpdateMatchRequest,
 *   !proto.boxerservice_package.UpdateMatchResponse>}
 */
const methodDescriptor_FrontendService_UpdateMatch = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/UpdateMatch',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.UpdateMatchRequest,
  proto.boxerservice_package.UpdateMatchResponse,
  /**
   * @param {!proto.boxerservice_package.UpdateMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.UpdateMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.UpdateMatchRequest,
 *   !proto.boxerservice_package.UpdateMatchResponse>}
 */
const methodInfo_FrontendService_UpdateMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.UpdateMatchResponse,
  /**
   * @param {!proto.boxerservice_package.UpdateMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.UpdateMatchResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.UpdateMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.UpdateMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.UpdateMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.updateMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/UpdateMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_UpdateMatch,
      callback);
};


/**
 * @param {!proto.boxerservice_package.UpdateMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.UpdateMatchResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.updateMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/UpdateMatch',
      request,
      metadata || {},
      methodDescriptor_FrontendService_UpdateMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.boxerservice_package.Null,
 *   !proto.boxerservice_package.GetAllStandingsResponse>}
 */
const methodDescriptor_FrontendService_GetAllStandings = new grpc.web.MethodDescriptor(
  '/boxerservice_package.FrontendService/GetAllStandings',
  grpc.web.MethodType.UNARY,
  proto.boxerservice_package.Null,
  proto.boxerservice_package.GetAllStandingsResponse,
  /**
   * @param {!proto.boxerservice_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetAllStandingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.boxerservice_package.Null,
 *   !proto.boxerservice_package.GetAllStandingsResponse>}
 */
const methodInfo_FrontendService_GetAllStandings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.boxerservice_package.GetAllStandingsResponse,
  /**
   * @param {!proto.boxerservice_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.boxerservice_package.GetAllStandingsResponse.deserializeBinary
);


/**
 * @param {!proto.boxerservice_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.boxerservice_package.GetAllStandingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.boxerservice_package.GetAllStandingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.boxerservice_package.FrontendServiceClient.prototype.getAllStandings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/boxerservice_package.FrontendService/GetAllStandings',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllStandings,
      callback);
};


/**
 * @param {!proto.boxerservice_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.boxerservice_package.GetAllStandingsResponse>}
 *     Promise that resolves to the response
 */
proto.boxerservice_package.FrontendServicePromiseClient.prototype.getAllStandings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/boxerservice_package.FrontendService/GetAllStandings',
      request,
      metadata || {},
      methodDescriptor_FrontendService_GetAllStandings);
};


module.exports = proto.boxerservice_package;

