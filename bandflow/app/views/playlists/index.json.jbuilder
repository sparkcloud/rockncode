json.array!(@playlists) do |playlist|
  json.extract! playlist, :id, :title, :artist
  json.url playlist_url(playlist, format: :json)
end
