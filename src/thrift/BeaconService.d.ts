//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

import thrift = require('thrift');
import Thrift = thrift.Thrift;
import Q = thrift.Q;
import Int64 = require('node-int64');

import ttypes = require('./talk_types');
import AccountMigrationCheckType = ttypes.AccountMigrationCheckType
import AccountMigrationPincodeType = ttypes.AccountMigrationPincodeType
import ApplicationType = ttypes.ApplicationType
import AsymmetricKeyAlgorithm = ttypes.AsymmetricKeyAlgorithm
import BeaconNotificationType = ttypes.BeaconNotificationType
import BotType = ttypes.BotType
import BuddyBannerLinkType = ttypes.BuddyBannerLinkType
import BuddyCollectionType = ttypes.BuddyCollectionType
import BuddyOnAirLabel = ttypes.BuddyOnAirLabel
import BuddyOnAirType = ttypes.BuddyOnAirType
import BuddyProfilePopupType = ttypes.BuddyProfilePopupType
import BuddyResultState = ttypes.BuddyResultState
import BuddySearchRequestSource = ttypes.BuddySearchRequestSource
import BuddyStatusBarDisplayType = ttypes.BuddyStatusBarDisplayType
import CarrierCode = ttypes.CarrierCode
import ChannelConfiguration = ttypes.ChannelConfiguration
import ChannelErrorCode = ttypes.ChannelErrorCode
import ChannelPermission = ttypes.ChannelPermission
import ChannelSyncTarget = ttypes.ChannelSyncTarget
import ChannelSyncType = ttypes.ChannelSyncType
import CommitMessageResultCode = ttypes.CommitMessageResultCode
import ContactAttribute = ttypes.ContactAttribute
import ContactCategory = ttypes.ContactCategory
import ContactRelation = ttypes.ContactRelation
import ContactSetting = ttypes.ContactSetting
import ContactStatus = ttypes.ContactStatus
import ContactType = ttypes.ContactType
import ContentType = ttypes.ContentType
import CustomMode = ttypes.CustomMode
import DeviceBooleanStateKey = ttypes.DeviceBooleanStateKey
import DeviceStringStateKey = ttypes.DeviceStringStateKey
import Diff = ttypes.Diff
import EmailConfirmationStatus = ttypes.EmailConfirmationStatus
import EmailConfirmationType = ttypes.EmailConfirmationType
import ErrorCode = ttypes.ErrorCode
import ExtendedProfileAttribute = ttypes.ExtendedProfileAttribute
import FeatureType = ttypes.FeatureType
import FriendRequestDirection = ttypes.FriendRequestDirection
import FriendRequestMethod = ttypes.FriendRequestMethod
import FriendRequestStatus = ttypes.FriendRequestStatus
import GroupAttribute = ttypes.GroupAttribute
import GroupCallMediaType = ttypes.GroupCallMediaType
import GroupPreferenceAttribute = ttypes.GroupPreferenceAttribute
import IdentityProvider = ttypes.IdentityProvider
import LoginResultType = ttypes.LoginResultType
import LoginType = ttypes.LoginType
import MessageRelationType = ttypes.MessageRelationType
import MIDType = ttypes.MIDType
import ModificationType = ttypes.ModificationType
import NotificationItemFetchMode = ttypes.NotificationItemFetchMode
import NotificationStatus = ttypes.NotificationStatus
import NotificationType = ttypes.NotificationType
import OpStatus = ttypes.OpStatus
import OpType = ttypes.OpType
import PaidCallerIdStatus = ttypes.PaidCallerIdStatus
import PaidCallProductType = ttypes.PaidCallProductType
import PaidCallType = ttypes.PaidCallType
import PayloadType = ttypes.PayloadType
import PaymentPgType = ttypes.PaymentPgType
import PaymentType = ttypes.PaymentType
import PersonalInfo = ttypes.PersonalInfo
import PlaceSearchProvider = ttypes.PlaceSearchProvider
import PointErrorCode = ttypes.PointErrorCode
import PrivacyLevelType = ttypes.PrivacyLevelType
import ProductBannerLinkType = ttypes.ProductBannerLinkType
import ProductEventType = ttypes.ProductEventType
import ProfileAttribute = ttypes.ProfileAttribute
import PublicKeychainStatus = ttypes.PublicKeychainStatus
import PublicType = ttypes.PublicType
import RedirectType = ttypes.RedirectType
import RegistrationType = ttypes.RegistrationType
import ReportCategory = ttypes.ReportCategory
import ReservedMessageSessionId = ttypes.ReservedMessageSessionId
import RoomAttribute = ttypes.RoomAttribute
import SecurityCenterSettingsType = ttypes.SecurityCenterSettingsType
import ServiceCode = ttypes.ServiceCode
import SettingsAttribute = ttypes.SettingsAttribute
import SettingsAttributeEx = ttypes.SettingsAttributeEx
import SnsIdType = ttypes.SnsIdType
import SpammerReason = ttypes.SpammerReason
import SpotCategory = ttypes.SpotCategory
import StickerResourceType = ttypes.StickerResourceType
import SuggestDictionaryIncrementStatus = ttypes.SuggestDictionaryIncrementStatus
import SyncActionType = ttypes.SyncActionType
import SyncCategory = ttypes.SyncCategory
import SyncTriggerReason = ttypes.SyncTriggerReason
import TMessageBoxStatus = ttypes.TMessageBoxStatus
import TrackingType = ttypes.TrackingType
import UnregistrationReason = ttypes.UnregistrationReason
import UserAgeType = ttypes.UserAgeType
import UserStatus = ttypes.UserStatus
import VerificationMethod = ttypes.VerificationMethod
import VerificationResult = ttypes.VerificationResult
import WapInvitationType = ttypes.WapInvitationType
import LoginQrCode_ErrorCode = ttypes.LoginQrCode_ErrorCode
import ChannelException = ttypes.ChannelException
import PointException = ttypes.PointException
import ShouldSyncException = ttypes.ShouldSyncException
import TalkException = ttypes.TalkException
import SecondaryQrCodeException = ttypes.SecondaryQrCodeException
import AgeCheckDocomoResult = ttypes.AgeCheckDocomoResult
import AgeCheckRequestResult = ttypes.AgeCheckRequestResult
import AnalyticsInfo = ttypes.AnalyticsInfo
import Announcement = ttypes.Announcement
import ApprovedChannelInfo = ttypes.ApprovedChannelInfo
import ApprovedChannelInfos = ttypes.ApprovedChannelInfos
import AuthQrcode = ttypes.AuthQrcode
import Balance = ttypes.Balance
import BanPage = ttypes.BanPage
import BeaconBackgroundNotification = ttypes.BeaconBackgroundNotification
import BeaconCondition = ttypes.BeaconCondition
import BeaconLayerInfoAndActions = ttypes.BeaconLayerInfoAndActions
import BeaconQueryResponse = ttypes.BeaconQueryResponse
import BeaconTouchActions = ttypes.BeaconTouchActions
import BotUseInfo = ttypes.BotUseInfo
import BuddyBanner = ttypes.BuddyBanner
import BuddyCategoryEntry = ttypes.BuddyCategoryEntry
import BuddyCategoryView = ttypes.BuddyCategoryView
import BuddyChatBar = ttypes.BuddyChatBar
import BuddyChatBarItem = ttypes.BuddyChatBarItem
import BuddyCollection = ttypes.BuddyCollection
import BuddyCollectionEntry = ttypes.BuddyCollectionEntry
import BuddyDetail = ttypes.BuddyDetail
import BuddyList = ttypes.BuddyList
import BuddyMessageRequest = ttypes.BuddyMessageRequest
import BuddyNewsEntry = ttypes.BuddyNewsEntry
import BuddyNewsView = ttypes.BuddyNewsView
import BuddyOnAir = ttypes.BuddyOnAir
import BuddyOnAirUrls = ttypes.BuddyOnAirUrls
import BuddyProfile = ttypes.BuddyProfile
import BuddyProfilePopup = ttypes.BuddyProfilePopup
import BuddyRichMenuChatBarItem = ttypes.BuddyRichMenuChatBarItem
import BuddyRichMenuContents = ttypes.BuddyRichMenuContents
import BuddySearchResult = ttypes.BuddySearchResult
import BuddyStatusBar = ttypes.BuddyStatusBar
import BuddyTopView = ttypes.BuddyTopView
import BuddyWebChatBarItem = ttypes.BuddyWebChatBarItem
import BuddyWidget = ttypes.BuddyWidget
import BuddyWidgetListCharBarItem = ttypes.BuddyWidgetListCharBarItem
import CallHost = ttypes.CallHost
import ChannelDomain = ttypes.ChannelDomain
import ChannelDomains = ttypes.ChannelDomains
import ChannelIdWithLastUpdated = ttypes.ChannelIdWithLastUpdated
import ChannelInfo = ttypes.ChannelInfo
import ChannelInfos = ttypes.ChannelInfos
import ChannelNotificationSetting = ttypes.ChannelNotificationSetting
import ChannelProvider = ttypes.ChannelProvider
import ChannelSettings = ttypes.ChannelSettings
import ChannelSyncDatas = ttypes.ChannelSyncDatas
import ChannelToken = ttypes.ChannelToken
import ClientLastStatus = ttypes.ClientLastStatus
import Coin = ttypes.Coin
import CoinHistory = ttypes.CoinHistory
import CoinHistoryCondition = ttypes.CoinHistoryCondition
import CoinHistoryResult = ttypes.CoinHistoryResult
import CoinPayLoad = ttypes.CoinPayLoad
import CoinProductItem = ttypes.CoinProductItem
import CoinPurchaseConfirm = ttypes.CoinPurchaseConfirm
import CoinPurchaseReservation = ttypes.CoinPurchaseReservation
import CoinUseReservation = ttypes.CoinUseReservation
import CoinUseReservationItem = ttypes.CoinUseReservationItem
import CommitMessageResult = ttypes.CommitMessageResult
import CommitSendMessagesToMidRequest = ttypes.CommitSendMessagesToMidRequest
import CommitSendMessagesToMidResponse = ttypes.CommitSendMessagesToMidResponse
import CompactContact = ttypes.CompactContact
import Configurations = ttypes.Configurations
import Contact = ttypes.Contact
import ContactModification = ttypes.ContactModification
import ContactRegistration = ttypes.ContactRegistration
import ContactReport = ttypes.ContactReport
import ContactReportResult = ttypes.ContactReportResult
import ContactTransition = ttypes.ContactTransition
import DeviceInfo = ttypes.DeviceInfo
import E2EEGroupSharedKey = ttypes.E2EEGroupSharedKey
import E2EEKey = ttypes.E2EEKey
import E2EEKeyChain = ttypes.E2EEKeyChain
import E2EENegotiationResult = ttypes.E2EENegotiationResult
import E2EEPublicKey = ttypes.E2EEPublicKey
import EmailConfirmation = ttypes.EmailConfirmation
import EmailConfirmationResult = ttypes.EmailConfirmationResult
import EmailConfirmationSession = ttypes.EmailConfirmationSession
import ExtendedProfile = ttypes.ExtendedProfile
import ExtendedProfileBirthday = ttypes.ExtendedProfileBirthday
import FriendChannelMatricesResponse = ttypes.FriendChannelMatricesResponse
import FriendChannelMatrix = ttypes.FriendChannelMatrix
import FriendRequest = ttypes.FriendRequest
import FriendRequestsInfo = ttypes.FriendRequestsInfo
import Geolocation = ttypes.Geolocation
import GetBalanceRequest = ttypes.GetBalanceRequest
import GetBalanceResponse = ttypes.GetBalanceResponse
import GetCoinHistoryRequest = ttypes.GetCoinHistoryRequest
import GetCoinHistoryResponse = ttypes.GetCoinHistoryResponse
import GetCoinProductsRequest = ttypes.GetCoinProductsRequest
import GetCoinProductsResponse = ttypes.GetCoinProductsResponse
import GetTotalCoinBalanceRequest = ttypes.GetTotalCoinBalanceRequest
import GetTotalCoinBalanceResponse = ttypes.GetTotalCoinBalanceResponse
import Group = ttypes.Group
import GroupCall = ttypes.GroupCall
import GroupCallRoute = ttypes.GroupCallRoute
import GroupPreference = ttypes.GroupPreference
import IdentityCredential = ttypes.IdentityCredential
import Location = ttypes.Location
import LoginRequest = ttypes.LoginRequest
import LoginResult = ttypes.LoginResult
import LoginSession = ttypes.LoginSession
import Message = ttypes.Message
import MessageBoxV2MessageId = ttypes.MessageBoxV2MessageId
import MessageCommitResult = ttypes.MessageCommitResult
import MessageStoreResult = ttypes.MessageStoreResult
import MetaProfile = ttypes.MetaProfile
import MoretabRecommend = ttypes.MoretabRecommend
import MoretabRecommendAccount = ttypes.MoretabRecommendAccount
import NearbyEntry = ttypes.NearbyEntry
import NotiCenterEventData = ttypes.NotiCenterEventData
import NotificationFetchResult = ttypes.NotificationFetchResult
import NotificationItem = ttypes.NotificationItem
import Operation = ttypes.Operation
import OTPResult = ttypes.OTPResult
import PaidCallAdCountry = ttypes.PaidCallAdCountry
import PaidCallAdResult = ttypes.PaidCallAdResult
import PaidCallBalance = ttypes.PaidCallBalance
import PaidCallCurrencyExchangeRate = ttypes.PaidCallCurrencyExchangeRate
import PaidCallDialing = ttypes.PaidCallDialing
import PaidCallHistory = ttypes.PaidCallHistory
import PaidCallHistoryResult = ttypes.PaidCallHistoryResult
import PaidCallMetadataResult = ttypes.PaidCallMetadataResult
import PaidCallRedeemResult = ttypes.PaidCallRedeemResult
import PaidCallResponse = ttypes.PaidCallResponse
import PaidCallUserRate = ttypes.PaidCallUserRate
import PaymentReservation = ttypes.PaymentReservation
import PaymentReservationResult = ttypes.PaymentReservationResult
import PhoneInfoForChannel = ttypes.PhoneInfoForChannel
import PhoneVerificationResult = ttypes.PhoneVerificationResult
import PlaceSearchInfo = ttypes.PlaceSearchInfo
import PrivateBotMessage = ttypes.PrivateBotMessage
import Product = ttypes.Product
import ProductCategory = ttypes.ProductCategory
import ProductList = ttypes.ProductList
import ProductSimple = ttypes.ProductSimple
import ProductSimpleList = ttypes.ProductSimpleList
import Profile = ttypes.Profile
import ProximityMatchCandidateEntry = ttypes.ProximityMatchCandidateEntry
import ProximityMatchCandidateResult = ttypes.ProximityMatchCandidateResult
import PublicKey = ttypes.PublicKey
import PublicKeychain = ttypes.PublicKeychain
import QueueingPolicy = ttypes.QueueingPolicy
import RegisterWithPhoneNumberResult = ttypes.RegisterWithPhoneNumberResult
import RegisterWithSnsIdResult = ttypes.RegisterWithSnsIdResult
import RequestTokenResponse = ttypes.RequestTokenResponse
import RingbackTone = ttypes.RingbackTone
import Room = ttypes.Room
import RSAKey = ttypes.RSAKey
import SecurityCenterResult = ttypes.SecurityCenterResult
import SendBuddyMessageResult = ttypes.SendBuddyMessageResult
import SendPostbackRequest = ttypes.SendPostbackRequest
import SetBuddyOnAirResult = ttypes.SetBuddyOnAirResult
import Settings = ttypes.Settings
import ShopUpdates = ttypes.ShopUpdates
import SIMInfo = ttypes.SIMInfo
import SimpleChannelClient = ttypes.SimpleChannelClient
import SimpleChannelContact = ttypes.SimpleChannelContact
import SnsFriend = ttypes.SnsFriend
import SnsFriendContactRegistration = ttypes.SnsFriendContactRegistration
import SnsFriendModification = ttypes.SnsFriendModification
import SnsFriends = ttypes.SnsFriends
import SnsIdUserStatus = ttypes.SnsIdUserStatus
import SnsProfile = ttypes.SnsProfile
import SpotItem = ttypes.SpotItem
import SpotNearbyItem = ttypes.SpotNearbyItem
import SpotNearbyResponse = ttypes.SpotNearbyResponse
import SpotPhoneNumberResponse = ttypes.SpotPhoneNumberResponse
import StickerIdRange = ttypes.StickerIdRange
import SuggestDictionary = ttypes.SuggestDictionary
import SuggestDictionaryIncrements = ttypes.SuggestDictionaryIncrements
import SuggestDictionaryRevisions = ttypes.SuggestDictionaryRevisions
import SuggestDictionarySettings = ttypes.SuggestDictionarySettings
import SuggestItemDictionaryIncrement = ttypes.SuggestItemDictionaryIncrement
import SuggestItemDictionaryRevision = ttypes.SuggestItemDictionaryRevision
import SuggestTagDictionaryIncrement = ttypes.SuggestTagDictionaryIncrement
import SuggestTagDictionaryRevision = ttypes.SuggestTagDictionaryRevision
import SyncParamContact = ttypes.SyncParamContact
import SyncParamMid = ttypes.SyncParamMid
import SyncRelations = ttypes.SyncRelations
import SyncScope = ttypes.SyncScope
import SystemConfiguration = ttypes.SystemConfiguration
import Ticket = ttypes.Ticket
import TMessageBox = ttypes.TMessageBox
import TMessageBoxWrapUp = ttypes.TMessageBoxWrapUp
import TMessageBoxWrapUpResponse = ttypes.TMessageBoxWrapUpResponse
import TMessageReadRange = ttypes.TMessageReadRange
import TMessageReadRangeEntry = ttypes.TMessageReadRangeEntry
import UnregisterBuddyResult = ttypes.UnregisterBuddyResult
import UpdateBuddyProfileResult = ttypes.UpdateBuddyProfileResult
import UserAuthStatus = ttypes.UserAuthStatus
import UserTicketResponse = ttypes.UserTicketResponse
import ValidateContactsResult = ttypes.ValidateContactsResult
import VerificationSessionData = ttypes.VerificationSessionData
import WapInvitation = ttypes.WapInvitation
import LoginQrCode_CreateQrSessionResponse = ttypes.LoginQrCode_CreateQrSessionResponse
import LoginQrCode_CreateQrCodeRequest = ttypes.LoginQrCode_CreateQrCodeRequest
import LoginQrCode_CreateQrCodeResponse = ttypes.LoginQrCode_CreateQrCodeResponse
import LoginQrCode_VerifyCertificateRequest = ttypes.LoginQrCode_VerifyCertificateRequest
import LoginQrCode_CreatePinCodeRequest = ttypes.LoginQrCode_CreatePinCodeRequest
import LoginQrCode_CreatePinCodeResponse = ttypes.LoginQrCode_CreatePinCodeResponse
import LoginQrCode_QrCodeLoginRequest = ttypes.LoginQrCode_QrCodeLoginRequest
import LoginQrCode_QrCodeLoginResponse = ttypes.LoginQrCode_QrCodeLoginResponse
import LoginQrCode_CheckQrCodeVerifiedRequest = ttypes.LoginQrCode_CheckQrCodeVerifiedRequest
import LoginQrCode_CheckPinCodeVerifiedRequest = ttypes.LoginQrCode_CheckPinCodeVerifiedRequest

declare class Client {
    private output: thrift.TTransport;
    private pClass: thrift.TProtocol;
    private _seqid: number;

    constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

    notifyBeaconDetected(hwid: string, secureMessage: string, notificationType: BeaconNotificationType): Promise<void>;

    notifyBeaconDetected(hwid: string, secureMessage: string, notificationType: BeaconNotificationType, callback?: (error: ttypes.TalkException, response: void)=>void): void;
  }

declare class Processor {
  private _handler: object;

  constructor(handler: object);
  process(input: thrift.TProtocol, output: thrift.TProtocol): void;
    process_notifyBeaconDetected(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
