import * as _102 from "./abci/types";
import * as _103 from "./crypto/keys";
import * as _104 from "./crypto/proof";
import * as _105 from "./libs/bits/types";
import * as _106 from "./p2p/types";
import * as _107 from "./types/block";
import * as _108 from "./types/evidence";
import * as _109 from "./types/params";
import * as _110 from "./types/types";
import * as _111 from "./types/validator";
import * as _112 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _102.CheckTxType;
        checkTxTypeToJSON(object: _102.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _102.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _102.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _102.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _102.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _102.EvidenceType;
        evidenceTypeToJSON(object: _102.EvidenceType): string;
        CheckTxType: typeof _102.CheckTxType;
        CheckTxTypeSDKType: typeof _102.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _102.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _102.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _102.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _102.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _102.EvidenceType;
        EvidenceTypeSDKType: typeof _102.EvidenceTypeSDKType;
        Request: {
            encode(message: _102.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Request;
            fromJSON(object: any): _102.Request;
            toJSON(message: _102.Request): unknown;
            fromPartial(object: Partial<_102.Request>): _102.Request;
        };
        RequestEcho: {
            encode(message: _102.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestEcho;
            fromJSON(object: any): _102.RequestEcho;
            toJSON(message: _102.RequestEcho): unknown;
            fromPartial(object: Partial<_102.RequestEcho>): _102.RequestEcho;
        };
        RequestFlush: {
            encode(_: _102.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestFlush;
            fromJSON(_: any): _102.RequestFlush;
            toJSON(_: _102.RequestFlush): unknown;
            fromPartial(_: Partial<_102.RequestFlush>): _102.RequestFlush;
        };
        RequestInfo: {
            encode(message: _102.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestInfo;
            fromJSON(object: any): _102.RequestInfo;
            toJSON(message: _102.RequestInfo): unknown;
            fromPartial(object: Partial<_102.RequestInfo>): _102.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _102.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestSetOption;
            fromJSON(object: any): _102.RequestSetOption;
            toJSON(message: _102.RequestSetOption): unknown;
            fromPartial(object: Partial<_102.RequestSetOption>): _102.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _102.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestInitChain;
            fromJSON(object: any): _102.RequestInitChain;
            toJSON(message: _102.RequestInitChain): unknown;
            fromPartial(object: Partial<_102.RequestInitChain>): _102.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _102.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestQuery;
            fromJSON(object: any): _102.RequestQuery;
            toJSON(message: _102.RequestQuery): unknown;
            fromPartial(object: Partial<_102.RequestQuery>): _102.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _102.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestBeginBlock;
            fromJSON(object: any): _102.RequestBeginBlock;
            toJSON(message: _102.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_102.RequestBeginBlock>): _102.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _102.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestCheckTx;
            fromJSON(object: any): _102.RequestCheckTx;
            toJSON(message: _102.RequestCheckTx): unknown;
            fromPartial(object: Partial<_102.RequestCheckTx>): _102.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _102.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestDeliverTx;
            fromJSON(object: any): _102.RequestDeliverTx;
            toJSON(message: _102.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_102.RequestDeliverTx>): _102.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _102.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestEndBlock;
            fromJSON(object: any): _102.RequestEndBlock;
            toJSON(message: _102.RequestEndBlock): unknown;
            fromPartial(object: Partial<_102.RequestEndBlock>): _102.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _102.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestCommit;
            fromJSON(_: any): _102.RequestCommit;
            toJSON(_: _102.RequestCommit): unknown;
            fromPartial(_: Partial<_102.RequestCommit>): _102.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _102.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestListSnapshots;
            fromJSON(_: any): _102.RequestListSnapshots;
            toJSON(_: _102.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_102.RequestListSnapshots>): _102.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _102.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestOfferSnapshot;
            fromJSON(object: any): _102.RequestOfferSnapshot;
            toJSON(message: _102.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_102.RequestOfferSnapshot>): _102.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _102.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestLoadSnapshotChunk;
            fromJSON(object: any): _102.RequestLoadSnapshotChunk;
            toJSON(message: _102.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_102.RequestLoadSnapshotChunk>): _102.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _102.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RequestApplySnapshotChunk;
            fromJSON(object: any): _102.RequestApplySnapshotChunk;
            toJSON(message: _102.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_102.RequestApplySnapshotChunk>): _102.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _102.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Response;
            fromJSON(object: any): _102.Response;
            toJSON(message: _102.Response): unknown;
            fromPartial(object: Partial<_102.Response>): _102.Response;
        };
        ResponseException: {
            encode(message: _102.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseException;
            fromJSON(object: any): _102.ResponseException;
            toJSON(message: _102.ResponseException): unknown;
            fromPartial(object: Partial<_102.ResponseException>): _102.ResponseException;
        };
        ResponseEcho: {
            encode(message: _102.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseEcho;
            fromJSON(object: any): _102.ResponseEcho;
            toJSON(message: _102.ResponseEcho): unknown;
            fromPartial(object: Partial<_102.ResponseEcho>): _102.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _102.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseFlush;
            fromJSON(_: any): _102.ResponseFlush;
            toJSON(_: _102.ResponseFlush): unknown;
            fromPartial(_: Partial<_102.ResponseFlush>): _102.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _102.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseInfo;
            fromJSON(object: any): _102.ResponseInfo;
            toJSON(message: _102.ResponseInfo): unknown;
            fromPartial(object: Partial<_102.ResponseInfo>): _102.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _102.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseSetOption;
            fromJSON(object: any): _102.ResponseSetOption;
            toJSON(message: _102.ResponseSetOption): unknown;
            fromPartial(object: Partial<_102.ResponseSetOption>): _102.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _102.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseInitChain;
            fromJSON(object: any): _102.ResponseInitChain;
            toJSON(message: _102.ResponseInitChain): unknown;
            fromPartial(object: Partial<_102.ResponseInitChain>): _102.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _102.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseQuery;
            fromJSON(object: any): _102.ResponseQuery;
            toJSON(message: _102.ResponseQuery): unknown;
            fromPartial(object: Partial<_102.ResponseQuery>): _102.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _102.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseBeginBlock;
            fromJSON(object: any): _102.ResponseBeginBlock;
            toJSON(message: _102.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_102.ResponseBeginBlock>): _102.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _102.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseCheckTx;
            fromJSON(object: any): _102.ResponseCheckTx;
            toJSON(message: _102.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_102.ResponseCheckTx>): _102.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _102.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseDeliverTx;
            fromJSON(object: any): _102.ResponseDeliverTx;
            toJSON(message: _102.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_102.ResponseDeliverTx>): _102.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _102.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseEndBlock;
            fromJSON(object: any): _102.ResponseEndBlock;
            toJSON(message: _102.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_102.ResponseEndBlock>): _102.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _102.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseCommit;
            fromJSON(object: any): _102.ResponseCommit;
            toJSON(message: _102.ResponseCommit): unknown;
            fromPartial(object: Partial<_102.ResponseCommit>): _102.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _102.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseListSnapshots;
            fromJSON(object: any): _102.ResponseListSnapshots;
            toJSON(message: _102.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_102.ResponseListSnapshots>): _102.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _102.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseOfferSnapshot;
            fromJSON(object: any): _102.ResponseOfferSnapshot;
            toJSON(message: _102.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_102.ResponseOfferSnapshot>): _102.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _102.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _102.ResponseLoadSnapshotChunk;
            toJSON(message: _102.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_102.ResponseLoadSnapshotChunk>): _102.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _102.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ResponseApplySnapshotChunk;
            fromJSON(object: any): _102.ResponseApplySnapshotChunk;
            toJSON(message: _102.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_102.ResponseApplySnapshotChunk>): _102.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _102.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ConsensusParams;
            fromJSON(object: any): _102.ConsensusParams;
            toJSON(message: _102.ConsensusParams): unknown;
            fromPartial(object: Partial<_102.ConsensusParams>): _102.ConsensusParams;
        };
        BlockParams: {
            encode(message: _102.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.BlockParams;
            fromJSON(object: any): _102.BlockParams;
            toJSON(message: _102.BlockParams): unknown;
            fromPartial(object: Partial<_102.BlockParams>): _102.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _102.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LastCommitInfo;
            fromJSON(object: any): _102.LastCommitInfo;
            toJSON(message: _102.LastCommitInfo): unknown;
            fromPartial(object: Partial<_102.LastCommitInfo>): _102.LastCommitInfo;
        };
        Event: {
            encode(message: _102.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Event;
            fromJSON(object: any): _102.Event;
            toJSON(message: _102.Event): unknown;
            fromPartial(object: Partial<_102.Event>): _102.Event;
        };
        EventAttribute: {
            encode(message: _102.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EventAttribute;
            fromJSON(object: any): _102.EventAttribute;
            toJSON(message: _102.EventAttribute): unknown;
            fromPartial(object: Partial<_102.EventAttribute>): _102.EventAttribute;
        };
        TxResult: {
            encode(message: _102.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.TxResult;
            fromJSON(object: any): _102.TxResult;
            toJSON(message: _102.TxResult): unknown;
            fromPartial(object: Partial<_102.TxResult>): _102.TxResult;
        };
        Validator: {
            encode(message: _102.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Validator;
            fromJSON(object: any): _102.Validator;
            toJSON(message: _102.Validator): unknown;
            fromPartial(object: Partial<_102.Validator>): _102.Validator;
        };
        ValidatorUpdate: {
            encode(message: _102.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ValidatorUpdate;
            fromJSON(object: any): _102.ValidatorUpdate;
            toJSON(message: _102.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_102.ValidatorUpdate>): _102.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _102.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.VoteInfo;
            fromJSON(object: any): _102.VoteInfo;
            toJSON(message: _102.VoteInfo): unknown;
            fromPartial(object: Partial<_102.VoteInfo>): _102.VoteInfo;
        };
        Evidence: {
            encode(message: _102.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Evidence;
            fromJSON(object: any): _102.Evidence;
            toJSON(message: _102.Evidence): unknown;
            fromPartial(object: Partial<_102.Evidence>): _102.Evidence;
        };
        Snapshot: {
            encode(message: _102.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Snapshot;
            fromJSON(object: any): _102.Snapshot;
            toJSON(message: _102.Snapshot): unknown;
            fromPartial(object: Partial<_102.Snapshot>): _102.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _104.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Proof;
            fromJSON(object: any): _104.Proof;
            toJSON(message: _104.Proof): unknown;
            fromPartial(object: Partial<_104.Proof>): _104.Proof;
        };
        ValueOp: {
            encode(message: _104.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ValueOp;
            fromJSON(object: any): _104.ValueOp;
            toJSON(message: _104.ValueOp): unknown;
            fromPartial(object: Partial<_104.ValueOp>): _104.ValueOp;
        };
        DominoOp: {
            encode(message: _104.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DominoOp;
            fromJSON(object: any): _104.DominoOp;
            toJSON(message: _104.DominoOp): unknown;
            fromPartial(object: Partial<_104.DominoOp>): _104.DominoOp;
        };
        ProofOp: {
            encode(message: _104.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ProofOp;
            fromJSON(object: any): _104.ProofOp;
            toJSON(message: _104.ProofOp): unknown;
            fromPartial(object: Partial<_104.ProofOp>): _104.ProofOp;
        };
        ProofOps: {
            encode(message: _104.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ProofOps;
            fromJSON(object: any): _104.ProofOps;
            toJSON(message: _104.ProofOps): unknown;
            fromPartial(object: Partial<_104.ProofOps>): _104.ProofOps;
        };
        PublicKey: {
            encode(message: _103.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PublicKey;
            fromJSON(object: any): _103.PublicKey;
            toJSON(message: _103.PublicKey): unknown;
            fromPartial(object: Partial<_103.PublicKey>): _103.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _105.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.BitArray;
                fromJSON(object: any): _105.BitArray;
                toJSON(message: _105.BitArray): unknown;
                fromPartial(object: Partial<_105.BitArray>): _105.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _106.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ProtocolVersion;
            fromJSON(object: any): _106.ProtocolVersion;
            toJSON(message: _106.ProtocolVersion): unknown;
            fromPartial(object: Partial<_106.ProtocolVersion>): _106.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _106.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.NodeInfo;
            fromJSON(object: any): _106.NodeInfo;
            toJSON(message: _106.NodeInfo): unknown;
            fromPartial(object: Partial<_106.NodeInfo>): _106.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _106.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.NodeInfoOther;
            fromJSON(object: any): _106.NodeInfoOther;
            toJSON(message: _106.NodeInfoOther): unknown;
            fromPartial(object: Partial<_106.NodeInfoOther>): _106.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _106.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PeerInfo;
            fromJSON(object: any): _106.PeerInfo;
            toJSON(message: _106.PeerInfo): unknown;
            fromPartial(object: Partial<_106.PeerInfo>): _106.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _106.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PeerAddressInfo;
            fromJSON(object: any): _106.PeerAddressInfo;
            toJSON(message: _106.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_106.PeerAddressInfo>): _106.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _111.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ValidatorSet;
            fromJSON(object: any): _111.ValidatorSet;
            toJSON(message: _111.ValidatorSet): unknown;
            fromPartial(object: Partial<_111.ValidatorSet>): _111.ValidatorSet;
        };
        Validator: {
            encode(message: _111.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Validator;
            fromJSON(object: any): _111.Validator;
            toJSON(message: _111.Validator): unknown;
            fromPartial(object: Partial<_111.Validator>): _111.Validator;
        };
        SimpleValidator: {
            encode(message: _111.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.SimpleValidator;
            fromJSON(object: any): _111.SimpleValidator;
            toJSON(message: _111.SimpleValidator): unknown;
            fromPartial(object: Partial<_111.SimpleValidator>): _111.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _110.BlockIDFlag;
        blockIDFlagToJSON(object: _110.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _110.SignedMsgType;
        signedMsgTypeToJSON(object: _110.SignedMsgType): string;
        BlockIDFlag: typeof _110.BlockIDFlag;
        BlockIDFlagSDKType: typeof _110.BlockIDFlagSDKType;
        SignedMsgType: typeof _110.SignedMsgType;
        SignedMsgTypeSDKType: typeof _110.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _110.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PartSetHeader;
            fromJSON(object: any): _110.PartSetHeader;
            toJSON(message: _110.PartSetHeader): unknown;
            fromPartial(object: Partial<_110.PartSetHeader>): _110.PartSetHeader;
        };
        Part: {
            encode(message: _110.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Part;
            fromJSON(object: any): _110.Part;
            toJSON(message: _110.Part): unknown;
            fromPartial(object: Partial<_110.Part>): _110.Part;
        };
        BlockID: {
            encode(message: _110.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.BlockID;
            fromJSON(object: any): _110.BlockID;
            toJSON(message: _110.BlockID): unknown;
            fromPartial(object: Partial<_110.BlockID>): _110.BlockID;
        };
        Header: {
            encode(message: _110.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Header;
            fromJSON(object: any): _110.Header;
            toJSON(message: _110.Header): unknown;
            fromPartial(object: Partial<_110.Header>): _110.Header;
        };
        Data: {
            encode(message: _110.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Data;
            fromJSON(object: any): _110.Data;
            toJSON(message: _110.Data): unknown;
            fromPartial(object: Partial<_110.Data>): _110.Data;
        };
        Vote: {
            encode(message: _110.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Vote;
            fromJSON(object: any): _110.Vote;
            toJSON(message: _110.Vote): unknown;
            fromPartial(object: Partial<_110.Vote>): _110.Vote;
        };
        Commit: {
            encode(message: _110.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Commit;
            fromJSON(object: any): _110.Commit;
            toJSON(message: _110.Commit): unknown;
            fromPartial(object: Partial<_110.Commit>): _110.Commit;
        };
        CommitSig: {
            encode(message: _110.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.CommitSig;
            fromJSON(object: any): _110.CommitSig;
            toJSON(message: _110.CommitSig): unknown;
            fromPartial(object: Partial<_110.CommitSig>): _110.CommitSig;
        };
        Proposal: {
            encode(message: _110.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Proposal;
            fromJSON(object: any): _110.Proposal;
            toJSON(message: _110.Proposal): unknown;
            fromPartial(object: Partial<_110.Proposal>): _110.Proposal;
        };
        SignedHeader: {
            encode(message: _110.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.SignedHeader;
            fromJSON(object: any): _110.SignedHeader;
            toJSON(message: _110.SignedHeader): unknown;
            fromPartial(object: Partial<_110.SignedHeader>): _110.SignedHeader;
        };
        LightBlock: {
            encode(message: _110.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LightBlock;
            fromJSON(object: any): _110.LightBlock;
            toJSON(message: _110.LightBlock): unknown;
            fromPartial(object: Partial<_110.LightBlock>): _110.LightBlock;
        };
        BlockMeta: {
            encode(message: _110.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.BlockMeta;
            fromJSON(object: any): _110.BlockMeta;
            toJSON(message: _110.BlockMeta): unknown;
            fromPartial(object: Partial<_110.BlockMeta>): _110.BlockMeta;
        };
        TxProof: {
            encode(message: _110.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.TxProof;
            fromJSON(object: any): _110.TxProof;
            toJSON(message: _110.TxProof): unknown;
            fromPartial(object: Partial<_110.TxProof>): _110.TxProof;
        };
        ConsensusParams: {
            encode(message: _109.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ConsensusParams;
            fromJSON(object: any): _109.ConsensusParams;
            toJSON(message: _109.ConsensusParams): unknown;
            fromPartial(object: Partial<_109.ConsensusParams>): _109.ConsensusParams;
        };
        BlockParams: {
            encode(message: _109.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BlockParams;
            fromJSON(object: any): _109.BlockParams;
            toJSON(message: _109.BlockParams): unknown;
            fromPartial(object: Partial<_109.BlockParams>): _109.BlockParams;
        };
        EvidenceParams: {
            encode(message: _109.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EvidenceParams;
            fromJSON(object: any): _109.EvidenceParams;
            toJSON(message: _109.EvidenceParams): unknown;
            fromPartial(object: Partial<_109.EvidenceParams>): _109.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _109.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ValidatorParams;
            fromJSON(object: any): _109.ValidatorParams;
            toJSON(message: _109.ValidatorParams): unknown;
            fromPartial(object: Partial<_109.ValidatorParams>): _109.ValidatorParams;
        };
        VersionParams: {
            encode(message: _109.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VersionParams;
            fromJSON(object: any): _109.VersionParams;
            toJSON(message: _109.VersionParams): unknown;
            fromPartial(object: Partial<_109.VersionParams>): _109.VersionParams;
        };
        HashedParams: {
            encode(message: _109.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.HashedParams;
            fromJSON(object: any): _109.HashedParams;
            toJSON(message: _109.HashedParams): unknown;
            fromPartial(object: Partial<_109.HashedParams>): _109.HashedParams;
        };
        Evidence: {
            encode(message: _108.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Evidence;
            fromJSON(object: any): _108.Evidence;
            toJSON(message: _108.Evidence): unknown;
            fromPartial(object: Partial<_108.Evidence>): _108.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _108.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DuplicateVoteEvidence;
            fromJSON(object: any): _108.DuplicateVoteEvidence;
            toJSON(message: _108.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_108.DuplicateVoteEvidence>): _108.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _108.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.LightClientAttackEvidence;
            fromJSON(object: any): _108.LightClientAttackEvidence;
            toJSON(message: _108.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_108.LightClientAttackEvidence>): _108.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _108.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EvidenceList;
            fromJSON(object: any): _108.EvidenceList;
            toJSON(message: _108.EvidenceList): unknown;
            fromPartial(object: Partial<_108.EvidenceList>): _108.EvidenceList;
        };
        Block: {
            encode(message: _107.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Block;
            fromJSON(object: any): _107.Block;
            toJSON(message: _107.Block): unknown;
            fromPartial(object: Partial<_107.Block>): _107.Block;
        };
    };
    const version: {
        App: {
            encode(message: _112.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.App;
            fromJSON(object: any): _112.App;
            toJSON(message: _112.App): unknown;
            fromPartial(object: Partial<_112.App>): _112.App;
        };
        Consensus: {
            encode(message: _112.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Consensus;
            fromJSON(object: any): _112.Consensus;
            toJSON(message: _112.Consensus): unknown;
            fromPartial(object: Partial<_112.Consensus>): _112.Consensus;
        };
    };
}
