//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

const thrift = require('thrift');
const Thrift = thrift.Thrift;
const Int64 = require('node-int64');


const ttypes = require('./talk_types');
//HELPER FUNCTIONS AND STRUCTURES

const BeaconQueryService_queryBeaconActions_args = class {
  constructor(args) {
    this.hwid = null;
    this.secureMessage = null;
    this.applicationType = null;
    this.applicationVersion = null;
    this.lang = null;
    if (args) {
      if (args.hwid !== undefined && args.hwid !== null) {
        this.hwid = args.hwid;
      }
      if (args.secureMessage !== undefined && args.secureMessage !== null) {
        this.secureMessage = args.secureMessage;
      }
      if (args.applicationType !== undefined && args.applicationType !== null) {
        this.applicationType = args.applicationType;
      }
      if (args.applicationVersion !== undefined && args.applicationVersion !== null) {
        this.applicationVersion = args.applicationVersion;
      }
      if (args.lang !== undefined && args.lang !== null) {
        this.lang = args.lang;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.hwid = input.readBinary();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.secureMessage = input.readBinary();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I32) {
          this.applicationType = input.readI32();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.STRING) {
          this.applicationVersion = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        case 5:
        if (ftype == Thrift.Type.STRING) {
          this.lang = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('BeaconQueryService_queryBeaconActions_args');
    if (this.hwid !== null && this.hwid !== undefined) {
      output.writeFieldBegin('hwid', Thrift.Type.STRING, 1);
      output.writeBinary(this.hwid);
      output.writeFieldEnd();
    }
    if (this.secureMessage !== null && this.secureMessage !== undefined) {
      output.writeFieldBegin('secureMessage', Thrift.Type.STRING, 2);
      output.writeBinary(this.secureMessage);
      output.writeFieldEnd();
    }
    if (this.applicationType !== null && this.applicationType !== undefined) {
      output.writeFieldBegin('applicationType', Thrift.Type.I32, 3);
      output.writeI32(this.applicationType);
      output.writeFieldEnd();
    }
    if (this.applicationVersion !== null && this.applicationVersion !== undefined) {
      output.writeFieldBegin('applicationVersion', Thrift.Type.STRING, 4);
      output.writeString(this.applicationVersion);
      output.writeFieldEnd();
    }
    if (this.lang !== null && this.lang !== undefined) {
      output.writeFieldBegin('lang', Thrift.Type.STRING, 5);
      output.writeString(this.lang);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const BeaconQueryService_queryBeaconActions_result = class {
  constructor(args) {
    this.success = null;
    this.e = null;
    if (args instanceof ttypes.TalkException) {
        this.e = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ttypes.BeaconQueryResponse(args.success);
      }
      if (args.e !== undefined && args.e !== null) {
        this.e = args.e;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new ttypes.BeaconQueryResponse();
          this.success.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.e = new ttypes.TalkException();
          this.e.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('BeaconQueryService_queryBeaconActions_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    if (this.e !== null && this.e !== undefined) {
      output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
      this.e.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const BeaconQueryServiceClient = exports.Client = class {
  constructor(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }
  seqid () { return this._seqid; }
  new_seqid () { return this._seqid += 1; }

  queryBeaconActions (hwid, secureMessage, applicationType, applicationVersion, lang) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_queryBeaconActions(hwid, secureMessage, applicationType, applicationVersion, lang);
    });
  }

  send_queryBeaconActions (hwid, secureMessage, applicationType, applicationVersion, lang) {
    const output = new this.pClass(this.output);
    const params = {
      hwid: hwid,
      secureMessage: secureMessage,
      applicationType: applicationType,
      applicationVersion: applicationVersion,
      lang: lang
    };
    const args = new BeaconQueryService_queryBeaconActions_args(params);
    try {
      output.writeMessageBegin('queryBeaconActions', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_queryBeaconActions (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new BeaconQueryService_queryBeaconActions_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('queryBeaconActions failed: unknown result');
  }
};
const BeaconQueryServiceProcessor = exports.Processor = class {
  constructor(handler) {
    this._handler = handler;
  }
  process (input, output) {
    const r = input.readMessageBegin();
    if (this['process_' + r.fname]) {
      return this['process_' + r.fname].call(this, r.rseqid, input, output);
    } else {
      input.skip(Thrift.Type.STRUCT);
      input.readMessageEnd();
      const x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
      output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
      x.write(output);
      output.writeMessageEnd();
      output.flush();
    }
  }
  process_queryBeaconActions (seqid, input, output) {
    const args = new BeaconQueryService_queryBeaconActions_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.queryBeaconActions.length === 5) {
      Promise.resolve(this._handler.queryBeaconActions.bind(this._handler)(
        args.hwid,
        args.secureMessage,
        args.applicationType,
        args.applicationVersion,
        args.lang
      )).then(result => {
        const result_obj = new BeaconQueryService_queryBeaconActions_result({success: result});
        output.writeMessageBegin("queryBeaconActions", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.TalkException) {
          result = new BeaconQueryService_queryBeaconActions_result(err);
          output.writeMessageBegin("queryBeaconActions", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("queryBeaconActions", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.queryBeaconActions(args.hwid, args.secureMessage, args.applicationType, args.applicationVersion, args.lang, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
          result_obj = new BeaconQueryService_queryBeaconActions_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("queryBeaconActions", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("queryBeaconActions", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
};
