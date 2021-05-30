/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for ubc_package
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ubc_package = require('./Requests_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ubc_package.AuthServiceClient =
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
proto.ubc_package.AuthServicePromiseClient =
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
 *   !proto.ubc_package.LoginRequest,
 *   !proto.ubc_package.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/ubc_package.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.LoginRequest,
  proto.ubc_package.LoginResponse,
  /**
   * @param {!proto.ubc_package.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.LoginRequest,
 *   !proto.ubc_package.LoginResponse>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.LoginResponse,
  /**
   * @param {!proto.ubc_package.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.ubc_package.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.ValidateRequest,
 *   !proto.ubc_package.ValidateResponse>}
 */
const methodDescriptor_AuthService_Validate = new grpc.web.MethodDescriptor(
  '/ubc_package.AuthService/Validate',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.ValidateRequest,
  proto.ubc_package.ValidateResponse,
  /**
   * @param {!proto.ubc_package.ValidateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.ValidateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.ValidateRequest,
 *   !proto.ubc_package.ValidateResponse>}
 */
const methodInfo_AuthService_Validate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.ValidateResponse,
  /**
   * @param {!proto.ubc_package.ValidateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.ValidateResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.ValidateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.ValidateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.ValidateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.AuthServiceClient.prototype.validate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.AuthService/Validate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Validate,
      callback);
};


/**
 * @param {!proto.ubc_package.ValidateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.ValidateResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.AuthServicePromiseClient.prototype.validate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.AuthService/Validate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Validate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.Empty>}
 */
const methodDescriptor_AuthService_Mock = new grpc.web.MethodDescriptor(
  '/ubc_package.AuthService/Mock',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Empty,
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.Empty>}
 */
const methodInfo_AuthService_Mock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.AuthServiceClient.prototype.mock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.AuthService/Mock',
      request,
      metadata || {},
      methodDescriptor_AuthService_Mock,
      callback);
};


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Empty>}
 *     Promise that resolves to the response
 */
proto.ubc_package.AuthServicePromiseClient.prototype.mock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.AuthService/Mock',
      request,
      metadata || {},
      methodDescriptor_AuthService_Mock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.Empty>}
 */
const methodDescriptor_AuthService_EnterIntegratedTestingEnvironment = new grpc.web.MethodDescriptor(
  '/ubc_package.AuthService/EnterIntegratedTestingEnvironment',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Empty,
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.Empty>}
 */
const methodInfo_AuthService_EnterIntegratedTestingEnvironment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.AuthServiceClient.prototype.enterIntegratedTestingEnvironment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.AuthService/EnterIntegratedTestingEnvironment',
      request,
      metadata || {},
      methodDescriptor_AuthService_EnterIntegratedTestingEnvironment,
      callback);
};


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Empty>}
 *     Promise that resolves to the response
 */
proto.ubc_package.AuthServicePromiseClient.prototype.enterIntegratedTestingEnvironment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.AuthService/EnterIntegratedTestingEnvironment',
      request,
      metadata || {},
      methodDescriptor_AuthService_EnterIntegratedTestingEnvironment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddAdminRequest,
 *   !proto.ubc_package.Empty>}
 */
const methodDescriptor_AuthService_SetupAddAdmin = new grpc.web.MethodDescriptor(
  '/ubc_package.AuthService/SetupAddAdmin',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddAdminRequest,
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.SetupAddAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddAdminRequest,
 *   !proto.ubc_package.Empty>}
 */
const methodInfo_AuthService_SetupAddAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.SetupAddAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.AuthServiceClient.prototype.setupAddAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.AuthService/SetupAddAdmin',
      request,
      metadata || {},
      methodDescriptor_AuthService_SetupAddAdmin,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Empty>}
 *     Promise that resolves to the response
 */
proto.ubc_package.AuthServicePromiseClient.prototype.setupAddAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.AuthService/SetupAddAdmin',
      request,
      metadata || {},
      methodDescriptor_AuthService_SetupAddAdmin);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ubc_package.BoxerServiceClient =
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
proto.ubc_package.BoxerServicePromiseClient =
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
 *   !proto.ubc_package.GetBoxerRequest,
 *   !proto.ubc_package.GetBoxerResponse>}
 */
const methodDescriptor_BoxerService_GetBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/GetBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.GetBoxerRequest,
  proto.ubc_package.GetBoxerResponse,
  /**
   * @param {!proto.ubc_package.GetBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.GetBoxerRequest,
 *   !proto.ubc_package.GetBoxerResponse>}
 */
const methodInfo_BoxerService_GetBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetBoxerResponse,
  /**
   * @param {!proto.ubc_package.GetBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.GetBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.getBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/GetBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.GetBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.getBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/GetBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.GetMultipleBoxersRequest,
 *   !proto.ubc_package.GetMultipleBoxersResponse>}
 */
const methodDescriptor_BoxerService_GetMultipleBoxers = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/GetMultipleBoxers',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.GetMultipleBoxersRequest,
  proto.ubc_package.GetMultipleBoxersResponse,
  /**
   * @param {!proto.ubc_package.GetMultipleBoxersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetMultipleBoxersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.GetMultipleBoxersRequest,
 *   !proto.ubc_package.GetMultipleBoxersResponse>}
 */
const methodInfo_BoxerService_GetMultipleBoxers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetMultipleBoxersResponse,
  /**
   * @param {!proto.ubc_package.GetMultipleBoxersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetMultipleBoxersResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.GetMultipleBoxersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetMultipleBoxersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetMultipleBoxersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.getMultipleBoxers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/GetMultipleBoxers',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetMultipleBoxers,
      callback);
};


/**
 * @param {!proto.ubc_package.GetMultipleBoxersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetMultipleBoxersResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.getMultipleBoxers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/GetMultipleBoxers',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetMultipleBoxers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.GetBoxerWithStandingAndMatchesRequest,
 *   !proto.ubc_package.GetBoxerWithStandingAndMatchesResponse>}
 */
const methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/GetBoxerWithStandingAndMatches',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.GetBoxerWithStandingAndMatchesRequest,
  proto.ubc_package.GetBoxerWithStandingAndMatchesResponse,
  /**
   * @param {!proto.ubc_package.GetBoxerWithStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.GetBoxerWithStandingAndMatchesRequest,
 *   !proto.ubc_package.GetBoxerWithStandingAndMatchesResponse>}
 */
const methodInfo_BoxerService_GetBoxerWithStandingAndMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetBoxerWithStandingAndMatchesResponse,
  /**
   * @param {!proto.ubc_package.GetBoxerWithStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetBoxerWithStandingAndMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.GetBoxerWithStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetBoxerWithStandingAndMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetBoxerWithStandingAndMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.getBoxerWithStandingAndMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/GetBoxerWithStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches,
      callback);
};


/**
 * @param {!proto.ubc_package.GetBoxerWithStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetBoxerWithStandingAndMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.getBoxerWithStandingAndMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/GetBoxerWithStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_GetBoxerWithStandingAndMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.AddBoxerRequest,
 *   !proto.ubc_package.AddBoxerResponse>}
 */
const methodDescriptor_BoxerService_AddBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/AddBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.AddBoxerRequest,
  proto.ubc_package.AddBoxerResponse,
  /**
   * @param {!proto.ubc_package.AddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.AddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.AddBoxerRequest,
 *   !proto.ubc_package.AddBoxerResponse>}
 */
const methodInfo_BoxerService_AddBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.AddBoxerResponse,
  /**
   * @param {!proto.ubc_package.AddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.AddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.AddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.AddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.AddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.addBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/AddBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_AddBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.AddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.AddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.addBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/AddBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_AddBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.EditBoxerRequest,
 *   !proto.ubc_package.EditBoxerResponse>}
 */
const methodDescriptor_BoxerService_EditBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/EditBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.EditBoxerRequest,
  proto.ubc_package.EditBoxerResponse,
  /**
   * @param {!proto.ubc_package.EditBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.EditBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.EditBoxerRequest,
 *   !proto.ubc_package.EditBoxerResponse>}
 */
const methodInfo_BoxerService_EditBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.EditBoxerResponse,
  /**
   * @param {!proto.ubc_package.EditBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.EditBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.EditBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.EditBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.EditBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.editBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/EditBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_EditBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.EditBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.EditBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.editBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/EditBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_EditBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.RemoveBoxerRequest,
 *   !proto.ubc_package.RemoveBoxerResponse>}
 */
const methodDescriptor_BoxerService_RemoveBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/RemoveBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.RemoveBoxerRequest,
  proto.ubc_package.RemoveBoxerResponse,
  /**
   * @param {!proto.ubc_package.RemoveBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.RemoveBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.RemoveBoxerRequest,
 *   !proto.ubc_package.RemoveBoxerResponse>}
 */
const methodInfo_BoxerService_RemoveBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.RemoveBoxerResponse,
  /**
   * @param {!proto.ubc_package.RemoveBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.RemoveBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.RemoveBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.RemoveBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.RemoveBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.removeBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/RemoveBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_RemoveBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.RemoveBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.RemoveBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.removeBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/RemoveBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_RemoveBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.Null>}
 */
const methodDescriptor_BoxerService_Mock = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/Mock',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Null,
  proto.ubc_package.Null,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Null.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.Null>}
 */
const methodInfo_BoxerService_Mock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Null,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Null.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Null)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Null>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.mock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/Mock',
      request,
      metadata || {},
      methodDescriptor_BoxerService_Mock,
      callback);
};


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Null>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.mock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/Mock',
      request,
      metadata || {},
      methodDescriptor_BoxerService_Mock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.Null>}
 */
const methodDescriptor_BoxerService_EnterIntegratedTestingEnvironment = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/EnterIntegratedTestingEnvironment',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Null,
  proto.ubc_package.Null,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Null.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.Null>}
 */
const methodInfo_BoxerService_EnterIntegratedTestingEnvironment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Null,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Null.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Null)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Null>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.enterIntegratedTestingEnvironment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/EnterIntegratedTestingEnvironment',
      request,
      metadata || {},
      methodDescriptor_BoxerService_EnterIntegratedTestingEnvironment,
      callback);
};


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Null>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.enterIntegratedTestingEnvironment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/EnterIntegratedTestingEnvironment',
      request,
      metadata || {},
      methodDescriptor_BoxerService_EnterIntegratedTestingEnvironment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddBoxerRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodDescriptor_BoxerService_SetupAddBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/SetupAddBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddBoxerRequest,
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddBoxerRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodInfo_BoxerService_SetupAddBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.setupAddBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.setupAddBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddBoxerRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodDescriptor_BoxerService_SetupAddLatestBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/SetupAddLatestBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddBoxerRequest,
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddBoxerRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodInfo_BoxerService_SetupAddLatestBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.setupAddLatestBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddLatestBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddLatestBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.setupAddLatestBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddLatestBoxer',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddLatestBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.SetupClearBoxersResponse>}
 */
const methodDescriptor_BoxerService_SetupClearBoxers = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/SetupClearBoxers',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Null,
  proto.ubc_package.SetupClearBoxersResponse,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupClearBoxersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.SetupClearBoxersResponse>}
 */
const methodInfo_BoxerService_SetupClearBoxers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupClearBoxersResponse,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupClearBoxersResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupClearBoxersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupClearBoxersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.setupClearBoxers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupClearBoxers',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupClearBoxers,
      callback);
};


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupClearBoxersResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.setupClearBoxers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupClearBoxers',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupClearBoxers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddStandingAndMatchesRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodDescriptor_BoxerService_SetupAddStandingAndMatches = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/SetupAddStandingAndMatches',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddStandingAndMatchesRequest,
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddStandingAndMatchesRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodInfo_BoxerService_SetupAddStandingAndMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddStandingAndMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.setupAddStandingAndMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddStandingAndMatches,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddStandingAndMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.setupAddStandingAndMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddStandingAndMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddStandingAndMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddTokenRequest,
 *   !proto.ubc_package.SetupAddTokenResponse>}
 */
const methodDescriptor_BoxerService_SetupAddToken = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/SetupAddToken',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddTokenRequest,
  proto.ubc_package.SetupAddTokenResponse,
  /**
   * @param {!proto.ubc_package.SetupAddTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddTokenRequest,
 *   !proto.ubc_package.SetupAddTokenResponse>}
 */
const methodInfo_BoxerService_SetupAddToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddTokenResponse,
  /**
   * @param {!proto.ubc_package.SetupAddTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddTokenResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.setupAddToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddToken',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddToken,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddTokenResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.setupAddToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddToken',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddMatchesRequest,
 *   !proto.ubc_package.SetupAddMatchesResponse>}
 */
const methodDescriptor_BoxerService_SetupAddMatches = new grpc.web.MethodDescriptor(
  '/ubc_package.BoxerService/SetupAddMatches',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddMatchesRequest,
  proto.ubc_package.SetupAddMatchesResponse,
  /**
   * @param {!proto.ubc_package.SetupAddMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddMatchesRequest,
 *   !proto.ubc_package.SetupAddMatchesResponse>}
 */
const methodInfo_BoxerService_SetupAddMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddMatchesResponse,
  /**
   * @param {!proto.ubc_package.SetupAddMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.BoxerServiceClient.prototype.setupAddMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddMatches,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.BoxerServicePromiseClient.prototype.setupAddMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.BoxerService/SetupAddMatches',
      request,
      metadata || {},
      methodDescriptor_BoxerService_SetupAddMatches);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ubc_package.MatchServiceClient =
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
proto.ubc_package.MatchServicePromiseClient =
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
 *   !proto.ubc_package.AddMatchRequest,
 *   !proto.ubc_package.AddMatchResponse>}
 */
const methodDescriptor_MatchService_AddMatch = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/AddMatch',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.AddMatchRequest,
  proto.ubc_package.AddMatchResponse,
  /**
   * @param {!proto.ubc_package.AddMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.AddMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.AddMatchRequest,
 *   !proto.ubc_package.AddMatchResponse>}
 */
const methodInfo_MatchService_AddMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.AddMatchResponse,
  /**
   * @param {!proto.ubc_package.AddMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.AddMatchResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.AddMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.AddMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.AddMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.addMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/AddMatch',
      request,
      metadata || {},
      methodDescriptor_MatchService_AddMatch,
      callback);
};


/**
 * @param {!proto.ubc_package.AddMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.AddMatchResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.addMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/AddMatch',
      request,
      metadata || {},
      methodDescriptor_MatchService_AddMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.RemoveMatchRequest,
 *   !proto.ubc_package.RemoveMatchResponse>}
 */
const methodDescriptor_MatchService_RemoveMatch = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/RemoveMatch',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.RemoveMatchRequest,
  proto.ubc_package.RemoveMatchResponse,
  /**
   * @param {!proto.ubc_package.RemoveMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.RemoveMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.RemoveMatchRequest,
 *   !proto.ubc_package.RemoveMatchResponse>}
 */
const methodInfo_MatchService_RemoveMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.RemoveMatchResponse,
  /**
   * @param {!proto.ubc_package.RemoveMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.RemoveMatchResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.RemoveMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.RemoveMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.RemoveMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.removeMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/RemoveMatch',
      request,
      metadata || {},
      methodDescriptor_MatchService_RemoveMatch,
      callback);
};


/**
 * @param {!proto.ubc_package.RemoveMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.RemoveMatchResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.removeMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/RemoveMatch',
      request,
      metadata || {},
      methodDescriptor_MatchService_RemoveMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.UpdateMatchRequest,
 *   !proto.ubc_package.UpdateMatchResponse>}
 */
const methodDescriptor_MatchService_UpdateMatch = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/UpdateMatch',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.UpdateMatchRequest,
  proto.ubc_package.UpdateMatchResponse,
  /**
   * @param {!proto.ubc_package.UpdateMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.UpdateMatchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.UpdateMatchRequest,
 *   !proto.ubc_package.UpdateMatchResponse>}
 */
const methodInfo_MatchService_UpdateMatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.UpdateMatchResponse,
  /**
   * @param {!proto.ubc_package.UpdateMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.UpdateMatchResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.UpdateMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.UpdateMatchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.UpdateMatchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.updateMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/UpdateMatch',
      request,
      metadata || {},
      methodDescriptor_MatchService_UpdateMatch,
      callback);
};


/**
 * @param {!proto.ubc_package.UpdateMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.UpdateMatchResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.updateMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/UpdateMatch',
      request,
      metadata || {},
      methodDescriptor_MatchService_UpdateMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.RemoveMatchesOfBoxerRequest,
 *   !proto.ubc_package.RemoveMatchesOfBoxerResponse>}
 */
const methodDescriptor_MatchService_RemoveMatchesOfBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/RemoveMatchesOfBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.RemoveMatchesOfBoxerRequest,
  proto.ubc_package.RemoveMatchesOfBoxerResponse,
  /**
   * @param {!proto.ubc_package.RemoveMatchesOfBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.RemoveMatchesOfBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.RemoveMatchesOfBoxerRequest,
 *   !proto.ubc_package.RemoveMatchesOfBoxerResponse>}
 */
const methodInfo_MatchService_RemoveMatchesOfBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.RemoveMatchesOfBoxerResponse,
  /**
   * @param {!proto.ubc_package.RemoveMatchesOfBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.RemoveMatchesOfBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.RemoveMatchesOfBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.RemoveMatchesOfBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.RemoveMatchesOfBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.removeMatchesOfBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/RemoveMatchesOfBoxer',
      request,
      metadata || {},
      methodDescriptor_MatchService_RemoveMatchesOfBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.RemoveMatchesOfBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.RemoveMatchesOfBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.removeMatchesOfBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/RemoveMatchesOfBoxer',
      request,
      metadata || {},
      methodDescriptor_MatchService_RemoveMatchesOfBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.GetAllMatchesResponse>}
 */
const methodDescriptor_MatchService_GetAllMatches = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/GetAllMatches',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Empty,
  proto.ubc_package.GetAllMatchesResponse,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetAllMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.GetAllMatchesResponse>}
 */
const methodInfo_MatchService_GetAllMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetAllMatchesResponse,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetAllMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetAllMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetAllMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.getAllMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/GetAllMatches',
      request,
      metadata || {},
      methodDescriptor_MatchService_GetAllMatches,
      callback);
};


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetAllMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.getAllMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/GetAllMatches',
      request,
      metadata || {},
      methodDescriptor_MatchService_GetAllMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.GetMatchesOfBoxerRequest,
 *   !proto.ubc_package.GetMatchesOfBoxerResponse>}
 */
const methodDescriptor_MatchService_GetMatchesOfBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/GetMatchesOfBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.GetMatchesOfBoxerRequest,
  proto.ubc_package.GetMatchesOfBoxerResponse,
  /**
   * @param {!proto.ubc_package.GetMatchesOfBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetMatchesOfBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.GetMatchesOfBoxerRequest,
 *   !proto.ubc_package.GetMatchesOfBoxerResponse>}
 */
const methodInfo_MatchService_GetMatchesOfBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetMatchesOfBoxerResponse,
  /**
   * @param {!proto.ubc_package.GetMatchesOfBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetMatchesOfBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.GetMatchesOfBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetMatchesOfBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetMatchesOfBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.getMatchesOfBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/GetMatchesOfBoxer',
      request,
      metadata || {},
      methodDescriptor_MatchService_GetMatchesOfBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.GetMatchesOfBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetMatchesOfBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.getMatchesOfBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/GetMatchesOfBoxer',
      request,
      metadata || {},
      methodDescriptor_MatchService_GetMatchesOfBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddBoxersRequest,
 *   !proto.ubc_package.SetupAddBoxersResponse>}
 */
const methodDescriptor_MatchService_SetupAddBoxers = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/SetupAddBoxers',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddBoxersRequest,
  proto.ubc_package.SetupAddBoxersResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddBoxersRequest,
 *   !proto.ubc_package.SetupAddBoxersResponse>}
 */
const methodInfo_MatchService_SetupAddBoxers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddBoxersResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxersResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddBoxersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddBoxersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddBoxersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.setupAddBoxers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/SetupAddBoxers',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupAddBoxers,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddBoxersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddBoxersResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.setupAddBoxers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/SetupAddBoxers',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupAddBoxers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddMatchesRequest,
 *   !proto.ubc_package.SetupAddMatchesResponse>}
 */
const methodDescriptor_MatchService_SetupAddMatches = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/SetupAddMatches',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddMatchesRequest,
  proto.ubc_package.SetupAddMatchesResponse,
  /**
   * @param {!proto.ubc_package.SetupAddMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddMatchesRequest,
 *   !proto.ubc_package.SetupAddMatchesResponse>}
 */
const methodInfo_MatchService_SetupAddMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddMatchesResponse,
  /**
   * @param {!proto.ubc_package.SetupAddMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.setupAddMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/SetupAddMatches',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupAddMatches,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.setupAddMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/SetupAddMatches',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupAddMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddAdminRequest,
 *   !proto.ubc_package.SetupAddAdminResponse>}
 */
const methodDescriptor_MatchService_SetupAddAdmin = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/SetupAddAdmin',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddAdminRequest,
  proto.ubc_package.SetupAddAdminResponse,
  /**
   * @param {!proto.ubc_package.SetupAddAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddAdminResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddAdminRequest,
 *   !proto.ubc_package.SetupAddAdminResponse>}
 */
const methodInfo_MatchService_SetupAddAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddAdminResponse,
  /**
   * @param {!proto.ubc_package.SetupAddAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddAdminResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.setupAddAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/SetupAddAdmin',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupAddAdmin,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddAdminResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.setupAddAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/SetupAddAdmin',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupAddAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.SetupCleanUpResponse>}
 */
const methodDescriptor_MatchService_SetupCleanUp = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/SetupCleanUp',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Empty,
  proto.ubc_package.SetupCleanUpResponse,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupCleanUpResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.SetupCleanUpResponse>}
 */
const methodInfo_MatchService_SetupCleanUp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupCleanUpResponse,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupCleanUpResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupCleanUpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupCleanUpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.setupCleanUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/SetupCleanUp',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupCleanUp,
      callback);
};


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupCleanUpResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.setupCleanUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/SetupCleanUp',
      request,
      metadata || {},
      methodDescriptor_MatchService_SetupCleanUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.Empty>}
 */
const methodDescriptor_MatchService_Mock = new grpc.web.MethodDescriptor(
  '/ubc_package.MatchService/Mock',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Empty,
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Empty,
 *   !proto.ubc_package.Empty>}
 */
const methodInfo_MatchService_Mock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Empty,
  /**
   * @param {!proto.ubc_package.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Empty.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.MatchServiceClient.prototype.mock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.MatchService/Mock',
      request,
      metadata || {},
      methodDescriptor_MatchService_Mock,
      callback);
};


/**
 * @param {!proto.ubc_package.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Empty>}
 *     Promise that resolves to the response
 */
proto.ubc_package.MatchServicePromiseClient.prototype.mock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.MatchService/Mock',
      request,
      metadata || {},
      methodDescriptor_MatchService_Mock);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ubc_package.StandingsServiceClient =
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
proto.ubc_package.StandingsServicePromiseClient =
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
 *   !proto.ubc_package.GetStandingAndMatchesOfBoxerRequest,
 *   !proto.ubc_package.GetStandingAndMatchesOfBoxerResponse>}
 */
const methodDescriptor_StandingsService_GetStandingAndMatchesOfBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/GetStandingAndMatchesOfBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.GetStandingAndMatchesOfBoxerRequest,
  proto.ubc_package.GetStandingAndMatchesOfBoxerResponse,
  /**
   * @param {!proto.ubc_package.GetStandingAndMatchesOfBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetStandingAndMatchesOfBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.GetStandingAndMatchesOfBoxerRequest,
 *   !proto.ubc_package.GetStandingAndMatchesOfBoxerResponse>}
 */
const methodInfo_StandingsService_GetStandingAndMatchesOfBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetStandingAndMatchesOfBoxerResponse,
  /**
   * @param {!proto.ubc_package.GetStandingAndMatchesOfBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetStandingAndMatchesOfBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.GetStandingAndMatchesOfBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetStandingAndMatchesOfBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetStandingAndMatchesOfBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.getStandingAndMatchesOfBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/GetStandingAndMatchesOfBoxer',
      request,
      metadata || {},
      methodDescriptor_StandingsService_GetStandingAndMatchesOfBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.GetStandingAndMatchesOfBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetStandingAndMatchesOfBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.getStandingAndMatchesOfBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/GetStandingAndMatchesOfBoxer',
      request,
      metadata || {},
      methodDescriptor_StandingsService_GetStandingAndMatchesOfBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.GetAllStandingsResponse>}
 */
const methodDescriptor_StandingsService_GetAllStandings = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/GetAllStandings',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Null,
  proto.ubc_package.GetAllStandingsResponse,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetAllStandingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.GetAllStandingsResponse>}
 */
const methodInfo_StandingsService_GetAllStandings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.GetAllStandingsResponse,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.GetAllStandingsResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.GetAllStandingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.GetAllStandingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.getAllStandings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/GetAllStandings',
      request,
      metadata || {},
      methodDescriptor_StandingsService_GetAllStandings,
      callback);
};


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.GetAllStandingsResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.getAllStandings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/GetAllStandings',
      request,
      metadata || {},
      methodDescriptor_StandingsService_GetAllStandings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.Null>}
 */
const methodDescriptor_StandingsService_Mock = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/Mock',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Null,
  proto.ubc_package.Null,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Null.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.Null>}
 */
const methodInfo_StandingsService_Mock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.Null,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.Null.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.Null)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.Null>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.mock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/Mock',
      request,
      metadata || {},
      methodDescriptor_StandingsService_Mock,
      callback);
};


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.Null>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.mock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/Mock',
      request,
      metadata || {},
      methodDescriptor_StandingsService_Mock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddBoxerRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodDescriptor_StandingsService_SetupAddBoxer = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/SetupAddBoxer',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddBoxerRequest,
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddBoxerRequest,
 *   !proto.ubc_package.SetupAddBoxerResponse>}
 */
const methodInfo_StandingsService_SetupAddBoxer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddBoxerResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxerResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddBoxerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddBoxerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.setupAddBoxer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupAddBoxer',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupAddBoxer,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddBoxerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddBoxerResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.setupAddBoxer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupAddBoxer',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupAddBoxer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddBoxersRequest,
 *   !proto.ubc_package.SetupAddBoxersResponse>}
 */
const methodDescriptor_StandingsService_SetupAddBoxers = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/SetupAddBoxers',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddBoxersRequest,
  proto.ubc_package.SetupAddBoxersResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddBoxersRequest,
 *   !proto.ubc_package.SetupAddBoxersResponse>}
 */
const methodInfo_StandingsService_SetupAddBoxers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddBoxersResponse,
  /**
   * @param {!proto.ubc_package.SetupAddBoxersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddBoxersResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddBoxersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddBoxersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddBoxersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.setupAddBoxers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupAddBoxers',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupAddBoxers,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddBoxersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddBoxersResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.setupAddBoxers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupAddBoxers',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupAddBoxers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.SetupAddMatchesRequest,
 *   !proto.ubc_package.SetupAddMatchesResponse>}
 */
const methodDescriptor_StandingsService_SetupAddMatches = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/SetupAddMatches',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.SetupAddMatchesRequest,
  proto.ubc_package.SetupAddMatchesResponse,
  /**
   * @param {!proto.ubc_package.SetupAddMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddMatchesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.SetupAddMatchesRequest,
 *   !proto.ubc_package.SetupAddMatchesResponse>}
 */
const methodInfo_StandingsService_SetupAddMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupAddMatchesResponse,
  /**
   * @param {!proto.ubc_package.SetupAddMatchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupAddMatchesResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.SetupAddMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupAddMatchesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupAddMatchesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.setupAddMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupAddMatches',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupAddMatches,
      callback);
};


/**
 * @param {!proto.ubc_package.SetupAddMatchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupAddMatchesResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.setupAddMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupAddMatches',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupAddMatches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.SetupCleanUpResponse>}
 */
const methodDescriptor_StandingsService_SetupCleanUp = new grpc.web.MethodDescriptor(
  '/ubc_package.StandingsService/SetupCleanUp',
  grpc.web.MethodType.UNARY,
  proto.ubc_package.Null,
  proto.ubc_package.SetupCleanUpResponse,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupCleanUpResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ubc_package.Null,
 *   !proto.ubc_package.SetupCleanUpResponse>}
 */
const methodInfo_StandingsService_SetupCleanUp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ubc_package.SetupCleanUpResponse,
  /**
   * @param {!proto.ubc_package.Null} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ubc_package.SetupCleanUpResponse.deserializeBinary
);


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ubc_package.SetupCleanUpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ubc_package.SetupCleanUpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ubc_package.StandingsServiceClient.prototype.setupCleanUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupCleanUp',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupCleanUp,
      callback);
};


/**
 * @param {!proto.ubc_package.Null} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ubc_package.SetupCleanUpResponse>}
 *     Promise that resolves to the response
 */
proto.ubc_package.StandingsServicePromiseClient.prototype.setupCleanUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ubc_package.StandingsService/SetupCleanUp',
      request,
      metadata || {},
      methodDescriptor_StandingsService_SetupCleanUp);
};


module.exports = proto.ubc_package;

