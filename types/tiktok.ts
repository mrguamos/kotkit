export interface AvatarLarger {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface AvatarThumb {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface AvatarMedium {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface ShareQrcodeUrl {
  uri: string
  url_list: any[]
  width: number
  height: number
}

export interface ShareInfo {
  share_url: string
  share_weibo_desc: string
  share_desc: string
  share_title: string
  share_qrcode_url: ShareQrcodeUrl
  share_title_myself: string
  share_title_other: string
  share_desc_info: string
  now_invitation_card_image_urls?: any
}

export interface VideoIcon {
  uri: string
  url_list: any[]
  width: number
  height: number
}

export interface CoverUrl {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface Avatar168x168 {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface Avatar300x300 {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface MatchedFriend {
  video_items?: any
}

export interface Author {
  uid: string
  short_id: string
  nickname: string
  gender: number
  signature: string
  avatar_larger: AvatarLarger
  avatar_thumb: AvatarThumb
  avatar_medium: AvatarMedium
  birthday: string
  follow_status: number
  aweme_count: number
  following_count: number
  follower_count: number
  favoriting_count: number
  total_favorited: number
  is_block: boolean
  hide_search: boolean
  custom_verify: string
  unique_id: string
  bind_phone: string
  special_lock: number
  need_recommend: number
  has_facebook_token: boolean
  has_twitter_token: boolean
  fb_expire_time: number
  tw_expire_time: number
  has_youtube_token: boolean
  youtube_expire_time: number
  room_id: number
  live_verify: number
  authority_status: number
  verify_info: string
  shield_follow_notice: number
  shield_digg_notice: number
  shield_comment_notice: number
  share_info: ShareInfo
  with_commerce_entry: boolean
  verification_type: number
  enterprise_verify_reason: string
  is_ad_fake: boolean
  followers_detail?: any
  region: string
  account_region: string
  commerce_user_level: number
  live_agreement: number
  platform_sync_info?: any
  with_shop_entry: boolean
  is_discipline_member: boolean
  secret: number
  has_orders: boolean
  prevent_download: boolean
  show_image_bubble: boolean
  geofencing: any[]
  unique_id_modify_time: number
  video_icon: VideoIcon
  ins_id: string
  google_account: string
  youtube_channel_id: string
  youtube_channel_title: string
  apple_account: number
  with_fusion_shop_entry: boolean
  is_phone_binded: boolean
  accept_private_policy: boolean
  twitter_id: string
  twitter_name: string
  user_canceled: boolean
  has_email: boolean
  live_agreement_time: number
  status: number
  create_time: number
  avatar_uri: string
  follower_status: number
  comment_setting: number
  duet_setting: number
  reflow_page_gid: number
  reflow_page_uid: number
  user_rate: number
  download_setting: number
  download_prompt_ts: number
  react_setting: number
  live_commerce: boolean
  cover_url: CoverUrl[]
  language: string
  has_insights: boolean
  share_qrcode_uri: string
  item_list?: any
  user_mode: number
  user_period: number
  is_star: boolean
  cv_level: string
  type_label: any[]
  ad_cover_url?: any
  comment_filter_status: number
  avatar_168x168: Avatar168x168
  avatar_300x300: Avatar300x300
  relative_users?: any
  cha_list?: any
  sec_uid: string
  need_points?: any
  homepage_bottom_toast?: any
  can_set_geofencing?: any
  white_cover_url?: any
  user_tags?: any
  stitch_setting: number
  bold_fields?: any
  search_highlight?: any
  mutual_relation_avatars?: any
  events?: any
  matched_friend: MatchedFriend
  advance_feature_item_order?: any
  advanced_feature_info?: any
  user_profile_guide?: any
  shield_edit_field_info?: any
  friends_status: number
  can_message_follow_status_list?: any
  account_labels?: any
  social_info: string
  qa_status?: number
}

export interface CoverHd {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface CoverLarge {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface CoverMedium {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface CoverThumb {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface PlayUrl {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface StrongBeatUrl {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface AvatarThumb2 {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface AvatarMedium2 {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface AvatarLarge {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface Music {
  id: any
  id_str: string
  title: string
  author: string
  album: string
  cover_hd: CoverHd
  cover_large: CoverLarge
  cover_medium: CoverMedium
  cover_thumb: CoverThumb
  play_url: PlayUrl
  schema_url: string
  source_platform: number
  start_time: number
  end_time: number
  duration: number
  extra: string
  user_count: number
  position?: any
  collect_stat: number
  status: number
  offline_desc: string
  owner_nickname: string
  is_original: boolean
  mid: string
  binded_challenge_id: number
  redirect: boolean
  is_restricted: boolean
  author_deleted: boolean
  is_del_video: boolean
  is_video_self_see: boolean
  owner_handle: string
  author_position?: any
  prevent_download: boolean
  strong_beat_url: StrongBeatUrl
  prevent_item_download_status: number
  external_song_info: any[]
  preview_start_time: number
  preview_end_time: number
  is_commerce_music: boolean
  is_original_sound: boolean
  artists?: any
  lyric_short_position?: any
  mute_share: boolean
  tag_list?: any
  is_author_artist: boolean
  is_pgc: boolean
  search_highlight?: any
  multi_bit_rate_play_info?: any
  owner_id: string
  sec_uid: string
  avatar_thumb: AvatarThumb2
  avatar_medium: AvatarMedium2
  avatar_large: AvatarLarge
}

export interface Author2 {
  followers_detail?: any
  platform_sync_info?: any
  geofencing?: any
  cover_url?: any
  item_list?: any
  type_label?: any
  ad_cover_url?: any
  relative_users?: any
  cha_list?: any
  need_points?: any
  homepage_bottom_toast?: any
  can_set_geofencing?: any
  white_cover_url?: any
  user_tags?: any
  bold_fields?: any
  search_highlight?: any
  mutual_relation_avatars?: any
  events?: any
  advance_feature_item_order?: any
  advanced_feature_info?: any
  user_profile_guide?: any
  shield_edit_field_info?: any
  can_message_follow_status_list?: any
  account_labels?: any
}

export interface ShareInfo2 {
  share_url: string
  share_weibo_desc: string
  share_desc: string
  share_title: string
  bool_persist: number
  share_title_myself: string
  share_title_other: string
  share_signature_url: string
  share_signature_desc: string
  share_quote: string
  share_desc_info: string
  now_invitation_card_image_urls?: any
}

export interface ChaList {
  cid: string
  cha_name: string
  desc: string
  schema: string
  author: Author2
  user_count: number
  share_info: ShareInfo2
  connect_music: any[]
  type: number
  sub_type: number
  is_pgcshow: boolean
  collect_stat: number
  is_challenge: number
  view_count: number
  is_commerce: boolean
  hashtag_profile: string
  cha_attrs?: any
  banner_list?: any
  show_items?: any
  search_highlight?: any
}

export interface PlayAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size: number
  file_hash: string
}

export interface Cover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface DynamicCover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface OriginCover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface DownloadAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  data_size: number
}

export interface PlayAddr2 {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size: number
  file_hash: string
}

export interface BitRate {
  gear_name: string
  quality_type: number
  bit_rate: number
  play_addr: PlayAddr2
  is_h265: number
  is_bytevc1: number
  dub_infos?: any
  HDR_type: string
  HDR_bit: string
}

export interface DownloadSuffixLogoAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  data_size: number
}

export interface Video {
  play_addr: PlayAddr
  cover: Cover
  height: number
  width: number
  dynamic_cover: DynamicCover
  origin_cover: OriginCover
  ratio: string
  download_addr: DownloadAddr
  has_watermark: boolean
  bit_rate: BitRate[]
  duration: number
  is_h265: number
  cdn_url_expired: number
  need_set_token: boolean
  tags?: any
  big_thumbs?: any
  is_bytevc1: number
  meta: string
  source_HDR_type: number
  download_suffix_logo_addr: DownloadSuffixLogoAddr
  has_download_suffix_logo_addr?: boolean
  misc_download_addrs: string
}

export interface Statistics {
  aweme_id: string
  comment_count: number
  digg_count: number
  download_count: number
  play_count: number
  share_count: number
  forward_count: number
  lose_count: number
  lose_comment_count: number
  whatsapp_share_count: number
  collect_count: number
}

export interface Status {
  aweme_id: string
  is_delete: boolean
  allow_share: boolean
  allow_comment: boolean
  is_private: boolean
  with_goods: boolean
  private_status: number
  in_reviewing: boolean
  reviewed: number
  self_see: boolean
  is_prohibited: boolean
  download_status: number
}

export interface TextExtra {
  start: number
  end: number
  user_id: string
  type: number
  hashtag_name: string
  hashtag_id: string
  is_commerce: boolean
  sec_uid: string
  sub_type?: number
}

export interface LabelTop {
  uri: string
  url_list: string[]
  width: number
  height: number
}

export interface ShareInfo3 {
  share_url: string
  share_weibo_desc: string
  share_desc: string
  share_title: string
  bool_persist: number
  share_title_myself: string
  share_title_other: string
  share_link_desc: string
  share_signature_url: string
  share_signature_desc: string
  share_quote: string
  share_desc_info: string
  now_invitation_card_image_urls?: any
}

export interface RiskInfos {
  vote: boolean
  warn: boolean
  risk_sink: boolean
  type: number
  content: string
}

export interface UserAvatar {
  uri: string
  url_list: string[]
}

export interface InviteShareInfo {
  share_url: string
  share_desc: string
  share_title: string
  bool_persist: number
  share_title_myself: string
  share_title_other: string
  share_signature_url: string
  share_signature_desc: string
  share_quote: string
  share_desc_info: string
  now_invitation_card_image_urls?: any
}

export interface QuestionInfo {
  question_id: number
  user_id: number
  item_id: number
  content: string
  username: string
  user_avatar: UserAvatar
  sec_uid: string
  invite_share_info: InviteShareInfo
  extra: string
}

export interface TextStickerInfo {
  text_size: number
  text_color: string
  bg_color: string
  text_language: string
  alignment: number
  source_width: number
  source_height: number
}

export interface InteractionSticker {
  type: number
  index: number
  track_info: string
  attr: string
  question_info: QuestionInfo
  text_info: string
  text_sticker_info: TextStickerInfo
}

export interface VideoControl {
  allow_download: boolean
  share_type: number
  show_progress_bar: number
  draft_progress_bar: number
  allow_duet: boolean
  allow_react: boolean
  prevent_download_type: number
  allow_dynamic_wallpaper: boolean
  timer_status: number
  allow_music: boolean
  allow_stitch: boolean
}

export interface ContentDescExtra {
  start: number
  end: number
  type: number
  hashtag_name: string
  hashtag_id: string
  is_commerce: boolean
  line_idx: number
}

export interface StickerDetail {
  id: string
  name: string
  children?: any
  owner_id: string
  tags?: any
  sec_uid: string
  linked_anchors?: any
  attributions?: any
}

export interface AwemeList {
  aweme_id: string
  desc: string
  create_time: number
  author: Author
  music: Music
  cha_list: ChaList[]
  video: Video
  share_url: string
  user_digged: number
  statistics: Statistics
  status: Status
  rate: number
  text_extra: TextExtra[]
  is_top: number
  label_top: LabelTop
  share_info: ShareInfo3
  distance: string
  video_labels: any[]
  is_vr: boolean
  is_ads: boolean
  duration: number
  aweme_type: number
  cmt_swt: boolean
  image_infos?: any
  risk_infos: RiskInfos
  is_relieve: boolean
  sort_label: string
  position?: any
  uniqid_position?: any
  author_user_id: any
  bodydance_score: number
  geofencing: any[]
  is_hash_tag: number
  is_pgcshow: boolean
  region: string
  video_text: any[]
  collect_stat: number
  label_top_text?: any
  group_id: string
  prevent_download: boolean
  nickname_position?: any
  challenge_position?: any
  item_comment_settings: number
  with_promotional_music: boolean
  long_video?: any
  item_duet: number
  item_react: number
  desc_language: string
  interaction_stickers: InteractionSticker[]
  misc_info: string
  origin_comment_ids?: any
  commerce_config_data?: any
  distribute_type: number
  video_control: VideoControl
  anchors?: any
  hybrid_label?: any
  with_survey: boolean
  geofencing_regions?: any
  cover_labels?: any
  mask_infos: any[]
  search_highlight?: any
  playlist_blocked: boolean
  green_screen_materials?: any
  question_list?: any
  content_desc: string
  content_desc_extra: ContentDescExtra[]
  products_info?: any
  follow_up_publish_from_id: any
  disable_search_trending_bar: boolean
  music_begin_time_in_ms: number
  music_end_time_in_ms: number
  item_distribute_source: string
  item_source_category: number
  branded_content_accounts?: any
  is_description_translatable: boolean
  stickers: string
  sticker_detail: StickerDetail
}

export interface Extra {
  now: number
  fatal_item_ids?: any
}

export interface LogPb {
  impr_id: string
}

export interface RootObject {
  status_code: number
  min_cursor: number
  max_cursor: number
  has_more: number
  aweme_list: AwemeList[]
  home_model: number
  refresh_clear: number
  extra: Extra
  log_pb: LogPb
  preload_ads: any[]
  preload_awemes?: any
}

