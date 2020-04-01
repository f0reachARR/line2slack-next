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

const BotService_notifyLeaveGroup_args = class {
  constructor(args) {
    this.groupMid = null;
    if (args) {
      if (args.groupMid !== undefined && args.groupMid !== null) {
        this.groupMid = args.groupMid;
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
          this.groupMid = input.readString();
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
    output.writeStructBegin('BotService_notifyLeaveGroup_args');
    if (this.groupMid !== null && this.groupMid !== undefined) {
      output.writeFieldBegin('groupMid', Thrift.Type.STRING, 1);
      output.writeString(this.groupMid);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const BotService_notifyLeaveGroup_result = class {
  constructor(args) {
    this.e = null;
    if (args instanceof ttypes.TalkException) {
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
          this.e = new ttypes.TalkException();
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
    output.writeStructBegin('BotService_notifyLeaveGroup_result');
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
const BotService_notifyLeaveRoom_args = class {
  constructor(args) {
    this.roomMid = null;
    if (args) {
      if (args.roomMid !== undefined && args.roomMid !== null) {
        this.roomMid = args.roomMid;
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
          this.roomMid = input.readString();
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
    output.writeStructBegin('BotService_notifyLeaveRoom_args');
    if (this.roomMid !== null && this.roomMid !== undefined) {
      output.writeFieldBegin('roomMid', Thrift.Type.STRING, 1);
      output.writeString(this.roomMid);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const BotService_notifyLeaveRoom_result = class {
  constructor(args) {
    this.e = null;
    if (args instanceof ttypes.TalkException) {
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
          this.e = new ttypes.TalkException();
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
    output.writeStructBegin('BotService_notifyLeaveRoom_result');
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
const BotService_getBotUseInfo_args = class {
  constructor(args) {
    this.botMid = null;
    if (args) {
      if (args.botMid !== undefined && args.botMid !== null) {
        this.botMid = args.botMid;
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
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.botMid = input.readString();
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
    output.writeStructBegin('BotService_getBotUseInfo_args');
    if (this.botMid !== null && this.botMid !== undefined) {
      output.writeFieldBegin('botMid', Thrift.Type.STRING, 2);
      output.writeString(this.botMid);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const BotService_getBotUseInfo_result = class {
  constructor(args) {
    this.success = null;
    this.e = null;
    if (args instanceof ttypes.TalkException) {
        this.e = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ttypes.BotUseInfo(args.success);
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
          this.success = new ttypes.BotUseInfo();
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
    output.writeStructBegin('BotService_getBotUseInfo_result');
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
const BotService_sendChatCheckedByWatermark_args = class {
  constructor(args) {
    this.seq = null;
    this.mid = null;
    this.watermark = null;
    this.sessionId = null;
    if (args) {
      if (args.seq !== undefined && args.seq !== null) {
        this.seq = args.seq;
      }
      if (args.mid !== undefined && args.mid !== null) {
        this.mid = args.mid;
      }
      if (args.watermark !== undefined && args.watermark !== null) {
        this.watermark = args.watermark;
      }
      if (args.sessionId !== undefined && args.sessionId !== null) {
        this.sessionId = args.sessionId;
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
        if (ftype == Thrift.Type.I32) {
          this.seq = input.readI32();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.mid = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.I64) {
          this.watermark = input.readI64();
        } else {
          input.skip(ftype);
        }
        break;
        case 4:
        if (ftype == Thrift.Type.BYTE) {
          this.sessionId = input.readByte();
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
    output.writeStructBegin('BotService_sendChatCheckedByWatermark_args');
    if (this.seq !== null && this.seq !== undefined) {
      output.writeFieldBegin('seq', Thrift.Type.I32, 1);
      output.writeI32(this.seq);
      output.writeFieldEnd();
    }
    if (this.mid !== null && this.mid !== undefined) {
      output.writeFieldBegin('mid', Thrift.Type.STRING, 2);
      output.writeString(this.mid);
      output.writeFieldEnd();
    }
    if (this.watermark !== null && this.watermark !== undefined) {
      output.writeFieldBegin('watermark', Thrift.Type.I64, 3);
      output.writeI64(this.watermark);
      output.writeFieldEnd();
    }
    if (this.sessionId !== null && this.sessionId !== undefined) {
      output.writeFieldBegin('sessionId', Thrift.Type.BYTE, 4);
      output.writeByte(this.sessionId);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const BotService_sendChatCheckedByWatermark_result = class {
  constructor(args) {
    this.e = null;
    if (args instanceof ttypes.TalkException) {
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
          this.e = new ttypes.TalkException();
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
    output.writeStructBegin('BotService_sendChatCheckedByWatermark_result');
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
const BotServiceClient = exports.Client = class {
  constructor(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }
  seqid () { return this._seqid; }
  new_seqid () { return this._seqid += 1; }

  notifyLeaveGroup (groupMid) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_notifyLeaveGroup(groupMid);
    });
  }

  send_notifyLeaveGroup (groupMid) {
    const output = new this.pClass(this.output);
    const params = {
      groupMid: groupMid
    };
    const args = new BotService_notifyLeaveGroup_args(params);
    try {
      output.writeMessageBegin('notifyLeaveGroup', Thrift.MessageType.CALL, this.seqid());
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

  recv_notifyLeaveGroup (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new BotService_notifyLeaveGroup_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    callback(null);
  }

  notifyLeaveRoom (roomMid) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_notifyLeaveRoom(roomMid);
    });
  }

  send_notifyLeaveRoom (roomMid) {
    const output = new this.pClass(this.output);
    const params = {
      roomMid: roomMid
    };
    const args = new BotService_notifyLeaveRoom_args(params);
    try {
      output.writeMessageBegin('notifyLeaveRoom', Thrift.MessageType.CALL, this.seqid());
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

  recv_notifyLeaveRoom (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new BotService_notifyLeaveRoom_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    callback(null);
  }

  getBotUseInfo (botMid) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_getBotUseInfo(botMid);
    });
  }

  send_getBotUseInfo (botMid) {
    const output = new this.pClass(this.output);
    const params = {
      botMid: botMid
    };
    const args = new BotService_getBotUseInfo_args(params);
    try {
      output.writeMessageBegin('getBotUseInfo', Thrift.MessageType.CALL, this.seqid());
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

  recv_getBotUseInfo (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new BotService_getBotUseInfo_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('getBotUseInfo failed: unknown result');
  }

  sendChatCheckedByWatermark (seq, mid, watermark, sessionId) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_sendChatCheckedByWatermark(seq, mid, watermark, sessionId);
    });
  }

  send_sendChatCheckedByWatermark (seq, mid, watermark, sessionId) {
    const output = new this.pClass(this.output);
    const params = {
      seq: seq,
      mid: mid,
      watermark: watermark,
      sessionId: sessionId
    };
    const args = new BotService_sendChatCheckedByWatermark_args(params);
    try {
      output.writeMessageBegin('sendChatCheckedByWatermark', Thrift.MessageType.CALL, this.seqid());
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

  recv_sendChatCheckedByWatermark (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new BotService_sendChatCheckedByWatermark_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.e) {
      return callback(result.e);
    }
    callback(null);
  }
};
const BotServiceProcessor = exports.Processor = class {
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
  process_notifyLeaveGroup (seqid, input, output) {
    const args = new BotService_notifyLeaveGroup_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.notifyLeaveGroup.length === 1) {
      Promise.resolve(this._handler.notifyLeaveGroup.bind(this._handler)(
        args.groupMid
      )).then(result => {
        const result_obj = new BotService_notifyLeaveGroup_result({success: result});
        output.writeMessageBegin("notifyLeaveGroup", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.TalkException) {
          result = new BotService_notifyLeaveGroup_result(err);
          output.writeMessageBegin("notifyLeaveGroup", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyLeaveGroup", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.notifyLeaveGroup(args.groupMid, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
          result_obj = new BotService_notifyLeaveGroup_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("notifyLeaveGroup", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyLeaveGroup", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_notifyLeaveRoom (seqid, input, output) {
    const args = new BotService_notifyLeaveRoom_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.notifyLeaveRoom.length === 1) {
      Promise.resolve(this._handler.notifyLeaveRoom.bind(this._handler)(
        args.roomMid
      )).then(result => {
        const result_obj = new BotService_notifyLeaveRoom_result({success: result});
        output.writeMessageBegin("notifyLeaveRoom", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.TalkException) {
          result = new BotService_notifyLeaveRoom_result(err);
          output.writeMessageBegin("notifyLeaveRoom", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyLeaveRoom", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.notifyLeaveRoom(args.roomMid, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
          result_obj = new BotService_notifyLeaveRoom_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("notifyLeaveRoom", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyLeaveRoom", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_getBotUseInfo (seqid, input, output) {
    const args = new BotService_getBotUseInfo_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.getBotUseInfo.length === 1) {
      Promise.resolve(this._handler.getBotUseInfo.bind(this._handler)(
        args.botMid
      )).then(result => {
        const result_obj = new BotService_getBotUseInfo_result({success: result});
        output.writeMessageBegin("getBotUseInfo", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.TalkException) {
          result = new BotService_getBotUseInfo_result(err);
          output.writeMessageBegin("getBotUseInfo", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBotUseInfo", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.getBotUseInfo(args.botMid, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
          result_obj = new BotService_getBotUseInfo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("getBotUseInfo", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBotUseInfo", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
  process_sendChatCheckedByWatermark (seqid, input, output) {
    const args = new BotService_sendChatCheckedByWatermark_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.sendChatCheckedByWatermark.length === 4) {
      Promise.resolve(this._handler.sendChatCheckedByWatermark.bind(this._handler)(
        args.seq,
        args.mid,
        args.watermark,
        args.sessionId
      )).then(result => {
        const result_obj = new BotService_sendChatCheckedByWatermark_result({success: result});
        output.writeMessageBegin("sendChatCheckedByWatermark", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        if (err instanceof ttypes.TalkException) {
          result = new BotService_sendChatCheckedByWatermark_result(err);
          output.writeMessageBegin("sendChatCheckedByWatermark", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendChatCheckedByWatermark", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.sendChatCheckedByWatermark(args.seq, args.mid, args.watermark, args.sessionId, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
          result_obj = new BotService_sendChatCheckedByWatermark_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("sendChatCheckedByWatermark", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendChatCheckedByWatermark", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
};
