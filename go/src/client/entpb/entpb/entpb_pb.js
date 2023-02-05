// source: entpb/entpb.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.entpb.BatchCreateProcessTypesRequest', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProcessTypesResponse', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProjectProcessesRequest', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProjectProcessesResponse', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProjectSkillsSliceRequest', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProjectSkillsSliceResponse', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProjectsRequest', null, global);
goog.exportSymbol('proto.entpb.BatchCreateProjectsResponse', null, global);
goog.exportSymbol('proto.entpb.BatchCreateSkillTypesRequest', null, global);
goog.exportSymbol('proto.entpb.BatchCreateSkillTypesResponse', null, global);
goog.exportSymbol('proto.entpb.BatchCreateSkillsRequest', null, global);
goog.exportSymbol('proto.entpb.BatchCreateSkillsResponse', null, global);
goog.exportSymbol('proto.entpb.CreateProcessTypeRequest', null, global);
goog.exportSymbol('proto.entpb.CreateProjectProcessRequest', null, global);
goog.exportSymbol('proto.entpb.CreateProjectRequest', null, global);
goog.exportSymbol('proto.entpb.CreateProjectSkillsRequest', null, global);
goog.exportSymbol('proto.entpb.CreateSkillRequest', null, global);
goog.exportSymbol('proto.entpb.CreateSkillTypeRequest', null, global);
goog.exportSymbol('proto.entpb.DeleteProcessTypeRequest', null, global);
goog.exportSymbol('proto.entpb.DeleteProjectProcessRequest', null, global);
goog.exportSymbol('proto.entpb.DeleteProjectRequest', null, global);
goog.exportSymbol('proto.entpb.DeleteProjectSkillsRequest', null, global);
goog.exportSymbol('proto.entpb.DeleteSkillRequest', null, global);
goog.exportSymbol('proto.entpb.DeleteSkillTypeRequest', null, global);
goog.exportSymbol('proto.entpb.GetProcessTypeRequest', null, global);
goog.exportSymbol('proto.entpb.GetProcessTypeRequest.View', null, global);
goog.exportSymbol('proto.entpb.GetProjectProcessRequest', null, global);
goog.exportSymbol('proto.entpb.GetProjectProcessRequest.View', null, global);
goog.exportSymbol('proto.entpb.GetProjectRequest', null, global);
goog.exportSymbol('proto.entpb.GetProjectRequest.View', null, global);
goog.exportSymbol('proto.entpb.GetProjectSkillsRequest', null, global);
goog.exportSymbol('proto.entpb.GetProjectSkillsRequest.View', null, global);
goog.exportSymbol('proto.entpb.GetSkillRequest', null, global);
goog.exportSymbol('proto.entpb.GetSkillRequest.View', null, global);
goog.exportSymbol('proto.entpb.GetSkillTypeRequest', null, global);
goog.exportSymbol('proto.entpb.GetSkillTypeRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListProcessTypeRequest', null, global);
goog.exportSymbol('proto.entpb.ListProcessTypeRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListProcessTypeResponse', null, global);
goog.exportSymbol('proto.entpb.ListProjectProcessRequest', null, global);
goog.exportSymbol('proto.entpb.ListProjectProcessRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListProjectProcessResponse', null, global);
goog.exportSymbol('proto.entpb.ListProjectRequest', null, global);
goog.exportSymbol('proto.entpb.ListProjectRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListProjectResponse', null, global);
goog.exportSymbol('proto.entpb.ListProjectSkillsRequest', null, global);
goog.exportSymbol('proto.entpb.ListProjectSkillsRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListProjectSkillsResponse', null, global);
goog.exportSymbol('proto.entpb.ListSkillRequest', null, global);
goog.exportSymbol('proto.entpb.ListSkillRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListSkillResponse', null, global);
goog.exportSymbol('proto.entpb.ListSkillTypeRequest', null, global);
goog.exportSymbol('proto.entpb.ListSkillTypeRequest.View', null, global);
goog.exportSymbol('proto.entpb.ListSkillTypeResponse', null, global);
goog.exportSymbol('proto.entpb.ProcessType', null, global);
goog.exportSymbol('proto.entpb.Project', null, global);
goog.exportSymbol('proto.entpb.ProjectProcess', null, global);
goog.exportSymbol('proto.entpb.ProjectSkills', null, global);
goog.exportSymbol('proto.entpb.Skill', null, global);
goog.exportSymbol('proto.entpb.SkillType', null, global);
goog.exportSymbol('proto.entpb.UpdateProcessTypeRequest', null, global);
goog.exportSymbol('proto.entpb.UpdateProjectProcessRequest', null, global);
goog.exportSymbol('proto.entpb.UpdateProjectRequest', null, global);
goog.exportSymbol('proto.entpb.UpdateProjectSkillsRequest', null, global);
goog.exportSymbol('proto.entpb.UpdateSkillRequest', null, global);
goog.exportSymbol('proto.entpb.UpdateSkillTypeRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ProcessType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ProcessType.repeatedFields_, null);
};
goog.inherits(proto.entpb.ProcessType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ProcessType.displayName = 'proto.entpb.ProcessType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.CreateProcessTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.CreateProcessTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.CreateProcessTypeRequest.displayName = 'proto.entpb.CreateProcessTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.GetProcessTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.GetProcessTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.GetProcessTypeRequest.displayName = 'proto.entpb.GetProcessTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.UpdateProcessTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.UpdateProcessTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.UpdateProcessTypeRequest.displayName = 'proto.entpb.UpdateProcessTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.DeleteProcessTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.DeleteProcessTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.DeleteProcessTypeRequest.displayName = 'proto.entpb.DeleteProcessTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProcessTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ListProcessTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProcessTypeRequest.displayName = 'proto.entpb.ListProcessTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProcessTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ListProcessTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.ListProcessTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProcessTypeResponse.displayName = 'proto.entpb.ListProcessTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProcessTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProcessTypesRequest.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProcessTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProcessTypesRequest.displayName = 'proto.entpb.BatchCreateProcessTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProcessTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProcessTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProcessTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProcessTypesResponse.displayName = 'proto.entpb.BatchCreateProcessTypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.Project.displayName = 'proto.entpb.Project';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.CreateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.CreateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.CreateProjectRequest.displayName = 'proto.entpb.CreateProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.GetProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.GetProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.GetProjectRequest.displayName = 'proto.entpb.GetProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.UpdateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.UpdateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.UpdateProjectRequest.displayName = 'proto.entpb.UpdateProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.DeleteProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.DeleteProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.DeleteProjectRequest.displayName = 'proto.entpb.DeleteProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ListProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProjectRequest.displayName = 'proto.entpb.ListProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ListProjectResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.ListProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProjectResponse.displayName = 'proto.entpb.ListProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProjectsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProjectsRequest.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProjectsRequest.displayName = 'proto.entpb.BatchCreateProjectsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProjectsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProjectsResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProjectsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProjectsResponse.displayName = 'proto.entpb.BatchCreateProjectsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ProjectProcess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ProjectProcess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ProjectProcess.displayName = 'proto.entpb.ProjectProcess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.CreateProjectProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.CreateProjectProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.CreateProjectProcessRequest.displayName = 'proto.entpb.CreateProjectProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.GetProjectProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.GetProjectProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.GetProjectProcessRequest.displayName = 'proto.entpb.GetProjectProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.UpdateProjectProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.UpdateProjectProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.UpdateProjectProcessRequest.displayName = 'proto.entpb.UpdateProjectProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.DeleteProjectProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.DeleteProjectProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.DeleteProjectProcessRequest.displayName = 'proto.entpb.DeleteProjectProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProjectProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ListProjectProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProjectProcessRequest.displayName = 'proto.entpb.ListProjectProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProjectProcessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ListProjectProcessResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.ListProjectProcessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProjectProcessResponse.displayName = 'proto.entpb.ListProjectProcessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProjectProcessesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProjectProcessesRequest.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProjectProcessesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProjectProcessesRequest.displayName = 'proto.entpb.BatchCreateProjectProcessesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProjectProcessesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProjectProcessesResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProjectProcessesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProjectProcessesResponse.displayName = 'proto.entpb.BatchCreateProjectProcessesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ProjectSkills = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ProjectSkills, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ProjectSkills.displayName = 'proto.entpb.ProjectSkills';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.CreateProjectSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.CreateProjectSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.CreateProjectSkillsRequest.displayName = 'proto.entpb.CreateProjectSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.GetProjectSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.GetProjectSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.GetProjectSkillsRequest.displayName = 'proto.entpb.GetProjectSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.UpdateProjectSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.UpdateProjectSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.UpdateProjectSkillsRequest.displayName = 'proto.entpb.UpdateProjectSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.DeleteProjectSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.DeleteProjectSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.DeleteProjectSkillsRequest.displayName = 'proto.entpb.DeleteProjectSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProjectSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ListProjectSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProjectSkillsRequest.displayName = 'proto.entpb.ListProjectSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListProjectSkillsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ListProjectSkillsResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.ListProjectSkillsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListProjectSkillsResponse.displayName = 'proto.entpb.ListProjectSkillsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProjectSkillsSliceRequest.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProjectSkillsSliceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProjectSkillsSliceRequest.displayName = 'proto.entpb.BatchCreateProjectSkillsSliceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateProjectSkillsSliceResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateProjectSkillsSliceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateProjectSkillsSliceResponse.displayName = 'proto.entpb.BatchCreateProjectSkillsSliceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.Skill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.Skill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.Skill.displayName = 'proto.entpb.Skill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.CreateSkillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.CreateSkillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.CreateSkillRequest.displayName = 'proto.entpb.CreateSkillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.GetSkillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.GetSkillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.GetSkillRequest.displayName = 'proto.entpb.GetSkillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.UpdateSkillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.UpdateSkillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.UpdateSkillRequest.displayName = 'proto.entpb.UpdateSkillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.DeleteSkillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.DeleteSkillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.DeleteSkillRequest.displayName = 'proto.entpb.DeleteSkillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListSkillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ListSkillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListSkillRequest.displayName = 'proto.entpb.ListSkillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListSkillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ListSkillResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.ListSkillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListSkillResponse.displayName = 'proto.entpb.ListSkillResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateSkillsRequest.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateSkillsRequest.displayName = 'proto.entpb.BatchCreateSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateSkillsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateSkillsResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateSkillsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateSkillsResponse.displayName = 'proto.entpb.BatchCreateSkillsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.SkillType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.SkillType.repeatedFields_, null);
};
goog.inherits(proto.entpb.SkillType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.SkillType.displayName = 'proto.entpb.SkillType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.CreateSkillTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.CreateSkillTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.CreateSkillTypeRequest.displayName = 'proto.entpb.CreateSkillTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.GetSkillTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.GetSkillTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.GetSkillTypeRequest.displayName = 'proto.entpb.GetSkillTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.UpdateSkillTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.UpdateSkillTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.UpdateSkillTypeRequest.displayName = 'proto.entpb.UpdateSkillTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.DeleteSkillTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.DeleteSkillTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.DeleteSkillTypeRequest.displayName = 'proto.entpb.DeleteSkillTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListSkillTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entpb.ListSkillTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListSkillTypeRequest.displayName = 'proto.entpb.ListSkillTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.ListSkillTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.ListSkillTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.ListSkillTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.ListSkillTypeResponse.displayName = 'proto.entpb.ListSkillTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateSkillTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateSkillTypesRequest.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateSkillTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateSkillTypesRequest.displayName = 'proto.entpb.BatchCreateSkillTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entpb.BatchCreateSkillTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entpb.BatchCreateSkillTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.entpb.BatchCreateSkillTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entpb.BatchCreateSkillTypesResponse.displayName = 'proto.entpb.BatchCreateSkillTypesResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ProcessType.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ProcessType.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ProcessType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ProcessType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ProcessType.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ptpidList: jspb.Message.toObjectList(msg.getPtpidList(),
    proto.entpb.ProjectProcess.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ProcessType}
 */
proto.entpb.ProcessType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ProcessType;
  return proto.entpb.ProcessType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ProcessType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ProcessType}
 */
proto.entpb.ProcessType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.entpb.ProjectProcess;
      reader.readMessage(value,proto.entpb.ProjectProcess.deserializeBinaryFromReader);
      msg.addPtpid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ProcessType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ProcessType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ProcessType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ProcessType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPtpidList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.entpb.ProjectProcess.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.ProcessType.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ProcessType} returns this
 */
proto.entpb.ProcessType.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entpb.ProcessType.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ProcessType} returns this
 */
proto.entpb.ProcessType.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ProjectProcess ptpid = 3;
 * @return {!Array<!proto.entpb.ProjectProcess>}
 */
proto.entpb.ProcessType.prototype.getPtpidList = function() {
  return /** @type{!Array<!proto.entpb.ProjectProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProjectProcess, 3));
};


/**
 * @param {!Array<!proto.entpb.ProjectProcess>} value
 * @return {!proto.entpb.ProcessType} returns this
*/
proto.entpb.ProcessType.prototype.setPtpidList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.entpb.ProjectProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProjectProcess}
 */
proto.entpb.ProcessType.prototype.addPtpid = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.entpb.ProjectProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ProcessType} returns this
 */
proto.entpb.ProcessType.prototype.clearPtpidList = function() {
  return this.setPtpidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.CreateProcessTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.CreateProcessTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.CreateProcessTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProcessTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    processType: (f = msg.getProcessType()) && proto.entpb.ProcessType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.CreateProcessTypeRequest}
 */
proto.entpb.CreateProcessTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.CreateProcessTypeRequest;
  return proto.entpb.CreateProcessTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.CreateProcessTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.CreateProcessTypeRequest}
 */
proto.entpb.CreateProcessTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProcessType;
      reader.readMessage(value,proto.entpb.ProcessType.deserializeBinaryFromReader);
      msg.setProcessType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.CreateProcessTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.CreateProcessTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.CreateProcessTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProcessTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.ProcessType.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProcessType process_type = 1;
 * @return {?proto.entpb.ProcessType}
 */
proto.entpb.CreateProcessTypeRequest.prototype.getProcessType = function() {
  return /** @type{?proto.entpb.ProcessType} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProcessType, 1));
};


/**
 * @param {?proto.entpb.ProcessType|undefined} value
 * @return {!proto.entpb.CreateProcessTypeRequest} returns this
*/
proto.entpb.CreateProcessTypeRequest.prototype.setProcessType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.CreateProcessTypeRequest} returns this
 */
proto.entpb.CreateProcessTypeRequest.prototype.clearProcessType = function() {
  return this.setProcessType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.CreateProcessTypeRequest.prototype.hasProcessType = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.GetProcessTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.GetProcessTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.GetProcessTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProcessTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.GetProcessTypeRequest}
 */
proto.entpb.GetProcessTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.GetProcessTypeRequest;
  return proto.entpb.GetProcessTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.GetProcessTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.GetProcessTypeRequest}
 */
proto.entpb.GetProcessTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.entpb.GetProcessTypeRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.GetProcessTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.GetProcessTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.GetProcessTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProcessTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.GetProcessTypeRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.GetProcessTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.GetProcessTypeRequest} returns this
 */
proto.entpb.GetProcessTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional View view = 2;
 * @return {!proto.entpb.GetProcessTypeRequest.View}
 */
proto.entpb.GetProcessTypeRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.GetProcessTypeRequest.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entpb.GetProcessTypeRequest.View} value
 * @return {!proto.entpb.GetProcessTypeRequest} returns this
 */
proto.entpb.GetProcessTypeRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.UpdateProcessTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.UpdateProcessTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.UpdateProcessTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProcessTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    processType: (f = msg.getProcessType()) && proto.entpb.ProcessType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.UpdateProcessTypeRequest}
 */
proto.entpb.UpdateProcessTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.UpdateProcessTypeRequest;
  return proto.entpb.UpdateProcessTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.UpdateProcessTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.UpdateProcessTypeRequest}
 */
proto.entpb.UpdateProcessTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProcessType;
      reader.readMessage(value,proto.entpb.ProcessType.deserializeBinaryFromReader);
      msg.setProcessType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.UpdateProcessTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.UpdateProcessTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.UpdateProcessTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProcessTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.ProcessType.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProcessType process_type = 1;
 * @return {?proto.entpb.ProcessType}
 */
proto.entpb.UpdateProcessTypeRequest.prototype.getProcessType = function() {
  return /** @type{?proto.entpb.ProcessType} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProcessType, 1));
};


/**
 * @param {?proto.entpb.ProcessType|undefined} value
 * @return {!proto.entpb.UpdateProcessTypeRequest} returns this
*/
proto.entpb.UpdateProcessTypeRequest.prototype.setProcessType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.UpdateProcessTypeRequest} returns this
 */
proto.entpb.UpdateProcessTypeRequest.prototype.clearProcessType = function() {
  return this.setProcessType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.UpdateProcessTypeRequest.prototype.hasProcessType = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.DeleteProcessTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.DeleteProcessTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.DeleteProcessTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProcessTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.DeleteProcessTypeRequest}
 */
proto.entpb.DeleteProcessTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.DeleteProcessTypeRequest;
  return proto.entpb.DeleteProcessTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.DeleteProcessTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.DeleteProcessTypeRequest}
 */
proto.entpb.DeleteProcessTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.DeleteProcessTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.DeleteProcessTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.DeleteProcessTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProcessTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.DeleteProcessTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.DeleteProcessTypeRequest} returns this
 */
proto.entpb.DeleteProcessTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProcessTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProcessTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProcessTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProcessTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProcessTypeRequest}
 */
proto.entpb.ListProcessTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProcessTypeRequest;
  return proto.entpb.ListProcessTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProcessTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProcessTypeRequest}
 */
proto.entpb.ListProcessTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {!proto.entpb.ListProcessTypeRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProcessTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProcessTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProcessTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProcessTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.ListProcessTypeRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.entpb.ListProcessTypeRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ListProcessTypeRequest} returns this
 */
proto.entpb.ListProcessTypeRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.entpb.ListProcessTypeRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProcessTypeRequest} returns this
 */
proto.entpb.ListProcessTypeRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional View view = 3;
 * @return {!proto.entpb.ListProcessTypeRequest.View}
 */
proto.entpb.ListProcessTypeRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.ListProcessTypeRequest.View} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.entpb.ListProcessTypeRequest.View} value
 * @return {!proto.entpb.ListProcessTypeRequest} returns this
 */
proto.entpb.ListProcessTypeRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ListProcessTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProcessTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProcessTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProcessTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProcessTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    processTypeListList: jspb.Message.toObjectList(msg.getProcessTypeListList(),
    proto.entpb.ProcessType.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProcessTypeResponse}
 */
proto.entpb.ListProcessTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProcessTypeResponse;
  return proto.entpb.ListProcessTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProcessTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProcessTypeResponse}
 */
proto.entpb.ListProcessTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProcessType;
      reader.readMessage(value,proto.entpb.ProcessType.deserializeBinaryFromReader);
      msg.addProcessTypeList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProcessTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProcessTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProcessTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProcessTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessTypeListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.ProcessType.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ProcessType process_type_list = 1;
 * @return {!Array<!proto.entpb.ProcessType>}
 */
proto.entpb.ListProcessTypeResponse.prototype.getProcessTypeListList = function() {
  return /** @type{!Array<!proto.entpb.ProcessType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProcessType, 1));
};


/**
 * @param {!Array<!proto.entpb.ProcessType>} value
 * @return {!proto.entpb.ListProcessTypeResponse} returns this
*/
proto.entpb.ListProcessTypeResponse.prototype.setProcessTypeListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.ProcessType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProcessType}
 */
proto.entpb.ListProcessTypeResponse.prototype.addProcessTypeList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.ProcessType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ListProcessTypeResponse} returns this
 */
proto.entpb.ListProcessTypeResponse.prototype.clearProcessTypeListList = function() {
  return this.setProcessTypeListList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.entpb.ListProcessTypeResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProcessTypeResponse} returns this
 */
proto.entpb.ListProcessTypeResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProcessTypesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProcessTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProcessTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProcessTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProcessTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.entpb.CreateProcessTypeRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProcessTypesRequest}
 */
proto.entpb.BatchCreateProcessTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProcessTypesRequest;
  return proto.entpb.BatchCreateProcessTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProcessTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProcessTypesRequest}
 */
proto.entpb.BatchCreateProcessTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.CreateProcessTypeRequest;
      reader.readMessage(value,proto.entpb.CreateProcessTypeRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProcessTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProcessTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProcessTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProcessTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.CreateProcessTypeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateProcessTypeRequest requests = 1;
 * @return {!Array<!proto.entpb.CreateProcessTypeRequest>}
 */
proto.entpb.BatchCreateProcessTypesRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.entpb.CreateProcessTypeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.CreateProcessTypeRequest, 1));
};


/**
 * @param {!Array<!proto.entpb.CreateProcessTypeRequest>} value
 * @return {!proto.entpb.BatchCreateProcessTypesRequest} returns this
*/
proto.entpb.BatchCreateProcessTypesRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.CreateProcessTypeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.CreateProcessTypeRequest}
 */
proto.entpb.BatchCreateProcessTypesRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.CreateProcessTypeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProcessTypesRequest} returns this
 */
proto.entpb.BatchCreateProcessTypesRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProcessTypesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProcessTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProcessTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProcessTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProcessTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    processTypesList: jspb.Message.toObjectList(msg.getProcessTypesList(),
    proto.entpb.ProcessType.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProcessTypesResponse}
 */
proto.entpb.BatchCreateProcessTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProcessTypesResponse;
  return proto.entpb.BatchCreateProcessTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProcessTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProcessTypesResponse}
 */
proto.entpb.BatchCreateProcessTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProcessType;
      reader.readMessage(value,proto.entpb.ProcessType.deserializeBinaryFromReader);
      msg.addProcessTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProcessTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProcessTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProcessTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProcessTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.ProcessType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProcessType process_types = 1;
 * @return {!Array<!proto.entpb.ProcessType>}
 */
proto.entpb.BatchCreateProcessTypesResponse.prototype.getProcessTypesList = function() {
  return /** @type{!Array<!proto.entpb.ProcessType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProcessType, 1));
};


/**
 * @param {!Array<!proto.entpb.ProcessType>} value
 * @return {!proto.entpb.BatchCreateProcessTypesResponse} returns this
*/
proto.entpb.BatchCreateProcessTypesResponse.prototype.setProcessTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.ProcessType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProcessType}
 */
proto.entpb.BatchCreateProcessTypesResponse.prototype.addProcessTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.ProcessType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProcessTypesResponse} returns this
 */
proto.entpb.BatchCreateProcessTypesResponse.prototype.clearProcessTypesList = function() {
  return this.setProcessTypesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    role: jspb.Message.getFieldWithDefault(msg, 4, ""),
    scale: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    ppsid: (f = msg.getPpsid()) && proto.entpb.ProjectSkills.toObject(includeInstance, f),
    pppid: (f = msg.getPppid()) && proto.entpb.ProjectProcess.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.Project}
 */
proto.entpb.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.Project;
  return proto.entpb.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.Project}
 */
proto.entpb.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setScale(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = new proto.entpb.ProjectSkills;
      reader.readMessage(value,proto.entpb.ProjectSkills.deserializeBinaryFromReader);
      msg.setPpsid(value);
      break;
    case 9:
      var value = new proto.entpb.ProjectProcess;
      reader.readMessage(value,proto.entpb.ProjectProcess.deserializeBinaryFromReader);
      msg.setPppid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getScale();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPpsid();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.entpb.ProjectSkills.serializeBinaryToWriter
    );
  }
  f = message.getPppid();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entpb.ProjectProcess.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.Project.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.entpb.Project.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.entpb.Project} returns this
*/
proto.entpb.Project.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Project.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.entpb.Project.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.entpb.Project} returns this
*/
proto.entpb.Project.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Project.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string role = 4;
 * @return {string}
 */
proto.entpb.Project.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string scale = 5;
 * @return {string}
 */
proto.entpb.Project.prototype.getScale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.setScale = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.entpb.Project.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.entpb.Project} returns this
*/
proto.entpb.Project.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Project.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.entpb.Project.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.entpb.Project} returns this
*/
proto.entpb.Project.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Project.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ProjectSkills ppsid = 8;
 * @return {?proto.entpb.ProjectSkills}
 */
proto.entpb.Project.prototype.getPpsid = function() {
  return /** @type{?proto.entpb.ProjectSkills} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectSkills, 8));
};


/**
 * @param {?proto.entpb.ProjectSkills|undefined} value
 * @return {!proto.entpb.Project} returns this
*/
proto.entpb.Project.prototype.setPpsid = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.clearPpsid = function() {
  return this.setPpsid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Project.prototype.hasPpsid = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ProjectProcess pppid = 9;
 * @return {?proto.entpb.ProjectProcess}
 */
proto.entpb.Project.prototype.getPppid = function() {
  return /** @type{?proto.entpb.ProjectProcess} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectProcess, 9));
};


/**
 * @param {?proto.entpb.ProjectProcess|undefined} value
 * @return {!proto.entpb.Project} returns this
*/
proto.entpb.Project.prototype.setPppid = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Project} returns this
 */
proto.entpb.Project.prototype.clearPppid = function() {
  return this.setPppid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Project.prototype.hasPppid = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.CreateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.CreateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.CreateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.entpb.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.CreateProjectRequest}
 */
proto.entpb.CreateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.CreateProjectRequest;
  return proto.entpb.CreateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.CreateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.CreateProjectRequest}
 */
proto.entpb.CreateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Project;
      reader.readMessage(value,proto.entpb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.CreateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.CreateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.CreateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.entpb.Project}
 */
proto.entpb.CreateProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.entpb.Project} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Project, 1));
};


/**
 * @param {?proto.entpb.Project|undefined} value
 * @return {!proto.entpb.CreateProjectRequest} returns this
*/
proto.entpb.CreateProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.CreateProjectRequest} returns this
 */
proto.entpb.CreateProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.CreateProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.GetProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.GetProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.GetProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.GetProjectRequest}
 */
proto.entpb.GetProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.GetProjectRequest;
  return proto.entpb.GetProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.GetProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.GetProjectRequest}
 */
proto.entpb.GetProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.entpb.GetProjectRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.GetProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.GetProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.GetProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.GetProjectRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.GetProjectRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.GetProjectRequest} returns this
 */
proto.entpb.GetProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional View view = 2;
 * @return {!proto.entpb.GetProjectRequest.View}
 */
proto.entpb.GetProjectRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.GetProjectRequest.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entpb.GetProjectRequest.View} value
 * @return {!proto.entpb.GetProjectRequest} returns this
 */
proto.entpb.GetProjectRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.UpdateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.UpdateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.UpdateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.entpb.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.UpdateProjectRequest}
 */
proto.entpb.UpdateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.UpdateProjectRequest;
  return proto.entpb.UpdateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.UpdateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.UpdateProjectRequest}
 */
proto.entpb.UpdateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Project;
      reader.readMessage(value,proto.entpb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.UpdateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.UpdateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.UpdateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.entpb.Project}
 */
proto.entpb.UpdateProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.entpb.Project} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Project, 1));
};


/**
 * @param {?proto.entpb.Project|undefined} value
 * @return {!proto.entpb.UpdateProjectRequest} returns this
*/
proto.entpb.UpdateProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.UpdateProjectRequest} returns this
 */
proto.entpb.UpdateProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.UpdateProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.DeleteProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.DeleteProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.DeleteProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.DeleteProjectRequest}
 */
proto.entpb.DeleteProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.DeleteProjectRequest;
  return proto.entpb.DeleteProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.DeleteProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.DeleteProjectRequest}
 */
proto.entpb.DeleteProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.DeleteProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.DeleteProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.DeleteProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.DeleteProjectRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.DeleteProjectRequest} returns this
 */
proto.entpb.DeleteProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProjectRequest}
 */
proto.entpb.ListProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProjectRequest;
  return proto.entpb.ListProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProjectRequest}
 */
proto.entpb.ListProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {!proto.entpb.ListProjectRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.ListProjectRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.entpb.ListProjectRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ListProjectRequest} returns this
 */
proto.entpb.ListProjectRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.entpb.ListProjectRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProjectRequest} returns this
 */
proto.entpb.ListProjectRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional View view = 3;
 * @return {!proto.entpb.ListProjectRequest.View}
 */
proto.entpb.ListProjectRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.ListProjectRequest.View} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.entpb.ListProjectRequest.View} value
 * @return {!proto.entpb.ListProjectRequest} returns this
 */
proto.entpb.ListProjectRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ListProjectResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectListList: jspb.Message.toObjectList(msg.getProjectListList(),
    proto.entpb.Project.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProjectResponse}
 */
proto.entpb.ListProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProjectResponse;
  return proto.entpb.ListProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProjectResponse}
 */
proto.entpb.ListProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Project;
      reader.readMessage(value,proto.entpb.Project.deserializeBinaryFromReader);
      msg.addProjectList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.Project.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Project project_list = 1;
 * @return {!Array<!proto.entpb.Project>}
 */
proto.entpb.ListProjectResponse.prototype.getProjectListList = function() {
  return /** @type{!Array<!proto.entpb.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.Project, 1));
};


/**
 * @param {!Array<!proto.entpb.Project>} value
 * @return {!proto.entpb.ListProjectResponse} returns this
*/
proto.entpb.ListProjectResponse.prototype.setProjectListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.Project}
 */
proto.entpb.ListProjectResponse.prototype.addProjectList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ListProjectResponse} returns this
 */
proto.entpb.ListProjectResponse.prototype.clearProjectListList = function() {
  return this.setProjectListList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.entpb.ListProjectResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProjectResponse} returns this
 */
proto.entpb.ListProjectResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProjectsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProjectsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProjectsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProjectsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.entpb.CreateProjectRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProjectsRequest}
 */
proto.entpb.BatchCreateProjectsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProjectsRequest;
  return proto.entpb.BatchCreateProjectsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProjectsRequest}
 */
proto.entpb.BatchCreateProjectsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.CreateProjectRequest;
      reader.readMessage(value,proto.entpb.CreateProjectRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProjectsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.CreateProjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateProjectRequest requests = 1;
 * @return {!Array<!proto.entpb.CreateProjectRequest>}
 */
proto.entpb.BatchCreateProjectsRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.entpb.CreateProjectRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.CreateProjectRequest, 1));
};


/**
 * @param {!Array<!proto.entpb.CreateProjectRequest>} value
 * @return {!proto.entpb.BatchCreateProjectsRequest} returns this
*/
proto.entpb.BatchCreateProjectsRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.CreateProjectRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.CreateProjectRequest}
 */
proto.entpb.BatchCreateProjectsRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.CreateProjectRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProjectsRequest} returns this
 */
proto.entpb.BatchCreateProjectsRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProjectsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProjectsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProjectsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProjectsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.entpb.Project.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProjectsResponse}
 */
proto.entpb.BatchCreateProjectsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProjectsResponse;
  return proto.entpb.BatchCreateProjectsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProjectsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProjectsResponse}
 */
proto.entpb.BatchCreateProjectsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Project;
      reader.readMessage(value,proto.entpb.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProjectsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProjectsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProjectsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.entpb.Project>}
 */
proto.entpb.BatchCreateProjectsResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.entpb.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.Project, 1));
};


/**
 * @param {!Array<!proto.entpb.Project>} value
 * @return {!proto.entpb.BatchCreateProjectsResponse} returns this
*/
proto.entpb.BatchCreateProjectsResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.Project}
 */
proto.entpb.BatchCreateProjectsResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProjectsResponse} returns this
 */
proto.entpb.BatchCreateProjectsResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ProjectProcess.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ProjectProcess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ProjectProcess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ProjectProcess.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    project: (f = msg.getProject()) && proto.entpb.Project.toObject(includeInstance, f),
    processtype: (f = msg.getProcesstype()) && proto.entpb.ProcessType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ProjectProcess}
 */
proto.entpb.ProjectProcess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ProjectProcess;
  return proto.entpb.ProjectProcess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ProjectProcess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ProjectProcess}
 */
proto.entpb.ProjectProcess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.entpb.Project;
      reader.readMessage(value,proto.entpb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 3:
      var value = new proto.entpb.ProcessType;
      reader.readMessage(value,proto.entpb.ProcessType.deserializeBinaryFromReader);
      msg.setProcesstype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ProjectProcess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ProjectProcess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ProjectProcess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ProjectProcess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.entpb.Project.serializeBinaryToWriter
    );
  }
  f = message.getProcesstype();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entpb.ProcessType.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.ProjectProcess.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ProjectProcess} returns this
 */
proto.entpb.ProjectProcess.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Project project = 2;
 * @return {?proto.entpb.Project}
 */
proto.entpb.ProjectProcess.prototype.getProject = function() {
  return /** @type{?proto.entpb.Project} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Project, 2));
};


/**
 * @param {?proto.entpb.Project|undefined} value
 * @return {!proto.entpb.ProjectProcess} returns this
*/
proto.entpb.ProjectProcess.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.ProjectProcess} returns this
 */
proto.entpb.ProjectProcess.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.ProjectProcess.prototype.hasProject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProcessType processType = 3;
 * @return {?proto.entpb.ProcessType}
 */
proto.entpb.ProjectProcess.prototype.getProcesstype = function() {
  return /** @type{?proto.entpb.ProcessType} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProcessType, 3));
};


/**
 * @param {?proto.entpb.ProcessType|undefined} value
 * @return {!proto.entpb.ProjectProcess} returns this
*/
proto.entpb.ProjectProcess.prototype.setProcesstype = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.ProjectProcess} returns this
 */
proto.entpb.ProjectProcess.prototype.clearProcesstype = function() {
  return this.setProcesstype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.ProjectProcess.prototype.hasProcesstype = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.CreateProjectProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.CreateProjectProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.CreateProjectProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProjectProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectProcess: (f = msg.getProjectProcess()) && proto.entpb.ProjectProcess.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.CreateProjectProcessRequest}
 */
proto.entpb.CreateProjectProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.CreateProjectProcessRequest;
  return proto.entpb.CreateProjectProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.CreateProjectProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.CreateProjectProcessRequest}
 */
proto.entpb.CreateProjectProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectProcess;
      reader.readMessage(value,proto.entpb.ProjectProcess.deserializeBinaryFromReader);
      msg.setProjectProcess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.CreateProjectProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.CreateProjectProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.CreateProjectProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProjectProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectProcess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.ProjectProcess.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProjectProcess project_process = 1;
 * @return {?proto.entpb.ProjectProcess}
 */
proto.entpb.CreateProjectProcessRequest.prototype.getProjectProcess = function() {
  return /** @type{?proto.entpb.ProjectProcess} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectProcess, 1));
};


/**
 * @param {?proto.entpb.ProjectProcess|undefined} value
 * @return {!proto.entpb.CreateProjectProcessRequest} returns this
*/
proto.entpb.CreateProjectProcessRequest.prototype.setProjectProcess = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.CreateProjectProcessRequest} returns this
 */
proto.entpb.CreateProjectProcessRequest.prototype.clearProjectProcess = function() {
  return this.setProjectProcess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.CreateProjectProcessRequest.prototype.hasProjectProcess = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.GetProjectProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.GetProjectProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.GetProjectProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProjectProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.GetProjectProcessRequest}
 */
proto.entpb.GetProjectProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.GetProjectProcessRequest;
  return proto.entpb.GetProjectProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.GetProjectProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.GetProjectProcessRequest}
 */
proto.entpb.GetProjectProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.entpb.GetProjectProcessRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.GetProjectProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.GetProjectProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.GetProjectProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProjectProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.GetProjectProcessRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.GetProjectProcessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.GetProjectProcessRequest} returns this
 */
proto.entpb.GetProjectProcessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional View view = 2;
 * @return {!proto.entpb.GetProjectProcessRequest.View}
 */
proto.entpb.GetProjectProcessRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.GetProjectProcessRequest.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entpb.GetProjectProcessRequest.View} value
 * @return {!proto.entpb.GetProjectProcessRequest} returns this
 */
proto.entpb.GetProjectProcessRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.UpdateProjectProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.UpdateProjectProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.UpdateProjectProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProjectProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectProcess: (f = msg.getProjectProcess()) && proto.entpb.ProjectProcess.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.UpdateProjectProcessRequest}
 */
proto.entpb.UpdateProjectProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.UpdateProjectProcessRequest;
  return proto.entpb.UpdateProjectProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.UpdateProjectProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.UpdateProjectProcessRequest}
 */
proto.entpb.UpdateProjectProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectProcess;
      reader.readMessage(value,proto.entpb.ProjectProcess.deserializeBinaryFromReader);
      msg.setProjectProcess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.UpdateProjectProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.UpdateProjectProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.UpdateProjectProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProjectProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectProcess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.ProjectProcess.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProjectProcess project_process = 1;
 * @return {?proto.entpb.ProjectProcess}
 */
proto.entpb.UpdateProjectProcessRequest.prototype.getProjectProcess = function() {
  return /** @type{?proto.entpb.ProjectProcess} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectProcess, 1));
};


/**
 * @param {?proto.entpb.ProjectProcess|undefined} value
 * @return {!proto.entpb.UpdateProjectProcessRequest} returns this
*/
proto.entpb.UpdateProjectProcessRequest.prototype.setProjectProcess = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.UpdateProjectProcessRequest} returns this
 */
proto.entpb.UpdateProjectProcessRequest.prototype.clearProjectProcess = function() {
  return this.setProjectProcess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.UpdateProjectProcessRequest.prototype.hasProjectProcess = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.DeleteProjectProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.DeleteProjectProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.DeleteProjectProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProjectProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.DeleteProjectProcessRequest}
 */
proto.entpb.DeleteProjectProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.DeleteProjectProcessRequest;
  return proto.entpb.DeleteProjectProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.DeleteProjectProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.DeleteProjectProcessRequest}
 */
proto.entpb.DeleteProjectProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.DeleteProjectProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.DeleteProjectProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.DeleteProjectProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProjectProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.DeleteProjectProcessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.DeleteProjectProcessRequest} returns this
 */
proto.entpb.DeleteProjectProcessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProjectProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProjectProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProjectProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProjectProcessRequest}
 */
proto.entpb.ListProjectProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProjectProcessRequest;
  return proto.entpb.ListProjectProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProjectProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProjectProcessRequest}
 */
proto.entpb.ListProjectProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {!proto.entpb.ListProjectProcessRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProjectProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProjectProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProjectProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.ListProjectProcessRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.entpb.ListProjectProcessRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ListProjectProcessRequest} returns this
 */
proto.entpb.ListProjectProcessRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.entpb.ListProjectProcessRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProjectProcessRequest} returns this
 */
proto.entpb.ListProjectProcessRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional View view = 3;
 * @return {!proto.entpb.ListProjectProcessRequest.View}
 */
proto.entpb.ListProjectProcessRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.ListProjectProcessRequest.View} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.entpb.ListProjectProcessRequest.View} value
 * @return {!proto.entpb.ListProjectProcessRequest} returns this
 */
proto.entpb.ListProjectProcessRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ListProjectProcessResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProjectProcessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProjectProcessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProjectProcessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectProcessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectProcessListList: jspb.Message.toObjectList(msg.getProjectProcessListList(),
    proto.entpb.ProjectProcess.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProjectProcessResponse}
 */
proto.entpb.ListProjectProcessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProjectProcessResponse;
  return proto.entpb.ListProjectProcessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProjectProcessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProjectProcessResponse}
 */
proto.entpb.ListProjectProcessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectProcess;
      reader.readMessage(value,proto.entpb.ProjectProcess.deserializeBinaryFromReader);
      msg.addProjectProcessList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProjectProcessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProjectProcessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProjectProcessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectProcessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectProcessListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.ProjectProcess.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ProjectProcess project_process_list = 1;
 * @return {!Array<!proto.entpb.ProjectProcess>}
 */
proto.entpb.ListProjectProcessResponse.prototype.getProjectProcessListList = function() {
  return /** @type{!Array<!proto.entpb.ProjectProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProjectProcess, 1));
};


/**
 * @param {!Array<!proto.entpb.ProjectProcess>} value
 * @return {!proto.entpb.ListProjectProcessResponse} returns this
*/
proto.entpb.ListProjectProcessResponse.prototype.setProjectProcessListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.ProjectProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProjectProcess}
 */
proto.entpb.ListProjectProcessResponse.prototype.addProjectProcessList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.ProjectProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ListProjectProcessResponse} returns this
 */
proto.entpb.ListProjectProcessResponse.prototype.clearProjectProcessListList = function() {
  return this.setProjectProcessListList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.entpb.ListProjectProcessResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProjectProcessResponse} returns this
 */
proto.entpb.ListProjectProcessResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProjectProcessesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProjectProcessesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProjectProcessesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProjectProcessesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectProcessesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.entpb.CreateProjectProcessRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProjectProcessesRequest}
 */
proto.entpb.BatchCreateProjectProcessesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProjectProcessesRequest;
  return proto.entpb.BatchCreateProjectProcessesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProjectProcessesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProjectProcessesRequest}
 */
proto.entpb.BatchCreateProjectProcessesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.CreateProjectProcessRequest;
      reader.readMessage(value,proto.entpb.CreateProjectProcessRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProjectProcessesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProjectProcessesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProjectProcessesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectProcessesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.CreateProjectProcessRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateProjectProcessRequest requests = 1;
 * @return {!Array<!proto.entpb.CreateProjectProcessRequest>}
 */
proto.entpb.BatchCreateProjectProcessesRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.entpb.CreateProjectProcessRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.CreateProjectProcessRequest, 1));
};


/**
 * @param {!Array<!proto.entpb.CreateProjectProcessRequest>} value
 * @return {!proto.entpb.BatchCreateProjectProcessesRequest} returns this
*/
proto.entpb.BatchCreateProjectProcessesRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.CreateProjectProcessRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.CreateProjectProcessRequest}
 */
proto.entpb.BatchCreateProjectProcessesRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.CreateProjectProcessRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProjectProcessesRequest} returns this
 */
proto.entpb.BatchCreateProjectProcessesRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProjectProcessesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProjectProcessesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProjectProcessesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProjectProcessesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectProcessesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectProcessesList: jspb.Message.toObjectList(msg.getProjectProcessesList(),
    proto.entpb.ProjectProcess.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProjectProcessesResponse}
 */
proto.entpb.BatchCreateProjectProcessesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProjectProcessesResponse;
  return proto.entpb.BatchCreateProjectProcessesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProjectProcessesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProjectProcessesResponse}
 */
proto.entpb.BatchCreateProjectProcessesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectProcess;
      reader.readMessage(value,proto.entpb.ProjectProcess.deserializeBinaryFromReader);
      msg.addProjectProcesses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProjectProcessesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProjectProcessesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProjectProcessesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectProcessesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectProcessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.ProjectProcess.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProjectProcess project_processes = 1;
 * @return {!Array<!proto.entpb.ProjectProcess>}
 */
proto.entpb.BatchCreateProjectProcessesResponse.prototype.getProjectProcessesList = function() {
  return /** @type{!Array<!proto.entpb.ProjectProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProjectProcess, 1));
};


/**
 * @param {!Array<!proto.entpb.ProjectProcess>} value
 * @return {!proto.entpb.BatchCreateProjectProcessesResponse} returns this
*/
proto.entpb.BatchCreateProjectProcessesResponse.prototype.setProjectProcessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.ProjectProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProjectProcess}
 */
proto.entpb.BatchCreateProjectProcessesResponse.prototype.addProjectProcesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.ProjectProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProjectProcessesResponse} returns this
 */
proto.entpb.BatchCreateProjectProcessesResponse.prototype.clearProjectProcessesList = function() {
  return this.setProjectProcessesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ProjectSkills.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ProjectSkills.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ProjectSkills} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ProjectSkills.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    skill: (f = msg.getSkill()) && proto.entpb.Skill.toObject(includeInstance, f),
    project: (f = msg.getProject()) && proto.entpb.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ProjectSkills}
 */
proto.entpb.ProjectSkills.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ProjectSkills;
  return proto.entpb.ProjectSkills.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ProjectSkills} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ProjectSkills}
 */
proto.entpb.ProjectSkills.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.entpb.Skill;
      reader.readMessage(value,proto.entpb.Skill.deserializeBinaryFromReader);
      msg.setSkill(value);
      break;
    case 3:
      var value = new proto.entpb.Project;
      reader.readMessage(value,proto.entpb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ProjectSkills.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ProjectSkills.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ProjectSkills} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ProjectSkills.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSkill();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.entpb.Skill.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entpb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.ProjectSkills.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ProjectSkills} returns this
 */
proto.entpb.ProjectSkills.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Skill skill = 2;
 * @return {?proto.entpb.Skill}
 */
proto.entpb.ProjectSkills.prototype.getSkill = function() {
  return /** @type{?proto.entpb.Skill} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Skill, 2));
};


/**
 * @param {?proto.entpb.Skill|undefined} value
 * @return {!proto.entpb.ProjectSkills} returns this
*/
proto.entpb.ProjectSkills.prototype.setSkill = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.ProjectSkills} returns this
 */
proto.entpb.ProjectSkills.prototype.clearSkill = function() {
  return this.setSkill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.ProjectSkills.prototype.hasSkill = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Project project = 3;
 * @return {?proto.entpb.Project}
 */
proto.entpb.ProjectSkills.prototype.getProject = function() {
  return /** @type{?proto.entpb.Project} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Project, 3));
};


/**
 * @param {?proto.entpb.Project|undefined} value
 * @return {!proto.entpb.ProjectSkills} returns this
*/
proto.entpb.ProjectSkills.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.ProjectSkills} returns this
 */
proto.entpb.ProjectSkills.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.ProjectSkills.prototype.hasProject = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.CreateProjectSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.CreateProjectSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.CreateProjectSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProjectSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectSkills: (f = msg.getProjectSkills()) && proto.entpb.ProjectSkills.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.CreateProjectSkillsRequest}
 */
proto.entpb.CreateProjectSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.CreateProjectSkillsRequest;
  return proto.entpb.CreateProjectSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.CreateProjectSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.CreateProjectSkillsRequest}
 */
proto.entpb.CreateProjectSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectSkills;
      reader.readMessage(value,proto.entpb.ProjectSkills.deserializeBinaryFromReader);
      msg.setProjectSkills(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.CreateProjectSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.CreateProjectSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.CreateProjectSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateProjectSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSkills();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.ProjectSkills.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProjectSkills project_skills = 1;
 * @return {?proto.entpb.ProjectSkills}
 */
proto.entpb.CreateProjectSkillsRequest.prototype.getProjectSkills = function() {
  return /** @type{?proto.entpb.ProjectSkills} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectSkills, 1));
};


/**
 * @param {?proto.entpb.ProjectSkills|undefined} value
 * @return {!proto.entpb.CreateProjectSkillsRequest} returns this
*/
proto.entpb.CreateProjectSkillsRequest.prototype.setProjectSkills = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.CreateProjectSkillsRequest} returns this
 */
proto.entpb.CreateProjectSkillsRequest.prototype.clearProjectSkills = function() {
  return this.setProjectSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.CreateProjectSkillsRequest.prototype.hasProjectSkills = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.GetProjectSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.GetProjectSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.GetProjectSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProjectSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.GetProjectSkillsRequest}
 */
proto.entpb.GetProjectSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.GetProjectSkillsRequest;
  return proto.entpb.GetProjectSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.GetProjectSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.GetProjectSkillsRequest}
 */
proto.entpb.GetProjectSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.entpb.GetProjectSkillsRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.GetProjectSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.GetProjectSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.GetProjectSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetProjectSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.GetProjectSkillsRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.GetProjectSkillsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.GetProjectSkillsRequest} returns this
 */
proto.entpb.GetProjectSkillsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional View view = 2;
 * @return {!proto.entpb.GetProjectSkillsRequest.View}
 */
proto.entpb.GetProjectSkillsRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.GetProjectSkillsRequest.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entpb.GetProjectSkillsRequest.View} value
 * @return {!proto.entpb.GetProjectSkillsRequest} returns this
 */
proto.entpb.GetProjectSkillsRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.UpdateProjectSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.UpdateProjectSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.UpdateProjectSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProjectSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectSkills: (f = msg.getProjectSkills()) && proto.entpb.ProjectSkills.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.UpdateProjectSkillsRequest}
 */
proto.entpb.UpdateProjectSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.UpdateProjectSkillsRequest;
  return proto.entpb.UpdateProjectSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.UpdateProjectSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.UpdateProjectSkillsRequest}
 */
proto.entpb.UpdateProjectSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectSkills;
      reader.readMessage(value,proto.entpb.ProjectSkills.deserializeBinaryFromReader);
      msg.setProjectSkills(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.UpdateProjectSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.UpdateProjectSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.UpdateProjectSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateProjectSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSkills();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.ProjectSkills.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProjectSkills project_skills = 1;
 * @return {?proto.entpb.ProjectSkills}
 */
proto.entpb.UpdateProjectSkillsRequest.prototype.getProjectSkills = function() {
  return /** @type{?proto.entpb.ProjectSkills} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectSkills, 1));
};


/**
 * @param {?proto.entpb.ProjectSkills|undefined} value
 * @return {!proto.entpb.UpdateProjectSkillsRequest} returns this
*/
proto.entpb.UpdateProjectSkillsRequest.prototype.setProjectSkills = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.UpdateProjectSkillsRequest} returns this
 */
proto.entpb.UpdateProjectSkillsRequest.prototype.clearProjectSkills = function() {
  return this.setProjectSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.UpdateProjectSkillsRequest.prototype.hasProjectSkills = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.DeleteProjectSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.DeleteProjectSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.DeleteProjectSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProjectSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.DeleteProjectSkillsRequest}
 */
proto.entpb.DeleteProjectSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.DeleteProjectSkillsRequest;
  return proto.entpb.DeleteProjectSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.DeleteProjectSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.DeleteProjectSkillsRequest}
 */
proto.entpb.DeleteProjectSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.DeleteProjectSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.DeleteProjectSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.DeleteProjectSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteProjectSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.DeleteProjectSkillsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.DeleteProjectSkillsRequest} returns this
 */
proto.entpb.DeleteProjectSkillsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProjectSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProjectSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProjectSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProjectSkillsRequest}
 */
proto.entpb.ListProjectSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProjectSkillsRequest;
  return proto.entpb.ListProjectSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProjectSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProjectSkillsRequest}
 */
proto.entpb.ListProjectSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {!proto.entpb.ListProjectSkillsRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProjectSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProjectSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProjectSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.ListProjectSkillsRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.entpb.ListProjectSkillsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ListProjectSkillsRequest} returns this
 */
proto.entpb.ListProjectSkillsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.entpb.ListProjectSkillsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProjectSkillsRequest} returns this
 */
proto.entpb.ListProjectSkillsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional View view = 3;
 * @return {!proto.entpb.ListProjectSkillsRequest.View}
 */
proto.entpb.ListProjectSkillsRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.ListProjectSkillsRequest.View} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.entpb.ListProjectSkillsRequest.View} value
 * @return {!proto.entpb.ListProjectSkillsRequest} returns this
 */
proto.entpb.ListProjectSkillsRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ListProjectSkillsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListProjectSkillsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListProjectSkillsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListProjectSkillsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectSkillsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectSkillsListList: jspb.Message.toObjectList(msg.getProjectSkillsListList(),
    proto.entpb.ProjectSkills.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListProjectSkillsResponse}
 */
proto.entpb.ListProjectSkillsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListProjectSkillsResponse;
  return proto.entpb.ListProjectSkillsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListProjectSkillsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListProjectSkillsResponse}
 */
proto.entpb.ListProjectSkillsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectSkills;
      reader.readMessage(value,proto.entpb.ProjectSkills.deserializeBinaryFromReader);
      msg.addProjectSkillsList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListProjectSkillsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListProjectSkillsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListProjectSkillsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListProjectSkillsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSkillsListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.ProjectSkills.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ProjectSkills project_skills_list = 1;
 * @return {!Array<!proto.entpb.ProjectSkills>}
 */
proto.entpb.ListProjectSkillsResponse.prototype.getProjectSkillsListList = function() {
  return /** @type{!Array<!proto.entpb.ProjectSkills>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProjectSkills, 1));
};


/**
 * @param {!Array<!proto.entpb.ProjectSkills>} value
 * @return {!proto.entpb.ListProjectSkillsResponse} returns this
*/
proto.entpb.ListProjectSkillsResponse.prototype.setProjectSkillsListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.ProjectSkills=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProjectSkills}
 */
proto.entpb.ListProjectSkillsResponse.prototype.addProjectSkillsList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.ProjectSkills, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ListProjectSkillsResponse} returns this
 */
proto.entpb.ListProjectSkillsResponse.prototype.clearProjectSkillsListList = function() {
  return this.setProjectSkillsListList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.entpb.ListProjectSkillsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListProjectSkillsResponse} returns this
 */
proto.entpb.ListProjectSkillsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProjectSkillsSliceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProjectSkillsSliceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.entpb.CreateProjectSkillsRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceRequest}
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProjectSkillsSliceRequest;
  return proto.entpb.BatchCreateProjectSkillsSliceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProjectSkillsSliceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceRequest}
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.CreateProjectSkillsRequest;
      reader.readMessage(value,proto.entpb.CreateProjectSkillsRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProjectSkillsSliceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProjectSkillsSliceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.CreateProjectSkillsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateProjectSkillsRequest requests = 1;
 * @return {!Array<!proto.entpb.CreateProjectSkillsRequest>}
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.entpb.CreateProjectSkillsRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.CreateProjectSkillsRequest, 1));
};


/**
 * @param {!Array<!proto.entpb.CreateProjectSkillsRequest>} value
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceRequest} returns this
*/
proto.entpb.BatchCreateProjectSkillsSliceRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.CreateProjectSkillsRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.CreateProjectSkillsRequest}
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.CreateProjectSkillsRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceRequest} returns this
 */
proto.entpb.BatchCreateProjectSkillsSliceRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateProjectSkillsSliceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateProjectSkillsSliceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectSkillsSliceList: jspb.Message.toObjectList(msg.getProjectSkillsSliceList(),
    proto.entpb.ProjectSkills.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceResponse}
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateProjectSkillsSliceResponse;
  return proto.entpb.BatchCreateProjectSkillsSliceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateProjectSkillsSliceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceResponse}
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.ProjectSkills;
      reader.readMessage(value,proto.entpb.ProjectSkills.deserializeBinaryFromReader);
      msg.addProjectSkillsSlice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateProjectSkillsSliceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateProjectSkillsSliceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSkillsSliceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.ProjectSkills.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProjectSkills project_skills_slice = 1;
 * @return {!Array<!proto.entpb.ProjectSkills>}
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.prototype.getProjectSkillsSliceList = function() {
  return /** @type{!Array<!proto.entpb.ProjectSkills>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.ProjectSkills, 1));
};


/**
 * @param {!Array<!proto.entpb.ProjectSkills>} value
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceResponse} returns this
*/
proto.entpb.BatchCreateProjectSkillsSliceResponse.prototype.setProjectSkillsSliceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.ProjectSkills=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.ProjectSkills}
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.prototype.addProjectSkillsSlice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.ProjectSkills, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateProjectSkillsSliceResponse} returns this
 */
proto.entpb.BatchCreateProjectSkillsSliceResponse.prototype.clearProjectSkillsSliceList = function() {
  return this.setProjectSkillsSliceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.Skill.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.Skill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.Skill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.Skill.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    scale: jspb.Message.getFieldWithDefault(msg, 4, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    skilltype: (f = msg.getSkilltype()) && proto.entpb.SkillType.toObject(includeInstance, f),
    spsid: (f = msg.getSpsid()) && proto.entpb.ProjectSkills.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.Skill}
 */
proto.entpb.Skill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.Skill;
  return proto.entpb.Skill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.Skill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.Skill}
 */
proto.entpb.Skill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLevel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScale(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 7:
      var value = new proto.entpb.SkillType;
      reader.readMessage(value,proto.entpb.SkillType.deserializeBinaryFromReader);
      msg.setSkilltype(value);
      break;
    case 8:
      var value = new proto.entpb.ProjectSkills;
      reader.readMessage(value,proto.entpb.ProjectSkills.deserializeBinaryFromReader);
      msg.setSpsid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.Skill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.Skill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.Skill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.Skill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getScale();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSkilltype();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.entpb.SkillType.serializeBinaryToWriter
    );
  }
  f = message.getSpsid();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.entpb.ProjectSkills.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.Skill.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entpb.Skill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 level = 3;
 * @return {number}
 */
proto.entpb.Skill.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 scale = 4;
 * @return {number}
 */
proto.entpb.Skill.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.setScale = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.entpb.Skill.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.entpb.Skill} returns this
*/
proto.entpb.Skill.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Skill.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.entpb.Skill.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.entpb.Skill} returns this
*/
proto.entpb.Skill.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Skill.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SkillType skillType = 7;
 * @return {?proto.entpb.SkillType}
 */
proto.entpb.Skill.prototype.getSkilltype = function() {
  return /** @type{?proto.entpb.SkillType} */ (
    jspb.Message.getWrapperField(this, proto.entpb.SkillType, 7));
};


/**
 * @param {?proto.entpb.SkillType|undefined} value
 * @return {!proto.entpb.Skill} returns this
*/
proto.entpb.Skill.prototype.setSkilltype = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.clearSkilltype = function() {
  return this.setSkilltype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Skill.prototype.hasSkilltype = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ProjectSkills spsid = 8;
 * @return {?proto.entpb.ProjectSkills}
 */
proto.entpb.Skill.prototype.getSpsid = function() {
  return /** @type{?proto.entpb.ProjectSkills} */ (
    jspb.Message.getWrapperField(this, proto.entpb.ProjectSkills, 8));
};


/**
 * @param {?proto.entpb.ProjectSkills|undefined} value
 * @return {!proto.entpb.Skill} returns this
*/
proto.entpb.Skill.prototype.setSpsid = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.Skill} returns this
 */
proto.entpb.Skill.prototype.clearSpsid = function() {
  return this.setSpsid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.Skill.prototype.hasSpsid = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.CreateSkillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.CreateSkillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.CreateSkillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateSkillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    skill: (f = msg.getSkill()) && proto.entpb.Skill.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.CreateSkillRequest}
 */
proto.entpb.CreateSkillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.CreateSkillRequest;
  return proto.entpb.CreateSkillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.CreateSkillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.CreateSkillRequest}
 */
proto.entpb.CreateSkillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Skill;
      reader.readMessage(value,proto.entpb.Skill.deserializeBinaryFromReader);
      msg.setSkill(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.CreateSkillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.CreateSkillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.CreateSkillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateSkillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkill();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.Skill.serializeBinaryToWriter
    );
  }
};


/**
 * optional Skill skill = 1;
 * @return {?proto.entpb.Skill}
 */
proto.entpb.CreateSkillRequest.prototype.getSkill = function() {
  return /** @type{?proto.entpb.Skill} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Skill, 1));
};


/**
 * @param {?proto.entpb.Skill|undefined} value
 * @return {!proto.entpb.CreateSkillRequest} returns this
*/
proto.entpb.CreateSkillRequest.prototype.setSkill = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.CreateSkillRequest} returns this
 */
proto.entpb.CreateSkillRequest.prototype.clearSkill = function() {
  return this.setSkill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.CreateSkillRequest.prototype.hasSkill = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.GetSkillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.GetSkillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.GetSkillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetSkillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.GetSkillRequest}
 */
proto.entpb.GetSkillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.GetSkillRequest;
  return proto.entpb.GetSkillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.GetSkillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.GetSkillRequest}
 */
proto.entpb.GetSkillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.entpb.GetSkillRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.GetSkillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.GetSkillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.GetSkillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetSkillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.GetSkillRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.GetSkillRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.GetSkillRequest} returns this
 */
proto.entpb.GetSkillRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional View view = 2;
 * @return {!proto.entpb.GetSkillRequest.View}
 */
proto.entpb.GetSkillRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.GetSkillRequest.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entpb.GetSkillRequest.View} value
 * @return {!proto.entpb.GetSkillRequest} returns this
 */
proto.entpb.GetSkillRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.UpdateSkillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.UpdateSkillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.UpdateSkillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateSkillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    skill: (f = msg.getSkill()) && proto.entpb.Skill.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.UpdateSkillRequest}
 */
proto.entpb.UpdateSkillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.UpdateSkillRequest;
  return proto.entpb.UpdateSkillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.UpdateSkillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.UpdateSkillRequest}
 */
proto.entpb.UpdateSkillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Skill;
      reader.readMessage(value,proto.entpb.Skill.deserializeBinaryFromReader);
      msg.setSkill(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.UpdateSkillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.UpdateSkillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.UpdateSkillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateSkillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkill();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.Skill.serializeBinaryToWriter
    );
  }
};


/**
 * optional Skill skill = 1;
 * @return {?proto.entpb.Skill}
 */
proto.entpb.UpdateSkillRequest.prototype.getSkill = function() {
  return /** @type{?proto.entpb.Skill} */ (
    jspb.Message.getWrapperField(this, proto.entpb.Skill, 1));
};


/**
 * @param {?proto.entpb.Skill|undefined} value
 * @return {!proto.entpb.UpdateSkillRequest} returns this
*/
proto.entpb.UpdateSkillRequest.prototype.setSkill = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.UpdateSkillRequest} returns this
 */
proto.entpb.UpdateSkillRequest.prototype.clearSkill = function() {
  return this.setSkill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.UpdateSkillRequest.prototype.hasSkill = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.DeleteSkillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.DeleteSkillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.DeleteSkillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteSkillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.DeleteSkillRequest}
 */
proto.entpb.DeleteSkillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.DeleteSkillRequest;
  return proto.entpb.DeleteSkillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.DeleteSkillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.DeleteSkillRequest}
 */
proto.entpb.DeleteSkillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.DeleteSkillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.DeleteSkillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.DeleteSkillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteSkillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.DeleteSkillRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.DeleteSkillRequest} returns this
 */
proto.entpb.DeleteSkillRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListSkillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListSkillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListSkillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListSkillRequest}
 */
proto.entpb.ListSkillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListSkillRequest;
  return proto.entpb.ListSkillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListSkillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListSkillRequest}
 */
proto.entpb.ListSkillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {!proto.entpb.ListSkillRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListSkillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListSkillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListSkillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.ListSkillRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.entpb.ListSkillRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ListSkillRequest} returns this
 */
proto.entpb.ListSkillRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.entpb.ListSkillRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListSkillRequest} returns this
 */
proto.entpb.ListSkillRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional View view = 3;
 * @return {!proto.entpb.ListSkillRequest.View}
 */
proto.entpb.ListSkillRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.ListSkillRequest.View} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.entpb.ListSkillRequest.View} value
 * @return {!proto.entpb.ListSkillRequest} returns this
 */
proto.entpb.ListSkillRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ListSkillResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListSkillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListSkillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListSkillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillListList: jspb.Message.toObjectList(msg.getSkillListList(),
    proto.entpb.Skill.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListSkillResponse}
 */
proto.entpb.ListSkillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListSkillResponse;
  return proto.entpb.ListSkillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListSkillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListSkillResponse}
 */
proto.entpb.ListSkillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Skill;
      reader.readMessage(value,proto.entpb.Skill.deserializeBinaryFromReader);
      msg.addSkillList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListSkillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListSkillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListSkillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.Skill.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Skill skill_list = 1;
 * @return {!Array<!proto.entpb.Skill>}
 */
proto.entpb.ListSkillResponse.prototype.getSkillListList = function() {
  return /** @type{!Array<!proto.entpb.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.Skill, 1));
};


/**
 * @param {!Array<!proto.entpb.Skill>} value
 * @return {!proto.entpb.ListSkillResponse} returns this
*/
proto.entpb.ListSkillResponse.prototype.setSkillListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.Skill}
 */
proto.entpb.ListSkillResponse.prototype.addSkillList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ListSkillResponse} returns this
 */
proto.entpb.ListSkillResponse.prototype.clearSkillListList = function() {
  return this.setSkillListList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.entpb.ListSkillResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListSkillResponse} returns this
 */
proto.entpb.ListSkillResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateSkillsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.entpb.CreateSkillRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateSkillsRequest}
 */
proto.entpb.BatchCreateSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateSkillsRequest;
  return proto.entpb.BatchCreateSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateSkillsRequest}
 */
proto.entpb.BatchCreateSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.CreateSkillRequest;
      reader.readMessage(value,proto.entpb.CreateSkillRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.CreateSkillRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateSkillRequest requests = 1;
 * @return {!Array<!proto.entpb.CreateSkillRequest>}
 */
proto.entpb.BatchCreateSkillsRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.entpb.CreateSkillRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.CreateSkillRequest, 1));
};


/**
 * @param {!Array<!proto.entpb.CreateSkillRequest>} value
 * @return {!proto.entpb.BatchCreateSkillsRequest} returns this
*/
proto.entpb.BatchCreateSkillsRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.CreateSkillRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.CreateSkillRequest}
 */
proto.entpb.BatchCreateSkillsRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.CreateSkillRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateSkillsRequest} returns this
 */
proto.entpb.BatchCreateSkillsRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateSkillsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateSkillsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateSkillsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateSkillsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.entpb.Skill.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateSkillsResponse}
 */
proto.entpb.BatchCreateSkillsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateSkillsResponse;
  return proto.entpb.BatchCreateSkillsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateSkillsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateSkillsResponse}
 */
proto.entpb.BatchCreateSkillsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.Skill;
      reader.readMessage(value,proto.entpb.Skill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateSkillsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateSkillsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateSkillsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.Skill.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Skill skills = 1;
 * @return {!Array<!proto.entpb.Skill>}
 */
proto.entpb.BatchCreateSkillsResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.entpb.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.Skill, 1));
};


/**
 * @param {!Array<!proto.entpb.Skill>} value
 * @return {!proto.entpb.BatchCreateSkillsResponse} returns this
*/
proto.entpb.BatchCreateSkillsResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.Skill}
 */
proto.entpb.BatchCreateSkillsResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateSkillsResponse} returns this
 */
proto.entpb.BatchCreateSkillsResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.SkillType.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.SkillType.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.SkillType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.SkillType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.SkillType.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stsidList: jspb.Message.toObjectList(msg.getStsidList(),
    proto.entpb.Skill.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.SkillType}
 */
proto.entpb.SkillType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.SkillType;
  return proto.entpb.SkillType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.SkillType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.SkillType}
 */
proto.entpb.SkillType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.entpb.Skill;
      reader.readMessage(value,proto.entpb.Skill.deserializeBinaryFromReader);
      msg.addStsid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.SkillType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.SkillType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.SkillType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.SkillType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStsidList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.entpb.Skill.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.SkillType.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.SkillType} returns this
 */
proto.entpb.SkillType.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entpb.SkillType.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.SkillType} returns this
 */
proto.entpb.SkillType.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Skill stsid = 3;
 * @return {!Array<!proto.entpb.Skill>}
 */
proto.entpb.SkillType.prototype.getStsidList = function() {
  return /** @type{!Array<!proto.entpb.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.Skill, 3));
};


/**
 * @param {!Array<!proto.entpb.Skill>} value
 * @return {!proto.entpb.SkillType} returns this
*/
proto.entpb.SkillType.prototype.setStsidList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.entpb.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.Skill}
 */
proto.entpb.SkillType.prototype.addStsid = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.entpb.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.SkillType} returns this
 */
proto.entpb.SkillType.prototype.clearStsidList = function() {
  return this.setStsidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.CreateSkillTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.CreateSkillTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.CreateSkillTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateSkillTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillType: (f = msg.getSkillType()) && proto.entpb.SkillType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.CreateSkillTypeRequest}
 */
proto.entpb.CreateSkillTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.CreateSkillTypeRequest;
  return proto.entpb.CreateSkillTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.CreateSkillTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.CreateSkillTypeRequest}
 */
proto.entpb.CreateSkillTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.SkillType;
      reader.readMessage(value,proto.entpb.SkillType.deserializeBinaryFromReader);
      msg.setSkillType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.CreateSkillTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.CreateSkillTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.CreateSkillTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.CreateSkillTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.SkillType.serializeBinaryToWriter
    );
  }
};


/**
 * optional SkillType skill_type = 1;
 * @return {?proto.entpb.SkillType}
 */
proto.entpb.CreateSkillTypeRequest.prototype.getSkillType = function() {
  return /** @type{?proto.entpb.SkillType} */ (
    jspb.Message.getWrapperField(this, proto.entpb.SkillType, 1));
};


/**
 * @param {?proto.entpb.SkillType|undefined} value
 * @return {!proto.entpb.CreateSkillTypeRequest} returns this
*/
proto.entpb.CreateSkillTypeRequest.prototype.setSkillType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.CreateSkillTypeRequest} returns this
 */
proto.entpb.CreateSkillTypeRequest.prototype.clearSkillType = function() {
  return this.setSkillType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.CreateSkillTypeRequest.prototype.hasSkillType = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.GetSkillTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.GetSkillTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.GetSkillTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetSkillTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.GetSkillTypeRequest}
 */
proto.entpb.GetSkillTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.GetSkillTypeRequest;
  return proto.entpb.GetSkillTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.GetSkillTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.GetSkillTypeRequest}
 */
proto.entpb.GetSkillTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.entpb.GetSkillTypeRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.GetSkillTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.GetSkillTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.GetSkillTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.GetSkillTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.GetSkillTypeRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.GetSkillTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.GetSkillTypeRequest} returns this
 */
proto.entpb.GetSkillTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional View view = 2;
 * @return {!proto.entpb.GetSkillTypeRequest.View}
 */
proto.entpb.GetSkillTypeRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.GetSkillTypeRequest.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entpb.GetSkillTypeRequest.View} value
 * @return {!proto.entpb.GetSkillTypeRequest} returns this
 */
proto.entpb.GetSkillTypeRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.UpdateSkillTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.UpdateSkillTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.UpdateSkillTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateSkillTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillType: (f = msg.getSkillType()) && proto.entpb.SkillType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.UpdateSkillTypeRequest}
 */
proto.entpb.UpdateSkillTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.UpdateSkillTypeRequest;
  return proto.entpb.UpdateSkillTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.UpdateSkillTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.UpdateSkillTypeRequest}
 */
proto.entpb.UpdateSkillTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.SkillType;
      reader.readMessage(value,proto.entpb.SkillType.deserializeBinaryFromReader);
      msg.setSkillType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.UpdateSkillTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.UpdateSkillTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.UpdateSkillTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.UpdateSkillTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entpb.SkillType.serializeBinaryToWriter
    );
  }
};


/**
 * optional SkillType skill_type = 1;
 * @return {?proto.entpb.SkillType}
 */
proto.entpb.UpdateSkillTypeRequest.prototype.getSkillType = function() {
  return /** @type{?proto.entpb.SkillType} */ (
    jspb.Message.getWrapperField(this, proto.entpb.SkillType, 1));
};


/**
 * @param {?proto.entpb.SkillType|undefined} value
 * @return {!proto.entpb.UpdateSkillTypeRequest} returns this
*/
proto.entpb.UpdateSkillTypeRequest.prototype.setSkillType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entpb.UpdateSkillTypeRequest} returns this
 */
proto.entpb.UpdateSkillTypeRequest.prototype.clearSkillType = function() {
  return this.setSkillType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entpb.UpdateSkillTypeRequest.prototype.hasSkillType = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.DeleteSkillTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.DeleteSkillTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.DeleteSkillTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteSkillTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.DeleteSkillTypeRequest}
 */
proto.entpb.DeleteSkillTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.DeleteSkillTypeRequest;
  return proto.entpb.DeleteSkillTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.DeleteSkillTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.DeleteSkillTypeRequest}
 */
proto.entpb.DeleteSkillTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.DeleteSkillTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.DeleteSkillTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.DeleteSkillTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.DeleteSkillTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.entpb.DeleteSkillTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.DeleteSkillTypeRequest} returns this
 */
proto.entpb.DeleteSkillTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListSkillTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListSkillTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListSkillTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    view: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListSkillTypeRequest}
 */
proto.entpb.ListSkillTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListSkillTypeRequest;
  return proto.entpb.ListSkillTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListSkillTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListSkillTypeRequest}
 */
proto.entpb.ListSkillTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {!proto.entpb.ListSkillTypeRequest.View} */ (reader.readEnum());
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListSkillTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListSkillTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListSkillTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.entpb.ListSkillTypeRequest.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  WITH_EDGE_IDS: 2
};

/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.entpb.ListSkillTypeRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entpb.ListSkillTypeRequest} returns this
 */
proto.entpb.ListSkillTypeRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.entpb.ListSkillTypeRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListSkillTypeRequest} returns this
 */
proto.entpb.ListSkillTypeRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional View view = 3;
 * @return {!proto.entpb.ListSkillTypeRequest.View}
 */
proto.entpb.ListSkillTypeRequest.prototype.getView = function() {
  return /** @type {!proto.entpb.ListSkillTypeRequest.View} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.entpb.ListSkillTypeRequest.View} value
 * @return {!proto.entpb.ListSkillTypeRequest} returns this
 */
proto.entpb.ListSkillTypeRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.ListSkillTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.ListSkillTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.ListSkillTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.ListSkillTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillTypeListList: jspb.Message.toObjectList(msg.getSkillTypeListList(),
    proto.entpb.SkillType.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.ListSkillTypeResponse}
 */
proto.entpb.ListSkillTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.ListSkillTypeResponse;
  return proto.entpb.ListSkillTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.ListSkillTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.ListSkillTypeResponse}
 */
proto.entpb.ListSkillTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.SkillType;
      reader.readMessage(value,proto.entpb.SkillType.deserializeBinaryFromReader);
      msg.addSkillTypeList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.ListSkillTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.ListSkillTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.ListSkillTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.ListSkillTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillTypeListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.SkillType.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated SkillType skill_type_list = 1;
 * @return {!Array<!proto.entpb.SkillType>}
 */
proto.entpb.ListSkillTypeResponse.prototype.getSkillTypeListList = function() {
  return /** @type{!Array<!proto.entpb.SkillType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.SkillType, 1));
};


/**
 * @param {!Array<!proto.entpb.SkillType>} value
 * @return {!proto.entpb.ListSkillTypeResponse} returns this
*/
proto.entpb.ListSkillTypeResponse.prototype.setSkillTypeListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.SkillType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.SkillType}
 */
proto.entpb.ListSkillTypeResponse.prototype.addSkillTypeList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.SkillType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.ListSkillTypeResponse} returns this
 */
proto.entpb.ListSkillTypeResponse.prototype.clearSkillTypeListList = function() {
  return this.setSkillTypeListList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.entpb.ListSkillTypeResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entpb.ListSkillTypeResponse} returns this
 */
proto.entpb.ListSkillTypeResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateSkillTypesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateSkillTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateSkillTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateSkillTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.entpb.CreateSkillTypeRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateSkillTypesRequest}
 */
proto.entpb.BatchCreateSkillTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateSkillTypesRequest;
  return proto.entpb.BatchCreateSkillTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateSkillTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateSkillTypesRequest}
 */
proto.entpb.BatchCreateSkillTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.CreateSkillTypeRequest;
      reader.readMessage(value,proto.entpb.CreateSkillTypeRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateSkillTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateSkillTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateSkillTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.CreateSkillTypeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateSkillTypeRequest requests = 1;
 * @return {!Array<!proto.entpb.CreateSkillTypeRequest>}
 */
proto.entpb.BatchCreateSkillTypesRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.entpb.CreateSkillTypeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.CreateSkillTypeRequest, 1));
};


/**
 * @param {!Array<!proto.entpb.CreateSkillTypeRequest>} value
 * @return {!proto.entpb.BatchCreateSkillTypesRequest} returns this
*/
proto.entpb.BatchCreateSkillTypesRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.CreateSkillTypeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.CreateSkillTypeRequest}
 */
proto.entpb.BatchCreateSkillTypesRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.CreateSkillTypeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateSkillTypesRequest} returns this
 */
proto.entpb.BatchCreateSkillTypesRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entpb.BatchCreateSkillTypesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entpb.BatchCreateSkillTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.entpb.BatchCreateSkillTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entpb.BatchCreateSkillTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillTypesList: jspb.Message.toObjectList(msg.getSkillTypesList(),
    proto.entpb.SkillType.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entpb.BatchCreateSkillTypesResponse}
 */
proto.entpb.BatchCreateSkillTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entpb.BatchCreateSkillTypesResponse;
  return proto.entpb.BatchCreateSkillTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entpb.BatchCreateSkillTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entpb.BatchCreateSkillTypesResponse}
 */
proto.entpb.BatchCreateSkillTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entpb.SkillType;
      reader.readMessage(value,proto.entpb.SkillType.deserializeBinaryFromReader);
      msg.addSkillTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entpb.BatchCreateSkillTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entpb.BatchCreateSkillTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entpb.BatchCreateSkillTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entpb.BatchCreateSkillTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entpb.SkillType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SkillType skill_types = 1;
 * @return {!Array<!proto.entpb.SkillType>}
 */
proto.entpb.BatchCreateSkillTypesResponse.prototype.getSkillTypesList = function() {
  return /** @type{!Array<!proto.entpb.SkillType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entpb.SkillType, 1));
};


/**
 * @param {!Array<!proto.entpb.SkillType>} value
 * @return {!proto.entpb.BatchCreateSkillTypesResponse} returns this
*/
proto.entpb.BatchCreateSkillTypesResponse.prototype.setSkillTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entpb.SkillType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entpb.SkillType}
 */
proto.entpb.BatchCreateSkillTypesResponse.prototype.addSkillTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entpb.SkillType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entpb.BatchCreateSkillTypesResponse} returns this
 */
proto.entpb.BatchCreateSkillTypesResponse.prototype.clearSkillTypesList = function() {
  return this.setSkillTypesList([]);
};


goog.object.extend(exports, proto.entpb);
