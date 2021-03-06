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

const LoginPermitNoticeService_checkQrCodeVerified_args = class {
  constructor(args) {
    this.request = null;
    if (args) {
      if (args.request !== undefined && args.request !== null) {
        this.request = new ttypes.LoginQrCode_CheckQrCodeVerifiedRequest(args.request);
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
        if (ftype == Thrift.Type.STRUCT) {
          this.request = new ttypes.LoginQrCode_CheckQrCodeVerifiedRequest();
          this.request.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
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
    output.writeStructBegin('LoginPermitNoticeService_checkQrCodeVerified_args');
    if (this.request !== null && this.request !== undefined) {
      output.writeFieldBegin('request', Thrift.Type.STRUCT, 1);
      this.request.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const LoginPermitNoticeService_checkQrCodeVerified_result = class {
  constructor(args) {
    this.e = null;
    if (args instanceof ttypes.SecondaryQrCodeException) {
        this.e = args;
        return;
    }
    if (args) {
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
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.e = new ttypes.SecondaryQrCodeException();
          this.e.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
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
    output.writeStructBegin('LoginPermitNoticeService_checkQrCodeVerified_result');
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
const LoginPermitNoticeService_checkPinCodeVerified_args = class {
  constructor(args) {
    this.request = null;
    if (args) {
      if (args.request !== undefined && args.request !== null) {
        this.request = new ttypes.LoginQrCode_CheckPinCodeVerifiedRequest(args.request);
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
        if (ftype == Thrift.Type.STRUCT) {
          this.request = new ttypes.LoginQrCode_CheckPinCodeVerifiedRequest();
          this.request.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
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
    output.writeStructBegin('LoginPermitNoticeService_checkPinCodeVerified_args');
    if (this.request !== null && this.request !== undefined) {
      output.writeFieldBegin('request', Thrift.Type.STRUCT, 1);
      this.request.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const LoginPermitNoticeService_checkPinCodeVerified_result = class {
  constructor(args) {
    this.e = null;
    if (args instanceof ttypes.SecondaryQrCodeException) {
        this.e = args;
        return;
    }
    if (args) {
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
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.e = new ttypes.SecondaryQrCodeException();
          this.e.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
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
    output.writeStructBegin('LoginPermitNoticeService_checkPinCodeVerified_result');
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
const LoginPermitNoticeServiceClient = exports.Client = class {
  constructor(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }
  seqid () { return this._seqid; }
  new_seqid () { return this._seqid += 1; }

  checkQrCodeVerified (request) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_checkQrCodeVerified(request);
    });
  }

  send_checkQrCodeVerified (request) {
    const output = new this.pClass(this.output);
    const params = {
      request: request
    };
    const args = new LoginPermitNoticeService_checkQrCodeVerified_args(params);
    try {
      output.writeMessageBegin('checkQrCodeVerified', Thrift.MessageType.CALL, this.seqid());
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

  recv_checkQrCodeVerified (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new LoginPermitNoticeService_checkQrCodeVerified_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    callback(null);
  }

  checkPinCodeVerified (request) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_checkPinCodeVerified(request);
    });
  }

  send_checkPinCodeVerified (request) {
    const output = new this.pClass(this.output);
    const params = {
      request: request
    };
    const args = new LoginPermitNoticeService_checkPinCodeVerified_args(params);
    try {
      output.writeMessageBegin('checkPinCodeVerified', Thrift.MessageType.CALL, this.seqid());
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

  recv_checkPinCodeVerified (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new LoginPermitNoticeService_checkPinCodeVerified_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    callback(null);
  }
};
const LoginPermitNoticeServiceProcessor = exports.Processor = class {
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
  process_checkQrCodeVerified (seqid, input, output) {
    const args = new LoginPermitNoticeService_checkQrCodeVerified_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.checkQrCodeVerified.length === 1) {
      Promise.resolve(this._handler.checkQrCodeVerified.bind(this._handler)(
        args.request
      )).then(result => {
        const result_obj = new LoginPermitNoticeService_checkQrCodeVerified_result({success: result});
        output.writeMessageBegin("checkQrCodeVerified", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.SecondaryQrCodeException) {
          result = new LoginPermitNoticeService_checkQrCodeVerified_result(err);
          output.writeMessageBegin("checkQrCodeVerified", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkQrCodeVerified", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.checkQrCodeVerified(args.request, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.SecondaryQrCodeException) {
          result_obj = new LoginPermitNoticeService_checkQrCodeVerified_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("checkQrCodeVerified", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkQrCodeVerified", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_checkPinCodeVerified (seqid, input, output) {
    const args = new LoginPermitNoticeService_checkPinCodeVerified_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.checkPinCodeVerified.length === 1) {
      Promise.resolve(this._handler.checkPinCodeVerified.bind(this._handler)(
        args.request
      )).then(result => {
        const result_obj = new LoginPermitNoticeService_checkPinCodeVerified_result({success: result});
        output.writeMessageBegin("checkPinCodeVerified", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.SecondaryQrCodeException) {
          result = new LoginPermitNoticeService_checkPinCodeVerified_result(err);
          output.writeMessageBegin("checkPinCodeVerified", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkPinCodeVerified", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.checkPinCodeVerified(args.request, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.SecondaryQrCodeException) {
          result_obj = new LoginPermitNoticeService_checkPinCodeVerified_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("checkPinCodeVerified", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkPinCodeVerified", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
};
