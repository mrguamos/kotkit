export interface RootObject {
  aweme_list: AwemeList[]
}

export interface PlayAddr {
  url_list: string[]
}

export interface AwemeList {
  video: Video
}

export interface Video {
  play_addr: PlayAddr
}
